import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAudit } from "./AuditContext";
import type { UserRole } from "./auth-types";

export type { UserRole };

interface AuthUser {
  username: string;
  role: UserRole;
  adminId?: string | null;
  displayName?: string;
  loginAt?: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  ready: boolean;
  login: (username: string, password: string) => Promise<{ ok: true; role: UserRole } | { ok: false; error: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

async function loadAuthUser(userId: string): Promise<AuthUser | null> {
  const { data: staffRow } = await supabase.from("staff").select("*").eq("id", userId).single();
  if (!staffRow) return null;
  return {
    username: staffRow.username,
    role: staffRow.role as UserRole,
    adminId: staffRow.id,
    displayName: `${staffRow.first_name} ${staffRow.last_name}`.trim(),
    loginAt: new Date().toISOString(),
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const { log } = useAudit();
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase.auth.getSession();
      const sessionUser = data.session?.user;
      const next = sessionUser ? await loadAuthUser(sessionUser.id) : null;
      if (!cancelled) { setUser(next); setReady(true); }
    })();

    const { data: sub } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_OUT") { setUser(null); return; }
      if (session?.user) {
        const next = await loadAuthUser(session.user.id);
        setUser(next);
      }
    });

    return () => { cancelled = true; sub.subscription.unsubscribe(); };
  }, []);

  const login: AuthContextValue["login"] = useCallback(async (username, password) => {
    const u = username.trim().toLowerCase();
    const { data: email } = await supabase.rpc("resolve_staff_email", { p_username: u });
    if (!email) return { ok: false, error: "Invalid username or password" };

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.session) return { ok: false, error: "Invalid username or password" };

    const next = await loadAuthUser(data.user.id);
    if (!next) return { ok: false, error: "Invalid username or password" };

    setUser(next);
    log({
      actor: { username: next.username, role: next.role, adminId: next.adminId ?? null },
      category: "auth",
      action: "auth.login",
      summary: `${next.displayName} signed in`,
    });
    return { ok: true, role: next.role };
  }, [log]);

  const logout = useCallback(() => {
    if (user) {
      log({
        actor: { username: user.username, role: user.role, adminId: user.adminId ?? null },
        category: "auth",
        action: "auth.logout",
        summary: `${user.displayName ?? user.username} signed out`,
      });
    }
    void supabase.auth.signOut();
    setUser(null);
  }, [user, log]);

  const value = useMemo(() => ({ user, ready, login, logout }), [user, ready, login, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export const ROLE_HOME = {
  admin: "/admin",
} as const satisfies Record<UserRole, string>;