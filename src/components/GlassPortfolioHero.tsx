import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  LayoutTemplate,
  MapPin,
  Search,
  ShoppingBag,
  Smartphone,
  Workflow,
} from "lucide-react";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { PROJECTS } from "@/data/portfolio-projects";
import { currentMotionPreference, useMotionPreference } from "@/hooks/use-motion-preference";
import "./GlassPortfolioHero.css";

/**
 * Cada etiqueta va sobre una lámina de vidrio de la imagen.
 * x/y son el centro de la cara superior y w su ancho, en % del cuadro (imagen 1254×1254); de la base hacia arriba.
 * En la lámina superior el pulgar cubre el lado izquierdo: su etiqueta va sin icono y empieza a la derecha del dedo.
 */
const SLABS: {
  label: string;
  icon: typeof Code2;
  x: number;
  y: number;
  tilt: number;
  w: number;
  bare?: boolean;
  /** Texto visible en teléfonos cuando el completo no cabe en la lámina. */
  short?: string;
}[] = [
  { label: "Desarrollo web a medida", icon: Code2, x: 57.6, y: 76.6, tilt: 0, w: 41 },
  { label: "Webs profesionales", icon: LayoutTemplate, x: 58, y: 64, tilt: -1, w: 40 },
  { label: "Tiendas online", icon: ShoppingBag, x: 58, y: 52.2, tilt: -1, w: 37 },
  { label: "Sistemas a medida", icon: Workflow, x: 57.8, y: 41.4, tilt: -1, w: 35 },
  {
    label: "Posicionamiento SEO",
    icon: Search,
    x: 61.6,
    y: 25.4,
    tilt: -9,
    w: 26,
    bare: true,
    short: "SEO",
  },
];

const OFFERINGS = [
  "Webs profesionales",
  "Portafolios digitales",
  "Tiendas online y ecommerce",
  "Sistemas administrativos",
  "Aulas virtuales (LMS)",
  "APIs e integraciones",
  "SEO y posicionamiento en Google",
  "Automatización de procesos",
];

const EASE = [0.22, 1, 0.36, 1] as const;

