import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Json } from '@/integrations/supabase/types';
import type { UserRole } from './auth-types';

export interface AuditEvent {
  id: string; category: 'auth' | 'booking' | 'admin' | 'shift' | 'form' | 'system';
  action: string; summary: string; at: string;
  actor: { username: string; role: UserRole; adminId?: string | null };
  details?: Record<string, unknown>;
}

const AuditContext = createContext<{ events: AuditEvent[]; log: (e: Omit<AuditEvent, 'id' | 'at'>) => void } | undefined>(undefined);

function rowToEvent(r: any): AuditEvent {
  return {
    id: r.id, category: r.category, action: r.action, summary: r.summary, at: r.created_at,
    actor: { username: r.actor_username, role: r.actor_role, adminId: r.actor_staff_id },
    details: r.metadata && Object.keys(r.metadata).length ? r.metadata : undefined,
  };
}

export function AuditProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<AuditEvent[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('audit_log').select('*').order('created_at', { ascending: false }).limit(500);
      setEvents((data ?? []).map(rowToEvent));
    })();

    const channel = supabase.channel('audit_log-realtime')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'audit_log' }, (payload) => {
        setEvents((prev) => [rowToEvent(payload.new), ...prev].slice(0, 500));
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const log = useCallback((e: Omit<AuditEvent, 'id' | 'at'>) => {
    void supabase.from('audit_log').insert({
      actor_staff_id: e.actor.adminId ?? null, actor_username: e.actor.username, actor_role: e.actor.role,
      category: e.category, action: e.action, summary: e.summary, metadata: (e.details ?? {}) as Json,
    });
  }, []);

  const value = useMemo(() => ({ events, log }), [events, log]);
  return <AuditContext.Provider value={value}>{children}</AuditContext.Provider>;
}

export function useAudit() {
  const ctx = useContext(AuditContext);
  if (!ctx) throw new Error('useAudit must be used within AuditProvider');
  return ctx;
}