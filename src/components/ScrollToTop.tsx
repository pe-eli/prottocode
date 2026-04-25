import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetTop();
    requestAnimationFrame(resetTop);
    const timeoutId = window.setTimeout(resetTop, 80);
    window.dispatchEvent(new CustomEvent("app:scroll-to-top"));

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
