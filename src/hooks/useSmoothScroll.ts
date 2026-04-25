import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const handleScrollToTop = () => {
      lenis.scrollTo(0, { immediate: true, force: true });
    };

    window.addEventListener("app:scroll-to-top", handleScrollToTop as EventListener);

    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("app:scroll-to-top", handleScrollToTop as EventListener);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
