import { BrandLogo } from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="erp-product-footer">
      <div className="erp-section-shell">
        <a href="/" aria-label="NEXTELCO — página principal">
          <BrandLogo />
        </a>
        <span>© 2026 NEXTELCO SAC · NEXTELCO ERP</span>
        <nav aria-label="Información legal">
          <a href="/aviso-legal">Aviso legal</a>
          <a href="/privacidad">Privacidad</a>
          <a href="/">Sitio corporativo ↗</a>
        </nav>
      </div>
    </footer>
  );
}
