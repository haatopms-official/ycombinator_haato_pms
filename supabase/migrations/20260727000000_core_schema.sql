-- =========================================================================
-- 0. EXTENSIONS + SHARED HELPER
-- =========================================================================
create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- =========================================================================
-- 1. STAFF (1:1 with auth.users). role restricted to 'admin' only — your
-- UI (ROLE_HOME, ProtectedRoute) only understands one role today.
-- =========================================================================
create table public.staff (
  id             uuid primary key references auth.users(id) on delete cascade,
  username       text not null unique check (username = lower(username) and username ~ '^[a-z0-9_.]{3,32}$'),
  first_name     text not null default '',
  last_name      text not null default '',
  id_number      text not null default '',
  fingerprint_id text not null default '',
  role           text not null default 'admin' check (role in ('admin')),
  is_active      boolean not null default true,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);
create trigger staff_set_updated_at before update on public.staff
  for each row execute function public.set_updated_at();

create or replace function public.resolve_staff_email(p_username text)
returns text language sql security definer set search_path = public stable as $$
  select au.email from public.staff s join auth.users au on au.id = s.id
  where s.username = lower(p_username) and s.is_active limit 1;
$$;
revoke all on function public.resolve_staff_email(text) from public;
grant execute on function public.resolve_staff_email(text) to anon, authenticated;

create or replace function public.is_active_staff()
returns boolean language sql security definer set search_path = public stable as $$
  select exists (select 1 from public.staff where id = auth.uid() and is_active);
$$;

create or replace function public.is_admin()
returns boolean language sql security definer set search_path = public stable as $$
  select exists (select 1 from public.staff where id = auth.uid() and is_active and role = 'admin');
$$;

alter table public.staff enable row level security;
create policy "staff can read roster" on public.staff for select using (public.is_active_staff());
create policy "admins insert staff profile" on public.staff for insert with check (public.is_admin());
create policy "admins manage staff" on public.staff for update using (public.is_admin()) with check (public.is_admin());
create policy "admins deactivate staff" on public.staff for delete using (public.is_admin());

create view public.staff_directory as
  select id, username, first_name, last_name, role, is_active, created_at,
         case when public.is_admin() then id_number else null end as id_number,
         case when public.is_admin() then fingerprint_id else null end as fingerprint_id
  from public.staff;

-- =========================================================================
-- 2. ROOM CATEGORIES + ROOMS — reference/seed data only. Your live
-- categories/rooms (including custom ones added at runtime) live in
-- hotel_settings.grid, untouched by this migration. rate_resident /
-- rate_nonresident are NOT read by the app — real rates are per-guest-count
-- arrays inside hotel_settings.grid.categoryRates.
-- =========================================================================
create table public.room_categories (
  id               uuid primary key default gen_random_uuid(),
  code             text not null unique,
  label_en         text not null,
  label_ru         text not null,
  label_uz         text not null,
  short_label      text not null,
  max_guests       int not null check (max_guests > 0),
  rate_resident    numeric(10,2) not null default 0,
  rate_nonresident numeric(10,2) not null default 0,
  sort_order       int not null default 0,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);
create trigger room_categories_set_updated_at before update on public.room_categories
  for each row execute function public.set_updated_at();

