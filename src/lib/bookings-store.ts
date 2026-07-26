import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Booking } from '@/types/hotel';

function rowToBooking(r: any, payments: any[], segments: any[]): Booking {
  return {
    id: r.id, roomNumber: r.room_number,
    guestName: [r.guest_last_name, r.guest_first_name, r.guest_middle_name].filter(Boolean).join(' '),
    guestLastName: r.guest_last_name, guestFirstName: r.guest_first_name, guestMiddleName: r.guest_middle_name,
    guestPhone: r.guest_phone, guestEmail: r.guest_email, guestWhatsapp: r.guest_whatsapp,
    guestTelegram: r.guest_telegram, guestInstagram: r.guest_instagram, guestCount: r.guest_count,
    checkIn: r.check_in, checkOut: r.check_out, checkInHalfDay: r.check_in_half_day,
    checkOutHalfDay: r.check_out_half_day, checkInLateNight: r.check_in_late_night,
    status: r.status, notes: r.notes, price: r.price ?? undefined,
    paymentType: r.payment_type ?? undefined, paymentTiming: r.payment_timing ?? undefined,
    paymentAmount: r.payment_amount ?? undefined,
    paymentConfirmed: r.payment_confirmed, paymentConfirmedAt: r.payment_confirmed_at ?? undefined,
    bedIndex: r.bed_index ?? undefined, additionalBeds: r.additional_beds ?? [],
    residency: r.residency, bookingChannel: r.booking_channel, createdAt: r.created_at,
    payments: payments.map((p) => ({ amount: Number(p.amount), at: p.paid_at, method: p.method })),
    segments: segments.length
      ? segments
          .sort((a, b) => a.sort_order - b.sort_order)
          .map((s) => ({
            roomNumber: s.room_number, categoryId: s.category_id, from: s.from_date, to: s.to_date,
            nights: s.nights, guestCount: s.guest_count, perNightRate: Number(s.per_night_rate), price: Number(s.price),
          }))
      : undefined,
  };
}

function bookingToRow(b: Booking) {
  return {
    id: b.id, room_number: b.roomNumber,
    guest_last_name: b.guestLastName ?? '', guest_first_name: b.guestFirstName ?? '', guest_middle_name: b.guestMiddleName ?? '',
    guest_phone: b.guestPhone, guest_email: b.guestEmail, guest_whatsapp: b.guestWhatsapp ?? '',
    guest_telegram: b.guestTelegram ?? '', guest_instagram: b.guestInstagram ?? '', guest_count: b.guestCount,
    check_in: b.checkIn, check_out: b.checkOut, check_in_half_day: !!b.checkInHalfDay,
    check_out_half_day: !!b.checkOutHalfDay, check_in_late_night: !!b.checkInLateNight,
    status: b.status, notes: b.notes ?? '', price: b.price ?? null,
    payment_type: b.paymentType ?? null, payment_timing: b.paymentTiming ?? null, payment_amount: b.paymentAmount ?? null,
    payment_confirmed: !!b.paymentConfirmed, payment_confirmed_at: b.paymentConfirmedAt ?? null,
    bed_index: b.bedIndex ?? null, additional_beds: b.additionalBeds ?? [],
    residency: b.residency ?? 'resident', booking_channel: b.bookingChannel ?? 'offline',
  };
}

async function syncPayments(b: Booking) {
  const local = b.payments ?? [];
  if (!local.length) return;
  const { data: existing } = await supabase.from('booking_payments').select('amount, method, paid_at').eq('booking_id', b.id);
  const existingCount = existing?.length ?? 0;
  if (local.length <= existingCount) return;
  const toInsert = local.slice(existingCount).map((p) => ({
    booking_id: b.id, amount: p.amount, method: p.method, paid_at: p.at,
  }));
  await supabase.from('booking_payments').insert(toInsert);
}

async function syncSegments(b: Booking) {
  await supabase.from('booking_segments').delete().eq('booking_id', b.id);
  const segs = b.segments ?? [];
  if (!segs.length) return;
  await supabase.from('booking_segments').insert(
    segs.map((s, i) => ({
      booking_id: b.id, room_number: s.roomNumber, category_id: s.categoryId,
      from_date: s.from, to_date: s.to, nights: s.nights, guest_count: s.guestCount,
      per_night_rate: s.perNightRate, price: s.price, sort_order: i,
    })),
  );
}

export function useBookingsStore() {
  const [data, setDataState] = useState<Booking[]>([]);
  const [ready, setReady] = useState(false);

  const load = useCallback(async () => {
    const { data: rows } = await supabase.from('bookings').select('*').order('check_in');
    const ids = (rows ?? []).map((r) => r.id);
    const [{ data: payments }, { data: segments }] = await Promise.all([
      ids.length ? supabase.from('booking_payments').select('*').in('booking_id', ids) : Promise.resolve({ data: [] as any[] }),
      ids.length ? supabase.from('booking_segments').select('*').in('booking_id', ids) : Promise.resolve({ data: [] as any[] }),
    ]);
    const paymentsByBooking = new Map<string, any[]>();
    for (const p of payments ?? []) paymentsByBooking.set(p.booking_id, [...(paymentsByBooking.get(p.booking_id) ?? []), p]);
    const segmentsByBooking = new Map<string, any[]>();
    for (const s of segments ?? []) segmentsByBooking.set(s.booking_id, [...(segmentsByBooking.get(s.booking_id) ?? []), s]);

    setDataState((rows ?? []).map((r) => rowToBooking(r, paymentsByBooking.get(r.id) ?? [], segmentsByBooking.get(r.id) ?? [])));
    setReady(true);
  }, []);

  useEffect(() => {
    void load();
    const channel = supabase.channel('bookings-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'bookings' }, () => void load())
      .on('postgres_changes', { event: '*', schema: 'public', table: 'booking_payments' }, () => void load())
      .on('postgres_changes', { event: '*', schema: 'public', table: 'booking_segments' }, () => void load())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [load]);

  const setData = useCallback((updater: Booking[] | ((prev: Booking[]) => Booking[])) => {
    setDataState((prev) => {
      const next = typeof updater === 'function' ? (updater as (p: Booking[]) => Booking[])(prev) : updater;
      const prevIds = new Set(prev.map((b) => b.id));
      const nextIds = new Set(next.map((b) => b.id));
      const toInsert = next.filter((b) => !prevIds.has(b.id));
      const toDelete = prev.filter((b) => !nextIds.has(b.id));
      const toUpdate = next.filter((b) => {
        const old = prev.find((p) => p.id === b.id);
        return old && JSON.stringify(old) !== JSON.stringify(b);
      });

      if (toInsert.length) {
        void supabase.from('bookings').insert(toInsert.map(bookingToRow)).then(() => {
          for (const b of toInsert) { void syncPayments(b); void syncSegments(b); }
        });
      }
      if (toUpdate.length) {
        for (const b of toUpdate) {
          void supabase.from('bookings').update(bookingToRow(b)).eq('id', b.id).then(() => {
            void syncPayments(b); void syncSegments(b);
          });
        }
      }
      if (toDelete.length) void supabase.from('bookings').delete().in('id', toDelete.map((b) => b.id));
      return next;
    });
  }, []);

  return { data, setData, ready };
}