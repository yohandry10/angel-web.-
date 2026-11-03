import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { applyConsent, getConsent, setConsent } from "@/lib/analytics";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = getConsent();
    if (saved === "granted") applyConsent("granted");
    setVisible(saved === null);
  }, []);

  if (!visible) return null;

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="site-theme cookie-banner fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-xl border border-line bg-background/95 p-5 shadow-2xl backdrop-blur sm:flex sm:items-center sm:gap-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Usamos cookies de medición de Google Analytics y de Google Ads para entender qué páginas
          se visitan y medir las consultas. Solo se activan si aceptas. Más detalles en la{" "}
          <Link to="/privacidad" className="underline text-foreground">
            política de privacidad
          </Link>
          .
        </p>
        <div className="mt-4 flex shrink-0 gap-2 sm:mt-0">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="h-11 rounded-md border border-line px-4 text-sm text-foreground hover:bg-muted"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="h-11 rounded-md bg-foreground px-4 text-sm font-medium text-background hover:opacity-90"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
