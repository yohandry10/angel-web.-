import React, { useState } from "react";
import { Ic } from "./Icons";

type IconT = React.ComponentType<{ size?: number; className?: string }>;

interface Effect {
  icon: IconT;
  name: string;
  headline: string;
  status: string;
}

interface Flow {
  id: string;
  tab: string;
  steps: string[];
  trigger: {
    icon: IconT;
    label: string;
    title: string;
    subtitle: string;
    amountLabel: string;
    amount: string;
    code: string;
    note: string;
  };
  top: Effect[];
  bot: Effect[];
}

// Datos de ejemplo. Cada recorrido muestra qué registra el ERP y en qué estado queda cada paso.
const FLOWS: Flow[] = [
  {
    id: "venta",
    tab: "Venta",
    steps: ["Cotización", "Pedido", "Reserva", "Despacho", "Factura", "Cobro"],
    trigger: {
      icon: Ic.cart,
      label: "Pedido aprobado",
      title: "Pedido PV-000482",
      subtitle: "Comercial Norte · COT-0311",
      amountLabel: "Total · crédito 30 días",
      amount: "S/ 4,720.00",
      code: "Lista mayorista",
      note: "Aprobado",
    },
    top: [
      {
        icon: Ic.boxes,
        name: "Inventario",
        headline: "120 u. reservadas en Almacén Central",
        status: "Reservado",
      },
      {
        icon: Ic.globe,
        name: "Logística",
        headline: "Orden de preparación, picking y packing",
        status: "En curso",
      },
      {
        icon: Ic.fileCheck,
        name: "SUNAT · CPE",
        headline: "Factura y guía de remisión al despachar",
        status: "Por emitir",
      },
    ],
    bot: [
      {
        icon: Ic.bank,
        name: "Por cobrar",
        headline: "Saldo con vencimiento a 30 días",
        status: "Al facturar",
      },
      {
        icon: Ic.calc,
        name: "Contabilidad",
        headline: "Asiento vinculado a la factura",
        status: "Al facturar",
      },
      {
        icon: Ic.users,
        name: "Comisiones",
        headline: "Comisión del vendedor por marca",
        status: "Calculada",
      },
    ],
  },
  {
    id: "compra",
    tab: "Compra",
    steps: ["Orden", "Recepción", "Factura del proveedor", "Pago"],
    trigger: {
      icon: Ic.box,
      label: "Recepción registrada",
      title: "Recepción REC-0193",
      subtitle: "Insumos del Sur · OC-0087",
      amountLabel: "Recibido / pedido",
      amount: "80 / 120 u.",
      code: "Almacén Central",
      note: "Parcial",
    },
    top: [
      {
        icon: Ic.boxes,
        name: "Inventario",
        headline: "Entrada al almacén y kardex valorizado",
        status: "Actualizado",
      },
      {
        icon: Ic.receipt,
        name: "Orden de compra",
        headline: "40 u. pendientes de recibir",
        status: "Parcial",
      },
      {
        icon: Ic.clock,
        name: "Historial",
        headline: "Usuario, fecha y documento de origen",
        status: "Registrado",
      },
    ],
    bot: [
      {
        icon: Ic.fileCheck,
        name: "Factura proveedor",
        headline: "Al registrarla nace la cuenta por pagar",
        status: "Siguiente",
      },
      {
        icon: Ic.bank,
        name: "Por pagar",
        headline: "Vencimiento y programación del pago",
        status: "Siguiente",
      },
      {
        icon: Ic.calc,
        name: "Contabilidad",
        headline: "Asiento de la compra, enlazado a la factura",
        status: "Siguiente",
      },
    ],
  },
  {
    id: "devolucion",
    tab: "Devolución",
    steps: ["Solicitud", "Recepción", "Nota de crédito", "Saldo a favor o reembolso"],
    trigger: {
      icon: Ic.layers,
      label: "Devolución recibida",
      title: "RMA-0057",
      subtitle: "Comercial Norte · F001-4123",
      amountLabel: "Recibido / solicitado",
      amount: "3 / 5 u.",
      code: "Motivo: producto dañado",
      note: "Parcial",
    },
    top: [
      {
        icon: Ic.boxes,
        name: "Inventario",
        headline: "Reingreso de 3 u. al almacén",
        status: "Actualizado",
      },
      {
        icon: Ic.receipt,
        name: "Devolución",
        headline: "2 u. pendientes de recibir",
        status: "Parcial",
      },
      {
        icon: Ic.fileCheck,
        name: "SUNAT · CPE",
        headline: "Nota de crédito electrónica",
        status: "Por emitir",
      },
    ],
    bot: [
      {
        icon: Ic.bank,
        name: "Saldo a favor",
        headline: "Crédito disponible para el cliente",
        status: "Al emitir NC",
      },
      {
        icon: Ic.trendUp,
        name: "Tesorería",
        headline: "Aplicación a otra factura o reembolso",
        status: "A elegir",
      },
      {
        icon: Ic.calc,
        name: "Contabilidad",
        headline: "Asiento vinculado a la nota de crédito",
        status: "Al emitir NC",
      },
    ],
  },
  {
    id: "planilla",
    tab: "Planilla",
    steps: ["Asistencia y conceptos", "Planilla", "Boleta", "Pago"],
    trigger: {
      icon: Ic.users,
      label: "Planilla aprobada",
      title: "Planilla octubre 2026",
      subtitle: "24 colaboradores · Sede Lima",
      amountLabel: "Neto a pagar",
      amount: "S/ 68,400.00",
      code: "PLA-2026-10",
      note: "Aprobada",
    },
    top: [
      {
        icon: Ic.clock,
        name: "Asistencia",
        headline: "Horas, tardanzas y vacaciones del mes",
        status: "Consolidado",
      },
      {
        icon: Ic.receipt,
        name: "Boletas",
        headline: "Boleta de pago por colaborador",
        status: "Generadas",
      },
      {
        icon: Ic.shield,
        name: "Beneficios",
        headline: "CTS y liquidaciones calculadas",
        status: "Calculado",
      },
    ],
    bot: [
      {
        icon: Ic.bank,
        name: "Tesorería",
        headline: "Pagos al personal programados",
        status: "Programado",
      },
      {
        icon: Ic.calc,
        name: "Contabilidad",
        headline: "Asiento de planilla generado",
        status: "Generado",
      },
      {
        icon: Ic.layers,
        name: "PLAME · T-Registro",
        headline: "Información preparada para declarar",
        status: "Por revisar",
      },
    ],
  },
];

