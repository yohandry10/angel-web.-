import React, { useState } from "react";
import { Ic } from "./Icons";
import { FAQ_ITEMS, type FAQItem } from "./faq-data";
import { DEMO_WA_URL } from "@/lib/erp-contact";

interface FaqItemProps {
  item: FAQItem;
  open: boolean;
  onToggle: () => void;
  index: number;
}

function FaqItem({ item, open, onToggle, index }: FaqItemProps) {
  return (
    <div className="border-b border-line">
      <button
        id={`erp-faq-question-${index}`}
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`erp-faq-answer-${index}`}
        className="w-full text-left py-5 flex items-center gap-4 group cursor-pointer"
      >
        <span
          className={
            "flex-1 text-[15.5px] sm:text-[16px] font-medium tracking-[-0.005em] transition-colors " +
            (open ? "text-fg" : "text-fg")
          }
        >
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
            style={{ color: open ? "var(--on-accent)" : "var(--text-3)" }}
          />
        </span>
      </button>
      <div
        id={`erp-faq-answer-${index}`}
        hidden={!open}
        role="region"
        aria-labelledby={`erp-faq-question-${index}`}
      >
        <div className="pr-10 pb-6 max-w-[60ch]">
          <p className="text-[15px] text-fg-2 leading-[1.65]">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(-1);

  return (
    <section
      id="faq"
      data-screen-label="08 FAQ"
      className="relative py-20 sm:py-28 border-t border-line"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20 items-start">
          {/* LEFT — sales panel (sticky) */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-[32px] sm:text-[36px] lg:text-[44px] font-semibold tracking-[-0.035em] leading-[1.06]">
              Antes de implementar.
            </h2>
            <p className="mt-5 text-[15px] text-fg-2 leading-[1.6] max-w-[44ch]">
              Si te queda una duda específica, te mostramos el sistema en una demo con un recorrido
              de tu propia operación.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row gap-2.5">
              <a
                href={DEMO_WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Solicitar una demo
                <Ic.arrowR size={14} className="-mr-1" />
              </a>
              <a href="#modulos" className="btn btn-ghost">
                Ver módulos
              </a>
            </div>
            <p className="mt-3 text-[12px] text-fg-4">
              Implementación acompañada · Capacitación por rol · Equipo en Lima
            </p>
          </div>

          {/* RIGHT — accordion */}
          <div>
            <div className="border-t border-line">
              {FAQ_ITEMS.map((item, i) => (
                <FaqItem
                  key={i}
                  item={item}
                  index={i}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
