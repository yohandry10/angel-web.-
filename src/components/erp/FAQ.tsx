import React, { useState } from "react";
import { Ic } from "./Icons";
import { FAQ_ITEMS, type FAQItem } from "./faq-data";

interface FaqItemProps {
  item: FAQItem;
  open: boolean;
  onToggle: () => void;
  index: number;
}

function FaqItem({ item, open, onToggle, index }: FaqItemProps) {
  return (
    <div className="border-b border-line">
      <button onClick={onToggle} aria-expanded={open} className="w-full text-left py-5 flex items-center gap-4 group cursor-pointer">
        <span className={"text-[11px] font-mono tnum tracking-[0.06em] shrink-0 transition-colors " + (open ? "text-accent" : "text-fg-4")}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={"flex-1 text-[15.5px] sm:text-[16px] font-medium tracking-[-0.005em] transition-colors " + (open ? "text-fg" : "text-fg")}>
          {item.q}
        </span>
        <span
          className={
            "shrink-0 inline-grid place-items-center w-7 h-7 rounded-full border transition-all " +
            (open ? "border-accent bg-accent" : "border-line group-hover:border-fg-4")
          }
        >
          <Ic.plus
            size={12}
            className={"transition-transform duration-300 " + (open ? "rotate-45" : "")}
            style={{ color: open ? "#04101c" : "var(--text-3)" }}
          />
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-300 ease-out" style={{ maxHeight: open ? 320 : 0, opacity: open ? 1 : 0 }}>
        <div className="pl-10 pr-12 pb-6 max-w-[60ch]">
          <p className="text-[14px] text-fg-3 leading-[1.6]">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(-1);

  return (
    <section id="faq" data-screen-label="08 FAQ" className="relative py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20 items-start">
          {/* LEFT — sales panel (sticky) */}
          <div className="lg:sticky lg:top-24">
            <span className="kicker">Antes de implementar</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[44px] font-semibold tracking-[-0.035em] leading-[1.06]">
              Lo que más preguntan
              <br />
              <span className="text-fg-3">antes de implementar NEXTELCO ERP.</span>
            </h2>
            <p className="mt-5 text-[15px] text-fg-2 leading-[1.6] max-w-[44ch]">
              Si te queda una duda específica, te mostramos el sistema en una demo con un recorrido de tu propia operación.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row gap-2.5">
              <a href="#cta" className="btn btn-primary">
                Solicitar una demo
                <Ic.arrowR size={14} className="-mr-1" />
              </a>
              <a href="#modulos" className="btn btn-ghost">
                Ver módulos
              </a>
            </div>
            <p className="mt-3 text-[12px] text-fg-4">Implementación acompañada · Capacitación por rol · Equipo en Lima</p>

            {/* Proof strip */}
            <div className="mt-10 pt-7 border-t border-line grid grid-cols-3 gap-4 max-w-[420px]">
              <div>
                <div className="text-[18px] font-semibold tracking-[-0.025em] tnum text-fg">100+</div>
                <div className="text-[10.5px] text-fg-4 uppercase tracking-[0.08em] mt-1">Clientes</div>
              </div>
              <div>
                <div className="text-[18px] font-semibold tracking-[-0.025em] tnum text-fg">16</div>
                <div className="text-[10.5px] text-fg-4 uppercase tracking-[0.08em] mt-1">Módulos</div>
              </div>
              <div>
                <div className="text-[18px] font-semibold tracking-[-0.025em] tnum text-accent">3</div>
                <div className="text-[10.5px] text-fg-4 uppercase tracking-[0.08em] mt-1">Países: PE · AR · CO</div>
              </div>
            </div>
          </div>

          {/* RIGHT — accordion */}
          <div>
            <div className="border-t border-line">
              {FAQ_ITEMS.map((item, i) => (
                <FaqItem key={i} item={item} index={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