export default function EventArchitecture() {
  const [active, setActive] = useState(FLOWS[0].id);
  const flow = FLOWS.find((item) => item.id === active) ?? FLOWS[0];
  const TriggerIcon = flow.trigger.icon;
  return (
    <section id="arquitectura" className="erp-flow-section">
      <div className="erp-section-shell">
        <div className="erp-flow-heading">
          <h2>
            Una operación.
            <br />
            Todo conectado.
          </h2>
          <p>
            Un pedido reserva el stock, activa el despacho y conecta facturación, cobranza y
            contabilidad. Cada paso conserva su origen, sus permisos y su historial.
          </p>
        </div>
        <div
          className="erp-flow-tabs"
          role="tablist"
          aria-label="Explorar recorridos de la operación"
        >
          {FLOWS.map((item, index) => (
            <button
              key={item.id}
              id={`erp-flow-tab-${item.id}`}
              role="tab"
              aria-selected={active === item.id}
              aria-controls="erp-flow-panel"
              tabIndex={active === item.id ? 0 : -1}
              onClick={() => setActive(item.id)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowRight") next = (index + 1) % FLOWS.length;
                else if (event.key === "ArrowLeft")
                  next = (index - 1 + FLOWS.length) % FLOWS.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = FLOWS.length - 1;
                else return;
                event.preventDefault();
                setActive(FLOWS[next].id);
                event.currentTarget.parentElement
                  ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
                  [next]?.focus();
              }}
            >
              {item.tab}
            </button>
          ))}
        </div>
        <div
          id="erp-flow-panel"
          role="tabpanel"
          aria-labelledby={`erp-flow-tab-${flow.id}`}
          className="erp-flow-workspace"
          data-ui
        >
          <div className="erp-flow-source">
            <div className="erp-flow-source-top">
              <span>{flow.trigger.label}</span>
              <span>Ejemplo</span>
            </div>
            <TriggerIcon />
            <h3>{flow.trigger.title}</h3>
            <p>{flow.trigger.subtitle}</p>
            <strong>{flow.trigger.amount}</strong>
            <small>{flow.trigger.amountLabel}</small>
            <div className="erp-flow-source-bottom">
              <span>{flow.trigger.code}</span>
              <span>{flow.trigger.note}</span>
            </div>
          </div>
          <div className="erp-flow-results">
            <ol className="erp-flow-steps" aria-label={`Recorrido de ${flow.tab.toLowerCase()}`}>
              {flow.steps.map((step, index) => (
                <li key={step}>
                  {index > 0 && <Ic.arrowR size={12} aria-hidden="true" />}
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            {[...flow.top, ...flow.bot].map((effect) => {
              const Icon = effect.icon;
              return (
                <div className="erp-flow-result" key={effect.name}>
                  <Icon />
                  <div>
                    <strong>{effect.name}</strong>
                    <p>{effect.headline}</p>
                  </div>
                  <span>{effect.status}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="erp-flow-guarantees">
          <span>
            <Ic.layers />
            Trazabilidad hasta el origen
          </span>
          <span>
            <Ic.shield />
            Permisos en cada paso
          </span>
          <span>
            <Ic.clock />
            Historial de acciones
          </span>
        </div>
        <p className="erp-flow-disclaimer">
          Recorridos ilustrativos con datos de ejemplo. El envío de comprobantes a SUNAT u OSE
          depende de la configuración fiscal de cada empresa y de la respuesta de esos servicios.
        </p>
      </div>
    </section>
  );
}
