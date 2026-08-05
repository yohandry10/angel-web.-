import React, { useState } from "react";
import { Ic } from "./Icons";

interface FAQItem {
  tag: string;
  q: string;
  a: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    tag: "SUNAT",
    q: "¿Konta está homologado por SUNAT?",
    a: "Sí. Operamos como OSE y PSE homologados desde 2023. Emites boleta, factura, nota de crédito, GRE y SIRE con validez fiscal desde el día uno.",
  },
  {
    tag: "Migración",
    q: "¿Migran mi data del ERP actual?",
    a: "Sí, gratis en todos los planes. Importamos productos, clientes, proveedores, saldos contables y comprobantes históricos desde Defontana, Bsale, Siigo, Nubox o Concar. Reporte de calidad incluido.",
  },
  {
    tag: "Implementación",
    q: "¿En cuánto tiempo opero en producción?",
    a: "3 días para PYMES con un solo RUC. 7 a 14 días para empresas medianas con varias sucursales. Incluye configuración del plan contable, conciliación bancaria, series de comprobantes y capacitación por rol.",
  },
  {
    tag: "Offline",
    q: "¿Funciona realmente sin internet?",
    a: "Sí. Nuestra app desktop nativa registra ventas, imprime boletas y opera el POS sin conexión. Cuando vuelve el wifi, todo se sincroniza con SUNAT y la nube en orden. Tu cajero nunca queda parado.",
  },
  {
    tag: "SUNAT",
    q: "¿Qué pasa si SUNAT cambia las reglas o se cae?",
    a: "Cualquier cambio normativo lo absorbemos sin que migres versiones ni pagues extra. Si SUNAT está caído, Konta reintenta automáticamente y deja todo registrado en la auditoría.",
  },
  {
    tag: "Seguridad",
    q: "¿Dónde se aloja mi data y cómo se protege?",
    a: "Servidores en data centers en territorio peruano. Cifrado AES-256 en reposo, TLS 1.3 en tránsito. Cada empresa opera en un espacio aislado a nivel de base de datos — tu información jamás se mezcla con otro cliente.",
  },
  {
    tag: "Soporte",
    q: "¿Tienen Account Manager y SLA?",
    a: "Plan Business: SLA 99.9%, soporte humano 8am–10pm hora Lima. Plan Enterprise: SLA con penalidad económica, cobertura 24/7, Account Manager dedicado y revisión trimestral del servicio.",
  },
  {
    tag: "Planes",
    q: "¿Puedo cancelar o cambiar de plan cuando quiera?",
    a: "Sí, sin penalidad ni período de permanencia. Si bajas de plan o te vas, te exportamos toda tu información en CSV, XML y PDF. Tu data es tuya.",
  },
];

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
    <section id="recursos" data-screen-label="08 FAQ" className="relative py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20 items-start">
          {/* LEFT — sales panel (sticky) */}
          <div className="lg:sticky lg:top-24">
            <span className="kicker">Antes de migrar</span>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[44px] font-semibold tracking-[-0.035em] leading-[1.06]">
              Lo que más preguntan
              <br />
              <span className="text-fg-3">las empresas que migran a Konta.</span>
            </h2>
            <p className="mt-5 text-[15px] text-fg-2 leading-[1.6] max-w-[44ch]">
              Si después de leer esto te queda una duda específica, un especialista te guía en una demo de 20 minutos con tu data real.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row gap-2.5">
              <a href="#trial" className="btn btn-primary">
                Iniciar prueba 14 días
                <Ic.arrowR size={14} className="-mr-1" />
              </a>
              <a href="#demo" className="btn btn-ghost">
                Agendar demo guiada
              </a>
            </div>
            <p className="mt-3 text-[12px] text-fg-4">Sin tarjeta · Migración incluida · Capacitación de tu equipo</p>

            {/* Proof strip */}
            <div className="mt-10 pt-7 border-t border-line grid grid-cols-3 gap-4 max-w-[420px]">
              <div>
                <div className="text-[18px] font-semibold tracking-[-0.025em] tnum text-fg">1,200+</div>
                <div className="text-[10.5px] text-fg-4 uppercase tracking-[0.08em] mt-1">Empresas</div>
              </div>
              <div>
                <div className="text-[18px] font-semibold tracking-[-0.025em] tnum text-fg">S/ 840M</div>
                <div className="text-[10.5px] text-fg-4 uppercase tracking-[0.08em] mt-1">facturados/mes</div>
              </div>
              <div>
                <div className="text-[18px] font-semibold tracking-[-0.025em] tnum text-accent">99.98%</div>
                <div className="text-[10.5px] text-fg-4 uppercase tracking-[0.08em] mt-1">SLA · 12 meses</div>
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
