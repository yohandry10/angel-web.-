import React from "react";
import { Ic } from "./Icons";

interface KpiProps {
  label: string;
  value: string;
  delta: string;
  up?: boolean;
  muted?: boolean;
}

function Kpi({ label, value, delta, up = true, muted = false }: KpiProps) {
  return (
    <div className="rounded-lg border border-line px-3 py-2.5" style={{ background: "var(--bg-soft)" }}>
      <div className="text-[10.5px] text-fg-4">{label}</div>
      <div className="mt-1 flex items-baseline justify-between gap-2">
        <span className="text-[15px] font-semibold text-fg tnum tracking-tight">{value}</span>
      </div>
      <div className="mt-1 flex items-center gap-1">
        {!muted && up && <Ic.trendUp size={10} className="text-accent" />}
        {!muted && !up && <Ic.trendDown size={10} className="text-fg-3" />}
        <span className={"text-[10px] tnum " + (muted ? "text-fg-4" : (up ? "text-accent" : "text-fg-3"))}>{delta}</span>
      </div>
    </div>
  );
}

export default function DashboardMockup() {
  // Bar chart data — 7 days
  const bars = [
    { d: "Lun", v: 38 },
    { d: "Mar", v: 52 },
    { d: "Mié", v: 44 },
    { d: "Jue", v: 67 },
    { d: "Vie", v: 81 },
    { d: "Sáb", v: 92 },
    { d: "Dom", v: 58 },
  ];
  const maxV = Math.max(...bars.map((b) => b.v));

  const modules = [
    { name: "Inicio", icon: Ic.cpu, active: false, ai: false },
    { name: "Ventas", icon: Ic.cart, active: true, ai: false },
    { name: "Compras", icon: Ic.box, active: false, ai: false },
    { name: "Contabilidad", icon: Ic.calc, active: false, ai: true },
    { name: "Finanzas", icon: Ic.bank, active: false, ai: false },
    { name: "Inventario", icon: Ic.boxes, active: false, ai: false },
    { name: "CPE SUNAT", icon: Ic.fileCheck, active: false, ai: false },
  ];

  const entries = [
    { code: "F001-1234", concept: "Venta · Distribuidora Andina", amount: "S/ 1,180.00", time: "hace 12s" },
    { code: "F001-1233", concept: "Venta · Ferretería El Sol", amount: "S/ 480.00", time: "hace 1 min" },
    { code: "B001-0023", concept: "Venta POS · Restaurante Rumi", amount: "S/ 89.50", time: "hace 3 min" },
  ];

  return (
    <div
      className="relative w-full rounded-[14px] border border-line overflow-hidden"
      style={{
        background: "var(--surface)",
        boxShadow: "0 1px 0 0 var(--line) inset, 0 30px 60px -25px rgba(0,0,0,0.45), 0 12px 30px -15px rgba(42,168,255,0.10)",
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 h-10 px-3.5 border-b border-line" style={{ background: "var(--surface-2)" }}>
        <div className="flex items-center gap-1.5">
          <span className="traffic-dot" style={{ background: "#ff5f56" }} />
          <span className="traffic-dot" style={{ background: "#ffbd2e" }} />
          <span className="traffic-dot" style={{ background: "#27c93f" }} />
        </div>
        <div className="flex-1 mx-2">
          <div
            className="mx-auto max-w-[280px] h-[22px] rounded-md border border-line flex items-center justify-center gap-1.5 px-2"
            style={{ background: "var(--bg)" }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fg-3">
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            <span className="text-[11px] tracking-tight text-fg-3 font-mono">app.konta.pe/dashboard</span>
          </div>
        </div>
        <div className="text-fg-4 hidden sm:flex items-center gap-2">
          <Ic.search size={12} />
        </div>
      </div>

      {/* App body */}
      <div className="flex" style={{ height: 420 }}>
        {/* Sidebar */}
        <aside
          className="hidden sm:flex flex-col w-[180px] border-r border-line py-3 px-2.5 gap-0.5"
          style={{ background: "var(--bg-soft)" }}
        >
          <div className="px-2 pb-2 flex items-center gap-2">
            <div className="w-6 h-6 rounded-[5px] grid place-items-center" style={{ background: "var(--accent)" }}>
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
                <path
                  d="M7 4v16M7 12l8-8M7 12l9 8"
                  stroke="#04101c"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <span className="text-[12.5px] font-semibold text-fg">Konta</span>
          </div>
          <div className="px-2 pt-1 pb-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-fg-4">Módulos</div>
          {modules.map((m, i) => {
            const ItemIcon = m.icon;
            return (
              <div
                key={i}
                className={
                  "flex items-center gap-2 px-2 h-7 rounded-md text-[12px] cursor-default " +
                  (m.active ? "text-fg" : "text-fg-2 hover:text-fg")
                }
                style={m.active ? { background: "var(--surface-2)", boxShadow: "inset 0 0 0 1px var(--line)" } : {}}
              >
                <ItemIcon size={13} className={m.active ? "text-accent" : "text-fg-3"} />
                <span className="flex-1 truncate">{m.name}</span>
                {m.ai && (
                  <span
                    className="text-[9px] font-semibold px-1.5 h-4 inline-flex items-center rounded"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  >
                    AI
                  </span>
                )}
              </div>
            );
          })}
          <div className="mt-auto px-2 pt-2 border-t border-line-soft flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full grid place-items-center text-[10px] font-semibold"
              style={{ background: "var(--accent)", color: "#04101c" }}
            >
              AQ
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-medium text-fg">Andrea Q.</span>
              <span className="text-[9.5px] text-fg-4">Distribuidora Andina</span>
            </div>
          </div>
        </aside>

        {/* Main pane */}
        <main className="flex-1 overflow-hidden no-scrollbar relative">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 sm:px-5 h-11 border-b border-line">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[12px] text-fg-4">Ventas</span>
              <span className="text-fg-4">/</span>
              <span className="text-[12px] font-medium text-fg truncate">Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="pill" style={{ height: 22, fontSize: 10.5, padding: "0 8px" }}>
                <span className="relative inline-grid place-items-center w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full pulse-dot"></span>
                  <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                </span>
                En vivo
              </span>
              <span className="text-fg-3">
                <Ic.bell size={13} />
              </span>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-4 sm:px-5 pt-4">
            <Kpi label="Ventas hoy" value="S/ 12,450" delta="+18%" up />
            <Kpi label="CPE emitidos" value="47" delta="+9" up muted />
            <Kpi label="Caja" value="S/ 4,280" delta="−2%" up={false} muted />
            <Kpi label="Por cobrar" value="S/ 18,990" delta="−4 días" muted />
          </div>

          {/* Chart + journal */}
          <div className="grid grid-cols-1 sm:grid-cols-[1.1fr_1fr] gap-3 px-4 sm:px-5 mt-4">
            {/* Chart card */}
            <div className="rounded-lg border border-line p-3.5" style={{ background: "var(--bg-soft)" }}>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[11px] text-fg-3">Ventas últimos 7 días</span>
                  <span className="text-[14px] font-semibold text-fg tnum mt-0.5">S/ 84,320</span>
                </div>
                <span className="text-[10.5px] font-mono text-accent tnum">+24.6%</span>
              </div>
              <div className="mt-3.5 flex items-end gap-2 h-[100px]">
                {bars.map((b, i) => {
                  const h = (b.v / maxV) * 100;
                  const isPeak = b.v === maxV;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                      <div className="w-full relative" style={{ height: 90 }}>
                        <div
                          className="absolute bottom-0 left-0 right-0 bar-grow rounded-[3px]"
                          style={{
                            height: `${h}%`,
                            background: isPeak ? "var(--accent)" : "var(--line)",
                            animationDelay: `${i * 60}ms`,
                          }}
                        />
                      </div>
                      <span className={"text-[9.5px] " + (isPeak ? "text-accent font-medium" : "text-fg-4")}>{b.d}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Journal */}
            <div className="rounded-lg border border-line p-3.5" style={{ background: "var(--bg-soft)" }}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-fg-3">Asientos generados automáticamente</span>
                <span className="inline-flex items-center gap-1 text-[10px] text-accent">
                  <Ic.flash size={10} className="text-accent" />
                  auto
                </span>
              </div>
              <div className="mt-2.5 flex flex-col">
                {entries.map((e, i) => (
                  <div
                    key={i}
                    className={"flex items-center justify-between py-2 " + (i < entries.length - 1 ? "border-b border-line-soft" : "")}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className="w-6 h-6 rounded-md border border-line grid place-items-center"
                        style={{ background: "var(--surface)" }}
                      >
                        <Ic.fileCheck size={11} className="text-accent" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[11px] font-mono text-fg tnum">{e.code}</span>
                        <span className="text-[10px] text-fg-4 truncate">{e.concept}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[11px] font-medium text-fg tnum">{e.amount}</span>
                      <span className="text-[9.5px] text-fg-4">{e.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
