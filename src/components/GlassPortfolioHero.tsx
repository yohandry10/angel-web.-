import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Globe2,
  LayoutTemplate,
  Mail,
  Phone,
  Search,
  ShoppingBag,
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
} from "motion/react";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { PROJECTS } from "@/data/portfolio-projects";
import { currentMotionPreference, useMotionPreference } from "@/hooks/use-motion-preference";
import "./GlassPortfolioHero.css";

/**
 * La imagen es el hero completo; cada etiqueta va sobre una lámina de vidrio.
 * Posiciones en % del cuadro de cada imagen (centro de la cara superior, ancho y giro), de la base hacia arriba.
 * `wide` = portfolio-hero-wide (1672×941) · `tall` = portfolio-hero-tall (1024×1536).
 * En la lámina superior el pulgar cubre el lado izquierdo: su etiqueta va sin icono y a la derecha del dedo.
 */
type Spot = { x: number; y: number; w: number; r: number };
const SLABS: {
  label: string;
  short?: string;
  icon: typeof Code2;
  bare?: boolean;
  wide: Spot;
  tall: Spot;
}[] = [
  {
    label: "Desarrollo web a medida",
    icon: Code2,
    wide: { x: 58.6, y: 80.6, w: 34, r: 0 },
    tall: { x: 61.5, y: 77.5, w: 58, r: -4 },
  },
  {
    label: "Webs profesionales",
    icon: LayoutTemplate,
    wide: { x: 58.6, y: 69.8, w: 31, r: -1 },
    tall: { x: 61, y: 67.7, w: 56, r: -4 },
  },
  {
    label: "Tiendas online",
    icon: ShoppingBag,
    wide: { x: 58.2, y: 62, w: 27, r: -1 },
    tall: { x: 60.5, y: 57.3, w: 52, r: -4 },
  },
  {
    label: "Sistemas a medida",
    icon: Workflow,
    wide: { x: 58, y: 52.6, w: 25, r: -2 },
    tall: { x: 60, y: 46.5, w: 48, r: -3 },
  },
  {
    label: "Posicionamiento SEO",
    short: "SEO",
    icon: Search,
    bare: true,
    wide: { x: 58, y: 37.4, w: 17, r: -8 },
    tall: { x: 64, y: 33.4, w: 30, r: -6 },
  },
];

const HEADLINE = ["Haz", "crecer", "tu", "marca", "online."];
const EASE = [0.22, 1, 0.36, 1] as const;