create table public.rooms (
  id          uuid primary key default gen_random_uuid(),
  number      int not null unique,
  category_id uuid not null references public.room_categories(id) on delete restrict,
  floor       int not null,
  is_active   boolean not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
create trigger rooms_set_updated_at before update on public.rooms
  for each row execute function public.set_updated_at();

alter table public.room_categories enable row level security;
alter table public.rooms enable row level security;
create policy "staff read categories" on public.room_categories for select using (public.is_active_staff());
create policy "admins write categories" on public.room_categories for all using (public.is_admin()) with check (public.is_admin());
create policy "staff read rooms" on public.rooms for select using (public.is_active_staff());
create policy "admins write rooms" on public.rooms for all using (public.is_admin()) with check (public.is_admin());

-- =========================================================================
-- 3. BOOKINGS + PAYMENTS + SEGMENTS. room_number has NO foreign key —
-- your grid lets admins add custom rooms that never touch `rooms`, so a
-- real FK would reject those bookings.
-- =========================================================================
create table public.bookings (
  id                    uuid primary key default gen_random_uuid(),
  room_number           int not null,
  guest_last_name       text not null default '',
  guest_first_name      text not null default '',
  guest_middle_name     text not null default '',
  guest_phone           text not null default '',
  guest_email           text not null default '',
  guest_whatsapp        text not null default '',
  guest_telegram        text not null default '',
  guest_instagram       text not null default '',
  guest_count           int not null default 1 check (guest_count >= 0),
  check_in              date not null,
  check_out             date not null check (check_out >= check_in),
  check_in_half_day     boolean not null default false,
  check_out_half_day    boolean not null default false,
  check_in_late_night   boolean not null default false,
  status                text not null default 'pending' check (
    status in ('confirmed','pending','booked','in-house','checked-out','maintenance','dirty','cleaned')
  ),
  notes                 text not null default '',
  price                 numeric(10,2),
  payment_type          text check (payment_type in ('cash','card','transfer')),
  payment_timing        text check (payment_timing in ('full_now','half_now','quarter_now','after_checkout')),
  payment_amount        numeric(10,2),
  payment_confirmed     boolean not null default false,
  payment_confirmed_at  timestamptz,
  bed_index             int,
  additional_beds       int[] not null default '{}',
  residency             text not null default 'resident' check (residency in ('resident','nonResident')),
  booking_channel       text not null default 'offline' check (booking_channel in ('online','offline')),
  created_by            uuid references public.staff(id) on delete set null,
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now()
);
create trigger bookings_set_updated_at before update on public.bookings
  for each row execute function public.set_updated_at();
create index bookings_room_dates_idx on public.bookings (room_number, check_in, check_out);
create index bookings_status_idx on public.bookings (status);

create table public.booking_payments (
  id          uuid primary key default gen_random_uuid(),
  booking_id  uuid not null references public.bookings(id) on delete cascade,
  amount      numeric(10,2) not null check (amount > 0),
  method      text not null check (method in ('cash','card','transfer')),
  recorded_by uuid references public.staff(id) on delete set null,
  paid_at     timestamptz not null default now()
);
create index booking_payments_booking_idx on public.booking_payments (booking_id);

create table public.booking_segments (
  id             uuid primary key default gen_random_uuid(),
  booking_id     uuid not null references public.bookings(id) on delete cascade,
  room_number    int not null,
  category_id    text not null,
  from_date      date not null,
  to_date        date not null check (to_date > from_date),
  nights         int not null default 0,
  guest_count    int not null default 1,
  per_night_rate numeric(10,2) not null,
  price          numeric(10,2) not null,
  sort_order     int not null default 0
);
create index booking_segments_booking_idx on public.booking_segments (booking_id);

alter table public.bookings enable row level security;
alter table public.booking_payments enable row level security;
alter table public.booking_segments enable row level security;
create policy "staff full access bookings" on public.bookings for all using (public.is_active_staff()) with check (public.is_active_staff());
create policy "staff full access booking_payments" on public.booking_payments for all using (public.is_active_staff()) with check (public.is_active_staff());
create policy "staff full access booking_segments" on public.booking_segments for all using (public.is_active_staff()) with check (public.is_active_staff());

-- =========================================================================
-- 4. SHIFTS — schema ready, not wired to the frontend yet (ShiftContext
-- still runs on localStorage). Out of scope for this task.
-- =========================================================================
create table public.shifts (
  id         uuid primary key default gen_random_uuid(),
  staff_id   uuid not null references public.staff(id) on delete cascade,
  kind       text not null check (kind in ('day','night')),
  started_at timestamptz not null default now(),
  ended_at   timestamptz
);
create index shifts_staff_idx on public.shifts (staff_id, started_at desc);
alter table public.shifts enable row level security;
create policy "staff full access shifts" on public.shifts for all using (public.is_active_staff()) with check (public.is_active_staff());

-- =========================================================================
-- 5. AUDIT LOG — append-only. category='auth' rows ARE login/logout
-- history. metadata carries the free-form `details` object your UI
-- already reads back out in src/lib/auditFormat.tsx.
-- =========================================================================
create table public.audit_log (
  id             uuid primary key default gen_random_uuid(),
  actor_staff_id uuid references public.staff(id) on delete set null,
  actor_username text not null,
  actor_role     text not null,
  category       text not null check (category in ('auth','booking','admin','shift','form','system')),
  action         text not null,
  summary        text not null default '',
  metadata       jsonb not null default '{}'::jsonb,
  created_at     timestamptz not null default now()
);
create index audit_log_created_idx on public.audit_log (created_at desc);
create index audit_log_category_idx on public.audit_log (category);
alter table public.audit_log enable row level security;
alter publication supabase_realtime add table public.audit_log;
create policy "staff read audit_log" on public.audit_log for select using (public.is_active_staff());
create policy "staff append audit_log" on public.audit_log for insert with check (public.is_active_staff());

-- =========================================================================
-- 6. SETTINGS (replaces 'grid'/'guests' hotel_app_state keys)
-- =========================================================================
create table public.hotel_settings (
  key        text primary key check (key in ('grid', 'guests')),
  data       jsonb not null default '{}'::jsonb,
  updated_by uuid references public.staff(id) on delete set null,
  updated_at timestamptz not null default now()
);
create trigger hotel_settings_set_updated_at before update on public.hotel_settings
  for each row execute function public.set_updated_at();
alter table public.hotel_settings enable row level security;
create policy "staff full access hotel_settings" on public.hotel_settings for all using (public.is_active_staff()) with check (public.is_active_staff());
alter publication supabase_realtime add table public.hotel_settings;
alter table public.hotel_settings replica identity full;
insert into public.hotel_settings (key, data) values ('grid', '{}'), ('guests', '{}') on conflict (key) do nothing;

-- =========================================================================
-- 7. GUEST DOCUMENTS — passport is a full jsonb object (last/first/middle
-- name, series, number, etc. — matches your PassportData type exactly),
-- not a flat string.
-- =========================================================================
create table public.guest_documents (
  id                  uuid primary key default gen_random_uuid(),
  booking_id          uuid not null references public.bookings(id) on delete cascade,
  anketa              jsonb not null default '{}'::jsonb,
  passport            jsonb not null default '{}'::jsonb,
  passport_scan_path  text,
  recorded_by         uuid references public.staff(id) on delete set null,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now(),
  unique (booking_id)
);
create trigger guest_documents_set_updated_at before update on public.guest_documents
  for each row execute function public.set_updated_at();
alter table public.guest_documents enable row level security;
alter publication supabase_realtime add table public.guest_documents;
create policy "staff full access guest_documents" on public.guest_documents for all using (public.is_active_staff()) with check (public.is_active_staff());

-- =========================================================================
-- 8. SEED DATA
-- =========================================================================
insert into public.room_categories (code, label_en, label_ru, label_uz, short_label, max_guests, sort_order) values
  ('standard-double',    'Standard Double',    'Стандарт Двухместный',    'Standart Ikki kishilik',   'Std Dbl',  2, 1),
  ('standard-twin',      'Standard Twin',      'Стандарт Твин',           'Standart Twin',             'Std Twin', 2, 2),
  ('standard-triple',    'Standard Triple',    'Стандарт Трёхместный',    'Standart Uch kishilik',     'Std Trpl', 3, 3),
  ('standard-quadruple', 'Standard Quadruple', 'Стандарт Четырёхместный', 'Standart To''rt kishilik',  'Std Quad', 4, 4),
  ('deluxe-double',      'Deluxe Double',      'Делюкс Двухместный',      'Deluxe Ikki kishilik',      'Dlx Dbl',  2, 5),
  ('deluxe-twin',        'Deluxe Twin',        'Делюкс Твин',             'Deluxe Twin',                'Dlx Twin', 2, 6);

do $$
declare cat record; floor_n int := 1; i int;
begin
  for cat in select id from public.room_categories order by sort_order loop
    for i in 1..5 loop
      insert into public.rooms (number, category_id, floor) values (floor_n * 100 + i, cat.id, floor_n);
    end loop;
    floor_n := floor_n + 1;
  end loop;
end $$;