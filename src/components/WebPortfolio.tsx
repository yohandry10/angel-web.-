import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Cpu,
  ExternalLink,
  Gauge,
  Globe,
  GraduationCap,
  Layers,
  Menu,
  ShoppingCart,
  Workflow,
  X,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { ContactModal } from "./ContactModal";
import { HomeContact } from "./HomeSections";
import { KeyboardPortfolioHero } from "./KeyboardPortfolioHero";
import { useSectionReveals } from "@/hooks/use-section-reveals";
import {
  CATEGORIES,
  PROJECTS,
  type Project,
  type ProjectCategory,
} from "@/data/portfolio-projects";
import "./WebPortfolio.css";

const SERVICES = [
  {
    icon: Globe,
    title: "Páginas web profesionales",
    description:
      "Sitios rápidos, responsive y optimizados para SEO que transmiten autoridad y convierten visitantes.",
  },
  {
    icon: Layers,
    title: "Sistemas administrativos",
    description:
      "ERPs y sistemas a medida para gestionar ventas, inventario, clientes y reportes de tu negocio.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce y tiendas online",
    description: "Tiendas con catálogo, pagos integrados, panel admin y reportes para vender 24/7.",
  },
  {
    icon: GraduationCap,
    title: "Aulas virtuales (LMS)",
    description:
      "Plataformas educativas con cursos, evaluaciones, certificados y pagos por suscripción.",
  },
  {
    icon: Cpu,
    title: "APIs REST y backend escalable",
    description:
      "Backends sólidos, documentados y testeados para apps móviles, webs e integraciones.",
  },
  {
    icon: Gauge,
    title: "Analítica y paneles de control",
    description:
      "Visualización de KPIs en tiempo real para tomar decisiones basadas en datos reales.",
  },
  {
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Pipelines que eliminan tareas repetitivas: reportes, sincronizaciones y notificaciones.",
  },
  {
    icon: BrainCircuit,
    title: "Consultoría técnica",
    description: "Arquitectura de software, auditorías de código y acompañamiento estratégico.",
  },
];

function PortfolioNav({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <header className="web-nav">
      <div className="web-nav-inner">
        <Link to="/" className="web-nav-brand" aria-label="NEXTELCO — volver al inicio">
          <ArrowLeft size={20} aria-hidden="true" />
          <BrandLogo />
        </Link>
        <span className="web-nav-label">Portafolio web</span>
        <nav className="web-nav-desktop" aria-label="Navegación del portafolio">
          <Link to="/">Inicio</Link>
          <a href="#servicios-web">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <button type="button" onClick={onContact}>
            Hablemos <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </nav>
        <button
          className="web-menu-toggle"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="web-mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {open && (
        <nav
          id="web-mobile-nav"
          className="web-nav-mobile"
          aria-label="Navegación móvil del portafolio"
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Inicio
          </Link>
          <a href="#servicios-web" onClick={() => setOpen(false)}>
            Servicios
          </a>
          <a href="#proyectos" onClick={() => setOpen(false)}>
            Proyectos
          </a>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onContact();
            }}
          >
            Hablemos <ArrowUpRight size={18} />
          </button>
        </nav>
      )}
    </header>
  );
}

