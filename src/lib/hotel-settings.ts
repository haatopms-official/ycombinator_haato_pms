import { useCallback, useEffect, useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Json } from '@/integrations/supabase/types';
type SettingsKey = 'grid' | 'guests';

export function useHotelSettings<T>(key: SettingsKey, initial: T) {
  const [data, setDataState] = useState<T>(initial);
  const [ready, setReady] = useState(false);
  const writeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data: row } = await supabase.from('hotel_settings').select('data').eq('key', key).maybeSingle();
      if (!cancelled) { setDataState((row?.data as T) ?? initial); setReady(true); }
    })();
    const channel = supabase.channel(`hotel_settings:${key}`)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'hotel_settings', filter: `key=eq.${key}` },
        (payload) => setDataState(payload.new.data as T))
      .subscribe();
    return () => { cancelled = true; supabase.removeChannel(channel); };
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  const setData = useCallback((updater: T | ((prev: T) => T)) => {
    setDataState((prev) => {
      const next = typeof updater === 'function' ? (updater as (p: T) => T)(prev) : updater;
      if (writeTimer.current) clearTimeout(writeTimer.current);
      writeTimer.current = setTimeout(() => { void supabase.from('hotel_settings').update({ data: next as Json }).eq('key', key); }, 150);
      return next;
    });
  }, [key]);

  return { data, setData, ready };
}