import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { DEMO_WA_URL } from "@/lib/erp-contact";

export default function FinalCTA() {
  return (
    <section id="cta" className="erp-contact-section">
      <div className="erp-section-shell erp-contact-layout" data-reveal>
        <div>
          <h2>
            Hablemos de
            <br />
            tu empresa.
          </h2>
          <p>Cuéntanos cómo operas. Te mostramos cómo conectarlo en NEXTELCO ERP.</p>
          <a className="erp-hero-cta" href={DEMO_WA_URL} target="_blank" rel="noopener noreferrer">
            Solicitar una demo <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
        <address>
          <a href="mailto:operaciones@nextelco.cloud">
            <Mail aria-hidden="true" />
            <span>operaciones@nextelco.cloud</span>
          </a>
          <a href={DEMO_WA_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" />
            <span>+51 904 963 051</span>
          </a>
          <p>
            <MapPin aria-hidden="true" />
            <span>Lima, Perú</span>
          </p>
          <span className="erp-contact-note">Implementación y capacitación acompañadas.</span>
        </address>
      </div>
    </section>
  );
}
