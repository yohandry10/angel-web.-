import React, { useState } from "react";
import { Ic } from "./Icons";

type IconT = React.ComponentType<{ size?: number; className?: string }>;

interface Effect {
  icon: IconT;
  name: string;
  headline: string;
  status: string;
}

interface Flow {
  id: string;
  tab: string;
  steps: string[];
  trigger: {
    icon: IconT;
    label: string;
    title: string;
    subtitle: string;
    amountLabel: string;
    amount: string;
    code: string;
    note: string;
  };
  top: Effect[];
  bot: Effect[];
}

// Datos de ejemplo. Cada recorrido muestra qué registra el ERP y en qué estado queda cada paso.
const FLOWS: Flow[] = [
  {
    id: "venta",
    tab: "Venta",
    steps: ["Cotización", "Pedido", "Reserva", "Despacho", "Factura", "Cobro"],
    trigger: {
      icon: Ic.cart,
      label: "Pedido aprobado",
      title: "Pedido PV-000482",
      subtitle: "Comercial Norte · COT-0311",
      amountLabel: "Total · crédito 30 días",
      amount: "S/ 4,720.00",
      code: "Lista mayorista",
      note: "Aprobado",
    },
    top: [
      { icon: Ic.boxes, name: "Inventario", headline: "120 u. reservadas en Almacén Central", status: "Reservado" },
      { icon: Ic.globe, name: "Logística", headline: "Orden de preparación, picking y packing", status: "En curso" },
      { icon: Ic.fileCheck, name: "SUNAT · CPE", headline: "Factura y guía de remisión al despachar", status: "Por emitir" },
    ],
    bot: [
      { icon: Ic.bank, name: "Por cobrar", headline: "Saldo con vencimiento a 30 días", status: "Al facturar" },
      { icon: Ic.calc, name: "Contabilidad", headline: "Asiento vinculado a la factura", status: "Al facturar" },
      { icon: Ic.users, name: "Comisiones", headline: "Comisión del vendedor por marca", status: "Calculada" },
    ],
  },
  {
    id: "compra",
    tab: "Compra",
    steps: ["Orden", "Recepción", "Factura del proveedor", "Pago"],
    trigger: {
      icon: Ic.box,
      label: "Recepción registrada",
      title: "Recepción REC-0193",
      subtitle: "Insumos del Sur · OC-0087",
      amountLabel: "Recibido / pedido",
      amount: "80 / 120 u.",
      code: "Almacén Central",
      note: "Parcial",
    },
    top: [
      { icon: Ic.boxes, name: "Inventario", headline: "Entrada al almacén y kardex valorizado", status: "Actualizado" },
      { icon: Ic.receipt, name: "Orden de compra", headline: "40 u. pendientes de recibir", status: "Parcial" },
      { icon: Ic.clock, name: "Historial", headline: "Usuario, fecha y documento de origen", status: "Registrado" },
    ],
    bot: [
      { icon: Ic.fileCheck, name: "Factura proveedor", headline: "Al registrarla nace la cuenta por pagar", status: "Siguiente" },
      { icon: Ic.bank, name: "Por pagar", headline: "Vencimiento y programación del pago", status: "Siguiente" },
      { icon: Ic.calc, name: "Contabilidad", headline: "Asiento de la compra, enlazado a la factura", status: "Siguiente" },
    ],
  },
  {
    id: "devolucion",
    tab: "Devolución",
    steps: ["Solicitud", "Recepción", "Nota de crédito", "Saldo a favor o reembolso"],
    trigger: {
      icon: Ic.layers,
      label: "Devolución recibida",
      title: "RMA-0057",
      subtitle: "Comercial Norte · F001-4123",
      amountLabel: "Recibido / solicitado",
      amount: "3 / 5 u.",
      code: "Motivo: producto dañado",
      note: "Parcial",
    },
    top: [
      { icon: Ic.boxes, name: "Inventario", headline: "Reingreso de 3 u. al almacén", status: "Actualizado" },
      { icon: Ic.receipt, name: "Devolución", headline: "2 u. pendientes de recibir", status: "Parcial" },
      { icon: Ic.fileCheck, name: "SUNAT · CPE", headline: "Nota de crédito electrónica", status: "Por emitir" },
    ],
    bot: [
      { icon: Ic.bank, name: "Saldo a favor", headline: "Crédito disponible para el cliente", status: "Al emitir NC" },
      { icon: Ic.trendUp, name: "Tesorería", headline: "Aplicación a otra factura o reembolso", status: "A elegir" },
      { icon: Ic.calc, name: "Contabilidad", headline: "Asiento vinculado a la nota de crédito", status: "Al emitir NC" },
    ],
  },
  {
    id: "planilla",
    tab: "Planilla",
    steps: ["Asistencia y conceptos", "Planilla", "Boleta", "Pago"],
    trigger: {
      icon: Ic.users,
      label: "Planilla aprobada",
      title: "Planilla octubre 2026",
      subtitle: "24 colaboradores · Sede Lima",
      amountLabel: "Neto a pagar",
      amount: "S/ 68,400.00",
      code: "PLA-2026-10",
      note: "Aprobada",
    },
    top: [
      { icon: Ic.clock, name: "Asistencia", headline: "Horas, tardanzas y vacaciones del mes", status: "Consolidado" },
      { icon: Ic.receipt, name: "Boletas", headline: "Boleta de pago por colaborador", status: "Generadas" },
      { icon: Ic.shield, name: "Beneficios", headline: "CTS y liquidaciones calculadas", status: "Calculado" },
    ],
    bot: [
      { icon: Ic.bank, name: "Tesorería", headline: "Pagos al personal programados", status: "Programado" },
      { icon: Ic.calc, name: "Contabilidad", headline: "Asiento de planilla generado", status: "Generado" },
      { icon: Ic.layers, name: "PLAME · T-Registro", headline: "Información preparada para declarar", status: "Por revisar" },
    ],
  },
];

