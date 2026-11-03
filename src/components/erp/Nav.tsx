import React, { useState, useEffect } from "react";
import { Ic } from "./Icons";
import { DEMO_WA_URL } from "@/lib/erp-contact";
import { BrandLogo } from "@/components/BrandLogo";

export function ErpLogo({ size = 28, withWordmark = true, className = "" }: { size?: number; withWordmark?: boolean; className?: string }) {
  // Mismo logotipo que el sitio corporativo; "ERP" indica el producto.
  return (
    <div className={"inline-flex items-center gap-2.5 " + className}>
      <BrandLogo />
      {withWordmark && (
        <span className="hidden rounded-md border border-line px-1.5 py-0.5 text-[11px] font-medium leading-none text-fg-2 sm:inline">ERP</span>
      )}
    </div>
  );
}
export default function Nav({ theme, onThemeChange }: {
  theme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    onThemeChange(next);
  };

  // Mismo orden en el que aparecen las secciones en la página
  const links = [
    { label: "Producto", href: "#producto" },
    { label: "Cómo funciona", href: "#arquitectura" },
    { label: "Módulos", href: "#modulos" },
    { label: "Clientes", href: "#clientes" },
    { label: "Preguntas", href: "#faq" },
  ];

  return (
    <header
      data-screen-label="00 Nav"
      onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}
      className={"erp-nav fixed top-0 inset-x-0 z-50 transition-colors duration-200 " + (scrolled ? "nav-blur" : "")}
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 h-[64px] flex items-center justify-between">
        {/* Left: logo + ownership */}
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center" aria-label="NEXTELCO — página principal">
            <ErpLogo size={26} />
          </a>
          <a
            href="/"
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-fg-4 hover:text-fg-2 border-l border-line pl-3 transition-colors"
          >
            Sitio corporativo
          </a>
        </div>

        {/* Center: links */}
        <nav className="hidden xl:flex items-center gap-1" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 h-11 inline-flex items-center text-[13.5px] font-medium text-fg-2 hover:text-fg transition-colors rounded-md"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right: actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={"Cambiar a tema " + (theme === "dark" ? "claro" : "oscuro")}
            className="theme-toggle hidden sm:inline-grid place-items-center w-11 h-11 rounded-md border border-line text-fg-2 hover:text-fg hover:bg-surface-2 transition-colors cursor-pointer"
          >
            {theme === "dark" ? <Ic.sun size={15} /> : <Ic.moon size={15} />}
          </button>
          <a href={DEMO_WA_URL} target="_blank" rel="noopener noreferrer" className="erp-nav-demo btn btn-primary whitespace-nowrap text-[12px] sm:text-[13.5px] px-2.5 sm:px-3.5">
            Solicitar demo
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menú"
            aria-expanded={open}
            aria-controls="erp-mobile-nav"
            className="xl:hidden inline-grid place-items-center w-11 h-11 rounded-md border border-line text-fg-2 cursor-pointer"
          >
            {open ? <Ic.x size={16} /> : <Ic.menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="erp-mobile-nav" className="xl:hidden menu-enter border-t border-line bg-app">
          <nav className="px-5 py-3 flex flex-col" aria-label="Móvil">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[15px] font-medium text-fg-2 hover:text-fg border-b border-line-soft last:border-0"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label={"Cambiar a tema " + (theme === "dark" ? "claro" : "oscuro")}
                className="inline-grid sm:hidden place-items-center w-11 h-11 rounded-md border border-line text-fg-2 cursor-pointer"
              >
                {theme === "dark" ? <Ic.sun size={15} /> : <Ic.moon size={15} />}
              </button>
              <a href="/" className="btn btn-ghost flex-1">
                Sitio corporativo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
