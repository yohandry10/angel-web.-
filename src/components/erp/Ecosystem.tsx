import React from "react";
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
    desc: "Apertura y cierre de caja, cobros por medio de pago, tickets, ingresos, egresos y control de diferencias. Operación local en la app de escritorio.",
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
    desc: "Saldos, vencimientos, cobros, pagos, anticipos y saldos a favor aplicados a obligaciones posteriores.",
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

export default function Ecosystem() {
  return (
    <section id="modulos" data-screen-label="05 Ecosistema" className="relative py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-[44ch]">
            <span className="kicker">Ecosistema</span>
            <h2 className="mt-4 text-[32px] sm:text-[44px] lg:text-[52px] font-semibold tracking-[-0.035em] leading-[1.04]">
              Dieciséis módulos.
              <br />
              <span className="text-fg-3">Un solo sistema.</span>
            </h2>
          </div>
          <p className="text-[14px] text-fg-3 max-w-[40ch]">
            Desde la cotización hasta el asiento contable, desde la asistencia hasta la boleta. En web y en aplicación de escritorio, con configuración por empresa.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
          {ECOSYSTEM.map((m, i) => {
            const I = m.icon;
            return (
              <div key={i} className="border-r border-b border-line p-5 sm:p-6 group lift cursor-default" style={{ background: "var(--bg)" }}>
                <div className="flex items-center gap-2.5">
                  <span
                    className="inline-grid place-items-center w-9 h-9 rounded-md"
                    style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
                  >
                    <I size={15} className="text-fg-2 group-hover:text-accent transition-colors" />
                  </span>
                  <span className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-fg-4">{m.cat}</span>
                </div>
                <div className="mt-4 text-[15px] font-semibold tracking-[-0.01em] text-fg">{m.name}</div>
                <div className="mt-1.5 text-[12.5px] text-fg-3 leading-[1.5]">{m.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Footer line */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13.5px] text-fg-3 max-w-[70ch]">
            La implementación contempla Perú, Argentina y Colombia, con funciones específicas por país. Esta página describe el alcance para Perú.
          </p>
          <a href="#cta" className="inline-flex items-center gap-1.5 text-[13px] text-fg-2 hover:text-accent transition-colors shrink-0">
            Consultar el alcance para tu país
            <Ic.arrowR size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
