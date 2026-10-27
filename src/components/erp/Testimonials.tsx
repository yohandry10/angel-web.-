import React from "react";
import { Ic } from "./Icons";

type IconT = React.ComponentType<{ size?: number; className?: string }>;

// Recorrido de ejemplo de un pedido mayorista: cada línea es un documento real del ERP.
const TRACE: { icon: IconT; doc: string; label: string; detail: string; state: "done" | "partial" | "next" }[] = [
  { icon: Ic.receipt, doc: "COT-0311", label: "Cotización aprobada", detail: "Precio especial autorizado por gerencia", state: "done" },
  { icon: Ic.cart, doc: "PV-000482", label: "Pedido", detail: "Crédito del cliente validado", state: "done" },
  { icon: Ic.boxes, doc: "RES-000482", label: "Stock reservado", detail: "120 u. · Almacén Central", state: "done" },
  { icon: Ic.globe, doc: "DES-0219", label: "Despacho parcial", detail: "80 de 120 u. · 40 pendientes", state: "partial" },
  { icon: Ic.fileCheck, doc: "F001 · T001", label: "Factura y guía de remisión", detail: "Por lo despachado", state: "partial" },
  { icon: Ic.bank, doc: "CxC", label: "Cuenta por cobrar", detail: "Vence a 30 días", state: "next" },
  { icon: Ic.calc, doc: "Asiento", label: "Contabilidad", detail: "Vinculado a la factura", state: "next" },
];

function OrderTrace() {
  return (
    <div className="w-full">
      <div className="flex items-baseline justify-between mb-5">
        <div className="flex flex-col">
          <span className="text-[10.5px] font-mono uppercase tracking-[0.14em] text-fg-4">Recorrido de un pedido</span>
          <span className="mt-1 text-[12px] text-fg-3">Ejemplo con datos de demostración</span>
        </div>
        <span className="text-[12px] text-fg-3">
          <span className="text-accent font-semibold tnum">7</span> documentos enlazados
        </span>
      </div>

      <ol className="relative flex flex-col">
        <span aria-hidden className="absolute left-[15px] top-3 bottom-3 w-px" style={{ background: "var(--line)" }} />
        {TRACE.map((t) => {
          const I = t.icon;
          const color = t.state === "done" ? "var(--accent)" : t.state === "partial" ? "color-mix(in oklab, var(--accent) 55%, var(--text-3))" : "var(--text-4)";
          return (
            <li key={t.doc} className="relative flex items-start gap-3 py-2">
              <span
                className="relative z-10 inline-grid place-items-center w-8 h-8 rounded-md shrink-0"
                style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
              >
                <I size={14} className={t.state === "next" ? "text-fg-4" : "text-accent"} />
              </span>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className={"text-[13.5px] font-medium " + (t.state === "next" ? "text-fg-3" : "text-fg")}>{t.label}</span>
                  <span className="text-[10.5px] font-mono text-fg-4 shrink-0">{t.doc}</span>
                </div>
                <div className="mt-0.5 text-[12px]" style={{ color }}>
                  {t.detail}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function Testimonials() {
  const useCases = [
    {
      industry: "Retail y mostrador",
      title: "Tiendas que venden en caja y a crédito",
      text: "Cada caja abre y cierra su sesión, registra cobros por medio de pago y controla diferencias. La venta descuenta stock del almacén del local y llega a finanzas y contabilidad.",
      modules: ["POS y cajas", "Inventario", "Finanzas"],
    },
    {
      industry: "Construcción y proyectos",
      title: "Compras y salidas de almacén por obra",
      text: "Órdenes de compra con aprobación, recepciones parciales y PECOSA para entregar materiales a cada frente. Los centros de costo muestran el resultado por proyecto.",
      modules: ["Compras", "PECOSA", "Centros de costo"],
    },
    {
      industry: "Empresas con personal",
      title: "De la asistencia a la boleta",
      text: "Horarios, asistencia y vacaciones alimentan la planilla; salen las boletas, se programan los pagos y se prepara la información para PLAME y T-Registro.",
      modules: ["RRHH", "Planillas", "Tesorería"],
    },
  ];

  return (
    <section id="clientes" data-screen-label="06 Clientes" className="relative py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-[36rem]">
            <span className="kicker">Clientes</span>
            <h2 className="mt-4 text-[32px] sm:text-[44px] lg:text-[52px] font-semibold tracking-[-0.035em] leading-[1.04]">
              Empresas que operan con orden.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[13px] text-fg-3">
            <span className="tnum text-fg font-medium">100+</span>
            <span className="text-fg-4">clientes en Perú</span>
          </div>
        </div>

        {/* Featured case */}
        <div className="mt-12 rounded-[16px] border border-line overflow-hidden" style={{ background: "var(--surface)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
            {/* LEFT: the case */}
            <div className="relative p-7 sm:p-10 lg:p-12 flex flex-col">
              <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono uppercase tracking-[0.14em] text-fg-4">
                <span className="w-1 h-1 rounded-full" style={{ background: "var(--accent)" }} />
                Caso de uso · Distribución mayorista
              </span>

              <p className="mt-10 sm:mt-12 text-[24px] sm:text-[28px] lg:text-[32px] font-medium tracking-[-0.025em] leading-[1.22] text-fg max-w-[22ch]">
                Del pedido al cobro, <span className="text-accent">sin volver a digitar</span>.
              </p>
              <p className="mt-6 text-[15px] leading-[1.6] text-fg-2 max-w-[52ch]">
                Una distribuidora con varios almacenes cotiza y aprueba precios especiales, convierte la cotización en pedido y reserva el
                stock. El almacén prepara y despacha por partes, la factura y la guía salen del mismo pedido y la cobranza se sigue por
                vencimiento. Lo que falta atender queda a la vista.
              </p>

              <div className="mt-auto pt-10 sm:pt-12 flex flex-wrap items-center gap-2">
                {["Ventas", "Inventario", "Logística", "Documentos SUNAT", "Finanzas", "Contabilidad"].map((m) => (
                  <span key={m} className="pill" style={{ height: 26, fontSize: 11.5 }}>
                    {m}
                  </span>
                ))}
                <a
                  href="#cta"
                  className="ml-auto inline-flex items-center gap-1.5 text-[12.5px] text-fg-2 hover:text-accent transition-colors"
                >
                  Verlo con tu operación
                  <Ic.arrowUpR size={11} />
                </a>
              </div>
            </div>

            {/* RIGHT: viz */}
            <div className="relative p-7 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-line" style={{ background: "var(--bg-soft)" }}>
              <OrderTrace />
            </div>
          </div>
        </div>

        {/* Supporting cards */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {useCases.map((t) => (
            <article
              key={t.industry}
              className="rounded-[14px] border border-line p-6 sm:p-7 flex flex-col lift"
              style={{ background: "var(--surface)" }}
            >
              <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono uppercase tracking-[0.14em] text-fg-4">
                <span className="w-1 h-1 rounded-full" style={{ background: "var(--accent)" }} />
                {t.industry}
              </span>

              <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.01em] text-fg">{t.title}</h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-fg-2">{t.text}</p>

              <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
                {t.modules.map((m) => (
                  <span
                    key={m}
                    className="inline-flex items-center h-6 px-2 rounded-md text-[11px] text-fg-3"
                    style={{ background: "var(--bg-soft)", border: "1px solid var(--line-soft)" }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-4 h-10 rounded-full border border-line text-[13px] text-fg-2 hover:text-fg hover:border-fg-4 transition-colors"
          >
            Agenda una demo con un recorrido de tu empresa
            <Ic.arrowR size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
