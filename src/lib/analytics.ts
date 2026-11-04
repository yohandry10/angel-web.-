/** ID de medición público de GA4 (no es una clave secreta). */
export const GA_ID = "G-BTGMELQLZJ";

const CONSENT_KEY = "nextelco-consent";
let sessionConsent: Consent | null = null;
let measurementStarted = false;

export type Consent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Lee la elección guardada. Si el navegador bloquea el almacenamiento, devuelve null. */
export function getConsent(): Consent | null {
  if (sessionConsent !== null) return sessionConsent;
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
  sessionConsent = value;
  if (value !== "granted") {
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      // gtag.js solo procesa el objeto `arguments`; un array con rest params se ignora.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  if (!measurementStarted) {
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
  window.gtag("consent", "update", { analytics_storage: "granted" });
  if (measurementStarted) return;
  measurementStarted = true;
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

/** Un clic de contacto no equivale a una conversación ni a un formulario enviado. */
export function startContactTracking() {
  const onClick = (event: MouseEvent) => {
    if (event.defaultPrevented || !(event.target instanceof Element)) return;
    const link = event.target.closest<HTMLAnchorElement>("a[href]");
    if (!link || getConsent() !== "granted" || !window.gtag) return;

    let url: URL;
    try {
      url = new URL(link.href, window.location.href);
    } catch {
      return;
    }

    let method: "whatsapp" | "phone" | "email";
    if (
      url.protocol === "https:" &&
      (url.hostname === "wa.me" || url.hostname === "api.whatsapp.com")
    ) {
      method = "whatsapp";
    } else if (url.protocol === "tel:") {
      method = "phone";
    } else if (url.protocol === "mailto:") {
      method = "email";
    } else {
      return;
    }

    // No se envían números, correos, mensajes prellenados ni parámetros de la URL.
    window.gtag("event", `${method}_click`, {
      contact_method: method,
      page_path: window.location.pathname,
      transport_type: "beacon",
    });
  };

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
