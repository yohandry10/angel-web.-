import { Link } from "@tanstack/react-router";
import { ArrowLeft, Waves } from "lucide-react";
import { setMotionPreference, useMotionPreference } from "@/hooks/use-motion-preference";
import { BrandLogo } from "./BrandLogo";
import "./SiteChrome.css";

export function SitePageHeader({ label }: { label: string }) {
  return (
    <header className="site-page-header">
      <div className="site-chrome-shell">
        <Link to="/" className="site-home-link" aria-label="NEXTELCO — volver al inicio">
          <ArrowLeft size={20} aria-hidden="true" />
          <BrandLogo />
        </Link>
        <span className="site-page-label">{label}</span>
        <Link to="/" className="site-back-link">
          Volver al inicio
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const motion = useMotionPreference();
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-chrome-shell">
        <div className="site-footer-main">
          <Link to="/" className="site-footer-brand" aria-label="NEXTELCO — volver al inicio">
            <BrandLogo />
          </Link>
          <nav aria-label="Explorar NEXTELCO">
            <Link to="/">Inicio</Link>
            <Link to="/erp">NEXTELCO ERP</Link>
            <Link to="/portafolio-web">Portafolio web</Link>
            <Link to="/experiencia">Experiencia</Link>
          </nav>
        </div>
        <div className="site-footer-bottom">
          <span>© {new Date().getFullYear()} NEXTELCO SAC</span>
          <div className="site-footer-options">
            <button
              type="button"
              className="site-motion-toggle"
              onClick={() => setMotionPreference(motion === "full" ? "reduced" : "full")}
            >
              <Waves size={16} aria-hidden="true" />
              {motion === "full" ? "Reducir animaciones" : "Activar animaciones"}
            </button>
            <nav aria-label="Información legal">
              <Link to="/aviso-legal">Aviso legal</Link>
              <Link to="/privacidad">Privacidad</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
