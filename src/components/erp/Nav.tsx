import React, { useState, useEffect } from "react";
import { Ic } from "./Icons";

export function KontaLogo({ size = 28, withWordmark = true, className = "" }: { size?: number; withWordmark?: boolean; className?: string }) {
  return (
    <div className={"inline-flex items-center gap-2 " + className}>
      <div
        className="relative grid place-items-center rounded-[7px]"
        style={{
          width: size,
          height: size,
          background: "var(--accent)",
          boxShadow: "0 0 0 1px rgba(42,168,255,0.25), 0 4px 12px -4px rgba(42,168,255,0.45)",
        }}
      >
        <svg viewBox="0 0 24 24" width={size * 0.6} height={size * 0.6} aria-hidden>
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
      {withWordmark && (
        <span className="text-[17px] font-semibold tracking-[-0.02em] text-fg">Konta</span>
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

  const links = [
    { label: "Producto", href: "#producto" },
    { label: "Módulos", href: "#modulos" },
    { label: "Precios", href: "#precios" },
    { label: "Clientes", href: "#clientes" },
    { label: "Recursos", href: "#recursos" },
  ];

  return (
    <header
      data-screen-label="00 Nav"
      className={"fixed top-0 inset-x-0 z-50 transition-colors duration-200 " + (scrolled ? "nav-blur" : "")}
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 h-[60px] flex items-center justify-between">
        {/* Left: logo + ownership */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center" aria-label="Konta — inicio">
            <KontaLogo size={26} />
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-fg-4 border-l border-line pl-3">
            por
            <a href="/" className="text-fg-3 hover:text-fg font-semibold tracking-[-0.01em] transition-colors">NEXTELCO</a>
          </span>
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
          <a
            href="#login"
            className="hidden sm:inline-flex h-9 px-3 items-center text-[13.5px] font-medium text-fg-2 hover:text-fg transition-colors rounded-md"
          >
            Iniciar sesión
          </a>
          <a href="#cta" className="btn btn-primary h-9 text-[13.5px] px-3.5">
            Empezar gratis
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
              <a href="#login" className="btn btn-ghost flex-1">
                Iniciar sesión
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
