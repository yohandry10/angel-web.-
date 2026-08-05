import React from "react";
import { Ic } from "./Icons";

interface CompanyLogoProps {
  name: string;
  size?: number;
}

function CompanyLogo({ name, size = 22 }: CompanyLogoProps) {
  if (name === "Distribuidora Andina") {
    return (
      <span className="inline-flex items-center gap-2 text-fg" style={{ fontSize: size }}>
        <span className="inline-grid place-items-center rounded-[5px] border border-current opacity-90" style={{ width: size + 4, height: size + 4 }}>
          <svg viewBox="0 0 24 24" width={size * 0.55} height={size * 0.55} fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 20l8-14 8 14H4z" />
          </svg>
        </span>
        <span className="font-semibold tracking-[-0.015em]">Andina</span>
        <span className="font-light opacity-60" style={{ fontSize: size * 0.78 }}>
          Distribuidora
        </span>
      </span>
    );
  }
  if (name === "Restaurante Rumi") {
    return (
      <span className="inline-flex items-baseline gap-1.5 text-fg" style={{ fontSize: size }}>
        <span className="font-semibold italic tracking-tight">Rumi</span>
        <span className="opacity-60 uppercase tracking-[0.18em] font-medium" style={{ fontSize: size * 0.5 }}>
          {" "}
          · resto
        </span>
      </span>
    );
  }
  if (name === "Textiles Cusco") {
    return (
      <span className="inline-flex items-center gap-2 text-fg" style={{ fontSize: size }}>
        <svg viewBox="0 0 24 24" width={size * 0.9} height={size * 0.9} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M2 8l4-4 4 4M14 8l4-4 4 4M6 4v16M18 4v16M2 16l4 4 4-4M14 16l4 4 4-4" />
        </svg>
        <span className="font-bold tracking-[0.16em] uppercase" style={{ fontSize: size * 0.72 }}>
          Cusco
        </span>
        <span className="opacity-60 font-light" style={{ fontSize: size * 0.72 }}>
          / textiles
        </span>
      </span>
    );
  }
  return null;
}

