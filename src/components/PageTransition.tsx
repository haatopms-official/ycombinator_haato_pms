import { Outlet, useRouterState } from "@tanstack/react-router";

/**
 * Snappy route transition: a lightweight fade (no blur, no layout-shift),
 * mounted without AnimatePresence so the new page renders immediately
 * instead of waiting for the previous page to exit. This eliminates the
 * perceived "lag" when navigating between pages of the admin panel.
 */
export function PageTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div
      key={pathname}
      className="workspace-page-transition"
      style={{ willChange: "opacity, transform" }}
    >
      <Outlet />
    </div>
  );
}
