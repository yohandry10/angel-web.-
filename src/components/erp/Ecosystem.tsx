import React from "react";
import { Ic } from "./Icons";

const ECOSYSTEM = [
  {
    icon: Ic.cart,
    cat: "Ventas",
    name: "Ventas",
    desc: "Cotiza, pedido y factura en un solo flujo conectado a SUNAT y a tu inventario.",
  },
  {
    icon: Ic.box,
    cat: "Compras",
    name: "Compras",
    desc: "Solicitudes, órdenes y recepciones que actualizan tus cuentas por pagar solas.",
  },
  {
    icon: Ic.flash,
    cat: "POS",
    name: "Punto de venta",
    desc: "Caja con apertura y cierre, ticket impreso. Funciona sin internet y sincroniza al volver.",
  },
  {
    icon: Ic.boxes,
    cat: "Inventario",
    name: "Inventario multi-almacén",
    desc: "Kárdex valorizado por sucursal, transferencias, mermas y series con trazabilidad.",
  },
  {
    icon: Ic.fileCheck,
    cat: "SUNAT",
    name: "Facturación electrónica",
    desc: "Boleta, factura, nota de crédito y CPE en 1 click. OSE/PSE homologado.",
  },
  {
    icon: Ic.receipt,
    cat: "GRE",
    name: "Guías de remisión",
    desc: "Guía electrónica vinculada al despacho. Sin papeles, sin doble digitar.",
  },
  {
    icon: Ic.calc,
    cat: "Contabilidad",
    name: "Contabilidad automática",
    desc: "Asientos doble partida generados al instante. Cierre de períodos y centros de costo.",
  },
  {
    icon: Ic.layers,
    cat: "SIRE",
    name: "Registro de Ventas",
    desc: "Libro electrónico validado antes de enviar. Cumples con SUNAT sin observaciones.",
  },
  {
    icon: Ic.bank,
    cat: "Finanzas",
    name: "Finanzas & Tesorería",
    desc: "Cobranzas, pagos, bancos y caja en una sola vista. Olvida los Excel paralelos.",
  },
  {
    icon: Ic.trendUp,
    cat: "Tesorería",
    name: "Flujo de caja",
    desc: "Proyección a 90 días con tus movimientos reales. Sabes hoy lo que te falta mañana.",
  },
  {
    icon: Ic.users,
    cat: "RRHH",
    name: "RRHH & Planillas",
    desc: "Candidatos, contratos, planillas y pagos al personal. Conceptos peruanos preconfigurados.",
  },
  {
    icon: Ic.cpu,
    cat: "Analítica",
    name: "Dashboard en vivo",
    desc: "Ventas, caja, cobranzas y CPE refrescados al instante. KPIs por sucursal o consolidados.",
  },
];

export default function Ecosystem() {
  return (
    <section id="modulos" data-screen-label="06 Ecosistema" className="relative py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-[44ch]">
            <span className="kicker">Ecosistema</span>
            <h2 className="mt-4 text-[32px] sm:text-[44px] lg:text-[52px] font-semibold tracking-[-0.035em] leading-[1.04]">
              Doce módulos.
              <br />
              <span className="text-fg-3">Un solo sistema operativo.</span>
            </h2>
          </div>
          <p className="text-[14px] text-fg-3 max-w-[40ch]">
            Ventas, contabilidad, SUNAT, inventario, finanzas y planillas — diseñados para empresas peruanas, funcionando como uno solo.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-line">
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
          <p className="text-[13.5px] text-fg-3">Activas los módulos que necesitas hoy. Encendes el resto cuando crezcas — sin migrar.</p>
          <a href="#integraciones" className="inline-flex items-center gap-1.5 text-[13px] text-fg-2 hover:text-accent transition-colors">
            Ver integraciones disponibles
            <Ic.arrowR size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