function spotVars({ x, y, w, r }: Spot, prefix: string) {
  return {
    [`--${prefix}-x`]: `${x}%`,
    [`--${prefix}-y`]: `${y}%`,
    [`--${prefix}-w`]: `${w}cqw`,
    [`--${prefix}-r`]: `${r}deg`,
  };
}

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

  // La imagen sigue al puntero y, al hacer scroll, se acerca mientras el titular se aleja.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });
  const tiltX = useTransform(sy, [-1, 1], [3, -3]);
  const tiltY = useTransform(sx, [-1, 1], [-4, 4]);
  const panX = useTransform(sx, [-1, 1], [-18, 18]);
  const panY = useTransform(sy, [-1, 1], [-10, 10]);
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const headY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const headFade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

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
          className="poster-hero corporate-hero"
          aria-labelledby="web-hero-title"
          onPointerMove={onPointerMove}
          onPointerLeave={() => {
            px.set(0);
            py.set(0);
          }}
        >
          {/* La imagen: llena toda la pantalla */}
          <m.div className="poster-stage" style={{ scale: zoom }} aria-hidden="false">
            <m.div
              className="poster-frame"
              initial={{ scale: 1.16, filter: "blur(10px)" }}
              animate={{ scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.8, ease: EASE }}
              style={{ rotateX: tiltX, rotateY: tiltY, x: panX, y: panY }}
            >
              <m.div
                className="poster-float"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <picture>
                  <source
                    media="(max-width: 700px)"
                    srcSet="/media/portfolio/portfolio-hero-tall-720.webp 720w, /media/portfolio/portfolio-hero-tall-1024.webp 1024w"
                    sizes="100vw"
                    width="1024"
                    height="1536"
                  />
                  <source
                    media="(max-width: 1300px)"
                    srcSet="/media/portfolio/portfolio-hero-wide-1200.webp"
                    width="1200"
                    height="675"
                  />
                  <img
                    src="/media/portfolio/portfolio-hero-wide-1672.webp"
                    width="1672"
                    height="941"
                    alt="Una mano coloca la última lámina de vidrio azul sobre una pila luminosa: cada lámina es un servicio web de NEXTELCO."
                    fetchPriority="high"
                    decoding="async"
                  />
                </picture>
                <ul className="poster-slabs" aria-label="Servicios web">
                  {SLABS.map(({ label, short, icon: Icon, bare, wide, tall }, index) => (
                    <m.li
                      key={label}
                      style={
                        { ...spotVars(wide, "wide"), ...spotVars(tall, "tall") } as CSSProperties
                      }
                      initial={{ opacity: 0, x: 80, filter: "blur(8px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.16, ease: EASE }}
                    >
                      <span className="poster-slab-text">
                        {short ? (
                          <>
                            <span className="poster-slab-full">{label}</span>
                            <span className="poster-slab-short" aria-hidden="true">
                              {short}
                            </span>
                          </>
                        ) : (
                          label
                        )}
                      </span>
                      {!bare && (
                        <>
                          <span className="poster-slab-bar" aria-hidden="true" />
                          <Icon className="poster-slab-icon" aria-hidden="true" />
                        </>
                      )}
                      <m.span
                        className="poster-slab-glint"
                        aria-hidden="true"
                        initial={{ x: "-150%", opacity: 0 }}
                        animate={{ x: ["-150%", "450%"], opacity: [0, 1, 0] }}
                        transition={{
                          duration: 1.4,
                          delay: 2 + index * 0.16,
                          repeat: Infinity,
                          repeatDelay: 6,
                          ease: "easeInOut",
                        }}
                      />
                    </m.li>
                  ))}
                </ul>
              </m.div>
            </m.div>
          </m.div>

          {/* El texto: adorno sobre la imagen */}
          <div className="poster-copy">
            <m.div className="poster-head" style={{ y: headY, opacity: headFade }}>
              <m.p
                className="poster-kicker"
                initial={{ y: 16 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              >
                Diseño y desarrollo web en Lima, Perú
              </m.p>
              <h1 id="web-hero-title">
                {HEADLINE.map((word, index) => (
                  <span key={word} className={index > 1 ? "poster-word is-blue" : "poster-word"}>
                    <m.span
                      initial={{ y: "105%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.9, delay: 0.3 + index * 0.08, ease: EASE }}
                    >
                      {word}
                    </m.span>{" "}
                  </span>
                ))}
              </h1>
            </m.div>

            <m.div
              className="poster-side"
              initial={{ x: -30 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: EASE }}
            >
              <p>
                Webs, tiendas online y sistemas <strong>que te ponen primero en Google.</strong>
              </p>
              <div className="poster-actions">
                <m.a
                  className="poster-btn poster-btn-primary"
                  href="#proyectos"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Ver {PROJECTS.length} proyectos <ArrowDown size={18} aria-hidden="true" />
                </m.a>
                <m.button
                  type="button"
                  className="poster-btn poster-btn-glass"
                  onClick={onContact}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Cotizar mi web <ArrowUpRight size={18} aria-hidden="true" />
                </m.button>
              </div>
            </m.div>
          </div>

          <m.a
            href="#proyectos"
            className="poster-chip"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: EASE }}
            whileHover={{ y: -4 }}
          >
            <strong>{PROJECTS.length}</strong>
            <span>
              proyectos
              <br />
              publicados
            </span>
          </m.a>

          <m.address
            className="poster-bar"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
          >
            <a href="tel:+51904963051">
              <Phone aria-hidden="true" /> +51 904 963 051
            </a>
            <a href="https://www.nextelco.cloud" className="poster-bar-web">
              <Globe2 aria-hidden="true" /> nextelco.cloud
            </a>
            <a href="mailto:operaciones@nextelco.cloud" className="poster-bar-mail">
              <Mail aria-hidden="true" /> operaciones@nextelco.cloud
            </a>
          </m.address>
        </section>
      </MotionConfig>
    </LazyMotion>
  );
}
