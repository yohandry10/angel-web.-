import React from "react";
import { Ic } from "./Icons";
import { DEMO_WA_URL } from "@/lib/erp-contact";

export default function FinalCTA() {
  return (
    <section id="cta" data-screen-label="09 Final CTA" className="relative border-t border-line bg-surface overflow-hidden">
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 py-[100px] sm:py-[120px] text-center">
        <h2 className="section-title max-w-[20ch] mx-auto">
          Mira tu operación conectada en NEXTELCO ERP.
        </h2>
        <p className="mt-6 max-w-[44ch] mx-auto text-[16px] sm:text-[18px] text-fg-2 leading-[1.55]">
          Revisamos cómo vendes, compras, almacenas, cobras y pagas planillas, y te mostramos ese recorrido en el sistema.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={DEMO_WA_URL} target="_blank" rel="noopener noreferrer"
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
