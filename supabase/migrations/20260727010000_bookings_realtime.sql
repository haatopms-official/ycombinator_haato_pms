alter publication supabase_realtime add table public.bookings;
alter publication supabase_realtime add table public.booking_payments;
alter publication supabase_realtime add table public.booking_segments;

alter table public.bookings replica identity full;
alter table public.booking_payments replica identity full;
alter table public.booking_segments replica identity full;