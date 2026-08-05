import React from "react";
import { Ic } from "./Icons";
import { KontaLogo } from "./Nav";

export default function Footer() {
  const cols = [
    { title: "Producto", links: ["Módulos", "Precios", "Integraciones", "Changelog", "Roadmap"] },
    { title: "Empresa", links: ["Sobre Konta", "Clientes", "Blog", "Carreras", "Contacto"] },
    { title: "Recursos", links: ["Documentación", "API", "Centro de ayuda", "Status", "Comunidad"] },
    { title: "Legal", links: ["Términos", "Privacidad", "Cookies", "Seguridad"] },
  ];

  return (
    <footer data-screen-label="10 Footer" className="relative border-t border-line">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand col */}
          <div className="col-span-2">
            <KontaLogo size={28} />
            <p className="mt-5 text-[13.5px] text-fg-3 leading-[1.55] max-w-[28ch]">
              El ERP peruano operativo por evento. Hecho para empresas que quieren operar limpio.
            </p>
            <p className="mt-3 text-[13px] text-fg-3">
              Producto estrella de{" "}
              <a href="/" className="text-accent font-semibold hover:underline">NEXTELCO</a>.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="pill" style={{ height: 24, fontSize: 11 }}>
                <Ic.shield size={11} className="text-accent" />
                SUNAT OSE/PSE
              </span>
              <span className="pill" style={{ height: 24, fontSize: 11 }}>
                <Ic.check size={11} className="text-accent" />
                Ley 29733
              </span>
            </div>
          </div>

          {cols.map((c, i) => (
            <div key={i}>
              <h3 className="text-[11.5px] font-medium uppercase tracking-[0.14em] text-fg-4">{c.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {c.links.map((l, j) => (
                  <li key={j}>
                    <a href="#" className="text-[13.5px] text-fg-2 hover:text-fg transition-colors">
                      {l}
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
            <span>© 2026 Konta · un producto de NEXTELCO</span>
            <span className="text-fg-4">·</span>
            <span className="font-mono tnum">RUC 20612345678</span>
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

          <div className="flex items-center gap-2">
            <a
              href="#status"
              className="inline-flex items-center gap-1.5 px-2.5 h-7 rounded-full border border-line text-[11.5px] text-fg-3 hover:text-fg transition-colors"
            >
              <span className="relative inline-grid place-items-center w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full pulse-dot"></span>
                <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              </span>
              Todos los sistemas operativos
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-grid place-items-center w-8 h-8 rounded-md border border-line text-fg-3 hover:text-fg transition-colors"
            >
              <Ic.linkedin size={13} />
            </a>
            <a
              href="#"
              aria-label="X"
              className="inline-grid place-items-center w-8 h-8 rounded-md border border-line text-fg-3 hover:text-fg transition-colors"
            >
              <Ic.x_twit size={12} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="inline-grid place-items-center w-8 h-8 rounded-md border border-line text-fg-3 hover:text-fg transition-colors"
            >
              <Ic.youtube size={13} />
            </a>
            <button className="ml-1 inline-flex items-center gap-1.5 px-2.5 h-8 rounded-md border border-line text-[12px] text-fg-2 hover:text-fg transition-colors cursor-pointer">
              <Ic.globe size={12} />
              ES · PE
              <Ic.chevD size={11} />
            </button>
          </div>
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
            Konta.pe
          </div>
        </div>
      </div>
    </footer>
  );
}
