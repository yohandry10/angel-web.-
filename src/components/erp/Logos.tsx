import React from "react";

const LogoWords = [
  {
    name: "Distribuidora Andina",
    el: (
      <span className="inline-flex items-center gap-2">
        <span className="inline-grid place-items-center w-5 h-5 rounded-[3px] border border-current opacity-80">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 20l8-14 8 14H4z" />
          </svg>
        </span>
        <span className="font-semibold tracking-tight">Andina</span>
        <span className="font-light opacity-70">Distribuidora</span>
      </span>
    ),
  },
  {
    name: "Ferretería El Sol",
    el: (
      <span className="inline-flex items-center gap-2">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3.4" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        </svg>
        <span className="font-semibold tracking-tight">El Sol</span>
      </span>
    ),
  },
  {
    name: "Restaurante Rumi",
    el: (
      <span className="inline-flex items-baseline gap-1">
        <span className="font-serif italic text-[1.15em] font-semibold">Rumi</span>
        <span className="text-[0.7em] uppercase tracking-[0.2em] opacity-70 -ml-0.5">·resto</span>
      </span>
    ),
  },
  {
    name: "Textiles Cusco",
    el: (
      <span className="inline-flex items-center gap-2">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M2 8l4-4 4 4M14 8l4-4 4 4M6 4v16M18 4v16M2 16l4 4 4-4M14 16l4 4 4-4" />
        </svg>
        <span className="font-bold tracking-[0.18em] uppercase text-[0.8em]">Cusco</span>
        <span className="font-light text-[0.8em] opacity-70">/ textiles</span>
      </span>
    ),
  },
  {
    name: "Botica Inka",
    el: (
      <span className="inline-flex items-center gap-2">
        <span className="inline-grid place-items-center w-5 h-5 rounded-full border-[1.5px] border-current text-[10px] font-bold">+</span>
        <span className="font-semibold tracking-tight">Inka</span>
      </span>
    ),
  },
  {
    name: "Servicios Pacífico",
    el: (
      <span className="inline-flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 6c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
        </svg>
        <span className="font-semibold tracking-tight">Pacífico</span>
      </span>
    ),
  },
  {
    name: "Constructora Mochica",
    el: (
      <span className="inline-flex items-center gap-2">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 21V8l9-5 9 5v13" />
          <path d="M9 21v-7h6v7" />
        </svg>
        <span className="font-bold tracking-[0.04em]">MOCHICA</span>
      </span>
    ),
  },
];

export default function Logos() {
  return (
    <section id="clientes" data-screen-label="02 Logos" className="relative py-16 sm:py-20 border-t border-line-soft">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="text-center">
          <p className="text-[12.5px] font-mono uppercase tracking-[0.16em] text-fg-4">
            Operando <span className="text-fg-2">1,200+</span> negocios en Perú
          </p>
        </div>

        <div className="mt-10 marquee-mask overflow-hidden">
          <div className="marquee-track flex items-center gap-12 sm:gap-16 whitespace-nowrap w-max">
            {[...LogoWords, ...LogoWords].map((l, i) => (
              <div key={i} className="text-fg-3 hover:text-fg-2 transition-colors text-[16px] sm:text-[17px] shrink-0">
                {l.el}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
