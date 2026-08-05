import React, { useState } from "react";
import { Ic } from "./Icons";

interface Tier {
  name: string;
  tag: string;
  monthly: number | null;
  cta: string;
  ctaStyle: string;
  popular?: boolean;
  features: string[];
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const tiers: Tier[] = [
    {
      name: "Starter",
      tag: "Para empezar",
      monthly: 99,
      cta: "Empezar gratis",
      ctaStyle: "ghost",
      features: [
        "1 usuario, 1 sucursal",
        "500 CPE por mes",
        "Boleta y factura electrónica",
        "Plan contable peruano",
        "Soporte por email",
      ],
    },
    {
      name: "Business",
      tag: "Lo que crece contigo",
      monthly: 299,
      cta: "Probar 14 días",
      ctaStyle: "primary",
      popular: true,
      features: [
        "5 usuarios, 3 sucursales",
        "CPE ilimitado",
        "Contabilidad automática en tiempo real",
        "Modo offline real (desktop Tauri)",
        "Conciliación bancaria automática",
        "Soporte en español 8am–10pm",
      ],
    },
    {
      name: "Enterprise",
      tag: "Para tu empresa",
      monthly: null,
      cta: "Hablar con ventas",
      ctaStyle: "ghost",
      features: [
        "Usuarios ilimitados",
        "Multi-empresa, multi-RUC",
        "API + webhooks",
        "SLA 99.9% con penalidad",
        "Onboarding dedicado",
        "Soporte 24/7 con account manager",
      ],
    },
  ];

  const fmt = (n: number) => (annual ? Math.round(n * 0.8) : n);

  return (
    <section id="precios" data-screen-label="06 Precios" className="relative py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="text-center max-w-[44rem] mx-auto">
          <span className="kicker">Precios</span>
          <h2 className="mt-4 text-[32px] sm:text-[44px] lg:text-[52px] font-semibold tracking-[-0.035em] leading-[1.04]">
            Empieza con lo justo. Crece sin pagar de más.
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] text-fg-2 leading-[1.55]">
            Precios en soles. Sin contratos largos. Migra gratis desde tu sistema actual.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-9 flex items-center justify-center gap-3">
          <span className={"text-[13.5px] font-medium " + (annual ? "text-fg-3" : "text-fg")}>Mensual</span>
          <div
            role="switch"
            aria-checked={annual}
            tabIndex={0}
            onClick={() => setAnnual((a) => !a)}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                setAnnual((a) => !a);
              }
            }}
            className="toggle-track cursor-pointer"
            data-on={annual}
          >
            <span className="toggle-thumb" />
          </div>
          <span className={"text-[13.5px] font-medium " + (annual ? "text-fg" : "text-fg-3")}>Anual</span>
          <span
            className="inline-flex items-center gap-1 px-2 h-6 rounded-full text-[11px] font-medium"
            style={{
              background: "var(--accent-soft)",
              color: "var(--accent)",
              border: "1px solid color-mix(in oklab, var(--accent) 30%, transparent)",
            }}
          >
            Ahorra 20%
          </span>
        </div>

        {/* Tiers */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={"relative rounded-[14px] p-7 sm:p-8 flex flex-col " + (t.popular ? "" : "lift")}
              style={{
                background: "var(--surface)",
                border: "1px solid " + (t.popular ? "var(--accent)" : "var(--line)"),
                boxShadow: t.popular ? "0 0 0 1px var(--accent), 0 30px 60px -30px rgba(42,168,255,0.25)" : "none",
              }}
            >
              {t.popular && (
                <span
                  className="absolute -top-3 left-7 inline-flex items-center gap-1 px-2.5 h-6 rounded-full text-[11px] font-semibold"
                  style={{ background: "var(--accent)", color: "#04101c" }}
                >
                  <Ic.spark size={10} /> Más popular
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <span className="text-[17px] font-semibold tracking-tight text-fg">{t.name}</span>
                <span className="text-[12px] text-fg-4">{t.tag}</span>
              </div>
              <div className="mt-6 flex items-baseline gap-1.5 min-h-[64px]">
                {t.monthly !== null ? (
                  <>
                    <span className="text-[14px] text-fg-3 font-medium">S/</span>
                    <span className="text-[52px] font-semibold tracking-[-0.04em] text-fg tnum leading-none">{fmt(t.monthly)}</span>
                    <span className="text-[13px] text-fg-3">/mes</span>
                  </>
                ) : (
                  <span className="text-[42px] font-semibold tracking-[-0.04em] text-fg leading-none font-sans">Conversemos</span>
                )}
              </div>
              {annual && t.monthly !== null && (
                <p className="-mt-1 text-[12px] text-fg-4">
                  Facturado anualmente como <span className="tnum">S/ {(fmt(t.monthly) * 12).toLocaleString("es-PE")}</span>
                </p>
              )}

              <a href="#" className={"btn mt-6 w-full " + (t.ctaStyle === "primary" ? "btn-primary" : "btn-ghost")}>
                {t.cta} {t.ctaStyle === "primary" && <Ic.arrowR size={14} className="-mr-1" />}
              </a>

              <div className="mt-7 pt-6 border-t border-line">
                <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-fg-4 mb-4">Incluye</p>
                <ul className="flex flex-col gap-3">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[13.5px] text-fg-2 leading-[1.45]">
                      <Ic.check size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[12.5px] text-fg-4">IGV incluido · Cancela cuando quieras · Sin penalidad por cambiar de plan</p>
      </div>
    </section>
  );
}
