import { useEffect, useRef, useState } from "react";

export function ITCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("$ exec");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const pointer = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(pointer.matches);
    update();
    pointer.addEventListener("change", update);
    return () => pointer.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let mx = -100,
      my = -100;
    let raf = 0;
    let visible = false;
    const nodes = () => [dotRef.current, ringRef.current, labelRef.current];
    const draw = () => {
      raf = 0;
      if (!visible) {
        nodes().forEach((node) => {
          if (node) node.style.opacity = "";
        });
        visible = true;
      }
      if (dotRef.current)
        dotRef.current.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      if (labelRef.current) labelRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    };
    const move = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
      if (!raf) raf = requestAnimationFrame(draw);
    };
    const over = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const custom = event.target.closest<HTMLElement>("[data-cursor]");
      if (custom || event.target.closest("a, button, [role=button], input, textarea")) {
        document.body.classList.add("cursor-hover");
        setLabel(custom?.dataset.cursor || "$ click");
      } else document.body.classList.remove("cursor-hover");
    };
    const down = () => document.body.classList.add("cursor-click");
    const up = () => document.body.classList.remove("cursor-click");
    const leave = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      visible = false;
      nodes().forEach((node) => {
        if (node) node.style.opacity = "0";
      });
      document.body.classList.remove("cursor-hover", "cursor-click");
    };
    const visibility = () => {
      if (document.hidden) leave();
    };
    document.body.classList.add("cursor-ready");
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", move);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", move);
      document.removeEventListener("visibilitychange", visibility);
      document.body.classList.remove("cursor-ready", "cursor-hover", "cursor-click");
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={labelRef} className="cursor-label" aria-hidden="true">
        {label}
      </div>
    </>
  );
}
