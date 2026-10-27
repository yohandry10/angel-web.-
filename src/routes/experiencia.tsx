import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import logoNavbar from "@/assets/logo-navbar-white.png";
import { SITE_URL } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/experiencia`;
const TITLE = "Experiencia en DevOps, Cloud e Inteligencia Artificial Aplicada — NEXTELCO";
const DESC = "Diseño, automatización y operación de plataformas modernas: DevOps, arquitecturas Cloud, seguridad, observabilidad e IA aplicada con LLMs, RAG, MCP y agentes.";

export const Route = createFileRoute("/experiencia")({
  component: Experiencia,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: PAGE_URL },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Experiencia", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
});

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal, .reveal-line, .reveal-section, .reveal-left, .reveal-right").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const PILLARS = [
  {
    n: "01",
    t: "DevOps & DevSecOps",
    d: "Diseño y administración de pipelines CI/CD con automatización de compilaciones, pruebas, quality gates, análisis de seguridad y despliegues en múltiples ambientes. Contenedores e Infrastructure as Code con seguridad y calidad integradas en cada release.",
    tags: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "Azure DevOps", "Docker", "Kubernetes", "OpenShift", "Helm", "Kustomize", "Terraform", "Ansible", "ArgoCD", "GitOps", "SonarQube", "Trivy", "Grype", "SBOM", "Prometheus", "Grafana", "OpenTelemetry"],
  },
  {
    n: "02",
    t: "Cloud & Datos",
    d: "Arquitecturas sobre AWS, Azure y GCP considerando disponibilidad, seguridad, escalabilidad y costos. Migraciones, landing zones, Kubernetes administrado, identidad y observabilidad — incluyendo plataformas de datos e integración híbrida con on-premise.",
    tags: ["AWS", "Azure", "GCP", "Landing Zones", "K8s administrado", "IAM / SSO", "Redes / VPC", "BigQuery", "Vertex AI", "Airflow", "dbt", "Terraform", "Híbrido"],
  },
  {
    n: "03",
    t: "IA Aplicada a DevOps",
    d: "Integramos IA con pruebas, pipelines, documentación, métricas, logs y clústeres para construir asistentes y agentes capaces de analizar el estado de una plataforma. No un chatbot aislado, sino una capa más de la arquitectura.",
    tags: ["LLMs", "Embeddings", "FAISS", "RAG", "LangChain", "LangGraph", "MCP", "Agentes", "FastAPI", "MLOps"],
  },
];

const SECTORS = [
  {
    label: "IA · Datos de pozos",
    t: "Sector Petrolero",
    d: "Preparación y análisis de datos de pozos con registros horizontales, datos geológicos y curvas Gamma Ray. Uso de type wells para estimar el comportamiento geológico de nuevos pozos: predicción a lo largo de la perforación, correlación entre pozos, clasificación de formaciones, mantenimiento predictivo y detección de anomalías — de Google Colab a plataformas Cloud con pipelines de datos, MLOps y monitoreo de modelos.",
  },
  {
    label: "IA · DevSecOps",
    t: "Seguridad Bancaria",
    d: "Agentes que analizan resultados de SonarQube, Trivy, Grype y SBOM, priorizan hallazgos y correlacionan riesgos con las aplicaciones afectadas. Asistentes RAG sobre políticas, procedimientos, estándares y arquitectura autorizados — implementados con controles estrictos de acceso, protección de información, trazabilidad, validación humana y separación entre recomendaciones y acciones automáticas.",
  },
];

const METHOD = [
  { n: "01", t: "Evaluación", d: "Analizamos infraestructura, aplicaciones, procesos manuales, riesgos y necesidades del negocio para definir una ruta de modernización progresiva." },
  { n: "02", t: "Laboratorio / PoC", d: "Construimos una prueba de concepto con un caso de uso limitado, validamos la integración entre componentes y documentamos el funcionamiento." },
  { n: "03", t: "Automatización", d: "Llevamos la solución a CI/CD, contenedores, seguridad y observabilidad, evitando cambios de alto riesgo sobre ambientes productivos." },
  { n: "04", t: "Operación", d: "Despliegue, monitoreo y optimización. Cada solución crece por fases hasta incorporar agentes que interpretan el estado operativo." },
];

function Experiencia() {
  useReveal();

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-line/50">
        <div className="flex items-center justify-between px-[clamp(24px,5vw,80px)] py-5">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoNavbar} alt="NEXTELCO" className="h-9 w-auto" />
          </Link>
          <Link to="/" className="font-mono text-[12px] tracking-[0.2em] uppercase border-b border-foreground/60 pb-0.5 hover:border-cyan-glow hover:text-cyan-glow transition-colors duration-300">
            ← Inicio
          </Link>
        </div>
      </header>

      {/* HERO / INTRO */}
      <section className="px-[clamp(24px,5vw,80px)] pt-[clamp(140px,20vh,200px)] pb-[clamp(48px,8vh,96px)] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative">
          <div className="reveal mb-8 flex items-center gap-4">
            <div className="w-10 h-px bg-cyan-glow" />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-cyan-glow">Experiencia · DevOps · Cloud · IA</span>
          </div>
          <h1 className="reveal max-w-5xl font-sans font-semibold tracking-[-0.05em] mb-10" style={{ fontSize: "clamp(40px,7vw,104px)", lineHeight: 0.9 }}>
            DevOps, Cloud e <span className="font-serif-it font-normal text-amber-glow">inteligencia</span> artificial <span className="font-serif-it font-normal text-cyan-glow">aplicada</span>.
          </h1>
          <p className="reveal max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground">
            Contamos con experiencia en el diseño, implementación, automatización y operación de plataformas tecnológicas modernas. Combinamos infraestructura, desarrollo, automatización y análisis inteligente para modernizar procesos, reducir tareas manuales, mejorar la calidad de los despliegues y tomar decisiones basadas en información técnica confiable — en entornos empresariales y financieros como banca, servicios tecnológicos y aplicaciones web.
          </p>
        </div>
      </section>

      {/* PILARES */}
      <section className="px-[clamp(24px,5vw,80px)] py-[clamp(48px,8vh,96px)] border-t border-line">
        <div className="reveal-left flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-cyan-glow">[ Capacidades · 03 pilares ]</span>
          <div className="flex-1 hairline" />
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-line">
          {PILLARS.map((p, index) => (
            <div key={p.n} className="reveal-right" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="bg-background p-10 h-full group hover:bg-muted/40 transition-colors duration-700">
                <div className="font-sans font-light text-cyan-glow mb-10 group-hover:text-amber-glow transition-colors duration-700" style={{ fontSize: "clamp(48px,5vw,88px)", lineHeight: 1, letterSpacing: "-0.05em" }}>{p.n}</div>
                <h2 className="text-2xl font-medium mb-4">{p.t}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground mb-8">{p.d}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground border border-line px-2.5 py-1 group-hover:border-cyan-glow/40 transition-colors duration-700">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROYECTO DESTACADO — LAB IA + MCP + RAG + AGENTES */}
      <section className="px-[clamp(24px,5vw,80px)] py-[clamp(48px,8vh,96px)] border-t border-line">
        <div className="reveal-left flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-cyan-glow">[ Proyecto · IA, MCP, RAG y agentes ]</span>
          <div className="flex-1 hairline" />
        </div>
        <div className="reveal bg-ink border border-line">
          <div className="flex items-center justify-between px-5 py-3 border-b border-line">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-glow shadow-[0_0_8px_var(--cyan-glow)]" />
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">~/labs/release-readiness-agent</span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground/60">poc</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 p-8 md:p-12">
            <div className="lg:col-span-5">
              <h2 className="font-sans font-medium tracking-[-0.03em] mb-6" style={{ fontSize: "clamp(28px,3vw,48px)", lineHeight: 1.05 }}>
                Un agente que decide si tu versión <span className="font-serif-it font-normal text-amber-glow">está lista</span> para desplegar.
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Laboratorio de IA aplicada a DevOps orientado a la automatización de pruebas de APIs y evaluación de preparación para despliegues. El agente recibe resultados de pruebas, monitoreo y seguridad, evalúa condiciones y determina si una versión puede avanzar — generando archivos estructurados y resúmenes comprensibles para los equipos. Puede evolucionar a un Release Readiness Agent, un asistente de troubleshooting o un analizador de incidentes integrado con Jenkins, GitHub Actions, GitLab CI/CD o Azure DevOps.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60 mb-5">Flujo de la solución</div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-4 font-mono text-[11px] md:text-[13px] mb-8">
                {["Karate · E2E APIs", "MCP · tools", "FAISS · RAG", "LLM", "LangGraph", "Agente"].map((s, i, arr) => (
                  <span key={s} className="flex items-center gap-3">
                    <span className="text-foreground border border-line px-3 py-2 bg-background">{s}</span>
                    {i < arr.length - 1 && <span className="text-cyan-glow">→</span>}
                  </span>
                ))}
              </div>
              <div className="border-t border-line pt-5 font-mono text-[11px] md:text-[12px] leading-relaxed text-muted-foreground">
                <span className="text-cyan-glow">$ output</span> → ¿versión lista para desplegar?{"  "}<span className="text-amber-glow">+ resumen ejecutivo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IA POR SECTOR */}
      <section className="px-[clamp(24px,5vw,80px)] py-[clamp(48px,8vh,96px)] border-t border-line">
        <div className="reveal-left flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-cyan-glow">[ IA por sector ]</span>
          <div className="flex-1 hairline" />
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-line">
          {SECTORS.map((sec) => (
            <div key={sec.t} className="reveal bg-background p-10 group hover:bg-muted/40 transition-colors duration-700">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyan-glow mb-6">{sec.label}</div>
              <h2 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-cyan-glow transition-colors duration-700">{sec.t}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{sec.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="px-[clamp(24px,5vw,80px)] py-[clamp(48px,8vh,96px)] border-t border-line">
        <div className="reveal-left flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-cyan-glow">[ Metodología · progresiva ]</span>
          <div className="flex-1 hairline" />
        </div>
        <div className="grid md:grid-cols-4 gap-px bg-line">
          {METHOD.map((step, index) => (
            <div key={step.n} className="reveal-right" style={{ transitionDelay: `${index * 120}ms` }}>
              <div className="bg-background p-10 h-full group hover:bg-muted/40 transition-colors duration-700">
                <div className="font-sans font-light text-cyan-glow mb-10 group-hover:text-amber-glow transition-colors duration-700" style={{ fontSize: "clamp(48px,5vw,88px)", lineHeight: 1, letterSpacing: "-0.05em" }}>{step.n}</div>
                <h3 className="text-xl font-medium mb-4">{step.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[clamp(24px,5vw,80px)] pt-[clamp(64px,10vh,120px)] pb-16 border-t border-line relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-cyan-glow/10 blur-[120px]" />
        <div className="relative">
          <h2 className="reveal font-sans font-medium tracking-[-0.05em] max-w-5xl mb-12" style={{ fontSize: "clamp(40px,6vw,96px)", lineHeight: 0.9 }}>
            ¿Cómo podemos ayudarte con <span className="font-serif-it font-normal text-amber-glow">tu proyecto</span>?
          </h2>
          <p className="reveal max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground mb-12">
            Te acompañamos desde la evaluación y la arquitectura hasta la automatización, el despliegue, el monitoreo y la optimización de tu plataforma. Empezamos con DevOps, migración a la nube, CI/CD, contenedores, Kubernetes, seguridad o IA — mediante un laboratorio controlado o un proyecto piloto que demuestre valor sin riesgo.
          </p>
          <Link to="/" className="reveal group inline-flex items-center gap-4 bg-foreground text-ink px-8 py-5 font-mono text-xs tracking-[0.25em] uppercase hover:bg-cyan-glow transition-colors duration-500">
            Volver al inicio
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
          </Link>
          <div className="mt-24 pt-8 border-t border-line font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            © 2026 NEXTELCO — DevOps, Cloud & IA aplicada
          </div>
        </div>
      </section>
    </main>
  );
}
