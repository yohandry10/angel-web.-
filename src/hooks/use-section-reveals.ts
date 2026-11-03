import { useEffect, type RefObject } from "react";
import { useMotionPreference } from "./use-motion-preference";

type MotionKind = "title" | "image" | "block";
type RevealTarget = { kind: MotionKind; delay: number; animation?: Animation };

/** Progressive, once-per-visit entrances. Only offscreen content is prepared. */
export function useSectionReveals(root: RefObject<HTMLElement | null>) {
  const reducedMotion = useMotionPreference() === "reduced";
  useEffect(() => {
    const scope = root.current;
    if (!scope || !("IntersectionObserver" in window) || typeof scope.animate !== "function")
      return;
    const targets = new Map<HTMLElement, RevealTarget>();
    const seen = new WeakSet<HTMLElement>();
    const easing =
      getComputedStyle(scope).getPropertyValue("--ease-out").trim() ||
      "cubic-bezier(0.23, 1, 0.32, 1)";
    const finish = (element: HTMLElement) => {
      const target = targets.get(element);
      element.dataset.motionState = "visible";
      element.dataset.motionSeen = "true";
      seen.add(element);
      target?.animation?.cancel();
      if (target) target.animation = undefined;
      observer.unobserve(element);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          const target = targets.get(element);
          if (!target || seen.has(element)) continue;
          observer.unobserve(element);
          if (document.hidden) {
            finish(element);
            continue;
          }
          element.dataset.motionState = "entering";
          const first: Keyframe =
            target.kind === "title"
              ? { opacity: 0, transform: "translateY(32px)", clipPath: "inset(0 0 16% 0)" }
              : target.kind === "image"
                ? { opacity: 0, transform: "translateY(24px) scale(0.98)" }
                : { opacity: 0, transform: "translateY(24px)" };
          try {
            const animation = element.animate(
              reducedMotion
                ? [{ opacity: 0.72 }, { opacity: 1 }]
                : [first, { opacity: 1, transform: "none", clipPath: "inset(0)" }],
              {
                duration: reducedMotion ? 320 : target.kind === "block" ? 560 : 720,
                delay: reducedMotion ? 0 : target.delay,
                easing,
                fill: "both",
              },
            );
            target.animation = animation;
            animation.finished.then(() => finish(element)).catch(() => {});
          } catch {
            finish(element);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" },
    );

    const register = (nodes: HTMLElement[]) => {
      // Read geometry together before changing styles.
      const measurements = nodes.map((element) => ({
        element,
        bounds: element.getBoundingClientRect(),
      }));
      let rowTop = -Infinity;
      let column = 0;
      for (const { element, bounds } of measurements) {
        if (targets.has(element)) continue;
        if (Math.abs(bounds.top - rowTop) > 8) {
          rowTop = bounds.top;
          column = 0;
        }
        const delay = Math.min(column++ * 60, 240);
        const kind: MotionKind =
          element.matches("h1,h2") || (element.querySelector("h2") && !element.querySelector("h3"))
            ? "title"
            : element.dataset.reveal === "image"
              ? "image"
              : "block";
        targets.set(element, { kind, delay });
        element.dataset.motionKind = kind;
        // Initial viewport, restored positions and keyboard focus stay immediate.
        if (
          seen.has(element) ||
          !bounds.height ||
          (bounds.top < window.innerHeight - 48 && bounds.bottom > 0)
        ) {
          finish(element);
          continue;
        }
        element.dataset.motionState = "pending";
        observer.observe(element);
      }
    };
    const discover = (container: HTMLElement) => {
      const markers = [
        ...(container.matches("[data-reveal]") ? [container] : []),
        ...container.querySelectorAll<HTMLElement>("[data-reveal]"),
      ];
      for (const marker of markers) {
        if (marker.dataset.reveal === "group" || getComputedStyle(marker).display === "contents")
          register(
            [...marker.children].filter(
              (child): child is HTMLElement => child instanceof HTMLElement,
            ),
          );
        else register([marker]);
      }
    };
    discover(scope);
    // Filters and keyed panels can add content after the first render.
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.removedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          for (const element of targets.keys()) {
            if (node === element || node.contains(element)) {
              targets.get(element)?.animation?.cancel();
              observer.unobserve(element);
              targets.delete(element);
            }
          }
        }
        for (const node of record.addedNodes) if (node instanceof HTMLElement) discover(node);
      }
    });
    mutations.observe(scope, { childList: true, subtree: true });
    const focus = (event: FocusEvent) => {
      if (!(event.target instanceof HTMLElement)) return;
      const element = event.target.closest<HTMLElement>("[data-motion-state]");
      if (element && targets.has(element)) finish(element);
    };
    scope.addEventListener("focusin", focus);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      scope.removeEventListener("focusin", focus);
      targets.forEach((target, element) => {
        target.animation?.cancel();
        delete element.dataset.motionState;
        delete element.dataset.motionKind;
        delete element.dataset.motionSeen;
      });
    };
  }, [root, reducedMotion]);
}
