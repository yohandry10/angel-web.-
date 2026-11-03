import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { DEMO_WA_URL } from "@/lib/erp-contact";
import { BrandLogo } from "@/components/BrandLogo";

export function ErpLogo({
  withWordmark = true,
  className = "",
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <div className={`erp-product-logo ${className}`}>
      <BrandLogo />
      {withWordmark && <span>ERP</span>}
    </div>
  );
}

export default function Nav({
  theme,
  onThemeChange,
}: {
  theme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const links = [
    { label: "Producto", href: "#producto" },
    { label: "Cómo funciona", href: "#arquitectura" },
    { label: "Módulos", href: "#modulos" },
    { label: "Preguntas", href: "#faq" },
  ];
  return (
    <header
      className="erp-product-nav"
      data-scrolled={scrolled}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <div className="erp-product-nav-inner">
        <a href="/" aria-label="NEXTELCO — página principal">
          <ErpLogo />
        </a>
        <nav className="erp-product-links" aria-label="Principal ERP">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="erp-product-nav-actions">
          <button
            className="erp-icon-button"
            type="button"
            aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
            onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="erp-nav-demo" href={DEMO_WA_URL} target="_blank" rel="noopener noreferrer">
            Solicitar demo
          </a>
          <button
            className="erp-icon-button erp-menu-button"
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="erp-mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="erp-mobile-nav"
          className="erp-product-mobile-nav"
          aria-label="Navegación móvil ERP"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="/">Sitio corporativo</a>
          <button
            type="button"
            className="erp-mobile-theme"
            onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            Cambiar a tema {theme === "dark" ? "claro" : "oscuro"}
          </button>
        </nav>
      )}
    </header>
  );
}
