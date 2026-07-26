import { useEffect, useState, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { getGuestDocument, saveGuestDocument } from './guest-documents';

export function useGuestDocument(bookingId: string | undefined) {
  const [anketa, setAnketaState] = useState<Record<string, unknown>>({});
  const [passport, setPassportState] = useState<Record<string, string>>({});
  const writeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // BookingDialog, HotelGuestAnketaModal, and GuestDetailsWindow can all be
  // mounted at the same time for the SAME booking id. If every instance of
  // this hook builds a realtime channel named `guest_documents:${bookingId}`,
  // Supabase's client hands the 2nd/3rd caller back the channel that's
  // already subscribed, and calling `.on()` on an already-subscribed channel
  // throws ("cannot add `postgres_changes` callbacks ... after `subscribe()`").
  // Giving each mounted hook instance its own random suffix keeps the
  // channel names unique per component instance, while the `filter` below
  // still scopes updates to the correct booking_id — so behavior is
  // unchanged, only the name collision goes away.
  const instanceIdRef = useRef(Math.random().toString(36).slice(2));

  useEffect(() => {
    if (!bookingId) { setAnketaState({}); setPassportState({}); return; }
    let cancelled = false;
    (async () => {
      const doc = await getGuestDocument(bookingId);
      if (cancelled) return;
      setAnketaState(doc?.anketa ?? {});
      setPassportState(doc?.passport ?? {});
    })();
    const channel = supabase
      .channel(`guest_documents:${bookingId}:${instanceIdRef.current}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'guest_documents', filter: `booking_id=eq.${bookingId}` },
        (payload) => {
          const row = payload.new as any;
          if (!row) return;
          setAnketaState(row.anketa ?? {});
          setPassportState(row.passport ?? {});
        })
      .subscribe();
    return () => { cancelled = true; supabase.removeChannel(channel); };
  }, [bookingId]);

  const setAnketa = useCallback((next: Record<string, unknown>) => {
    setAnketaState(next);
    if (!bookingId) return;
    if (writeTimer.current) clearTimeout(writeTimer.current);
    writeTimer.current = setTimeout(() => { void saveGuestDocument(bookingId, { anketa: next }); }, 150);
  }, [bookingId]);

  const setPassport = useCallback((next: Record<string, string>) => {
    setPassportState(next);
    if (!bookingId) return;
    if (writeTimer.current) clearTimeout(writeTimer.current);
    writeTimer.current = setTimeout(() => { void saveGuestDocument(bookingId, { passport: next }); }, 150);
  }, [bookingId]);

  return { anketa, passport, setAnketa, setPassport };
}