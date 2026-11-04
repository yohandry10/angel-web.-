import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveals } from "@/hooks/use-section-reveals";
import { SiteFooter, SitePageHeader } from "@/components/SiteChrome";
import "@/components/SupportingPages.css";
import { ERP_TOPICS, type ErpTopic } from "@/data/erp-topics";

export function ErpTopicPage({ topic }: { topic: ErpTopic }) {
  const root = useRef<HTMLDivElement>(null);
  useSectionReveals(root);
  const related = ERP_TOPICS.filter((t) => t.path !== topic.path);

  return (
    <div ref={root} className="site-theme corporate-root experience-page">
      <SitePageHeader label={topic.label} />
      <main>
        <section className="experience-intro" aria-labelledby="topic-title">
          <h1 id="topic-title" data-reveal>
            {topic.heading} <span className="text-accent">{topic.headingAccent}</span>
          </h1>
          <p data-reveal>{topic.intro}</p>
        </section>
        <section aria-labelledby="topic-features-title">
          <h2 id="topic-features-title" data-reveal>
            Lo que resuelve <span className="text-accent">en tu día a día.</span>
          </h2>
          <div className="experience-sectors">
            {topic.features.map((f, index) => (
              <article key={f.t} data-reveal data-reveal-delay={index * 60}>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </article>
            ))}
          </div>
        </section>
        <section aria-labelledby="topic-steps-title">
          <h2 id="topic-steps-title" data-reveal>
            Cómo lo <span className="text-accent">ponemos en marcha.</span>
          </h2>
          <div className="experience-method">
            {topic.steps.map((step, index) => (
              <article key={step.t} data-reveal data-reveal-delay={index * 60}>
                <span className="experience-method-number">0{index + 1}</span>
                <h3>{step.t}</h3>
                <p>{step.d}</p>
              </article>
            ))}
          </div>
        </section>
        <section aria-labelledby="topic-faq-title">
          <h2 id="topic-faq-title" data-reveal>
            Preguntas <span className="text-accent">frecuentes.</span>
          </h2>
          <div className="experience-sectors">
            {topic.faq.map((item) => (
              <article key={item.q} data-reveal>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>
        <section aria-labelledby="topic-related-title">
          <h2 id="topic-related-title" data-reveal>
            Parte de <span className="text-accent">NEXTELCO ERP.</span>
          </h2>
          <div className="experience-sectors">
            <article data-reveal>
              <h3>Un solo sistema</h3>
              <p>
                16 módulos conectados: ventas, POS, compras, inventario, logística, finanzas,
                tesorería, contabilidad, SUNAT, SIRE y PLE, RRHH y planillas, con permisos y
                reportes.{" "}
                <Link to="/erp" className="text-accent">
                  Conoce el ERP completo
                </Link>
                .
              </p>
            </article>
            <article data-reveal>
              <h3>También te puede interesar</h3>
              <p>
                {related.map((t, i) => (
                  <span key={t.path}>
                    {i > 0 && " · "}
                    <Link to={t.path} className="text-accent">
                      {t.label}
                    </Link>
                  </span>
                ))}
              </p>
            </article>
          </div>
        </section>
        <section className="experience-cta" aria-labelledby="topic-cta-title">
          <div data-reveal>
            <h2 id="topic-cta-title">Míralo con los datos de tu empresa.</h2>
            <p>
              Agenda una demo y te mostramos el recorrido con tu operación. Implementación y
              capacitación acompañadas, con equipo en Lima.
            </p>
            <Link to="/" hash="contacto" className="btn btn-primary btn-lg">
              Solicitar una demo <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
