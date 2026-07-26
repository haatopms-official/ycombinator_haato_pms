import { useEffect, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useAudit } from "@/contexts/AuditContext";
import { computeShiftWindow } from "@/contexts/ShiftContext";

const SWEEP_MS = 20_000;

/**
 * Automatically signs admins out at the shift change times (06:00 and
 * 18:00 local time). A per-session timer force-logs-out the current tab
 * the moment its own shift ends; a global sweep, mounted unconditionally,
 * scans the audit log for any admin whose latest 'auth' event is a login
 * past its shift boundary with no matching logout, and closes it out.
 */
export function ShiftWatcher() {
  const { user, logout } = useAuth();
  const { events, log } = useAudit();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!user) return;
    if (user.role !== "admin") return;

    const scheduleNext = () => {
      const now = new Date();
      const candidates = [6, 18].map((h) => {
        const d = new Date(now);
        d.setHours(h, 0, 0, 0);
        if (d.getTime() <= now.getTime()) d.setDate(d.getDate() + 1);
        return d.getTime();
      });
      const nextAt = Math.min(...candidates);
      const delay = Math.max(1000, nextAt - now.getTime());
      timerRef.current = setTimeout(() => { logout(); }, delay);
    };

    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = null;
    };
  }, [user, logout]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sweep = () => {
      const now = Date.now();
      const authEvents = events.filter((e) => e.category === "auth" && e.actor.role === "admin");
      const latest = new Map<string, (typeof authEvents)[number]>();
      for (const ev of authEvents) {
        const key = ev.actor.adminId ?? ev.actor.username;
        const prev = latest.get(key);
        if (!prev || new Date(ev.at).getTime() > new Date(prev.at).getTime()) {
          latest.set(key, ev);
        }
      }
      for (const e of latest.values()) {
        if (e.action !== "auth.login") continue;
        const shiftEnd = computeShiftWindow(new Date(e.at)).end;
        if (now < shiftEnd.getTime()) continue;

        log({
          actor: { username: e.actor.username, role: "admin", adminId: e.actor.adminId ?? null },
          category: "auth",
          action: "auth.logout",
          summary: `${e.actor.username} was automatically signed out (shift ended)`,
        });
      }
    };

    sweep();
    const id = window.setInterval(sweep, SWEEP_MS);
    return () => window.clearInterval(id);
  }, [events, log]);

  return null;
}