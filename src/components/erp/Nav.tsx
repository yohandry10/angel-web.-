import React, { useState, useEffect } from "react";
import { Ic } from "./Icons";
import logoNavbar from "@/assets/logo-navbar-white.png";

export function ErpLogo({ size = 28, withWordmark = true, className = "" }: { size?: number; withWordmark?: boolean; className?: string }) {
  // Mismo logotipo que el sitio corporativo; "ERP" indica el producto.
  return (
    <div className={"inline-flex items-center gap-2.5 " + className}>
      <img src={logoNavbar} alt="NEXTELCO" className="erp-logo h-7 w-auto sm:h-9" />
      {withWordmark && (
        <span className="hidden rounded-md border border-line px-1.5 py-0.5 text-[11px] font-medium leading-none text-fg-2 sm:inline">ERP</span>
      )}
    </div>
  );
}
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.classList.toggle("dark", next === "dark");
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
      className={"fixed top-0 inset-x-0 z-50 transition-colors duration-200 " + (scrolled ? "nav-blur" : "")}
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 h-[60px] flex items-center justify-between">
        {/* Left: logo + ownership */}
        <div className="flex items-center gap-3">
          <a href="#producto" className="flex items-center" aria-label="NEXTELCO ERP — inicio">
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
        <nav className="hidden md:flex items-center gap-1" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 h-9 inline-flex items-center text-[13.5px] font-medium text-fg-2 hover:text-fg transition-colors rounded-md"
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
            className="theme-toggle hidden sm:inline-grid place-items-center w-9 h-9 rounded-md border border-line text-fg-2 hover:text-fg hover:bg-surface-2 transition-colors cursor-pointer"
          >
            {theme === "dark" ? <Ic.sun size={15} /> : <Ic.moon size={15} />}
          </button>
          <a href="#cta" className="btn btn-primary h-9 whitespace-nowrap text-[13.5px] px-3.5">
            Solicitar demo
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menú"
            className="md:hidden inline-grid place-items-center w-9 h-9 rounded-md border border-line text-fg-2 cursor-pointer"
          >
            {open ? <Ic.x size={16} /> : <Ic.menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden menu-enter border-t border-line bg-app/95 backdrop-blur">
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
                className="inline-grid place-items-center w-10 h-10 rounded-md border border-line text-fg-2 cursor-pointer"
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
