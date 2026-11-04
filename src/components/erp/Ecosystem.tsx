import { useState } from "react";
import { Ic } from "./Icons";

const ECOSYSTEM = [
  {
    icon: Ic.cart,
    cat: "Ventas",
    name: "Ventas y gestión comercial",
    desc: "Cotizaciones con aprobación, pedidos, reserva de stock, listas de precios por cliente, vendedor o marca, control de crédito y comisiones.",
  },
  {
    icon: Ic.flash,
    cat: "POS",
    name: "Punto de venta y cajas",
    desc: "Apertura y cierre de caja, cobros por medio de pago, tickets, ingresos, egresos y control de diferencias. Sigue vendiendo sin conexión en la app de escritorio.",
  },
  {
    icon: Ic.box,
    cat: "Compras",
    name: "Compras y proveedores",
    desc: "Cotizaciones y órdenes con aprobación, fechas de entrega, recepciones parciales, factura del proveedor y devoluciones a proveedor.",
  },
  {
    icon: Ic.boxes,
    cat: "Inventario",
    name: "Inventario y almacenes",
    desc: "Varios almacenes y ubicaciones, stock reservado y disponible, transferencias, ajustes y kardex físico y valorizado.",
  },
  {
    icon: Ic.receipt,
    cat: "PECOSA",
    name: "PECOSA",
    desc: "Pedido comprobante de salida para entregar bienes del almacén a áreas internas, con aprobación y registro en el kardex.",
  },
  {
    icon: Ic.globe,
    cat: "Logística",
    name: "Logística y despachos",
    desc: "Picking, packing, despachos parciales, pendientes, tránsito, entrega e incidencias, enlazados al pedido y a la guía de remisión.",
  },
  {
    icon: Ic.layers,
    cat: "Devoluciones",
    name: "Devoluciones",
    desc: "Solicitudes de devolución, recepciones parciales, notas de crédito, saldos a favor y reembolsos.",
  },
  {
    icon: Ic.bank,
    cat: "Finanzas",
    name: "Cuentas por cobrar y pagar",
    desc: "Saldos, vencimientos, cobros, pagos, anticipos y saldos a favor. Retenciones, percepciones y detracciones, con su depósito y efecto en la cuenta.",
  },
  {
    icon: Ic.trendUp,
    cat: "Tesorería",
    name: "Bancos y conciliación",
    desc: "Cajas y bancos, importación de extractos, conciliación manual y automática, tipo de cambio y proyección de flujo de caja.",
  },
  {
    icon: Ic.calc,
    cat: "Contabilidad",
    name: "Contabilidad",
    desc: "Plan de cuentas, asientos desde operaciones, confirmación y reversión, cierre y reapertura de períodos con permisos.",
  },
  {
    icon: Ic.database,
    cat: "Contabilidad",
    name: "Costos, activos y presupuestos",
    desc: "Centros de costo, presupuestos, multimoneda y diferencias de cambio, activos fijos y depreciación, plantillas recurrentes y devengos.",
  },
  {
    icon: Ic.fileCheck,
    cat: "SUNAT",
    name: "Documentos electrónicos",
    desc: "Facturas, boletas, notas de crédito y débito y guías de remisión electrónicas, con seguimiento de estados y errores.",
  },
  {
    icon: Ic.flag,
    cat: "SIRE · PLE",
    name: "SIRE y libros electrónicos",
    desc: "Preparación de SIRE de ventas y compras con comparación por período, y libros electrónicos PLE en los formatos implementados.",
  },
  {
    icon: Ic.users,
    cat: "RRHH",
    name: "RRHH y planillas",
    desc: "Contratos, horarios, asistencia, vacaciones, boletas, CTS, liquidaciones y preparación de información para PLAME y T-Registro.",
  },
  {
    icon: Ic.building,
    cat: "Control",
    name: "Empresas, sucursales y permisos",
    desc: "Establecimientos con sus almacenes, cajas y series. Acceso por usuario, rol, permiso y establecimiento, con auditoría de acciones.",
  },
  {
    icon: Ic.cpu,
    cat: "Reportes",
    name: "Reportes y exportaciones",
    desc: "Tableros comerciales, financieros, contables y operativos; balance de comprobación, estados financieros y exportación a Excel y PDF.",
  },
];

const MODULE_GROUPS = [
  {
    id: "comercial",
    name: "Comercial",
    title: "De la cotización a la venta.",
    items: [0, 1, 2, 6],
  },
  {
    id: "operaciones",
    name: "Operaciones",
    title: "Cada producto, en su lugar.",
    items: [3, 4, 5, 14],
  },
  { id: "finanzas", name: "Finanzas", title: "Las cuentas claras, siempre.", items: [7, 8, 9, 10] },
  {
    id: "administracion",
    name: "Administración",
    title: "Personas, documentos y decisiones.",
    items: [11, 12, 13, 15],
  },
];

export default function Ecosystem() {
  const [active, setActive] = useState(MODULE_GROUPS[0].id);
  return (
    <section id="modulos" className="erp-modules-section" aria-labelledby="erp-modules-title">
      <div className="erp-section-shell">
        <div className="erp-modules-heading" data-reveal="group">
          <h2 id="erp-modules-title">
            16 módulos.
            <br />
            <span>Un solo sistema.</span>
          </h2>
          <p>
            Explora el ERP por área. De la primera cotización al cierre contable, sin perder la
            conexión entre operaciones.
          </p>
        </div>
        <div className="erp-modules-layout" data-reveal="group">
          <div className="erp-module-navigation" role="group" aria-label="Áreas de los módulos">
            {MODULE_GROUPS.map((item) => (
              <button
                type="button"
                key={item.id}
                className="erp-module-category"
                aria-pressed={active === item.id}
                aria-controls={`erp-module-detail-${item.id}`}
                onClick={() => setActive(item.id)}
              >
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.items.length} módulos</small>
                </span>
                <Ic.arrowR aria-hidden="true" />
              </button>
            ))}
          </div>
          {MODULE_GROUPS.map((group) => (
            <div
              className="erp-module-detail"
              key={group.id}
              id={`erp-module-detail-${group.id}`}
              hidden={active !== group.id}
              role="region"
              aria-label={`Módulos de ${group.name.toLowerCase()}`}
            >
              <div className="erp-module-detail-heading">
                <h3>{group.title}</h3>
                <a href="#cta" className="erp-modules-question">
                  Solicitar una demo <Ic.arrowR size={17} aria-hidden="true" />
                </a>
              </div>
              <dl className="erp-module-list">
                {group.items.map((index) => {
                  const item = ECOSYSTEM[index];
                  const Icon = item.icon;
                  return (
                    <div key={item.name}>
                      <dt>
                        <Icon aria-hidden="true" />
                        {item.name}
                      </dt>
                      <dd>{item.desc}</dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          ))}
          <p className="erp-modules-country">
            Web y aplicación de escritorio, con configuración por empresa. Alcance descrito para
            Perú; consulta las funciones disponibles para Argentina y Colombia.
          </p>
        </div>
      </div>
    </section>
  );
}
