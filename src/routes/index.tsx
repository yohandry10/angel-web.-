import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-devops.jpg";
import { ITCursor } from "@/components/ITCursor";
import { ContactModal } from "@/components/ContactModal";

const TITLE = "Equipo de Investigación IA, DevOps y DevSecOps";
const DESC = "Equipo de investigadores que resuelve problemas complejos de IA, LLMs, Deep Learning y Machine Learning para América Latina, EEUU y Europa.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
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

const CAPABILITIES = {
  "Cloud & OS": [
    { k: "Cloud Providers", v: "AWS, Azure, GCP (Compute, Storage, Security, DNS).", n: "01" },
    { k: "Sistemas UNIX", v: "Solaris 10-11, AIX 7.X, Linux (RedHat, Ubuntu, Centos, Debian).", n: "02" },
    { k: "Middleware", v: "JBoss 7.X, Oracle Weblogic 11g-14, IBM WebSphere (WAS, MQ).", n: "03" },
    { k: "Gestión & Storage", v: "Veritas Cluster Server, Veritas Volume Manager.", n: "04" },
  ],
  "DevOps & CI/CD": [
    { k: "Contenedores", v: "Docker Engine, Kubernetes, RedHat OpenShift.", n: "01" },
    { k: "Integración Continua", v: "Jenkins, GitHub Actions, Bitbucket, Artifactory, Sonarqube.", n: "02" },
    { k: "Automatización & CD", v: "RedHat Ansible Automation, ArgoCD, Helm.", n: "03" },
    { k: "Scripting & Agile", v: "Python, Shell, JavaScript, Groovy. Jira, Scrum/Kanban.", n: "04" },
  ],
  "Machine Learning": [
    { k: "Deep Learning", v: "TensorFlow, PyTorch, Keras, CNN, RNN, FCNN.", n: "01" },
    { k: "Modelos Predictivos", v: "XGBoost, Random Forest, KNN, Regresión Lineal.", n: "02" },
    { k: "Computer Vision", v: "OpenCV, Torchvision, Pillow (PIL).", n: "03" },
    { k: "Lifecycle & Tuning", v: "MLflow, TensorBoard, Optuna, Hyperopt.", n: "04" },
  ],
  "Data Engineering": [
    { k: "Data Platforms", v: "Databricks, Azure DataFactory, DataLake.", n: "01" },
    { k: "Procesamiento", v: "Pandas, NumPy, Matplotlib, Seaborn.", n: "02" },
    { k: "Series Temporales", v: "Prophet, Statsmodels, Ta-lib, Pandas-ta.", n: "03" },
    { k: "Databases", v: "MySQL, MSQL. Integración con pipelines de datos.", n: "04" },
  ]
};

