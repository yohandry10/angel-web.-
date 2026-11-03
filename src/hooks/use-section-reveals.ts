import { useEffect, type RefObject } from "react";

/** First-visit marketing entrances. Content stays visible if scripting is unavailable. */
export function useSectionReveals(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const scope = root.current;
    if (!scope || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);
          element.dataset.motionSeen = "true";
          const stagger = Number(element.dataset.revealDelay ?? 0);
          const animation = element.animate(
            preference.matches
              ? [{ opacity: 0.7 }, { opacity: 1 }]
              : [
                  { opacity: 0, transform: "translateY(16px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
            {
              duration: preference.matches ? 160 : 500,
              delay: preference.matches ? 0 : stagger,
              easing: "cubic-bezier(0.23, 1, 0.32, 1)",
            },
          );
          animations.add(animation);
          animation.finished.then(() => animations.delete(animation)).catch(() => {});
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
    );
    scope
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((element) => observer.observe(element));
    const cancelMotion = () => animations.forEach((animation) => animation.cancel());
    preference.addEventListener("change", cancelMotion);
    return () => {
      observer.disconnect();
      cancelMotion();
      preference.removeEventListener("change", cancelMotion);
    };
  }, [root]);
}