function PortfolioServices() {
  return (
    <section
      id="servicios-web"
      className="web-services web-section"
      aria-labelledby="web-services-title"
    >
      <div className="web-section-heading" data-reveal>
        <div>
          <p className="web-section-lead">Lo que construimos</p>
          <h2 id="web-services-title">
            Tu idea, con todas
            <br />
            <span>sus posibilidades.</span>
          </h2>
        </div>
        <p>
          Desde una página que presenta tu marca hasta una plataforma que sostiene tu operación.
        </p>
      </div>
      <div className="web-services-grid" data-reveal>
        {SERVICES.map(({ icon: Icon, title, description }) => (
          <article key={title}>
            <Icon size={24} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <article className="web-project-card">
      <button
        className="web-project-preview"
        type="button"
        aria-label={`Ver detalle de ${project.name}`}
        onClick={() => onSelect(project)}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          width="1440"
          height="900"
          loading="lazy"
          decoding="async"
        />
        <span>{project.categoryLabel}</span>
      </button>
      <div className="web-project-card-copy">
        <h3>{project.name}</h3>
        <p>{project.short}</p>
        <ul className="web-project-tech" aria-label={`Tecnologías de ${project.name}`}>
          {project.tech.slice(0, 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="web-project-actions">
          <button type="button" onClick={() => onSelect(project)}>
            Ver detalle <ArrowUpRight size={17} aria-hidden="true" />
          </button>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver web de ${project.name}`}
            >
              Ver web <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver código de ${project.name}`}
            >
              <Code2 size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectDetails({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    if (!project || !element) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);
  return (
    <dialog
      className="web-project-dialog"
      ref={dialog}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="web-project-detail-title"
    >
      {project && (
        <article>
          <header>
            <span>{project.categoryLabel}</span>
            <button type="button" aria-label="Cerrar detalle del proyecto" onClick={onClose}>
              <X size={22} aria-hidden="true" />
            </button>
          </header>
          <img
            className="web-project-detail-image"
            src={project.image}
            alt={project.imageAlt}
            width="1440"
            height="900"
          />
          <div className="web-project-detail-copy">
            <h2 id="web-project-detail-title">{project.name}</h2>
            <p className="web-project-detail-description">{project.description}</p>
            <dl className="web-project-context">
              <div>
                <dt>Objetivo del cliente</dt>
                <dd>{project.problem}</dd>
              </div>
              <div>
                <dt>Solución implementada</dt>
                <dd>{project.solution}</dd>
              </div>
            </dl>
            <h3>Características principales</h3>
            <ul className="web-project-features">
              {project.features.map((feature) => (
                <li key={feature}>
                  <Check size={17} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <h3>Tecnologías</h3>
            <ul className="web-project-tech">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="web-project-result">
              <h3>Resultado obtenido</h3>
              <p>{project.result}</p>
            </div>
            <footer>
              {project.demoUrl && (
                <a
                  className="web-detail-primary"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver web en vivo <ExternalLink size={17} aria-hidden="true" />
                </a>
              )}
              <a
                href={`https://wa.me/51904963051?text=${encodeURIComponent(`Hola NEXTELCO, me interesa un proyecto similar a ${project.name}. Quiero conversar sobre mi web.`)}`}
                target="_blank"
                rel="noreferrer"
              >
                Cotizar similar <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <button type="button" onClick={onClose}>
                Cerrar
              </button>
            </footer>
          </div>
        </article>
      )}
    </dialog>
  );
}

function PortfolioProjects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [active, setActive] = useState<Project | null>(null);
  const visible =
    filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.category === filter);
  return (
    <section
      id="proyectos"
      className="web-projects web-section"
      aria-labelledby="web-projects-title"
    >
      <div className="web-section-heading" data-reveal>
        <div>
          <p className="web-section-lead">Proyectos destacados</p>
          <h2 id="web-projects-title">
            Soluciones reales.
            <br />
            <span>Negocios reales.</span>
          </h2>
        </div>
        <p>
          Explora los proyectos, conoce qué necesitaba cada negocio y abre su web para ver el
          resultado.
        </p>
      </div>
      <div
        className="web-project-filters"
        role="group"
        aria-label="Filtrar proyectos por categoría"
      >
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            aria-pressed={filter === category.id}
            aria-controls="web-project-grid"
            onClick={() => setFilter(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <p className="web-project-count" role="status">
        {visible.length} {visible.length === 1 ? "proyecto" : "proyectos"}
        {filter !== "all" && ` en ${CATEGORIES.find((category) => category.id === filter)?.label}`}
      </p>
      <div className="web-project-grid" id="web-project-grid">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={setActive} />
        ))}
      </div>
      {visible.length === 0 && (
        <div className="web-project-empty">
          <Globe size={32} aria-hidden="true" />
          <h3>No hay proyectos publicados en esta categoría.</h3>
          <p>Puedes explorar el resto del portafolio o contarnos tu idea.</p>
          <button type="button" onClick={() => setFilter("all")}>
            Ver todos los proyectos <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}
      <ProjectDetails project={active} onClose={() => setActive(null)} />
    </section>
  );
}

export function WebPortfolio() {
  const root = useRef<HTMLElement>(null);
  useSectionReveals(root);
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  return (
    <main
      ref={root}
      className="site-theme corporate-root nextelco-reference-page web-portfolio-page"
    >
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <PortfolioNav onContact={openContact} />
      <KeyboardPortfolioHero />
      <PortfolioServices />
      <PortfolioProjects />
      <HomeContact onContact={openContact} />
    </main>
  );
}
