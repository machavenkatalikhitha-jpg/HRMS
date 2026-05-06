import { injectGtag, trackPageView } from "@/lib/analytics";
import { router } from "@/router";
import { RouterProvider, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

function RouteChangeTracker() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    injectGtag();
  }, []);
  return (
    <RouterProvider
      router={router}
      InnerWrap={({ children }) => (
        <>
          <RouteChangeTracker />
          {children}
        </>
      )}
    />
  );
}
