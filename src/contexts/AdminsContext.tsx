import { createContext, useContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface AdminRecord {
  id: string; name: string; surname: string; idNumber: string;
  username: string; fingerprintId: string; role: string; createdAt: string;
}

const AdminsContext = createContext<{
  admins: AdminRecord[]; findByUsername: (u: string) => AdminRecord | undefined; refresh: () => Promise<void>;
} | undefined>(undefined);

export function AdminsProvider({ children }: { children: ReactNode }) {
  const [admins, setAdmins] = useState<AdminRecord[]>([]);
  const refresh = useCallback(async () => {
    const { data } = await supabase.from('staff_directory').select('*').order('created_at', { ascending: false });
    setAdmins((data ?? []).map((a: any) => ({
      id: a.id, name: a.first_name, surname: a.last_name, idNumber: a.id_number ?? '',
      username: a.username, fingerprintId: a.fingerprint_id ?? '', role: a.role, createdAt: a.created_at,
    })));
  }, []);
  useEffect(() => { void refresh(); }, [refresh]);
  const findByUsername = useCallback((u: string) => admins.find((a) => a.username === u.trim().toLowerCase()), [admins]);
  const value = useMemo(() => ({ admins, findByUsername, refresh }), [admins, findByUsername, refresh]);
  return <AdminsContext.Provider value={value}>{children}</AdminsContext.Provider>;
}

export function useAdmins() {
  const ctx = useContext(AdminsContext);
  if (!ctx) throw new Error('useAdmins must be used within AdminsProvider');
  return ctx;
}