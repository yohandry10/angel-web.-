import React from "react";
import { Ic } from "./Icons";
import DashboardMockup from "./DashboardMockup";

const HERO_MODULES = [
  { name: "Ventas", icon: Ic.cart },
  { name: "POS y cajas", icon: Ic.flash },
  { name: "Compras", icon: Ic.box },
  { name: "Inventario", icon: Ic.boxes },
  { name: "PECOSA", icon: Ic.receipt },
  { name: "Logística", icon: Ic.globe },
  { name: "Devoluciones", icon: Ic.layers },
  { name: "Finanzas", icon: Ic.bank },
  { name: "Contabilidad", icon: Ic.calc },
  { name: "CPE · GRE · SIRE · PLE", icon: Ic.fileCheck },
  { name: "RRHH y planillas", icon: Ic.users },
  { name: "Sucursales y permisos", icon: Ic.building },
  { name: "Reportes", icon: Ic.trendUp },
];

export default function Hero() {
  return (
    <section
      id="producto"
      data-screen-label="01 Hero"
      className="relative pt-[112px] sm:pt-[124px] pb-0 overflow-hidden"
    >
      {/* Background */}
      <div aria-hidden className="absolute inset-0 dot-grid hero-fade" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-[700px] accent-glow pointer-events-none" />

      {/* Hero header */}
      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 text-center">
        {/* Compact pill */}
        <a
          href="#modulos"
          className="group inline-flex items-center gap-2 h-7 pl-1 pr-3 rounded-full text-[12px] font-medium transition-colors hover:border-fg-4"
          style={{ background: "var(--surface)", border: "1px solid var(--line)", color: "var(--text-2)" }}
        >
          <span
            className="inline-flex items-center gap-1.5 h-5 px-2 rounded-full"
            style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
          >
            <span className="text-[9.5px] font-semibold uppercase tracking-[0.1em]">Perú</span>
          </span>
          <span className="text-fg-2">Comprobantes y guías electrónicas, SIRE y libros PLE</span>
          <Ic.arrowR size={11} className="text-fg-4 group-hover:translate-x-0.5 transition-transform" />
        </a>

        {/* H1 — proportionate, modern */}
        <h1
          className="mt-6 mx-auto max-w-[22ch] font-semibold tracking-[-0.035em] leading-[1.04] h1-emphasis"
          style={{ fontSize: "clamp(2.125rem, 4.3vw, 3.6rem)" }}
        >
          Ventas, inventario y contabilidad{" "}
          <span className="text-accent">
            conectados<span aria-hidden>.</span>
          </span>
        </h1>

        {/* Sub */}
        <p className="mt-5 mx-auto max-w-[56ch] text-[15.5px] sm:text-[17px] leading-[1.55] text-fg-2">
          Gestiona compras, caja, cobranzas, despachos y planillas desde un mismo ERP, con permisos e historial de cada operación.
        </p>

        {/* CTAs */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <a href="#cta" className="btn btn-primary btn-lg w-full sm:w-auto">
            Solicitar una demo
            <Ic.arrowR size={15} className="-mr-1" />
          </a>
          <a href="#arquitectura" className="btn btn-ghost btn-lg w-full sm:w-auto">
            <span className="inline-grid place-items-center w-5 h-5 rounded-full border border-line">
              <Ic.play size={8} className="ml-[1px]" />
            </span>
            Ver cómo funciona
          </a>
        </div>

        {/* Trust */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[12.5px] text-fg-4">
          <span className="inline-flex items-center gap-1.5">
            <Ic.check size={12} className="text-accent" />
            Más de 100 clientes
          </span>
          <span className="w-1 h-1 rounded-full bg-current opacity-50" />
          <span className="inline-flex items-center gap-1.5">
            <Ic.check size={12} className="text-accent" />
            Web y aplicación de escritorio
          </span>
          <span className="w-1 h-1 rounded-full bg-current opacity-50" />
          <span className="inline-flex items-center gap-1.5">
            <Ic.check size={12} className="text-accent" />
            Equipo y soporte en Lima
          </span>
        </div>

        {/* Todos los módulos, visibles desde el primer pantallazo */}
        <ul className="mt-8 mx-auto max-w-[860px] flex flex-wrap items-center justify-center gap-1.5" aria-label="Módulos de NEXTELCO ERP">
          {HERO_MODULES.map((m) => {
            const I = m.icon;
            return (
              <li key={m.name}>
                <a
                  href="#modulos"
                  className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-full text-[12px] text-fg-2 hover:text-fg transition-colors"
                  style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
                >
                  <I size={12} className="text-accent" />
                  {m.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Product preview — single, clean, with one personality chip */}
      <div className="relative mx-auto max-w-[1080px] px-5 sm:px-8 mt-10 sm:mt-14">
        <div
          aria-hidden
          className="absolute -inset-4 sm:-inset-8 -z-10 rounded-[28px]"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(42,168,255,0.10), transparent 70%)" }}
        />

        <div className="relative">
        <DashboardMockup />

        {/* Single floating chip — restraint */}
        <div
          className="hidden md:flex absolute -bottom-3 right-10 lg:right-16 items-center gap-2 px-3 h-8 rounded-full"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            boxShadow: "0 10px 24px -10px rgba(0,0,0,0.5)",
          }}
        >
          <span className="relative inline-grid place-items-center w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full pulse-dot"></span>
            <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
          </span>
          <span className="text-[11px] font-mono text-fg-3">F001-00004123</span>
          <span className="text-fg-4">→</span>
          <span className="text-[11px] font-mono text-accent">asiento vinculado</span>
        </div>
        </div>
        <p className="mt-6 text-center text-[11.5px] text-fg-4">Vista ilustrativa con datos de demostración.</p>
      </div>
    </section>
  );
}
