import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NextelcoHero, NextelcoHomeNav } from "@/components/NextelcoHero";
import { ContactModal } from "@/components/ContactModal";
import { SITE_URL } from "@/lib/seo";

const heroImg = "/media/hero/nextelco-reveal.webp";
const TITLE = "NEXTELCO — Sistemas empresariales, ERP, IA, DevOps y DevSecOps";
const DESC =
  "Desde Lima, Perú, construimos sistemas empresariales de alto rendimiento —ERP, CRM y plataformas a medida— y resolvemos problemas complejos de negocio con Deep Learning, Machine Learning, DevOps y DevSecOps. Creadores de NEXTELCO ERP.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "theme-color", content: "#fbfcff" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}${heroImg}` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${SITE_URL}${heroImg}` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      {
        rel: "preload",
        as: "image",
        href: heroImg,
        type: "image/webp",
        media: "(max-width: 1799px)",
      },
      {
        rel: "preload",
        as: "image",
        href: "/media/hero/nextelco-reveal-wide.webp",
        type: "image/webp",
        media: "(min-width: 1800px)",
      },
    ],
  }),
});

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.15 },
    );
    document
      .querySelectorAll(".reveal, .reveal-line, .reveal-section, .reveal-left, .reveal-right")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const CAPABILITIES = {
  "Cloud & OS": [
    { k: "Cloud Providers", v: "AWS, Azure, GCP (Compute, Storage, Security, DNS).", n: "01" },
    {
      k: "Sistemas UNIX",
      v: "Solaris 10-11, AIX 7.X, Linux (RedHat, Ubuntu, Centos, Debian).",
      n: "02",
    },
    { k: "Middleware", v: "JBoss 7.X, Oracle Weblogic 11g-14, IBM WebSphere (WAS, MQ).", n: "03" },
    { k: "Gestión & Storage", v: "Veritas Cluster Server, Veritas Volume Manager.", n: "04" },
  ],
  "DevOps & CI/CD": [
    { k: "Contenedores", v: "Docker Engine, Kubernetes, RedHat OpenShift.", n: "01" },
    {
      k: "Integración Continua",
      v: "Jenkins, GitHub Actions, Bitbucket, Artifactory, Sonarqube.",
      n: "02",
    },
    { k: "Automatización & CD", v: "RedHat Ansible Automation, ArgoCD, Helm.", n: "03" },
    {
      k: "Scripting & Agile",
      v: "Python, Shell, JavaScript, Groovy. Jira, Scrum/Kanban.",
      n: "04",
    },
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
  ],
};

