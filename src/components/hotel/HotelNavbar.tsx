import { Building2, Clock, LayoutGrid, CalendarRange, LogOut, Sun, Moon, Timer, UserCog, Bell } from 'lucide-react';
import { useNotifications } from '@/contexts/NotificationsContext';

import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from '@tanstack/react-router';
import { useI18n } from '@/hooks/useI18n';
import { useClock } from '@/hooks/useClock';
import { HotelLanguageDropdown } from './HotelLanguageDropdown';
import { useAuth } from '@/contexts/AuthContext';
import { LogoutDialog } from '@/components/auth/LogoutDialog';
import { motion } from 'framer-motion';
import { useShift, useNow, formatRemaining } from '@/contexts/ShiftContext';
import { useTheme } from '@/hooks/ThemeContext';

interface HotelNavbarProps {
  totalRooms: number;
  viewMode: 'tiles' | 'timeline';
  onViewModeChange: (mode: 'tiles' | 'timeline') => void;
}

export function HotelNavbar({ viewMode, onViewModeChange }: HotelNavbarProps) {
  const { t } = useI18n();
  const time = useClock();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { session } = useShift();
  const now = useNow();
  const [logoutOpen, setLogoutOpen] = useState(false);
  const { togglePanel, criticalCount } = useNotifications();

  const isAdmin = user?.role === 'admin';

  const handleConfirmLogout = () => {
    setLogoutOpen(false);
    setTimeout(() => {
      logout();
      navigate({ to: '/login', replace: true });
    }, 200);
  };

  const remainingMs = useMemo(() => {
    if (!session) return 0;
    return new Date(session.endISO).getTime() - now.getTime();
  }, [session, now]);

  const isDayShift = session?.kind === 'day';
  const ShiftIcon = isDayShift ? Sun : Moon;
  const isSubstitute = !!session?.coveringFor;

  return (
    <header className="sticky top-0 z-40 navbar-gradient shadow-xl">
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-fuchsia-600/30 via-purple-500/25 to-indigo-600/30 border-b border-white/15 backdrop-blur-md">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.18)_50%,transparent_70%)] bg-[length:200%_100%] animate-[shimmer_6s_linear_infinite]" />
        <div className="relative flex items-center justify-center gap-2.5 py-1.5 px-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
          </span>
          <span className="font-display font-extrabold uppercase tracking-[0.4em] text-[11px] sm:text-xs md:text-sm text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
            Тестовый вариант
          </span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between px-3 sm:px-5 py-3 sm:py-3.5 gap-3 relative">
        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 animate-fade-in-up">
          <button
            type="button"
            onClick={() => {
              // Always return to the admin base route (the main grid) and
              // request a reset to the timeline (main grid) view.
              const base = '/admin';
              if (location.pathname !== base) {
                navigate({ to: base });
              }
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('workspace:reset', { detail: { to: base } }));
                window.requestAnimationFrame(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                });
              }
            }}
            className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 group/home rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label="Go to main grid"
            title="Go to main grid"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm shadow-inner hover-lift transition-transform duration-300 group-hover/home:scale-105">
              <Building2 className="h-5 w-5 text-white transition-transform duration-500 group-hover/home:rotate-12 group-hover/home:scale-110" />
            </div>
            <div className="min-w-0 text-left">
              <h1 className="font-display text-lg font-black leading-tight tracking-tight text-white truncate">{t('hotelName')}</h1>
              <p className="text-[11px] text-white/65 font-medium tracking-wide">{t('roomManagement')}</p>
            </div>
          </button>



        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-2.5">
          {session && isSubstitute && (
            <div
              className="hidden md:flex items-center gap-2 rounded-xl bg-amber-400/20 border border-amber-300/40 px-3 py-2 backdrop-blur-sm"
              title={`Covering for ${session.coveringFor}${session.reason ? ` — ${session.reason}` : ''}`}
            >
              <UserCog className="h-4 w-4 text-amber-200" />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold tracking-wider text-amber-100/90 uppercase">
                  Substitute
                </span>
                <span className="text-xs font-black text-white">
                  {session.name} → {session.coveringFor}
                </span>
              </div>
            </div>
          )}

          {isAdmin && session && (
            <div
              className={`hidden md:flex items-center gap-2.5 rounded-xl px-3 py-2 border backdrop-blur-sm animate-fade-in-up ${
                isDayShift
                  ? 'bg-amber-400/15 border-amber-300/30'
                  : 'bg-indigo-400/15 border-indigo-300/30'
              }`}
              title={`${session.name} · ${isDayShift ? 'Day shift 06:00–18:00' : 'Night shift 18:00–06:00'}`}
            >
              <ShiftIcon className={`h-4 w-4 ${isDayShift ? 'text-amber-200' : 'text-indigo-200'}`} />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold tracking-wider text-white/70 uppercase">
                  {isDayShift ? 'Day · 06–18' : 'Night · 18–06'} · {session.name}
                </span>
                <span className="text-xs font-black text-white tabular-nums flex items-center gap-1">
                  <Timer className="h-3 w-3 opacity-80" />
                  {formatRemaining(remainingMs)}
                </span>
              </div>
            </div>
          )}

          <div className="flex items-center gap-1 rounded-xl bg-white/10 backdrop-blur-sm p-1 border border-white/15">
            <button
              onClick={() => onViewModeChange('tiles')}
              className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'tiles' ? 'bg-white/25 text-white shadow-lg scale-110' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
              aria-label={t('tilesView')}
              title={t('tilesView')}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => onViewModeChange('timeline')}
              className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'timeline' ? 'bg-white/25 text-white shadow-lg scale-110' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
              aria-label={t('timelineView')}
              title={t('timelineView')}
            >
              <CalendarRange className="h-4 w-4" />
            </button>
          </div>

          {time && (
            <div className="hidden sm:flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-3.5 py-2.5 text-sm border border-white/15 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Clock className="h-4 w-4 text-white/70 animate-pulse" />
              <span className="font-bold text-white tabular-nums">{time}</span>
            </div>
          )}
          <HotelLanguageDropdown />

          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 text-white transition-colors"
            aria-label={theme === 'dark' ? 'Use white theme' : 'Use black theme'}
            title={theme === 'dark' ? 'White theme' : 'Black theme'}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={togglePanel}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 text-white transition-colors"
            aria-label="Notifications"
            title="Notifications"
          >
            <Bell className="h-4 w-4" />
            {criticalCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center ring-2 ring-[hsl(265_85%_35%)] animate-pulse">
                {criticalCount}
              </span>
            )}
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLogoutOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 text-white transition-colors"
            aria-label="Sign out"
            title="Sign out"
          >
            <LogOut className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
      <LogoutDialog
        open={logoutOpen}
        onCancel={() => setLogoutOpen(false)}
        onConfirm={handleConfirmLogout}
      />
    </header>
  );
}