function CierreChart() {
  const data = [
    { m: "May", d: 15, before: true },
    { m: "Jun", d: 14, before: true },
    { m: "Jul", d: 13, before: true },
    { m: "Ago", d: 7, before: false },
    { m: "Sep", d: 3, before: false },
    { m: "Oct", d: 2, before: false },
  ];
  const maxD = 15;
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex flex-col">
          <span className="text-[10.5px] font-mono uppercase tracking-[0.14em] text-fg-4">Días al cierre contable</span>
          <span className="mt-1 text-[12px] text-fg-3">Mensual, últimos 6 meses</span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-[32px] font-semibold tracking-[-0.04em] tnum text-accent leading-none">−13</span>
          <span className="text-[12px] text-fg-3">días</span>
        </div>
      </div>

      {/* Bars */}
      <div className="grid grid-cols-6 gap-2 items-end h-[180px]">
        {data.map((b, i) => {
          const h = (b.d / maxD) * 100;
          return (
            <div key={i} className="flex flex-col items-stretch h-full">
              <div className="flex-1 flex flex-col justify-end relative">
                {/* Track */}
                <div className="absolute inset-x-0 bottom-0 top-0 rounded-[4px]" style={{ background: "var(--line-soft)" }} />
                {/* Bar */}
                <div
                  className="relative rounded-[4px] transition-all"
                  style={{
                    height: `${h}%`,
                    background: b.before
                      ? "linear-gradient(180deg, color-mix(in oklab, var(--text-4) 80%, transparent), var(--text-4))"
                      : "linear-gradient(180deg, var(--accent), color-mix(in oklab, var(--accent) 70%, #000))",
                    boxShadow: b.before ? "none" : "0 0 0 1px color-mix(in oklab, var(--accent) 30%, transparent)",
                  }}
                >
                  {/* day label on top */}
                  <span className={"absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono tnum " + (b.before ? "text-fg-4" : "text-accent font-semibold")}>
                    {b.d}d
                  </span>
                </div>
              </div>
              <span className="mt-2 text-[10.5px] font-mono text-center text-fg-4 uppercase">{b.m}</span>
            </div>
          );
        })}
      </div>

      {/* Mini sub-stats */}
      <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-line">
        {[
          { v: "0", l: "Errores SUNAT" },
          { v: "3", l: "Sucursales" },
          { v: "48h", l: "Onboarding" },
        ].map((s, i) => (
          <div key={i}>
            <div className="text-[18px] font-semibold tnum tracking-[-0.02em] text-fg">{s.v}</div>
            <div className="text-[10.5px] text-fg-4 uppercase tracking-[0.08em] mt-0.5">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const supporting = [
    {
      industry: "Gastronomía",
      initials: "CM",
      name: "Carlos Mamani",
      role: "Dueño",
      company: "Restaurante Rumi",
      city: "Arequipa",
      quote: "El POS funciona aunque se caiga el internet del centro comercial. Antes perdíamos ventas, ahora no.",
      metric: { v: "S/ 0", l: "ventas perdidas en 6 meses" },
      logo: "Restaurante Rumi",
    },
    {
      industry: "Textil",
      initials: "LV",
      name: "Lucía Vargas",
      role: "Contadora",
      company: "Textiles Cusco",
      city: "Trujillo",
      quote: "Los asientos automáticos son tan precisos que SUNAT no nos ha observado nada en 8 meses.",
      metric: { v: "8 meses", l: "sin observaciones SUNAT" },
      logo: "Textiles Cusco",
    },
    {
      industry: "Construcción",
      initials: "RT",
      name: "Renzo Torres",
      role: "Director de Finanzas",
      company: "Constructora Mochica",
      city: "Chiclayo",
      quote: "Cerramos cuatro obras al mismo tiempo y cada una tiene su propio P&L en tiempo real. No es magia.",
      metric: { v: "4 proyectos", l: "consolidados en tiempo real" },
      logo: null,
    },
  ];

  return (
    <section id="clientes" data-screen-label="07 Clientes" className="relative py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-[36rem]">
            <span className="kicker">Clientes</span>
            <h2 className="mt-4 text-[32px] sm:text-[44px] lg:text-[52px] font-semibold tracking-[-0.035em] leading-[1.04]">
              Las empresas peruanas que operan limpio.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[13px] text-fg-3">
            <span className="tnum text-fg font-medium">1,200+</span>
            <span className="text-fg-4">negocios activos</span>
            <span className="w-1 h-1 rounded-full bg-fg-4 mx-1" />
            <span className="tnum text-fg font-medium">S/ 840M</span>
            <span className="text-fg-4">facturados/mes</span>
          </div>
        </div>

        {/* Featured case */}
        <div className="mt-12 rounded-[16px] border border-line overflow-hidden" style={{ background: "var(--surface)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
            {/* LEFT: quote */}
            <div className="relative p-7 sm:p-10 lg:p-12 flex flex-col">
              {/* industry pill */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono uppercase tracking-[0.14em] text-fg-4">
                  <span className="w-1 h-1 rounded-full" style={{ background: "var(--accent)" }} />
                  Caso destacado · Retail · Lima
                </span>
                <CompanyLogo name="Distribuidora Andina" size={16} />
              </div>

              {/* Big quote — editorial */}
              <blockquote className="mt-10 sm:mt-12 text-[24px] sm:text-[28px] lg:text-[32px] font-medium tracking-[-0.025em] leading-[1.22] text-fg max-w-[20ch]">
                <span aria-hidden className="select-none text-accent mr-1">
                  &ldquo;
                </span>
                Cerrábamos contabilidad el día 15. Ahora cerramos el día 2. Konta nos devolvió <span className="text-accent">13 días al mes</span>.
                <span aria-hidden className="select-none text-accent ml-0.5">
                  &rdquo;
                </span>
              </blockquote>

              {/* Author */}
              <div className="mt-auto pt-10 sm:pt-12 flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full grid place-items-center text-[13px] font-semibold shrink-0"
                  style={{ background: "var(--accent)", color: "#04101c" }}
                >
                  AQ
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[14px] font-semibold text-fg">Andrea Quispe</span>
                  <span className="text-[12.5px] text-fg-3">Gerente · Distribuidora Andina</span>
                </div>
                <a
                  href="#caso-andina"
                  className="ml-auto inline-flex items-center gap-1.5 text-[12.5px] text-fg-2 hover:text-accent transition-colors"
                >
                  Caso completo
                  <Ic.arrowUpR size={11} />
                </a>
              </div>
            </div>

            {/* RIGHT: viz */}
            <div className="relative p-7 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-line" style={{ background: "var(--bg-soft)" }}>
              <CierreChart />
            </div>
          </div>
        </div>

        {/* Supporting cards */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {supporting.map((t, i) => (
            <figure
              key={i}
              className="rounded-[14px] border border-line p-6 sm:p-7 flex flex-col lift"
              style={{ background: "var(--surface)" }}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono uppercase tracking-[0.14em] text-fg-4">
                  <span className="w-1 h-1 rounded-full" style={{ background: "var(--accent)" }} />
                  {t.industry}
                </span>
                {t.logo && <CompanyLogo name={t.logo} size={13} />}
              </div>

              <blockquote className="mt-6 text-[15.5px] leading-[1.55] text-fg-2">&ldquo;{t.quote}&rdquo;</blockquote>

              {/* Metric row */}
              <div
                className="mt-5 inline-flex items-baseline gap-2 self-start px-3 py-1.5 rounded-md"
                style={{ background: "var(--bg-soft)", border: "1px solid var(--line-soft)" }}
              >
                <span className="text-[16px] font-semibold tracking-[-0.02em] tnum text-accent">{t.metric.v}</span>
                <span className="text-[11px] text-fg-3">{t.metric.l}</span>
              </div>

              <figcaption className="mt-7 pt-5 flex items-center gap-3 border-t border-line-soft">
                <div
                  className="w-9 h-9 rounded-full grid place-items-center text-[11px] font-semibold shrink-0"
                  style={{ background: "var(--surface-2)", border: "1px solid var(--line)", color: "var(--text-2)" }}
                >
                  {t.initials}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[12.5px] font-semibold text-fg">{t.name}</span>
                  <span className="text-[11px] text-fg-4">
                    {t.role} · {t.company} · {t.city}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href="#casos"
            className="inline-flex items-center gap-2 px-4 h-10 rounded-full border border-line text-[13px] text-fg-2 hover:text-fg hover:border-fg-4 transition-colors"
          >
            Ver todos los casos
            <Ic.arrowR size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
