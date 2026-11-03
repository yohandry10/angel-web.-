import {
  AppWindow,
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  FolderOpen,
  Globe2,
  MapPin,
  Paintbrush,
  Smartphone,
} from "lucide-react";
import { PROJECTS } from "@/data/portfolio-projects";
import "./KeyboardPortfolioHero.css";

const OFFERINGS = [
  "Webs profesionales",
  "Portafolios digitales",
  "Tiendas online y ecommerce",
  "Sistemas administrativos",
  "Aulas virtuales (LMS)",
  "APIs e integraciones",
  "Analítica y paneles de control",
  "Automatización de procesos",
];

const FEATURES = [
  { icon: Paintbrush, top: "Diseño", bottom: "a medida" },
  { icon: Smartphone, top: "Responsive", bottom: "en cada pantalla" },
  { icon: Code2, top: "Desarrollo", bottom: "escalable" },
  { icon: Globe2, top: "Publicación", bottom: "de tu proyecto" },
];

export function KeyboardPortfolioHero() {
  return (
    <section
      id="inicio-web"
      className="keyboard-hero corporate-hero"
      aria-labelledby="web-hero-title"
    >
      <div className="keyboard-poster">
        <picture className="keyboard-photo">
          <source
            media="(min-width: 1101px), (min-width: 701px) and (orientation: landscape)"
            srcSet="/media/portfolio/keyboard-door-wide.webp"
            width="1536"
            height="1024"
          />
          <img
            src="/media/portfolio/keyboard-door-portrait.webp"
            width="1122"
            height="1402"
            alt="Un teclado negro gigante con la tecla Enter abierta como una puerta luminosa. Una persona se acerca a ella, representando el inicio de un proyecto web."
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        <div className="keyboard-scene">
          <div className="keyboard-seal">
            <span className="keyboard-seal-icon">
              <AppWindow aria-hidden="true" />
            </span>
            <p>
              <b>Tu próxima</b>
              <strong>gran web</strong>
              <span>empieza aquí</span>
            </p>
          </div>
        </div>

        <div className="keyboard-title">
          <p className="keyboard-kicker">Diseño y desarrollo de</p>
          <h1 id="web-hero-title">
            <span>Webs &amp;</span>
            <span>portafolios</span>
          </h1>
          <p className="keyboard-tagline">Diseña. Conecta. Crece.</p>
        </div>

        <div className="keyboard-offerings">
          <h2>Podemos construir</h2>
          <ul>
            {OFFERINGS.map((offering) => (
              <li key={offering}>
                <span className="keyboard-check">
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>
                {offering}
              </li>
            ))}
          </ul>
          <a className="keyboard-project-proof" href="#proyectos">
            <FolderOpen size={35} aria-hidden="true" />
            <span>
              <small>Descubre nuestro trabajo</small>
              <strong>{PROJECTS.length} proyectos para explorar</strong>
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="keyboard-features" aria-label="Cómo creamos tu web">
          {FEATURES.map(({ icon: Icon, top, bottom }) => (
            <div key={top}>
              <Icon aria-hidden="true" />
              <p>
                <strong>{top}</strong>
                <span>{bottom}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="keyboard-footer">
          <div className="keyboard-location">
            <MapPin size={30} aria-hidden="true" />
            <p>
              <strong>NEXTELCO · Lima, Perú</strong>
              <span>Webs, portafolios y sistemas</span>
            </p>
          </div>
          <a className="keyboard-primary" href="#proyectos">
            Ver proyectos <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
