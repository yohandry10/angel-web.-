import React from "react";
import { Ic } from "./Icons";

function TriggerCard() {
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
            Operación en vivo
          </span>
          <span className="text-[10px] font-mono text-fg-4">14:23:08</span>
        </div>

        <div className="mt-3 flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-md grid place-items-center"
            style={{ background: "var(--accent-soft)", border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)" }}
          >
            <Ic.cart size={16} className="text-accent" />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-semibold text-fg">Venta confirmada</span>
            <span className="text-[11px] font-mono text-fg-3">POS · Tienda Surco</span>
          </div>
        </div>

        <div className="mt-3 flex items-baseline justify-between">
          <span className="text-[11px] text-fg-3">Total + IGV</span>
          <span className="text-[18px] font-semibold tnum tracking-[-0.02em] text-fg">S/ 1,180.00</span>
        </div>
      </div>

      <div className="border-t border-line px-4 py-2 flex items-center justify-between" style={{ background: "var(--bg-soft)" }}>
        <span className="text-[10.5px] font-mono text-fg-4">F001-00001234</span>
        <span className="inline-flex items-center gap-1 text-[10.5px] font-mono" style={{ color: "var(--accent)" }}>
          <Ic.zap size={10} />1 click
        </span>
      </div>
    </div>
  );
}

interface EffectCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  headline: string;
  latency: string;
  position?: "top" | "bot";
}

function EffectCard({ icon: I, name, headline, latency }: EffectCardProps) {
  return (
    <div
      className="relative px-3.5 py-3 rounded-[10px] lift"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        boxShadow: "0 12px 24px -16px rgba(0,0,0,0.4)",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="inline-grid place-items-center w-6 h-6 rounded-md shrink-0"
            style={{ background: "var(--bg-soft)", border: "1px solid var(--line)" }}
          >
            <I size={12} className="text-fg-2" />
          </span>
          <span className="text-[10.5px] font-medium uppercase tracking-[0.08em] text-fg-3 truncate">{name}</span>
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] font-mono tnum shrink-0" style={{ color: "var(--accent)" }}>
          <Ic.check size={9} />
          {latency}
        </span>
      </div>
      <div className="mt-2 text-[12.5px] font-medium text-fg leading-snug tracking-tight">{headline}</div>
    </div>
  );
}

const TOP_ROW = [
  { icon: Ic.calc, name: "Contabilidad", headline: "Asiento doble partida generado", latency: "180ms" },
  { icon: Ic.boxes, name: "Inventario", headline: "Stock actualizado en sucursal", latency: "92ms" },
  { icon: Ic.fileCheck, name: "SUNAT · CPE", headline: "Factura electrónica aceptada", latency: "198ms" },
];

const BOT_ROW = [
  { icon: Ic.bank, name: "Cuentas por cobrar", headline: "Crédito a 30 días registrado", latency: "44ms" },
  { icon: Ic.trendUp, name: "Tesorería", headline: "Flujo de caja proyectado", latency: "21ms" },
  { icon: Ic.cpu, name: "Dashboard", headline: "KPIs en vivo refrescados", latency: "12ms" },
];

function FlowViz() {
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
        <div className="absolute" style={{ left: 20, top: 145, width: 280, zIndex: 10 }}>
          <TriggerCard />
        </div>

        {/* Top row cards */}
        {TOP_ROW.map((e, i) => (
          <div key={"top" + i} className="absolute" style={{ left: TOP_X[i], top: 20, width: cardW, zIndex: 10 }}>
            <EffectCard {...e} position="top" />
          </div>
        ))}

        {/* Bot row cards */}
        {BOT_ROW.map((e, i) => (
          <div key={"bot" + i} className="absolute" style={{ left: BOT_X[i], top: 340, width: cardW, zIndex: 10 }}>
            <EffectCard {...e} position="bot" />
          </div>
        ))}
      </div>

      {/* Mobile fallback — stacked */}
      <div className="lg:hidden flex flex-col gap-3">
        <TriggerCard />
        <div className="relative pl-6 mt-2">
          <div className="absolute left-2 top-1 bottom-1 w-px" style={{ background: "var(--accent)", opacity: 0.4 }} />
          <div className="flex flex-col gap-3">
            {[...TOP_ROW, ...BOT_ROW].map((e, i) => (
              <div key={i} className="relative">
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
    { icon: Ic.shield, t: "Ni un dato perdido", d: "Cada operación se confirma antes de avanzar." },
    { icon: Ic.zap, t: "Reintenta sola", d: "Si SUNAT se cae, Konta vuelve a intentarlo." },
    { icon: Ic.clock, t: "Auditoría completa", d: "Quién, qué y cuándo. Rastreable al milisegundo." },
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
  return (
    <section id="arquitectura" data-screen-label="05 Cómo funciona" className="relative py-20 sm:py-28 border-t border-line overflow-hidden">
      <div aria-hidden className="absolute inset-0 dot-grid" style={{ opacity: 0.06 }} />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-[52rem]">
          <span className="kicker">Cómo funciona</span>
          <h2 className="mt-4 text-[32px] sm:text-[44px] lg:text-[52px] font-semibold tracking-[-0.035em] leading-[1.04]">
            Una operación. Todo tu negocio,
            <br className="hidden sm:inline" /> <span className="text-fg-3">en sincronía.</span>
          </h2>
          <p className="mt-6 text-[16px] sm:text-[17px] text-fg-2 leading-[1.6] max-w-[60ch]">
            Cuando emites una venta, una compra o un comprobante, todos los módulos de Konta se actualizan al mismo tiempo: contabilidad, inventario,
            SUNAT, cuentas por cobrar y tu dashboard. Sin re-digitar, sin Excel intermedio, sin esperar a fin de mes.
          </p>
        </div>

        {/* Flow viz */}
        <div className="mt-14 sm:mt-16">
          <FlowViz />
        </div>

        {/* Guarantee strip */}
        <GuaranteeStrip />
      </div>
    </section>
  );
}