function Index() {
  useReveal();
  const [modal, setModal] = useState(false);
  const [tab, setTab] = useState<keyof typeof CAPABILITIES>("Cloud & OS");

  const openModal = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setModal(true);
  };

  return (
    <main className="corporate-root nextelco-reference-page bg-background text-foreground overflow-x-hidden">
      <ContactModal open={modal} onClose={() => setModal(false)} />

      <NextelcoHomeNav onContact={openModal} />
      <NextelcoHero onContact={openModal} />

      {/* PROCESO */}
      <section
        id="proceso"
        className="px-[clamp(24px,5vw,80px)] pt-16 pb-[clamp(100px,15vh,200px)] overflow-hidden"
      >
        <h2 className="reveal-left max-w-4xl font-sans font-medium tracking-[-0.04em] mb-12">
          Cuatro etapas para llevar tu plataforma <span className="text-amber-glow">de frágil</span>{" "}
          a confiable.
        </h2>
        <div className="grid md:grid-cols-4 gap-px bg-line">
          {[
            {
              n: "01",
              t: "Auditoría",
              d: "Mapeo de arquitectura, costos cloud, pipelines existentes y deuda operacional.",
            },
            {
              n: "02",
              t: "Diseño",
              d: "Topología de red, IaC modular, estrategia de despliegue y plan de migración.",
            },
            {
              n: "03",
              t: "Implementación",
              d: "Terraform, Kubernetes, GitOps y pipelines reproducibles con rollback inmediato.",
            },
            {
              n: "04",
              t: "Observabilidad",
              d: "Métricas, logs, trazas y alertas con SLOs claros. Postmortem como cultura.",
            },
          ].map((step, index) => (
            <div
              key={step.n}
              className="reveal-right"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-background p-10 h-full group hover:bg-muted/40 transition-colors duration-700">
                <div
                  className="font-sans font-light text-cyan-glow mb-12 group-hover:text-amber-glow transition-colors duration-700"
                  style={{
                    fontSize: "clamp(48px,5vw,72px)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {step.n}
                </div>
                <h3 className="text-2xl font-medium mb-4">{step.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STACK / CAPACIDADES — REDISEÑADA */}
      <section
        id="stack"
        className="px-[clamp(24px,5vw,80px)] py-[clamp(72px,10vh,140px)] border-t border-line relative overflow-hidden"
      >
        <div className="relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <div className="lg:col-span-5 flex flex-col reveal-left">
              <h2 className="font-sans font-medium tracking-[-0.04em] mb-12">
                Lo que <span className="text-amber-glow">construimos</span>,<br />
                operamos y <span className="text-cyan-glow">mantenemos</span>.
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
                      <span
                        className={`font-sans text-[13px] ${active ? "text-cyan-glow" : "text-muted-foreground"}`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`flex-1 font-sans text-lg md:text-xl tracking-[-0.02em] ${active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
                      >
                        {k}
                      </span>
                      <span
                        className={`font-sans text-xs transition-transform duration-500 ${active ? "text-amber-glow translate-x-1" : "text-muted-foreground opacity-0 group-hover:opacity-100"}`}
                      >
                        →
                      </span>
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
                    <span className="font-sans text-[13px] text-muted-foreground">
                      ~/capabilities/{tab.toLowerCase().replace(/[\s&]+/g, "-")}.yaml
                    </span>
                  </div>
                  <span className="font-sans text-[13px] text-muted-foreground">live</span>
                </div>
                <div
                  key={tab}
                  className="p-6 md:p-10 space-y-px animate-in fade-in slide-in-from-bottom-2 duration-500 flex-1 flex flex-col justify-between"
                >
                  {CAPABILITIES[tab].map((s) => (
                    <div
                      key={s.n}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b border-line last:border-b-0 group"
                    >
                      <div className="font-sans text-[13px] text-cyan-glow shrink-0 sm:w-8">
                        {s.n}
                      </div>
                      <div className="text-base md:text-lg font-medium group-hover:text-cyan-glow transition shrink-0 sm:w-40 lg:w-44">
                        {s.k}
                      </div>
                      <div className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {s.v}
                      </div>
                    </div>
                  ))}
                  <div className="pt-6 mt-4 border-t border-line font-sans text-[13px] text-muted-foreground flex items-center gap-3">
                    <span>$ status:</span>
                    <span className="text-cyan-glow">ready</span>
                    <span className="text-muted-foreground">·</span>
                    <span>{CAPABILITIES[tab].length} módulos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTO ESTRELLA — NEXTELCO ERP */}
      <section
        id="producto"
        className="px-[clamp(24px,5vw,80px)] py-[clamp(72px,10vh,140px)] border-t border-line relative overflow-hidden"
      >
        <div className="relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 reveal-left">
              <h2 className="font-sans font-medium tracking-[-0.04em] mb-8">
                NEXTELCO ERP — nuestro producto <span className="text-amber-glow">insignia</span>.
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6 max-w-xl">
                Nuestro producto estrella: un ERP que conecta ventas, compras, inventario,
                logística, finanzas, contabilidad y planillas. Cada operación alimenta a las que
                dependen de ella, con permisos e historial, sin volver a digitar lo mismo.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {[
                  "Comprobantes electrónicos",
                  "Contabilidad desde operaciones",
                  "Inventario multi-almacén",
                  "POS y cajas",
                  "PECOSA",
                  "Planillas",
                  "Multi-sucursal",
                ].map((t) => (
                  <span
                    key={t}
                    className="font-sans text-[13px] text-muted-foreground border border-line px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link to="/erp" data-cursor="$ open" className="btn btn-primary btn-lg group">
                Conocer NEXTELCO ERP
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </div>
            <div className="lg:col-span-6 reveal-right">
              <div className="bg-ink border border-line">
                <div className="flex items-center justify-between px-5 py-3 border-b border-line">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-glow shadow-[0_0_8px_var(--cyan-glow)]" />
                    <span className="font-sans text-[13px] text-muted-foreground">
                      ~/nextelco/erp — módulos
                    </span>
                  </div>
                  <span className="font-sans text-[13px] text-muted-foreground">live</span>
                </div>
                <div className="grid grid-cols-2 gap-px bg-line">
                  {[
                    ["Ventas", "POS + CPE"],
                    ["Compras", "OC + recepción"],
                    ["Contabilidad", "asientos vinculados"],
                    ["Inventario", "multi-almacén"],
                    ["CPE SUNAT", "CPE + GRE + SIRE"],
                    ["Finanzas", "caja + bancos"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="bg-ink p-5 md:p-6 group hover:bg-muted/40 transition-colors duration-500"
                    >
                      <div className="text-base md:text-lg font-medium group-hover:text-cyan-glow transition-colors duration-500">
                        {k}
                      </div>
                      <div className="font-sans text-[13px] text-muted-foreground mt-1">{v}</div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-4 border-t border-line font-sans text-[13px] text-muted-foreground flex items-center gap-3">
                  <span>$ status:</span>
                  <span className="text-cyan-glow">más de 100 clientes en Perú</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section
        id="bio"
        className="reveal-section px-[clamp(24px,5vw,80px)] py-[clamp(72px,10vh,140px)] border-t border-line"
      >
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column — sticky avatar card, narrower */}
          <div className="lg:col-span-3">
            <div className="reveal sticky top-24">
              <div className="aspect-[3/4] bg-muted/30 border border-line relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="font-sans font-light text-cyan-glow opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                    style={{
                      fontSize: "clamp(64px,10vw,160px)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {"{ }"}
                  </div>
                </div>
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-sans text-[13px] text-muted-foreground">
                  <span>· research_team</span>
                  <span className="text-cyan-glow flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse shadow-[0_0_6px_var(--cyan-glow)]" />
                    ONLINE
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 font-sans text-[13px] text-muted-foreground">
                  Lima · UTC−5
                </div>
              </div>
            </div>
          </div>

          {/* Right column — main content, wider */}
          <div className="lg:col-span-9">
            <h2 className="reveal font-sans font-medium tracking-[-0.04em] mb-10">
              Equipo de <span className="text-amber-glow">investigación aplicada</span>.<br />
              Ingeniería con <span className="text-cyan-glow">criterio</span>.
            </h2>

            <div className="space-y-8 max-w-2xl text-base md:text-lg leading-[1.75] text-muted-foreground">
              <p className="reveal">
                Somos un{" "}
                <span className="text-foreground font-medium">
                  equipo de ingenieros e investigadores
                </span>{" "}
                que construye sistemas empresariales de alto rendimiento —ERP, CRM y plataformas a
                medida— y resuelve problemas complejos de negocio e IA, con experiencia aplicada en
                entornos críticos de banca, telecomunicaciones y tecnología.
              </p>
              <p className="reveal">
                Trabajamos con{" "}
                <span className="text-foreground font-medium">
                  Deep Learning, Machine Learning, DevOps y DevSecOps
                </span>
                , diseñando soluciones que conectan investigación, arquitectura cloud,
                automatización, seguridad y operación real.
              </p>
              <p className="reveal">
                Aplicamos modelos, pipelines y plataformas en diferentes áreas para organizaciones
                de{" "}
                <span className="text-foreground font-medium">América Latina, EEUU y Europa</span>,
                integrando TensorFlow, PyTorch, Scikit-learn, Databricks, DataFactory y prácticas de
                seguridad desde el diseño.
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
                  <div
                    className="font-sans font-light tracking-[-0.04em] text-foreground"
                    style={{ fontSize: "clamp(36px,3.8vw,60px)", lineHeight: 1 }}
                  >
                    {m.v}
                  </div>
                  <div className="font-sans text-[13px] text-muted-foreground mt-4 leading-relaxed">
                    {m.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CRITERIO */}
      <section
        id="criterio"
        className="reveal-section px-[clamp(24px,5vw,80px)] py-[clamp(72px,10vh,140px)] border-t border-line relative"
      >
        <div className="relative">
          <p className="corporate-statement reveal max-w-5xl font-sans font-medium tracking-[-0.03em] mb-20">
            La infraestructura <span className="text-cyan-glow">no es invisible</span> cuando falla.
            Nuestro trabajo es que <span className="text-amber-glow">nunca tengas que pensar</span>{" "}
            en ella.
          </p>
          <div className="grid md:grid-cols-3 border-t border-line">
            {[
              { k: "Despliegues/semana", v: "180+" },
              { k: "MTTR promedio", v: "< 9 min" },
              { k: "Ahorro cloud", v: "−38%" },
            ].map((m) => (
              <div
                key={m.k}
                className="reveal border-b md:border-b-0 md:border-r border-line last:border-r-0 py-12 pr-8"
              >
                <div
                  className="font-sans font-light tracking-[-0.04em] mb-4"
                  style={{ fontSize: "clamp(48px,5vw,72px)", lineHeight: 1 }}
                >
                  {m.v}
                </div>
                <div className="font-sans text-[13px] text-muted-foreground">{m.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMINAL */}
      <section className="reveal-section px-[clamp(24px,5vw,80px)] py-[clamp(72px,10vh,140px)] border-t border-line">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <h2 className="reveal font-sans font-medium tracking-[-0.04em] mb-8">
              Pipelines que <span className="text-amber-glow">no rompen</span> los viernes.
            </h2>
            <p className="reveal text-muted-foreground leading-relaxed max-w-md">
              Cada commit pasa por validación, build reproducible, escaneo de seguridad y despliegue
              progresivo. Si algo falla, el rollback es automático.
            </p>
          </div>
          <div className="md:col-span-7 reveal">
            <div className="bg-ink border border-line overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <span className="ml-4 font-sans text-[13px] text-muted-foreground">
                  ~/platform — main
                </span>
              </div>
              <pre className="font-mono text-[13px] md:text-[13px] leading-relaxed p-8 text-muted-foreground">
                <span className="text-cyan-glow">$ terraform apply</span>
                {"\n"}✓ aws_eks_cluster.prod <span className="text-amber-glow">created</span>
                {"\n"}✓ helm_release.argocd <span className="text-amber-glow">created</span>
                {"\n"}✓ kubernetes_manifest.app <span className="text-amber-glow">created</span>
                {"\n"}
                {"\n"}
                <span className="text-cyan-glow">$ kubectl get pods -n production</span>
                {"\n"}
                NAME READY STATUS RESTARTS{"\n"}
                api-7f9c-2k4d <span className="text-cyan-glow">3/3</span> Running 0{"\n"}
                worker-8b1e-pq2 <span className="text-cyan-glow">2/2</span> Running 0{"\n"}
                gateway-4d2a-zx <span className="text-cyan-glow">3/3</span> Running 0{"\n"}
                {"\n"}
                <span className="text-muted-foreground">
                  # deploy time: 2m 14s · zero downtime ✓
                </span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CTA */}
      <section
        id="contacto"
        className="reveal-section px-[clamp(24px,5vw,80px)] pt-[clamp(80px,12vh,160px)] pb-12 border-t border-line relative overflow-hidden"
      >
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-cyan-glow/10 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 w-[400px] h-[400px] rounded-full bg-amber-glow/10 blur-[120px]" />
        <div className="relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="reveal font-sans font-medium tracking-[-0.04em] mb-12">
                Hablemos de tu <span className="text-amber-glow">infraestructura</span>.
              </h2>
              <button
                onClick={openModal}
                data-cursor="$ open"
                className="btn btn-primary btn-lg group"
              >
                Abrir formulario
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>

            <div className="lg:col-span-5 reveal">
              <div className="bg-ink/60 border border-line p-8 md:p-10">
                <div className="font-sans text-[13px] text-muted-foreground mb-5">Contacto</div>
                <div className="flex flex-col gap-4 pb-8 border-b border-line">
                  <a
                    href="mailto:operaciones@nextelco.cloud"
                    data-cursor="$ mail"
                    className="flex items-center gap-3 text-lg md:text-xl text-muted-foreground hover:text-cyan-glow transition group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:scale-110 transition-transform shrink-0"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="border-b border-transparent group-hover:border-cyan-glow transition pb-0.5 break-all">
                      operaciones@nextelco.cloud
                    </span>
                  </a>
                  <a
                    href="tel:+17862244098"
                    data-cursor="$ call"
                    className="flex items-center gap-3 text-lg md:text-xl text-muted-foreground hover:text-cyan-glow transition group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:scale-110 transition-transform shrink-0"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="border-b border-transparent group-hover:border-cyan-glow transition pb-0.5">
                      001 (786) 2244098
                    </span>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div>
                    <div className="font-sans text-[13px] text-muted-foreground mb-3">
                      Ubicación
                    </div>
                    <div className="text-lg md:text-xl">Lima, Perú</div>
                    <div className="font-sans text-xs text-muted-foreground mt-1">
                      UTC−5 · Remoto global
                    </div>
                  </div>
                  <div>
                    <div className="font-sans text-[13px] text-muted-foreground mb-3">
                      Disponibilidad
                    </div>
                    <div className="flex items-center gap-3 text-lg md:text-xl">
                      <span className="w-2 h-2 rounded-full bg-cyan-glow shadow-[0_0_12px_var(--cyan-glow)] animate-pulse" />
                      Q1 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-line flex flex-wrap items-center justify-between gap-4 font-sans text-[13px] text-muted-foreground">
            <div>© 2026 NEXTELCO SAC — Sistemas empresariales, DevOps y DevSecOps</div>
            <div className="flex gap-3">
              <a href="/aviso-legal" className="hover:text-foreground transition-colors">
                Aviso legal
              </a>{" "}
              <span aria-hidden="true">·</span>{" "}
              <a href="/privacidad" className="hover:text-foreground transition-colors">
                Política de privacidad
              </a>
            </div>
            <div>Hecho con criterio · No con plantillas</div>
          </div>
        </div>
      </section>
    </main>
  );
}
