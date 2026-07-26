import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as ProtectedRoute, B as Button, T as Textarea, b as buttonVariants, C as Checkbox } from "./checkbox-DVLHaZqC.mjs";
import { f as useLocation, e as useNavigate, u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { u as useI18n, k as useBookingsContext, h as useHotelGrid, f as useNotifications, a as useAuth, b as useTheme, d as useShift, e as useNow, g as formatRemaining, B as BOOKING_STATUSES, m as useAudit, n as useSharedState, l as isRoomDirty, i as formatGuestName, c as cn, j as useHotelDetails } from "./router-D8HlAbG0.mjs";
import { R as Root2$1, T as Trigger, P as Portal, C as Content2$1 } from "../_libs/radix-ui__react-popover.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import { g as Dialog$1, D as DialogPortal$1, a as DialogContent$1, d as DialogClose, b as DialogTitle$1, c as DialogDescription$1, f as DialogOverlay$1 } from "../_libs/radix-ui__react-dialog.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { S as Select$1, a as SelectValue$1, b as SelectTrigger$1, c as SelectIcon, d as SelectPortal, e as SelectContent$1, f as SelectViewport, g as SelectItem$1, h as SelectItemIndicator, i as SelectItemText, j as SelectScrollUpButton$1, k as SelectScrollDownButton$1, l as SelectLabel$1, m as SelectSeparator$1 } from "../_libs/radix-ui__react-select.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Root2, P as Portal2, C as Content2, T as Title2, D as Description2, a as Cancel, A as Action, O as Overlay2 } from "../_libs/radix-ui__react-alert-dialog.mjs";
import { V as VisuallyHidden } from "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-BDav3mxU.mjs";
import "../_libs/next-themes.mjs";
import "./client-D0SzQ9iV.mjs";
import "../_libs/seroval.mjs";
import { s as startOfDay, a as isWithinInterval, p as parseISO, f as format, b as addDays, c as subDays, d as differenceInCalendarDays, i as isBefore, e as isSameDay, g as isValid, h as startOfMonth, j as addMonths, k as setMonth, l as setYear, m as isSameMonth, n as parse } from "../_libs/date-fns.mjs";
import { b as Building2, U as UserCog, S as Sun, M as Moon, c as Timer, d as LayoutGrid, C as CalendarRange, e as Clock, B as Bell, a as LogOut, H as Hotel, D as DoorOpen, f as BookOpen, g as House, W as Wrench, h as CalendarCheck2, F as FolderPlus, i as ChevronRight, j as ChevronDown, k as Users, P as Plus, l as Trash2, m as User, X, T as TriangleAlert, n as Check, o as BedDouble, p as Sunrise, A as ArrowRight, q as UserPlus, r as DollarSign, s as CalendarDays, t as Phone, u as MessageCircle, v as Mail, w as Send, I as Instagram, x as StickyNote, y as Sparkles, z as ClipboardPenLine, R as Receipt, E as Info, G as Layers, J as Hash, K as Pencil, N as ScrollText, O as CircleCheck, Q as Printer, V as Download, Y as Activity, Z as Zap, _ as Fingerprint, $ as ShieldCheck, a0 as Clock3, a1 as ContactRound, a2 as IdCard, a3 as Flag$1, a4 as ShieldAlert, a5 as FileWarning, a6 as Save, a7 as ChevronUp, a8 as Globe, a9 as Search, aa as PenLine, ab as Radio, ac as Usb, ad as Eraser, ae as ChevronLeft } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { o as objectType, a as anyType, e as enumType } from "../_libs/zod.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-checkbox.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-toast.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tooltip.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
function useClock() {
  const [time, setTime] = reactExports.useState("");
  reactExports.useEffect(() => {
    const update = () => setTime((/* @__PURE__ */ new Date()).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit", hour12: false }));
    update();
    const id = setInterval(update, 1e3);
    return () => clearInterval(id);
  }, []);
  return time;
}
const Popover = Root2$1;
const PopoverTrigger = Trigger;
const PopoverContent = reactExports.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2$1,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = Content2$1.displayName;
const LANGS = [
  { code: "ru", cc: "ru", name: "Русский", short: "RU" },
  { code: "uz", cc: "uz", name: "O'zbek", short: "UZ" },
  { code: "en", cc: "gb", name: "English", short: "EN" }
];
if (typeof window !== "undefined") {
  for (const l of LANGS) {
    const img1 = new Image();
    img1.decoding = "sync";
    img1.src = `https://flagcdn.com/w40/${l.cc}.png`;
    const img2 = new Image();
    img2.decoding = "sync";
    img2.src = `https://flagcdn.com/w80/${l.cc}.png`;
  }
}
function Flag({ cc, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: `https://flagcdn.com/w40/${cc}.png`,
      srcSet: `https://flagcdn.com/w80/${cc}.png 2x`,
      width: 20,
      height: 15,
      alt: "",
      "aria-hidden": "true",
      loading: "eager",
      decoding: "sync",
      className: `inline-block rounded-[2px] object-cover shadow-sm ${className ?? ""}`,
      style: { width: "1.25rem", height: "0.9rem" },
      draggable: false
    }
  );
}
function HotelLanguageDropdown() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = reactExports.useState(false);
  const current = LANGS.find((l) => l.code === lang);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: "flex items-center gap-1.5 rounded-xl bg-white/10 backdrop-blur-sm px-2.5 py-2 text-sm font-semibold text-white border border-white/15 hover:bg-white/20 hover:border-white/25 transition-colors duration-150 group whitespace-nowrap",
        "aria-label": current.name,
        title: current.name,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { cc: current.cc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold tracking-wide", children: current.short }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: "h-3.5 w-3.5 transition-transform duration-150",
              style: { transform: open ? "rotate(180deg)" : "rotate(0deg)" }
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PopoverContent,
      {
        align: "end",
        sideOffset: 8,
        className: "z-[100] min-w-[220px] rounded-xl bg-card border border-border shadow-2xl overflow-hidden p-0",
        style: { willChange: "transform, opacity" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: LANGS.map((l) => {
          const active = lang === l.code;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setLang(l.code);
                setOpen(false);
              },
              className: `relative flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition-colors duration-100
                  ${active ? "bg-primary/10 text-primary font-bold" : "text-foreground hover:bg-muted/70"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { cc: l.cc, className: "!w-7 !h-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.name }),
                active && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "ml-auto h-4 w-4 text-primary" })
              ]
            },
            l.code
          );
        }) })
      }
    )
  ] });
}
function LogoutDialog({ open, onCancel, onConfirm }) {
  reactExports.useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const prevOverscroll = document.body.style.overscrollBehavior;
    const prevHtmlOverscroll = document.documentElement.style.overscrollBehavior;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.add("logout-dialog-open");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    document.documentElement.style.overscrollBehavior = "none";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.classList.remove("logout-dialog-open");
      document.body.style.overflow = prevOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.paddingRight = prevPaddingRight;
      document.body.style.overscrollBehavior = prevOverscroll;
      document.documentElement.style.overscrollBehavior = prevHtmlOverscroll;
    };
  }, [open]);
  if (typeof document === "undefined") return null;
  return reactDomExports.createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "fixed inset-0 z-[2147483000] flex items-center justify-center p-4",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.22 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute inset-0 bg-background/40 backdrop-blur-xl",
              onClick: onCancel,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.25 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              role: "dialog",
              "aria-modal": "true",
              initial: { opacity: 0, y: 24, scale: 0.92, rotateX: -8 },
              animate: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
              exit: { opacity: 0, y: 14, scale: 0.96, rotateX: 4 },
              transition: { type: "spring", stiffness: 320, damping: 26, mass: 0.8 },
              style: { transformPerspective: 1e3 },
              className: "relative w-full max-w-md rounded-2xl bg-white shadow-2xl p-6 border border-slate-200",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: onCancel,
                    className: "absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 hover:rotate-90 transition-all duration-300",
                    "aria-label": "Close",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { scale: 0, rotate: -30 },
                      animate: { scale: 1, rotate: 0 },
                      transition: { delay: 0.1, type: "spring", stiffness: 360, damping: 18 },
                      className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-slate-900", children: "Sign out?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-slate-600", children: "Do you really want to log out? You will need to sign in again to access the dashboard." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.button,
                    {
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.97 },
                      onClick: onCancel,
                      className: "min-w-[110px] rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors",
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.button,
                    {
                      whileHover: { scale: 1.04, y: -1 },
                      whileTap: { scale: 0.97 },
                      onClick: onConfirm,
                      className: "group flex min-w-[110px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-red-500/30 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" }),
                        "Sign out"
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    ) }),
    document.body
  );
}
function HotelNavbar({ viewMode, onViewModeChange }) {
  const { t } = useI18n();
  const time = useClock();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { session } = useShift();
  const now = useNow();
  const [logoutOpen, setLogoutOpen] = reactExports.useState(false);
  const { togglePanel, criticalCount } = useNotifications();
  const isAdmin = user?.role === "admin";
  const handleConfirmLogout = () => {
    setLogoutOpen(false);
    setTimeout(() => {
      logout();
      navigate({ to: "/login", replace: true });
    }, 200);
  };
  const remainingMs = reactExports.useMemo(() => {
    if (!session) return 0;
    return new Date(session.endISO).getTime() - now.getTime();
  }, [session, now]);
  const isDayShift = session?.kind === "day";
  const ShiftIcon = isDayShift ? Sun : Moon;
  const isSubstitute = !!session?.coveringFor;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 navbar-gradient shadow-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full overflow-hidden bg-gradient-to-r from-fuchsia-600/30 via-purple-500/25 to-indigo-600/30 border-b border-white/15 backdrop-blur-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.18)_50%,transparent_70%)] bg-[length:200%_100%] animate-[shimmer_6s_linear_infinite]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center gap-2.5 py-1.5 px-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75 animate-ping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-extrabold uppercase tracking-[0.4em] text-[11px] sm:text-xs md:text-sm text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]", children: "Тестовый вариант" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75 animate-ping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between px-3 sm:px-5 py-3 sm:py-3.5 gap-3 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2.5 sm:gap-3.5 min-w-0 animate-fade-in-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            const base = "/admin";
            if (location.pathname !== base) {
              navigate({ to: base });
            }
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("workspace:reset", { detail: { to: base } }));
              window.requestAnimationFrame(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              });
            }
          },
          className: "flex items-center gap-2.5 sm:gap-3.5 min-w-0 group/home rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-white/40",
          "aria-label": "Go to main grid",
          title: "Go to main grid",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm shadow-inner hover-lift transition-transform duration-300 group-hover/home:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-white transition-transform duration-500 group-hover/home:rotate-12 group-hover/home:scale-110" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-lg font-black leading-tight tracking-tight text-white truncate", children: t("hotelName") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/65 font-medium tracking-wide", children: t("roomManagement") })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-end gap-2 sm:gap-2.5", children: [
        session && isSubstitute && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "hidden md:flex items-center gap-2 rounded-xl bg-amber-400/20 border border-amber-300/40 px-3 py-2 backdrop-blur-sm",
            title: `Covering for ${session.coveringFor}${session.reason ? ` — ${session.reason}` : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserCog, { className: "h-4 w-4 text-amber-200" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-tight", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-wider text-amber-100/90 uppercase", children: "Substitute" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-white", children: [
                  session.name,
                  " → ",
                  session.coveringFor
                ] })
              ] })
            ]
          }
        ),
        isAdmin && session && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `hidden md:flex items-center gap-2.5 rounded-xl px-3 py-2 border backdrop-blur-sm animate-fade-in-up ${isDayShift ? "bg-amber-400/15 border-amber-300/30" : "bg-indigo-400/15 border-indigo-300/30"}`,
            title: `${session.name} · ${isDayShift ? "Day shift 06:00–18:00" : "Night shift 18:00–06:00"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShiftIcon, { className: `h-4 w-4 ${isDayShift ? "text-amber-200" : "text-indigo-200"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-tight", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold tracking-wider text-white/70 uppercase", children: [
                  isDayShift ? "Day · 06–18" : "Night · 18–06",
                  " · ",
                  session.name
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-white tabular-nums flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "h-3 w-3 opacity-80" }),
                  formatRemaining(remainingMs)
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 rounded-xl bg-white/10 backdrop-blur-sm p-1 border border-white/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => onViewModeChange("tiles"),
              className: `p-2 rounded-lg transition-all duration-300 ${viewMode === "tiles" ? "bg-white/25 text-white shadow-lg scale-110" : "text-white/60 hover:text-white hover:bg-white/10"}`,
              "aria-label": t("tilesView"),
              title: t("tilesView"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => onViewModeChange("timeline"),
              className: `p-2 rounded-lg transition-all duration-300 ${viewMode === "timeline" ? "bg-white/25 text-white shadow-lg scale-110" : "text-white/60 hover:text-white hover:bg-white/10"}`,
              "aria-label": t("timelineView"),
              title: t("timelineView"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarRange, { className: "h-4 w-4" })
            }
          )
        ] }),
        time && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-3.5 py-2.5 text-sm border border-white/15 animate-fade-in-up", style: { animationDelay: "100ms" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-white/70 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white tabular-nums", children: time })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HotelLanguageDropdown, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: toggleTheme,
            className: "flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 text-white transition-colors",
            "aria-label": theme === "dark" ? "Use white theme" : "Use black theme",
            title: theme === "dark" ? "White theme" : "Black theme",
            children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: togglePanel,
            className: "relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 text-white transition-colors",
            "aria-label": "Notifications",
            title: "Notifications",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
              criticalCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center ring-2 ring-[hsl(265_85%_35%)] animate-pulse", children: criticalCount })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.button,
          {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            onClick: () => setLogoutOpen(true),
            className: "flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 text-white transition-colors",
            "aria-label": "Sign out",
            title: "Sign out",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LogoutDialog,
      {
        open: logoutOpen,
        onCancel: () => setLogoutOpen(false),
        onConfirm: handleConfirmLogout
      }
    )
  ] });
}
function AnimatedNumber({ value }) {
  const [display, setDisplay] = reactExports.useState(value);
  const [animKey, setAnimKey] = reactExports.useState(0);
  const prev = reactExports.useRef(value);
  reactExports.useEffect(() => {
    if (prev.current !== value) {
      setAnimKey((k) => k + 1);
      setDisplay(value);
      prev.current = value;
    }
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block tabular-nums counter-bounce", children: display }, animKey);
}
function HotelSummaryCards({
  total,
  available,
  confirmed,
  pending,
  booked,
  inHouse,
  checkedOut,
  maintenance,
  activeFilter = "all",
  onSelect
}) {
  const { t } = useI18n();
  const cards = [
    { label: t("totalRooms"), value: total, icon: Hotel, iconBg: "bg-slate-100 text-slate-700", activeRing: "ring-slate-400", filter: "all" },
    { label: t("available"), value: available, icon: DoorOpen, iconBg: "bg-sky-100 text-sky-700", activeRing: "ring-sky-400", filter: "available" },
    { label: t("pendingLabel"), value: pending, icon: Clock, iconBg: "bg-amber-100 text-amber-700", activeRing: "ring-amber-400", filter: "pending" },
    { label: t("bookedLabel"), value: booked, icon: BookOpen, iconBg: "bg-violet-100 text-violet-700", activeRing: "ring-violet-400", filter: "booked" },
    { label: t("inHouse"), value: inHouse, icon: House, iconBg: "bg-emerald-100 text-emerald-700", activeRing: "ring-emerald-400", filter: "in-house" },
    { label: t("checkedOutLabel"), value: checkedOut, icon: LogOut, iconBg: "bg-gray-100 text-gray-700", activeRing: "ring-gray-400", filter: "checked-out" },
    { label: t("maintenanceLabel"), value: maintenance, icon: Wrench, iconBg: "bg-red-100 text-red-700", activeRing: "ring-red-400", filter: "maintenance" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 md:grid-cols-7 gap-2.5 px-4 py-3.5", children: cards.map((card, i) => {
    const isActive = activeFilter === card.filter;
    const handleClick = () => {
      if (!onSelect) return;
      if (isActive && card.filter !== "all") onSelect("all");
      else onSelect(card.filter);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        type: "button",
        initial: { opacity: 0, y: 18, scale: 0.94 },
        animate: { opacity: 1, y: 0, scale: isActive ? 1.04 : 1 },
        transition: { delay: i * 0.05, type: "spring", stiffness: 220, damping: 22 },
        whileHover: { y: -3 },
        whileTap: { scale: 0.97 },
        onClick: handleClick,
        "aria-pressed": isActive,
        className: `glass-card rounded-2xl px-3 py-3 flex flex-col items-center text-center group text-left transition-all duration-300 outline-none
              ${isActive ? `ring-2 ${card.activeRing} shadow-xl` : "ring-0 hover:ring-1 hover:ring-primary/20"}
              ${onSelect ? "cursor-pointer" : "cursor-default"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${card.iconBg} shadow-sm mb-2 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-md ${isActive ? "rotate-6 scale-110" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(card.icon, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-display text-2xl font-black leading-tight transition-colors duration-300 ${isActive ? "text-primary" : "text-foreground group-hover:text-primary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedNumber, { value: card.value }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[10px] font-semibold truncate w-full mt-0.5 ${isActive ? "text-primary" : "text-muted-foreground"}`, children: card.label })
        ]
      },
      card.label
    );
  }) });
}
function HotelStatusFilter({ activeFilter, onFilterChange, counts }) {
  const { t, lang } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 overflow-x-auto py-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => onFilterChange("all"),
        className: `shrink-0 flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 hover-lift
          ${activeFilter === "all" ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-card text-muted-foreground border border-border hover:bg-muted hover:border-primary/30"}`,
        children: [
          t("all"),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-1.5 py-0.5 text-[10px] font-black ${activeFilter === "all" ? "bg-white/20" : "bg-muted"}`, children: counts.all || 0 })
        ]
      }
    ),
    Object.entries(BOOKING_STATUSES).filter(([key]) => key !== "confirmed").map(([key, cfg], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => onFilterChange(key),
        className: `shrink-0 flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition-all duration-300 border hover-lift animate-fade-in-up
            ${activeFilter === key ? `${cfg.tailwindBg} ${cfg.tailwindText} ${cfg.tailwindBorder} shadow-lg scale-105` : "bg-card text-muted-foreground border-border hover:bg-muted hover:border-primary/30"}`,
        style: { animationDelay: `${i * 40}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `h-2.5 w-2.5 rounded-full shrink-0 ${activeFilter === key ? "status-dot-pulse" : ""}`,
              style: { background: cfg.color, transform: activeFilter === key ? "scale(1.4)" : "scale(1)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: cfg.label[lang] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-1.5 py-0.5 text-[10px] font-black ${activeFilter === key ? "bg-background/50" : "bg-muted"}`, children: counts[key] || 0 })
        ]
      },
      key
    ))
  ] });
}
const Dialog = Dialog$1;
const DialogPortal = DialogPortal$1;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogOverlay$1,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogOverlay$1.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 grid place-items-center p-3 pointer-events-none sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent$1,
    {
      ref,
      className: cn(
        "dialog-smooth-content pointer-events-auto relative z-50 grid w-full max-w-lg gap-4 overflow-y-auto overscroll-contain border bg-background p-6 shadow-lg max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-2rem)] sm:rounded-lg data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  ) })
] }));
DialogContent.displayName = DialogContent$1.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogTitle$1,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogTitle$1.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription$1, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = DialogDescription$1.displayName;
const DEFAULT_MAX_LENGTH = 28;
const Input = reactExports.forwardRef(
  ({ className, type, onChange, maxLength, ...props }, ref) => {
    const effectiveMax = typeof maxLength === "number" ? maxLength : DEFAULT_MAX_LENGTH;
    const handleChange = (e) => {
      const val = e.target.value;
      if (typeof val === "string" && val.length > effectiveMax) {
        e.target.value = val.slice(0, effectiveMax);
      }
      onChange?.(e);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        maxLength: effectiveMax,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        onChange: handleChange,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const Select = Select$1;
const SelectValue = SelectValue$1;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectTrigger$1,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectTrigger$1.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollUpButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollDownButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectPortal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectContent$1,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectViewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectContent$1.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectLabel$1, { ref, className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className), ...props }));
SelectLabel.displayName = SelectLabel$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectItem$1,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectItem$1.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectSeparator$1, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function AddCategoryDialog({ open, onClose }) {
  const { t } = useI18n();
  const { addCategory } = useHotelGrid();
  const [name, setName] = reactExports.useState("");
  const [short, setShort] = reactExports.useState("");
  const [maxGuests, setMaxGuests] = reactExports.useState(2);
  reactExports.useEffect(() => {
    if (open) {
      setName("");
      setShort("");
      setMaxGuests(2);
    }
  }, [open]);
  const handleCreate = () => {
    if (!name.trim()) return;
    addCategory({ name: name.trim(), short: short.trim(), maxGuests });
    toast.success(t("categoryCreated"));
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "sm:max-w-[480px] modal-animate rounded-2xl border-2 border-primary/15 shadow-2xl p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96, filter: "blur(2px)" },
      animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
      transition: { duration: 0.2, ease: "easeOut" },
      className: "overflow-hidden rounded-2xl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-primary/15 via-primary/5 to-transparent px-6 pt-6 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-3 text-lg font-black", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display", children: t("addCategoryTitle") })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-bold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-3 w-3 text-primary/60" }),
              t("categoryName"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                autoFocus: true,
                value: name,
                onChange: (e) => setName(e.target.value),
                placeholder: t("categoryNamePlaceholder"),
                className: "h-11 rounded-xl input-focus-glow"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-bold flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-3 w-3 text-primary/60" }),
                t("shortCode")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: short,
                  onChange: (e) => setShort(e.target.value.toUpperCase()),
                  placeholder: t("shortCodePlaceholder"),
                  className: "h-11 rounded-xl input-focus-glow uppercase tracking-wider",
                  maxLength: 10
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-bold flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3 text-primary/60" }),
                t("maxGuests")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  min: 1,
                  max: 10,
                  value: maxGuests,
                  onChange: (e) => setMaxGuests(Number(e.target.value)),
                  className: "h-11 rounded-xl input-focus-glow tabular-nums"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: onClose, className: "rounded-xl", children: t("cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                onClick: handleCreate,
                disabled: !name.trim(),
                className: "rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all",
                children: t("create")
              }
            )
          ] })
        ] })
      ]
    }
  ) }) });
}
function AddRoomDialog({ open, onClose, category }) {
  const { t, lang } = useI18n();
  const { categories, addRoom } = useHotelGrid();
  const [roomNumber, setRoomNumber] = reactExports.useState("");
  const [categoryId, setCategoryId] = reactExports.useState(category?.id ?? "");
  reactExports.useEffect(() => {
    if (open) {
      setRoomNumber("");
      setCategoryId(category?.id ?? categories[0]?.id ?? "");
    }
  }, [open, category, categories]);
  const handleCreate = () => {
    const num = parseInt(roomNumber, 10);
    if (!Number.isFinite(num) || num <= 0) {
      toast.error(t("invalidNumber"));
      return;
    }
    if (!categoryId) return;
    const result = addRoom(categoryId, num);
    if (!result.ok) {
      toast.error(result.reason === "exists" ? t("roomExists") : t("invalidNumber"));
      return;
    }
    toast.success(t("roomCreated"));
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "sm:max-w-[460px] modal-animate rounded-2xl border-2 border-primary/15 shadow-2xl p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96, filter: "blur(2px)" },
      animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
      transition: { duration: 0.2, ease: "easeOut" },
      className: "overflow-hidden rounded-2xl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-primary/15 via-primary/5 to-transparent px-6 pt-6 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-3 text-lg font-black", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DoorOpen, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display block", children: t("addRoomTitle") }),
            category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: category.label[lang] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-bold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-3 w-3 text-primary/60" }),
              t("roomNumber"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                autoFocus: true,
                type: "number",
                min: 1,
                value: roomNumber,
                onChange: (e) => setRoomNumber(e.target.value),
                placeholder: t("roomNumberPlaceholder"),
                className: "h-11 rounded-xl input-focus-glow tabular-nums text-base"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-bold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-3 w-3 text-primary/60" }),
              t("category")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: categoryId, onValueChange: setCategoryId, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-11 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "rounded-xl", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c.id, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-primary/70", children: c.short }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: c.label[lang] })
              ] }) }, c.id)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: onClose, className: "rounded-xl", children: t("cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                onClick: handleCreate,
                disabled: !roomNumber || !categoryId,
                className: "rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all",
                children: t("create")
              }
            )
          ] })
        ] })
      ]
    }
  ) }) });
}
function isVisuallyCriticalNow(booking, now = /* @__PURE__ */ new Date()) {
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  if (booking.status === "booked" || booking.status === "confirmed" || booking.status === "pending") {
    const checkInDay = parseISO(booking.checkIn);
    checkInDay.setHours(0, 0, 0, 0);
    if (today < checkInDay) return false;
    const threshold = booking.checkInLateNight ? 23 * 60 : 11 * 60;
    return today > checkInDay || minutesNow >= threshold;
  }
  if (booking.status === "in-house") {
    const checkOutDay = parseISO(booking.checkOut);
    checkOutDay.setHours(0, 0, 0, 0);
    if (today > checkOutDay) return true;
    if (today < checkOutDay) return false;
    const threshold = booking.checkOutHalfDay ? 22 * 60 + 59 : 10 * 60 + 59;
    return minutesNow >= threshold;
  }
  return false;
}
const BookingBar = reactExports.memo(function BookingBar2({ booking, leftPx, widthPx, onClick, onResize, canResize, onResizeLeft, canResizeLeft, onResizeConflict, onMoveStart, dayWidthPx, isPast }) {
  const { lang, t } = useI18n();
  const { criticalBookingIds } = useNotifications();
  const isCritical = criticalBookingIds.has(booking.id) && isVisuallyCriticalNow(booking);
  const config = BOOKING_STATUSES[booking.status];
  const checkInDate = parseISO(booking.checkIn);
  const checkOutDate = parseISO(booking.checkOut);
  const baseDayDiff = differenceInCalendarDays(checkOutDate, checkInDate);
  const baseHalfNights = baseDayDiff * 2 + (booking.checkOutHalfDay ? 1 : 0) + (booking.checkInHalfDay ? 1 : 0);
  const showGuestCount = widthPx > 240;
  const showNights = widthPx > 280;
  const [resizing, setResizing] = reactExports.useState(null);
  const [previewWidth, setPreviewWidth] = reactExports.useState(null);
  const [previewLeft, setPreviewLeft] = reactExports.useState(null);
  const [previewLate, setPreviewLate] = reactExports.useState(!!booking.checkOutHalfDay);
  const [previewEarly, setPreviewEarly] = reactExports.useState(!!booking.checkInHalfDay);
  const startX = reactExports.useRef(0);
  const startWidth = reactExports.useRef(0);
  const startLeft = reactExports.useRef(0);
  const finalLateRef = reactExports.useRef(!!booking.checkOutHalfDay);
  const finalEarlyRef = reactExports.useRef(!!booking.checkInHalfDay);
  const finalCheckOutRef = reactExports.useRef(booking.checkOut);
  const rafIdRef = reactExports.useRef(null);
  const pendingDxRef = reactExports.useRef(0);
  const movedRef = reactExports.useRef(false);
  const suppressNextClickRef = reactExports.useRef(false);
  const beginResize = reactExports.useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!onResize) return;
    if (booking.status === "checked-out" || booking.status === "dirty" || booking.status === "cleaned") return;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    if (parseISO(booking.checkOut) < today) return;
    setResizing("right");
    startX.current = e.clientX;
    startWidth.current = widthPx;
    finalLateRef.current = !!booking.checkOutHalfDay;
    finalCheckOutRef.current = booking.checkOut;
    setPreviewLate(!!booking.checkOutHalfDay);
    movedRef.current = false;
  }, [onResize, widthPx, booking.checkOutHalfDay, booking.checkOut, booking.status]);
  const beginResizeLeft = reactExports.useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!onResizeLeft) return;
    if (booking.status === "checked-out" || booking.status === "dirty" || booking.status === "cleaned") return;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(booking.checkIn) < today) return;
    setResizing("left");
    startX.current = e.clientX;
    startWidth.current = widthPx;
    startLeft.current = leftPx;
    finalEarlyRef.current = !!booking.checkInHalfDay;
    setPreviewEarly(!!booking.checkInHalfDay);
    movedRef.current = false;
  }, [onResizeLeft, widthPx, leftPx, booking.checkInHalfDay, booking.checkIn, booking.status]);
  reactExports.useEffect(() => {
    if (!resizing) return;
    const halfWidth = dayWidthPx / 2;
    const flush = () => {
      rafIdRef.current = null;
      const dx = pendingDxRef.current;
      if (resizing === "right") {
        const threshold = halfWidth * 0.45;
        const baseHalves = baseDayDiff * 2 + (booking.checkOutHalfDay ? 1 : 0) + (booking.checkInHalfDay ? 1 : 0);
        const movedHalves = Math.trunc((dx + (dx >= 0 ? threshold : -threshold)) / halfWidth);
        const nextHalves = Math.max(1, baseHalves + movedHalves);
        const checkInHalfOffset = booking.checkInHalfDay ? 1 : 0;
        const stayHalvesAfterCheckInDate = Math.max(1, nextHalves - checkInHalfOffset);
        const dayDelta = Math.floor(stayHalvesAfterCheckInDate / 2);
        const nextLate = stayHalvesAfterCheckInDate % 2 === 1;
        finalLateRef.current = nextLate;
        finalCheckOutRef.current = format(addDays(parseISO(booking.checkIn), Math.max(1, dayDelta)), "yyyy-MM-dd");
        setPreviewLate(nextLate);
        setPreviewWidth(Math.max(halfWidth, startWidth.current + movedHalves * halfWidth));
      } else {
        const startedEarly = !!booking.checkInHalfDay;
        const minDx = startedEarly ? 0 : -halfWidth;
        const maxDx = startedEarly ? halfWidth : 0;
        const clampedDx = Math.min(maxDx, Math.max(minDx, dx));
        const earlyProgress = startedEarly ? 1 - clampedDx / halfWidth : -clampedDx / halfWidth;
        const earlyShift = earlyProgress >= 0.5;
        finalEarlyRef.current = earlyShift;
        setPreviewEarly(earlyShift);
        setPreviewLeft(startLeft.current + clampedDx);
        setPreviewWidth(startWidth.current - clampedDx);
      }
    };
    const onMove = (e) => {
      pendingDxRef.current = e.clientX - startX.current;
      if (Math.abs(pendingDxRef.current) >= halfWidth * 0.45) movedRef.current = true;
      if (rafIdRef.current == null) rafIdRef.current = requestAnimationFrame(flush);
    };
    const onUp = () => {
      if (rafIdRef.current != null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
        flush();
      }
      const side = resizing;
      if (movedRef.current) {
        suppressNextClickRef.current = true;
        window.setTimeout(() => {
          suppressNextClickRef.current = false;
        }, 200);
      }
      setResizing(null);
      if (side === "right") {
        const late = finalLateRef.current;
        const checkOut = finalCheckOutRef.current;
        if (onResize && movedRef.current && (late !== !!booking.checkOutHalfDay || checkOut !== booking.checkOut)) {
          if (canResize && !canResize(booking.id, checkOut, late)) {
            onResizeConflict?.();
            setPreviewWidth(null);
            setPreviewLeft(null);
            setPreviewLate(!!booking.checkOutHalfDay);
            setPreviewEarly(!!booking.checkInHalfDay);
            return;
          }
          onResize(booking.id, checkOut, late);
        }
      } else if (side === "left") {
        const early = finalEarlyRef.current;
        if (onResizeLeft && movedRef.current && early !== !!booking.checkInHalfDay) {
          if (canResizeLeft && !canResizeLeft(booking.id, early)) {
            onResizeConflict?.();
            setPreviewWidth(null);
            setPreviewLeft(null);
            setPreviewLate(!!booking.checkOutHalfDay);
            setPreviewEarly(!!booking.checkInHalfDay);
            return;
          }
          onResizeLeft(booking.id, early);
        }
      }
      setPreviewWidth(null);
      setPreviewLeft(null);
      setPreviewLate(!!booking.checkOutHalfDay);
      setPreviewEarly(!!booking.checkInHalfDay);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    };
  }, [resizing, dayWidthPx, onResize, canResize, onResizeLeft, canResizeLeft, onResizeConflict, booking.id, booking.checkIn, booking.checkInHalfDay, booking.checkOut, booking.checkOutHalfDay, baseDayDiff]);
  const effectiveLeft = previewLeft ?? leftPx;
  const effectiveWidth = previewWidth ?? widthPx;
  const effectiveLate = resizing === "right" ? previewLate : !!booking.checkOutHalfDay;
  const effectiveEarly = resizing === "left" ? previewEarly : !!booking.checkInHalfDay;
  const effectiveHalfNights = baseDayDiff * 2 + (effectiveLate ? 1 : 0) + (effectiveEarly ? 1 : 0);
  const effectiveNightsLabel = effectiveHalfNights / 2;
  const isLate = effectiveLate;
  const isEarly = effectiveEarly;
  const lateLabel = t("lateBadge");
  const earlyLabel = t("earlyBadge");
  const isFrozenStatus = booking.status === "checked-out" || booking.status === "dirty" || booking.status === "cleaned";
  const todayForHandles = /* @__PURE__ */ new Date();
  todayForHandles.setHours(0, 0, 0, 0);
  const leftHandleDisabled = isFrozenStatus || parseISO(booking.checkIn) < todayForHandles;
  const rightHandleDisabled = isFrozenStatus || parseISO(booking.checkOut) < todayForHandles;
  const handleBarClick = (e) => {
    e.stopPropagation();
    if (suppressNextClickRef.current) {
      e.preventDefault();
      suppressNextClickRef.current = false;
      return;
    }
    if (!resizing) onClick(booking);
  };
  const barRef = reactExports.useRef(null);
  const [hovered, setHovered] = reactExports.useState(false);
  const hoverTimerRef = reactExports.useRef(null);
  const [popPos, setPopPos] = reactExports.useState(null);
  const computePopPos = reactExports.useCallback(() => {
    const node = barRef.current;
    if (!node) return;
    const r = node.getBoundingClientRect();
    const POP_W = 300;
    const POP_H_EST = 220;
    const margin = 12;
    const placeAbove = r.top > POP_H_EST + margin;
    const top = placeAbove ? r.top - margin : r.bottom + margin;
    let left = r.left + r.width / 2 - POP_W / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - POP_W - 8));
    setPopPos({ top, left, placeAbove });
  }, []);
  const handleMouseEnter = reactExports.useCallback(() => {
    if (resizing) return;
    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = window.setTimeout(() => {
      computePopPos();
      setHovered(true);
    }, 140);
  }, [resizing, computePopPos]);
  const handleMouseLeave = reactExports.useCallback(() => {
    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = window.setTimeout(() => setHovered(false), 80);
  }, []);
  reactExports.useEffect(() => () => {
    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
  }, []);
  reactExports.useEffect(() => {
    if (resizing) setHovered(false);
  }, [resizing]);
  reactExports.useLayoutEffect(() => {
    if (!hovered) return;
    let raf = 0;
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        computePopPos();
      });
    };
    window.addEventListener("scroll", schedule, true);
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule, true);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [hovered, computePopPos]);
  const bar = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: barRef,
      onMouseDown: (e) => {
        if (e.button === 1 && onMoveStart) {
          e.preventDefault();
          e.stopPropagation();
          onMoveStart(booking, e);
          return;
        }
        e.stopPropagation();
      },
      onAuxClick: (e) => {
        if (e.button === 1) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      onClick: handleBarClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      "data-booking-id": booking.id,
      className: `group/bar absolute top-[5px] bottom-[5px] rounded-xl cursor-pointer booking-bar booking-premium-surface
        text-[11px] font-semibold text-primary-foreground flex items-stretch overflow-hidden
        animate-slide-in border backdrop-blur-[2px] transition-[transform,box-shadow] duration-200 ease-out
        hover:-translate-y-[2px]
        ${isPast ? "border-solid border-gray-500 bg-gray-400 opacity-60 grayscale" : `${config.border} ${config.bg} ${config.opacity}`}
        ${isCritical ? "booking-critical-alert" : ""}
        ${resizing ? "ring-2 ring-primary/70 shadow-2xl scale-y-[1.04]" : ""}`,
      style: {
        left: `${effectiveLeft}px`,
        width: `${Math.max(effectiveWidth - 2, 8)}px`,
        transition: resizing ? "none" : "left 140ms cubic-bezier(0.2,0.9,0.4,1.1), width 140ms cubic-bezier(0.2,0.9,0.4,1.1), transform 200ms ease-out, box-shadow 220ms ease-out",
        backgroundImage: !isPast ? "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 45%, rgba(0,0,0,0.18) 100%)" : void 0
      },
      children: [
        !isPast && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "booking-bar-sheen" }),
        isEarly && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "booking-early-strip absolute left-0 top-0 bottom-0 w-[7px] z-[1]" }),
        isLate && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "booking-late-strip absolute right-0 top-0 bottom-0 w-[7px] z-[1]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-[2] flex min-w-0 flex-1 items-center gap-1.5 px-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 text-[11px] leading-none ring-1 ring-primary-foreground/30", children: config.icon }),
          isEarly && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "booking-early-badge shrink-0 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full ring-1 animate-fade-in-up",
              title: `${t("earlyCheckinTitle")} · ${earlyLabel} · 08:00`,
              "aria-label": `${earlyLabel} 08:00`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sunrise, { className: "h-3 w-3" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 truncate whitespace-nowrap text-[11.5px] font-normal tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]", children: formatGuestName(booking) }),
          isLate && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "booking-late-badge shrink-0 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full ring-1 animate-fade-in-up",
              title: `${t("lateCheckoutTitle")} · ${lateLabel} · 24:00`,
              "aria-label": `${lateLabel} 24:00`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-3 w-3" })
            }
          ),
          showGuestCount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 shrink-0 opacity-90 text-[9.5px] tabular-nums bg-black/15 rounded-md px-1.5 py-[2px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-2.5 w-2.5" }),
            booking.guestCount
          ] }),
          showNights && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "shrink-0 opacity-90 text-[9.5px] font-bold tabular-nums bg-black/15 rounded-md px-1.5 py-[2px]", children: [
            Number.isInteger(effectiveNightsLabel) ? effectiveNightsLabel : effectiveNightsLabel.toFixed(1),
            t("nightsLetter")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onMouseDown: (e) => e.stopPropagation(),
              onClick: handleBarClick,
              title: t("detailedInfo") ?? "Detailed information",
              "aria-label": t("detailedInfo") ?? "Detailed information",
              className: "shrink-0 ml-0.5 flex h-5 w-5 items-center justify-center rounded-md bg-white/20 text-white/95 ring-1 ring-white/40 opacity-0 group-hover/bar:opacity-100 hover:bg-white/35 hover:scale-110 transition-all duration-150",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3 w-3" })
            }
          )
        ] }),
        onResizeLeft && !leftHandleDisabled && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onMouseDown: beginResizeLeft,
            onClick: (e) => e.stopPropagation(),
            title: t("dragToEarly"),
            className: "absolute top-0 left-0 h-full w-3 cursor-ew-resize flex items-center justify-center bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity z-[3]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-[3px] rounded-full bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.6)]" })
          }
        ),
        onResize && !rightHandleDisabled && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onMouseDown: beginResize,
            onClick: (e) => e.stopPropagation(),
            title: t("dragToExtend"),
            className: "absolute top-0 right-0 h-full w-3 cursor-ew-resize flex items-center justify-center bg-gradient-to-l from-black/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity z-[3]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-[3px] rounded-full bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.6)]" })
          }
        )
      ]
    }
  );
  const popover = popPos && hovered && typeof document !== "undefined" ? reactDomExports.createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          position: "fixed",
          top: popPos.placeAbove ? void 0 : popPos.top,
          bottom: popPos.placeAbove ? window.innerHeight - popPos.top : void 0,
          left: popPos.left,
          width: 300,
          zIndex: 9999,
          // Popover is informational only — disabling pointer events stops
          // the cursor from re-entering the popover and re-triggering the
          // enter/leave loop that produced the "corner tweak/freeze".
          pointerEvents: "none",
          willChange: "transform, opacity",
          transformOrigin: popPos.placeAbove ? "bottom center" : "top center",
          animation: "booking-pop-in 140ms cubic-bezier(0.2,0.9,0.4,1.05) both"
        },
        className: "rounded-2xl shadow-2xl",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative rounded-2xl border bg-popover p-0 overflow-hidden",
            style: { borderColor: `${config.color}40` },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-1.5 w-full",
                  style: { background: `linear-gradient(90deg, ${config.color}, ${config.color}aa)` }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[15px] font-black leading-tight text-foreground truncate", children: formatGuestName(booking) || (lang === "ru" ? "Гость" : lang === "uz" ? "Mehmon" : "Guest") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5", children: [
                      t("room"),
                      " ",
                      booking.roomNumber
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ring-1",
                      style: {
                        background: `${config.color}1a`,
                        color: config.color,
                        borderColor: `${config.color}40`
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: config.color } }),
                        config.label[lang]
                      ]
                    }
                  )
                ] }),
                (() => {
                  const channel = booking.bookingChannel ?? "offline";
                  const isOnline = channel === "online";
                  const onlineLabel = lang === "ru" ? "Онлайн" : lang === "uz" ? "Onlayn" : "Online";
                  const offlineLabel = lang === "ru" ? "Офлайн" : lang === "uz" ? "Oflayn" : "Offline";
                  const guestLabel = lang === "ru" ? "Гость" : lang === "uz" ? "Mehmon" : "Guest";
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/70", children: guestLabel }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-muted/40 p-[2px] ring-1 ring-border/60 shadow-sm select-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${isOnline ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-[0_1px_4px_-1px_rgba(14,165,233,0.6)] ring-1 ring-sky-600/40" : "text-muted-foreground/60 opacity-70"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1 w-1 rounded-full ${isOnline ? "bg-white" : "bg-sky-500/30"}` }),
                        onlineLabel
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${!isOnline ? "bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-[0_1px_4px_-1px_rgba(15,23,42,0.6)] ring-1 ring-slate-900/50" : "text-muted-foreground/60 opacity-70"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1 w-1 rounded-full ${!isOnline ? "bg-white" : "bg-slate-500/30"}` }),
                        offlineLabel
                      ] })
                    ] })
                  ] });
                })(),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted/40 px-2.5 py-2 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground tabular-nums", children: [
                      booking.checkIn,
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium", children: booking.checkInHalfDay ? "08:00" : "14:00" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "→" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground tabular-nums", children: [
                      booking.checkOut,
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium", children: booking.checkOutHalfDay ? "24:00" : "12:00" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 pt-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md bg-primary/15 px-1.5 py-0.5 text-[10px] font-black text-primary", children: [
                      Number.isInteger(baseHalfNights / 2) ? baseHalfNights / 2 : (baseHalfNights / 2).toFixed(1),
                      " ",
                      t("nightsWord")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3" }),
                      " ",
                      booking.guestCount,
                      " ",
                      t("guestsWord")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                      booking.checkInHalfDay && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-md bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-emerald-700", children: t("earlyBadge") }),
                      booking.checkOutHalfDay && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-md bg-amber-500/20 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-amber-700", children: t("lateBadge") })
                    ] })
                  ] })
                ] }),
                (booking.guestPhone || booking.guestEmail) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 text-[11px]", children: [
                  booking.guestPhone && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-foreground/80", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/70", children: "📞" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold tabular-nums", children: booking.guestPhone })
                  ] }),
                  booking.guestEmail && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-foreground/80 truncate", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/70", children: "✉" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold truncate", children: booking.guestEmail })
                  ] })
                ] }),
                booking.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground italic border-t border-border/40 pt-2 leading-snug", children: [
                  '"',
                  booking.notes,
                  '"'
                ] })
              ] })
            ]
          }
        )
      },
      "booking-hover-pop"
    ),
    document.body
  ) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    bar,
    popover
  ] });
});
const MIN_THUMB_WIDTH = 56;
const MAX_THUMB_WIDTH_RATIO = 0.3;
const EDGE_REQUEST_INTERVAL_MS = 180;
const PROXIMITY_RANGE_PX = 4e3;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const easeInOut = (t) => t * t * (3 - 2 * t);
function TimelineBottomScrollbar({
  scrollRef,
  labelWidth,
  todayContentPx,
  onDragStateChange,
  onEdgeRequest
}) {
  const trackRef = reactExports.useRef(null);
  const thumbRef = reactExports.useRef(null);
  const [metrics, setMetrics] = reactExports.useState({ scrollLeft: 0, scrollWidth: 1, clientWidth: 1 });
  const [trackWidth, setTrackWidth] = reactExports.useState(0);
  const [hovered, setHovered] = reactExports.useState(false);
  const [dragging, setDragging] = reactExports.useState(false);
  const activeDragRef = reactExports.useRef(false);
  const computeThumbWidth = reactExports.useCallback((scrollLeft, clientWidth) => {
    const viewport2 = Math.max(1, clientWidth - labelWidth);
    const viewportCenter = scrollLeft + viewport2 / 2;
    const distance = Math.abs(viewportCenter - todayContentPx);
    const proximity = clamp(1 - distance / PROXIMITY_RANGE_PX, 0, 1);
    const eased = easeInOut(proximity);
    const maxWidth = Math.max(MIN_THUMB_WIDTH + 40, Math.round(trackWidth * MAX_THUMB_WIDTH_RATIO));
    const width = MIN_THUMB_WIDTH + (maxWidth - MIN_THUMB_WIDTH) * eased;
    return Math.round(Math.max(MIN_THUMB_WIDTH, Math.min(trackWidth - 8, width)));
  }, [labelWidth, todayContentPx, trackWidth]);
  const measure = reactExports.useCallback(() => {
    const el = scrollRef.current;
    if (!el || activeDragRef.current) return;
    setMetrics({ scrollLeft: el.scrollLeft, scrollWidth: el.scrollWidth, clientWidth: el.clientWidth });
  }, [scrollRef]);
  reactExports.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        measure();
      });
    };
    measure();
    el.addEventListener("scroll", schedule, { passive: true });
    const ro = new ResizeObserver(schedule);
    ro.observe(el);
    const inner = el.firstElementChild;
    if (inner) ro.observe(inner);
    window.addEventListener("resize", schedule);
    return () => {
      el.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [scrollRef, measure]);
  reactExports.useLayoutEffect(() => {
    if (!trackRef.current) return;
    const ro = new ResizeObserver(([entry]) => setTrackWidth(entry.contentRect.width));
    ro.observe(trackRef.current);
    setTrackWidth(trackRef.current.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);
  const viewport = Math.max(1, metrics.clientWidth - labelWidth);
  const maxScroll = Math.max(1, metrics.scrollWidth - metrics.clientWidth);
  const liveThumbWidth = trackWidth > 0 ? computeThumbWidth(metrics.scrollLeft, metrics.clientWidth) : MIN_THUMB_WIDTH;
  const maxThumbLeft = Math.max(0, trackWidth - liveThumbWidth - 8);
  const liveThumbLeft = clamp(metrics.scrollLeft / maxScroll * maxThumbLeft, 0, maxThumbLeft);
  const onThumbPointerDown = reactExports.useCallback((e) => {
    const el = scrollRef.current;
    if (!el || !trackRef.current) return;
    e.preventDefault();
    e.stopPropagation();
    activeDragRef.current = true;
    setDragging(true);
    onDragStateChange?.(true);
    try {
      e.target.setPointerCapture(e.pointerId);
    } catch {
    }
    let pointerX = e.clientX;
    const startPointerX = e.clientX;
    let anchorScroll = el.scrollLeft;
    let lastScrollWidth = el.scrollWidth;
    let raf = 0;
    let lastEdgeReqAt = 0;
    const writeThumb = (left, width) => {
      if (!thumbRef.current) return;
      thumbRef.current.style.width = `${width}px`;
      thumbRef.current.style.transform = `translate3d(${left + 4}px, -50%, 0)`;
    };
    const requestEdge = (dir) => {
      const now = performance.now();
      if (now - lastEdgeReqAt < EDGE_REQUEST_INTERVAL_MS) return;
      lastEdgeReqAt = now;
      onEdgeRequest?.(dir);
    };
    const tick = () => {
      if (!activeDragRef.current) return;
      const widthDelta = el.scrollWidth - lastScrollWidth;
      if (widthDelta > 0) {
        const scrollLeftMovedForwardApprox = el.scrollLeft - (anchorScroll + (pointerX - startPointerX) * 0);
        if (scrollLeftMovedForwardApprox >= widthDelta * 0.5) {
          anchorScroll += widthDelta;
        }
      }
      const trackLen = trackRef.current?.getBoundingClientRect().width ?? trackWidth;
      const maxScrollNow = Math.max(1, el.scrollWidth - el.clientWidth);
      const liveWidth = computeThumbWidth(anchorScroll + (pointerX - startPointerX) * (maxScrollNow / Math.max(1, trackLen - MIN_THUMB_WIDTH - 8)), el.clientWidth);
      const usableTrack = Math.max(1, trackLen - liveWidth - 8);
      const pointerDelta = pointerX - startPointerX;
      const scrollDelta = pointerDelta * (maxScrollNow / usableTrack);
      let target = anchorScroll + scrollDelta;
      if (target < 0) {
        requestEdge("past");
        target = 0;
      }
      if (target > maxScrollNow) {
        requestEdge("future");
        target = maxScrollNow;
      }
      el.scrollLeft = target;
      const visualLeft = clamp(target / maxScrollNow * usableTrack, 0, usableTrack);
      writeThumb(visualLeft, liveWidth);
      lastScrollWidth = el.scrollWidth;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const move = (ev) => {
      ev.preventDefault();
      pointerX = ev.clientX;
    };
    const up = (ev) => {
      activeDragRef.current = false;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      if (thumbRef.current) {
        thumbRef.current.style.width = "";
        thumbRef.current.style.transform = "";
      }
      setMetrics({ scrollLeft: el.scrollLeft, scrollWidth: el.scrollWidth, clientWidth: el.clientWidth });
      setDragging(false);
      onDragStateChange?.(false);
      try {
        e.target.releasePointerCapture(ev.pointerId);
      } catch {
      }
    };
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  }, [scrollRef, trackWidth, computeThumbWidth, onDragStateChange, onEdgeRequest]);
  const onTrackPointerDown = reactExports.useCallback((e) => {
    if (e.target !== trackRef.current) return;
    const el = scrollRef.current;
    if (!el || !trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - liveThumbWidth / 2;
    const usable = Math.max(1, trackWidth - liveThumbWidth - 8);
    const clamped = clamp(x, 0, usable);
    const target = clamped / usable * (el.scrollWidth - el.clientWidth);
    el.scrollTo({ left: target, behavior: "smooth" });
  }, [scrollRef, liveThumbWidth, trackWidth]);
  reactExports.useEffect(() => () => {
    activeDragRef.current = false;
    onDragStateChange?.(false);
  }, [onDragStateChange]);
  const hidden = metrics.scrollWidth <= viewport + labelWidth + 4;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "sticky bottom-0 z-40 flex w-full select-none border-t border-border/40 bg-gradient-to-b from-background/70 to-background backdrop-blur-md",
      style: {
        height: 24,
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        transition: "opacity 200ms ease"
      },
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: labelWidth }, className: "shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: trackRef,
            onPointerDown: onTrackPointerDown,
            className: "relative flex-1 cursor-pointer",
            style: { touchAction: "none" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute left-1 right-1 top-1/2 -translate-y-1/2 rounded-full bg-muted/60 ring-1 ring-border/60",
                  style: {
                    height: hovered || dragging ? 10 : 6,
                    transition: dragging ? "none" : "height 140ms ease"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  ref: thumbRef,
                  onPointerDown: onThumbPointerDown,
                  role: "scrollbar",
                  "aria-orientation": "horizontal",
                  "aria-valuenow": Math.round(metrics.scrollLeft / maxScroll * 100) || 0,
                  className: "absolute top-1/2 cursor-grab rounded-full bg-gradient-to-b from-primary to-primary/80 shadow-md ring-1 ring-primary/40 active:cursor-grabbing",
                  style: {
                    left: 0,
                    transform: `translate3d(${liveThumbLeft + 4}px, -50%, 0)`,
                    width: liveThumbWidth,
                    height: hovered || dragging ? 14 : 10,
                    transition: dragging ? "none" : "width 260ms cubic-bezier(.22,.61,.36,1), transform 180ms cubic-bezier(.22,.61,.36,1), height 160ms ease, box-shadow 160ms ease",
                    boxShadow: dragging || hovered ? "0 4px 14px -2px color-mix(in oklab, hsl(var(--primary)) 55%, transparent)" : "0 2px 6px -1px color-mix(in oklab, hsl(var(--primary)) 30%, transparent)",
                    touchAction: "none",
                    willChange: dragging ? "transform, width" : "transform"
                  }
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function computePerNightRate(categoryRates, categoryId, residency, guestCount) {
  if (!categoryId) return 0;
  const arr = categoryRates[categoryId]?.[residency] ?? [];
  if (!arr || arr.length === 0) return 0;
  const n = Math.max(1, Number(guestCount) || 1);
  const clean = arr.map((x) => Math.max(0, Number(x) || 0));
  const fallback = clean[clean.length - 1] || clean[0] || 0;
  let total = 0;
  for (let i = 0; i < n; i += 1) total += clean[i] ?? fallback;
  return total;
}
function nightsBetween(fromIso, toIso) {
  try {
    return Math.max(0, differenceInCalendarDays(parseISO(toIso), parseISO(fromIso)));
  } catch {
    return 0;
  }
}
function buildSegment(params) {
  const nights = nightsBetween(params.from, params.to);
  const price = Math.round(nights * params.perNightRate);
  return {
    roomNumber: params.roomNumber,
    categoryId: params.categoryId,
    from: params.from,
    to: params.to,
    nights,
    guestCount: params.guestCount,
    perNightRate: params.perNightRate,
    price
  };
}
function sumSegments(segments) {
  if (!segments || segments.length === 0) return 0;
  return segments.reduce((s, seg) => s + (Number(seg.price) || 0), 0);
}
function repriceSegments(segments, categoryRates, residency, guestCount) {
  if (!segments || segments.length === 0) return [];
  const guests = Math.max(1, Number(guestCount) || 1);
  return segments.map((seg) => buildSegment({
    roomNumber: seg.roomNumber,
    categoryId: seg.categoryId,
    from: seg.from,
    to: seg.to,
    guestCount: guests,
    perNightRate: computePerNightRate(categoryRates, seg.categoryId, residency, guests)
  }));
}
function splitBookingAt(params) {
  const { booking, splitDate, newRoomNumber, newCategoryId, oldCategoryId, residency, categoryRates } = params;
  const checkIn = booking.checkIn;
  const checkOut = booking.checkOut;
  if (!checkIn || !checkOut) return null;
  const maxSplitDays = nightsBetween(checkIn, checkOut) - 1;
  if (maxSplitDays < 1) return null;
  const splitNights = nightsBetween(checkIn, splitDate);
  const clampedNights = Math.min(Math.max(splitNights, 1), maxSplitDays);
  const boundary = (() => {
    const d = parseISO(checkIn);
    d.setDate(d.getDate() + clampedNights);
    return d.toISOString().slice(0, 10);
  })();
  const guestCount = Math.max(1, booking.guestCount || 1);
  const existing = booking.segments ? [...booking.segments] : null;
  const rateFor = (categoryId) => computePerNightRate(categoryRates, categoryId, residency, guestCount);
  const newSegment = buildSegment({
    roomNumber: newRoomNumber,
    categoryId: newCategoryId,
    from: boundary,
    to: checkOut,
    guestCount,
    perNightRate: rateFor(newCategoryId)
  });
  if (!existing) {
    const oldSegment = buildSegment({
      roomNumber: booking.roomNumber,
      categoryId: oldCategoryId,
      from: checkIn,
      to: boundary,
      guestCount,
      perNightRate: rateFor(oldCategoryId)
    });
    return [oldSegment, newSegment];
  }
  const clipped = [];
  for (const seg of existing) {
    if (seg.to <= boundary) {
      clipped.push(buildSegment({
        roomNumber: seg.roomNumber,
        categoryId: seg.categoryId,
        from: seg.from,
        to: seg.to,
        guestCount,
        perNightRate: rateFor(seg.categoryId)
      }));
      continue;
    }
    if (seg.from >= boundary) continue;
    clipped.push(buildSegment({
      roomNumber: seg.roomNumber,
      categoryId: seg.categoryId,
      from: seg.from,
      to: boundary,
      guestCount,
      perNightRate: rateFor(seg.categoryId)
    }));
  }
  clipped.push(newSegment);
  return clipped;
}
function computeSplitDateNow(booking, now = /* @__PURE__ */ new Date()) {
  const todayIso = format(now, "yyyy-MM-dd");
  const hour = now.getHours() + now.getMinutes() / 60;
  let threshold = 12;
  if (booking.checkInHalfDay && todayIso === booking.checkIn) threshold = 8;
  else if (booking.checkOutHalfDay && todayIso === booking.checkOut) threshold = 18;
  let boundary = todayIso;
  if (hour >= threshold) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    boundary = format(d, "yyyy-MM-dd");
  }
  if (boundary <= booking.checkIn) {
    const d = parseISO(booking.checkIn);
    d.setDate(d.getDate() + 1);
    boundary = format(d, "yyyy-MM-dd");
  }
  if (boundary >= booking.checkOut) {
    const d = parseISO(booking.checkOut);
    d.setDate(d.getDate() - 1);
    boundary = format(d, "yyyy-MM-dd");
  }
  return boundary;
}
function formatPrice(value) {
  if (value === null || value === void 0 || value === "") return "0";
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n)) return "0";
  return Math.trunc(n).toLocaleString("ru-RU");
}
function formatInputNumber(value) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  return Number(digits).toLocaleString("ru-RU");
}
function parseInputNumber(value) {
  return value.replace(/\s/g, "");
}
const AlertDialog = Root2;
const AlertDialogPortal = Portal2;
const AlertDialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay2,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = Overlay2.displayName;
const AlertDialogContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 grid place-items-center p-3 pointer-events-none sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      ref,
      className: cn(
        "pointer-events-auto relative z-50 grid w-full max-w-lg gap-4 overflow-y-auto overscroll-contain border bg-background p-6 shadow-lg duration-200 max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-2rem)] sm:rounded-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  ) })
] }));
AlertDialogContent.displayName = Content2.displayName;
const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Title2, { ref, className: cn("text-lg font-semibold", className), ...props }));
AlertDialogTitle.displayName = Title2.displayName;
const AlertDialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Description2, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
AlertDialogDescription.displayName = Description2.displayName;
const AlertDialogAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = Action.displayName;
const AlertDialogCancel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = Cancel.displayName;
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const stateKeySchema = enumType(["bookings", "grid", "admins", "audit", "auth-history", "guests", "anketas", "passports"]);
const getStateSchema = objectType({
  key: stateKeySchema
});
const setStateSchema = objectType({
  key: stateKeySchema,
  stateData: anyType()
});
const getHotelState = createServerFn({
  method: "GET"
}).inputValidator((input) => getStateSchema.parse(input)).handler(createSsrRpc("89b60288b8b232346474bc8bf300257346a58b7164121f204f414697ad1faac3"));
const setHotelState = createServerFn({
  method: "POST"
}).inputValidator((input) => setStateSchema.parse(input)).handler(createSsrRpc("114603339148d6b7cfbc2a9a16d7c155014b773beb6587879438626e7354f351"));
const memCache = {};
function useSharedNamespace(key, eventName) {
  const getShared = useServerFn(getHotelState);
  const setShared = useServerFn(setHotelState);
  const [map, setMap] = reactExports.useState(() => memCache[key] ?? {});
  const mapRef = reactExports.useRef(memCache[key] ?? {});
  const writeTimer = reactExports.useRef(null);
  const lastVersion = reactExports.useRef(0);
  const pendingWrite = reactExports.useRef(false);
  reactExports.useEffect(() => {
    mapRef.current = map;
  }, [map]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const onLocal = () => {
      const fresh = memCache[key];
      if (fresh && fresh !== mapRef.current) setMap(fresh);
    };
    window.addEventListener(eventName, onLocal);
    return () => window.removeEventListener(eventName, onLocal);
  }, [eventName, key]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    const pull = async () => {
      try {
        const row = await getShared({ data: { key } });
        if (cancelled || !row?.stateData) return;
        if (row.version <= lastVersion.current || pendingWrite.current) return;
        lastVersion.current = row.version;
        const next = row.stateData || {};
        memCache[key] = next;
        setMap(next);
        window.dispatchEvent(new Event(eventName));
      } catch {
      }
    };
    void pull();
    const id = window.setInterval(pull, 2e3);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, [getShared, key, eventName]);
  const setRecord = reactExports.useCallback((id, data) => {
    setMap((prev) => {
      const next = { ...prev, [id]: data };
      mapRef.current = next;
      memCache[key] = next;
      pendingWrite.current = true;
      if (typeof window !== "undefined") {
        if (writeTimer.current) window.clearTimeout(writeTimer.current);
        writeTimer.current = window.setTimeout(() => {
          void setShared({ data: { key, stateData: mapRef.current } }).then((row) => {
            lastVersion.current = row.version;
            pendingWrite.current = false;
          }).catch(() => {
            pendingWrite.current = false;
          });
        }, 150);
        window.dispatchEvent(new Event(eventName));
      }
      return next;
    });
  }, [setShared, key, eventName]);
  return { map, setRecord };
}
const MAX_X_GUESS = 65535;
const MAX_Y_GUESS = 65535;
const MAX_P_GUESS = 1023;
function useSignaturePadHID(onSample) {
  const [supported, setSupported] = reactExports.useState(false);
  const [connected, setConnected] = reactExports.useState(false);
  const [deviceName, setDeviceName] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const deviceRef = reactExports.useRef(null);
  const cbRef = reactExports.useRef(onSample);
  reactExports.useEffect(() => {
    cbRef.current = onSample;
  }, [onSample]);
  reactExports.useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.hid) {
      setSupported(true);
    }
  }, []);
  const handleReport = reactExports.useCallback((e) => {
    const dv = e.data;
    if (dv.byteLength < 4) return;
    const x = dv.getUint16(0, true);
    const y = dv.getUint16(2, true);
    const pressure = dv.byteLength >= 6 ? dv.getUint16(4, true) : dv.getUint8(dv.byteLength - 1);
    const tipByte = dv.byteLength >= 7 ? dv.getUint8(6) : pressure > 0 ? 1 : 0;
    const down = (tipByte & 1) === 1 || pressure > 0;
    cbRef.current({
      x: Math.min(1, x / MAX_X_GUESS),
      y: Math.min(1, y / MAX_Y_GUESS),
      pressure: Math.min(1, pressure / MAX_P_GUESS),
      down
    });
  }, []);
  const disconnect = reactExports.useCallback(async () => {
    const d = deviceRef.current;
    if (!d) return;
    try {
      d.removeEventListener("inputreport", handleReport);
      if (d.opened) await d.close();
    } catch {
    }
    deviceRef.current = null;
    setConnected(false);
    setDeviceName(null);
  }, [handleReport]);
  const connect = reactExports.useCallback(async () => {
    setError(null);
    if (!navigator.hid) {
      setError("WebHID not supported in this browser");
      return;
    }
    try {
      const devices = await navigator.hid.requestDevice({ filters: [] });
      const device = devices[0];
      if (!device) return;
      if (!device.opened) await device.open();
      device.addEventListener("inputreport", handleReport);
      deviceRef.current = device;
      setDeviceName(device.productName ?? "USB Signature Pad");
      setConnected(true);
    } catch (err) {
      setError(err.message);
    }
  }, [handleReport]);
  reactExports.useEffect(() => {
    let alive = true;
    if (!navigator.hid) return;
    navigator.hid.getDevices().then(async (devs) => {
      if (!alive || devs.length === 0) return;
      const device = devs[0];
      try {
        if (!device.opened) await device.open();
        device.addEventListener("inputreport", handleReport);
        deviceRef.current = device;
        setDeviceName(device.productName ?? "USB Signature Pad");
        setConnected(true);
      } catch {
      }
    }).catch(() => {
    });
    return () => {
      alive = false;
    };
  }, [handleReport]);
  reactExports.useEffect(() => {
    return () => {
      void disconnect();
    };
  }, [disconnect]);
  return { supported, connected, deviceName, error, connect, disconnect };
}
function UnsavedCloseWarning({
  open,
  onCancel,
  onDiscard,
  onSave,
  title,
  message,
  discardLabel,
  saveLabel,
  saveDisabled = false
}) {
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onCancel]);
  if (typeof document === "undefined") return null;
  return reactDomExports.createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        "data-unsaved-close-warning": "true",
        className: "fixed inset-0 z-[2147483000] flex items-center justify-center px-4 pointer-events-auto",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        onMouseDown: (e) => e.stopPropagation(),
        onPointerDown: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute inset-0 bg-foreground/70 backdrop-blur-md",
              onClick: onCancel,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9, y: 24 },
              animate: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { type: "spring", stiffness: 340, damping: 26 }
              },
              exit: { opacity: 0, scale: 0.92, y: 12, transition: { duration: 0.15 } },
              className: "relative w-full max-w-[26rem] overflow-hidden rounded-3xl border border-destructive/20 bg-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ring-background/10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    "aria-hidden": true,
                    className: "pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-destructive/25 blur-3xl",
                    animate: { scale: [1, 1.12, 1], opacity: [0.4, 0.65, 0.4] },
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    "aria-hidden": true,
                    className: "pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl",
                    animate: { scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25] },
                    transition: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: onCancel,
                    "aria-label": "Close",
                    className: "absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground backdrop-blur transition hover:border-foreground/40 hover:bg-background hover:text-foreground",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-7 pt-8 pb-6 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-destructive to-destructive/70 text-destructive-foreground shadow-lg shadow-destructive/40",
                      initial: { scale: 0.6, rotate: -8 },
                      animate: {
                        scale: 1,
                        rotate: [0, -6, 6, -4, 4, 0]
                      },
                      transition: { duration: 1, ease: "easeOut" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-8 w-8" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display text-2xl font-black tracking-tight text-foreground", children: title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-2 max-w-[22rem] text-sm leading-relaxed text-muted-foreground", children: message })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col-reverse gap-2 border-t border-border/60 bg-background/70 px-6 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "destructive",
                      size: "sm",
                      onClick: onDiscard,
                      className: "w-full gap-1.5 rounded-xl shadow-md shadow-destructive/30 sm:flex-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }),
                        " ",
                        discardLabel
                      ]
                    }
                  ),
                  onSave && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      onClick: onSave,
                      disabled: saveDisabled,
                      className: "w-full gap-1.5 rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/30 hover:bg-primary/90 sm:flex-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-3.5 w-3.5" }),
                        " ",
                        saveLabel
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    ) }),
    document.body
  );
}
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function buildMonthGrid(month) {
  const first = startOfMonth(month);
  const start = new Date(first);
  start.setDate(start.getDate() - first.getDay());
  const days = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d);
  }
  return days;
}
function SmoothDropdown({
  value,
  options,
  onChange,
  ariaLabel,
  align = "center",
  minWidth = "8rem"
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [drop, setDrop] = reactExports.useState("down");
  const rootRef = reactExports.useRef(null);
  const listRef = reactExports.useRef(null);
  const selected = options.find((o) => o.value === value) ?? options[0];
  reactExports.useEffect(() => {
    if (!open) return;
    const onMouse = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onMouse);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouse);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  reactExports.useLayoutEffect(() => {
    if (!open || !rootRef.current) return;
    const rect = rootRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const desired = 280;
    setDrop(spaceBelow < desired && spaceAbove > spaceBelow ? "up" : "down");
  }, [open]);
  reactExports.useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => {
      listRef.current?.querySelector('[data-selected="true"]')?.scrollIntoView({ block: "center" });
    });
    return () => cancelAnimationFrame(id);
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: rootRef, className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "aria-label": ariaLabel,
        "aria-expanded": open,
        onClick: () => setOpen((v) => !v),
        className: cn(
          "group inline-flex h-10 items-center justify-between gap-2 rounded-xl border border-border/70 bg-background px-3.5 text-sm font-semibold text-foreground shadow-sm",
          "transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out",
          "hover:border-primary/60 hover:bg-accent/40 hover:shadow-md hover:shadow-primary/10",
          "active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
          open && "border-primary/60 ring-2 ring-primary/30 bg-accent/40"
        ),
        style: { minWidth },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: selected?.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: cn(
                "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                open && "rotate-180 text-primary"
              )
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: listRef,
        role: "listbox",
        onWheel: (e) => e.stopPropagation(),
        style: { scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" },
        className: cn(
          "absolute z-[140] max-h-72 overflow-y-auto overscroll-contain",
          "rounded-2xl border border-border/80 bg-popover p-1.5 shadow-2xl shadow-primary/15 ring-1 ring-primary/10",
          "origin-top animate-in fade-in-0 zoom-in-95 slide-in-from-top-1 duration-150",
          drop === "down" ? "top-full mt-2" : "bottom-full mb-2 origin-bottom slide-in-from-bottom-1",
          align === "start" && "left-0",
          align === "center" && "left-1/2 -translate-x-1/2",
          align === "end" && "right-0"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minWidth }, children: options.map((option) => {
          const isSelected = option.value === value;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": isSelected,
              "data-selected": isSelected,
              onClick: () => {
                onChange(option.value);
                setOpen(false);
              },
              className: cn(
                "flex h-10 w-full items-center rounded-xl px-3 text-left text-sm font-medium text-foreground",
                "transition-colors duration-150 hover:bg-accent hover:text-accent-foreground",
                isSelected && "bg-primary text-primary-foreground shadow-sm shadow-primary/30 hover:bg-primary hover:text-primary-foreground"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: option.label })
            },
            option.value
          );
        }) })
      }
    )
  ] });
}
function Calendar(props) {
  const {
    defaultMonth,
    startMonth,
    endMonth,
    disabled,
    className,
    showOutsideDays = true
  } = props;
  const now = /* @__PURE__ */ new Date();
  const fromYear = (startMonth ?? new Date(1925, 0)).getFullYear();
  const toYear = (endMonth ?? new Date(now.getFullYear() + 25, 11)).getFullYear();
  const initialMonth = reactExports.useMemo(() => {
    if (defaultMonth) return startOfMonth(defaultMonth);
    if (props.mode === "range" && props.selected?.from)
      return startOfMonth(props.selected.from);
    if (props.mode !== "range" && props.selected)
      return startOfMonth(props.selected);
    return startOfMonth(now);
  }, [defaultMonth, props]);
  const [viewMonth, setViewMonth] = reactExports.useState(initialMonth);
  const [animDir, setAnimDir] = reactExports.useState(1);
  const days = reactExports.useMemo(() => buildMonthGrid(viewMonth), [viewMonth]);
  const goto = (next) => {
    setAnimDir(next > viewMonth ? 1 : -1);
    setViewMonth(startOfMonth(next));
  };
  const yearOptions = reactExports.useMemo(
    () => Array.from({ length: toYear - fromYear + 1 }, (_, i) => {
      const y = fromYear + i;
      return { value: y, label: String(y) };
    }),
    [fromYear, toYear]
  );
  const monthOptions = MONTHS.map((label, value) => ({ value, label }));
  const selectedFrom = props.mode === "range" ? props.selected?.from : props.selected;
  const selectedTo = props.mode === "range" ? props.selected?.to : void 0;
  const isSelected = (d) => {
    if (props.mode === "range") {
      if (selectedFrom && isSameDay(d, selectedFrom)) return true;
      if (selectedTo && isSameDay(d, selectedTo)) return true;
      return false;
    }
    return selectedFrom ? isSameDay(d, selectedFrom) : false;
  };
  const isInRange = (d) => {
    if (props.mode !== "range" || !selectedFrom || !selectedTo) return false;
    return d > selectedFrom && d < selectedTo;
  };
  const handlePick = (d) => {
    if (disabled?.(d)) return;
    if (props.mode === "range") {
      const cur = props.selected ?? {};
      if (!cur.from || cur.from && cur.to) {
        props.onSelect?.({ from: d, to: void 0 });
      } else if (d < cur.from) {
        props.onSelect?.({ from: d, to: cur.from });
      } else {
        props.onSelect?.({ from: cur.from, to: d });
      }
    } else {
      props.onSelect?.(d);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "pointer-events-auto select-none bg-popover text-popover-foreground rounded-2xl p-4 w-[360px] max-w-[calc(100vw-2rem)]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Previous month",
              onClick: () => goto(addMonths(viewMonth, -1)),
              className: cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background ring-1 ring-border/60 text-muted-foreground shadow-sm",
                "transition-[background-color,color,box-shadow,transform] duration-200 ease-out",
                "hover:text-primary-foreground hover:bg-primary hover:ring-primary/60 hover:shadow-md hover:shadow-primary/30",
                "active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SmoothDropdown,
              {
                ariaLabel: "Month",
                value: viewMonth.getMonth(),
                options: monthOptions,
                onChange: (m) => goto(setMonth(viewMonth, m)),
                align: "center",
                minWidth: "8.5rem"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SmoothDropdown,
              {
                ariaLabel: "Year",
                value: viewMonth.getFullYear(),
                options: yearOptions,
                onChange: (y) => goto(setYear(viewMonth, y)),
                align: "center",
                minWidth: "5.5rem"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Next month",
              onClick: () => goto(addMonths(viewMonth, 1)),
              className: cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background ring-1 ring-border/60 text-muted-foreground shadow-sm",
                "transition-[background-color,color,box-shadow,transform] duration-200 ease-out",
                "hover:text-primary-foreground hover:bg-primary hover:ring-primary/60 hover:shadow-md hover:shadow-primary/30",
                "active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-7 gap-1", children: WEEKDAYS.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex h-8 items-center justify-center text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground/80",
            children: w
          },
          w
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mt-1 grid grid-cols-7 gap-1 animate-in fade-in-0 duration-200",
            "data-anim-dir": animDir,
            children: days.map((d) => {
              const outside = !isSameMonth(d, viewMonth);
              if (outside && !showOutsideDays) {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-full" }, d.toISOString());
              }
              const today = isSameDay(d, now);
              const sel = isSelected(d);
              const inRange = isInRange(d);
              const isDisabled = disabled?.(d) ?? false;
              const isRangeStart = props.mode === "range" && selectedFrom && isSameDay(d, selectedFrom);
              const isRangeEnd = props.mode === "range" && selectedTo && isSameDay(d, selectedTo);
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  disabled: isDisabled,
                  onClick: () => handlePick(d),
                  className: cn(
                    "relative flex h-10 w-full items-center justify-center text-sm font-medium",
                    "transition-[background-color,color,transform,box-shadow] duration-150 ease-out",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                    "rounded-full",
                    outside && "text-muted-foreground/40 font-normal",
                    !outside && !sel && !inRange && "text-foreground/85 hover:bg-accent hover:text-accent-foreground hover:scale-105",
                    today && !sel && "ring-2 ring-primary/50 text-primary font-bold",
                    inRange && "bg-accent/60 text-accent-foreground rounded-none",
                    sel && "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/30 ring-2 ring-primary/30 hover:bg-primary",
                    isRangeStart && inRange && "rounded-l-full rounded-r-none",
                    isRangeEnd && inRange && "rounded-r-full rounded-l-none",
                    isDisabled && "text-muted-foreground/30 cursor-not-allowed hover:bg-transparent hover:scale-100"
                  ),
                  "aria-pressed": sel || void 0,
                  "aria-label": format(d, "PPP"),
                  children: d.getDate()
                },
                d.toISOString()
              );
            })
          },
          `${viewMonth.getFullYear()}-${viewMonth.getMonth()}`
        )
      ]
    }
  );
}
Calendar.displayName = "Calendar";
function parseISOSafe(value) {
  if (!value) return void 0;
  try {
    const parsed = parseISO(value);
    return isValid(parsed) ? parsed : void 0;
  } catch {
    return void 0;
  }
}
function maskDateInput(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  const parts = [];
  if (digits.length > 0) parts.push(digits.slice(0, 2));
  if (digits.length > 2) parts.push(digits.slice(2, 4));
  if (digits.length > 4) parts.push(digits.slice(4, 8));
  return parts.join(".");
}
function parseTyped(value) {
  const v = value.trim();
  if (!v) return void 0;
  const formats = ["dd.MM.yyyy", "dd/MM/yyyy", "dd-MM-yyyy", "yyyy-MM-dd"];
  for (const f of formats) {
    const d = parse(v, f, /* @__PURE__ */ new Date());
    if (isValid(d)) return d;
  }
  return void 0;
}
function HotelDatePicker({ label, value, onChange, min, required, compact, showLabel = true, className }) {
  const selected = parseISOSafe(value);
  const minDate = parseISOSafe(min);
  const humanDate = selected ? format(selected, "EEE, d MMM") : "";
  const [typed, setTyped] = reactExports.useState(selected ? format(selected, "dd.MM.yyyy") : "");
  const [open, setOpen] = reactExports.useState(false);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    setTyped(selected ? format(selected, "dd.MM.yyyy") : "");
  }, [value]);
  const commitTyped = (raw) => {
    const d = parseTyped(raw);
    if (d) {
      if (minDate && isBefore(startOfDay(d), startOfDay(minDate))) {
        toast.error(`Дата не может быть раньше ${format(minDate, "dd.MM.yyyy")}`);
        setTyped(selected ? format(selected, "dd.MM.yyyy") : "");
        return;
      }
      onChange(format(d, "yyyy-MM-dd"));
    } else if (!raw.trim()) ;
    else {
      setTyped(selected ? format(selected, "dd.MM.yyyy") : "");
    }
  };
  const today = /* @__PURE__ */ new Date();
  const fromYear = 1925;
  const toYear = today.getFullYear() + 25;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("relative w-full", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "group/date relative flex w-full items-center rounded-xl border-2 border-primary/25 bg-background text-left shadow-sm transition-all duration-200 hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/30",
        compact ? "px-3 py-2" : "p-2.5"
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col", children: [
        showLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-5 w-5 items-center justify-center rounded-md bg-primary/12 text-primary ring-1 ring-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3 w-3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase tracking-[0.08em] text-muted-foreground", children: [
            label,
            required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-destructive", children: "*" })
          ] }),
          humanDate && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[10px] font-bold tabular-nums text-primary/80", children: humanDate })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center justify-between gap-2", showLabel && "mt-1", compact && showLabel && "mt-0.5"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: inputRef,
              type: "text",
              inputMode: "numeric",
              autoComplete: "off",
              maxLength: 10,
              value: typed,
              placeholder: "дд.мм.гггг",
              onChange: (e) => setTyped(maskDateInput(e.target.value)),
              onPaste: (e) => {
                e.preventDefault();
                const text = e.clipboardData.getData("text");
                setTyped(maskDateInput(text));
              },
              onBlur: (e) => commitTyped(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  commitTyped(e.target.value);
                  inputRef.current?.blur();
                }
              },
              className: cn(
                "min-w-0 flex-1 border-0 bg-transparent p-0 font-black tabular-nums text-foreground outline-none placeholder:text-muted-foreground/50 focus:outline-none focus:ring-0",
                compact ? "text-sm" : "text-[15px]"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open, onOpenChange: setOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "aria-label": "Open calendar",
                className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition hover:bg-primary hover:text-primary-foreground",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5" })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              PopoverContent,
              {
                align: "end",
                side: "bottom",
                sideOffset: 8,
                collisionPadding: 12,
                avoidCollisions: true,
                className: "z-[90] w-auto max-h-[min(580px,85vh)] overflow-y-auto rounded-2xl border border-border/60 bg-popover p-0 shadow-2xl shadow-primary/15",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 border-b border-border/60 bg-gradient-to-r from-primary/10 via-accent/30 to-primary/5 px-4 py-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.18em] text-primary", children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm font-semibold tabular-nums text-foreground truncate", children: selected ? format(selected, "dd MMMM yyyy") : "—" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Calendar,
                    {
                      mode: "single",
                      captionLayout: "dropdown",
                      startMonth: new Date(fromYear, 0),
                      endMonth: new Date(toYear, 11),
                      defaultMonth: selected ?? today,
                      selected,
                      disabled: minDate ? (d) => isBefore(startOfDay(d), startOfDay(minDate)) : void 0,
                      onSelect: (date) => {
                        if (!date) return;
                        if (minDate && isBefore(startOfDay(date), startOfDay(minDate))) {
                          toast.error(`Дата не может быть раньше ${format(minDate, "dd.MM.yyyy")}`);
                          return;
                        }
                        onChange(format(date, "yyyy-MM-dd"));
                        setOpen(false);
                      },
                      initialFocus: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 border-t border-border/60 bg-muted/25 px-3 py-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        size: "sm",
                        variant: "ghost",
                        className: "h-8 rounded-lg px-3 text-xs font-semibold text-primary hover:bg-primary/10",
                        onClick: () => {
                          const t = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
                          if (minDate && isBefore(startOfDay(/* @__PURE__ */ new Date()), startOfDay(minDate))) {
                            toast.error(`Дата не может быть раньше ${format(minDate, "dd.MM.yyyy")}`);
                            return;
                          }
                          onChange(t);
                          setOpen(false);
                        },
                        children: "Today"
                      }
                    ),
                    minDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-semibold text-muted-foreground tabular-nums", children: [
                      "min ",
                      format(minDate, "dd.MM.yyyy")
                    ] })
                  ] })
                ]
              }
            )
          ] })
        ] })
      ] })
    }
  ) });
}
const COUNTRIES = [
  { code: "UZ", ru: "Узбекистан", en: "Uzbekistan", uz: "O'zbekiston", flag: "🇺🇿" },
  { code: "RU", ru: "Россия", en: "Russia", uz: "Rossiya", flag: "🇷🇺" },
  { code: "KZ", ru: "Казахстан", en: "Kazakhstan", uz: "Qozog'iston", flag: "🇰🇿" },
  { code: "KG", ru: "Кыргызстан", en: "Kyrgyzstan", uz: "Qirg'iziston", flag: "🇰🇬" },
  { code: "TJ", ru: "Таджикистан", en: "Tajikistan", uz: "Tojikiston", flag: "🇹🇯" },
  { code: "TM", ru: "Туркменистан", en: "Turkmenistan", uz: "Turkmaniston", flag: "🇹🇲" },
  { code: "AF", ru: "Афганистан", en: "Afghanistan", uz: "Afg'oniston", flag: "🇦🇫" },
  { code: "AZ", ru: "Азербайджан", en: "Azerbaijan", uz: "Ozarbayjon", flag: "🇦🇿" },
  { code: "AM", ru: "Армения", en: "Armenia", uz: "Armaniston", flag: "🇦🇲" },
  { code: "BY", ru: "Беларусь", en: "Belarus", uz: "Belarus", flag: "🇧🇾" },
  { code: "GE", ru: "Грузия", en: "Georgia", uz: "Gruziya", flag: "🇬🇪" },
  { code: "MD", ru: "Молдова", en: "Moldova", uz: "Moldova", flag: "🇲🇩" },
  { code: "UA", ru: "Украина", en: "Ukraine", uz: "Ukraina", flag: "🇺🇦" },
  { code: "TR", ru: "Турция", en: "Turkey", uz: "Turkiya", flag: "🇹🇷" },
  { code: "CN", ru: "Китай", en: "China", uz: "Xitoy", flag: "🇨🇳" },
  { code: "IN", ru: "Индия", en: "India", uz: "Hindiston", flag: "🇮🇳" },
  { code: "PK", ru: "Пакистан", en: "Pakistan", uz: "Pokiston", flag: "🇵🇰" },
  { code: "IR", ru: "Иран", en: "Iran", uz: "Eron", flag: "🇮🇷" },
  { code: "IQ", ru: "Ирак", en: "Iraq", uz: "Iroq", flag: "🇮🇶" },
  { code: "SA", ru: "Саудовская Аравия", en: "Saudi Arabia", uz: "Saudiya Arabistoni", flag: "🇸🇦" },
  { code: "AE", ru: "ОАЭ", en: "United Arab Emirates", uz: "BAA", flag: "🇦🇪" },
  { code: "QA", ru: "Катар", en: "Qatar", uz: "Qatar", flag: "🇶🇦" },
  { code: "KW", ru: "Кувейт", en: "Kuwait", uz: "Quvayt", flag: "🇰🇼" },
  { code: "IL", ru: "Израиль", en: "Israel", uz: "Isroil", flag: "🇮🇱" },
  { code: "JO", ru: "Иордания", en: "Jordan", uz: "Iordaniya", flag: "🇯🇴" },
  { code: "LB", ru: "Ливан", en: "Lebanon", uz: "Livan", flag: "🇱🇧" },
  { code: "SY", ru: "Сирия", en: "Syria", uz: "Suriya", flag: "🇸🇾" },
  { code: "EG", ru: "Египет", en: "Egypt", uz: "Misr", flag: "🇪🇬" },
  { code: "JP", ru: "Япония", en: "Japan", uz: "Yaponiya", flag: "🇯🇵" },
  { code: "KR", ru: "Южная Корея", en: "South Korea", uz: "Janubiy Koreya", flag: "🇰🇷" },
  { code: "KP", ru: "Северная Корея", en: "North Korea", uz: "Shimoliy Koreya", flag: "🇰🇵" },
  { code: "MN", ru: "Монголия", en: "Mongolia", uz: "Mo'g'uliston", flag: "🇲🇳" },
  { code: "VN", ru: "Вьетнам", en: "Vietnam", uz: "Vyetnam", flag: "🇻🇳" },
  { code: "TH", ru: "Таиланд", en: "Thailand", uz: "Tailand", flag: "🇹🇭" },
  { code: "ID", ru: "Индонезия", en: "Indonesia", uz: "Indoneziya", flag: "🇮🇩" },
  { code: "MY", ru: "Малайзия", en: "Malaysia", uz: "Malayziya", flag: "🇲🇾" },
  { code: "SG", ru: "Сингапур", en: "Singapore", uz: "Singapur", flag: "🇸🇬" },
  { code: "PH", ru: "Филиппины", en: "Philippines", uz: "Filippin", flag: "🇵🇭" },
  { code: "BD", ru: "Бангладеш", en: "Bangladesh", uz: "Bangladesh", flag: "🇧🇩" },
  { code: "LK", ru: "Шри-Ланка", en: "Sri Lanka", uz: "Shri-Lanka", flag: "🇱🇰" },
  { code: "NP", ru: "Непал", en: "Nepal", uz: "Nepal", flag: "🇳🇵" },
  { code: "GB", ru: "Великобритания", en: "United Kingdom", uz: "Buyuk Britaniya", flag: "🇬🇧" },
  { code: "US", ru: "США", en: "United States", uz: "AQSH", flag: "🇺🇸" },
  { code: "CA", ru: "Канада", en: "Canada", uz: "Kanada", flag: "🇨🇦" },
  { code: "MX", ru: "Мексика", en: "Mexico", uz: "Meksika", flag: "🇲🇽" },
  { code: "BR", ru: "Бразилия", en: "Brazil", uz: "Braziliya", flag: "🇧🇷" },
  { code: "AR", ru: "Аргентина", en: "Argentina", uz: "Argentina", flag: "🇦🇷" },
  { code: "DE", ru: "Германия", en: "Germany", uz: "Germaniya", flag: "🇩🇪" },
  { code: "FR", ru: "Франция", en: "France", uz: "Fransiya", flag: "🇫🇷" },
  { code: "IT", ru: "Италия", en: "Italy", uz: "Italiya", flag: "🇮🇹" },
  { code: "ES", ru: "Испания", en: "Spain", uz: "Ispaniya", flag: "🇪🇸" },
  { code: "PT", ru: "Португалия", en: "Portugal", uz: "Portugaliya", flag: "🇵🇹" },
  { code: "NL", ru: "Нидерланды", en: "Netherlands", uz: "Niderlandiya", flag: "🇳🇱" },
  { code: "BE", ru: "Бельгия", en: "Belgium", uz: "Belgiya", flag: "🇧🇪" },
  { code: "CH", ru: "Швейцария", en: "Switzerland", uz: "Shveytsariya", flag: "🇨🇭" },
  { code: "AT", ru: "Австрия", en: "Austria", uz: "Avstriya", flag: "🇦🇹" },
  { code: "PL", ru: "Польша", en: "Poland", uz: "Polsha", flag: "🇵🇱" },
  { code: "CZ", ru: "Чехия", en: "Czech Republic", uz: "Chexiya", flag: "🇨🇿" },
  { code: "SK", ru: "Словакия", en: "Slovakia", uz: "Slovakiya", flag: "🇸🇰" },
  { code: "HU", ru: "Венгрия", en: "Hungary", uz: "Vengriya", flag: "🇭🇺" },
  { code: "RO", ru: "Румыния", en: "Romania", uz: "Ruminiya", flag: "🇷🇴" },
  { code: "BG", ru: "Болгария", en: "Bulgaria", uz: "Bolgariya", flag: "🇧🇬" },
  { code: "GR", ru: "Греция", en: "Greece", uz: "Gretsiya", flag: "🇬🇷" },
  { code: "SE", ru: "Швеция", en: "Sweden", uz: "Shvetsiya", flag: "🇸🇪" },
  { code: "NO", ru: "Норвегия", en: "Norway", uz: "Norvegiya", flag: "🇳🇴" },
  { code: "FI", ru: "Финляндия", en: "Finland", uz: "Finlyandiya", flag: "🇫🇮" },
  { code: "DK", ru: "Дания", en: "Denmark", uz: "Daniya", flag: "🇩🇰" },
  { code: "IE", ru: "Ирландия", en: "Ireland", uz: "Irlandiya", flag: "🇮🇪" },
  { code: "IS", ru: "Исландия", en: "Iceland", uz: "Islandiya", flag: "🇮🇸" },
  { code: "EE", ru: "Эстония", en: "Estonia", uz: "Estoniya", flag: "🇪🇪" },
  { code: "LV", ru: "Латвия", en: "Latvia", uz: "Latviya", flag: "🇱🇻" },
  { code: "LT", ru: "Литва", en: "Lithuania", uz: "Litva", flag: "🇱🇹" },
  { code: "RS", ru: "Сербия", en: "Serbia", uz: "Serbiya", flag: "🇷🇸" },
  { code: "HR", ru: "Хорватия", en: "Croatia", uz: "Xorvatiya", flag: "🇭🇷" },
  { code: "AU", ru: "Австралия", en: "Australia", uz: "Avstraliya", flag: "🇦🇺" },
  { code: "NZ", ru: "Новая Зеландия", en: "New Zealand", uz: "Yangi Zelandiya", flag: "🇳🇿" },
  { code: "ZA", ru: "ЮАР", en: "South Africa", uz: "JAR", flag: "🇿🇦" },
  { code: "NG", ru: "Нигерия", en: "Nigeria", uz: "Nigeriya", flag: "🇳🇬" },
  { code: "KE", ru: "Кения", en: "Kenya", uz: "Keniya", flag: "🇰🇪" },
  { code: "MA", ru: "Марокко", en: "Morocco", uz: "Marokash", flag: "🇲🇦" }
];
function countryLabel(c, lang) {
  if (lang === "en") return c.en;
  if (lang === "uz") return c.uz;
  return c.ru;
}
function SmoothWheelList({ children, className }) {
  const ref = reactExports.useRef(null);
  const targetRef = reactExports.useRef(0);
  const rafRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (el) targetRef.current = el.scrollTop;
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, []);
  const tick = () => {
    const el = ref.current;
    if (!el) {
      rafRef.current = null;
      return;
    }
    const cur = el.scrollTop;
    const diff = targetRef.current - cur;
    if (Math.abs(diff) < 0.5) {
      el.scrollTop = targetRef.current;
      rafRef.current = null;
      return;
    }
    el.scrollTop = cur + diff * 0.22;
    rafRef.current = requestAnimationFrame(tick);
  };
  const onWheel = (e) => {
    const el = e.currentTarget;
    const max = el.scrollHeight - el.clientHeight;
    if (max <= 0) return;
    const LINE_HEIGHT = 16;
    const PAGE_HEIGHT = el.clientHeight;
    const factor = e.deltaMode === 1 ? LINE_HEIGHT : e.deltaMode === 2 ? PAGE_HEIGHT : 1;
    const delta = e.deltaY * factor;
    const atTop = targetRef.current <= 0 && delta < 0;
    const atBottom = targetRef.current >= max && delta > 0;
    if (atTop || atBottom) return;
    e.stopPropagation();
    e.preventDefault();
    if (rafRef.current == null) targetRef.current = el.scrollTop;
    targetRef.current = Math.max(0, Math.min(max, targetRef.current + delta));
    if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className, onWheel, children });
}
function CountrySelect({ value, onChange, placeholder, className, compact }) {
  const { lang } = useI18n();
  const [open, setOpen] = reactExports.useState(false);
  const [query, setQuery] = reactExports.useState("");
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open) setQuery("");
  }, [open]);
  const matched = reactExports.useMemo(() => {
    const v = value.trim().toLowerCase();
    if (!v) return void 0;
    return COUNTRIES.find(
      (c) => c.code.toLowerCase() === v || c.ru.toLowerCase() === v || c.en.toLowerCase() === v || c.uz.toLowerCase() === v
    );
  }, [value]);
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) => c.ru.toLowerCase().includes(q) || c.en.toLowerCase().includes(q) || c.uz.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
    );
  }, [query]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: cn(
          "group flex w-full items-center gap-2 rounded-xl border-2 border-primary/25 bg-background px-3 text-left shadow-sm transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30",
          compact ? "py-2 text-sm" : "py-2.5 text-[15px]",
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary text-base", children: matched ? matched.flag : /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("flex-1 truncate font-semibold tabular-nums", !value && "text-muted-foreground/60 font-normal"), children: matched ? countryLabel(matched, lang) : value || placeholder || "Выберите страну" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition group-data-[state=open]:rotate-180" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      PopoverContent,
      {
        align: "start",
        side: "bottom",
        sideOffset: 6,
        className: "z-[95] w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-border/60 bg-popover p-0 shadow-2xl shadow-primary/15",
        onOpenAutoFocus: (e) => {
          e.preventDefault();
          inputRef.current?.focus();
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border/60 bg-gradient-to-r from-primary/10 via-accent/30 to-primary/5 px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-primary/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: inputRef,
                value: query,
                onChange: (e) => {
                  const v = e.target.value;
                  setQuery(v);
                  onChange(v);
                },
                placeholder: "Поиск страны…",
                maxLength: 48,
                className: "min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-muted-foreground/60"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SmoothWheelList, { className: "max-h-[260px] overflow-y-auto py-1", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-6 text-center text-xs font-semibold text-muted-foreground", children: "Ничего не найдено · Enter сохранит ваш текст" }) : filtered.map((c) => {
            const isActive = matched?.code === c.code;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  onChange(countryLabel(c, lang));
                  setOpen(false);
                },
                className: cn(
                  "flex w-full items-center gap-2 px-3 py-2 text-left text-sm font-semibold transition hover:bg-primary/10",
                  isActive && "bg-primary/10 text-primary"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: c.flag }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate", children: countryLabel(c, lang) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: c.code }),
                  isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-primary" })
                ]
              },
              c.code
            );
          }) })
        ]
      }
    )
  ] });
}
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d][\d\s()\-]{7,24}$/;
const PHONE_DIGITS_MIN = 9;
const HANDLE_RE = /^@?[a-zA-Z0-9_.]{3,32}$/;
function isValidEmail(value) {
  const v = value.trim();
  if (!v) return true;
  return EMAIL_RE.test(v) && v.length <= 80;
}
function isValidPhone(value) {
  const v = value.trim();
  if (!v) return true;
  if (!PHONE_RE.test(v)) return false;
  const digits = v.replace(/\D/g, "");
  return digits.length >= PHONE_DIGITS_MIN && digits.length <= 15;
}
function isValidHandle(value) {
  const v = value.trim();
  if (!v) return true;
  return HANDLE_RE.test(v);
}
function validateContactBundle(c) {
  if (c.phone !== void 0 && !isValidPhone(c.phone)) {
    return { field: "phone", message: "Телефон должен быть в формате +998 90 123 45 67" };
  }
  if (c.whatsapp !== void 0 && !isValidPhone(c.whatsapp)) {
    return { field: "whatsapp", message: "WhatsApp должен быть в формате +998 90 123 45 67" };
  }
  if (c.email !== void 0 && !isValidEmail(c.email)) {
    return { field: "email", message: "Эл. почта должна содержать «@» — например email@example.com" };
  }
  if (c.telegram !== void 0 && !isValidHandle(c.telegram)) {
    return { field: "telegram", message: "Telegram должен быть в формате @username" };
  }
  if (c.instagram !== void 0 && !isValidHandle(c.instagram)) {
    return { field: "instagram", message: "Instagram должен быть в формате @username" };
  }
  return null;
}
const STORAGE_PREFIX = "sayohat-anketa:";
const PASSPORT_PREFIX = "guest-passport:booking:";
function bookingFullName(b) {
  if (!b) return "";
  const last = (b.guestLastName || "").trim();
  const first = (b.guestFirstName || "").trim();
  const middle = (b.guestMiddleName || "").trim();
  if (last || first || middle) return [last, first, middle].filter(Boolean).join(" ");
  return (b.guestName || "").trim();
}
const emptyForm = (booking) => {
  const name = bookingFullName(booking);
  return {
    fullName: name,
    birthDate: "",
    birthPlace: "",
    passportNumber: "",
    passportIssueDate: "",
    passportValidUntil: "",
    arrivedFrom: "",
    citizenship: "",
    phone: booking?.guestPhone ?? "",
    email: booking?.guestEmail ?? "",
    roomNumber: booking ? String(booking.roomNumber) : "",
    roomType: "",
    checkIn: booking?.checkIn ?? "",
    checkOut: booking?.checkOut ?? "",
    signature: "",
    signatureImage: "",
    acknowledgedName: name,
    acknowledged: false
  };
};
function mergePassportIntoForm(form, passport) {
  const next = { ...form };
  const setIfEmpty = (k, v) => {
    const cur = String(next[k] ?? "").trim();
    if (!cur && v && v.trim()) next[k] = v.trim();
  };
  const overwriteIfPresent = (k, v) => {
    if (v && v.trim()) next[k] = v.trim();
  };
  const combined = [passport.lastName, passport.firstName, passport.middleName].map((s) => (s || "").trim()).filter(Boolean).join(" ");
  if (combined) {
    overwriteIfPresent("fullName", combined);
    if (!form.acknowledged) overwriteIfPresent("acknowledgedName", combined);
  }
  const passNum = [passport.passportSeries, passport.passportNumber].map((s) => (s || "").trim()).filter(Boolean).join("");
  setIfEmpty("passportNumber", passNum);
  overwriteIfPresent("passportIssueDate", passport.issueDate);
  setIfEmpty("passportValidUntil", passport.expiryDate);
  overwriteIfPresent("birthDate", passport.birthDate);
  setIfEmpty("birthPlace", passport.address);
  overwriteIfPresent("citizenship", passport.citizenship);
  return next;
}
function HotelGuestAnketaModal({ open, onClose, booking }) {
  const { t, lang } = useI18n();
  const { categories, rooms } = useHotelGrid();
  const [form, setForm] = reactExports.useState(() => emptyForm(booking));
  const detectedCategoryId = reactExports.useMemo(() => {
    if (!booking) return "";
    const room = rooms.find((r) => r.number === booking.roomNumber);
    return room?.category ?? "";
  }, [booking, rooms]);
  const [dirty, setDirty] = reactExports.useState(false);
  const [warnOpen, setWarnOpen] = reactExports.useState(false);
  const { map: anketaMap, setRecord: setAnketaRecord } = useSharedNamespace("anketas", "sayohat-anketa-changed");
  const { map: passportMap } = useSharedNamespace("passports", "sayohat-passport-changed");
  reactExports.useEffect(() => {
    if (!open) return;
    if (!booking) {
      setForm(emptyForm(null));
      return;
    }
    let base = emptyForm(booking);
    const cloudAnketa = anketaMap[booking.id];
    if (cloudAnketa) {
      base = { ...base, ...cloudAnketa };
    } else {
      try {
        const raw = window.localStorage.getItem(STORAGE_PREFIX + booking.id);
        if (raw) {
          const legacy = JSON.parse(raw);
          base = { ...base, ...legacy };
          setAnketaRecord(booking.id, base);
        }
      } catch {
      }
    }
    const cloudPassport = passportMap[booking.id];
    if (cloudPassport) {
      base = mergePassportIntoForm(base, cloudPassport);
    } else {
      try {
        const rawP = window.localStorage.getItem(PASSPORT_PREFIX + booking.id);
        if (rawP) base = mergePassportIntoForm(base, JSON.parse(rawP));
      } catch {
      }
    }
    if (detectedCategoryId) base.roomType = detectedCategoryId;
    setForm(base);
  }, [open, booking, detectedCategoryId, anketaMap[booking?.id ?? ""], passportMap[booking?.id ?? ""]]);
  reactExports.useEffect(() => {
    if (!open || !booking) return;
    const cloudPassport = passportMap[booking.id];
    if (!cloudPassport) return;
    setForm((prev) => mergePassportIntoForm(prev, cloudPassport));
  }, [open, booking, passportMap[booking?.id ?? ""]]);
  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setDirty(true);
  };
  reactExports.useEffect(() => {
    if (open) setDirty(false);
  }, [open]);
  const nights = reactExports.useMemo(() => {
    if (!form.checkIn || !form.checkOut) return 0;
    try {
      return Math.max(0, differenceInCalendarDays(parseISO(form.checkOut), parseISO(form.checkIn)));
    } catch {
      return 0;
    }
  }, [form.checkIn, form.checkOut]);
  const completion = reactExports.useMemo(() => {
    const required = [
      "fullName",
      "birthDate",
      "citizenship",
      "phone",
      "roomNumber",
      "checkIn",
      "checkOut"
    ];
    const filled = required.filter((k) => String(form[k] ?? "").trim().length > 0).length;
    const sigOk = !!form.signatureImage ? 1 : 0;
    return Math.round((filled + sigOk) / (required.length + 1) * 100);
  }, [form]);
  const hasSignature = !!form.signatureImage;
  const handleSave = () => {
    if (!booking) return;
    if (!form.fullName.trim() || !hasSignature || !form.acknowledged) {
      toast.error(t("anketaIncomplete"));
      return;
    }
    if (!isValidPhone(form.phone)) {
      toast.error("Телефон должен быть в формате +998 90 123 45 67");
      return;
    }
    if (!isValidEmail(form.email)) {
      toast.error("Эл. почта должна содержать «@» — например email@example.com");
      return;
    }
    try {
      setAnketaRecord(booking.id, form);
      window.localStorage.setItem(STORAGE_PREFIX + booking.id, JSON.stringify(form));
      toast.success(t("anketaSaved"));
      setDirty(false);
      onClose();
    } catch {
      toast.error("Storage error");
    }
  };
  const requestClose = reactExports.useCallback(() => {
    if (dirty) {
      setWarnOpen(true);
    } else {
      onClose();
    }
  }, [dirty, onClose]);
  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };
  if (!booking) return null;
  const L = (ru, uz) => lang === "ru" ? ru : uz;
  const fmtDate = (iso) => {
    if (!iso) return "";
    try {
      return format(parseISO(iso), "dd.MM.yyyy");
    } catch {
      return iso;
    }
  };
  const renderPaperForm = (copyIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "paper-sheet", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "paper-title", children: L("Анкета", "Anketa") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "paper-subtitle", children: [
      "(",
      L("заселяющегося гостя в гостиницу Sayoxat", "Sayoxat mehmonxonasiga joylashayotgan mehmon"),
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "paper-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-label", children: L("Ф.И.О", "F.I.Sh") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-line", children: form.fullName })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "paper-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-label", children: L("Дата рождения", "Tug'ilgan sana") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-line", children: fmtDate(form.birthDate) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "paper-row paper-row-split", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-label", children: L("Дата въезда в гостиницу", "Mehmonxonaga kirish sanasi") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-line", children: fmtDate(form.checkIn) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-label", children: L("дата выезда из гостиницы", "mehmonxonadan chiqish sanasi") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-line", children: fmtDate(form.checkOut) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "paper-row paper-row-split", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-label", children: L("гражданство", "fuqaroligi") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-line", children: form.citizenship })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "paper-row paper-row-split", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-label", children: L("телефон", "telefon") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-line", children: form.phone }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-label", children: L("эл. адрес", "el. pochta") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-line", children: form.email })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "paper-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-label", children: L("№ комнаты", "Xona №") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-line", children: form.roomNumber })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "paper-rules", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-rules-title", children: L("Правила размещения в гостиницу Saёхat:", "«Sayohat» mehmonxonasida joylashish qoidalari:") }),
      " ",
      L(
        "Расчётный час в 12:00. Ранний заезд с 7:00 до 12:00 — взымается 50% от стоимости номера. Поздний выезд с 14:00 до 18:00 — взымается 50% от стоимости номера. При выезде после 18:00 — взымается 100% стоимости номера. Оплата перед заселением.",
        "Hisob-kitob vaqti — 12:00. Erta kirish (07:00–12:00) — narxning 50%. Kech chiqish (14:00–18:00) — 50%. 18:00 dan keyin — 100%. Joylashishdan oldin to'lov."
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "paper-sign-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-label", children: L("Ознакомлен Ф.И.О", "Tanishib chiqdim F.I.Sh") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-sign-name", children: form.acknowledgedName || form.fullName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-label", children: L("подпись", "imzo") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "paper-sign-box", children: form.signatureImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: form.signatureImage, alt: "signature" }) : null })
    ] })
  ] }, copyIndex);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: (v) => !v && requestClose(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "sm:max-w-[1040px] p-0 overflow-hidden border-0 shadow-none bg-transparent rounded-2xl print:max-w-none [&>button.absolute]:hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "sr-only", children: t("anketaTitle") }),
          typeof document !== "undefined" && reactDomExports.createPortal(
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "anketa-print-sheet", "aria-hidden": true, children: Array.from({ length: 1 }, (_, index) => renderPaperForm(index)) }),
            document.body
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.97, y: 12 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.98 },
              transition: { type: "spring", stiffness: 220, damping: 26 },
              className: "relative anketa-shell rounded-2xl overflow-hidden shadow-[0_40px_90px_-25px_rgba(0,0,0,0.55)] ring-1 ring-foreground/10 grid grid-cols-1 md:grid-cols-[264px_1fr] print:block print:rounded-none print:ring-0 print:shadow-none",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "anketa-sidebar relative px-6 py-7 text-primary-foreground print:hidden md:flex md:flex-col md:gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/25 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { className: "h-5 w-5", strokeWidth: 2.2 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.28em] text-white/70", children: "Sayohat" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold", children: [
                        "Hotel · ",
                        (/* @__PURE__ */ new Date()).getFullYear()
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-black leading-none tracking-tight", children: L("Анкета", "Anketa") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[11px] leading-snug text-white/65", children: L("Регистрация заселяющегося гостя", "Joylashayotgan mehmonni ro'yxatga olish") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/10 p-3.5 ring-1 ring-white/15 backdrop-blur", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black uppercase tracking-[0.22em] text-white/55", children: L("Гость", "Mehmon") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 truncate text-[13px] font-bold", children: form.fullName || L("— не заполнено —", "— to'ldirilmagan —") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2 text-[10px]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black uppercase tracking-[0.18em] text-white/50", children: L("Заезд", "Kirish") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 font-bold tabular-nums", children: form.checkIn ? format(parseISO(form.checkIn), "dd.MM") : "—" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black uppercase tracking-[0.18em] text-white/50", children: L("Выезд", "Chiqish") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 font-bold tabular-nums", children: form.checkOut ? format(parseISO(form.checkOut), "dd.MM") : "—" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black uppercase tracking-[0.18em] text-white/50", children: L("Ночей", "Tunlar") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 font-bold tabular-nums", children: nights || "—" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black uppercase tracking-[0.18em] text-white/50", children: L("Номер", "Xona") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 font-bold tabular-nums", children: [
                          "№ ",
                          form.roomNumber || "—"
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-[0.22em] text-white/65", children: t("anketaProgress") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-black tabular-nums", children: [
                        completion,
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { width: 0 },
                        animate: { width: `${completion}%` },
                        transition: { type: "spring", stiffness: 90, damping: 18 },
                        className: "h-full rounded-full bg-gradient-to-r from-white to-white/80"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-3 text-[10px] leading-relaxed text-white/55", children: L("Документ оформляется в соответствии с правилами размещения. Расчётный час — 12:00.", "Hujjat joylashish qoidalariga muvofiq rasmiylashtiriladi. Hisob-kitob vaqti — 12:00.") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "anketa-main relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: requestClose,
                      className: "absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-md border border-foreground/15 bg-background/90 text-foreground/60 backdrop-blur transition hover:border-destructive/50 hover:text-destructive print:hidden",
                      "aria-label": "Close",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden print:block px-4 pt-2 pb-2 border-b border-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] font-black uppercase tracking-[0.3em]", children: "SAYOHAT HOTEL" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-black", children: L("Анкета гостя", "Mehmon anketasi") })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] font-bold", children: format(/* @__PURE__ */ new Date(), "dd.MM.yyyy") })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "anketa-body max-h-[78vh] overflow-y-auto px-7 py-6 print:max-h-none print:overflow-visible print:px-3 print:py-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { n: 1, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5" }), title: L("Личные данные", "Shaxsiy ma'lumotlar"), delay: 0.02, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        PaperField,
                        {
                          label: L("Ф.И.О", "F.I.Sh"),
                          required: true,
                          value: form.fullName,
                          onChange: (v) => update("fullName", v),
                          placeholder: L("Фамилия Имя Отчество", "Familiya Ism Otasining ismi")
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-[200px_1fr]", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PaperField, { label: L("Дата рождения", "Tug'ilgan sana"), required: true, type: "date", value: form.birthDate, onChange: (v) => update("birthDate", v) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "anketa-field-label", children: [
                            L("Гражданство", "Fuqaroligi"),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-destructive", children: "*" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            CountrySelect,
                            {
                              value: form.citizenship,
                              onChange: (v) => update("citizenship", v),
                              placeholder: L("Узбекистан", "O'zbekiston"),
                              compact: true
                            }
                          )
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { n: 3, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-3.5 w-3.5" }), title: L("Данные проживания", "Yashash ma'lumotlari"), delay: 0.06, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PaperField, { label: L("Дата въезда", "Kirish sanasi"), required: true, type: "date", value: form.checkIn, onChange: (v) => update("checkIn", v) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PaperField, { label: L("Дата выезда", "Chiqish sanasi"), required: true, type: "date", value: form.checkOut, onChange: (v) => update("checkOut", v) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-[140px_1fr]", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PaperField, { label: L("№ комнаты", "Xona №"), required: true, value: form.roomNumber, onChange: (v) => update("roomNumber", v), placeholder: "101", readOnly: true }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
                      ] }),
                      nights > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-primary/5 px-3 py-2 text-[11px] font-semibold text-foreground/75 ring-1 ring-primary/15", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black tabular-nums text-primary", children: nights }),
                        " ",
                        t("nightsShort"),
                        " · ",
                        format(parseISO(form.checkIn), "dd.MM.yyyy"),
                        " → ",
                        format(parseISO(form.checkOut), "dd.MM.yyyy")
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Section$1, { n: 4, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }), title: L("Контактные данные", "Aloqa ma'lumotlari"), delay: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(PaperField, { label: L("Телефон", "Telefon"), required: true, value: form.phone, onChange: (v) => update("phone", v), placeholder: "+998 90 123 45 67", maxLength: 20, inputMode: "tel", invalid: !isValidPhone(form.phone) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(PaperField, { label: L("Эл. адрес", "El. pochta"), type: "email", value: form.email, onChange: (v) => update("email", v), placeholder: "email@example.com", maxLength: 80, invalid: !isValidEmail(form.email) })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { n: 5, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollText, { className: "h-3.5 w-3.5" }), title: L("Правила и подпись", "Qoidalar va imzo"), delay: 0.1, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-foreground/15 bg-foreground/[0.025] p-3 text-[12px] leading-relaxed text-foreground/85 print:p-2 print:text-[8.5px]", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 font-bold tracking-tight text-foreground", children: L("Правила размещения «Sayohat»", "«Sayohat» joylashish qoidalari") }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Расчётный час — 12:00.", "Hisob-kitob vaqti — 12:00.") })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Ранний заезд (07:00–12:00) — 50% стоимости.", "Erta kirish (07:00–12:00) — narxning 50%.") })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Поздний выезд (14:00–18:00) — 50% стоимости.", "Kech chiqish (14:00–18:00) — narxning 50%.") })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("После 18:00 — 100% стоимости.", "18:00 dan keyin — narxning 100%.") })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Оплата перед заселением.", "Joylashishdan oldin to'lov.") })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "anketa-field-label", children: [
                          L("Ознакомлен Ф.И.О", "Tanishib chiqdim F.I.Sh"),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-destructive", children: "*" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            value: form.acknowledgedName,
                            onChange: (e) => update("acknowledgedName", e.target.value.slice(0, 28)),
                            placeholder: L("Фамилия Имя Отчество", "Familiya Ism Otasining ismi"),
                            maxLength: 28,
                            className: "anketa-line-input"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "anketa-field-label", children: [
                        L("Подпись", "Imzo"),
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          transition: { duration: 0.18 },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SignaturePad,
                            {
                              value: form.signatureImage,
                              onChange: (v) => update("signatureImage", v),
                              lang,
                              labelClear: t("anketaSigClear"),
                              hint: t("anketaSigHint")
                            }
                          )
                        },
                        "draw"
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer items-start gap-2.5 text-[12px] leading-snug text-foreground/80", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: form.acknowledged,
                            onChange: (e) => update("acknowledged", e.target.checked),
                            className: "mt-0.5 h-4 w-4 cursor-pointer accent-primary"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("anketaAcknowledge") })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "anketa-footer relative z-10 flex flex-wrap items-center justify-between gap-3 px-7 py-3.5 print:hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-medium text-foreground/65", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-foreground/55" }),
                      t("anketaAutosaveHint")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: handlePrint, className: "gap-1.5 rounded-md", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "h-3.5 w-3.5" }),
                        " ",
                        t("anketaPrint")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: requestClose, className: "rounded-md", children: t("cancel") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          onClick: handleSave,
                          disabled: !form.fullName || !hasSignature || !form.acknowledged,
                          className: "gap-1.5 rounded-md",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
                            " ",
                            t("anketaSubmit")
                          ]
                        }
                      )
                    ] })
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UnsavedCloseWarning,
      {
        open: warnOpen,
        onCancel: () => setWarnOpen(false),
        onDiscard: () => {
          setWarnOpen(false);
          setDirty(false);
          onClose();
        },
        title: t("unsavedTitle"),
        message: t("unsavedMessage"),
        cancelLabel: t("unsavedKeep"),
        discardLabel: t("unsavedDiscard")
      }
    )
  ] });
}
function Section$1({
  n,
  title,
  icon,
  children,
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { delay, duration: 0.32, ease: [0.22, 1, 0.36, 1] },
      className: "anketa-section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "anketa-section-head", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "anketa-section-num", children: [
            "§",
            n
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "anketa-section-icon", children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "anketa-section-h", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "anketa-section-rule", "aria-hidden": true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "anketa-section-body", children })
      ]
    }
  );
}
function PaperField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  delay = 0,
  readOnly,
  maxLength = 28,
  inputMode,
  invalid
}) {
  const isDate = type === "date";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0 },
      transition: { delay, duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      className: "min-w-0",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "anketa-field-label", children: [
          label,
          required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: isDate ? "relative" : "", children: isDate ? /* @__PURE__ */ jsxRuntimeExports.jsx(HotelDatePicker, { label, value, onChange, required, compact: true }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type,
            inputMode,
            value,
            readOnly,
            "aria-invalid": invalid || void 0,
            onChange: (e) => {
              if (readOnly) return;
              onChange(e.target.value.slice(0, maxLength));
            },
            placeholder,
            maxLength,
            className: `anketa-line-input${readOnly ? " cursor-not-allowed bg-foreground/[0.04] text-foreground/80" : ""}${invalid ? " !border-destructive/60 text-destructive" : ""}`
          }
        ) })
      ]
    }
  );
}
function SignaturePad({
  value,
  onChange,
  lang,
  labelClear,
  hint
}) {
  const wrapRef = reactExports.useRef(null);
  const canvasRef = reactExports.useRef(null);
  const ctxRef = reactExports.useRef(null);
  const drawingRef = reactExports.useRef(false);
  const lastRef = reactExports.useRef(null);
  const hidLastRef = reactExports.useRef(null);
  const [hasInk, setHasInk] = reactExports.useState(!!value);
  const { t } = useI18n();
  const drawHIDSample = reactExports.useCallback(
    (s) => {
      const ctx = ctxRef.current;
      const canvas = canvasRef.current;
      if (!ctx || !canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!s.down) {
        if (hidLastRef.current && canvasRef.current) {
          onChange(canvasRef.current.toDataURL("image/png"));
        }
        hidLastRef.current = null;
        return;
      }
      const x = s.x * w;
      const y = s.y * h;
      const lineW = Math.max(1.2, s.pressure * 3.2 + 1);
      ctx.lineWidth = lineW;
      if (!hidLastRef.current) {
        ctx.beginPath();
        ctx.arc(x, y, lineW / 2, 0, Math.PI * 2);
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.moveTo(hidLastRef.current.x, hidLastRef.current.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
      hidLastRef.current = { x, y };
      if (!hasInk) setHasInk(true);
    },
    [hasInk, onChange]
  );
  const hid = useSignaturePadHID(drawHIDSample);
  const resizeCanvas = reactExports.useCallback((preserve) => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const rect = wrap.getBoundingClientRect();
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    let snapshot = null;
    const prevCtx = canvas.getContext("2d");
    if (preserve && prevCtx && canvas.width > 0 && canvas.height > 0) {
      try {
        snapshot = prevCtx.getImageData(0, 0, canvas.width, canvas.height);
      } catch {
      }
    }
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 2;
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--foreground").trim() ? `hsl(${getComputedStyle(document.documentElement).getPropertyValue("--foreground").trim()})` : "#0f172a";
    ctxRef.current = ctx;
    if (snapshot) {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.putImageData(snapshot, 0, 0);
      ctx.restore();
    } else if (value) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, rect.width, rect.height);
        setHasInk(true);
      };
      img.src = value;
    }
  }, [value]);
  reactExports.useEffect(() => {
    resizeCanvas(false);
    let frame = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => resizeCanvas(true));
    });
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, []);
  const getPos = (e) => {
    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.clientWidth / rect.width;
    const scaleY = canvas.clientHeight / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };
  const onDown = (e) => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drawingRef.current = true;
    const p = getPos(e);
    lastRef.current = p;
    ctx.beginPath();
    ctx.arc(p.x, p.y, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fill();
    if (!hasInk) setHasInk(true);
  };
  const onMove = (e) => {
    if (!drawingRef.current) return;
    const ctx = ctxRef.current;
    if (!ctx || !lastRef.current) return;
    const p = getPos(e);
    const events = typeof e.nativeEvent.getCoalescedEvents === "function" ? e.nativeEvent.getCoalescedEvents() : [e.nativeEvent];
    ctx.beginPath();
    ctx.moveTo(lastRef.current.x, lastRef.current.y);
    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.clientWidth / rect.width;
    const scaleY = canvas.clientHeight / rect.height;
    for (const ev of events) {
      const px = (ev.clientX - rect.left) * scaleX;
      const py = (ev.clientY - rect.top) * scaleY;
      ctx.lineTo(px, py);
      lastRef.current = { x: px, y: py };
    }
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    lastRef.current = p;
  };
  const onUp = (e) => {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    lastRef.current = null;
    if (e) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
      }
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    onChange(canvas.toDataURL("image/png"));
  };
  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    setHasInk(false);
    onChange("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: wrapRef, className: "signature-pad-wrap h-44 print:h-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "signature-baseline", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute bottom-2 left-3 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/45", children: [
        "✗ ",
        lang === "ru" ? "подпись" : "imzo"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "canvas",
        {
          ref: canvasRef,
          onPointerDown: onDown,
          onPointerMove: onMove,
          onPointerUp: onUp,
          onPointerLeave: onUp,
          onPointerCancel: onUp,
          className: "signature-pad-canvas"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !hasInk && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "h-5 w-5 text-foreground/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium text-foreground/45", children: hint })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-medium text-foreground/55", children: hasInk ? "✓ " + (lang === "ru" ? "подпись захвачена" : "imzo qabul qilindi") : " " }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        hid.supported ? hid.connected ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            onClick: () => void hid.disconnect(),
            initial: { scale: 0.9, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            whileHover: { scale: 1.04 },
            whileTap: { scale: 0.97 },
            className: "inline-flex items-center gap-1.5 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300",
            title: hid.deviceName ?? "",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-500" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "h-3 w-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[120px] truncate", children: hid.deviceName ?? t("hidConnected") })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            onClick: () => void hid.connect(),
            whileHover: { scale: 1.04 },
            whileTap: { scale: 0.97 },
            className: "inline-flex items-center gap-1.5 rounded-md border border-primary/35 bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary transition hover:bg-primary/15",
            title: t("hidHint"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Usb, { className: "h-3 w-3" }),
              " ",
              t("hidConnect")
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md border border-foreground/10 bg-background px-2 py-1 text-[10px] font-medium text-foreground/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Usb, { className: "h-3 w-3" }),
          " ",
          t("hidUnsupported")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: clear,
            disabled: !hasInk,
            className: "h-7 gap-1 rounded-md text-[11px] font-bold text-foreground/60 hover:text-destructive",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eraser, { className: "h-3 w-3" }),
              " ",
              labelClear
            ]
          }
        )
      ] })
    ] })
  ] });
}
const PASSPORT_FIELDS = [
  { key: "lastName", label: "Фамилия", placeholder: "Иванов", icon: IdCard, span: 1 },
  { key: "firstName", label: "Имя", placeholder: "Иван", icon: IdCard, span: 1 },
  { key: "middleName", label: "Отчество", placeholder: "Иванович", icon: IdCard, span: 1 },
  { key: "birthDate", label: "Дата рождения", placeholder: "дд.мм.гггг", icon: CalendarDays, span: 1, type: "date" },
  { key: "issueDate", label: "Дата выдачи", placeholder: "дд.мм.гггг", icon: CalendarDays, span: 1, type: "date" },
  { key: "citizenship", label: "Гражданство", placeholder: "Узбекистан", icon: Flag$1, span: 1 },
  { key: "gender", label: "Пол", placeholder: "Select gender", icon: Users, span: 1 }
];
const EMPTY_PASSPORT = PASSPORT_FIELDS.reduce(
  (acc, f) => ({ ...acc, [f.key]: "" }),
  {}
);
const GENDER_OPTIONS = [
  { value: "Male", label: "Male", icon: "♂" },
  { value: "Female", label: "Female", icon: "♀" },
  { value: "Non-binary", label: "Non-binary", icon: "⚧" }
];
function GenderSelect({ value, onChange, placeholder }) {
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  const legacyMap = {
    "Мужской": "Male",
    "М": "Male",
    "Мужчина": "Male",
    "Женский": "Female",
    "Ж": "Female",
    "Женщина": "Female",
    "Небинарный": "Non-binary"
  };
  const normalized = legacyMap[value] ?? value;
  const current = GENDER_OPTIONS.find((o) => o.value === normalized);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((v) => !v),
        className: "group flex w-full items-center gap-2 rounded-xl border-2 border-primary/25 bg-background px-3 py-2 text-left text-sm shadow-sm transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary text-base", children: current ? current.icon : "⚥" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex-1 truncate font-semibold ${!value ? "text-muted-foreground/60 font-normal" : ""}`, children: current ? current.label : placeholder || "Select gender" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: `h-4 w-4 shrink-0 text-muted-foreground transition ${open ? "rotate-180" : ""}`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 9 6 6 6-6" }) })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-full z-[95] mt-2 overflow-hidden rounded-2xl border border-border/60 bg-popover p-1.5 shadow-2xl shadow-primary/15", children: GENDER_OPTIONS.map((o) => {
      const active = o.value === normalized;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            onChange(o.value);
            setOpen(false);
          },
          className: `flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold transition hover:bg-primary/10 ${active ? "bg-primary/10 text-primary" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary text-base", children: o.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: o.label }),
            active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "✓" })
          ]
        },
        o.value
      );
    }) })
  ] });
}
function GuestDetailsWindow({ open, onClose, guest }) {
  const [confirmClose, setConfirmClose] = reactExports.useState(false);
  const dirtyRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (open) dirtyRef.current = false;
  }, [open, guest.bookingId]);
  const storageKey = guest.bookingId ? guest.bookingId : `guest-passport:${guest.roomNumber}:${guest.bedIndex ?? "main"}`;
  const buildAutoFill = (current) => {
    const auto = {
      lastName: guest.guestLastName ?? "",
      firstName: guest.guestFirstName ?? "",
      middleName: guest.guestMiddleName ?? ""
    };
    const next = { ...current };
    Object.keys(auto).forEach((k) => {
      const v = (auto[k] ?? "").toString().trim();
      if (v && !(next[k] ?? "").trim()) next[k] = v;
    });
    return next;
  };
  const { map: passportMap, setRecord: setPassportRecord } = useSharedNamespace("passports", "sayohat-passport-changed");
  const [passport, setPassport] = reactExports.useState(EMPTY_PASSPORT);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const normalize = (parsed) => {
      const legacySeries = (parsed.passportSeries || "").toString().trim().toUpperCase();
      const legacyNumber = (parsed.passportNumber || "").toString().trim();
      if (legacySeries && !/^[A-Z\u0400-\u04FF]{1,2}\s/.test(legacyNumber)) {
        const digits = legacyNumber.replace(/\D/g, "");
        parsed.passportSeries = legacySeries.slice(0, 2);
        parsed.passportNumber = digits;
      }
      return { ...EMPTY_PASSPORT, ...parsed };
    };
    const cloud = passportMap[storageKey];
    if (cloud) {
      setPassport(buildAutoFill(normalize({ ...cloud })));
      return;
    }
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = normalize(JSON.parse(raw));
        setPassport(buildAutoFill(parsed));
        setPassportRecord(storageKey, parsed);
        return;
      }
    } catch {
    }
    setPassport(buildAutoFill(EMPTY_PASSPORT));
  }, [storageKey, guest.guestLastName, guest.guestFirstName, guest.guestMiddleName, passportMap[storageKey]]);
  const updatePassport = (key, value) => {
    setPassport((prev) => {
      const next = { ...prev, [key]: value };
      setPassportRecord(storageKey, next);
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
      }
      return next;
    });
    dirtyRef.current = true;
  };
  const filledPassportCount = Object.values(passport).filter((v) => v.trim().length > 0).length;
  const nights = Number.isInteger(guest.nightsDisplay) ? guest.nightsDisplay : guest.nightsDisplay.toFixed(1);
  const contacts = [
    { label: "Phone", value: guest.guestPhone, icon: Phone },
    { label: "WhatsApp", value: guest.guestWhatsapp, icon: MessageCircle },
    { label: "Telegram", value: guest.guestTelegram, icon: Send },
    { label: "Instagram", value: guest.guestInstagram, icon: Instagram },
    { label: "Email", value: guest.guestEmail, icon: Mail }
  ].filter((row) => row.value.trim());
  const requestClose = () => {
    if (!dirtyRef.current) {
      onClose();
      return;
    }
    setConfirmClose(true);
  };
  const finishClose = () => {
    setConfirmClose(false);
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && requestClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "w-[min(1040px,calc(100vw-2rem))] max-w-[1040px] max-h-[90vh] overflow-hidden border-0 bg-transparent p-0 shadow-none sm:rounded-[32px] [&>button.absolute]:hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(VisuallyHidden, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Guest details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Passport and identification fields" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96, filter: "blur(2px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: { duration: 0.2, ease: "easeOut" },
        className: "guest-holo-window relative overflow-hidden rounded-[32px] border border-primary/25 bg-card shadow-[0_34px_110px_hsl(var(--primary-hsl)/0.32)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "guest-holo-grid absolute inset-0", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "guest-holo-scan pointer-events-none absolute inset-x-0 top-0 h-20", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-h-[90vh] overflow-y-auto p-5 sm:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-5 flex items-start justify-between gap-4 rounded-[26px] border border-primary/25 bg-gradient-to-br from-primary/15 via-background/90 to-accent/40 p-5 shadow-lg shadow-primary/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] bg-gradient-to-br from-primary to-primary/70 text-2xl font-black text-primary-foreground shadow-xl shadow-primary/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: guest.initials }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-card bg-background text-primary shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-primary", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
                    " Guest intelligence profile"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display truncate text-3xl font-black leading-tight text-foreground", children: guest.fullName || "Unnamed guest" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-xl text-sm font-semibold leading-relaxed text-muted-foreground", children: "Live stay summary with identity, contact readiness, arrival timing, and operational notes in one control view." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { icon: BedDouble, children: [
                      "Room ",
                      guest.roomNumber,
                      guest.bedIndex !== void 0 ? ` · Bed ${guest.bedIndex + 1}` : ""
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { icon: Zap, children: contacts.length ? "Contact ready" : "Needs contact data" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black ring-1",
                        style: { background: `${guest.statusColor}20`, color: guest.statusColor, borderColor: `${guest.statusColor}55` },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: { background: guest.statusColor } }),
                          guest.statusLabel
                        ]
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: requestClose,
                  "aria-label": "Close guest details",
                  className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/80 text-muted-foreground transition hover:border-destructive/50 hover:text-destructive",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-[1fr_1.35fr]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Identity Signal", icon: Fingerprint, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoLine, { label: "Profile", value: guest.fullName ? "Verified input" : "Awaiting name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoLine, { label: "Data quality", value: contacts.length >= 2 ? "Strong record" : contacts.length ? "Basic record" : "Incomplete" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoLine, { label: "Occupancy", value: `${guest.guestCount || 1} guest${guest.guestCount === 1 ? "" : "s"} registered` })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Stay Snapshot", icon: ShieldCheck, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Nights", value: `${nights}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Guests", value: `${guest.guestCount || 1}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Check-in", value: guest.checkInTime }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Check-out", value: guest.checkOutTime })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Данные об оплате", icon: Check, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoLine, { label: "Тип оплаты", value: guest.paymentTypeLabel }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoLine, { label: "Условие", value: guest.paymentTimingLabel }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoLine, { label: "Сумма", value: `${Number(guest.paymentAmount || 0).toLocaleString("ru-RU")} сум` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoLine, { label: "Статус", value: guest.paymentConfirmed ? "Подтверждено" : "Ожидает подтверждения" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Operational Readiness", icon: Clock3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoLine, { label: "Arrival protocol", value: guest.inHuman ? "Scheduled" : "Missing date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoLine, { label: "Follow-up", value: contacts.length ? "Reachable" : "No channel" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoLine, { label: "Desk priority", value: guest.notes.trim() ? "Review notes" : "Standard" })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: CalendarDays, label: "Arrival", value: guest.inHuman || "Not set", sub: guest.checkInTime }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: CalendarDays, label: "Departure", value: guest.outHuman || "Not set", sub: guest.checkOutTime }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Users, label: "People", value: `${guest.guestCount || 1}`, sub: "registered" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Contact Channels", icon: ContactRound, children: contacts.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-2", children: contacts.map(({ label, value, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-card rounded-2xl border border-border/60 bg-background/70 p-3 transition hover:border-primary/35 hover:shadow-lg hover:shadow-primary/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-primary" }),
                    " ",
                    label
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-bold text-foreground", children: value })
                ] }, label)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-dashed border-border bg-muted/30 p-5 text-center text-sm font-semibold text-muted-foreground", children: "No contact details entered yet." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Guest Notes", icon: StickyNote, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "min-h-20 rounded-2xl border border-border/60 bg-background/70 p-4 text-sm font-semibold leading-relaxed text-foreground/80", children: guest.notes.trim() || "No special notes added for this guest." }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.1, type: "spring", stiffness: 220, damping: 24 },
                    className: "rounded-[24px] border-2 border-primary/40 bg-card p-5 shadow-lg shadow-primary/10",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-2 border-b-2 border-primary/15 pb-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.16em] text-foreground", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(IdCard, { className: "h-4 w-4 text-primary" }),
                          "Паспортные данные · Passport"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full border-2 border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-primary", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }),
                          " ",
                          filledPassportCount,
                          "/",
                          PASSPORT_FIELDS.length
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3", children: PASSPORT_FIELDS.map((f, idx) => {
                        const Icon = f.icon;
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          motion.div,
                          {
                            initial: { opacity: 0, y: 8 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.15 + idx * 0.025, type: "spring", stiffness: 240, damping: 22 },
                            className: `rounded-xl border border-border bg-background/60 p-3 transition-colors hover:border-primary/40 ${f.span === 2 ? "sm:col-span-2" : ""}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "anketa-field-label flex items-center gap-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3 text-primary/70" }),
                                f.label
                              ] }),
                              "type" in f && f.type === "date" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                HotelDatePicker,
                                {
                                  label: f.label,
                                  value: passport[f.key],
                                  onChange: (value) => updatePassport(f.key, value),
                                  compact: true,
                                  showLabel: false
                                }
                              ) : f.key === "citizenship" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                CountrySelect,
                                {
                                  value: passport[f.key],
                                  onChange: (value) => updatePassport(f.key, value),
                                  placeholder: f.placeholder,
                                  compact: true
                                }
                              ) : f.key === "gender" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                GenderSelect,
                                {
                                  value: passport[f.key],
                                  onChange: (value) => updatePassport(f.key, value),
                                  placeholder: f.placeholder
                                }
                              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "input",
                                {
                                  value: passport[f.key],
                                  onChange: (e) => updatePassport(f.key, e.target.value.slice(0, 28)),
                                  placeholder: f.placeholder,
                                  maxLength: 28,
                                  className: "anketa-line-input input-focus-glow"
                                }
                              )
                            ]
                          },
                          f.key
                        );
                      }) })
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: confirmClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute inset-0 z-20 flex items-center justify-center bg-background/70 p-5 backdrop-blur-xl",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 18, scale: 0.94 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, y: 10, scale: 0.96 },
                  transition: { type: "spring", stiffness: 260, damping: 24 },
                  className: "relative w-full max-w-md overflow-hidden rounded-[28px] border border-primary/30 bg-card p-5 shadow-[0_28px_90px_hsl(var(--primary-hsl)/0.28)]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "guest-holo-grid absolute inset-0 opacity-70", "aria-hidden": true }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-black text-foreground", children: "Save this guest view?" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-semibold leading-relaxed text-muted-foreground", children: "You are leaving Guest Details. Keep the current guest information view, or discard and close the intelligence panel." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-2 gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: finishClose, className: "rounded-2xl border border-border bg-background px-4 py-3 text-sm font-black text-muted-foreground hover:border-destructive/40 hover:text-destructive", children: "Discard" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: finishClose, className: "inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-black text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
                          " Save view"
                        ] })
                      ] })
                    ] })
                  ]
                }
              )
            }
          ) })
        ]
      }
    )
  ] }) });
}
function Badge({ icon: Icon, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-background/75 px-3 py-1 text-xs font-black text-foreground ring-1 ring-border/70", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-primary" }),
    children
  ] });
}
function Panel({ title, icon: Icon, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[24px] border border-border/70 bg-card/80 p-4 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.16em] text-foreground/70", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary" }),
      " ",
      title
    ] }),
    children
  ] });
}
function InfoLine({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-2xl border border-border/50 bg-background/65 px-3 py-2.5 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right font-black text-foreground", children: value })
  ] });
}
function Stat({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/15 bg-primary/5 p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-lg font-black text-primary", children: value })
  ] });
}
function Metric({ icon: Icon, label, value, sub }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[22px] border border-primary/20 bg-gradient-to-b from-primary/10 to-background/70 p-4 shadow-lg shadow-primary/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mb-3 h-5 w-5 text-primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 truncate font-display text-base font-black text-foreground", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs font-semibold text-muted-foreground", children: sub })
  ] });
}
function DeleteBookingModal({ open, onClose, booking, onConfirm }) {
  const { t, lang } = useI18n();
  const [reason, setReason] = reactExports.useState("");
  const [acknowledged, setAcknowledged] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (open) {
      setReason("");
      setAcknowledged(false);
      setSubmitting(false);
    }
  }, [open, booking?.id]);
  const cfg = booking ? BOOKING_STATUSES[booking.status] : null;
  const nights = reactExports.useMemo(() => {
    if (!booking) return 0;
    try {
      return differenceInCalendarDays(parseISO(booking.checkOut), parseISO(booking.checkIn));
    } catch {
      return 0;
    }
  }, [booking]);
  if (!booking || !cfg) return null;
  const presetReasons = [
    { key: "guestCancelled", label: t("reasonGuestCancelled") },
    { key: "noShow", label: t("reasonNoShow") },
    { key: "duplicate", label: t("reasonDuplicate") },
    { key: "createdInError", label: t("reasonError") },
    { key: "other", label: t("reasonOther") }
  ];
  const trimmed = reason.trim();
  const reasonValid = trimmed.length >= 10;
  const canDelete = reasonValid && acknowledged && !submitting;
  const handleConfirm = () => {
    if (!canDelete) {
      if (!reasonValid) toast.error(t("reasonRequired"));
      return;
    }
    setSubmitting(true);
    onConfirm(booking.id);
    toast.success(t("bookingDeleted"));
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "sm:max-w-[680px] w-[calc(100vw-2rem)] max-h-[92vh] overflow-hidden p-0 border-0 bg-transparent shadow-none [&>button.absolute]:hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(VisuallyHidden, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: t("deleteBookingTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: t("deleteBookingSubtitle") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.94, y: 18 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.96, y: 12 },
            transition: { type: "spring", stiffness: 280, damping: 24 },
            className: "danger-glow relative flex max-h-[92vh] flex-col overflow-hidden rounded-[28px] border border-destructive/40 bg-card shadow-2xl shadow-destructive/20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  "aria-hidden": true,
                  className: "absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-destructive/40 via-destructive to-destructive/40",
                  animate: { opacity: [0.6, 1, 0.6] },
                  transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-destructive/15 blur-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-6 pt-6 pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: onClose,
                    className: "absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground transition hover:border-destructive/40 hover:text-destructive hover:rotate-90",
                    "aria-label": "Close",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { rotate: -10, scale: 0.8 },
                      animate: { rotate: [0, -6, 6, -4, 4, 0], scale: 1 },
                      transition: { duration: 0.9 },
                      className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-destructive to-destructive/70 text-destructive-foreground shadow-lg shadow-destructive/30",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-6 w-6" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 pt-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 inline-flex items-center gap-1.5 rounded-full border border-destructive/25 bg-destructive/10 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] text-destructive", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-3 w-3" }),
                      " irreversible"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-black tracking-tight text-foreground", children: t("deleteBookingTitle") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] font-semibold leading-snug text-muted-foreground", children: t("deleteBookingSubtitle") })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 overflow-y-auto px-6 pb-4 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/70 bg-background/70 p-3.5 shadow-inner space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground", children: t("bookingSummary") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ring-1",
                        style: { background: `${cfg.color}1a`, color: cfg.color, borderColor: `${cfg.color}40` },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: cfg.color } }),
                          cfg.label[lang]
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-5 w-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-black text-foreground leading-tight truncate", children: booking.guestName || (lang === "ru" ? "Гость" : "Guest") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] font-semibold text-muted-foreground", children: [
                        t("room"),
                        " ",
                        booking.roomNumber
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-[12px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5 text-primary" }), label: t("checkIn"), value: format(parseISO(booking.checkIn), "d MMM yyyy") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5 text-destructive" }), label: t("checkOut"), value: format(parseISO(booking.checkOut), "d MMM yyyy") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5 text-primary/70" }), label: t("guests"), value: `${booking.guestCount}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/70 font-black text-[11px]", children: "N" }), label: t("nightsShort"), value: `${nights}` })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-foreground/70", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileWarning, { className: "h-3 w-3 text-destructive" }),
                    t("reasonPreset")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: presetReasons.map((p) => {
                    const active = reason.trim() === p.label;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.button,
                      {
                        type: "button",
                        onClick: () => setReason(p.label),
                        whileHover: { scale: 1.04 },
                        whileTap: { scale: 0.96 },
                        className: `rounded-full px-3 py-1.5 text-[11px] font-bold transition-all ${active ? "bg-destructive text-destructive-foreground shadow-md shadow-destructive/30" : "bg-background border border-border/70 text-muted-foreground hover:border-destructive/30 hover:text-foreground"}`,
                        children: p.label
                      },
                      p.key
                    );
                  }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] font-black uppercase tracking-wider text-foreground/80 flex items-center gap-1.5", children: [
                    t("reasonLabel"),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      value: reason,
                      onChange: (e) => setReason(e.target.value),
                      placeholder: t("reasonPlaceholder"),
                      rows: 3,
                      className: "rounded-xl resize-none border-2 bg-background/80 focus-visible:border-destructive/50"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: reasonValid ? "text-emerald-600 font-bold" : "", children: [
                      trimmed.length,
                      "/10+ ",
                      lang === "ru" ? "символов" : lang === "uz" ? "belgi" : "chars"
                    ] }),
                    reasonValid && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-primary" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-2.5 rounded-xl border-2 border-destructive/20 bg-destructive/5 p-3 cursor-pointer hover:bg-destructive/10 transition-colors", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      checked: acknowledged,
                      onCheckedChange: (v) => setAcknowledged(!!v),
                      className: "mt-0.5 data-[state=checked]:bg-destructive data-[state=checked]:border-destructive"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold text-foreground leading-snug", children: t("iUnderstand") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 border-t border-border/60 bg-background/70 px-6 py-3.5 backdrop-blur", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, className: "rounded-xl", children: t("cancel") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: handleConfirm,
                    disabled: !canDelete,
                    className: "rounded-xl bg-destructive px-6 text-destructive-foreground shadow-lg shadow-destructive/30 hover:bg-destructive/90 disabled:opacity-50",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 mr-1.5" }),
                      t("confirmDelete")
                    ]
                  }
                )
              ] })
            ]
          },
          "delete-modal"
        ) })
      ]
    }
  ) });
}
function Chip({ icon, label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/60 bg-background/60 px-2.5 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-muted-foreground", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[12px] font-black tabular-nums text-foreground truncate", children: value })
  ] });
}
const safeFmt = (iso, pat = "dd.MM.yyyy") => {
  if (!iso) return "—";
  try {
    return format(parseISO(iso), pat);
  } catch {
    return "—";
  }
};
function HotelReceiptModal({
  open,
  onClose,
  booking,
  guestFullName,
  roomNumber,
  nights,
  checkInTime,
  checkOutTime,
  paymentTypeLabel,
  paymentTimingLabel,
  paymentAmount,
  categoryLabel,
  payments,
  totalAmount
}) {
  const { lang } = useI18n();
  const { categories } = useHotelGrid();
  const { details: hotel } = useHotelDetails();
  const { bookings: allBookings } = useBookingsContext();
  const L = (ru, en, uz) => lang === "ru" ? ru : lang === "uz" ? uz ?? en : en;
  const history = payments && payments.length ? payments : booking?.payments ?? [];
  const segments = booking?.segments;
  const hasSegments = !!segments && segments.length > 0;
  const segmentsTotal = hasSegments ? sumSegments(segments) : 0;
  const total = hasSegments ? segmentsTotal : totalAmount && totalAmount > 0 ? totalAmount : booking?.paymentAmount ?? Number(paymentAmount) ?? 0;
  const paidSum = history.reduce((s, p) => s + (Number(p.amount) || 0), 0);
  const fullyPaid = total > 0 && paidSum >= total;
  const overallPct = total > 0 ? Math.round(paidSum / total * 100) : 0;
  const methodLabel = (m) => ({ cash: L("Наличные", "Cash"), card: L("Карта", "Card"), transfer: L("Перевод", "Transfer") })[m];
  const categoryName = (id) => {
    const c = categories.find((x) => x.id === id);
    if (!c) return id;
    const label = c.label;
    return c.short || label && (label[lang] || label.en) || id;
  };
  const handlePrint = () => {
    const node = document.querySelector(".receipt-paper");
    if (!node) {
      window.print();
      return;
    }
    const html = node.outerHTML;
    const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]')).map((el) => el.outerHTML).join("\n");
    const pageHtml = `<!doctype html><html><head><meta charset="utf-8"><title>${L("Квитанция", "Receipt")}</title>${styles}<style>
      /* One A4 landscape sheet holds two A5-portrait receipts side by side,
         centered, with a black cut strip between them. */
      @page { size: A4 landscape; margin: 6mm; }
      html, body { margin: 0; padding: 0; background: #fff; color: #000; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .receipt-sheet { display: flex; flex-direction: row; align-items: stretch; justify-content: center; gap: 0; width: 100%; }
      .receipt-half { flex: 0 0 43%; max-width: 43%; display: flex; align-items: center; justify-content: center; break-inside: avoid; page-break-inside: avoid; }
      .receipt-half > * { width: 100%; }
      /* Black dashed cut strip marking where to cut the sheet in half. */
      .cut-strip { flex: 0 0 40px; width: 40px; align-self: stretch; display: flex; align-items: stretch; justify-content: center; }
      .cut-strip::before { content: ''; width: 0; height: 100%; border-left: 2px dashed #000; }
      .receipt-paper { position: static !important; width: 100% !important; max-width: 100% !important; max-height: none !important; overflow: visible !important; box-shadow: none !important; padding: 0 !important; margin: 0 !important; background: #fff !important; color: #000 !important; font-size: 9pt !important; line-height: 1.25 !important; }
      .receipt-paper * { overflow: visible !important; max-height: none !important; }
      .receipt-paper h1 { font-size: 14pt !important; }
      .receipt-paper .grid { gap: 4px !important; }
      .receipt-paper section { margin-top: 8px !important; }
      .receipt-paper table { font-size: 7.5pt !important; }
      .receipt-paper td, .receipt-paper th { padding: 2px 5px !important; }
    </style></head><body><div class="receipt-sheet"><div class="receipt-half">${html}</div><div class="cut-strip"></div><div class="receipt-half">${html}</div></div></body></html>`;
    const iframe = document.createElement("iframe");
    iframe.setAttribute("aria-hidden", "true");
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    iframe.style.opacity = "0";
    document.body.appendChild(iframe);
    const cleanup = () => {
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
    };
    const doPrint = () => {
      const win = iframe.contentWindow;
      if (!win) {
        cleanup();
        return;
      }
      win.focus();
      win.onafterprint = () => setTimeout(cleanup, 100);
      win.print();
      setTimeout(cleanup, 6e4);
    };
    const doc = iframe.contentWindow?.document;
    if (!doc) {
      cleanup();
      window.print();
      return;
    }
    doc.open();
    doc.write(pageHtml);
    doc.close();
    if (doc.readyState === "complete") setTimeout(doPrint, 250);
    else iframe.addEventListener("load", () => setTimeout(doPrint, 250));
  };
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "p" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        handlePrint();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  const receiptNumber = (() => {
    if (!booking?.id) return "—";
    const ordered = [...allBookings].sort((a, b) => {
      const at = a.createdAt ?? "";
      const bt = b.createdAt ?? "";
      if (at && bt && at !== bt) return at < bt ? -1 : 1;
      if (at && !bt) return -1;
      if (!at && bt) return 1;
      return String(a.id) < String(b.id) ? -1 : String(a.id) > String(b.id) ? 1 : 0;
    });
    const idx = ordered.findIndex((b) => b.id === booking.id);
    const seq = idx >= 0 ? idx + 1 : ordered.length + 1;
    return String(seq).padStart(9, "0");
  })();
  const issuedAt = booking?.paymentConfirmedAt ? safeFmt(booking.paymentConfirmedAt.slice(0, 10), "dd.MM.yyyy") : format(/* @__PURE__ */ new Date(), "dd.MM.yyyy");
  const issuedTime = booking?.paymentConfirmedAt ? new Date(booking.paymentConfirmedAt).toLocaleTimeString(lang === "ru" ? "ru-RU" : "en-GB", { hour: "2-digit", minute: "2-digit" }) : (/* @__PURE__ */ new Date()).toLocaleTimeString(lang === "ru" ? "ru-RU" : "en-GB", { hour: "2-digit", minute: "2-digit" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-[720px] w-[calc(100vw-1.5rem)] max-h-[calc(100dvh-1.5rem)] overflow-hidden p-0 border-0 bg-transparent shadow-none [&>button.absolute]:hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(VisuallyHidden, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: L("Квитанция", "Receipt") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: L("Платёжная квитанция", "Payment receipt") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "receipt-shell relative flex max-h-[calc(100dvh-1.5rem)] flex-col overflow-hidden rounded-[24px] bg-card ring-1 ring-foreground/10 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "receipt-toolbar flex items-center justify-between gap-3 border-b border-border/60 bg-gradient-to-r from-primary/10 via-accent/30 to-primary/5 px-5 py-3 print:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black uppercase tracking-[0.22em]", children: L("Документ", "Document") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black", children: L("Квитанция об оплате", "Payment receipt") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              onClick: handlePrint,
              className: "gap-1.5 rounded-xl bg-gradient-to-r from-primary to-primary/85 text-primary-foreground shadow-md shadow-primary/30",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "h-3.5 w-3.5" }),
                L("Печать", "Print")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              "aria-label": "Close",
              className: "flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground hover:border-destructive/40 hover:text-destructive transition",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "receipt-paper max-h-[80vh] overflow-y-auto bg-white text-slate-900 px-8 py-7 print:max-h-none print:overflow-visible print:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "select-none border-b border-slate-300 pb-4", style: { userSelect: "none", WebkitUserSelect: "none" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 items-start gap-4", children: [
              hotel.logo && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-20 w-20 flex-none items-center justify-center overflow-hidden rounded-xl border border-slate-300 bg-slate-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hotel.logo, alt: "", draggable: false, className: "h-full w-full object-contain pointer-events-none" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "truncate text-2xl font-black tracking-tight", children: hotel.hotelName || L("Название отеля", "Hotel name") }),
                hotel.companyName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 truncate text-xs font-semibold text-slate-600", children: hotel.companyName })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "whitespace-nowrap rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-right text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "№ " }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold", children: receiptNumber })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-slate-500", children: [
                issuedAt,
                " · ",
                issuedTime
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black uppercase tracking-[0.14em] text-slate-400", children: L("ИНН", "INN") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-mono text-[13px] font-semibold text-slate-800", children: hotel.inn || "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black uppercase tracking-[0.14em] text-slate-400", children: L("Расчётный счёт", "Bank account") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-mono text-[13px] font-semibold text-slate-800", children: hotel.raschetnyiSchet || "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black uppercase tracking-[0.14em] text-slate-400", children: L("Телефон", "Phone") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[13px] font-semibold text-slate-800", children: hotel.telephone || "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black uppercase tracking-[0.14em] text-slate-400", children: L("Сайт", "Site") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[13px] font-semibold text-slate-800", children: hotel.site || "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black uppercase tracking-[0.14em] text-slate-400", children: L("E-mail", "E-mail") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[13px] font-semibold text-slate-800", children: hotel.email || "—" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500", children: L("Квитанция об оплате", "Payment Receipt") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-5 grid grid-cols-2 gap-x-8 gap-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: L("ФИО гостя", "Guest name"), v: guestFullName || "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: L("Номер комнаты", "Room number"), v: `№ ${roomNumber}` }),
          categoryLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: L("Категория", "Category"), v: categoryLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: L("Кол-во гостей", "Guests"), v: String(booking?.guestCount ?? 1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: L("Дата заезда", "Check-in"), v: `${safeFmt(booking?.checkIn)} · ${checkInTime}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: L("Дата выезда", "Check-out"), v: `${safeFmt(booking?.checkOut)} · ${checkOutTime}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: L("Кол-во ночей", "Nights"), v: Number.isInteger(nights) ? String(nights) : nights.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: L("Контакт", "Contact"), v: booking?.guestPhone || booking?.guestEmail || "—" })
        ] }),
        hasSegments && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-black uppercase tracking-[0.18em] text-slate-500", children: L("Разбивка по категориям (смена номера)", "Stay breakdown (room change)", "Toifalar boʼyicha taqsimot") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 overflow-hidden rounded-lg border border-slate-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-slate-100 text-slate-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-left font-black uppercase tracking-wider", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-left font-black uppercase tracking-wider", children: L("Категория", "Category") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-left font-black uppercase tracking-wider", children: L("Комната", "Room") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-left font-black uppercase tracking-wider", children: L("Период", "Period") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-right font-black uppercase tracking-wider", children: L("Ночей", "Nights") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-right font-black uppercase tracking-wider", children: L("Цена/ночь", "Rate/night") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-right font-black uppercase tracking-wider", children: L("Сумма", "Amount") })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              segments.map((seg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-slate-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono", children: i + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: categoryName(seg.categoryId) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-1.5 font-mono", children: [
                  "№ ",
                  seg.roomNumber
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-1.5", children: [
                  safeFmt(seg.from),
                  " → ",
                  safeFmt(seg.to)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 text-right tabular-nums", children: seg.nights }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 text-right tabular-nums", children: formatPrice(seg.perNightRate) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 text-right font-bold tabular-nums", children: formatPrice(seg.price) })
              ] }, i)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-slate-300 bg-slate-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-black", colSpan: 6, children: L("Итого по проживанию", "Stay total") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 text-right font-black tabular-nums", children: formatPrice(segmentsTotal) })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-6 rounded-xl border border-slate-300 bg-slate-50 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-black uppercase tracking-[0.18em] text-slate-500", children: L("Оплата", "Payment") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-x-8 gap-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: L("Способ оплаты", "Method"), v: paymentTypeLabel, dark: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: L("Статус", "Status"), v: fullyPaid ? L("Оплачено полностью", "Paid in full") : L("Частичная оплата", "Partial payment"), dark: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: L("Оплачено всего", "Paid in total"), v: `${formatPrice(paidSum)} (${overallPct}%)`, dark: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: L("Кол-во платежей", "Installments"), v: String(history.length), dark: true })
          ] }),
          history.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 overflow-hidden rounded-lg border border-slate-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-slate-100 text-slate-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-left font-black uppercase tracking-wider", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-left font-black uppercase tracking-wider", children: L("Дата и время", "Date & time") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-left font-black uppercase tracking-wider", children: L("Способ", "Method") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-right font-black uppercase tracking-wider", children: L("Сумма", "Amount") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 text-right font-black uppercase tracking-wider", children: "%" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: history.map((p, i) => {
              const pct = total > 0 ? Math.round(p.amount / total * 100) : 0;
              const when = (() => {
                try {
                  return format(parseISO(p.at), "dd.MM.yyyy HH:mm");
                } catch {
                  return "—";
                }
              })();
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-slate-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono", children: i + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: when }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: methodLabel(p.method) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 text-right font-bold tabular-nums", children: formatPrice(p.amount) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-1.5 text-right tabular-nums", children: [
                  pct,
                  "%"
                ] })
              ] }, i);
            }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-end justify-between border-t border-dashed border-slate-300 pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase tracking-[0.18em] text-slate-500", children: L("Итого", "Total") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-black tabular-nums", children: [
              formatPrice(total || Number(paymentAmount)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-sm font-bold text-slate-500", children: L("сум", "UZS") })
            ] })
          ] }),
          !fullyPaid && total > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between text-xs text-slate-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Остаток к оплате", "Remaining") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold tabular-nums", children: formatPrice(Math.max(0, total - paidSum)) })
          ] })
        ] }),
        booking?.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-black uppercase tracking-[0.18em] text-slate-500", children: L("Заметки", "Notes") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 whitespace-pre-wrap text-slate-700", children: booking.notes })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8 grid grid-cols-2 gap-8 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500", children: L("Подпись администратора", "Administrator signature") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 border-t border-slate-400" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500", children: L("Подпись гостя", "Guest signature") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 border-t border-slate-400" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center text-[10px] text-slate-400", children: L("Спасибо, что выбрали наш отель!", "Thank you for choosing our hotel!") })
      ] })
    ] })
  ] }) });
}
function Row({ k, v, dark }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-[0.14em] ${dark ? "text-slate-500" : "text-slate-500"}`, children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 font-semibold text-slate-900", children: v })
  ] });
}
const nextDay = (iso) => format(addDays(parseISO(iso), 1), "yyyy-MM-dd");
const prevDay = (iso) => format(addDays(parseISO(iso), -1), "yyyy-MM-dd");
function BookingDialog({
  open,
  onClose,
  onSave,
  onUpdate,
  onDelete,
  roomNumber,
  checkIn,
  checkOut,
  editBooking,
  bedIndex,
  prefillName,
  initialEarlyCheckin = false,
  initialLateCheckout = false,
  extraGuestSlots = 0,
  readOnly = false
}) {
  const { t, lang } = useI18n();
  const { user } = useAuth();
  const { rooms, categories, categoryRates } = useHotelGrid();
  const { bookings: allBookings } = useBookingsContext();
  const isAdminOnly = user?.role === "admin";
  const roomCategoryId = reactExports.useMemo(() => rooms.find((r) => r.number === roomNumber)?.category, [rooms, roomNumber]);
  const roomCategory = reactExports.useMemo(() => categories.find((c) => c.id === roomCategoryId), [categories, roomCategoryId]);
  const categoryMaxGuests = Math.max(1, roomCategory?.maxGuests ?? 1);
  const effectiveMaxGuests = Math.max(categoryMaxGuests, categoryMaxGuests + Math.max(0, extraGuestSlots));
  const [residency, setResidency] = reactExports.useState(editBooking?.residency ?? "resident");
  reactExports.useEffect(() => {
    setResidency(editBooking?.residency ?? "resident");
  }, [editBooking, open]);
  const emptyArr = reactExports.useMemo(() => Array.from({ length: categoryMaxGuests }, () => 0), [categoryMaxGuests]);
  const categoryRateObj = roomCategoryId ? categoryRates[roomCategoryId] ?? { resident: emptyArr, nonResident: emptyArr } : { resident: emptyArr, nonResident: emptyArr };
  categoryRateObj[residency] ?? emptyArr;
  const categoryLabel = reactExports.useMemo(() => {
    const c = categories.find((c2) => c2.id === roomCategoryId);
    return c ? c.short || c.label[lang] || c.label.en : "";
  }, [categories, roomCategoryId, lang]);
  const [deleteOpen, setDeleteOpen] = reactExports.useState(false);
  const [contactsOpen, setContactsOpen] = reactExports.useState(false);
  const [earlyCheckoutConfirm, setEarlyCheckoutConfirm] = reactExports.useState(null);
  const [firstName, setFirstName] = reactExports.useState("");
  const [warnOpen, setWarnOpen] = reactExports.useState(false);
  const initialSnapshotRef = reactExports.useRef("");
  const latestSnapshotRef = reactExports.useRef("");
  const [lastName, setLastName] = reactExports.useState("");
  const [middleName, setMiddleName] = reactExports.useState("");
  const [guestPhone, setGuestPhone] = reactExports.useState("");
  const [guestEmail, setGuestEmail] = reactExports.useState("");
  const [guestWhatsapp, setGuestWhatsapp] = reactExports.useState("");
  const [guestTelegram, setGuestTelegram] = reactExports.useState("");
  const [guestInstagram, setGuestInstagram] = reactExports.useState("");
  const [guestCount, setGuestCount] = reactExports.useState(1);
  const [notes, setNotes] = reactExports.useState("");
  const [inDate, setInDate] = reactExports.useState(checkIn);
  const [outDate, setOutDate] = reactExports.useState(checkOut);
  const [status, setStatus] = reactExports.useState("booked");
  const [earlyCheckin, setEarlyCheckin] = reactExports.useState(false);
  const [lateCheckout, setLateCheckout] = reactExports.useState(false);
  const [price, setPrice] = reactExports.useState("");
  const [paymentType, setPaymentType] = reactExports.useState("cash");
  const [paymentTiming, setPaymentTiming] = reactExports.useState("full_now");
  const [paymentAmount, setPaymentAmount] = reactExports.useState("");
  const [paymentInput, setPaymentInput] = reactExports.useState("");
  const [payments, setPayments] = reactExports.useState([]);
  const [paymentConfirmed, setPaymentConfirmed] = reactExports.useState(false);
  const [receiptGlow, setReceiptGlow] = reactExports.useState(false);
  const [fullyPaidOverlay, setFullyPaidOverlay] = reactExports.useState(false);
  const paymentSectionRef = reactExports.useRef(null);
  const overlayTimerRef = reactExports.useRef(null);
  const triggerFullyPaidOverlay = reactExports.useCallback(() => {
    if (overlayTimerRef.current) window.clearTimeout(overlayTimerRef.current);
    setFullyPaidOverlay(true);
    overlayTimerRef.current = window.setTimeout(() => setFullyPaidOverlay(false), 5e3);
  }, []);
  reactExports.useEffect(() => () => {
    if (overlayTimerRef.current) window.clearTimeout(overlayTimerRef.current);
  }, []);
  const lastNameRef = reactExports.useRef(null);
  const [surnameGlow, setSurnameGlow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!open) {
      setSurnameGlow(false);
      return;
    }
    const focusTimer = setTimeout(() => {
      lastNameRef.current?.focus();
      setSurnameGlow(true);
    }, 180);
    const offTimer = setTimeout(() => setSurnameGlow(false), 1600);
    return () => {
      clearTimeout(focusTimer);
      clearTimeout(offTimer);
    };
  }, [open]);
  const [anketaOpen, setAnketaOpen] = reactExports.useState(false);
  const [guestDetailsOpen, setGuestDetailsOpen] = reactExports.useState(false);
  const [receiptOpen, setReceiptOpen] = reactExports.useState(false);
  editBooking?.status === "checked-out";
  reactExports.useEffect(() => {
    if (editBooking) {
      const hasStructured = editBooking.guestLastName !== void 0 || editBooking.guestFirstName !== void 0 || editBooking.guestMiddleName !== void 0;
      if (hasStructured) {
        setLastName(editBooking.guestLastName || "");
        setFirstName(editBooking.guestFirstName || "");
        setMiddleName(editBooking.guestMiddleName || "");
      } else {
        const raw = (editBooking.guestName || "").trim();
        setLastName("");
        setFirstName(raw);
        setMiddleName("");
      }
      setGuestPhone(editBooking.guestPhone);
      setGuestEmail(editBooking.guestEmail);
      setGuestWhatsapp(editBooking.guestWhatsapp || "");
      setGuestTelegram(editBooking.guestTelegram || "");
      setGuestInstagram(editBooking.guestInstagram || "");
      setGuestCount(editBooking.guestCount);
      setNotes(editBooking.notes);
      setInDate(editBooking.checkIn);
      setOutDate(editBooking.checkOut);
      setStatus(editBooking.status);
      setEarlyCheckin(!!editBooking.checkInHalfDay);
      setLateCheckout(!!editBooking.checkOutHalfDay);
      setPrice(editBooking.price !== void 0 ? String(editBooking.price) : "");
      setPaymentType(editBooking.paymentType || "cash");
      setPaymentTiming(editBooking.paymentTiming || "full_now");
      setPaymentAmount(editBooking.paymentAmount !== void 0 ? String(editBooking.paymentAmount) : editBooking.price !== void 0 ? String(editBooking.price) : "");
      setPayments(Array.isArray(editBooking.payments) ? editBooking.payments : []);
      setPaymentInput("");
      setPaymentConfirmed(!!editBooking.paymentConfirmed);
    } else {
      setFirstName((prefillName || "").trim());
      setMiddleName("");
      setLastName("");
      setGuestPhone("");
      setGuestEmail("");
      setGuestWhatsapp("");
      setGuestTelegram("");
      setGuestInstagram("");
      const todayLocal = startOfDay(/* @__PURE__ */ new Date());
      const seedIn = checkIn && isBefore(parseISO(checkIn), todayLocal) ? format(todayLocal, "yyyy-MM-dd") : checkIn;
      const seedOutBase = checkOut && parseISO(checkOut) <= parseISO(seedIn) ? format(addDays(parseISO(seedIn), 1), "yyyy-MM-dd") : checkOut;
      setGuestCount(1);
      setNotes("");
      setInDate(seedIn);
      setOutDate(seedOutBase);
      setStatus("booked");
      setEarlyCheckin(initialEarlyCheckin);
      setLateCheckout(initialLateCheckout);
      setPrice("");
      setPaymentType("cash");
      setPaymentTiming("full_now");
      setPaymentAmount("");
      setPaymentInput("");
      setPayments([]);
      setPaymentConfirmed(false);
    }
  }, [editBooking, checkIn, checkOut, open, prefillName, initialEarlyCheckin, initialLateCheckout]);
  const { map: passportMap, setRecord: setPassportRecord } = useSharedNamespace("passports", "sayohat-passport-changed");
  const passportSlice = editBooking ? passportMap[editBooking.id] : void 0;
  const pLast = (passportSlice?.lastName ?? "").toString();
  const pFirst = (passportSlice?.firstName ?? "").toString();
  const pMiddle = (passportSlice?.middleName ?? "").toString();
  reactExports.useEffect(() => {
    if (!open || !editBooking) return;
    if (pLast.trim() && pLast !== lastName) setLastName(pLast);
    if (pFirst.trim() && pFirst !== firstName) setFirstName(pFirst);
    if (pMiddle.trim() && pMiddle !== middleName) setMiddleName(pMiddle);
  }, [open, editBooking?.id, pLast, pFirst, pMiddle]);
  reactExports.useEffect(() => {
    if (!open || !editBooking) return;
    const current = passportMap[editBooking.id] || {};
    const nl = lastName.trim();
    const nf = firstName.trim();
    const nm = middleName.trim();
    if ((current.lastName ?? "") === nl && (current.firstName ?? "") === nf && (current.middleName ?? "") === nm) return;
    setPassportRecord(editBooking.id, { ...current, lastName: nl, firstName: nf, middleName: nm });
  }, [open, editBooking?.id, lastName, firstName, middleName]);
  const dayDiff = inDate && outDate ? differenceInCalendarDays(parseISO(outDate), parseISO(inDate)) : 0;
  const todayISO = format(startOfDay(/* @__PURE__ */ new Date()), "yyyy-MM-dd");
  const minCheckIn = todayISO;
  const halfAdj = (earlyCheckin ? 0.5 : 0) + (lateCheckout ? 0.5 : 0);
  const nightsDisplay = dayDiff + halfAdj;
  const checkInTime = earlyCheckin ? "08:00" : "14:00";
  const checkOutTime = lateCheckout ? "24:00" : "12:00";
  const fullName = reactExports.useMemo(
    () => [lastName.trim(), firstName.trim(), middleName.trim()].filter(Boolean).join(" "),
    [lastName, firstName, middleName]
  );
  const initials = reactExports.useMemo(() => {
    const a = (firstName.trim()[0] || "").toUpperCase();
    const b = (lastName.trim()[0] || "").toUpperCase();
    return a + b || (a || "•");
  }, [firstName, lastName]);
  const guestMultiplier = Math.max(1, Number(guestCount) || 1);
  const perNightRate = reactExports.useMemo(() => {
    if (!roomCategoryId) return 0;
    return computePerNightRate(categoryRates, roomCategoryId, residency, guestMultiplier);
  }, [categoryRates, roomCategoryId, residency, guestMultiplier]);
  const segmentsList = reactExports.useMemo(
    () => repriceSegments(editBooking?.segments, categoryRates, residency, guestMultiplier),
    [editBooking?.segments, categoryRates, residency, guestMultiplier]
  );
  const hasSegments = segmentsList.length > 0;
  const segmentsTotal = hasSegments ? sumSegments(segmentsList) : 0;
  const segmentCategoryLabel = reactExports.useCallback((catId) => {
    const c = categories.find((cc) => cc.id === catId);
    return c ? c.short || c.label[lang] || c.label.en : catId;
  }, [categories, lang]);
  const computedPaymentTotal = hasSegments ? segmentsTotal : perNightRate > 0 ? Math.round(nightsDisplay * perNightRate) : 0;
  const paymentTypeLabel = { cash: "Наличные", card: "Карта", transfer: "Перечисление" }[paymentType];
  const paymentTimingLabel = { full_now: "100% сразу", half_now: "50% сразу", quarter_now: "25% сразу", after_checkout: "После выезда" }[paymentTiming];
  const effectiveTotal = reactExports.useMemo(() => {
    if (hasSegments) return segmentsTotal;
    if (computedPaymentTotal > 0) return computedPaymentTotal;
    const parsed = Number(paymentAmount);
    if (paymentAmount.trim() && Number.isFinite(parsed) && parsed > 0) return Math.max(0, parsed);
    if (editBooking?.price !== void 0) return editBooking.price;
    const p = Number(price);
    return price.trim() && Number.isFinite(p) ? Math.max(0, p) : 0;
  }, [hasSegments, segmentsTotal, paymentAmount, editBooking?.price, computedPaymentTotal, price]);
  const paidSum = reactExports.useMemo(() => payments.reduce((s, p) => s + (Number(p.amount) || 0), 0), [payments]);
  const remainingAmount = Math.max(0, effectiveTotal - paidSum);
  const isFullyPaid = effectiveTotal > 0 && paidSum >= effectiveTotal;
  reactExports.useEffect(() => {
    setPaymentConfirmed(isFullyPaid);
  }, [isFullyPaid]);
  const displayedPaymentAmount = effectiveTotal > 0 ? String(effectiveTotal) : paymentAmount.trim() || price.trim() || (computedPaymentTotal ? String(computedPaymentTotal) : "0");
  const currentSnapshot = reactExports.useMemo(
    () => JSON.stringify({
      residency,
      firstName,
      lastName,
      middleName,
      guestPhone,
      guestEmail,
      guestWhatsapp,
      guestTelegram,
      guestInstagram,
      guestCount,
      notes,
      inDate,
      outDate,
      status,
      earlyCheckin,
      lateCheckout,
      price,
      paymentType,
      paymentTiming,
      paymentAmount,
      paymentInput,
      payments,
      paymentConfirmed
    }),
    [residency, firstName, lastName, middleName, guestPhone, guestEmail, guestWhatsapp, guestTelegram, guestInstagram, guestCount, notes, inDate, outDate, status, earlyCheckin, lateCheckout, price, paymentType, paymentTiming, paymentAmount, paymentInput, payments, paymentConfirmed]
  );
  latestSnapshotRef.current = currentSnapshot;
  const rebaselineSnapshotSoon = reactExports.useCallback(() => {
    window.setTimeout(() => {
      initialSnapshotRef.current = latestSnapshotRef.current;
    }, 0);
  }, []);
  reactExports.useEffect(() => {
    if (!open) {
      setWarnOpen(false);
      initialSnapshotRef.current = "";
      return;
    }
    setWarnOpen(false);
    const timer = window.setTimeout(() => {
      initialSnapshotRef.current = latestSnapshotRef.current;
    }, 120);
    return () => window.clearTimeout(timer);
  }, [open, editBooking?.id]);
  const isDirty = open && initialSnapshotRef.current !== "" && currentSnapshot !== initialSnapshotRef.current;
  const requestClose = reactExports.useCallback(() => {
    if (!readOnly && isDirty) {
      setWarnOpen(true);
      return;
    }
    onClose();
  }, [isDirty, onClose, readOnly]);
  const handleSave = (statusOverride, overrides) => {
    if (!fullName || !inDate || !outDate) return;
    const effectiveOutForValidation = overrides?.checkOut ?? outDate;
    const dayDiffEffective = differenceInCalendarDays(parseISO(effectiveOutForValidation), parseISO(inDate));
    if (dayDiffEffective <= 0) {
      toast.error(lang === "ru" ? "Дата выезда должна быть позже даты заезда" : "Chiqish sanasi kirish sanasidan keyin bo'lishi kerak");
      return;
    }
    const contactError = validateContactBundle({ phone: guestPhone, whatsapp: guestWhatsapp, email: guestEmail, telegram: guestTelegram, instagram: guestInstagram });
    if (contactError) {
      toast.error(contactError.message);
      return;
    }
    let effectiveIn = inDate;
    let effectiveOut = overrides?.checkOut ?? outDate;
    const effectiveLateCheckout = overrides?.checkOutHalfDay ?? lateCheckout;
    if (!editBooking && true) {
      const todayLocal = startOfDay(/* @__PURE__ */ new Date());
      if (isBefore(parseISO(effectiveIn), todayLocal)) {
        const shift = differenceInCalendarDays(todayLocal, parseISO(effectiveIn));
        effectiveIn = format(todayLocal, "yyyy-MM-dd");
        effectiveOut = format(addDays(parseISO(effectiveOut), shift), "yyyy-MM-dd");
        setInDate(effectiveIn);
        setOutDate(effectiveOut);
      }
    }
    const finalStatus = statusOverride ?? status;
    const nameFields = {
      guestLastName: lastName.trim(),
      guestFirstName: firstName.trim(),
      guestMiddleName: middleName.trim()
    };
    const parsedPrice = Number(price);
    const manualPrice = price.trim() && Number.isFinite(parsedPrice) ? Math.max(0, parsedPrice) : void 0;
    const parsedPayment = Number(paymentAmount);
    const cleanPaymentAmount = effectiveTotal > 0 ? effectiveTotal : paymentAmount.trim() && Number.isFinite(parsedPayment) ? Math.max(0, parsedPayment) : void 0;
    const adminTotal = perNightRate > 0 ? Math.round(nightsDisplay * perNightRate) : void 0;
    const cleanPrice = isAdminOnly ? effectiveTotal > 0 ? effectiveTotal : editBooking?.price !== void 0 ? editBooking.price : adminTotal : manualPrice;
    if (editBooking && onUpdate) {
      const ok = onUpdate(editBooking.id, {
        guestName: fullName,
        ...nameFields,
        guestPhone,
        guestEmail,
        guestWhatsapp,
        guestTelegram,
        guestInstagram,
        guestCount,
        checkIn: effectiveIn,
        checkOut: effectiveOut,
        notes,
        status: finalStatus,
        checkInHalfDay: earlyCheckin,
        checkOutHalfDay: effectiveLateCheckout,
        price: cleanPrice,
        paymentType,
        paymentTiming,
        paymentAmount: cleanPaymentAmount,
        paymentConfirmed,
        payments,
        residency,
        ...hasSegments ? { segments: segmentsList, price: segmentsTotal, paymentAmount: segmentsTotal } : {},
        paymentConfirmedAt: paymentConfirmed ? editBooking.paymentConfirmedAt || (/* @__PURE__ */ new Date()).toISOString() : void 0
      });
      if (ok === false) return;
    } else {
      const ok = onSave({
        id: crypto.randomUUID(),
        roomNumber,
        guestName: fullName,
        ...nameFields,
        guestPhone,
        guestEmail,
        guestWhatsapp,
        guestTelegram,
        guestInstagram,
        guestCount,
        checkIn: effectiveIn,
        checkOut: effectiveOut,
        notes,
        status: finalStatus,
        price: cleanPrice,
        paymentType,
        paymentTiming,
        paymentAmount: cleanPaymentAmount,
        paymentConfirmed,
        payments,
        residency,
        // Manually created from inside the admin panel → always 'offline'.
        bookingChannel: "offline",
        paymentConfirmedAt: paymentConfirmed ? (/* @__PURE__ */ new Date()).toISOString() : void 0,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        ...bedIndex !== void 0 ? { bedIndex } : {},
        ...earlyCheckin ? { checkInHalfDay: true } : {},
        ...lateCheckout ? { checkOutHalfDay: true } : {}
      });
      if (ok === false) return;
    }
    toast.success(t("bookingSaved"));
    rebaselineSnapshotSoon();
    onClose();
  };
  const handleDelete = () => {
    if (!editBooking) return;
    setDeleteOpen(true);
  };
  const isEditing = !!editBooking;
  const statusCfg = BOOKING_STATUSES[status];
  const titleLabel = isEditing ? t("editBooking") : t("newBooking");
  const inHuman = inDate ? safeFormat(inDate, "EEE, d MMM") : "";
  const outHuman = outDate ? safeFormat(outDate, "EEE, d MMM") : "";
  const guestDetails = {
    bookingId: editBooking?.id,
    fullName,
    initials,
    roomNumber,
    bedIndex,
    statusLabel: statusCfg.label[lang],
    statusColor: statusCfg.color,
    guestLastName: lastName,
    guestFirstName: firstName,
    guestMiddleName: middleName,
    guestPhone,
    guestEmail,
    guestWhatsapp,
    guestTelegram,
    guestInstagram,
    guestCount,
    inHuman,
    outHuman,
    nightsDisplay,
    checkInTime,
    checkOutTime,
    paymentTypeLabel,
    paymentTimingLabel,
    paymentAmount: displayedPaymentAmount,
    paymentConfirmed,
    notes
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: (v) => !v && requestClose(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "sm:max-w-[940px] w-[calc(100vw-1.5rem)] max-h-[calc(100dvh-1.5rem)] overflow-hidden p-0 border-0 bg-transparent shadow-none [&>button.absolute]:hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(VisuallyHidden, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Booking" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Create or edit a booking" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.96, filter: "blur(2px)" },
              animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
              transition: { duration: 0.2, ease: "easeOut" },
              className: "relative flex max-h-[calc(100dvh-1.5rem)] min-h-0 flex-col overflow-hidden rounded-[28px] bg-card ring-1 ring-foreground/10 shadow-[0_50px_120px_-30px_rgba(15,15,40,0.55)]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "aria-hidden": true,
                      className: "absolute inset-0",
                      style: {
                        background: `radial-gradient(120% 140% at 0% 0%, ${statusCfg.color}26 0%, transparent 55%),
                             radial-gradient(120% 140% at 100% 0%, hsl(var(--primary) / 0.18) 0%, transparent 55%),
                             linear-gradient(180deg, hsl(var(--primary) / 0.06), transparent)`
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute -left-20 top-10 h-48 w-48 rounded-full blur-3xl", style: { background: `${statusCfg.color}33` } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative px-6 pt-3 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[13px] font-black tracking-tight text-primary-foreground shadow-md shadow-primary/30",
                        style: { background: `linear-gradient(135deg, hsl(var(--primary)) 0%, ${statusCfg.color} 100%)` },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "drop-shadow-sm", children: initials }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-card ring-2 ring-card text-[9px]",
                              title: statusCfg.label[lang],
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: { background: statusCfg.color } })
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black uppercase tracking-[0.22em] text-primary/80", children: titleLabel }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-0.5 truncate text-[16px] font-black leading-tight text-foreground", children: fullName || (lang === "ru" ? "Новый гость" : lang === "uz" ? "Yangi mehmon" : "New guest") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex flex-wrap items-center gap-1 text-[10px] font-semibold text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-background/70 px-2.5 py-1 ring-1 ring-border/60 backdrop-blur", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-3 w-3 text-primary" }),
                          t("room"),
                          " ",
                          roomNumber,
                          bedIndex !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 rounded-md bg-primary/15 px-1.5 py-px text-[9px] font-black uppercase text-primary", children: [
                            "#",
                            bedIndex + 1
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ring-1 backdrop-blur",
                            style: {
                              background: `${statusCfg.color}1f`,
                              color: statusCfg.color,
                              borderColor: `${statusCfg.color}40`
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: statusCfg.color } }),
                              statusCfg.label[lang]
                            ]
                          }
                        ),
                        dayDiff > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-primary/12 px-2.5 py-1 font-black uppercase tracking-wider text-primary ring-1 ring-primary/25", children: [
                          Number.isInteger(nightsDisplay) ? nightsDisplay : nightsDisplay.toFixed(1),
                          " ",
                          t("nightsShort")
                        ] }),
                        (earlyCheckin || lateCheckout) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          earlyCheckin && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-500/30", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Sunrise, { className: "h-3 w-3" }),
                            " ",
                            t("earlyBadge")
                          ] }),
                          lateCheckout && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-amber-700 ring-1 ring-amber-500/30", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-3 w-3" }),
                            " ",
                            t("lateBadge")
                          ] })
                        ] }),
                        (() => {
                          const channel = editBooking?.bookingChannel ?? "offline";
                          const isOnline = channel === "online";
                          const onlineLabel = lang === "ru" ? "Онлайн" : lang === "uz" ? "Onlayn" : "Online";
                          const offlineLabel = lang === "ru" ? "Офлайн" : lang === "uz" ? "Oflayn" : "Offline";
                          const guestTitle = lang === "ru" ? "Гость" : lang === "uz" ? "Mehmon" : "Guest";
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              title: guestTitle,
                              "aria-label": guestTitle,
                              className: "group/ch inline-flex items-center gap-1 rounded-full bg-background/80 p-[3px] ring-1 ring-border/70 shadow-sm backdrop-blur select-none",
                              style: { cursor: "default" },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "span",
                                  {
                                    "aria-disabled": true,
                                    tabIndex: -1,
                                    className: `pointer-events-none inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider transition-all duration-200 ${isOnline ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-[0_2px_8px_-2px_rgba(14,165,233,0.55)] ring-1 ring-sky-600/40 scale-[1.02]" : "text-muted-foreground/60 opacity-70"}`,
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${isOnline ? "bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]" : "bg-sky-500/30"}` }),
                                      onlineLabel
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "span",
                                  {
                                    "aria-disabled": true,
                                    tabIndex: -1,
                                    className: `pointer-events-none inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider transition-all duration-200 ${!isOnline ? "bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-[0_2px_8px_-2px_rgba(15,23,42,0.6)] ring-1 ring-slate-900/50 scale-[1.02]" : "text-muted-foreground/60 opacity-70"}`,
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${!isOnline ? "bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]" : "bg-slate-500/30"}` }),
                                      offlineLabel
                                    ]
                                  }
                                )
                              ]
                            }
                          );
                        })()
                      ] }),
                      (inHuman || outHuman) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 text-[12px] font-semibold tabular-nums text-foreground/80", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          inHuman,
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground/70", children: [
                            "· ",
                            checkInTime
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 text-muted-foreground/60" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          outHuman,
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground/70", children: [
                            "· ",
                            checkOutTime
                          ] })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [
                      editBooking && !readOnly && /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            "aria-label": lang === "ru" ? "Сменить комнату" : lang === "uz" ? "Xonani almashtirish" : "Change room",
                            title: lang === "ru" ? "Сменить комнату" : lang === "uz" ? "Xonani almashtirish" : "Change room",
                            className: "inline-flex h-9 items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 text-[12px] font-bold text-foreground backdrop-blur transition hover:border-primary/50 hover:text-primary",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-3.5 w-3.5" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang === "ru" ? "Сменить комнату" : lang === "uz" ? "Xonani almashtirish" : "Change room" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3 w-3 opacity-70" })
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(PopoverContent, { align: "end", className: "w-64 p-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 pt-1 pb-1.5 text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: lang === "ru" ? "Выберите категорию" : lang === "uz" ? "Kategoriyani tanlang" : "Pick category" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-72 overflow-y-auto flex flex-col", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                window.dispatchEvent(new CustomEvent("hotel:change-room", {
                                  detail: { bookingId: editBooking.id, categoryId: c.id }
                                }));
                                onClose();
                              },
                              className: "flex items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-[12.5px] font-semibold text-foreground hover:bg-accent",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: c.label[lang] || c.label.en }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 rounded-md bg-muted px-1.5 py-0.5 text-[9.5px] font-black uppercase tracking-wider text-muted-foreground", children: c.short })
                              ]
                            },
                            c.id
                          )) })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: requestClose,
                          "aria-label": "Close",
                          className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground backdrop-blur transition hover:border-destructive/40 hover:text-destructive hover:rotate-90",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                        }
                      )
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative min-h-0 flex-1 overflow-y-auto px-7 py-5 space-y-5 ${readOnly ? "[&_input]:pointer-events-none [&_textarea]:pointer-events-none [&_button]:pointer-events-none [&_select]:pointer-events-none [&_[role=combobox]]:pointer-events-none [&_[role=button]]:pointer-events-none" : ""}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Section,
                    {
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-3.5 w-3.5" }),
                      label: lang === "ru" ? "ФИО гостя" : lang === "uz" ? "Mehmon F.I.O." : "Guest full name",
                      accent: statusCfg.color,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-2.5 md:grid-cols-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("lastName"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ref: lastNameRef, value: lastName, onChange: (e) => setLastName(e.target.value), placeholder: t("lastNamePlaceholder"), className: `h-11 rounded-xl bg-background text-sm font-semibold transition-all duration-500 ${surnameGlow ? "ring-2 ring-primary/70 shadow-[0_0_0_4px_hsl(var(--primary-hsl)/0.18),0_0_24px_hsl(var(--primary-hsl)/0.45)]" : ""}` }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("firstName"), required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: firstName, onChange: (e) => setFirstName(e.target.value), placeholder: t("firstNamePlaceholder"), className: "h-11 rounded-xl bg-background text-sm font-semibold" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("middleName"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: middleName, onChange: (e) => setMiddleName(e.target.value), placeholder: t("middleNamePlaceholder"), className: "h-11 rounded-xl bg-background text-sm font-semibold" }) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-xl border border-border/60 bg-muted/30 p-2 grid grid-cols-2 gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => setResidency("resident"),
                              className: `h-10 rounded-lg text-xs font-black uppercase tracking-wider transition ${residency === "resident" ? "bg-emerald-500 text-white shadow" : "bg-background text-muted-foreground hover:bg-emerald-500/10"}`,
                              children: lang === "ru" ? "Резидент" : "Resident"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => setResidency("nonResident"),
                              className: `h-10 rounded-lg text-xs font-black uppercase tracking-wider transition ${residency === "nonResident" ? "bg-amber-500 text-white shadow" : "bg-background text-muted-foreground hover:bg-amber-500/10"}`,
                              children: lang === "ru" ? "Нерезидент" : "Non-resident"
                            }
                          )
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Section,
                    {
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5" }),
                      label: lang === "ru" ? "Период проживания" : lang === "uz" ? "Yashash davri" : "Stay window",
                      accent: statusCfg.color,
                      right: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-muted-foreground tabular-nums", children: `${checkInTime} → ${checkOutTime}` }),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2.5 md:grid-cols-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            DateField,
                            {
                              label: t("checkIn"),
                              accent: "emerald",
                              value: inDate,
                              min: minCheckIn,
                              onChange: (v) => {
                                setInDate(v);
                                if (v && outDate && parseISO(outDate) <= parseISO(v)) setOutDate(nextDay(v));
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            DateField,
                            {
                              label: t("checkOut"),
                              accent: "rose",
                              value: outDate,
                              min: inDate ? nextDay(inDate) : todayISO,
                              onChange: (v) => {
                                setOutDate(v);
                                if (v && inDate && parseISO(v) <= parseISO(inDate)) setInDate(prevDay(v));
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("guests"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3 text-primary/70" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              type: "number",
                              min: 1,
                              max: effectiveMaxGuests,
                              value: guestCount,
                              onChange: (e) => {
                                const n = Number(e.target.value);
                                if (!Number.isFinite(n)) return;
                                setGuestCount(Math.max(1, Math.min(effectiveMaxGuests, Math.floor(n))));
                              },
                              className: "h-10 rounded-xl bg-background tabular-nums"
                            }
                          ) }),
                          isAdminOnly ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Field,
                            {
                              label: lang === "ru" ? "Итого к оплате" : lang === "uz" ? "To'lov jami" : "Total to pay",
                              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-3 w-3 text-emerald-500" }),
                              children: (() => {
                                if (hasSegments) {
                                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl border border-emerald-200/60 dark:border-emerald-900/50 bg-gradient-to-br from-emerald-50/80 via-background to-emerald-50/40 dark:from-emerald-950/40 dark:via-background dark:to-emerald-950/20 px-3 py-2 flex flex-col gap-1 overflow-hidden", children: [
                                    segmentsList.map((seg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 text-[10px] tabular-nums", children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium uppercase tracking-wider text-emerald-600/80 dark:text-emerald-400/80 truncate", children: [
                                        seg.nights,
                                        " × ",
                                        formatPrice(seg.perNightRate),
                                        " · ",
                                        segmentCategoryLabel(seg.categoryId),
                                        " · #",
                                        seg.roomNumber
                                      ] }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-emerald-700 dark:text-emerald-300", children: formatPrice(seg.price) })
                                    ] }, `seg-${i}`)),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between border-t border-emerald-300/40 pt-1 text-[11px] tabular-nums", children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-300", children: lang === "ru" ? "Итого" : lang === "uz" ? "Jami" : "Total" }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-sm text-emerald-700 dark:text-emerald-300", children: formatPrice(segmentsTotal) })
                                    ] })
                                  ] });
                                }
                                const total = Math.round(nightsDisplay * perNightRate);
                                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-10 rounded-xl border border-emerald-200/60 dark:border-emerald-900/50 bg-gradient-to-br from-emerald-50/80 via-background to-emerald-50/40 dark:from-emerald-950/40 dark:via-background dark:to-emerald-950/20 px-3 flex items-center justify-between overflow-hidden group", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-medium uppercase tracking-wider text-emerald-600/80 dark:text-emerald-400/80 tabular-nums", children: [
                                    guestMultiplier,
                                    " × ",
                                    nightsDisplay,
                                    " × ",
                                    formatPrice(perNightRate / guestMultiplier)
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm text-emerald-700 dark:text-emerald-300 tabular-nums", children: formatPrice(total) })
                                ] });
                              })()
                            }
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: lang === "ru" ? "Цена" : lang === "uz" ? "Narx" : "Price", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-3 w-3 text-emerald-500" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              type: "text",
                              inputMode: "numeric",
                              value: formatInputNumber(price),
                              onChange: (e) => setPrice(parseInputNumber(e.target.value)),
                              placeholder: "0",
                              className: "h-10 rounded-xl bg-background tabular-nums"
                            }
                          ) })
                        ] }),
                        !isAdminOnly && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("status"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: { background: statusCfg.color } }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: status, onValueChange: (v) => setStatus(v), children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10 rounded-xl bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "rounded-xl", children: Object.entries(BOOKING_STATUSES).filter(([key]) => key !== "confirmed").map(([key, cfg]) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: key, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full shadow-sm", style: { background: cfg.color } }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: cfg.label[lang] })
                          ] }) }, key)) })
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-muted/30 p-3 grid grid-cols-1 gap-2.5 md:grid-cols-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            TimingSegment,
                            {
                              label: t("arrivalTiming"),
                              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sunrise, { className: "h-3 w-3 text-emerald-500" }),
                              value: earlyCheckin ? "early" : "standard",
                              onChange: (v) => setEarlyCheckin(v === "early"),
                              options: [
                                { value: "early", label: t("earlyOption"), time: "08:00", accent: "emerald" },
                                { value: "standard", label: t("standardOption"), time: "14:00", accent: "neutral" }
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            TimingSegment,
                            {
                              label: t("departureTiming"),
                              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-3 w-3 text-amber-500" }),
                              value: lateCheckout ? "late" : "standard",
                              onChange: (v) => setLateCheckout(v === "late"),
                              options: [
                                { value: "standard", label: t("standardOption"), time: "12:00", accent: "neutral" },
                                { value: "late", label: t("lateOption"), time: "24:00", accent: "amber" }
                              ]
                            }
                          )
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: paymentSectionRef, className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Section,
                      {
                        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-3.5 w-3.5" }),
                        label: lang === "ru" ? "Данные об оплате" : lang === "uz" ? "To'lov ma'lumotlari" : "Payment details",
                        accent: paymentConfirmed ? "#10B981" : statusCfg.color,
                        right: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${paymentConfirmed ? "bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-500/25" : "bg-primary/10 text-primary ring-1 ring-primary/20"}`, children: paymentConfirmed ? lang === "ru" ? "Подтверждено" : "Confirmed" : lang === "ru" ? "Ожидает" : "Pending" }),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: lang === "ru" ? "Тип оплаты" : "Payment type", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: paymentType, onValueChange: (v) => setPaymentType(v), children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10 rounded-xl bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "rounded-xl", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cash", children: "Наличные" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "card", children: "Карта" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "transfer", children: "Перечисление" })
                            ] })
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: lang === "ru" ? "Внесённая сумма" : "Amount paid now", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              type: "text",
                              inputMode: "numeric",
                              value: paymentType === "transfer" ? "" : formatInputNumber(paymentInput),
                              onChange: (e) => setPaymentInput(parseInputNumber(e.target.value)),
                              placeholder: "0",
                              disabled: isFullyPaid || paymentType === "transfer",
                              className: "h-10 rounded-xl bg-background tabular-nums disabled:opacity-60 disabled:cursor-not-allowed"
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: lang === "ru" ? "Оставшаяся сумма" : "Remaining", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-10 items-center justify-end rounded-xl border border-input bg-muted/40 px-3 text-sm font-bold tabular-nums ${paymentType === "transfer" ? "opacity-60" : ""}`, children: formatPrice(remainingAmount) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Button,
                            {
                              type: "button",
                              size: "sm",
                              disabled: isFullyPaid,
                              onClick: () => {
                                if (effectiveTotal <= 0) {
                                  toast.error(lang === "ru" ? "Укажите общую сумму" : "Set total amount first");
                                  return;
                                }
                                let capped;
                                if (paymentType === "transfer") {
                                  if (remainingAmount <= 0) return;
                                  capped = remainingAmount;
                                } else {
                                  const amt = Number(paymentInput);
                                  if (!Number.isFinite(amt) || amt <= 0) {
                                    toast.error(lang === "ru" ? "Введите сумму" : "Enter amount");
                                    return;
                                  }
                                  capped = Math.min(amt, remainingAmount);
                                }
                                const nextPayments = [...payments, { amount: capped, at: (/* @__PURE__ */ new Date()).toISOString(), method: paymentType }];
                                setPayments(nextPayments);
                                setPaymentInput("");
                                const nextPaid = nextPayments.reduce((s, p) => s + p.amount, 0);
                                const justFullyPaid = nextPaid >= effectiveTotal;
                                if (justFullyPaid) {
                                  setPaymentConfirmed(true);
                                  setReceiptGlow(true);
                                  window.setTimeout(() => setReceiptGlow(false), 5e3);
                                  triggerFullyPaidOverlay();
                                }
                                if (editBooking?.id && onUpdate) {
                                  onUpdate(editBooking.id, {
                                    payments: nextPayments,
                                    paymentType,
                                    paymentAmount: effectiveTotal,
                                    price: effectiveTotal,
                                    ...hasSegments ? { segments: segmentsList } : {},
                                    paymentConfirmed: justFullyPaid,
                                    paymentConfirmedAt: justFullyPaid ? editBooking.paymentConfirmedAt || (/* @__PURE__ */ new Date()).toISOString() : editBooking.paymentConfirmedAt
                                  });
                                  rebaselineSnapshotSoon();
                                }
                              },
                              className: "h-10 w-full gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 text-white shadow-md shadow-emerald-500/25 hover:from-emerald-500 hover:to-emerald-500 md:w-auto disabled:opacity-50",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }),
                                lang === "ru" ? "Оплатить" : lang === "uz" ? "To'lash" : "Pay"
                              ]
                            }
                          ) })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: fullyPaidOverlay && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, scale: 0.98 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 0.98 },
                        transition: { duration: 0.25 },
                        className: "pointer-events-none absolute inset-0 z-30 flex items-center justify-center rounded-2xl bg-emerald-500/95 text-white shadow-2xl shadow-emerald-500/40 ring-2 ring-emerald-300",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 px-6 text-center", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-10 w-10" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-black uppercase tracking-[0.18em]", children: lang === "ru" ? "Полностью оплачено" : lang === "uz" ? "To'liq to'langan" : "Fully paid" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold tabular-nums opacity-90", children: [
                            formatPrice(paidSum),
                            " / ",
                            formatPrice(effectiveTotal)
                          ] })
                        ] })
                      },
                      "fully-paid-overlay"
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "group/section relative rounded-2xl border border-border/60 bg-gradient-to-b from-background to-muted/20 shadow-sm transition-shadow hover:shadow-md overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "flex h-7 w-7 items-center justify-center rounded-lg",
                          style: { background: `${statusCfg.color}1f`, color: statusCfg.color },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase tracking-[0.16em] text-foreground/75", children: t("contactMethods") }),
                      (guestPhone || guestWhatsapp || guestEmail || guestTelegram || guestInstagram) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-primary", children: [guestPhone, guestWhatsapp, guestEmail, guestTelegram, guestInstagram].filter(Boolean).length })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("phone"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 text-primary/70" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: guestPhone, onChange: (e) => setGuestPhone(e.target.value.slice(0, 20)), maxLength: 20, inputMode: "tel", placeholder: "+998 90 123 45 67", "aria-invalid": !isValidPhone(guestPhone), className: `h-9 rounded-xl bg-background ${!isValidPhone(guestPhone) ? "border-destructive/60 focus-visible:ring-destructive/40" : ""}` }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("whatsapp"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3 w-3 text-emerald-500" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: guestWhatsapp, onChange: (e) => setGuestWhatsapp(e.target.value.slice(0, 20)), maxLength: 20, inputMode: "tel", placeholder: "+998 90 123 45 67", "aria-invalid": !isValidPhone(guestWhatsapp), className: `h-9 rounded-xl bg-background ${!isValidPhone(guestWhatsapp) ? "border-destructive/60 focus-visible:ring-destructive/40" : ""}` }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("email"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3 text-primary/70" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", value: guestEmail, onChange: (e) => setGuestEmail(e.target.value.slice(0, 80)), maxLength: 80, placeholder: "email@example.com", "aria-invalid": !isValidEmail(guestEmail), className: `h-9 rounded-xl bg-background ${!isValidEmail(guestEmail) ? "border-destructive/60 focus-visible:ring-destructive/40" : ""}` }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("telegram"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3 w-3 text-sky-500" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: guestTelegram, onChange: (e) => setGuestTelegram(e.target.value.slice(0, 32)), maxLength: 32, placeholder: t("telegramPlaceholder"), "aria-invalid": !isValidHandle(guestTelegram), className: `h-9 rounded-xl bg-background ${!isValidHandle(guestTelegram) ? "border-destructive/60 focus-visible:ring-destructive/40" : ""}` }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("instagram"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-3 w-3 text-pink-500" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: guestInstagram, onChange: (e) => setGuestInstagram(e.target.value.slice(0, 32)), maxLength: 32, placeholder: t("instagramPlaceholder"), "aria-invalid": !isValidHandle(guestInstagram), className: `h-9 rounded-xl bg-background ${!isValidHandle(guestInstagram) ? "border-destructive/60 focus-visible:ring-destructive/40" : ""}` }) })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "group/section relative rounded-2xl border border-border/60 bg-gradient-to-b from-background to-muted/20 shadow-sm transition-shadow hover:shadow-md overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "flex h-7 w-7 items-center justify-center rounded-lg",
                          style: { background: `${statusCfg.color}1f`, color: statusCfg.color },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { className: "h-3.5 w-3.5" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase tracking-[0.16em] text-foreground/75", children: t("notes") }),
                      notes && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-primary", children: notes.length })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        value: notes,
                        onChange: (e) => setNotes(e.target.value),
                        placeholder: t("specialRequests"),
                        rows: 3,
                        className: "rounded-xl resize-none bg-background"
                      }
                    ) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between gap-3 border-t border-border/60 bg-background/70 px-7 py-4 backdrop-blur", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    isEditing && !readOnly && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "outline",
                        size: "sm",
                        onClick: handleDelete,
                        className: "gap-1.5 rounded-xl border-destructive/40 text-destructive hover:bg-destructive hover:text-destructive-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }),
                          t("delete")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "outline",
                        size: "sm",
                        onClick: () => setGuestDetailsOpen(true),
                        className: "guest-details-cta gap-1.5 overflow-hidden rounded-xl border-primary/35 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
                          "Guest Details"
                        ]
                      }
                    ),
                    isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "outline",
                        size: "sm",
                        onClick: () => setAnketaOpen(true),
                        className: "gap-1.5 rounded-xl border-primary/35 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardPenLine, { className: "h-3.5 w-3.5" }),
                          t("openAnketa")
                        ]
                      }
                    ),
                    isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "outline",
                        size: "sm",
                        onClick: () => {
                          setReceiptOpen(true);
                          setReceiptGlow(false);
                        },
                        className: `gap-1.5 rounded-xl border-emerald-500/40 bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500 hover:text-white transition-shadow ${receiptGlow ? "receipt-glow ring-2 ring-emerald-400/70" : ""}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "h-3.5 w-3.5" }),
                          lang === "ru" ? "Квитанция" : lang === "uz" ? "Kvitansiya" : "Receipt"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: requestClose, className: "rounded-xl", children: t("cancel") }),
                    readOnly ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1.5 rounded-xl bg-muted px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-muted-foreground ring-1 ring-border/60", children: "Read-only" }) : isAdminOnly ? (() => {
                      const current = isEditing ? status : "new";
                      let nextStatus = "booked";
                      let label = lang === "ru" ? "Забронировать" : lang === "uz" ? "Band qilish" : "Book";
                      let buttonClass = "bg-gradient-to-r from-primary to-primary/85 text-primary-foreground shadow-md shadow-primary/30 hover:from-primary hover:to-primary hover:shadow-lg hover:shadow-primary/40";
                      let disabled = !firstName.trim() || !inDate || !outDate;
                      let blockedReason = null;
                      if (isEditing) {
                        if (current === "booked" || current === "confirmed" || current === "pending") {
                          nextStatus = "in-house";
                          label = lang === "ru" ? "Заселить" : lang === "uz" ? "Joylashtirish" : "Check In";
                          buttonClass = "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/30 hover:from-emerald-500 hover:to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/40";
                          if (inDate) {
                            const now = /* @__PURE__ */ new Date();
                            const todayStart = startOfDay(now);
                            const ciDate = parseISO(inDate);
                            if (isBefore(todayStart, ciDate)) {
                              disabled = true;
                              blockedReason = lang === "ru" ? "День заезда ещё не наступил" : lang === "uz" ? "Kirish kuni hali kelmadi" : "Check-in day hasn't arrived";
                            } else if (!isBefore(todayStart, ciDate) && !isBefore(ciDate, todayStart)) {
                              const minutes = now.getHours() * 60 + now.getMinutes();
                              if (earlyCheckin) {
                                if (minutes > 12 * 60) {
                                  disabled = true;
                                  blockedReason = lang === "ru" ? "Ранний заезд разрешён только до 12:00" : lang === "uz" ? "Erta kirish faqat 12:00 gacha" : "Early check-in only allowed before 12:00";
                                }
                              } else {
                                if (minutes <= 12 * 60) {
                                  disabled = true;
                                  blockedReason = lang === "ru" ? "Обычный заезд с 12:01 (до 14:00)" : lang === "uz" ? "Oddiy kirish 12:01 dan (14:00 gacha)" : "Regular check-in starts at 12:01";
                                }
                              }
                            }
                          }
                          if (editBooking && isRoomDirty(roomNumber, allBookings.filter((b) => b.id !== editBooking.id))) {
                            disabled = true;
                            blockedReason = lang === "ru" ? "Комната не убрана" : lang === "uz" ? "Xona tozalanmagan" : "Room is not cleaned";
                          }
                        } else if (current === "in-house") {
                          nextStatus = "dirty";
                          label = lang === "ru" ? "Выселить" : lang === "uz" ? "Chiqarish" : "Check Out";
                          buttonClass = "bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-md shadow-gray-500/30 hover:from-gray-500 hover:to-gray-500";
                        } else if (current === "checked-out" || current === "dirty") {
                          nextStatus = "cleaned";
                          label = lang === "ru" ? "Убрано" : lang === "uz" ? "Tozalangan" : "Cleaned";
                          buttonClass = "bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-md shadow-gray-500/30 hover:from-gray-500 hover:to-gray-500";
                        } else if (current === "cleaned") {
                          nextStatus = null;
                          label = lang === "ru" ? "Убрано" : lang === "uz" ? "Tozalangan" : "Cleaned";
                          buttonClass = "bg-gray-300 text-gray-600";
                          disabled = true;
                        }
                      }
                      const handleCycle = () => {
                        let checkoutOverride;
                        if (nextStatus === "dirty" && current === "in-house") {
                          const now = /* @__PURE__ */ new Date();
                          const todayStr = format(startOfDay(now), "yyyy-MM-dd");
                          if (outDate && todayStr < outDate) {
                            const inDateStr = inDate || todayStr;
                            const safeOut = todayStr > inDateStr ? todayStr : format(addDays(parseISO(inDateStr), 1), "yyyy-MM-dd");
                            const minutesNow = now.getHours() * 60 + now.getMinutes();
                            const halfDay = minutesNow > 12 * 60;
                            const hh = String(now.getHours()).padStart(2, "0");
                            const mm = String(now.getMinutes()).padStart(2, "0");
                            setEarlyCheckoutConfirm({ safeOut, nextStatus, halfDay, triggeredAt: `${hh}:${mm}` });
                            return;
                          }
                        }
                        if (nextStatus) setStatus(nextStatus);
                        handleSave(nextStatus ?? void 0, checkoutOverride);
                      };
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          onClick: handleCycle,
                          disabled,
                          title: blockedReason ?? void 0,
                          className: `gap-1.5 rounded-xl px-5 transition disabled:opacity-50 ${buttonClass}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" }),
                            label
                          ]
                        }
                      );
                    })() : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        onClick: () => handleSave(),
                        disabled: !firstName.trim() || !inDate || !outDate,
                        className: "gap-1.5 rounded-xl bg-gradient-to-r from-primary to-primary/85 px-5 shadow-md shadow-primary/30 transition hover:from-primary hover:to-primary hover:shadow-lg hover:shadow-primary/40 disabled:opacity-50",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }),
                          t("save")
                        ]
                      }
                    )
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HotelGuestAnketaModal,
      {
        open: anketaOpen,
        onClose: () => setAnketaOpen(false),
        booking: editBooking ?? null
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HotelReceiptModal,
      {
        open: receiptOpen,
        onClose: () => setReceiptOpen(false),
        booking: editBooking ?? null,
        guestFullName: fullName,
        roomNumber,
        nights: nightsDisplay,
        checkInTime,
        checkOutTime,
        paymentTypeLabel,
        paymentTimingLabel,
        paymentAmount: displayedPaymentAmount,
        categoryLabel,
        payments,
        totalAmount: effectiveTotal
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GuestDetailsWindow, { open: guestDetailsOpen, onClose: () => setGuestDetailsOpen(false), guest: guestDetails }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteBookingModal,
      {
        open: deleteOpen,
        onClose: () => setDeleteOpen(false),
        booking: editBooking ?? null,
        onConfirm: (id) => {
          onDelete?.(id);
          setDeleteOpen(false);
          onClose();
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UnsavedCloseWarning,
      {
        open: warnOpen,
        onCancel: () => setWarnOpen(false),
        onSave: () => {
          setWarnOpen(false);
          handleSave();
        },
        onDiscard: () => {
          setWarnOpen(false);
          initialSnapshotRef.current = latestSnapshotRef.current;
          onClose();
        },
        title: t("unsavedTitle"),
        message: t("unsavedMessage"),
        cancelLabel: t("unsavedKeep"),
        saveLabel: t("unsavedSave"),
        discardLabel: t("unsavedDiscard"),
        saveDisabled: !fullName || !inDate || !outDate
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AlertDialog,
      {
        open: earlyCheckoutConfirm !== null,
        onOpenChange: (o) => {
          if (!o) setEarlyCheckoutConfirm(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContent, { className: "max-w-md overflow-hidden rounded-2xl border border-primary/25 bg-card/95 p-0 shadow-2xl shadow-primary/20 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": true,
              className: "absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col gap-4 p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg shadow-primary/40 ring-1 ring-primary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: "space-y-1.5 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/80", children: lang === "ru" ? "Ранний выезд" : lang === "uz" ? "Erta chiqish" : "Early check-out" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "text-lg font-semibold leading-tight", children: lang === "ru" ? "Оформить ранний выезд гостя?" : lang === "uz" ? "Mehmonni erta chiqarasizmi?" : "Check the guest out early?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-sm leading-relaxed text-muted-foreground", children: lang === "ru" ? "Дата выезда ещё не наступила. Система автоматически укоротит бронирование до сегодняшнего дня." : lang === "uz" ? "Chiqish sanasi hali kelmadi. Tizim bandlovni bugungi kunga qadar avtomatik qisqartiradi." : "The scheduled check-out date hasn't arrived yet. The booking will be shortened to today automatically." })
              ] }) })
            ] }),
            earlyCheckoutConfirm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-background/60 px-3.5 py-2.5 text-xs space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium uppercase tracking-wider text-muted-foreground", children: lang === "ru" ? "Новая дата выезда" : lang === "uz" ? "Yangi chiqish sanasi" : "New check-out" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                  format(parseISO(earlyCheckoutConfirm.safeOut), "dd.MM.yyyy"),
                  " · ",
                  earlyCheckoutConfirm.triggeredAt
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium uppercase tracking-wider text-muted-foreground", children: lang === "ru" ? "Половина ячейки" : lang === "uz" ? "Katak yarmi" : "Cell half" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: earlyCheckoutConfirm.halfDay ? lang === "ru" ? "2-я (после 12:00)" : lang === "uz" ? "2-yarmi (12:00 dan keyin)" : "2nd (after 12:00)" : lang === "ru" ? "1-я (до 12:00)" : lang === "uz" ? "1-yarmi (12:00 gacha)" : "1st (before 12:00)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "mt-1 gap-2 sm:gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "rounded-xl border-border/60 bg-background/70 hover:bg-background", children: lang === "ru" ? "Отмена" : lang === "uz" ? "Bekor qilish" : "Cancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AlertDialogAction,
                {
                  className: "rounded-xl bg-gradient-to-r from-primary to-primary/85 text-primary-foreground shadow-md shadow-primary/30 hover:from-primary hover:to-primary hover:shadow-lg hover:shadow-primary/40",
                  onClick: () => {
                    const pending = earlyCheckoutConfirm;
                    setEarlyCheckoutConfirm(null);
                    if (!pending) return;
                    setOutDate(pending.safeOut);
                    setLateCheckout(pending.halfDay);
                    if (pending.nextStatus) setStatus(pending.nextStatus);
                    handleSave(pending.nextStatus ?? void 0, { checkOut: pending.safeOut, checkOutHalfDay: pending.halfDay });
                  },
                  children: lang === "ru" ? "Выселить" : lang === "uz" ? "Chiqarish" : "Check out"
                }
              )
            ] })
          ] })
        ] }) })
      }
    )
  ] });
}
function safeFormat(iso, pattern) {
  try {
    return format(parseISO(iso), pattern);
  } catch {
    return "";
  }
}
function Section({ icon, label, accent, right, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "group/section relative rounded-2xl border border-border/60 bg-gradient-to-b from-background to-muted/20 p-4 shadow-sm transition-shadow hover:shadow-md",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "flex h-7 w-7 items-center justify-center rounded-lg text-foreground/80",
              style: { background: `${accent}1f`, color: accent },
              children: icon
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black uppercase tracking-[0.16em] text-foreground/75", children: label }),
          right && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: right })
        ] }),
        children
      ]
    }
  );
}
function Field({ label, icon, required, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.08em] text-muted-foreground", children: [
      icon,
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
    ] }),
    children
  ] });
}
function TimingSegment({ label, icon, value, onChange, options }) {
  const accentClasses = {
    emerald: "from-emerald-500 to-emerald-600 shadow-emerald-500/30",
    amber: "from-amber-500 to-amber-600 shadow-amber-500/30",
    neutral: "from-foreground/85 to-foreground/65 shadow-foreground/20"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card p-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-1 pb-1.5", children: [
      icon,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1 rounded-lg bg-muted/40 p-1", children: options.map((opt) => {
      const active = value === opt.value;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => onChange(opt.value),
          className: `relative flex flex-col items-center justify-center gap-0.5 rounded-md px-2 py-1.5 text-[10px] font-black uppercase tracking-wider transition-all duration-200 ${active ? `bg-gradient-to-br ${accentClasses[opt.accent]} text-white shadow-md scale-[1.02]` : "text-muted-foreground hover:bg-background hover:text-foreground"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: opt.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-bold tabular-nums ${active ? "text-white/90" : "text-muted-foreground/70"}`, children: opt.time })
          ]
        },
        opt.value
      );
    }) })
  ] });
}
function DateField({ label, value, min, accent, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    HotelDatePicker,
    {
      label,
      value,
      min,
      onChange,
      required: true,
      className: accent === "emerald" ? "hover:border-emerald-500/45 focus:ring-emerald-500/25" : "hover:border-rose-500/45 focus:ring-rose-500/25"
    }
  );
}
const HALF_COL_WIDTH = 40;
const DAY_WIDTH = HALF_COL_WIDTH * 2;
const ROW_HEIGHT = 44;
const PERSON_ROW_HEIGHT = 38;
const DEFAULT_LABEL_WIDTH = 440;
const INITIAL_PAST_DAYS = 14;
const INITIAL_FUTURE_DAYS = 45;
const LOAD_MORE_DAYS = 30;
const EDGE_THRESHOLD = 600;
const ADMIN_INITIAL_PAST_DAYS = 30;
const ADMIN_LEFT_OFFSET_DAYS = 2;
const PERSON_COUNTS = {
  "standard-double": 2,
  "standard-twin": 2,
  "standard-triple": 3,
  "standard-quadruple": 4,
  "deluxe-twin": 2
};
const DAY_LABELS_RU = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
const DAY_LABELS_UZ = ["Ya", "Du", "Se", "Ch", "Pa", "Ju", "Sh"];
const CATEGORY_STATUS_ORDER = ["pending", "booked", "in-house", "checked-out", "maintenance"];
const CategoryStatusStrip = reactExports.memo(({ counts, lang }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "category-status-strip", children: CATEGORY_STATUS_ORDER.map((status) => {
  const config = BOOKING_STATUSES[status];
  const count = counts[status] ?? 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `category-status-chip${count === 0 ? " is-empty" : ""}`, style: { "--chip-color": config.color }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "category-status-count", children: count }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "category-status-dot" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "category-status-label", children: config.label[lang] })
  ] }, status);
}) }));
CategoryStatusStrip.displayName = "CategoryStatusStrip";
const DayHeaderCell = reactExports.memo(({ date, isToday, isPastDay, isWeekendDay, dayLabel, lang, isFirstOfMonth }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: `day-header-cell relative flex flex-col items-center justify-center select-none ${isToday ? "today-header-glow" : "bg-card"}`,
    style: { width: DAY_WIDTH, minWidth: DAY_WIDTH, height: 78, borderRight: "1px solid hsl(var(--grid-line-strong) / 0.5)", paddingTop: 2, paddingBottom: 12 },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: [
            "z-10 mb-1 inline-flex items-center justify-center rounded-full leading-none tracking-[0.14em] uppercase transition-colors",
            isFirstOfMonth ? "px-1.5 py-[2px] text-[8px] font-black shadow-sm ring-1 " + (isToday ? "bg-white/25 text-white ring-white/40" : "bg-primary/15 text-primary ring-primary/30") : "px-1 py-[1px] text-[7.5px] font-bold " + (isToday ? "text-white/85" : isPastDay ? "text-muted-foreground/45" : "text-primary/55")
          ].join(" "),
          children: format(date, "MMM")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-extrabold uppercase leading-none z-10 tracking-wider ${isToday ? "text-white" : isPastDay ? "text-muted-foreground/50" : isWeekendDay ? "text-destructive" : "text-foreground/70"}`, children: dayLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[16px] font-black leading-tight z-10 mt-0.5 ${isToday ? "text-white" : isPastDay ? "text-muted-foreground/50" : "text-foreground"}`, children: format(date, "d") }),
      isToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] font-black uppercase tracking-wider text-white/90 z-10 mt-0.5", children: lang === "ru" ? "Сегодня" : "Bugun" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `absolute bottom-0.5 left-0 right-0 z-10 flex items-center justify-center gap-2 text-[8px] font-bold leading-none pointer-events-none ${isToday ? "text-white/95" : isPastDay ? "text-muted-foreground/50" : "text-foreground/55"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-[1px]", children: [
              "↑",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums", children: "12" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-[1px]", children: [
              "↓",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums", children: "14" })
            ] })
          ]
        }
      )
    ]
  }
));
DayHeaderCell.displayName = "DayHeaderCell";
const RowBackground = reactExports.memo(({ height, totalWidth, todayOffset, totalDays }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    style: {
      width: totalWidth,
      height,
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      background: "hsl(var(--card))",
      backgroundImage: [
        `repeating-linear-gradient(90deg, hsl(var(--grid-line-strong) / 0.55) 0px, hsl(var(--grid-line-strong) / 0.55) 1px, transparent 1px, transparent ${DAY_WIDTH}px)`,
        `repeating-linear-gradient(90deg, transparent 0px, transparent ${HALF_COL_WIDTH}px, hsl(var(--grid-line) / 0.3) ${HALF_COL_WIDTH}px, hsl(var(--grid-line) / 0.3) ${HALF_COL_WIDTH + 1}px, transparent ${HALF_COL_WIDTH + 1}px, transparent ${DAY_WIDTH}px)`
      ].join(", "),
      backgroundSize: `${DAY_WIDTH}px ${height}px`
    },
    children: todayOffset >= 0 && todayOffset < totalDays && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "today-column-glow",
        style: {
          position: "absolute",
          left: todayOffset * DAY_WIDTH,
          top: 0,
          width: DAY_WIDTH,
          height,
          background: "hsl(var(--primary-hsl) / 0.10)",
          borderLeft: "3px solid hsl(var(--primary-hsl) / 0.55)",
          borderRight: "3px solid hsl(var(--primary-hsl) / 0.55)"
        }
      }
    )
  }
));
RowBackground.displayName = "RowBackground";
const categoryDisplay = (cat, lang) => cat.short || cat.label[lang] || cat.label.en || "";
const RowDragOverlay = reactExports.memo(({ rowKey, registerOverlay }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: (el) => registerOverlay(rowKey, el),
      className: "drag-overlay-animate",
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        border: "1.5px dashed hsl(var(--primary-hsl) / 0.7)",
        borderRadius: 8,
        pointerEvents: "none",
        zIndex: 2,
        display: "none"
      }
    }
  );
});
RowDragOverlay.displayName = "RowDragOverlay";
function bucketBookings(bookings, startDate, totalDays, today) {
  const byRoom = /* @__PURE__ */ new Map();
  const byBed = /* @__PURE__ */ new Map();
  const totalPx = totalDays * DAY_WIDTH;
  for (const booking of bookings) {
    const bIn = parseISO(booking.checkIn);
    const bOut = parseISO(booking.checkOut);
    const startDayOffset = differenceInCalendarDays(bIn, startDate);
    const endDayOffset = differenceInCalendarDays(bOut, startDate);
    const earlyShift = booking.checkInHalfDay ? HALF_COL_WIDTH : 0;
    const startPx = Math.max(0, startDayOffset * DAY_WIDTH + HALF_COL_WIDTH - earlyShift);
    const halfExtra = booking.checkOutHalfDay ? HALF_COL_WIDTH : 0;
    const endPx = Math.min(totalPx, endDayOffset * DAY_WIDTH + HALF_COL_WIDTH + halfExtra);
    const w = endPx - startPx;
    if (w <= 0) continue;
    const isPast = isBefore(bOut, today);
    const item = { booking, leftPx: startPx, widthPx: w, isPast };
    if (booking.bedIndex === void 0) {
      const arr = byRoom.get(booking.roomNumber);
      if (arr) arr.push(item);
      else byRoom.set(booking.roomNumber, [item]);
    } else {
      const k = `${booking.roomNumber}:${booking.bedIndex}`;
      const arr = byBed.get(k);
      if (arr) arr.push(item);
      else byBed.set(k, [item]);
      if (booking.additionalBeds && booking.additionalBeds.length) {
        for (const ab of booking.additionalBeds) {
          const kk = `${booking.roomNumber}:${ab}`;
          const blockerItem = { booking, leftPx: startPx, widthPx: w, isPast, isBlocker: true };
          const ar = byBed.get(kk);
          if (ar) ar.push(blockerItem);
          else byBed.set(kk, [blockerItem]);
        }
      }
    }
  }
  return { byRoom, byBed };
}
function HotelRoomGrid({ bookings, conflictBookings = bookings, onAddBooking, onDeleteBooking, onUpdateBooking, focusBookingId, onFocusConsumed, labelWidth }) {
  const LABEL_WIDTH = labelWidth ?? DEFAULT_LABEL_WIDTH;
  const { t, lang } = useI18n();
  const { categories, rooms, categoryRates, removeCategory, removeRoom, setCategoryRate } = useHotelGrid();
  const { user } = useAuth();
  const { log: logAudit } = useAudit();
  const isAdmin = user?.role === "admin";
  const canManageStructure = !isAdmin;
  const today = reactExports.useMemo(() => startOfDay(/* @__PURE__ */ new Date()), []);
  const [pastDays, setPastDays] = reactExports.useState(isAdmin ? ADMIN_INITIAL_PAST_DAYS : INITIAL_PAST_DAYS);
  const [futureDays, setFutureDays] = reactExports.useState(INITIAL_FUTURE_DAYS);
  const [collapsedCategories, setCollapsedCategories] = reactExports.useState({});
  const [expandedRooms, setExpandedRooms] = reactExports.useState({});
  const [personNames, setPersonNames] = reactExports.useState({});
  const { data: extraPersons, setData: setExtraPersonsShared } = useSharedState("guests", {});
  const setExtraPersons = reactExports.useCallback(
    (updater) => {
      setExtraPersonsShared(updater);
    },
    [setExtraPersonsShared]
  );
  const [deletedPersonSlots, setDeletedPersonSlots] = reactExports.useState({});
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [addCategoryOpen, setAddCategoryOpen] = reactExports.useState(false);
  const [addRoomCategoryId, setAddRoomCategoryId] = reactExports.useState(null);
  const [rateEditCategoryId, setRateEditCategoryId] = reactExports.useState(null);
  const [rateDraft, setRateDraft] = reactExports.useState([]);
  const [rateDraftNon, setRateDraftNon] = reactExports.useState([]);
  const toggleCategory = reactExports.useCallback((catId) => {
    setCollapsedCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  }, []);
  const toggleRoomExpand = reactExports.useCallback((roomNumber) => {
    setExpandedRooms((prev) => ({ ...prev, [roomNumber]: !prev[roomNumber] }));
  }, []);
  const updatePersonName = reactExports.useCallback((roomNumber, personIdx, name) => {
    setPersonNames((prev) => ({ ...prev, [roomNumber]: { ...prev[roomNumber] || {}, [personIdx]: name } }));
  }, []);
  const addExtraPerson = reactExports.useCallback((roomNumber) => {
    setExtraPersons((prev) => ({ ...prev, [roomNumber]: (prev[roomNumber] || 0) + 1 }));
    setExpandedRooms((prev) => ({ ...prev, [roomNumber]: true }));
  }, [setExtraPersons]);
  const removeExtraPerson = reactExports.useCallback((roomNumber, personIdx) => {
    setExtraPersons((prev) => ({ ...prev, [roomNumber]: Math.max(0, (prev[roomNumber] || 0) - 1) }));
    setPersonNames((prev) => {
      const copy = { ...prev[roomNumber] || {} };
      delete copy[personIdx];
      return { ...prev, [roomNumber]: copy };
    });
  }, [setExtraPersons]);
  const confirmDelete = reactExports.useCallback(() => {
    if (!deleteTarget) return;
    if (deleteTarget.type === "category") {
      removeCategory(deleteTarget.id);
      try {
        logAudit({
          actor: {
            username: user?.username ?? "admin",
            role: user?.role ?? "admin",
            adminId: null
          },
          category: "system",
          action: "category.deleted",
          summary: lang === "ru" ? `Категория удалена: ${deleteTarget.label}` : `Category deleted: ${deleteTarget.label}`,
          details: { categoryId: deleteTarget.id, categoryLabel: deleteTarget.label }
        });
      } catch {
      }
      toast.success(lang === "ru" ? `Категория удалена: ${deleteTarget.label}` : `Category deleted: ${deleteTarget.label}`);
    } else if (deleteTarget.type === "room") {
      removeRoom(deleteTarget.roomNumber);
      toast.success(lang === "ru" ? `Номер ${deleteTarget.roomNumber} удалён` : `Room ${deleteTarget.roomNumber} deleted`);
    } else if (deleteTarget.isExtra) {
      removeExtraPerson(deleteTarget.roomNumber, deleteTarget.personIdx);
      toast.success(lang === "ru" ? "Гость удалён" : "Guest deleted");
    } else {
      setDeletedPersonSlots((prev) => {
        const next = new Set(prev[deleteTarget.roomNumber] ?? []);
        next.add(deleteTarget.personIdx);
        return { ...prev, [deleteTarget.roomNumber]: next };
      });
      setPersonNames((prev) => {
        const copy = { ...prev[deleteTarget.roomNumber] || {} };
        delete copy[deleteTarget.personIdx];
        return { ...prev, [deleteTarget.roomNumber]: copy };
      });
      toast.success(lang === "ru" ? "Гость удалён" : "Guest deleted");
    }
    setDeleteTarget(null);
  }, [deleteTarget, bookings, rooms, onDeleteBooking, logAudit, user, lang, removeCategory, removeRoom, removeExtraPerson]);
  reactExports.useCallback((categoryId) => {
    setRateEditCategoryId(categoryId);
    const cur = categoryRates[categoryId];
    const cat = categories.find((c) => c.id === categoryId);
    const slots = Math.max(1, cat?.maxGuests ?? 1);
    const toDraft = (arr) => Array.from({ length: slots }, (_, i) => {
      const v = arr?.[i];
      return v && v > 0 ? String(v) : "";
    });
    setRateDraft(toDraft(cur?.resident));
    setRateDraftNon(toDraft(cur?.nonResident));
  }, [categoryRates, categories]);
  const saveRate = reactExports.useCallback(() => {
    if (!rateEditCategoryId) return;
    const cat = categories.find((c) => c.id === rateEditCategoryId);
    const slots = Math.max(1, cat?.maxGuests ?? 1);
    const toArr = (drafts) => Array.from({ length: slots }, (_, i) => {
      const n = Number(String(drafts[i] ?? "").replace(/[^0-9.]/g, ""));
      return Number.isFinite(n) ? Math.max(0, n) : 0;
    });
    setCategoryRate(rateEditCategoryId, { resident: toArr(rateDraft), nonResident: toArr(rateDraftNon) });
    toast.success(lang === "ru" ? `Цена сохранена` : `Price saved`);
    setRateEditCategoryId(null);
    setRateDraft([]);
    setRateDraftNon([]);
  }, [lang, rateEditCategoryId, rateDraft, rateDraftNon, setCategoryRate, categories]);
  const startDate = reactExports.useMemo(() => subDays(today, pastDays), [today, pastDays]);
  const totalDays = pastDays + futureDays;
  const dates = reactExports.useMemo(() => Array.from({ length: totalDays }, (_, i) => addDays(startDate, i)), [startDate, totalDays]);
  const todayIdx = pastDays;
  const totalWidth = totalDays * DAY_WIDTH;
  const scrollRef = reactExports.useRef(null);
  const didInitialScroll = reactExports.useRef(false);
  const scrollRafRef = reactExports.useRef(null);
  const lastScrollLeftRef = reactExports.useRef(null);
  const isPrependingPastRef = reactExports.useRef(false);
  const pendingPastPrependDaysRef = reactExports.useRef(0);
  const buckets = reactExports.useMemo(
    () => bucketBookings(bookings, startDate, totalDays, today),
    [bookings, startDate, totalDays, today]
  );
  reactExports.useMemo(() => {
    const result = /* @__PURE__ */ new Map();
    const totalHalves = totalDays * 2;
    if (totalHalves <= 0) return result;
    const sd = dates[0];
    if (!sd) return result;
    const halfSpan = (b) => {
      const startDay = differenceInCalendarDays(parseISO(b.checkIn), sd);
      const endDay = differenceInCalendarDays(parseISO(b.checkOut), sd);
      const startHalf = 2 * startDay + 1 - (b.checkInHalfDay ? 1 : 0);
      const endHalf = 2 * endDay + 1 + (b.checkOutHalfDay ? 1 : 0);
      return [startHalf, endHalf];
    };
    for (const room of rooms) {
      const cat = categories.find((c) => c.id === room.category);
      const personCount = PERSON_COUNTS[room.category] ?? cat?.maxGuests ?? 0;
      const totalBeds = personCount + (extraPersons[room.number] || 0);
      if (totalBeds < 1) continue;
      const occBeds = Array.from({ length: totalHalves }, () => /* @__PURE__ */ new Set());
      const occBks = Array.from({ length: totalHalves }, () => /* @__PURE__ */ new Set());
      for (const b of bookings) {
        if (b.roomNumber !== room.number) continue;
        const span = halfSpan(b);
        if (!span) continue;
        const beds = b.status === "maintenance" || b.bedIndex === void 0 ? Array.from({ length: totalBeds }, (_, i) => i) : [b.bedIndex, ...b.additionalBeds ?? []];
        const s = Math.max(0, span[0]);
        const e = Math.min(totalHalves, span[1]);
        for (let i = s; i < e; i++) {
          for (const bed of beds) occBeds[i].add(bed);
          occBks[i].add(b.id);
        }
      }
      const ranges = [];
      let cur = null;
      for (let i = 0; i < totalHalves; i++) {
        if (occBeds[i].size >= totalBeds) {
          if (!cur) cur = { startHalf: i, endHalf: i + 1, ids: /* @__PURE__ */ new Set() };
          else cur.endHalf = i + 1;
          for (const id of occBks[i]) cur.ids.add(id);
        } else if (cur) {
          ranges.push({ startHalf: cur.startHalf, endHalf: cur.endHalf, bookingIds: [...cur.ids] });
          cur = null;
        }
      }
      if (cur) ranges.push({ startHalf: cur.startHalf, endHalf: cur.endHalf, bookingIds: [...cur.ids] });
      if (ranges.length) result.set(room.number, ranges);
    }
    return result;
  }, [bookings, rooms, categories, extraPersons, totalDays, dates]);
  const [openFullKey, setOpenFullKey] = reactExports.useState(null);
  const activeGlowNodesRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const activeFocusDoneRef = reactExports.useRef(null);
  const clearAllGlows = reactExports.useCallback(() => {
    activeGlowNodesRef.current.forEach((node) => {
      node.classList.remove("booking-focus-glow");
      const prev = node._focusTimer;
      if (prev) window.clearTimeout(prev);
      node._focusTimer = void 0;
    });
    activeGlowNodesRef.current.clear();
    const finishFocus = activeFocusDoneRef.current;
    activeFocusDoneRef.current = null;
    finishFocus?.();
  }, []);
  const registerGlow = reactExports.useCallback((node, durationMs, onDone) => {
    node.classList.remove("booking-focus-glow");
    node.offsetWidth;
    node.classList.add("booking-focus-glow");
    activeGlowNodesRef.current.add(node);
    if (onDone) activeFocusDoneRef.current = onDone;
    const prev = node._focusTimer;
    if (prev) window.clearTimeout(prev);
    node._focusTimer = window.setTimeout(() => {
      node.classList.remove("booking-focus-glow");
      activeGlowNodesRef.current.delete(node);
      if (onDone && activeFocusDoneRef.current === onDone) {
        activeFocusDoneRef.current = null;
      }
      onDone?.();
    }, durationMs);
  }, []);
  reactExports.useEffect(() => {
    const cancel = () => {
      if (activeGlowNodesRef.current.size > 0) clearAllGlows();
    };
    const stopExplicit = () => clearAllGlows();
    window.addEventListener("mousedown", cancel, true);
    window.addEventListener("touchstart", cancel, true);
    window.addEventListener("hotel:stop-focus-glow", stopExplicit);
    return () => {
      window.removeEventListener("mousedown", cancel, true);
      window.removeEventListener("touchstart", cancel, true);
      window.removeEventListener("hotel:stop-focus-glow", stopExplicit);
    };
  }, [clearAllGlows]);
  reactExports.useCallback((ids) => {
    const root = scrollRef.current;
    if (!root) return;
    for (const id of ids) {
      const nodes = root.querySelectorAll(`[data-booking-id="${CSS.escape(id)}"]`);
      nodes.forEach((node) => registerGlow(node, 3500));
    }
  }, [registerGlow]);
  const categoryStatusCounts = reactExports.useMemo(() => {
    const roomCat = /* @__PURE__ */ new Map();
    for (const r of rooms) roomCat.set(r.number, r.category);
    const out = {};
    for (const c of categories) {
      out[c.id] = { confirmed: 0, pending: 0, booked: 0, "in-house": 0, "checked-out": 0, maintenance: 0, dirty: 0, cleaned: 0 };
    }
    for (const b of bookings) {
      const cat = roomCat.get(b.roomNumber);
      if (cat && out[cat]) out[cat][b.status] = (out[cat][b.status] ?? 0) + 1;
    }
    return out;
  }, [bookings, rooms, categories]);
  const isPanningRef = reactExports.useRef(false);
  const isAppendingRef = reactExports.useRef(false);
  const handleHeaderMouseDown = reactExports.useCallback((e) => {
    const el = scrollRef.current;
    if (!el) return;
    if (e.button !== 0) return;
    e.preventDefault();
    const startX = e.clientX;
    const startScroll = el.scrollLeft;
    let raf = null;
    let pendingX = startX;
    let hasDragged = false;
    const apply = () => {
      raf = null;
      const delta = pendingX - startX;
      if (!hasDragged && Math.abs(delta) < 4) return;
      if (!hasDragged) {
        hasDragged = true;
        el.classList.add("is-panning");
        isPanningRef.current = true;
      }
      const max = el.scrollWidth - el.clientWidth;
      const next = startScroll - delta;
      if (next >= max - EDGE_THRESHOLD && !isAppendingRef.current) {
        isAppendingRef.current = true;
        setFutureDays((prev) => prev + LOAD_MORE_DAYS);
      }
      const clamped = Math.max(0, Math.min(max, next));
      el.scrollLeft = clamped;
      lastScrollLeftRef.current = clamped;
    };
    const move = (ev) => {
      pendingX = ev.clientX;
      if (raf == null) raf = requestAnimationFrame(apply);
    };
    const up = () => {
      if (raf != null) cancelAnimationFrame(raf);
      el.classList.remove("is-panning");
      isPanningRef.current = false;
      lastScrollLeftRef.current = el.scrollLeft;
      if (el.scrollLeft <= EDGE_THRESHOLD && !isPrependingPastRef.current) {
        isPrependingPastRef.current = true;
        pendingPastPrependDaysRef.current += LOAD_MORE_DAYS;
        setPastDays((prev) => prev + LOAD_MORE_DAYS);
      }
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseup", up);
  }, []);
  const computeTodayScroll = reactExports.useCallback((el) => {
    const visibleWidth = Math.max(0, el.clientWidth - LABEL_WIDTH);
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    const target = isAdmin ? todayIdx * DAY_WIDTH - ADMIN_LEFT_OFFSET_DAYS * DAY_WIDTH : todayIdx * DAY_WIDTH - visibleWidth / 2 + DAY_WIDTH / 2;
    return Math.max(0, Math.min(max, target));
  }, [todayIdx, LABEL_WIDTH, isAdmin]);
  const scrollToToday = reactExports.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const next = computeTodayScroll(el);
    lastScrollLeftRef.current = next;
    el.scrollTo({ left: next, behavior: "smooth" });
  }, [computeTodayScroll]);
  reactExports.useEffect(() => {
    if (didInitialScroll.current) return;
    const el = scrollRef.current;
    if (el) {
      const initialLeft = computeTodayScroll(el);
      el.scrollLeft = initialLeft;
      lastScrollLeftRef.current = initialLeft;
      didInitialScroll.current = true;
    }
  }, [computeTodayScroll]);
  reactExports.useEffect(() => {
    isAppendingRef.current = false;
  }, [futureDays]);
  reactExports.useEffect(() => {
    const addedDays = pendingPastPrependDaysRef.current;
    if (addedDays <= 0) return;
    pendingPastPrependDaysRef.current = 0;
    isPrependingPastRef.current = false;
    const el = scrollRef.current;
    if (!el) return;
    const next = el.scrollLeft + addedDays * DAY_WIDTH;
    el.scrollLeft = next;
    lastScrollLeftRef.current = next;
  }, [pastDays]);
  reactExports.useEffect(() => {
    if (!focusBookingId) return;
    const targetBooking = bookings.find((b) => b.id === focusBookingId);
    if (!targetBooking) return;
    const room = rooms.find((r) => r.number === targetBooking.roomNumber);
    if (room && collapsedCategories[room.category]) {
      setCollapsedCategories((prev) => ({ ...prev, [room.category]: false }));
    }
    if (targetBooking.bedIndex !== void 0 && !expandedRooms[targetBooking.roomNumber]) {
      setExpandedRooms((prev) => ({ ...prev, [targetBooking.roomNumber]: true }));
    }
    const diff = differenceInCalendarDays(today, parseISO(targetBooking.checkIn));
    if (diff > pastDays - 3) {
      setPastDays((prev) => Math.max(prev, diff + LOAD_MORE_DAYS));
      return;
    }
    let raf2 = 0;
    const raf = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const el = scrollRef.current;
        if (!el) return;
        const node = el.querySelector(`[data-booking-id="${CSS.escape(focusBookingId)}"]`);
        if (!node) return;
        const elRect = el.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();
        const visibleWidth = Math.max(1, el.clientWidth - LABEL_WIDTH);
        const EDGE_PAD_X = 32;
        const maxScrollLeft = Math.max(0, el.scrollWidth - el.clientWidth);
        const nodeLeftInContent = nodeRect.left - elRect.left + el.scrollLeft;
        const nodeWidth = nodeRect.width;
        let targetLeft;
        if (nodeWidth + EDGE_PAD_X * 2 >= visibleWidth) {
          targetLeft = nodeLeftInContent - LABEL_WIDTH - EDGE_PAD_X;
        } else {
          targetLeft = nodeLeftInContent - LABEL_WIDTH - (visibleWidth - nodeWidth) / 2;
        }
        targetLeft = Math.max(0, Math.min(maxScrollLeft, targetLeft));
        const HEADER_H = 44;
        const BOTTOM_BAR_H = 24;
        const EDGE_PAD_Y = 12;
        const usableTop = HEADER_H + EDGE_PAD_Y;
        const usableBottom = el.clientHeight - BOTTOM_BAR_H - EDGE_PAD_Y;
        const usableH = Math.max(1, usableBottom - usableTop);
        const nodeTopInScroller = nodeRect.top - elRect.top;
        const nodeH = nodeRect.height;
        let verticalDelta;
        if (nodeH >= usableH) {
          verticalDelta = nodeTopInScroller - usableTop;
        } else {
          verticalDelta = nodeTopInScroller - (usableTop + (usableH - nodeH) / 2);
        }
        const maxScrollTop = Math.max(0, el.scrollHeight - el.clientHeight);
        const targetTop = Math.max(0, Math.min(maxScrollTop, el.scrollTop + verticalDelta));
        el.scrollTo({ left: targetLeft, top: targetTop, behavior: "smooth" });
        registerGlow(node, 3500, () => onFocusConsumed?.());
      });
    });
    return () => {
      cancelAnimationFrame(raf);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [focusBookingId, bookings, rooms, pastDays, today, collapsedCategories, expandedRooms, onFocusConsumed, LABEL_WIDTH, registerGlow]);
  const handleScroll = reactExports.useCallback(() => {
    if (scrollRafRef.current != null) return;
    scrollRafRef.current = requestAnimationFrame(() => {
      scrollRafRef.current = null;
      const el = scrollRef.current;
      if (!el) return;
      lastScrollLeftRef.current = el.scrollLeft;
      if (isPanningRef.current) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - EDGE_THRESHOLD) {
        setFutureDays((prev) => prev + LOAD_MORE_DAYS);
      }
      if (el.scrollLeft <= EDGE_THRESHOLD && !isPrependingPastRef.current) {
        isPrependingPastRef.current = true;
        pendingPastPrependDaysRef.current += LOAD_MORE_DAYS;
        setPastDays((prev) => prev + LOAD_MORE_DAYS);
      }
    });
  }, []);
  const handleTimelineScrollbarDragState = reactExports.useCallback((active) => {
    const el = scrollRef.current;
    isPanningRef.current = active;
    if (el) {
      el.classList.toggle("is-panning", active);
      if (!active) lastScrollLeftRef.current = el.scrollLeft;
    }
  }, []);
  const handleTimelineScrollbarEdgeRequest = reactExports.useCallback((direction) => {
    const el = scrollRef.current;
    if (!el) return;
    if (direction === "future") {
      if (isAppendingRef.current) return;
      isAppendingRef.current = true;
      setFutureDays((prev) => prev + LOAD_MORE_DAYS);
      return;
    }
    if (isPrependingPastRef.current) return;
    isPrependingPastRef.current = true;
    pendingPastPrependDaysRef.current += LOAD_MORE_DAYS;
    setPastDays((prev) => prev + LOAD_MORE_DAYS);
  }, []);
  const preventNativeMiddleScroll = reactExports.useCallback((e) => {
    if (e.button === 1) {
      e.preventDefault();
    }
  }, []);
  const dragRef = reactExports.useRef(null);
  const overlayElsRef = reactExports.useRef(/* @__PURE__ */ new Map());
  const isDraggingRef = reactExports.useRef(false);
  const dragRafRef = reactExports.useRef(null);
  const registerOverlay = reactExports.useCallback((key, el) => {
    if (el) overlayElsRef.current.set(key, el);
    else overlayElsRef.current.delete(key);
  }, []);
  const bookingHalfSpan = reactExports.useCallback((b) => {
    const sd = datesRef.current[0];
    if (!sd) return null;
    const startDay = differenceInCalendarDays(parseISO(b.checkIn), sd);
    const endDay = differenceInCalendarDays(parseISO(b.checkOut), sd);
    const startHalf = 2 * startDay + 1 - (b.checkInHalfDay ? 1 : 0);
    const endHalf = 2 * endDay + 1 + (b.checkOutHalfDay ? 1 : 0);
    return [startHalf, endHalf];
  }, []);
  const rowsConflict = reactExports.useCallback((a, b) => {
    if (a.roomNumber !== b.roomNumber) return false;
    const aRoomWide = a.status === "maintenance" || a.bedIndex === void 0;
    const bRoomWide = b.status === "maintenance" || b.bedIndex === void 0;
    if (aRoomWide || bRoomWide) return true;
    const aBeds = /* @__PURE__ */ new Set([a.bedIndex, ...a.additionalBeds ?? []]);
    const bBeds = /* @__PURE__ */ new Set([b.bedIndex, ...b.additionalBeds ?? []]);
    for (const x of aBeds) if (bBeds.has(x)) return true;
    return false;
  }, []);
  const hasBookingConflict = reactExports.useCallback((candidate, startHalf, endHalf, excludeId) => {
    return conflictBookingsRef.current.some((b) => {
      if (b.id === excludeId || !rowsConflict(candidate, b)) return false;
      const span = bookingHalfSpan(b);
      return !!span && span[0] < endHalf && span[1] > startHalf;
    });
  }, [bookingHalfSpan, rowsConflict]);
  const showOverlapError = reactExports.useCallback(() => {
    toast.error(t("overlapError"));
  }, [t]);
  const computeDragOverlap = reactExports.useCallback(() => {
    const d = dragRef.current;
    if (!d) return false;
    const startHalf = Math.min(d.startHalf, d.endHalf);
    const endHalfRaw = Math.max(d.startHalf, d.endHalf);
    const startDayIdx = Math.floor(startHalf / 2);
    let endDayIdx = Math.floor(endHalfRaw / 2);
    if (endDayIdx <= startDayIdx) endDayIdx = startDayIdx + 1;
    const newStartHalf = 2 * startDayIdx + 1;
    const newEndHalf = 2 * endDayIdx + 1;
    return hasBookingConflict({ roomNumber: d.roomNumber, bedIndex: d.bedIndex, status: "confirmed" }, newStartHalf, newEndHalf);
  }, [hasBookingConflict]);
  const paintOverlay = reactExports.useCallback(() => {
    const d = dragRef.current;
    if (!d) return;
    const el = overlayElsRef.current.get(d.roomKey);
    if (!el) return;
    const minH = Math.min(d.startHalf, d.endHalf);
    const maxH = Math.max(d.startHalf, d.endHalf);
    const left = minH * HALF_COL_WIDTH;
    const width = (maxH - minH + 1) * HALF_COL_WIDTH;
    el.style.display = "block";
    el.style.transform = `translate3d(${left}px, 0, 0)`;
    el.style.width = `${width}px`;
    el.style.height = `${d.height}px`;
    el.dataset.invalid = d.invalid ? "true" : "false";
  }, []);
  const hideAllOverlays = reactExports.useCallback(() => {
    const d = dragRef.current;
    if (d) {
      const el = overlayElsRef.current.get(d.roomKey);
      if (el) {
        el.style.display = "none";
        el.dataset.invalid = "false";
      }
    }
  }, []);
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [selectedRoom, setSelectedRoom] = reactExports.useState(101);
  const [selectedBedIndex, setSelectedBedIndex] = reactExports.useState(void 0);
  const [selectedPrefillName, setSelectedPrefillName] = reactExports.useState("");
  const [selectedCheckIn, setSelectedCheckIn] = reactExports.useState(format(today, "yyyy-MM-dd"));
  const [selectedCheckOut, setSelectedCheckOut] = reactExports.useState(format(addDays(today, 2), "yyyy-MM-dd"));
  const [selectedEarlyCheckin, setSelectedEarlyCheckin] = reactExports.useState(false);
  const [selectedLateCheckout, setSelectedLateCheckout] = reactExports.useState(false);
  const [editBooking, setEditBooking] = reactExports.useState(null);
  const [changeRoomMode, setChangeRoomMode] = reactExports.useState(null);
  const [changeHover, setChangeHover] = reactExports.useState(null);
  const prevCollapsedRef = reactExports.useRef(null);
  const changeRoomModeRef = reactExports.useRef(null);
  changeRoomModeRef.current = changeRoomMode;
  const datesRef = reactExports.useRef(dates);
  datesRef.current = dates;
  const totalDaysRef = reactExports.useRef(totalDays);
  totalDaysRef.current = totalDays;
  const personNamesRef = reactExports.useRef(personNames);
  personNamesRef.current = personNames;
  const bookingsRef = reactExports.useRef(bookings);
  bookingsRef.current = bookings;
  const conflictBookingsRef = reactExports.useRef(conflictBookings);
  conflictBookingsRef.current = conflictBookings;
  const dragTooltipRef = reactExports.useRef(null);
  const ensureDragTooltip = reactExports.useCallback(() => {
    if (dragTooltipRef.current) return dragTooltipRef.current;
    const el = document.createElement("div");
    el.className = "drag-days-tooltip";
    el.style.cssText = "position:fixed;top:0;left:0;pointer-events:none;z-index:9999;padding:4px 10px;border-radius:9999px;background:hsl(222 47% 11% / 0.92);color:#fff;font-size:11px;font-weight:700;letter-spacing:0.02em;box-shadow:0 4px 14px rgba(0,0,0,.25);transform:translate3d(0,0,0);transition:opacity .12s ease;opacity:0;white-space:nowrap;";
    document.body.appendChild(el);
    dragTooltipRef.current = el;
    return el;
  }, []);
  const hideDragTooltip = reactExports.useCallback(() => {
    const el = dragTooltipRef.current;
    if (el) el.style.opacity = "0";
  }, []);
  const paintDragTooltip = reactExports.useCallback((clientX, clientY) => {
    const d = dragRef.current;
    if (!d) return;
    const el = ensureDragTooltip();
    const minH = Math.min(d.startHalf, d.endHalf);
    const maxH = Math.max(d.startHalf, d.endHalf);
    const days = (maxH - minH + 1) / 2;
    const label = days === 1 ? lang === "ru" ? "1 ночь" : lang === "uz" ? "1 tun" : "1 night" : lang === "ru" ? `${days} ноч.` : lang === "uz" ? `${days} tun` : `${days} nights`;
    el.textContent = label;
    el.style.transform = `translate3d(${clientX + 14}px, ${clientY - 28}px, 0)`;
    el.style.opacity = "1";
    if (d.invalid) {
      el.style.background = "hsl(0 72% 45% / 0.95)";
    } else {
      el.style.background = "hsl(222 47% 11% / 0.92)";
    }
  }, [ensureDragTooltip, lang]);
  reactExports.useEffect(() => {
    return () => {
      if (dragTooltipRef.current) {
        dragTooltipRef.current.remove();
        dragTooltipRef.current = null;
      }
    };
  }, []);
  const handleCellMouseDown = reactExports.useCallback((roomNumber, bedIndex, height, e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    if (changeRoomModeRef.current) {
      e.stopPropagation();
      hideAllOverlays();
      hideDragTooltip();
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const halfIdx = Math.floor(x / HALF_COL_WIDTH);
    const roomKey = bedIndex === void 0 ? `${roomNumber}` : `${roomNumber}:${bedIndex}`;
    isDraggingRef.current = true;
    dragRef.current = { roomKey, roomNumber, bedIndex, height, startHalf: halfIdx, endHalf: halfIdx, invalid: false };
    paintOverlay();
    paintDragTooltip(e.clientX, e.clientY);
  }, [paintOverlay, paintDragTooltip, hideAllOverlays, hideDragTooltip]);
  reactExports.useEffect(() => {
    const onMove = (e) => {
      if (!isDraggingRef.current || !dragRef.current) return;
      if ((e.buttons & 1) === 0) {
        isDraggingRef.current = false;
        dragRef.current = null;
        hideAllOverlays();
        hideDragTooltip();
        return;
      }
      const el = overlayElsRef.current.get(dragRef.current.roomKey);
      if (!el || !el.parentElement) return;
      const rect = el.parentElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const halfIdx = Math.max(0, Math.min(Math.floor(x / HALF_COL_WIDTH), totalDaysRef.current * 2 - 1));
      if (dragRef.current.endHalf === halfIdx) {
        paintDragTooltip(e.clientX, e.clientY);
        return;
      }
      dragRef.current.endHalf = halfIdx;
      dragRef.current.invalid = computeDragOverlap();
      if (dragRafRef.current == null) {
        dragRafRef.current = requestAnimationFrame(() => {
          dragRafRef.current = null;
          paintOverlay();
        });
      }
      paintDragTooltip(e.clientX, e.clientY);
    };
    const onUp = () => {
      if (!isDraggingRef.current || !dragRef.current) {
        isDraggingRef.current = false;
        hideDragTooltip();
        return;
      }
      const d = dragRef.current;
      isDraggingRef.current = false;
      hideAllOverlays();
      hideDragTooltip();
      const startHalf = Math.min(d.startHalf, d.endHalf);
      const endHalf = Math.max(d.startHalf, d.endHalf);
      const startDayIdx = Math.floor(startHalf / 2);
      let endDayIdx = Math.floor(endHalf / 2);
      if (endDayIdx <= startDayIdx) endDayIdx = startDayIdx + 1;
      const dts = datesRef.current;
      const checkInDate = dts[startDayIdx];
      const checkOutDate = dts[endDayIdx] ?? addDays(dts[startDayIdx], 1);
      dragRef.current = null;
      if (isBefore(checkInDate, today)) {
        toast.error(t("pastBookingError"));
        return;
      }
      const newStartHalf = 2 * startDayIdx + 1;
      const newEndHalf = 2 * endDayIdx + 1;
      const overlaps = hasBookingConflict({ roomNumber: d.roomNumber, bedIndex: d.bedIndex, status: "confirmed" }, newStartHalf, newEndHalf);
      if (overlaps) {
        showOverlapError();
        return;
      }
      setSelectedRoom(d.roomNumber);
      setSelectedBedIndex(d.bedIndex);
      setSelectedPrefillName(
        d.bedIndex !== void 0 ? personNamesRef.current[d.roomNumber]?.[d.bedIndex] || "" : ""
      );
      setSelectedCheckIn(format(checkInDate, "yyyy-MM-dd"));
      setSelectedCheckOut(format(checkOutDate, "yyyy-MM-dd"));
      setSelectedEarlyCheckin(false);
      setSelectedLateCheckout(false);
      setEditBooking(null);
      setDialogOpen(true);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      if (dragRafRef.current != null) cancelAnimationFrame(dragRafRef.current);
      dragRafRef.current = null;
    };
  }, [today, t, paintOverlay, hideAllOverlays, computeDragOverlap, hasBookingConflict, showOverlapError, lang, paintDragTooltip, hideDragTooltip]);
  const [moveGhost, setMoveGhost] = reactExports.useState(null);
  const [moveConfirm, setMoveConfirm] = reactExports.useState(null);
  const moveGhostRef = reactExports.useRef(null);
  moveGhostRef.current = moveGhost;
  const moveActive = moveGhost != null;
  const handleBookingMoveStart = reactExports.useCallback((booking, e) => {
    if (isBefore(parseISO(booking.checkOut), today)) return;
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const ghost = {
      booking,
      width: rect.width,
      height: rect.height,
      x: e.clientX,
      y: e.clientY,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      targetRoom: null,
      targetBed: void 0,
      targetCheckIn: null,
      targetCheckOut: null,
      invalid: false,
      snapLeft: null,
      snapTop: null,
      snapWidth: null,
      snapHeight: null
    };
    setMoveGhost(ghost);
  }, [today]);
  const ghostElRef = reactExports.useRef(null);
  const ghostInvalidRef = reactExports.useRef(false);
  const ghostLabelRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!moveActive) return;
    const original = moveGhostRef.current?.booking;
    if (!original) return;
    const nights = Math.max(1, differenceInCalendarDays(parseISO(original.checkOut), parseISO(original.checkIn)));
    let lastX = moveGhostRef.current?.x ?? 0;
    let lastY = moveGhostRef.current?.y ?? 0;
    let lastAppliedKey = "";
    let dirty = true;
    const applyGhostTransform = (left, top, width, height, invalid) => {
      const el = ghostElRef.current;
      if (!el) return;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.transform = `translate3d(${left}px, ${top}px, 0) scale(1.04) rotate(-0.6deg)`;
      if (invalid !== ghostInvalidRef.current) {
        ghostInvalidRef.current = invalid;
        el.dataset.invalid = invalid ? "1" : "0";
      }
    };
    const computeAndApply = () => {
      const ghost = moveGhostRef.current;
      if (!ghost) return;
      const EDGE = 120;
      const MAX_SPEED = 60;
      const ramp = (dist) => {
        const f = Math.min(1, Math.max(0, dist) / EDGE);
        return Math.ceil(f * (2 - f) * MAX_SPEED);
      };
      const scrollEl = scrollRef.current;
      if (scrollEl) {
        const r = scrollEl.getBoundingClientRect();
        let dx = 0;
        if (lastX < r.left + EDGE) dx = -ramp(r.left + EDGE - lastX);
        else if (lastX > r.right - EDGE) dx = ramp(lastX - (r.right - EDGE));
        if (dx) {
          scrollEl.scrollLeft += dx;
          dirty = true;
        }
        if (scrollEl.scrollHeight > scrollEl.clientHeight) {
          let dy = 0;
          if (lastY < r.top + EDGE) dy = -ramp(r.top + EDGE - lastY);
          else if (lastY > r.bottom - EDGE) dy = ramp(lastY - (r.bottom - EDGE));
          if (dy) {
            scrollEl.scrollTop += dy;
            dirty = true;
          }
        }
      }
      const vh = window.innerHeight;
      let wy = 0;
      if (lastY < EDGE) wy = -ramp(EDGE - lastY);
      else if (lastY > vh - EDGE) wy = ramp(lastY - (vh - EDGE));
      if (wy) {
        const before = window.scrollY;
        window.scrollBy(0, wy);
        if (window.scrollY !== before) dirty = true;
      }
      if (!dirty) return;
      dirty = false;
      const el = document.elementFromPoint(lastX, lastY);
      let row = null;
      let cur = el;
      while (cur) {
        if (cur.dataset && cur.dataset.gridRow === "true") {
          row = cur;
          break;
        }
        cur = cur.parentElement;
      }
      let targetRoom = null;
      let targetBed = void 0;
      let targetCheckIn = null;
      let targetCheckOut = null;
      let invalid = false;
      let snapLeft = null;
      let snapTop = null;
      let snapWidth = null;
      let snapHeight = null;
      if (row) {
        const rRoom = Number(row.dataset.roomNumber);
        const bedRaw = row.dataset.bedIndex ?? "";
        const rBed = bedRaw === "" ? void 0 : Number(bedRaw);
        const rowRect = row.getBoundingClientRect();
        const dts = datesRef.current;
        let dayIdx;
        if (isAdmin) {
          dayIdx = Math.max(0, Math.min(
            totalDaysRef.current - 1,
            differenceInCalendarDays(parseISO(original.checkIn), dts[0])
          ));
        } else {
          const x = lastX - rowRect.left - ghost.offsetX + HALF_COL_WIDTH;
          dayIdx = Math.max(0, Math.min(totalDaysRef.current - 1, Math.round(x / DAY_WIDTH)));
        }
        const ci = dts[dayIdx];
        const co = addDays(ci, nights);
        targetRoom = rRoom;
        targetBed = rBed;
        targetCheckIn = format(ci, "yyyy-MM-dd");
        targetCheckOut = format(co, "yyyy-MM-dd");
        const datesUnchanged = targetCheckIn === original.checkIn && targetCheckOut === original.checkOut;
        if (!datesUnchanged && isBefore(ci, today)) invalid = true;
        if (!invalid) {
          const sh = 2 * dayIdx + 1 - (original.checkInHalfDay ? 1 : 0);
          const eh = 2 * (dayIdx + nights) + 1 + (original.checkOutHalfDay ? 1 : 0);
          if (hasBookingConflict({ roomNumber: rRoom, bedIndex: rBed, status: original.status }, sh, eh, original.id)) {
            invalid = true;
          }
        }
        const earlyShift = original.checkInHalfDay ? HALF_COL_WIDTH : 0;
        const halfExtra = original.checkOutHalfDay ? HALF_COL_WIDTH : 0;
        snapLeft = rowRect.left + dayIdx * DAY_WIDTH + HALF_COL_WIDTH - earlyShift;
        snapTop = rowRect.top;
        snapWidth = nights * DAY_WIDTH + earlyShift + halfExtra;
        snapHeight = rowRect.height;
      }
      const left = snapLeft != null ? snapLeft : lastX - ghost.offsetX;
      const top = snapTop != null ? snapTop : lastY - ghost.offsetY;
      const w = snapWidth != null ? snapWidth : ghost.width;
      const h = snapHeight != null ? snapHeight : ghost.height;
      applyGhostTransform(left, top, w, h, invalid);
      const labelEl = ghostLabelRef.current;
      if (labelEl) {
        const txt = invalid ? lang === "ru" ? "✕ Невозможно разместить здесь" : "✕ Cannot drop here" : `↕ ${(original.guestName || "").trim() || (lang === "ru" ? "Бронирование" : "Booking")}${targetCheckIn ? `   →  ${format(parseISO(targetCheckIn), "dd MMM")}${targetRoom != null ? ` · #${targetRoom}` : ""}` : ""}`;
        if (labelEl.textContent !== txt) labelEl.textContent = txt;
      }
      const g = moveGhostRef.current;
      if (g) {
        g.targetRoom = targetRoom;
        g.targetBed = targetBed;
        g.targetCheckIn = targetCheckIn;
        g.targetCheckOut = targetCheckOut;
        g.snapLeft = snapLeft;
        g.snapTop = snapTop;
        g.snapWidth = snapWidth;
        g.snapHeight = snapHeight;
        g.invalid = invalid;
      }
      const invalidKey = invalid ? "1" : "0";
      if (invalidKey !== lastAppliedKey) {
        lastAppliedKey = invalidKey;
        setMoveGhost((prev) => prev ? { ...prev, invalid } : prev);
      }
    };
    let pumpId = 0;
    const pump = () => {
      computeAndApply();
      pumpId = requestAnimationFrame(pump);
    };
    pumpId = requestAnimationFrame(pump);
    const onMove = (e) => {
      if ((e.buttons & 4) === 0) {
        setMoveGhost(null);
        return;
      }
      if (e.clientX !== lastX || e.clientY !== lastY) {
        lastX = e.clientX;
        lastY = e.clientY;
        dirty = true;
      }
    };
    const onScroll = () => {
      dirty = true;
    };
    const onUp = (e) => {
      if (e.button !== 1) return;
      const g = moveGhostRef.current;
      setMoveGhost(null);
      if (!g || g.targetRoom == null || !g.targetCheckIn || !g.targetCheckOut) return;
      if (g.targetRoom === original.roomNumber && g.targetBed === original.bedIndex && g.targetCheckIn === original.checkIn && g.targetCheckOut === original.checkOut) return;
      if (g.invalid) {
        toast.error(t("overlapError"));
        return;
      }
      moveResolvedRef.current = false;
      setMoveConfirm({
        booking: original,
        targetRoom: g.targetRoom,
        targetBed: g.targetBed,
        targetCheckIn: g.targetCheckIn,
        targetCheckOut: g.targetCheckOut
      });
    };
    const onKey = (e) => {
      if (e.key === "Escape") setMoveGhost(null);
    };
    const onCancel = () => setMoveGhost(null);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("keydown", onKey);
    window.addEventListener("blur", onCancel);
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    document.addEventListener("mouseleave", onCancel);
    return () => {
      if (pumpId) cancelAnimationFrame(pumpId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("blur", onCancel);
      window.removeEventListener("scroll", onScroll, true);
      document.removeEventListener("mouseleave", onCancel);
    };
  }, [moveActive, today, t, hasBookingConflict, lang, isAdmin]);
  const moveResolvedRef = reactExports.useRef(false);
  const confirmMove = reactExports.useCallback(() => {
    if (!moveConfirm) return;
    const { booking, targetRoom, targetBed, targetCheckIn, targetCheckOut } = moveConfirm;
    const fromRoom = rooms.find((r) => r.number === booking.roomNumber);
    const toRoom = rooms.find((r) => r.number === targetRoom);
    const isCategoryChange = !!(fromRoom && toRoom && fromRoom.category !== toRoom.category);
    const todayIso = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
    const canSplit = isCategoryChange && booking.status === "in-house" && booking.checkIn < todayIso && todayIso < booking.checkOut;
    if (canSplit && toRoom && fromRoom) {
      const originalSpan = bookingHalfSpan({ ...booking, roomNumber: targetRoom, bedIndex: targetBed, additionalBeds: void 0 });
      if (originalSpan && hasBookingConflict({ roomNumber: targetRoom, bedIndex: targetBed, status: booking.status }, originalSpan[0], originalSpan[1], booking.id)) {
        toast.error(t("overlapError"));
        moveResolvedRef.current = true;
        setMoveConfirm(null);
        return;
      }
      const segments = splitBookingAt({
        booking,
        splitDate: computeSplitDateNow(booking),
        newRoomNumber: targetRoom,
        newCategoryId: toRoom.category,
        oldCategoryId: fromRoom.category,
        residency: booking.residency ?? "resident",
        categoryRates
      });
      if (segments) {
        const total = sumSegments(segments);
        onUpdateBooking(booking.id, {
          roomNumber: targetRoom,
          bedIndex: targetBed,
          additionalBeds: void 0,
          checkIn: booking.checkIn,
          checkOut: booking.checkOut,
          segments,
          price: total,
          paymentAmount: total
        });
        toast.success(lang === "ru" ? `Категория изменена · ${segments.length} сегмента, итого ${total.toLocaleString("ru-RU")} сум` : `Category changed · ${segments.length} legs, total ${total.toLocaleString("en-US")} UZS`);
        moveResolvedRef.current = true;
        setMoveConfirm(null);
        return;
      }
    }
    onUpdateBooking(booking.id, {
      roomNumber: targetRoom,
      bedIndex: targetBed,
      checkIn: targetCheckIn,
      checkOut: targetCheckOut
    });
    toast.success(lang === "ru" ? "Бронирование перемещено" : "Booking moved");
    moveResolvedRef.current = true;
    setMoveConfirm(null);
  }, [moveConfirm, onUpdateBooking, lang, rooms, categoryRates, bookingHalfSpan, hasBookingConflict, t]);
  const cancelMove = reactExports.useCallback(() => {
    if (moveResolvedRef.current) {
      moveResolvedRef.current = false;
      setMoveConfirm(null);
      return;
    }
    moveResolvedRef.current = true;
    setMoveConfirm(null);
    toast.message(lang === "ru" ? "Перемещение отменено" : "Move cancelled");
  }, [lang]);
  const moveTargetRoomInfo = reactExports.useMemo(() => {
    if (!moveConfirm) return null;
    const r = rooms.find((x) => x.number === moveConfirm.targetRoom);
    const c = r ? categories.find((cc) => cc.id === r.category) : null;
    return { room: r, category: c };
  }, [moveConfirm, rooms, categories]);
  const handleBookingClick = reactExports.useCallback((booking) => {
    if (changeRoomModeRef.current && !isAdmin) {
      return;
    }
    setSelectedRoom(booking.roomNumber);
    setSelectedCheckIn(booking.checkIn);
    setSelectedCheckOut(booking.checkOut);
    setSelectedEarlyCheckin(!!booking.checkInHalfDay);
    setSelectedLateCheckout(!!booking.checkOutHalfDay);
    setEditBooking(booking);
    setDialogOpen(true);
  }, [isAdmin]);
  const handleResize = reactExports.useCallback((id, newCheckOut, halfDay) => {
    onUpdateBooking(id, { checkOut: newCheckOut, checkOutHalfDay: halfDay });
  }, [onUpdateBooking]);
  const handleResizeLeft = reactExports.useCallback((id, halfDay) => {
    onUpdateBooking(id, { checkInHalfDay: halfDay });
  }, [onUpdateBooking]);
  const canResize = reactExports.useCallback((id, newCheckOut, halfDay) => {
    const booking = bookingsRef.current.find((b) => b.id === id);
    if (!booking) return true;
    const span = bookingHalfSpan({ ...booking, checkOut: newCheckOut, checkOutHalfDay: halfDay });
    return !span || !hasBookingConflict(booking, span[0], span[1], id);
  }, [bookingHalfSpan, hasBookingConflict]);
  const canResizeLeft = reactExports.useCallback((id, halfDay) => {
    const booking = bookingsRef.current.find((b) => b.id === id);
    if (!booking) return true;
    const span = bookingHalfSpan({ ...booking, checkInHalfDay: halfDay });
    return !span || !hasBookingConflict(booking, span[0], span[1], id);
  }, [bookingHalfSpan, hasBookingConflict]);
  const handleAddBookingWrapped = reactExports.useCallback((b) => {
    if (b.status === "maintenance") {
      onAddBooking(b);
      return;
    }
    const room = rooms.find((r) => r.number === b.roomNumber);
    if (!room) {
      onAddBooking(b);
      return;
    }
    const cat = categories.find((c) => c.id === room.category);
    const personCount = PERSON_COUNTS[room.category] ?? cat?.maxGuests ?? 0;
    const totalBeds = personCount + (extraPersons[room.number] || 0);
    if (totalBeds < 1) {
      onAddBooking(b);
      return;
    }
    const guestsNeeded = Math.max(1, b.guestCount || 1);
    const span = bookingHalfSpan(b);
    if (!span) {
      onAddBooking(b);
      return;
    }
    const [sh, eh] = span;
    const order = [];
    if (b.bedIndex !== void 0 && b.bedIndex >= 0 && b.bedIndex < totalBeds) order.push(b.bedIndex);
    for (let i = 0; i < totalBeds; i++) if (i !== b.bedIndex) order.push(i);
    const free = [];
    for (const i of order) {
      if (!hasBookingConflict({ roomNumber: b.roomNumber, bedIndex: i, status: b.status }, sh, eh)) {
        free.push(i);
        if (free.length >= guestsNeeded) break;
      }
    }
    if (free.length < guestsNeeded) {
      toast.error(lang === "ru" ? `Недостаточно свободных мест для ${guestsNeeded} ${guestsNeeded === 1 ? "гостя" : "гостей"} на выбранные даты` : `Not enough available beds for ${guestsNeeded} guest${guestsNeeded === 1 ? "" : "s"} on these dates`);
      return;
    }
    const [primary, ...rest] = free;
    if (b.bedIndex !== void 0 && primary !== b.bedIndex) {
      toast.success(lang === "ru" ? `Гость размещён на свободном месте №${primary + 1}` : `Guest placed on available bed #${primary + 1}`);
    }
    onAddBooking({ ...b, bedIndex: primary, additionalBeds: rest.length ? rest : void 0 });
  }, [onAddBooking, rooms, categories, extraPersons, bookingHalfSpan, hasBookingConflict, lang]);
  const handleUpdateBookingWrapped = reactExports.useCallback((id, updates) => {
    const reEvalKeys = ["guestCount", "checkIn", "checkOut", "checkInHalfDay", "checkOutHalfDay", "roomNumber", "bedIndex", "status"];
    const needsReEval = reEvalKeys.some((k) => k in updates);
    if (!needsReEval) {
      onUpdateBooking(id, updates);
      return;
    }
    const current = bookingsRef.current.find((b) => b.id === id);
    if (!current) {
      onUpdateBooking(id, updates);
      return;
    }
    const merged = { ...current, ...updates };
    if (merged.bedIndex === void 0 || merged.status === "maintenance") {
      onUpdateBooking(id, updates);
      return;
    }
    const room = rooms.find((r) => r.number === merged.roomNumber);
    if (!room) {
      onUpdateBooking(id, updates);
      return;
    }
    const cat = categories.find((c) => c.id === room.category);
    const personCount = PERSON_COUNTS[room.category] ?? cat?.maxGuests ?? 0;
    const totalBeds = personCount + (extraPersons[merged.roomNumber] || 0);
    const guestsNeeded = Math.max(1, merged.guestCount || 1);
    if (guestsNeeded <= 1) {
      onUpdateBooking(id, { ...updates, additionalBeds: void 0 });
      return;
    }
    const span = bookingHalfSpan(merged);
    if (!span) {
      onUpdateBooking(id, updates);
      return;
    }
    const [sh, eh] = span;
    const extrasNeeded = guestsNeeded - 1;
    const extras = [];
    for (let i = 0; i < totalBeds && extras.length < extrasNeeded; i++) {
      if (i === merged.bedIndex) continue;
      if (!hasBookingConflict({ roomNumber: merged.roomNumber, bedIndex: i, status: merged.status }, sh, eh, id)) {
        extras.push(i);
      }
    }
    if (extras.length < extrasNeeded) {
      toast.error(lang === "ru" ? `Недостаточно свободных мест для ${guestsNeeded} гостей на выбранные даты` : `Not enough available beds for ${guestsNeeded} guests on these dates`);
      return;
    }
    onUpdateBooking(id, { ...updates, additionalBeds: extras.length ? extras : void 0 });
  }, [onUpdateBooking, rooms, categories, extraPersons, bookingHalfSpan, hasBookingConflict, lang]);
  const getDayLabel = reactExports.useCallback((d) => (lang === "ru" ? DAY_LABELS_RU : DAY_LABELS_UZ)[d.getDay()], [lang]);
  const isTdy = reactExports.useCallback((d) => isSameDay(d, today), [today]);
  const isPast = reactExports.useCallback((d) => isBefore(d, today) && !isSameDay(d, today), [today]);
  const isWeekend = (d) => d.getDay() === 0 || d.getDay() === 6;
  const monthStarts = reactExports.useMemo(() => {
    const s = /* @__PURE__ */ new Set();
    dates.forEach((d, i) => {
      if (d.getDate() === 1) s.add(i);
    });
    s.add(0);
    return s;
  }, [dates]);
  const changePreviewGeom = reactExports.useMemo(() => {
    if (!changeRoomMode) return null;
    const b = changeRoomMode.booking;
    const bIn = parseISO(b.checkIn);
    const bOut = parseISO(b.checkOut);
    const startDayOffset = differenceInCalendarDays(bIn, startDate);
    const endDayOffset = differenceInCalendarDays(bOut, startDate);
    const earlyShift = b.checkInHalfDay ? HALF_COL_WIDTH : 0;
    const startPx = Math.max(0, startDayOffset * DAY_WIDTH + HALF_COL_WIDTH - earlyShift);
    const halfExtra = b.checkOutHalfDay ? HALF_COL_WIDTH : 0;
    const endPx = endDayOffset * DAY_WIDTH + HALF_COL_WIDTH + halfExtra;
    return { leftPx: startPx, widthPx: Math.max(0, endPx - startPx) };
  }, [changeRoomMode, startDate]);
  reactExports.useEffect(() => {
    const handler = (ev) => {
      const detail = ev.detail;
      if (!detail?.bookingId || !detail?.categoryId) return;
      const b = bookingsRef.current.find((x) => x.id === detail.bookingId);
      if (!b) return;
      setChangeRoomMode({ booking: b, categoryId: detail.categoryId });
      toast.info(lang === "ru" ? "Наведите на свободную комнату и кликните" : lang === "uz" ? "Bo‘sh xonaga olib borib bosing" : "Hover a free room and click");
    };
    window.addEventListener("hotel:change-room", handler);
    return () => window.removeEventListener("hotel:change-room", handler);
  }, [lang]);
  reactExports.useEffect(() => {
    if (!changeRoomMode) {
      if (prevCollapsedRef.current !== null) {
        setCollapsedCategories(prevCollapsedRef.current);
        prevCollapsedRef.current = null;
      }
      setChangeHover(null);
      return;
    }
    const catId = changeRoomMode.categoryId;
    if (collapsedCategories[catId]) {
      if (prevCollapsedRef.current === null) {
        prevCollapsedRef.current = collapsedCategories;
      }
      setCollapsedCategories({ ...collapsedCategories, [catId]: false });
    }
    const raf = requestAnimationFrame(() => {
      const container = scrollRef.current;
      if (!container) return;
      const el = container.querySelector(`[data-category-id="${catId}"]`);
      if (!el) return;
      const top = el.offsetTop - 80;
      container.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    });
    return () => cancelAnimationFrame(raf);
  }, [changeRoomMode, isAdmin]);
  reactExports.useEffect(() => {
    if (!changeRoomMode || !isAdmin) return;
    const container = scrollRef.current;
    if (!container) return;
    const BUFFER = 140;
    const HEADER = 80;
    const computeBounds = () => {
      const el = container.querySelector(
        `[data-category-id="${changeRoomMode.categoryId}"]`
      );
      if (!el) return null;
      const top = Math.max(0, el.offsetTop - HEADER - BUFFER);
      const bottom = Math.max(
        top,
        el.offsetTop + el.offsetHeight - container.clientHeight + BUFFER
      );
      return { top, bottom };
    };
    let bounds = computeBounds();
    const recompute = () => {
      bounds = computeBounds();
    };
    const onScroll = () => {
      if (!bounds) {
        bounds = computeBounds();
        if (!bounds) return;
      }
      const st = container.scrollTop;
      if (st < bounds.top) container.scrollTop = bounds.top;
      else if (st > bounds.bottom) container.scrollTop = bounds.bottom;
    };
    const raf = requestAnimationFrame(recompute);
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recompute);
    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recompute);
    };
  }, [changeRoomMode, isAdmin]);
  reactExports.useEffect(() => {
    if (!changeRoomMode) return;
    const b = changeRoomMode.booking;
    const findRow = (target) => {
      let cur = target;
      while (cur) {
        if (cur.dataset && cur.dataset.gridRow === "true") return cur;
        cur = cur.parentElement;
      }
      return null;
    };
    const onKey = (e) => {
      if (e.key === "Escape") setChangeRoomMode(null);
    };
    const onMove = (e) => {
      const row = findRow(e.target);
      if (!row) {
        setChangeHover(null);
        return;
      }
      const roomNumber = Number(row.dataset.roomNumber);
      if (!Number.isFinite(roomNumber)) {
        setChangeHover(null);
        return;
      }
      const room = rooms.find((r) => r.number === roomNumber);
      if (!room || room.category !== changeRoomMode.categoryId) {
        setChangeHover(null);
        return;
      }
      const bedRaw = row.dataset.bedIndex ?? "";
      const bedIndex = bedRaw === "" ? void 0 : Number(bedRaw);
      const span = bookingHalfSpan(b);
      const valid = span ? !hasBookingConflict(
        { roomNumber, bedIndex, status: b.status, additionalBeds: b.additionalBeds },
        span[0],
        span[1],
        b.id
      ) : false;
      setChangeHover((prev) => {
        if (prev && prev.roomNumber === roomNumber && prev.bedIndex === bedIndex && prev.valid === valid) return prev;
        return { roomNumber, bedIndex, valid };
      });
    };
    const onClickCapture = (e) => {
      const row = findRow(e.target);
      if (!row) return;
      const roomNumber = Number(row.dataset.roomNumber);
      if (!Number.isFinite(roomNumber)) return;
      const room = rooms.find((r) => r.number === roomNumber);
      if (!room) return;
      if (room.category !== changeRoomMode.categoryId) {
        toast.error(lang === "ru" ? "Комната не в выбранной категории" : lang === "uz" ? "Xona tanlangan kategoriyada emas" : "Room is not in the selected category");
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (roomNumber === b.roomNumber) {
        setChangeRoomMode(null);
        return;
      }
      const span = bookingHalfSpan(b);
      if (!span) {
        setChangeRoomMode(null);
        return;
      }
      const bedRaw = row.dataset.bedIndex ?? "";
      const bedIndex = bedRaw === "" ? void 0 : Number(bedRaw);
      const conflict = hasBookingConflict(
        { roomNumber, bedIndex, status: b.status, additionalBeds: b.additionalBeds },
        span[0],
        span[1],
        b.id
      );
      if (conflict) {
        toast.error(t("overlapError"));
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const fromRoom = rooms.find((r) => r.number === b.roomNumber);
      const toRoom = rooms.find((r) => r.number === roomNumber);
      const isCategoryChange = !!(fromRoom && toRoom && fromRoom.category !== toRoom.category);
      const todayIso = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
      const canSplit = isCategoryChange && b.status === "in-house" && b.checkIn < todayIso && todayIso < b.checkOut;
      if (canSplit && toRoom && fromRoom) {
        const segments = splitBookingAt({
          booking: b,
          splitDate: computeSplitDateNow(b),
          newRoomNumber: roomNumber,
          newCategoryId: toRoom.category,
          oldCategoryId: fromRoom.category,
          residency: b.residency ?? "resident",
          categoryRates
        });
        if (segments) {
          const total = sumSegments(segments);
          onUpdateBooking(b.id, {
            roomNumber,
            bedIndex,
            additionalBeds: void 0,
            segments,
            price: total,
            paymentAmount: total
          });
          setChangeRoomMode(null);
          toast.success(lang === "ru" ? `Категория изменена · ${segments.length} сегмента, итого ${total.toLocaleString("ru-RU")} сум` : lang === "uz" ? `Kategoriya o‘zgartirildi · ${segments.length} qism, jami ${total.toLocaleString("ru-RU")} so‘m` : `Category changed · ${segments.length} legs, total ${total.toLocaleString("en-US")} UZS`);
          return;
        }
      }
      onUpdateBooking(b.id, { roomNumber, bedIndex });
      setChangeRoomMode(null);
      toast.success(lang === "ru" ? "Комната изменена" : lang === "uz" ? "Xona o‘zgartirildi" : "Room changed");
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClickCapture, true);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClickCapture, true);
    };
  }, [changeRoomMode, rooms, bookingHalfSpan, hasBookingConflict, onUpdateBooking, t, lang, categoryRates]);
  reactExports.useEffect(() => {
    if (!changeRoomMode) return;
    const body = document.body;
    body.classList.add("admin-change-room-focus");
    return () => {
      body.classList.remove("admin-change-room-focus");
    };
  }, [changeRoomMode]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    changeRoomMode && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-change-room-banner": "true", className: "fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 rounded-2xl border border-primary/40 bg-primary px-5 py-2.5 text-primary-foreground shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] font-black uppercase tracking-wider", children: [
        lang === "ru" ? "Выберите свободную комнату" : lang === "uz" ? "Bo‘sh xonani tanlang" : "Pick a free room",
        ": ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-90", children: categories.find((c) => c.id === changeRoomMode.categoryId)?.label[lang] || categories.find((c) => c.id === changeRoomMode.categoryId)?.label.en })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setChangeRoomMode(null),
          className: "rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider hover:bg-white/30",
          children: [
            lang === "ru" ? "Отмена" : lang === "uz" ? "Bekor" : "Cancel",
            " · ESC"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-h-0 flex flex-col", children: [
      !changeRoomMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: scrollToToday,
          className: "jump-today-btn group absolute top-3 right-5 z-30 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300",
          title: lang === "ru" ? "К сегодняшней дате" : "Bugungi sanaga",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck2, { className: "h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-12" }),
            lang === "ru" ? "Сегодня" : "Bugun"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: scrollRef,
          onScroll: handleScroll,
          onMouseDown: preventNativeMiddleScroll,
          onAuxClick: preventNativeMiddleScroll,
          className: "timeline-scroll timeline-scroll--no-hbar flex-1 overflow-y-auto overflow-x-hidden select-none",
          style: { contain: "layout paint", willChange: "scroll-position" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { minWidth: totalWidth + LABEL_WIDTH }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `timeline-date-header sticky top-0 z-40 flex bg-card ${changeRoomMode ? "pointer-events-none opacity-90" : "cursor-grab"}`,
                style: { borderBottom: "2px solid hsl(var(--grid-line-bold))", background: "hsl(var(--card))" },
                onMouseDown: changeRoomMode ? void 0 : handleHeaderMouseDown,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "sticky left-0 z-30 shrink-0 bg-card flex items-center gap-2 px-3",
                      style: { width: LABEL_WIDTH, borderRight: "2px solid hsl(var(--grid-line-bold))", boxShadow: "4px 0 8px hsl(0 0% 0% / 0.06)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-foreground", children: t("roomCategory") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground font-semibold mt-0.5", children: lang === "ru" ? "Комната / Тип" : lang === "uz" ? "Xona / Turi" : "Room / Type" })
                        ] }),
                        canManageStructure && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            onMouseDown: (e) => e.stopPropagation(),
                            onClick: (e) => {
                              e.stopPropagation();
                              setAddCategoryOpen(true);
                            },
                            title: t("addCategory"),
                            className: "add-control-fancy group inline-flex h-9 items-center gap-1.5 rounded-full bg-gradient-to-r from-primary via-primary/90 to-primary/75 px-3 text-[10px] font-black uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary/40 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xl:inline", children: t("addCategory") })
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: dates.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    DayHeaderCell,
                    {
                      date: d,
                      isToday: isTdy(d),
                      isPastDay: isPast(d),
                      isWeekendDay: isWeekend(d),
                      dayLabel: getDayLabel(d),
                      lang,
                      isFirstOfMonth: monthStarts.has(i)
                    },
                    i
                  )) })
                ]
              }
            ),
            categories.map((cat) => {
              const catRooms = rooms.filter((r) => r.category === cat.id);
              const isCollapsed = collapsedCategories[cat.id] ?? false;
              const personCount = PERSON_COUNTS[cat.id] ?? cat.maxGuests ?? 0;
              const isChangeRoomLocked = !!changeRoomMode && cat.id !== changeRoomMode.categoryId;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-category-id": cat.id, "data-change-room-locked": isChangeRoomLocked ? "true" : void 0, style: { position: "relative" }, children: [
                isChangeRoomLocked && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": "true",
                    className: "pointer-events-auto absolute inset-0 z-30",
                    onPointerDown: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onPointerMove: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onPointerUp: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onMouseDown: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onMouseUp: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onClick: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onDoubleClick: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onAuxClick: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onContextMenu: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onWheel: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    style: {
                      background: "rgba(15, 23, 42, 0.35)",
                      backdropFilter: "blur(10px) saturate(0.85)",
                      WebkitBackdropFilter: "blur(10px) saturate(0.85)",
                      cursor: "not-allowed"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "group/category flex cursor-pointer category-header hover:brightness-[1.02] transition-all",
                    style: { borderTop: "2px solid hsl(var(--grid-line-bold))", borderBottom: "2px solid hsl(var(--primary-hsl) / 0.35)", background: "linear-gradient(90deg, hsl(var(--primary-hsl) / 0.18) 0%, hsl(var(--primary-hsl) / 0.08) 60%, hsl(var(--primary-hsl) / 0.04) 100%)", height: 48 },
                    onClick: () => toggleCategory(cat.id),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "sticky left-0 z-20 shrink-0 flex items-center gap-2.5 px-3 py-2 overflow-visible",
                          style: { width: LABEL_WIDTH, minWidth: LABEL_WIDTH, borderRight: "2px solid hsl(var(--grid-line-bold))", background: "linear-gradient(90deg, hsl(var(--primary-hsl) / 0.22), hsl(var(--primary-hsl) / 0.14))", boxShadow: "4px 0 12px hsl(var(--primary-hsl) / 0.12)" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/25", children: isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 text-primary" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0 flex-1 overflow-visible", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-extrabold text-foreground leading-tight block whitespace-normal break-words", title: cat.label[lang], children: categoryDisplay(cat, lang) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-muted-foreground font-semibold flex flex-wrap items-center gap-1 leading-tight", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-wider text-primary/70 font-bold", children: cat.short }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: "·" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                  catRooms.length,
                                  " ",
                                  t("rooms")
                                ] }),
                                personCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 text-primary/80", children: [
                                  "· ",
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "inline h-3 w-3" }),
                                  " ",
                                  personCount
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex shrink-0 items-center gap-1.5", children: [
                              null,
                              canManageStructure && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onMouseDown: (e) => e.stopPropagation(),
                                  onClick: (e) => {
                                    e.stopPropagation();
                                    setAddRoomCategoryId(cat.id);
                                  },
                                  title: t("addRoom"),
                                  className: "add-control-fancy inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-card/95 text-primary ring-1 ring-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" })
                                }
                              ),
                              canManageStructure && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onMouseDown: (e) => e.stopPropagation(),
                                  onClick: (e) => {
                                    e.stopPropagation();
                                    setDeleteTarget({ type: "category", id: cat.id, label: cat.label[lang] });
                                  },
                                  title: lang === "ru" ? "Удалить категорию" : "Delete category",
                                  className: "delete-control-fancy flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-card/90 text-destructive ring-1 ring-destructive/20 hover:bg-destructive hover:text-destructive-foreground transition-colors",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" })
                                }
                              )
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: totalWidth, height: "100%", position: "relative" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: { position: "sticky", left: LABEL_WIDTH + 14, display: "inline-flex", height: "100%", alignItems: "center", paddingRight: 14, pointerEvents: "auto", zIndex: 5 },
                          onClick: (e) => e.stopPropagation(),
                          onMouseDown: (e) => e.stopPropagation(),
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryStatusStrip, { counts: categoryStatusCounts[cat.id] ?? { confirmed: 0, pending: 0, booked: 0, "in-house": 0, "checked-out": 0, maintenance: 0 }, lang })
                        }
                      ) })
                    ]
                  }
                ),
                !isCollapsed && catRooms.map((room) => {
                  const isExpanded = expandedRooms[room.number] ?? false;
                  const hasPersonRows = personCount >= 2;
                  const extra = extraPersons[room.number] || 0;
                  const totalPersons = personCount + extra;
                  const bars = buckets.byRoom.get(room.number) || [];
                  const roomKey = `${room.number}`;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: isExpanded ? "person-section-expanded" : "", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `group/room flex grid-row ${isExpanded ? "person-section-top-border" : ""}`,
                        style: { borderBottom: "1px solid hsl(var(--grid-line))" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "sticky left-0 z-10 flex shrink-0 items-center gap-2 bg-card px-2.5",
                              style: { width: LABEL_WIDTH, borderRight: "2px solid hsl(var(--grid-line-bold))", boxShadow: "4px 0 8px hsl(0 0% 0% / 0.04)" },
                              children: [
                                hasPersonRows ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onMouseDown: (e) => e.stopPropagation(),
                                    onClick: (e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      toggleRoomExpand(room.number);
                                    },
                                    className: `flex h-6 w-6 items-center justify-center rounded-lg transition-all duration-200 ${isExpanded ? "bg-primary/20 shadow-sm" : "hover:bg-primary/10"}`,
                                    title: lang === "ru" ? "Показать кровати" : "Yotoqlarni ko'rsatish",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `h-3.5 w-3.5 text-primary/70 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}` })
                                  }
                                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-7 w-9 items-center justify-center rounded-lg bg-primary/10 text-[12px] font-black text-primary", children: [
                                  room.number,
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      className: `absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full ring-2 ring-card ${isRoomDirty(room.number, bookings) ? "bg-red-500 shadow-[0_0_8px_2px_rgba(239,68,68,0.85)] animate-pulse" : "bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.55)]"}`,
                                      title: isRoomDirty(room.number, bookings) ? lang === "ru" ? "Грязный" : "Dirty" : lang === "ru" ? "Чистый" : "Clean"
                                    }
                                  )
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0 flex-1", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-foreground leading-tight truncate", children: categoryDisplay(cat, lang) }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground font-semibold truncate", children: cat.short })
                                ] }),
                                hasPersonRows && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onMouseDown: (e) => e.stopPropagation(),
                                    onClick: (e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      addExtraPerson(room.number);
                                    },
                                    title: lang === "ru" ? "Добавить гостя" : "Mehmon qo'shish",
                                    className: "add-control-fancy flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm ring-1 ring-primary/20 hover:bg-primary hover:text-primary-foreground hover:scale-110 active:scale-95 transition-all duration-200 group",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5 group-hover:rotate-90 transition-transform duration-300" })
                                  }
                                ),
                                canManageStructure && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onMouseDown: (e) => e.stopPropagation(),
                                    onClick: (e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      setDeleteTarget({ type: "room", roomNumber: room.number });
                                    },
                                    title: lang === "ru" ? "Удалить номер" : "Delete room",
                                    className: "delete-control-fancy flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-foreground/60 ring-1 ring-transparent transition-all hover:bg-destructive/15 hover:text-destructive hover:ring-destructive/25 hover:scale-105 active:scale-95",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "relative cursor-crosshair",
                              "data-grid-row": "true",
                              "data-room-number": room.number,
                              "data-bed-index": hasPersonRows ? 0 : "",
                              style: { width: totalWidth, height: ROW_HEIGHT, contain: "layout paint" },
                              onMouseDown: (e) => handleCellMouseDown(room.number, hasPersonRows ? 0 : void 0, ROW_HEIGHT, e),
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(RowBackground, { height: ROW_HEIGHT, totalWidth, todayOffset: todayIdx, totalDays }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(RowDragOverlay, { rowKey: hasPersonRows ? `${room.number}:0` : roomKey, registerOverlay }),
                                changeRoomMode && changePreviewGeom && changeHover?.roomNumber === room.number && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    className: "pointer-events-none absolute transition-opacity",
                                    style: {
                                      left: changePreviewGeom.leftPx,
                                      width: changePreviewGeom.widthPx,
                                      top: 3,
                                      bottom: 3,
                                      zIndex: 4,
                                      borderRadius: 8,
                                      border: `2px dashed ${changeHover.valid ? "hsl(var(--primary-hsl))" : "hsl(var(--destructive))"}`,
                                      background: changeHover.valid ? "hsl(var(--primary-hsl) / 0.22)" : "hsl(var(--destructive) / 0.18)",
                                      boxShadow: changeHover.valid ? "0 0 0 3px hsl(var(--primary-hsl) / 0.15)" : "0 0 0 3px hsl(var(--destructive) / 0.12)"
                                    }
                                  }
                                ),
                                bars.map(({ booking, leftPx, widthPx, isPast: bp }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  BookingBar,
                                  {
                                    booking,
                                    leftPx,
                                    widthPx,
                                    onClick: handleBookingClick,
                                    dayWidthPx: DAY_WIDTH,
                                    isPast: bp,
                                    onResize: handleResize,
                                    canResize,
                                    onResizeLeft: handleResizeLeft,
                                    canResizeLeft,
                                    onResizeConflict: showOverlapError,
                                    onMoveStart: handleBookingMoveStart
                                  },
                                  booking.id
                                )),
                                hasPersonRows && (buckets.byBed.get(`${room.number}:0`) || []).map(({ booking, leftPx, widthPx, isPast: bp, isBlocker }) => isBlocker ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    className: "booking-blocker-stripes",
                                    style: {
                                      position: "absolute",
                                      left: leftPx,
                                      top: 6,
                                      width: widthPx,
                                      height: ROW_HEIGHT - 12,
                                      borderRadius: 6,
                                      pointerEvents: "none",
                                      background: "repeating-linear-gradient(135deg, rgba(136,19,55,0.55) 0 3px, rgba(136,19,55,0.04) 3px 9px)",
                                      border: "1px solid rgba(136,19,55,0.45)",
                                      boxShadow: "none",
                                      opacity: bp ? 0.5 : 0.95
                                    },
                                    title: lang === "ru" ? "Занято бронированием" : "Occupied by booking"
                                  },
                                  `blocker-room-${booking.id}`
                                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  BookingBar,
                                  {
                                    booking,
                                    leftPx,
                                    widthPx,
                                    onClick: handleBookingClick,
                                    dayWidthPx: DAY_WIDTH,
                                    isPast: bp,
                                    onResize: handleResize,
                                    canResize,
                                    onResizeLeft: handleResizeLeft,
                                    canResizeLeft,
                                    onResizeConflict: showOverlapError,
                                    onMoveStart: handleBookingMoveStart
                                  },
                                  booking.id
                                ))
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    hasPersonRows && isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "person-section-body", children: Array.from({ length: totalPersons }, (_, pIdx) => {
                      if (pIdx === 0) return null;
                      if (deletedPersonSlots[room.number]?.has(pIdx)) return null;
                      const isExtra = pIdx >= personCount;
                      const personBars = buckets.byBed.get(`${room.number}:${pIdx}`) || [];
                      const bedKey = `${room.number}:${pIdx}`;
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "group/guest flex person-row-animate person-row-active person-row-hover",
                          style: { borderBottom: pIdx < totalPersons - 1 ? "1px solid hsl(var(--grid-line))" : "none", animationDelay: `${pIdx * 60}ms` },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "sticky left-0 z-10 flex shrink-0 items-center gap-2 px-2.5 pl-12",
                                style: { width: LABEL_WIDTH, borderRight: "2px solid hsl(var(--grid-line-bold))", background: "hsl(var(--grid-person-expanded-bg))", boxShadow: "4px 0 8px hsl(0 0% 0% / 0.03)" },
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-5 w-5 items-center justify-center rounded-full ${isExtra ? "bg-primary/30" : "bg-primary/20"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3 w-3 text-primary/70" }) }),
                                  (() => {
                                    const guestDirty = bookings.some((b) => b.roomNumber === room.number && b.bedIndex === pIdx && b.status === "dirty");
                                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "span",
                                      {
                                        className: `h-1.5 w-1.5 shrink-0 rounded-full ring-1 ring-background ${guestDirty ? "bg-red-500 animate-pulse" : "bg-emerald-500"}`,
                                        title: guestDirty ? lang === "ru" ? "Грязный" : "Dirty" : lang === "ru" ? "Чистый" : "Clean"
                                      }
                                    );
                                  })(),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "input",
                                    {
                                      type: "text",
                                      value: personNames[room.number]?.[pIdx] ?? "",
                                      onChange: (e) => updatePersonName(room.number, pIdx, e.target.value.slice(0, 28)),
                                      placeholder: `${t("person")} ${pIdx + 1}`,
                                      maxLength: 28,
                                      className: "person-name-input text-[10px] font-bold text-muted-foreground/80 bg-transparent border-none outline-none flex-1 min-w-0 placeholder:text-muted-foreground/50 focus:text-foreground h-6 px-1.5 rounded-md transition-all duration-200 hover:bg-primary/5",
                                      onMouseDown: (e) => e.stopPropagation(),
                                      onClick: (e) => e.stopPropagation()
                                    }
                                  ),
                                  isExtra || !isAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onMouseDown: (e) => e.stopPropagation(),
                                      onClick: (e) => {
                                        e.stopPropagation();
                                        setDeleteTarget({ type: "guest", roomNumber: room.number, personIdx: pIdx, isExtra });
                                      },
                                      title: lang === "ru" ? "Удалить гостя" : "Mehmonni olib tashlash",
                                      className: "delete-control-fancy flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-muted-foreground/60 ring-1 ring-transparent transition-all hover:bg-destructive/15 hover:text-destructive hover:ring-destructive/25 hover:scale-105 active:scale-95",
                                      children: isExtra ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" })
                                    }
                                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-6 w-6 shrink-0", "aria-hidden": "true" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "relative cursor-crosshair",
                                "data-grid-row": "true",
                                "data-room-number": room.number,
                                "data-bed-index": pIdx,
                                style: { width: totalWidth, height: PERSON_ROW_HEIGHT, contain: "layout paint" },
                                onMouseDown: (e) => handleCellMouseDown(room.number, pIdx, PERSON_ROW_HEIGHT, e),
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(RowBackground, { height: PERSON_ROW_HEIGHT, totalWidth, todayOffset: todayIdx, totalDays }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(RowDragOverlay, { rowKey: bedKey, registerOverlay }),
                                  personBars.map(({ booking, leftPx, widthPx, isPast: bp, isBlocker }) => isBlocker ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "div",
                                    {
                                      className: "booking-blocker-stripes",
                                      style: {
                                        position: "absolute",
                                        left: leftPx,
                                        top: 5,
                                        width: widthPx,
                                        height: PERSON_ROW_HEIGHT - 10,
                                        borderRadius: 6,
                                        pointerEvents: "none",
                                        // Refined, restrained diagonal stripes — narrow, monochrome
                                        // crimson on near-transparent ground. Reads as "blocked"
                                        // without the previous candy-cane intensity.
                                        background: "repeating-linear-gradient(135deg, rgba(136,19,55,0.55) 0 3px, rgba(136,19,55,0.04) 3px 9px)",
                                        border: "1px solid rgba(136,19,55,0.45)",
                                        boxShadow: "none",
                                        opacity: bp ? 0.5 : 0.95
                                      },
                                      title: lang === "ru" ? "Занято бронированием" : "Occupied by booking"
                                    },
                                    `blocker-${booking.id}-${pIdx}`
                                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    BookingBar,
                                    {
                                      booking,
                                      leftPx,
                                      widthPx,
                                      onClick: handleBookingClick,
                                      dayWidthPx: DAY_WIDTH,
                                      isPast: bp,
                                      onResize: handleResize,
                                      canResize,
                                      onResizeLeft: handleResizeLeft,
                                      canResizeLeft,
                                      onResizeConflict: showOverlapError,
                                      onMoveStart: handleBookingMoveStart
                                    },
                                    booking.id
                                  ))
                                ]
                              }
                            )
                          ]
                        },
                        pIdx
                      );
                    }) })
                  ] }, room.number);
                })
              ] }, cat.id);
            })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TimelineBottomScrollbar,
        {
          scrollRef,
          labelWidth: LABEL_WIDTH,
          todayContentPx: todayIdx * DAY_WIDTH + DAY_WIDTH / 2,
          onDragStateChange: handleTimelineScrollbarDragState,
          onEdgeRequest: handleTimelineScrollbarEdgeRequest
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BookingDialog,
      {
        open: dialogOpen,
        onClose: () => {
          clearAllGlows();
          setDialogOpen(false);
          setEditBooking(null);
          setSelectedBedIndex(void 0);
          setSelectedPrefillName("");
          setSelectedEarlyCheckin(false);
          setSelectedLateCheckout(false);
        },
        onSave: handleAddBookingWrapped,
        onUpdate: handleUpdateBookingWrapped,
        onDelete: onDeleteBooking,
        roomNumber: selectedRoom,
        checkIn: selectedCheckIn,
        checkOut: selectedCheckOut,
        editBooking,
        bedIndex: selectedBedIndex,
        prefillName: selectedPrefillName,
        initialEarlyCheckin: selectedEarlyCheckin,
        initialLateCheckout: selectedLateCheckout,
        extraGuestSlots: extraPersons[selectedRoom] || 0
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AlertDialog,
      {
        open: deleteTarget !== null,
        onOpenChange: (open) => {
          if (!open) {
            setDeleteTarget(null);
          }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContent, { className: "overflow-hidden rounded-2xl border-2 border-destructive/25 bg-card p-0 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,hsl(var(--destructive)/0.16),transparent_38%),linear-gradient(135deg,hsl(var(--destructive)/0.08),transparent_52%)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: "relative gap-3 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/12 text-destructive ring-1 ring-destructive/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ (() => {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-display text-xl font-black", children: lang === "ru" ? "Вы уверены?" : "Are you sure?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-sm font-medium leading-relaxed", children: lang === "ru" ? "После подтверждения выбранный элемент будет скрыт из сетки. Это действие нельзя отменить в этом окне." : "After confirmation, the selected item will be hidden from the grid. This action cannot be undone here." })
              ] });
            })()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "relative mt-6 gap-2 sm:space-x-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "rounded-xl border-border/70 bg-background/80 font-bold", children: t("cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AlertDialogAction,
              {
                onClick: () => {
                  confirmDelete();
                },
                className: "rounded-xl bg-destructive font-black text-destructive-foreground shadow-lg shadow-destructive/25 hover:bg-destructive/90",
                children: t("delete")
              }
            )
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: rateEditCategoryId !== null, onOpenChange: (open) => !open && setRateEditCategoryId(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      AlertDialogContent,
      {
        className: "overflow-hidden rounded-2xl border-2 border-primary/20 bg-card p-0 shadow-2xl",
        style: {
          maxWidth: `${Math.min(Math.max(1, categories.find((c) => c.id === rateEditCategoryId)?.maxGuests ?? 1), 4) * 260 + 48}px`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: "text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-display text-xl font-black", children: lang === "ru" ? "Цена категории" : "Category price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: (() => {
              const c = categories.find((x) => x.id === rateEditCategoryId);
              return c ? categoryDisplay(c, lang) : "";
            })() })
          ] }),
          (() => {
            const editingCat = categories.find((c) => c.id === rateEditCategoryId);
            const slots = Math.max(1, editingCat?.maxGuests ?? 1);
            const guestLabel = (i) => lang === "ru" ? `Гость ${i + 1}` : lang === "uz" ? `Mehmon ${i + 1}` : `Guest ${i + 1}`;
            const updateAt = (setter, idx, v) => setter((prev) => {
              const next = prev.slice();
              while (next.length < slots) next.push("");
              next[idx] = v.replace(/\D/g, "").slice(0, 18);
              return next;
            });
            const fmt = (raw) => raw ? Number(String(raw).replace(/\D/g, "")).toLocaleString("ru-RU") : "";
            const residentLabel = lang === "ru" ? "Резидент" : "Resident";
            const nonResidentLabel = lang === "ru" ? "Нерезидент" : "Non-resident";
            const cols = Math.min(slots, 4);
            const gridColsClass = cols >= 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : cols === 3 ? "grid-cols-1 sm:grid-cols-3" : cols === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1";
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 max-h-[60vh] overflow-y-auto pr-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid gap-3 ${gridColsClass}`, children: Array.from({ length: slots }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "min-w-0 rounded-2xl border border-border/70 bg-background/60 p-3 shadow-sm transition hover:border-primary/40 hover:shadow-md",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black text-foreground", children: guestLabel(i) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary", children: [
                      "#",
                      i + 1
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600", children: residentLabel }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-1.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-xs font-black text-emerald-500", children: "сум" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            autoFocus: i === 0,
                            type: "text",
                            inputMode: "numeric",
                            value: fmt(rateDraft[i]),
                            onChange: (e) => updateAt(setRateDraft, i, e.target.value),
                            className: "h-9 w-full min-w-0 flex-1 bg-transparent text-sm font-black tabular-nums text-foreground outline-none",
                            placeholder: "0"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "UZS" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-[10px] font-bold uppercase tracking-wider text-amber-600", children: nonResidentLabel }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-1.5 rounded-xl border border-amber-500/20 bg-amber-500/5 px-2.5 py-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-xs font-black text-amber-500", children: "сум" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            value: fmt(rateDraftNon[i]),
                            onChange: (e) => updateAt(setRateDraftNon, i, e.target.value),
                            className: "h-9 w-full min-w-0 flex-1 bg-transparent text-sm font-black tabular-nums text-foreground outline-none",
                            placeholder: "0"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "UZS" })
                      ] })
                    ] })
                  ] })
                ]
              },
              `guest-${i}`
            )) }) });
          })(),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "mt-6 gap-2 sm:space-x-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "rounded-xl border-border/70 bg-background/80 font-bold", children: t("cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogAction, { onClick: saveRate, className: "rounded-xl bg-primary font-black text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mr-1.5 h-4 w-4" }),
              " ",
              t("save")
            ] })
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddCategoryDialog, { open: addCategoryOpen, onClose: () => setAddCategoryOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddRoomDialog,
      {
        open: addRoomCategoryId !== null,
        onClose: () => setAddRoomCategoryId(null),
        category: categories.find((c) => c.id === addRoomCategoryId) ?? null
      }
    ),
    moveGhost && typeof document !== "undefined" && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: (el) => {
            ghostElRef.current = el;
            if (el) {
              const g = moveGhostRef.current;
              if (g) {
                const left = g.snapLeft != null ? g.snapLeft : g.x - g.offsetX;
                const top = g.snapTop != null ? g.snapTop : g.y - g.offsetY;
                const w = g.snapWidth != null ? g.snapWidth : g.width;
                const h = g.snapHeight != null ? g.snapHeight : g.height;
                el.style.width = `${w}px`;
                el.style.height = `${h}px`;
                el.style.transform = `translate3d(${left}px, ${top}px, 0) scale(1.04) rotate(-0.6deg)`;
                el.dataset.invalid = g.invalid ? "1" : "0";
              }
            }
          },
          "data-invalid": moveGhost.invalid ? "1" : "0",
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            willChange: "transform",
            pointerEvents: "none",
            zIndex: 9999,
            borderRadius: 12,
            background: moveGhost.invalid ? "linear-gradient(135deg, hsl(var(--destructive) / 0.85), hsl(var(--destructive) / 0.65))" : "linear-gradient(135deg, hsl(var(--primary-hsl) / 0.85), hsl(var(--primary-hsl) / 0.6))",
            color: "hsl(var(--primary-foreground))",
            border: moveGhost.invalid ? "2px solid hsl(var(--destructive))" : "2px solid hsl(var(--primary-hsl))",
            boxShadow: moveGhost.invalid ? "0 18px 40px -10px hsl(var(--destructive) / 0.55), 0 0 0 4px hsl(var(--destructive) / 0.18)" : "0 18px 40px -10px hsl(var(--primary-hsl) / 0.55), 0 0 0 4px hsl(var(--primary-hsl) / 0.18)",
            transition: "background 120ms ease, border-color 120ms ease, box-shadow 160ms ease",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            fontSize: 12,
            fontWeight: 700,
            overflow: "hidden",
            whiteSpace: "nowrap",
            backdropFilter: "blur(2px)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              ref: (el) => {
                ghostLabelRef.current = el;
              },
              style: { opacity: 0.95, textOverflow: "ellipsis", overflow: "hidden" },
              children: moveGhost.invalid ? lang === "ru" ? "✕ Невозможно разместить здесь" : "✕ Cannot drop here" : `↕ ${(moveGhost.booking.guestName || "").trim() || (lang === "ru" ? "Бронирование" : "Booking")}`
            }
          )
        }
      ),
      document.body
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: moveConfirm !== null, onOpenChange: (open) => {
      if (!open && moveConfirm) cancelMove();
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContent, { className: "overflow-hidden rounded-2xl border-2 border-primary/25 bg-card p-0 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,hsl(var(--primary-hsl)/0.16),transparent_38%),linear-gradient(135deg,hsl(var(--primary-hsl)/0.08),transparent_52%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: "relative gap-3 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck2, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-display text-xl font-black", children: lang === "ru" ? "Переместить бронирование?" : "Move booking?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-sm font-medium leading-relaxed", children: moveConfirm && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          lang === "ru" ? "Гость: " : "Guest: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: moveConfirm.booking.guestName || "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            lang === "ru" ? "Из" : "From",
            ": #",
            moveConfirm.booking.roomNumber,
            moveConfirm.booking.bedIndex !== void 0 && ` · ${lang === "ru" ? "место" : "bed"} ${moveConfirm.booking.bedIndex + 1}`,
            " · ",
            moveConfirm.booking.checkIn,
            " → ",
            moveConfirm.booking.checkOut
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-bold", children: [
            lang === "ru" ? "В" : "To",
            ": #",
            moveConfirm.targetRoom,
            moveConfirm.targetBed !== void 0 && ` · ${lang === "ru" ? "место" : "bed"} ${moveConfirm.targetBed + 1}`,
            moveTargetRoomInfo?.category && ` · ${categoryDisplay(moveTargetRoomInfo.category, lang)}`,
            " · ",
            moveConfirm.targetCheckIn,
            " → ",
            moveConfirm.targetCheckOut
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "relative mt-6 gap-2 sm:space-x-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: cancelMove, className: "rounded-xl border-border/70 bg-background/80 font-bold", children: lang === "ru" ? "Нет, вернуть" : "No, snap back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogAction, { onClick: confirmMove, className: "rounded-xl bg-primary font-black text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mr-1.5 h-4 w-4" }),
          lang === "ru" ? "Да, переместить" : "Yes, move"
        ] })
      ] })
    ] }) }) })
  ] });
}
function getRoomBookings(roomNumber, bookings, date) {
  const d = startOfDay(date);
  const all = bookings.filter((b) => b.roomNumber === roomNumber);
  const active = all.filter((b) => isWithinInterval(d, { start: parseISO(b.checkIn), end: parseISO(b.checkOut) }));
  const rest = all.filter((b) => !active.includes(b)).sort((a, b) => a.checkIn < b.checkIn ? 1 : -1);
  return [...active, ...rest];
}
function HotelRoomTileGrid({ rooms, bookings, activeFilter, selectedDate, onEditRoom, onShowOnGrid, onEditBooking }) {
  const { lang, t } = useI18n();
  const { categories } = useHotelGrid();
  const [selectedByRoom, setSelectedByRoom] = reactExports.useState({});
  const roomData = reactExports.useMemo(
    () => rooms.map((r) => ({ room: r, roomBookings: getRoomBookings(r.number, bookings, selectedDate) })),
    [rooms, bookings, selectedDate]
  );
  const matches = (booking) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "available") return booking === null;
    return booking?.status === activeFilter;
  };
  const getCategoryLabel = (catId) => {
    const cat = categories.find((c) => c.id === catId);
    return cat ? cat.label[lang] || cat.short : catId;
  };
  const grouped = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    categories.forEach((c) => map.set(c.id, []));
    roomData.forEach((rd) => {
      if (!map.has(rd.room.category)) map.set(rd.room.category, []);
      map.get(rd.room.category).push(rd);
    });
    return Array.from(map.entries()).filter(([, items]) => items.length > 0);
  }, [roomData, categories]);
  const renderTile = ({ room, roomBookings }) => {
    const defaultBooking = roomBookings[0] ?? null;
    const selectedId = selectedByRoom[room.number];
    const booking = selectedId && roomBookings.find((b) => b.id === selectedId) || defaultBooking;
    const statusCfg = booking ? BOOKING_STATUSES[booking.status] : null;
    const isMatch = matches(booking);
    const dirty = isRoomDirty(room.number, bookings);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `room-card relative p-4 cursor-pointer overflow-hidden group transition-all duration-200 hover:bg-accent/40 ${isMatch ? "" : "opacity-30 grayscale hover:opacity-60"}`,
        style: { contain: "layout paint" },
        onClick: () => {
          if (booking && onEditBooking) onEditBooking(booking.id);
          else onEditRoom(room.number);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `absolute top-2 right-2 h-2.5 w-2.5 rounded-full ring-2 ring-background z-10 ${dirty ? "bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.85)] animate-pulse" : "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.55)]"}`,
              title: dirty ? lang === "ru" ? "Грязный" : "Dirty" : lang === "ru" ? "Чистый" : "Clean"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-1.5 pr-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-black text-foreground leading-none group-hover:text-primary transition-colors duration-150", children: room.number }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  if (booking && onEditBooking) onEditBooking(booking.id);
                  else onEditRoom(room.number);
                },
                className: "p-1.5 rounded-lg hover:bg-muted transition-opacity duration-150 opacity-0 group-hover:opacity-100",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5 text-muted-foreground" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium text-muted-foreground mb-3 truncate", children: getCategoryLabel(room.category) }),
          roomBookings.length >= 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: booking?.id ?? "",
              onValueChange: (v) => setSelectedByRoom((prev) => ({ ...prev, [room.number]: v })),
              onOpenChange: (open) => {
                if (!open && typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("hotel:stop-focus-glow"));
                }
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 rounded-md text-[10px] font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: roomBookings.map((b) => {
                  const bDirty = b.status === "dirty";
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b.id, className: "text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${bDirty ? "bg-red-500" : "bg-emerald-500"}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
                      formatGuestName(b) || t("person"),
                      " · ",
                      b.checkIn
                    ] })
                  ] }) }, b.id);
                }) })
              ]
            }
          ) }),
          statusCfg ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${statusCfg.tailwindBg} ${statusCfg.tailwindText} ${statusCfg.tailwindBorder} border`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: statusCfg.color } }),
              statusCfg.label[lang]
            ] }),
            booking && (booking.guestName || booking.guestFirstName || booking.guestLastName) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-foreground truncate", children: formatGuestName(booking) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3 w-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  booking.checkIn,
                  " → ",
                  booking.checkOut
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: booking.guestCount })
              ] })
            ] }),
            booking && onShowOnGrid && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: (e) => {
                  e.stopPropagation();
                  onShowOnGrid(booking.id);
                },
                className: "mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary text-[10px] font-bold uppercase tracking-wide px-2 py-1.5 ring-1 ring-primary/20 transition-all duration-200 hover:scale-[1.03]",
                title: t("viewOnGrid"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarRange, { className: "h-3 w-3" }),
                  t("viewOnGrid")
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
            t("available")
          ] })
        ]
      },
      room.number
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4 px-4 pb-4", children: grouped.map(([catId, items]) => {
    const cat = categories.find((c) => c.id === catId);
    const label = cat ? cat.label[lang] || cat.short : catId;
    const short = cat?.short ?? "";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-sm overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between gap-3 px-4 py-3 border-b border-border bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground truncate", children: label }),
              short && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: short })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center min-w-[1.5rem] h-6 px-2 rounded-full bg-primary/10 text-primary text-[11px] font-bold", children: items.length })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 p-3", children: items.map(renderTile) })
        ]
      },
      catId
    );
  }) });
}
function HotelDashboardBody({
  showNavbar = true,
  showFooter = true,
  viewMode: controlledViewMode,
  onViewModeChange
}) {
  const { t } = useI18n();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const isAdminRoute = pathname.startsWith("/admin");
  const { bookings, addBooking, removeBooking, updateBooking } = useBookingsContext();
  const { rooms } = useHotelGrid();
  const [internalViewMode, setInternalViewMode] = reactExports.useState("timeline");
  const viewMode = controlledViewMode ?? internalViewMode;
  const setViewMode = reactExports.useCallback(
    (next) => {
      const resolved = typeof next === "function" ? next(viewMode) : next;
      if (onViewModeChange) onViewModeChange(resolved);
      if (controlledViewMode === void 0) setInternalViewMode(resolved);
    },
    [controlledViewMode, onViewModeChange, viewMode]
  );
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [editRoomNumber, setEditRoomNumber] = reactExports.useState(null);
  const [editBookingId, setEditBookingId] = reactExports.useState(null);
  const [focusBookingId, setFocusBookingId] = reactExports.useState(null);
  const { focusBookingRequest, clearFocusRequest, criticalBookingIds } = useNotifications();
  reactExports.useEffect(() => {
    if (!focusBookingRequest) return;
    setFocusBookingId(focusBookingRequest);
    setViewMode("timeline");
    clearFocusRequest();
  }, [focusBookingRequest]);
  const handleSummarySelect = reactExports.useCallback((filter) => {
    setStatusFilter(filter);
    setViewMode("tiles");
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        document.getElementById("hotel-main-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);
  reactExports.useEffect(() => {
    if (focusBookingId) setViewMode("timeline");
  }, [focusBookingId]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => {
      setStatusFilter("all");
      setViewMode("timeline");
      window.requestAnimationFrame(() => {
        document.getElementById("hotel-main-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };
    window.addEventListener("workspace:reset", handler);
    return () => window.removeEventListener("workspace:reset", handler);
  }, [setViewMode]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (ev) => {
      if (viewMode === "timeline") return;
      const detail = ev.detail;
      setViewMode("timeline");
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          window.dispatchEvent(new CustomEvent("hotel:change-room", { detail }));
        });
      });
    };
    window.addEventListener("hotel:change-room", handler);
    return () => window.removeEventListener("hotel:change-room", handler);
  }, [viewMode, setViewMode]);
  reactExports.useEffect(() => {
    const params = new URLSearchParams(
      typeof search === "string" ? search : new URLSearchParams(search).toString()
    );
    const id = params.get("focus");
    if (!id) return;
    setFocusBookingId(id);
    setViewMode("timeline");
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        document.getElementById("hotel-main-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    navigate({ to: pathname, search: {}, replace: true });
  }, [search]);
  const handleFocusConsumed = reactExports.useCallback(() => {
    setFocusBookingId(null);
  }, []);
  const goToBookingOnGrid = reactExports.useCallback((bookingId) => {
    setViewMode("timeline");
    setFocusBookingId(bookingId);
  }, []);
  const handleAddBooking = reactExports.useCallback((b) => {
    const ok = addBooking(b);
    if (ok) setStatusFilter((prev) => prev !== "all" && prev !== b.status ? "all" : prev);
    return ok;
  }, [addBooking]);
  const handleUpdateBooking = reactExports.useCallback((id, updates) => {
    const ok = updateBooking(id, updates);
    if (ok && updates.status) {
      setStatusFilter((prev) => prev !== "all" && prev !== updates.status ? "all" : prev);
    }
    return ok;
  }, [updateBooking]);
  const handleEditRoom = reactExports.useCallback((roomNumber) => {
    setEditBookingId(null);
    setEditRoomNumber(roomNumber);
  }, []);
  const handleEditBooking = reactExports.useCallback((bookingId) => {
    const b = bookings.find((x) => x.id === bookingId);
    if (!b) return;
    setEditBookingId(bookingId);
    setEditRoomNumber(b.roomNumber);
  }, [bookings]);
  const editingBooking = reactExports.useMemo(() => {
    if (editBookingId) return bookings.find((b) => b.id === editBookingId) ?? null;
    if (editRoomNumber == null) return null;
    const today = startOfDay(/* @__PURE__ */ new Date());
    return bookings.find(
      (b) => b.roomNumber === editRoomNumber && isWithinInterval(today, { start: parseISO(b.checkIn), end: parseISO(b.checkOut) })
    ) ?? null;
  }, [editBookingId, editRoomNumber, bookings]);
  const counts = reactExports.useMemo(() => {
    const c = { all: bookings.length };
    bookings.forEach((booking) => {
      c[booking.status] = (c[booking.status] || 0) + 1;
    });
    return c;
  }, [bookings]);
  const summary = reactExports.useMemo(() => {
    const inHouse = counts["in-house"] || 0;
    const booked = counts.booked || 0;
    const confirmed = counts.confirmed || 0;
    const pending = counts.pending || 0;
    const maintenance = counts.maintenance || 0;
    const checkedOut = counts["checked-out"] || 0;
    const occupied = inHouse + booked + confirmed + pending + maintenance;
    return {
      total: rooms.length,
      available: Math.max(0, rooms.length - occupied),
      confirmed,
      pending,
      booked,
      inHouse,
      checkedOut,
      maintenance
    };
  }, [counts, rooms]);
  const filteredBookings = reactExports.useMemo(() => {
    if (statusFilter === "all") return bookings;
    return bookings.filter((booking) => booking.status === statusFilter);
  }, [bookings, statusFilter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    showNavbar && /* @__PURE__ */ jsxRuntimeExports.jsx(HotelNavbar, { totalRooms: rooms.length, viewMode, onViewModeChange: setViewMode }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HotelSummaryCards, { ...summary, activeFilter: statusFilter, onSelect: handleSummarySelect }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HotelStatusFilter, { activeFilter: statusFilter, onFilterChange: setStatusFilter, counts }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { id: "hotel-main-grid", className: "flex min-h-0 flex-1 flex-col px-4 pb-2 scroll-mt-4 transition-[opacity] duration-300", children: viewMode === "timeline" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      HotelRoomGrid,
      {
        bookings: filteredBookings,
        conflictBookings: bookings,
        onAddBooking: handleAddBooking,
        onDeleteBooking: removeBooking,
        onUpdateBooking: handleUpdateBooking,
        focusBookingId,
        onFocusConsumed: handleFocusConsumed,
        labelWidth: isAdminRoute ? 320 : void 0
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-0 flex-1 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      HotelRoomTileGrid,
      {
        rooms,
        bookings,
        activeFilter: statusFilter,
        selectedDate: /* @__PURE__ */ new Date(),
        onEditRoom: handleEditRoom,
        onShowOnGrid: goToBookingOnGrid,
        onEditBooking: handleEditBooking
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BookingDialog,
      {
        open: editRoomNumber != null,
        onClose: () => {
          setEditRoomNumber(null);
          setEditBookingId(null);
        },
        onSave: (b) => {
          const ok = handleAddBooking(b);
          if (ok !== false) {
            setEditRoomNumber(null);
            setEditBookingId(null);
          }
          return ok;
        },
        onUpdate: handleUpdateBooking,
        onDelete: removeBooking,
        roomNumber: editRoomNumber ?? 0,
        checkIn: editingBooking?.checkIn ?? format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
        checkOut: editingBooking?.checkOut ?? format(addDays(/* @__PURE__ */ new Date(), 1), "yyyy-MM-dd"),
        editBooking: editingBooking
      }
    ),
    showFooter && /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "footer-animate shrink-0 px-4 py-2 text-center text-[11px] text-muted-foreground", children: t("copyright") })
  ] });
}
function HotelDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen flex-col overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HotelDashboardBody, {}) });
}
function AdminPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allow: ["admin"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(HotelDashboard, {}) });
}
export {
  AdminPage as component
};
