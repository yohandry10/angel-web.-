import React from "react";
import { ErpLogo } from "./Nav";

export default function Footer() {
  const cols = [
    {
      title: "Producto",
      links: [
        { label: "Cómo funciona", href: "#arquitectura" },
        { label: "Módulos", href: "#modulos" },
        { label: "Clientes", href: "#clientes" },
        { label: "Preguntas frecuentes", href: "#faq" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre NEXTELCO", href: "/" },
        { label: "Experiencia", href: "/experiencia" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { label: "Solicitar una demo", href: "#cta" },
        { label: "operaciones@nextelco.cloud", href: "mailto:operaciones@nextelco.cloud" },
      ],
    },
  ];

  return (
    <footer data-screen-label="10 Footer" className="relative border-t border-line">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="col-span-2">
            <ErpLogo size={28} />
            <p className="mt-5 text-[13.5px] text-fg-3 leading-[1.55] max-w-[28ch]">
              Ventas, compras, inventario, logística, finanzas, contabilidad y planillas conectados en un mismo ERP.
            </p>
            <p className="mt-3 text-[13px] text-fg-3">
              Producto estrella de{" "}
              <a href="/" className="text-accent font-semibold hover:underline">NEXTELCO</a>.
            </p>
          </div>

          {cols.map((c, i) => (
            <div key={i}>
              <h3 className="text-[11.5px] font-medium uppercase tracking-[0.14em] text-fg-4">{c.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {c.links.map((l, j) => (
                  <li key={j}>
                    <a href={l.href} className="text-[13.5px] text-fg-2 hover:text-fg transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-[12px] text-fg-4 flex-wrap">
            <span>© 2026 NEXTELCO ERP · un producto de NEXTELCO</span>
            <span className="text-fg-4">·</span>
            <span className="inline-flex items-center gap-1.5">
              Hecho en Lima, Perú
              <span className="inline-flex items-center" aria-label="Bandera del Perú">
                <span className="inline-block w-1.5 h-3 rounded-[1px]" style={{ background: "#D91023" }} />
                <span className="inline-block w-1.5 h-3" style={{ background: "#fff" }} />
                <span className="inline-block w-1.5 h-3 rounded-[1px]" style={{ background: "#D91023" }} />
              </span>
            </span>
          </div>

          <a href="/" className="text-[12px] text-fg-3 hover:text-fg transition-colors">
            nextelco.cloud
          </a>
        </div>

        {/* Giant wordmark */}
        <div aria-hidden className="mt-14 -mb-2 overflow-hidden select-none pointer-events-none">
          <div
            className="text-center font-semibold tracking-[-0.06em] leading-none whitespace-nowrap"
            style={{
              fontSize: "clamp(80px, 18vw, 240px)",
              background: "linear-gradient(180deg, var(--line) 0%, transparent 90%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            NEXTELCO ERP
          </div>
        </div>
      </div>
    </footer>
  );
}
