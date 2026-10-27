import React from "react";
import { Ic } from "./Icons";

export default function FinalCTA() {
  return (
    <section id="cta" data-screen-label="09 Final CTA" className="relative border-t border-line overflow-hidden">
      <div aria-hidden className="absolute inset-0 dot-grid-strong" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, transparent 30%, var(--bg) 80%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 40% 60% at 50% 50%, rgba(42,168,255,0.12), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 py-[100px] sm:py-[120px] text-center">
        <span className="kicker justify-center">Demo</span>
        <h2 className="mt-5 max-w-[20ch] mx-auto font-semibold tracking-[-0.04em] leading-[1.04]" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
          Mira tu operación conectada en NEXTELCO ERP.
        </h2>
        <p className="mt-6 max-w-[44ch] mx-auto text-[16px] sm:text-[18px] text-fg-2 leading-[1.55]">
          Revisamos cómo vendes, compras, almacenas, cobras y pagas planillas, y te mostramos ese recorrido en el sistema.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:operaciones@nextelco.cloud?subject=Quiero%20una%20demo%20de%20NEXTELCO%20ERP"
            className="btn btn-primary btn-lg"
          >
            Solicitar una demo
            <Ic.arrowR size={15} className="-mr-1" />
          </a>
          <a
            href="mailto:operaciones@nextelco.cloud?subject=Consulta%20sobre%20NEXTELCO%20ERP"
            className="btn btn-ghost btn-lg"
          >
            Hacer una consulta
          </a>
        </div>

        <p className="mt-5 text-[12.5px] text-fg-4">operaciones@nextelco.cloud · Equipo en Lima, Perú</p>
      </div>
    </section>
  );
}
