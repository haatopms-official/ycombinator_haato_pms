import { supabase } from '@/integrations/supabase/client';

export async function getGuestDocument(bookingId: string) {
  const { data } = await supabase.from('guest_documents').select('*').eq('booking_id', bookingId).maybeSingle();
  return data as { anketa: Record<string, unknown>; passport: Record<string, string> } | null;
}

export async function saveGuestDocument(
  bookingId: string,
  patch: { anketa?: Record<string, unknown>; passport?: Record<string, string> },
) {
  const payload: Record<string, unknown> = { booking_id: bookingId };
  if (patch.anketa !== undefined) payload.anketa = patch.anketa;
  if (patch.passport !== undefined) payload.passport = patch.passport;
  return supabase.from('guest_documents').upsert(payload, { onConflict: 'booking_id' });
}