function Index() {
  useReveal();
  const heroRef = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useState(false);
  const [tab, setTab] = useState<keyof typeof CAPABILITIES>("Cloud & OS");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0) scale(${1 + y * 0.0002})`;
      }
      setScrolled(y > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openModal = (e?: React.MouseEvent) => { e?.preventDefault(); setModal(true); };

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <ITCursor />
      <ContactModal open={modal} onClose={() => setModal(false)} />

      {/* NAVBAR — fixed + glassmorphism on scroll */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-line/50 shadow-[0_1px_20px_rgba(0,0,0,0.3)]" : "bg-transparent border-b border-transparent"}`}>
        <div className="flex items-center justify-between px-[clamp(24px,5vw,80px)] py-5">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-2 h-2 rounded-full bg-cyan-glow shadow-[0_0_12px_var(--cyan-glow)] animate-pulse" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase group-hover:text-cyan-glow transition">AI_RESEARCH_TEAM</span>
          </a>
          <nav className="hidden md:flex items-center gap-10 font-mono text-[12px] tracking-[0.2em] uppercase text-muted-foreground">
            <a href="#proceso" data-cursor="$ goto" className="hover:text-cyan-glow transition-colors duration-300">Proceso</a>
            <a href="#stack" data-cursor="$ goto" className="hover:text-cyan-glow transition-colors duration-300">Stack</a>
            <a href="#bio" data-cursor="$ whoami" className="hover:text-cyan-glow transition-colors duration-300">Equipo</a>
            <a href="#criterio" data-cursor="$ goto" className="hover:text-cyan-glow transition-colors duration-300">Criterio</a>
          </nav>
          <div className="flex items-center gap-6">
            <button onClick={openModal} data-cursor="$ contact" className="hidden sm:inline-flex font-mono text-[12px] tracking-[0.2em] uppercase border-b border-foreground/60 pb-0.5 hover:border-cyan-glow hover:text-cyan-glow transition-colors duration-300">
              Conversemos →
            </button>
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Menú"
            >
              <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${mobileMenu ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${mobileMenu ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${mobileMenu ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileMenu ? "max-h-80 border-t border-line/30" : "max-h-0"}`}>
          <nav className="flex flex-col gap-1 px-[clamp(24px,5vw,80px)] py-4 bg-background/95 backdrop-blur-xl">
            {["Proceso", "Stack", "Equipo", "Criterio"].map((item) => (
              <a
                key={item}
                href={`#${item === "Equipo" ? "bio" : item.toLowerCase()}`}
                onClick={() => setMobileMenu(false)}
                className="font-mono text-[12px] tracking-[0.2em] uppercase text-muted-foreground hover:text-cyan-glow transition-colors py-3 border-b border-line/20"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => { setMobileMenu(false); openModal(); }}
              className="font-mono text-[12px] tracking-[0.2em] uppercase text-cyan-glow py-3 text-left"
            >
              Conversemos →
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div ref={heroRef} className="absolute right-0 top-0 h-full w-full md:w-[64vw] z-[1] will-change-transform">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 md:via-background/70 to-transparent z-10 w-full md:w-[28%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 md:from-background/80 via-transparent to-background/40 z-10" />
          <img src={heroImg} alt="Server rack iluminado representando infraestructura DevOps" className="h-full w-full object-cover object-center" width={1080} height={1920} />
          <div className="absolute top-1/3 right-[18%] w-[2px] h-[40vh] bg-cyan-glow/60 blur-[2px] z-20 hidden md:block" />
        </div>


        <div className="relative z-20 flex flex-col justify-start min-h-screen w-[90vw] md:w-[min(54vw,900px)]"
          style={{ paddingLeft: "clamp(24px,5vw,80px)", paddingTop: "clamp(120px, 15vh, 160px)", paddingBottom: "clamp(40px, 8vh, 80px)" }}>
          <div className="reveal mb-6 flex items-center gap-4">
            <div className="w-10 h-px bg-cyan-glow" />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-cyan-glow">Ingeniería · Infraestructura · 2026</span>
          </div>
          <h1 className="font-sans font-semibold tracking-[-0.05em]" style={{ fontSize: "clamp(42px, 7.5vw, 128px)", lineHeight: 0.85 }}>
            <span className="reveal-line"><span className="block">DEPLOY</span></span>
            <span className="reveal-line"><span className="font-serif-it font-normal text-amber-glow block pl-[0.2em]">sin</span></span>
            <span className="reveal-line"><span className="block">FRICCIÓN.</span></span>
            <span className="reveal-line"><span className="font-serif-it font-normal text-amber-glow block pl-[0.1em]">escalar</span></span>
            <span className="reveal-line"><span className="block">CON CRITERIO.</span></span>
          </h1>
          <p className="reveal mt-6 max-w-md text-base md:text-lg leading-relaxed text-muted-foreground">
            Somos un equipo de investigadores que resuelve problemas complejos de IA y entendimiento de LLMs, combinando Deep Learning, Machine Learning, DevOps y DevSecOps para América Latina, EEUU y Europa.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-8">
            <button onClick={openModal} data-cursor="$ deploy" className="group inline-flex items-center gap-4 bg-foreground text-ink px-7 py-4 font-mono text-xs tracking-[0.25em] uppercase hover:bg-cyan-glow transition-colors duration-500">
              Iniciar proyecto
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
            </button>
            <a href="#proceso" data-cursor="$ scroll" className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition">↓ Cómo trabajamos</a>
          </div>
          <div className="relative mt-auto pt-12 flex flex-wrap items-end gap-12 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            <div><div className="text-cyan-glow/60 mb-2">[01]</div><div>Lima, Perú</div><div>—12.04° S</div></div>
            <div><div className="text-cyan-glow/60 mb-2">[02]</div><div>Uptime 99.98%</div><div>Last 12 months</div></div>
          </div>
        </div>
      </section>



      {/* PROCESO */}
      <section id="proceso" className="px-[clamp(24px,5vw,80px)] pt-16 pb-[clamp(100px,15vh,200px)] overflow-hidden">
        <div className="reveal-left flex items-center gap-4 mb-24">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-cyan-glow">[ Proceso ]</span>
          <div className="flex-1 hairline" />
        </div>
        <h2 className="reveal-left max-w-4xl font-sans font-medium tracking-[-0.04em] mb-32" style={{ fontSize: "clamp(40px,5.5vw,88px)", lineHeight: 0.92 }}>
          Cuatro etapas para llevar tu plataforma <span className="font-serif-it font-normal text-amber-glow">de frágil</span> a confiable.
        </h2>
        <div className="grid md:grid-cols-4 gap-px bg-line">
          {[
            { n: "01", t: "Auditoría", d: "Mapeo de arquitectura, costos cloud, pipelines existentes y deuda operacional." },
            { n: "02", t: "Diseño", d: "Topología de red, IaC modular, estrategia de despliegue y plan de migración." },
            { n: "03", t: "Implementación", d: "Terraform, Kubernetes, GitOps y pipelines reproducibles con rollback inmediato." },
            { n: "04", t: "Observabilidad", d: "Métricas, logs, trazas y alertas con SLOs claros. Postmortem como cultura." },
          ].map((step, index) => (
            <div key={step.n} className="reveal-right" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="bg-background p-10 h-full group hover:bg-muted/40 transition-colors duration-700">
                <div className="font-sans font-light text-cyan-glow mb-12 group-hover:text-amber-glow transition-colors duration-700" style={{ fontSize: "clamp(60px,7vw,120px)", lineHeight: 1, letterSpacing: "-0.05em" }}>{step.n}</div>
                <h3 className="text-2xl font-medium mb-4">{step.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STACK / CAPACIDADES — REDISEÑADA */}
      <section id="stack" className="px-[clamp(24px,5vw,80px)] py-[clamp(72px,10vh,140px)] border-t border-line relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="relative">
          <div className="reveal flex items-center gap-4 mb-16">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-cyan-glow">[ Capacidades · 04 dominios ]</span>
            <div className="flex-1 hairline" />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <div className="lg:col-span-5 flex flex-col reveal-left">
              <h2 className="font-sans font-medium tracking-[-0.04em] mb-12" style={{ fontSize: "clamp(40px,5.5vw,88px)", lineHeight: 0.92 }}>
                Lo que <span className="font-serif-it font-normal text-amber-glow">construimos</span>,<br />operamos y{" "}<span className="font-serif-it font-normal text-cyan-glow">mantenemos</span>.
              </h2>

              {/* Tabs verticales tipo terminal */}
              <div className="space-y-px border-l border-line relative flex-1 flex flex-col justify-between">
                {Object.keys(CAPABILITIES).map((k, i) => {
                  const active = k === tab;
                  return (
                    <button
                      key={k}
                      onClick={() => setTab(k as keyof typeof CAPABILITIES)}
                      data-cursor="$ select"
                      className={`group w-full text-left py-5 pl-6 pr-4 flex items-baseline gap-4 transition-all duration-500 border-l-2 -ml-px ${active ? "bg-muted/40 border-cyan-glow" : "border-transparent hover:bg-muted/20"}`}
                    >
                      <span className={`font-mono text-[10px] tracking-[0.25em] ${active ? "text-cyan-glow" : "text-muted-foreground"}`}>
                        0{i + 1}
                      </span>
                      <span className={`flex-1 font-sans text-lg md:text-xl tracking-[-0.02em] ${active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                        {k}
                      </span>
                      <span className={`font-mono text-xs transition-transform duration-500 ${active ? "text-amber-glow translate-x-1" : "text-muted-foreground/40 opacity-0 group-hover:opacity-100"}`}>→</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col reveal-right">
              <div className="bg-ink border border-line flex flex-col flex-1">
                <div className="flex items-center justify-between px-5 py-3 border-b border-line">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-glow shadow-[0_0_8px_var(--cyan-glow)]" />
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                      ~/capabilities/{tab.toLowerCase().replace(/[\s&]+/g, "-")}.yaml
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground/60">live</span>
                </div>
                <div key={tab} className="p-6 md:p-10 space-y-px animate-in fade-in slide-in-from-bottom-2 duration-500 flex-1 flex flex-col justify-between">
                  {CAPABILITIES[tab].map((s) => (
                    <div key={s.n} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b border-line last:border-b-0 group">
                      <div className="font-mono text-[10px] tracking-[0.2em] text-cyan-glow shrink-0 sm:w-8">{s.n}</div>
                      <div className="text-base md:text-lg font-medium group-hover:text-cyan-glow transition shrink-0 sm:w-40 lg:w-44">{s.k}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed flex-1">{s.v}</div>
                    </div>
                  ))}
                  <div className="pt-6 mt-4 border-t border-line font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60 flex items-center gap-3">
                    <span>$ status:</span>
                    <span className="text-cyan-glow">ready</span>
                    <span className="text-muted-foreground/30">·</span>
                    <span>{CAPABILITIES[tab].length} módulos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section id="bio" className="reveal-section px-[clamp(24px,5vw,80px)] py-[clamp(72px,10vh,140px)] border-t border-line">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column — sticky avatar card, narrower */}
          <div className="lg:col-span-3">
            <div className="reveal flex items-center gap-4 mb-12">
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-cyan-glow">[ equipo ]</span>
            </div>
            <div className="reveal sticky top-24">
              <div className="aspect-[3/4] bg-muted/30 border border-line relative overflow-hidden group">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-sans font-light text-cyan-glow opacity-30 group-hover:opacity-50 transition-opacity duration-700" style={{ fontSize: "clamp(64px,10vw,160px)", lineHeight: 1, letterSpacing: "-0.05em" }}>
                    {"{ }"}
                  </div>
                </div>
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  <span>· research_team</span>
                  <span className="text-cyan-glow flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse shadow-[0_0_6px_var(--cyan-glow)]" />
                    ONLINE
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  Lima · UTC−5
                </div>
              </div>
            </div>
          </div>

          {/* Right column — main content, wider */}
          <div className="lg:col-span-9">
            <h2 className="reveal font-sans font-medium tracking-[-0.04em] mb-10" style={{ fontSize: "clamp(40px,5.5vw,88px)", lineHeight: 0.92 }}>
              Equipo de{" "}<span className="font-serif-it font-normal text-amber-glow">investigación aplicada</span>.<br />
              Ingeniería con{" "}<span className="font-serif-it font-normal text-cyan-glow">criterio</span>.
            </h2>

            <div className="space-y-8 max-w-2xl text-base md:text-lg leading-[1.75] text-muted-foreground">
              <p className="reveal">
                Somos un <span className="text-foreground font-medium">grupo de investigadores e ingenieros</span> enfocado en resolver problemas complejos de IA y entendimiento de LLMs, con experiencia aplicada en entornos críticos de banca, telecomunicaciones y tecnología.
              </p>
              <p className="reveal">
                Trabajamos con <span className="text-foreground font-medium">Deep Learning, Machine Learning, DevOps y DevSecOps</span>, diseñando soluciones que conectan investigación, arquitectura cloud, automatización, seguridad y operación real.
              </p>
              <p className="reveal">
                Aplicamos modelos, pipelines y plataformas en diferentes áreas para organizaciones de <span className="text-foreground font-medium">América Latina, EEUU y Europa</span>, integrando TensorFlow, PyTorch, Scikit-learn, Databricks, DataFactory y prácticas de seguridad desde el diseño.
              </p>
            </div>

            <div className="reveal mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 border-t border-line pt-10">
              {[
                { k: "Experiencia combinada", v: "17+" },
                { k: "Clusters operados", v: "40+" },
                { k: "Migraciones cloud", v: "12" },
                { k: "Postmortems", v: "200+" },
              ].map((m) => (
                <div key={m.k}>
                  <div className="font-sans font-light tracking-[-0.04em] text-foreground" style={{ fontSize: "clamp(36px,3.8vw,60px)", lineHeight: 1 }}>{m.v}</div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-4 leading-relaxed">{m.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CRITERIO */}
      <section id="criterio" className="reveal-section px-[clamp(24px,5vw,80px)] py-[clamp(72px,10vh,140px)] border-t border-line relative">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative">
          <p className="reveal max-w-5xl font-sans font-medium tracking-[-0.03em] mb-20" style={{ fontSize: "clamp(40px,5vw,76px)", lineHeight: 1.05 }}>
            La infraestructura <span className="font-serif-it text-cyan-glow">no es invisible</span> cuando falla.
            Nuestro trabajo es que <span className="font-serif-it text-amber-glow">nunca tengas que pensar</span> en ella.
          </p>
          <div className="grid md:grid-cols-3 border-t border-line">
            {[
              { k: "Despliegues/semana", v: "180+" },
              { k: "MTTR promedio", v: "< 9 min" },
              { k: "Ahorro cloud", v: "−38%" },
            ].map((m) => (
              <div key={m.k} className="reveal border-b md:border-b-0 md:border-r border-line last:border-r-0 py-12 pr-8">
                <div className="font-sans font-light tracking-[-0.04em] mb-4" style={{ fontSize: "clamp(56px,7vw,120px)", lineHeight: 1 }}>{m.v}</div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{m.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMINAL */}
      <section className="reveal-section px-[clamp(24px,5vw,80px)] py-[clamp(72px,10vh,140px)] border-t border-line">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="reveal flex items-center gap-4 mb-10">
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-cyan-glow">[ En vivo ]</span>
            </div>
            <h2 className="reveal font-sans font-medium tracking-[-0.04em] mb-8" style={{ fontSize: "clamp(40px,5.5vw,88px)", lineHeight: 0.92 }}>
              Pipelines que <span className="font-serif-it font-normal text-amber-glow">no rompen</span> los viernes.
            </h2>
            <p className="reveal text-muted-foreground leading-relaxed max-w-md">
              Cada commit pasa por validación, build reproducible, escaneo de seguridad y despliegue progresivo. Si algo falla, el rollback es automático.
            </p>
          </div>
          <div className="md:col-span-7 reveal">
            <div className="bg-ink border border-line overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <span className="ml-4 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">~/platform — main</span>
              </div>
              <pre className="font-mono text-[11px] md:text-[13px] leading-relaxed p-8 text-muted-foreground">
                <span className="text-cyan-glow">$ terraform apply</span>{"\n"}
                ✓ aws_eks_cluster.prod        <span className="text-amber-glow">created</span>{"\n"}
                ✓ helm_release.argocd          <span className="text-amber-glow">created</span>{"\n"}
                ✓ kubernetes_manifest.app      <span className="text-amber-glow">created</span>{"\n"}
                {"\n"}
                <span className="text-cyan-glow">$ kubectl get pods -n production</span>{"\n"}
                NAME              READY   STATUS    RESTARTS{"\n"}
                api-7f9c-2k4d     <span className="text-cyan-glow">3/3</span>     Running   0{"\n"}
                worker-8b1e-pq2   <span className="text-cyan-glow">2/2</span>     Running   0{"\n"}
                gateway-4d2a-zx   <span className="text-cyan-glow">3/3</span>     Running   0{"\n"}
                {"\n"}
                <span className="text-muted-foreground/60"># deploy time: 2m 14s · zero downtime ✓</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CTA */}
      <section id="contacto" className="reveal-section px-[clamp(24px,5vw,80px)] pt-[clamp(80px,12vh,160px)] pb-12 border-t border-line relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-cyan-glow/10 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 w-[400px] h-[400px] rounded-full bg-amber-glow/10 blur-[120px]" />
        <div className="relative">
          <div className="reveal font-mono text-[10px] tracking-[0.35em] uppercase text-cyan-glow mb-8">[ Siguiente sprint ]</div>
          <h2 className="reveal font-sans font-medium tracking-[-0.05em] max-w-6xl mb-16" style={{ fontSize: "clamp(48px,7vw,112px)", lineHeight: 0.88 }}>
            Hablemos de tu <span className="font-serif-it font-normal text-amber-glow">infraestructura</span>.
          </h2>
          <button onClick={openModal} data-cursor="$ open" className="reveal group inline-flex items-center gap-4 bg-foreground text-ink px-8 py-5 font-mono text-xs tracking-[0.25em] uppercase hover:bg-cyan-glow transition-colors duration-500 mb-20">
            Abrir formulario
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
          </button>

          <div className="grid md:grid-cols-3 gap-12 border-t border-line pt-12">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">Contacto</div>
              <div className="flex flex-col gap-4">
                <a href="mailto:operaciones@nextelco.cloud" data-cursor="$ mail" className="flex items-center gap-3 text-lg md:text-xl text-muted-foreground hover:text-cyan-glow transition group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span className="border-b border-transparent group-hover:border-cyan-glow transition pb-0.5 break-all">operaciones@nextelco.cloud</span>
                </a>
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Ubicación</div>
              <div className="text-xl md:text-2xl">Lima, Perú</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">UTC−5 · Remoto global</div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Disponibilidad</div>
              <div className="flex items-center gap-3 text-xl md:text-2xl">
                <span className="w-2 h-2 rounded-full bg-cyan-glow shadow-[0_0_12px_var(--cyan-glow)] animate-pulse" />
                Q1 2026
              </div>
            </div>
          </div>

          <div className="mt-32 pt-8 border-t border-line flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            <div>© 2026 AI Research Team — DevOps, DevSecOps & MLOps</div>
            <div>Hecho con criterio · No con plantillas</div>
          </div>
        </div>
      </section>
    </main>
  );
}