const copy: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
// El texto nunca empieza oculto: sin JavaScript se lee igual y el LCP no espera a la animación.
const rise: Variants = {
  hidden: { y: 28 },
  show: { y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function GlassPortfolioHero({ onContact }: { onContact: () => void }) {
  // Respeta el interruptor "Reducir animaciones" del sitio y la preferencia del sistema.
  // Durante la hidratación el hook devuelve "reduced"; las animaciones arrancan en ese momento,
  // así que el primer render usa la preferencia real (solo alimenta MotionConfig, no el marcado).
  const preference = useMotionPreference();
  const [firstPreference] = useState(currentMotionPreference);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const reduce = (hydrated ? preference : firstPreference) === "reduced";
  const root = useRef<HTMLElement>(null);

  // Parallax con el puntero (solo escritorio) y con el scroll.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 70, damping: 18 });
  const sy = useSpring(py, { stiffness: 70, damping: 18 });
  const tiltX = useTransform(sy, [-1, 1], [5, -5]);
  const tiltY = useTransform(sx, [-1, 1], [-7, 7]);
  const shiftX = useTransform(sx, [-1, 1], [-14, 14]);
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    px.set(((event.clientX - box.left) / box.width) * 2 - 1);
    py.set(((event.clientY - box.top) / box.height) * 2 - 1);
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion={reduce ? "always" : "never"}>
        <section
          ref={root}
          id="inicio-web"
          className="glass-hero corporate-hero"
          aria-labelledby="web-hero-title"
          onPointerMove={onPointerMove}
          onPointerLeave={() => {
            px.set(0);
            py.set(0);
          }}
        >
          <div className="glass-hero-grid">
            <m.div
              className="glass-hero-copy"
              variants={copy}
              initial="hidden"
              animate="show"
              style={{ y: copyY }}
            >
              <m.p className="glass-hero-kicker" variants={rise}>
                Diseño y desarrollo web en Lima, Perú
              </m.p>
              <m.h1 id="web-hero-title" variants={rise}>
                <span>Haz crecer</span>
                <span>tu marca online.</span>
              </m.h1>
              <m.p className="glass-hero-lead" variants={rise}>
                Webs profesionales, tiendas online y sistemas a medida, rápidos en cada pantalla y
                optimizados para que tus clientes te encuentren en Google.
              </m.p>
              <m.div className="glass-hero-actions" variants={rise}>
                <m.a
                  className="glass-btn glass-btn-primary"
                  href="#proyectos"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Ver {PROJECTS.length} proyectos <ArrowDown size={18} aria-hidden="true" />
                </m.a>
                <m.button
                  type="button"
                  className="glass-btn glass-btn-ghost"
                  onClick={onContact}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Cotizar mi web <ArrowUpRight size={18} aria-hidden="true" />
                </m.button>
              </m.div>
              <m.ul className="glass-hero-proof" variants={rise} aria-label="Cómo trabajamos">
                <li>
                  <Smartphone aria-hidden="true" />
                  Responsive en cada pantalla
                </li>
                <li>
                  <Search aria-hidden="true" />
                  SEO desde el primer día
                </li>
                <li>
                  <MapPin aria-hidden="true" />
                  Equipo en Lima, Perú
                </li>
              </m.ul>
            </m.div>

            <m.div className="glass-hero-stage" style={{ y: artY }}>
              <m.div
                className="glass-hero-art"
                initial={{ scale: 1.08, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: EASE }}
                style={{ rotateX: tiltX, rotateY: tiltY, x: shiftX }}
              >
                <m.div
                  className="glass-hero-float"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <picture>
                    <source
                      media="(min-width: 701px)"
                      srcSet="/media/portfolio/portfolio-glass-hero-1254.webp"
                      width="1254"
                      height="1254"
                    />
                    <img
                      src="/media/portfolio/portfolio-glass-hero-760.webp"
                      width="760"
                      height="760"
                      alt="Una mano coloca la última lámina de vidrio azul sobre una pila luminosa: cada lámina es un servicio web de NEXTELCO."
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                  <ul className="glass-slab-labels" aria-label="Servicios web">
                    {SLABS.map(({ label, icon: Icon, x, y, tilt, w, bare, short }, index) => (
                      <m.li
                        key={label}
                        style={{ left: `${x}%`, top: `${y}%`, width: `${w}cqw`, rotate: tilt }}
                        initial={{ opacity: 0, x: 60, filter: "blur(6px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.7, delay: 0.7 + index * 0.14, ease: EASE }}
                      >
                        <span className="glass-slab-text">
                          {short ? (
                            <>
                              <span className="glass-slab-full">{label}</span>
                              <span className="glass-slab-short" aria-hidden="true">
                                {short}
                              </span>
                            </>
                          ) : (
                            label
                          )}
                        </span>
                        {!bare && (
                          <>
                            <span className="glass-slab-bar" aria-hidden="true" />
                            <Icon className="glass-slab-icon" aria-hidden="true" />
                          </>
                        )}
                      </m.li>
                    ))}
                  </ul>
                </m.div>

                <m.a
                  href="#proyectos"
                  className="glass-chip glass-chip-projects"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5, ease: EASE }}
                  whileHover={{ y: -4 }}
                >
                  <strong>{PROJECTS.length}</strong>
                  <span>
                    proyectos
                    <br />
                    para explorar
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </m.a>
              </m.div>
            </m.div>
          </div>

          <m.div
            className="glass-hero-offerings"
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
          >
            <h2>Podemos construir</h2>
            <ul>
              {OFFERINGS.map((offering) => (
                <li key={offering}>{offering}</li>
              ))}
            </ul>
          </m.div>
        </section>
      </MotionConfig>
    </LazyMotion>
  );
}
