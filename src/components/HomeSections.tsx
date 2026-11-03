import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  GitBranch,
  Mail,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import "./HomeSections.css";

const PROCESS = [
  {
    title: "Entendemos",
    detail:
      "Auditamos arquitectura, costos cloud y pipelines. Identificamos dónde se pierde tiempo y qué pone en riesgo tu operación.",
    result: "Diagnóstico y prioridades",
  },
  {
    title: "Diseñamos",
    detail:
      "Definimos la arquitectura, la estrategia de despliegue y el plan de migración según las necesidades de tu negocio.",
    result: "Un plan para construir",
  },
  {
    title: "Implementamos",
    detail:
      "Construimos con infraestructura como código, GitOps y pipelines reproducibles. Cada entrega tiene un camino de regreso.",
    result: "Cambios con control",
  },
  {
    title: "Acompañamos",
    detail:
      "Observamos métricas, logs y trazas. Ajustamos alertas y objetivos de servicio para mejorar lo que ya está en producción.",
    result: "Operación y mejora continua",
  },
];

const CAPABILITIES = [
  {
    name: "Cloud & OS",
    description: "La base para operar y crecer.",
    items: [
      ["Cloud providers", "AWS, Azure y GCP: cómputo, almacenamiento, seguridad y DNS."],
      ["Sistemas UNIX", "Solaris 10–11, AIX 7.X y Linux: Red Hat, Ubuntu, CentOS y Debian."],
      ["Middleware", "JBoss 7.X, Oracle WebLogic 11g–14 e IBM WebSphere: WAS y MQ."],
      ["Gestión y almacenamiento", "Veritas Cluster Server y Veritas Volume Manager."],
    ],
  },
  {
    name: "DevOps & CI/CD",
    description: "Del código a producción, con control.",
    items: [
      ["Contenedores", "Docker Engine, Kubernetes y Red Hat OpenShift."],
      ["Integración continua", "Jenkins, GitHub Actions, Bitbucket, Artifactory y SonarQube."],
      ["Automatización y entrega", "Red Hat Ansible Automation, Argo CD y Helm."],
      ["Scripting y colaboración", "Python, Shell, JavaScript y Groovy. Jira, Scrum y Kanban."],
    ],
  },
  {
    name: "Machine Learning",
    description: "Modelos que resuelven problemas reales.",
    items: [
      ["Deep Learning", "TensorFlow, PyTorch y Keras. Redes CNN, RNN y FCNN."],
      ["Modelos predictivos", "XGBoost, Random Forest, KNN y regresión lineal."],
      ["Visión por computadora", "OpenCV, Torchvision y Pillow."],
      ["Ciclo de vida y ajuste", "MLflow, TensorBoard, Optuna y Hyperopt."],
    ],
  },
  {
    name: "Data Engineering",
    description: "Datos preparados para tomar decisiones.",
    items: [
      ["Plataformas de datos", "Databricks, Azure Data Factory y Data Lake."],
      ["Procesamiento", "Pandas, NumPy, Matplotlib y Seaborn."],
      ["Series temporales", "Prophet, Statsmodels, TA-Lib y Pandas TA."],
      ["Bases de datos", "MySQL y MSQL, integrados con pipelines de datos."],
    ],
  },
];

