import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  ChartNoAxesCombined,
  FileText,
  LayoutDashboard,
  Wallet,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { DEMO_WA_URL } from "@/lib/erp-contact";
import "./Hero.css";

function ControlScreen() {
  return (
    <div
      className="erp-control-screen"
      data-ui
      aria-label="Vista ilustrativa de NEXTELCO ERP con datos de ejemplo"
    >
      <aside className="erp-control-sidebar" aria-hidden="true">
        <BrandLogo />
        <span className="is-active">
          <LayoutDashboard /> Resumen
        </span>
        <span>
          <ChartNoAxesCombined /> Ventas
        </span>
        <span>
          <Boxes /> Inventario
        </span>
        <span>
          <Wallet /> Finanzas
        </span>
        <span>
          <FileText /> Contabilidad
        </span>
        <small>Todo, conectado.</small>
      </aside>
      <div className="erp-control-main">
        <div className="erp-control-heading">
          <strong>Tu operación, al día.</strong>
          <span>Datos de ejemplo</span>
        </div>
        <div className="erp-control-stats">
          <div>
            <span>Ventas del mes</span>
            <strong>S/ 24,580</strong>
            <small>Ventas y comprobantes</small>
          </div>
          <div>
            <span>Pedidos en curso</span>
            <strong>124</strong>
            <small>Del pedido al despacho</small>
          </div>
          <div>
            <span>Por cobrar</span>
            <strong>S/ 18,320</strong>
            <small>Cuentas y vencimientos</small>
          </div>
        </div>
        <div className="erp-control-chart">
          <div>
            <strong>Ventas de la semana</strong>
            <span>Vista comercial</span>
          </div>
          <svg
            viewBox="0 0 440 100"
            preserveAspectRatio="none"
            aria-label="Ejemplo de evolución de ventas durante la semana"
            role="img"
          >
            <path d="M5 85H435M5 48H435M5 12H435" stroke="#e3eaf4" strokeWidth="1" />
            <path
              d="M5 76L75 62L145 70L215 32L285 44L355 15L435 8"
              fill="none"
              stroke="#0059f7"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M5 86L75 80L145 84L215 64L285 70L355 48L435 50"
              fill="none"
              stroke="#94bafc"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <div className="erp-control-days" aria-hidden="true">
            <span>Lun</span>
            <span>Mar</span>
            <span>Mié</span>
            <span>Jue</span>
            <span>Vie</span>
            <span>Sáb</span>
            <span>Dom</span>
          </div>
        </div>
        <div className="erp-control-orders">
          <strong>Últimas operaciones</strong>
          <span>
            Pedido PV-000482 <b>Comercial Norte</b>
            <em>Aprobado</em>
          </span>
          <span>
            Factura F001-4123 <b>Venta registrada</b>
            <em>Contabilizada</em>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="producto" className="erp-hero" aria-labelledby="erp-hero-title">
      <div className="erp-orbit-scene">
        <picture>
          <source media="(min-width: 1800px)" srcSet="/media/erp/connected-business-wide.webp" />
          <img
            src="/media/erp/connected-business-hero.webp"
            width="1536"
            height="1024"
            fetchPriority="high"
            decoding="async"
            alt="Un aro de metal azul conecta documentos y mercancía alrededor de un monitor con NEXTELCO ERP."
          />
        </picture>
        <ControlScreen />
      </div>
      <div className="erp-hero-copy">
        <h1 id="erp-hero-title">
          <span>TU EMPRESA.</span>
          <span>EN CONTROL.</span>
        </h1>
        <p>
          Ventas, inventario y finanzas.
          <br />
          Conectados en un solo ERP.
        </p>
        <div className="erp-hero-actions">
          <a className="erp-hero-cta" href={DEMO_WA_URL} target="_blank" rel="noopener noreferrer">
            Solicitar una demo <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <a className="erp-hero-explore" href="#modulos">
            Ver módulos <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        <p className="erp-hero-support">Implementación acompañada. Equipo en Lima.</p>
      </div>
      <div className="erp-hero-bottom">
        <span>NEXTELCO ERP</span>
        <a href="#arquitectura">
          Una operación mueve a toda tu empresa <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
