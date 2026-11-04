import { useEffect, useSyncExternalStore } from "react";

type MotionMode = "full" | "reduced";
const STORAGE_KEY = "nextelco-motion";
const CHANGE_EVENT = "nextelco:motion";
let sessionChoice: MotionMode | undefined;

function readMotion(): MotionMode {
  if (sessionChoice) return sessionChoice;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "full" || saved === "reduced") return saved;
  } catch {
    /* Private browsing can restrict storage. */
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "reduced" : "full";
}
function subscribe(listener: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", listener);
  window.addEventListener("storage", listener);
  window.addEventListener(CHANGE_EVENT, listener);
  return () => {
    preference.removeEventListener("change", listener);
    window.removeEventListener("storage", listener);
    window.removeEventListener(CHANGE_EVENT, listener);
  };
}
/** Valor real en el navegador desde el primer render; en el servidor, "reduced". No usar para marcado. */
export function currentMotionPreference(): MotionMode {
  return typeof window === "undefined" ? "reduced" : readMotion();
}
export function useMotionPreference() {
  return useSyncExternalStore(subscribe, readMotion, () => "reduced" as MotionMode);
}
export function setMotionPreference(mode: MotionMode) {
  try {
    window.localStorage.setItem(STORAGE_KEY, mode);
    sessionChoice = undefined;
  } catch {
    sessionChoice = mode;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}
export function MotionSettings() {
  const mode = useMotionPreference();
  useEffect(() => {
    document.documentElement.dataset.motion = mode;
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [mode]);
  return null;
}