export function HomeProcess() {
  return (
    <section
      id="proceso"
      className="home-process home-section"
      aria-labelledby="home-process-title"
    >
      <div className="home-section-top">
        <span>Cómo trabajamos</span>
        <a href="#stack">
          Explorar capacidades <ArrowDown size={16} />
        </a>
      </div>
      <div className="home-heading-row">
        <h2 id="home-process-title">
          Del diagnóstico
          <br />
          <span>a producción.</span>
        </h2>
        <p>Cuatro etapas para construir una plataforma confiable y acompañarla mientras crece.</p>
      </div>
      <ol className="home-process-list">
        {PROCESS.map((step, index) => (
          <li key={step.title}>
            <div className="home-process-number">
              <span>0{index + 1}</span>
              <ArrowRight size={24} aria-hidden="true" />
            </div>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
            <div className="home-process-result">
              <Check size={15} aria-hidden="true" />
              {step.result}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function HomeCapabilities() {
  const [active, setActive] = useState(0);
  const area = CAPABILITIES[active];
  return (
    <section
      id="stack"
      className="home-capabilities home-section"
      aria-labelledby="home-capabilities-title"
    >
      <div className="home-section-top">
        <span>Nuestras capacidades</span>
        <span>Ingeniería de principio a fin</span>
      </div>
      <div className="home-heading-row">
        <h2 id="home-capabilities-title">
          Construir.
          <br />
          <span>Operar. Evolucionar.</span>
        </h2>
        <p>
          Cloud, automatización, inteligencia artificial y datos. El equipo y las herramientas para
          conectar cada parte.
        </p>
      </div>
      <div className="home-capability-layout">
        <div className="home-capability-options" role="group" aria-label="Áreas de especialización">
          {CAPABILITIES.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={active === index}
              aria-controls="home-capability-detail"
              onClick={() => setActive(index)}
            >
              <span className="home-capability-index">0{index + 1}</span>
              <span>{item.name}</span>
              <ArrowUpRight size={21} aria-hidden="true" />
            </button>
          ))}
        </div>
        <div
          id="home-capability-detail"
          className="home-capability-detail"
          role="region"
          aria-label={area.name}
          aria-live="polite"
        >
          <h3>{area.description}</h3>
          <dl>
            {area.items.map(([title, detail]) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function HomeProduct() {
  return (
    <section
      id="producto"
      className="home-product home-section"
      aria-labelledby="home-product-title"
    >
      <div className="home-product-copy">
        <span className="home-section-label">NEXTELCO ERP</span>
        <h2 id="home-product-title">
          Toda tu empresa.
          <br />
          <span>Un solo sistema.</span>
        </h2>
        <p>
          Ventas, compras, inventario, logística, finanzas, contabilidad y planillas. Cada operación
          conecta con la siguiente, sin volver a digitar lo mismo.
        </p>
        <Link to="/erp" className="home-primary-link">
          Conocer NEXTELCO ERP <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </div>
      <div className="home-product-modules" aria-label="Áreas de NEXTELCO ERP">
        {[
          ["01", "Comercial", "Ventas, POS y compras"],
          ["02", "Operaciones", "Inventario, almacenes y logística"],
          ["03", "Finanzas", "Cobros, pagos y contabilidad"],
          ["04", "Administración", "Planillas y documentos electrónicos"],
        ].map(([n, title, detail]) => (
          <div key={n}>
            <span>{n}</span>
            <div>
              <h3>{title}</h3>
              <p>{detail}</p>
            </div>
            <ArrowRight size={19} aria-hidden="true" />
          </div>
        ))}
        <Link to="/erp" hash="modulos">
          Explorar los 16 módulos <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export function HomeResearch() {
  return (
    <section id="bio" className="home-research home-section" aria-labelledby="home-research-title">
      <div className="home-research-image">
        <img
          src="/media/home/applied-research.webp"
          alt="Una estructura de capas de aluminio y metal azul revela su núcleo, junto a una herramienta de precisión. Concepto de investigación e ingeniería."
          width="1122"
          height="1402"
          loading="lazy"
          decoding="async"
        />
        <span>Explorar. Entender. Resolver.</span>
      </div>
      <div className="home-research-copy">
        <span className="home-section-label">El equipo detrás de NEXTELCO</span>
        <h2 id="home-research-title">
          Investigación aplicada.
          <br />
          <span>Ingeniería con criterio.</span>
        </h2>
        <p className="home-research-intro">
          Somos ingenieros e investigadores. Convertimos problemas complejos de negocio en sistemas
          que funcionan en el mundo real.
        </p>
        <div className="home-research-practices">
          <div>
            <h3>Del modelo al producto</h3>
            <p>
              Deep Learning, Machine Learning, ERP, CRM y plataformas a medida. Conectamos
              investigación, datos y software empresarial.
            </p>
          </div>
          <div>
            <h3>Del diseño a la operación</h3>
            <p>
              Arquitectura cloud, DevOps y DevSecOps. Automatización y seguridad desde el primer
              diseño hasta producción.
            </p>
          </div>
        </div>
        <p className="home-research-context">
          Experiencia aplicada en banca, telecomunicaciones y tecnología para organizaciones de
          América Latina, EE. UU. y Europa. Desde Lima, Perú.
        </p>
        <a href="/experiencia" className="home-text-link">
          Conoce nuestra experiencia <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
      <dl className="home-research-facts">
        {[
          ["17+", "Experiencia combinada"],
          ["40+", "Clusters operados"],
          ["12", "Migraciones cloud"],
          ["200+", "Postmortems"],
        ].map(([value, label]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function HomeOperations() {
  return (
    <section
      id="criterio"
      className="home-operations home-section"
      aria-labelledby="home-operations-title"
    >
      <div className="home-section-top">
        <span>En producción</span>
        <ShieldCheck size={22} aria-hidden="true" />
      </div>
      <div className="home-heading-row">
        <h2 id="home-operations-title">
          Infraestructura
          <br />
          <span>bajo control.</span>
        </h2>
        <p>
          Desplegar, observar y recuperar. Trabajamos para que tu equipo se concentre en el negocio
          y tu plataforma siga respondiendo.
        </p>
      </div>
      <dl className="home-operation-facts">
        {[
          ["180+", "Despliegues por semana"],
          ["< 9 min", "MTTR promedio"],
          ["−38%", "Ahorro cloud"],
        ].map(([value, label]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <div className="home-delivery">
        <div className="home-delivery-copy">
          <GitBranch size={28} aria-hidden="true" />
          <h3>
            Cada entrega,
            <br />
            con un camino seguro.
          </h3>
          <p>
            Validación, build reproducible, escaneo de seguridad y despliegue progresivo. Si algo
            falla, el rollback es automático.
          </p>
        </div>
        <div className="home-delivery-flow" aria-label="Etapas del pipeline de entrega">
          {[
            ["Validación", "Pruebas antes de avanzar"],
            ["Build", "El mismo artefacto en cada entorno"],
            ["Seguridad", "Escaneo de código y dependencias"],
            ["Despliegue", "Entrega progresiva y observada"],
          ].map(([title, detail], index) => (
            <div className="home-delivery-step" key={title}>
              <span className="home-delivery-node">0{index + 1}</span>
              <div>
                <h4>{title}</h4>
                <p>{detail}</p>
              </div>
              <Check size={17} aria-hidden="true" />
            </div>
          ))}
          <div className="home-delivery-rollback">
            <RotateCcw size={17} aria-hidden="true" />
            <span>Rollback automático ante fallos</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeContact({ onContact }: { onContact: () => void }) {
  return (
    <section
      id="contacto"
      className="home-contact home-section"
      aria-labelledby="home-contact-title"
    >
      <div className="home-contact-main">
        <div>
          <span className="home-section-label">Tu siguiente proyecto</span>
          <h2 id="home-contact-title">
            Hagamos que
            <br />
            <span>funcione.</span>
          </h2>
          <button type="button" className="home-primary-link" onClick={onContact}>
            Hablemos de tu proyecto <ArrowUpRight size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="home-contact-details">
          <a href="mailto:operaciones@nextelco.cloud">
            <Mail size={22} aria-hidden="true" />
            <span>operaciones@nextelco.cloud</span>
          </a>
          <a href="tel:+17862244098">
            001 (786) 2244098 <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p>
            Lima, Perú<span>UTC−5 · Remoto global</span>
          </p>
        </div>
      </div>
      <footer className="home-footer">
        <a href="#inicio" aria-label="NEXTELCO — volver al inicio">
          <BrandLogo />
        </a>
        <span>© 2026 NEXTELCO SAC</span>
        <nav aria-label="Información legal">
          <Link to="/aviso-legal">Aviso legal</Link>
          <Link to="/privacidad">Privacidad</Link>
        </nav>
      </footer>
    </section>
  );
}