function TriggerCard({ flow }: { flow: Flow }) {
  const t = flow.trigger;
  const I = t.icon;
  return (
    <div
      className="relative"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--accent)",
        borderRadius: 14,
        boxShadow: "0 0 0 6px color-mix(in oklab, var(--accent) 10%, transparent), 0 24px 48px -20px rgba(42,168,255,0.35)",
      }}
    >
      <div className="px-4 pt-3.5 pb-3">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em]" style={{ color: "var(--accent)" }}>
            <span className="relative inline-grid place-items-center w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full pulse-dot" />
              <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            </span>
            {t.label}
          </span>
          <span className="text-[10px] font-mono text-fg-4">Ejemplo</span>
        </div>

        <div className="mt-3 flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-md grid place-items-center shrink-0"
            style={{ background: "var(--accent-soft)", border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)" }}
          >
            <I size={16} className="text-accent" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] font-semibold text-fg">{t.title}</span>
            <span className="text-[11px] font-mono text-fg-3 truncate">{t.subtitle}</span>
          </div>
        </div>

        <div className="mt-3 flex items-baseline justify-between gap-3">
          <span className="text-[11px] text-fg-3">{t.amountLabel}</span>
          <span className="text-[18px] font-semibold tnum tracking-[-0.02em] text-fg whitespace-nowrap">{t.amount}</span>
        </div>
      </div>

      <div className="border-t border-line px-4 py-2 flex items-center justify-between gap-3" style={{ background: "var(--bg-soft)" }}>
        <span className="text-[10.5px] font-mono text-fg-4 truncate">{t.code}</span>
        <span className="inline-flex items-center gap-1 text-[10.5px] shrink-0" style={{ color: "var(--accent)" }}>
          <Ic.check size={10} />
          {t.note}
        </span>
      </div>
    </div>
  );
}

