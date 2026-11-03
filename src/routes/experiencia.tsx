import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useSectionReveals } from "@/hooks/use-section-reveals";
import { SiteFooter, SitePageHeader } from "@/components/SiteChrome";
import "@/components/SupportingPages.css";
import heroImg from "@/assets/hero-devops.jpg";
import { SITE_URL } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/experiencia`;
const TITLE = "Experiencia en DevOps, Cloud e Inteligencia Artificial Aplicada — NEXTELCO";
const DESC =
  "Diseño, automatización y operación de plataformas modernas: DevOps, arquitecturas Cloud, seguridad, observabilidad e IA aplicada con LLMs, RAG, MCP y agentes.";

export const Route = createFileRoute("/experiencia")({
  component: Experiencia,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: `${SITE_URL}${heroImg}` },
      { name: "twitter:image", content: `${SITE_URL}${heroImg}` },
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

const PILLARS = [
  {
    n: "01",
    t: "DevOps & DevSecOps",
    d: "Diseño y administración de pipelines CI/CD con automatización de compilaciones, pruebas, quality gates, análisis de seguridad y despliegues en múltiples ambientes. Contenedores e Infrastructure as Code con seguridad y calidad integradas en cada release.",
    tags: [
      "Jenkins",
      "GitHub Actions",
      "GitLab CI/CD",
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Helm",
      "Kustomize",
      "Terraform",
      "Ansible",
      "ArgoCD",
      "GitOps",
      "SonarQube",
      "Trivy",
      "Grype",
      "SBOM",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
    ],
  },
  {
    n: "02",
    t: "Cloud & Datos",
    d: "Arquitecturas sobre AWS, Azure y GCP considerando disponibilidad, seguridad, escalabilidad y costos. Migraciones, landing zones, Kubernetes administrado, identidad y observabilidad — incluyendo plataformas de datos e integración híbrida con on-premise.",
    tags: [
      "AWS",
      "Azure",
      "GCP",
      "Landing Zones",
      "K8s administrado",
      "IAM / SSO",
      "Redes / VPC",
      "BigQuery",
      "Vertex AI",
      "Airflow",
      "dbt",
      "Terraform",
      "Híbrido",
    ],
  },
  {
    n: "03",
    t: "IA aplicada a DevOps",
    d: "Integramos IA con pruebas, pipelines, documentación, métricas, logs y clústeres para construir asistentes y agentes capaces de analizar el estado de una plataforma. No un chatbot aislado, sino una capa más de la arquitectura.",
    tags: [
      "LLMs",
      "Embeddings",
      "FAISS",
      "RAG",
      "LangChain",
      "LangGraph",
      "MCP",
      "Agentes",
      "FastAPI",
      "MLOps",
    ],
  },
];

const SECTORS = [
  {
    label: "IA · Datos de pozos",
    t: "Sector petrolero",
    d: "Preparación y análisis de datos de pozos con registros horizontales, datos geológicos y curvas Gamma Ray. Uso de type wells para estimar el comportamiento geológico de nuevos pozos: predicción a lo largo de la perforación, correlación entre pozos, clasificación de formaciones, mantenimiento predictivo y detección de anomalías — de Google Colab a plataformas Cloud con pipelines de datos, MLOps y monitoreo de modelos.",
  },
  {
    label: "IA · DevSecOps",
    t: "Seguridad bancaria",
    d: "Agentes que analizan resultados de SonarQube, Trivy, Grype y SBOM, priorizan hallazgos y correlacionan riesgos con las aplicaciones afectadas. Asistentes RAG sobre políticas, procedimientos, estándares y arquitectura autorizados — implementados con controles estrictos de acceso, protección de información, trazabilidad, validación humana y separación entre recomendaciones y acciones automáticas.",
  },
];

const METHOD = [
  {
    n: "01",
    t: "Evaluación",
    d: "Analizamos infraestructura, aplicaciones, procesos manuales, riesgos y necesidades del negocio para definir una ruta de modernización progresiva.",
  },
  {
    n: "02",
    t: "Laboratorio / PoC",
    d: "Construimos una prueba de concepto con un caso de uso limitado, validamos la integración entre componentes y documentamos el funcionamiento.",
  },
  {
    n: "03",
    t: "Automatización",
    d: "Llevamos la solución a CI/CD, contenedores, seguridad y observabilidad, evitando cambios de alto riesgo sobre ambientes productivos.",
  },
  {
    n: "04",
    t: "Operación",
    d: "Despliegue, monitoreo y optimización. Cada solución crece por fases hasta incorporar agentes que interpretan el estado operativo.",
  },
];

function Experiencia() {
  const root = useRef<HTMLDivElement>(null);
  useSectionReveals(root);

  return (
    <div ref={root} className="site-theme corporate-root experience-page">
      <SitePageHeader label="Experiencia" />
      <main>
        <section className="experience-intro" aria-labelledby="experience-title">
          <h1 id="experience-title" data-reveal>
            DevOps, Cloud e <span className="text-accent">inteligencia artificial aplicada.</span>
          </h1>
          <p data-reveal>
            Contamos con experiencia en el diseño, implementación, automatización y operación de
            plataformas tecnológicas modernas. Combinamos infraestructura, desarrollo,
            automatización y análisis inteligente para modernizar procesos, reducir tareas manuales,
            mejorar la calidad de los despliegues y tomar decisiones basadas en información técnica
            confiable — en entornos empresariales y financieros como banca, servicios tecnológicos y
            aplicaciones web.
          </p>
        </section>
        <section aria-labelledby="experience-pillars-title">
          <h2 id="experience-pillars-title" data-reveal>
            Ingeniería que conecta <span className="text-accent">cada capa.</span>
          </h2>
          <div className="experience-pillars">
            {PILLARS.map((pillar, index) => (
              <article key={pillar.n} data-reveal data-reveal-delay={index * 60}>
                <h3>{pillar.t}</h3>
                <p>{pillar.d}</p>
                <ul className="experience-tags" aria-label={`Tecnologías de ${pillar.t}`}>
                  {pillar.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section className="experience-lab" aria-labelledby="experience-lab-title">
          <div className="experience-lab-layout">
            <div data-reveal>
              <h2 id="experience-lab-title">
                Un agente que decide si tu versión <span className="text-accent">está lista.</span>
              </h2>
              <p>
                Laboratorio de IA aplicada a DevOps orientado a la automatización de pruebas de APIs
                y evaluación de preparación para despliegues. El agente recibe resultados de
                pruebas, monitoreo y seguridad, evalúa condiciones y determina si una versión puede
                avanzar — generando archivos estructurados y resúmenes comprensibles para los
                equipos. Puede evolucionar a un Release Readiness Agent, un asistente de
                troubleshooting o un analizador de incidentes integrado con Jenkins, GitHub Actions,
                GitLab CI/CD o Azure DevOps.
              </p>
            </div>
            <div className="experience-lab-flow" data-reveal>
              <p>Flujo de la solución · Prueba de concepto</p>
              <ol>
                {[
                  "Karate · E2E APIs",
                  "MCP · tools",
                  "FAISS · RAG",
                  "LLM",
                  "LangGraph",
                  "Agente",
                ].map((step) => (
                  <li key={step}>
                    <ArrowRight aria-hidden="true" />
                    {step}
                  </li>
                ))}
              </ol>
              <small>
                Resultado: evaluación de la versión y un resumen ejecutivo para el equipo.
              </small>
            </div>
          </div>
        </section>
        <section aria-labelledby="experience-sectors-title">
          <h2 id="experience-sectors-title" data-reveal>
            IA aplicada <span className="text-accent">a tu sector.</span>
          </h2>
          <div className="experience-sectors">
            {SECTORS.map((sector) => (
              <article key={sector.t} data-reveal>
                <span className="experience-sector-label">{sector.label}</span>
                <h3>{sector.t}</h3>
                <p>{sector.d}</p>
              </article>
            ))}
          </div>
        </section>
        <section aria-labelledby="experience-method-title">
          <h2 id="experience-method-title" data-reveal>
            De la evaluación <span className="text-accent">a la operación.</span>
          </h2>
          <div className="experience-method">
            {METHOD.map((step, index) => (
              <article key={step.n} data-reveal data-reveal-delay={index * 60}>
                <span className="experience-method-number">{step.n}</span>
                <h3>{step.t}</h3>
                <p>{step.d}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="experience-cta" aria-labelledby="experience-cta-title">
          <div data-reveal>
            <h2 id="experience-cta-title">¿Cómo podemos ayudarte con tu proyecto?</h2>
            <p>
              Te acompañamos desde la evaluación y la arquitectura hasta la automatización, el
              despliegue, el monitoreo y la optimización de tu plataforma. Empezamos con DevOps,
              migración a la nube, CI/CD, contenedores, Kubernetes, seguridad o IA — mediante un
              laboratorio controlado o un proyecto piloto que demuestre valor sin riesgo.
            </p>
            <Link to="/" hash="contacto" className="btn btn-primary btn-lg">
              Hablemos de tu proyecto <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
