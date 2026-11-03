import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CloudCog,
  Code2,
  Database,
  Globe2,
  Headset,
  Mail,
  Menu,
  UsersRound,
  X,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import "./NextelcoHero.css";

const SERVICES = [
  { name: "DEVOPS", detail: "Cloud, CI/CD y automatización.", icon: CloudCog, href: "#stack" },
  { name: "ERP", detail: "Toda tu operación, conectada.", icon: Database, href: "/erp" },
  { name: "CRM", detail: "Clientes, ventas y oportunidades.", icon: UsersRound, href: "#producto" },
  { name: "WEB", detail: "Experiencias rápidas que convierten.", icon: Globe2, href: "#stack" },
  { name: "SISTEMAS", detail: "Software a la medida de tu negocio.", icon: Code2, href: "#stack" },
  {
    name: "SOPORTE",
    detail: "Contigo, antes y después del deploy.",
    icon: Headset,
    href: "#contacto",
  },
];

function HeroLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`reveal-brand ${className}`}
      viewBox="35 145 1370 810"
      role="img"
      aria-label="NEXTELCO"
      width="220"
      height="130"
    >
      <image href="/media/brand/nextelco-stacked-transparent.png" width="1448" height="1086" />
    </svg>
  );
}

export function NextelcoHomeNav({ onContact }: { onContact: () => void }) {
  const [onHero, setOnHero] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("inicio");
      setOnHero(!!hero && window.scrollY < 32);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    document.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  return (
    <header className="reference-nav" data-on-hero={onHero}>
      <div className="reference-nav-inner">
        <a
          className="reference-nav-logo"
          href="#inicio"
          aria-label="NEXTELCO — inicio"
          onClick={() => setMenuOpen(false)}
        >
          <span className="reference-logo-stacked">
            <HeroLogo />
          </span>
          <span className="reference-logo-horizontal">
            <BrandLogo />
          </span>
        </a>
        <nav className="reference-nav-links" aria-label="Principal">
          <a href="#proceso">Proceso</a>
          <a href="#stack">Servicios</a>
          <Link to="/erp">ERP</Link>
          <Link to="/experiencia">Experiencia</Link>
          <button type="button" onClick={onContact}>
            Conversemos <ArrowUpRight size={15} />
          </button>
        </nav>
        <button
          className="reference-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="home-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="reference-mobile-nav" id="home-navigation" aria-label="Navegación móvil">
          <a href="#proceso" onClick={() => setMenuOpen(false)}>
            Proceso
          </a>
          <a href="#stack" onClick={() => setMenuOpen(false)}>
            Servicios
          </a>
          <Link to="/erp" onClick={() => setMenuOpen(false)}>
            NEXTELCO ERP
          </Link>
          <Link to="/experiencia" onClick={() => setMenuOpen(false)}>
            Experiencia
          </Link>
          <a href="#bio" onClick={() => setMenuOpen(false)}>
            Equipo
          </a>
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onContact();
            }}
          >
            Conversemos <ArrowUpRight size={18} />
          </button>
        </nav>
      )}
    </header>
  );
}

export function NextelcoHero({ onContact }: { onContact: () => void }) {
  return (
    <section id="inicio" className="corporate-hero reference-hero" aria-labelledby="hero-heading">
      <div className="reference-scene">
        <picture className="reference-scene-picture">
          <source
            media="(min-width: 1800px)"
            srcSet="/media/hero/nextelco-reveal-wide.webp"
            width="1774"
            height="887"
          />
          <img
            className="reference-scene-image"
            src="/media/hero/nextelco-reveal.webp"
            alt="Una mano levanta una campana negra y revela una laptop sobre una bandeja, sostenida por otra mano e iluminada en azul."
            width="1536"
            height="1024"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="reference-laptop-screen" data-ui>
          <div className="laptop-topbar">
            <BrandLogo />
            <div className="laptop-nav" aria-hidden="true">
              <span>INICIO</span>
              <span>SERVICIOS</span>
              <span>NOSOTROS</span>
              <span className="laptop-contact">HABLEMOS</span>
            </div>
          </div>
          <div className="laptop-intro">
            {/* prettier-ignore */}
            <span className="laptop-eyebrow">TECNOLOGÍA QUE IMPULSA{/* taste-skill-ignore: exact label from the user's reference composition. */}</span>
            <p>
              De tu idea a<br />
              <strong>una gran solución.</strong>
            </p>
            <span>Construimos, conectamos y escalamos tu negocio.</span>
          </div>
          <div className="laptop-services" aria-label="Nuestros servicios">
            {SERVICES.map(({ name, detail, icon: Icon, href }, index) => (
              <a
                key={name}
                href={href}
                className="laptop-service"
                aria-label={`${name}: ${detail}`}
              >
                <Icon aria-hidden="true" />
                <div>
                  <span className="laptop-service-number">0{index + 1}</span>
                  <strong>{name}</strong>
                  <p>{detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="reference-copy">
        {/* prettier-ignore */}
        <p className="reference-kicker">DE TU IDEA A{/* taste-skill-ignore: the user explicitly requires the reference's lead-in. */}</p>
        <h1 id="hero-heading">
          <span>POTENTES</span>
          <span>SISTEMAS</span>
        </h1>
        <p className="reference-description">
          Desarrollamos soluciones digitales
          <br className="reference-desktop-break" /> que impulsan tu negocio.
        </p>
        <button className="reference-project-button" type="button" onClick={onContact}>
          Hablemos de tu proyecto <ArrowUpRight size={19} aria-hidden="true" />
        </button>
        <svg
          className="reference-arrow"
          width="170"
          height="190"
          viewBox="0 0 170 190"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M160 178C121 187 67 157 78 122C87 95 120 108 109 128C95 151 48 142 29 112C12 85 12 47 39 9M15 17L42 5L38 36"
            stroke="currentColor"
            strokeWidth="3.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="reference-contact-strip">
        <a href="https://www.nextelco.cloud/" aria-label="Página de NEXTELCO">
          <Globe2 aria-hidden="true" />
          <span>www.nextelco.cloud</span>
        </a>
        <span className="reference-contact-divider" aria-hidden="true" />
        <a href="mailto:operaciones@nextelco.cloud">
          <Mail aria-hidden="true" />
          <span>operaciones@nextelco.cloud</span>
        </a>
      </div>
    </section>
  );
}
