/** ID de medición público de GA4 (no es una clave secreta). */
export const GA_ID = "G-BTGMELQLZJ";

const CONSENT_KEY = "nextelco-consent";

export type Consent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Lee la elección guardada. Si el navegador bloquea el almacenamiento, devuelve null. */
export function getConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function saveConsent(value: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* sin almacenamiento: la elección vale solo para esta visita */
  }
}

function loadGoogleTag() {
  if (document.getElementById("ga-script")) return;
  const s = document.createElement("script");
  s.id = "ga-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

/** Activa la medición solo si la persona aceptó. Sin aceptación no se carga nada de Google. */
export function applyConsent(value: Consent) {
  if (value !== "granted") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  loadGoogleTag();
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

export function setConsent(value: Consent) {
  saveConsent(value);
  applyConsent(value);
}

/** Conversión: un formulario enviado. No hace nada si la persona no aceptó. */
export function trackLead() {
  if (getConsent() !== "granted" || !window.gtag) return;
  window.gtag("event", "generate_lead", { page_location: window.location.href });
}
