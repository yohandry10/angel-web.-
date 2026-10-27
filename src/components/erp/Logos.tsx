import React from "react";
import { Ic } from "./Icons";

// Tipos de operación que cubre el ERP. No son logotipos de clientes.
const SECTORS = [
  { name: "Distribución mayorista", icon: Ic.boxes },
  { name: "Retail y mostrador", icon: Ic.cart },
  { name: "Ferreterías", icon: Ic.box },
  { name: "Restaurantes", icon: Ic.flash },
  { name: "Construcción", icon: Ic.building },
  { name: "Manufactura", icon: Ic.layers },
  { name: "Importación", icon: Ic.globe },
  { name: "Servicios con personal", icon: Ic.users },
];

export default function Logos() {
  return (
    <section id="confianza" data-screen-label="02 Logos" className="relative py-16 sm:py-20 border-t border-line-soft">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="text-center">
          <p className="text-[12.5px] font-mono uppercase tracking-[0.16em] text-fg-4">
            Más de <span className="text-fg-2">100 clientes</span> operan con NEXTELCO ERP
          </p>
        </div>

        <div className="mt-10 marquee-mask overflow-hidden">
          <div className="marquee-track flex items-center gap-12 sm:gap-16 whitespace-nowrap w-max">
            {[...SECTORS, ...SECTORS].map((s, i) => {
              const I = s.icon;
              return (
                <div
                  key={i}
                  aria-hidden={i >= SECTORS.length}
                  className="inline-flex items-center gap-2 text-fg-3 hover:text-fg-2 transition-colors text-[16px] sm:text-[17px] font-medium tracking-tight shrink-0"
                >
                  <I size={16} />
                  {s.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