function EffectCard({ icon: I, name, headline, status }: Effect) {
  return (
    <div
      className="relative px-3.5 py-3 rounded-[10px] lift"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        boxShadow: "0 12px 24px -16px rgba(0,0,0,0.4)",
      }}
    >
      <div className="flex items-center gap-2 min-w-0">
        <span
          className="inline-grid place-items-center w-6 h-6 rounded-md shrink-0"
          style={{ background: "var(--bg-soft)", border: "1px solid var(--line)" }}
        >
          <I size={12} className="text-fg-2" />
        </span>
        <span className="text-[10.5px] font-medium uppercase tracking-[0.08em] text-fg-3">{name}</span>
      </div>
      <div className="mt-2 text-[12.5px] font-medium text-fg leading-snug tracking-tight">{headline}</div>
      <div className="mt-1.5 inline-flex items-center gap-1 text-[10.5px]" style={{ color: "var(--accent)" }}>
        <Ic.check size={9} />
        {status}
      </div>
    </div>
  );
}

function FlowViz({ flow }: { flow: Flow }) {
  const W = 1100,
    H = 460;
  const triggerOut = [320, 230];
  const busX = 380;
  const topRailY = 140;
  const botRailY = 320;

  const TOP_X = [440, 670, 900];
  const BOT_X = [440, 670, 900];
  const cardW = 180;

  const topStubs = TOP_X.map((x) => [x + cardW / 2, topRailY, x + cardW / 2, 120]); // rail to card bottom
  const botStubs = BOT_X.map((x) => [x + cardW / 2, botRailY, x + cardW / 2, 340]); // rail to card top

  return (
    <div className="relative w-full">
      {/* Desktop scene */}
      <div className="hidden lg:block relative mx-auto" style={{ width: W, height: H }}>
        {/* Soft glow under trigger */}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            left: 0,
            top: 130,
            width: 320,
            height: 200,
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(42,168,255,0.22), transparent 70%)",
            filter: "blur(6px)",
          }}
        />

        {/* Connector SVG (under cards) */}
        <svg className="absolute inset-0 pointer-events-none" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="hRailGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="vRailGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5" />
              <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Base (faint) layer */}
          <path d={`M ${triggerOut[0]} ${triggerOut[1]} L ${busX} ${triggerOut[1]}`} stroke="var(--line)" strokeWidth="1.25" fill="none" />
          <path d={`M ${busX} ${topRailY} L ${busX} ${botRailY}`} stroke="var(--line)" strokeWidth="1.25" fill="none" />
          <path d={`M ${busX} ${topRailY} L ${W - 20} ${topRailY}`} stroke="var(--line)" strokeWidth="1.25" fill="none" />
          <path d={`M ${busX} ${botRailY} L ${W - 20} ${botRailY}`} stroke="var(--line)" strokeWidth="1.25" fill="none" />
          {topStubs.map((s, i) => (
            <path key={"ts" + i} d={`M ${s[0]} ${s[1]} L ${s[2]} ${s[3]}`} stroke="var(--line)" strokeWidth="1.25" fill="none" />
          ))}
          {botStubs.map((s, i) => (
            <path key={"bs" + i} d={`M ${s[0]} ${s[1]} L ${s[2]} ${s[3]}`} stroke="var(--line)" strokeWidth="1.25" fill="none" />
          ))}

          {/* Animated pulse layer */}
          <path
            d={`M ${triggerOut[0]} ${triggerOut[1]} L ${busX} ${triggerOut[1]}`}
            stroke="var(--accent)"
            strokeWidth="1.75"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="3 8"
            style={{ animation: "lineFlow 1.6s linear infinite" }}
          />

          <path
            d={`M ${busX} ${triggerOut[1]} L ${busX} ${topRailY}`}
            stroke="url(#vRailGrad)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="3 8"
            style={{ animation: "lineFlowUp 1.6s linear infinite", animationDelay: ".1s" }}
          />
          <path
            d={`M ${busX} ${triggerOut[1]} L ${busX} ${botRailY}`}
            stroke="url(#vRailGrad)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="3 8"
            style={{ animation: "lineFlow 1.6s linear infinite", animationDelay: ".1s" }}
          />

          <path
            d={`M ${busX} ${topRailY} L ${W - 20} ${topRailY}`}
            stroke="url(#hRailGrad)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="3 8"
            style={{ animation: "lineFlow 2s linear infinite", animationDelay: ".25s" }}
          />
          <path
            d={`M ${busX} ${botRailY} L ${W - 20} ${botRailY}`}
            stroke="url(#hRailGrad)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="3 8"
            style={{ animation: "lineFlow 2s linear infinite", animationDelay: ".4s" }}
          />

          {topStubs.map((s, i) => (
            <g key={"tp" + i}>
              <path
                d={`M ${s[0]} ${s[1]} L ${s[2]} ${s[3]}`}
                stroke="var(--accent)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="2 6"
                style={{ animation: "lineFlowUp 1.4s linear infinite", animationDelay: `${0.5 + i * 0.15}s` }}
              />
              <circle cx={s[2]} cy={s[3]} r="3" fill="var(--accent)" />
            </g>
          ))}
          {botStubs.map((s, i) => (
            <g key={"bp" + i}>
              <path
                d={`M ${s[0]} ${s[1]} L ${s[2]} ${s[3]}`}
                stroke="var(--accent)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="2 6"
                style={{ animation: "lineFlow 1.4s linear infinite", animationDelay: `${0.5 + i * 0.15}s` }}
              />
              <circle cx={s[2]} cy={s[3]} r="3" fill="var(--accent)" />
            </g>
          ))}

          {/* Junction dots */}
          <circle cx={busX} cy={topRailY} r="4" fill="var(--accent)" />
          <circle cx={busX} cy={botRailY} r="4" fill="var(--accent)" />
          <circle cx={busX} cy={triggerOut[1]} r="3" fill="var(--accent)" opacity="0.6" />

          {/* Source dot — pulsing ring */}
          <circle cx={triggerOut[0]} cy={triggerOut[1]} r="5" fill="var(--accent)" />
          <circle cx={triggerOut[0]} cy={triggerOut[1]} r="9" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.5">
            <animate attributeName="r" from="6" to="20" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.7" to="0" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Trigger card */}
        <div key={flow.id} className="absolute flow-in" style={{ left: 20, top: 145, width: 280, zIndex: 10 }}>
          <TriggerCard flow={flow} />
        </div>

        {/* Top row cards */}
        {flow.top.map((e, i) => (
          <div
            key={flow.id + "top" + i}
            className="absolute flow-in"
            style={{ left: TOP_X[i], top: 2, width: cardW, zIndex: 10, animationDelay: `${80 + i * 60}ms` }}
          >
            <EffectCard {...e} />
          </div>
        ))}

        {/* Bot row cards */}
        {flow.bot.map((e, i) => (
          <div
            key={flow.id + "bot" + i}
            className="absolute flow-in"
            style={{ left: BOT_X[i], top: 340, width: cardW, zIndex: 10, animationDelay: `${260 + i * 60}ms` }}
          >
            <EffectCard {...e} />
          </div>
        ))}
      </div>

      {/* Mobile fallback — stacked */}
      <div className="lg:hidden flex flex-col gap-3">
        <TriggerCard flow={flow} />
        <div className="relative pl-6 mt-2">
          <div className="absolute left-2 top-1 bottom-1 w-px" style={{ background: "var(--accent)", opacity: 0.4 }} />
          <div className="flex flex-col gap-3">
            {[...flow.top, ...flow.bot].map((e, i) => (
              <div key={flow.id + i} className="relative">
                <span className="absolute -left-[18px] top-4 w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
                <EffectCard {...e} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GuaranteeStrip() {
  const items = [
    { icon: Ic.layers, t: "Trazable hasta el origen", d: "Cada movimiento y asiento enlaza al documento que lo generó." },
    { icon: Ic.shield, t: "Permisos en cada paso", d: "Aprobaciones, excepciones y cierres según rol y establecimiento." },
    { icon: Ic.clock, t: "Historial de acciones", d: "Quién hizo qué, en qué empresa y cuándo." },
  ];
  return (
    <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((g, i) => {
        const I = g.icon;
        return (
          <div
            key={i}
            className="px-5 py-4 rounded-[12px] flex items-start gap-3"
            style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
          >
            <span
              className="inline-grid place-items-center w-9 h-9 rounded-md shrink-0"
              style={{
                background: "var(--accent-soft)",
                border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)",
              }}
            >
              <I size={15} className="text-accent" />
            </span>
            <div>
              <div className="text-[14px] font-semibold text-fg tracking-tight">{g.t}</div>
              <div className="mt-0.5 text-[12.5px] text-fg-3 leading-[1.45]">{g.d}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function EventArchitecture() {
  const [active, setActive] = useState(FLOWS[0].id);
  const flow = FLOWS.find((f) => f.id === active) ?? FLOWS[0];

  return (
    <section id="arquitectura" data-screen-label="04 Cómo funciona" className="relative py-20 sm:py-28 border-t border-line overflow-hidden">
      <div aria-hidden className="absolute inset-0 dot-grid" style={{ opacity: 0.06 }} />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-[52rem]">
          <span className="kicker">Cómo funciona</span>
          <h2 className="mt-4 text-[32px] sm:text-[44px] lg:text-[52px] font-semibold tracking-[-0.035em] leading-[1.04]">
            Una operación alimenta
            <br className="hidden sm:inline" /> <span className="text-fg-3">a las que dependen de ella.</span>
          </h2>
          <p className="mt-6 text-[16px] sm:text-[17px] text-fg-2 leading-[1.6] max-w-[62ch]">
            Cada documento nace del anterior: el pedido reserva el stock, el almacén prepara y despacha, la factura sale del pedido y abre la
            cuenta por cobrar, y la contabilidad recibe el asiento enlazado a su origen. Nadie vuelve a digitar lo mismo, y cada paso conserva
            sus condiciones, permisos y estados.
          </p>
        </div>

        {/* Flow selector */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
          <div
            role="tablist"
            aria-label="Recorridos"
            className="inline-flex self-start p-1 rounded-full max-w-full overflow-x-auto no-scrollbar"
            style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
          >
            {FLOWS.map((f) => {
              const on = f.id === active;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(f.id)}
                  className={"h-8 px-3.5 sm:px-4 rounded-full text-[13px] font-medium transition-colors cursor-pointer shrink-0 " + (on ? "" : "text-fg-3 hover:text-fg")}
                  style={on ? { background: "var(--accent)", color: "#04101c" } : undefined}
                >
                  {f.tab}
                </button>
              );
            })}
          </div>
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-fg-3" aria-label={"Recorrido de " + flow.tab.toLowerCase()}>
            {flow.steps.map((st, i) => (
              <li key={st} className="inline-flex items-center gap-2">
                {i > 0 && <Ic.arrowR size={12} className="text-fg-4" />}
                <span className={i === 0 ? "text-fg" : ""}>{st}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Flow viz */}
        <div className="mt-10 sm:mt-12" role="tabpanel" aria-label={flow.tab}>
          <FlowViz flow={flow} />
        </div>

        {/* Guarantee strip */}
        <GuaranteeStrip />

        <p className="mt-6 text-[12px] text-fg-4 max-w-[80ch]">
          Recorridos ilustrativos con datos de ejemplo. El envío de comprobantes a SUNAT u OSE depende de la configuración fiscal de cada empresa y
          de la respuesta de esos servicios.
        </p>
      </div>
    </section>
  );
}
