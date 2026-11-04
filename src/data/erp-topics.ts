/**
 * Páginas temáticas del ERP para búsquedas concretas.
 * Todo el contenido sale de lo que /erp ya describe (módulos y FAQ); no agregar funciones nuevas aquí.
 */
export interface ErpTopic {
  path: "/facturacion-electronica-sunat" | "/sistema-pos-peru" | "/software-inventario";
  label: string;
  title: string;
  description: string;
  heading: string;
  headingAccent: string;
  intro: string;
  features: { t: string; d: string }[];
  steps: { t: string; d: string }[];
  faq: { q: string; a: string }[];
}

export const ERP_TOPICS: ErpTopic[] = [
  {
    path: "/facturacion-electronica-sunat",
    label: "Facturación SUNAT",
    title: "Facturación electrónica SUNAT integrada al ERP | NEXTELCO",
    description:
      "Emite facturas, boletas, notas y guías electrónicas desde tus ventas y despachos, con SIRE, PLE y contabilidad conectados. ERP en Lima, Perú.",
    heading: "Facturación electrónica SUNAT,",
    headingAccent: "conectada a tu operación.",
    intro:
      "En NEXTELCO ERP el comprobante no se digita aparte: sale del pedido o del despacho. Genera, firma, envía y consulta facturas, boletas, notas de crédito y débito y guías de remisión electrónicas, con seguimiento de estados y errores, según el servicio configurado (SUNAT u OSE).",
    features: [
      {
        t: "Comprobantes electrónicos",
        d: "Facturas, boletas, notas de crédito y débito y guías de remisión electrónicas, con seguimiento de estados y errores de cada envío.",
      },
      {
        t: "Desde la venta y el despacho",
        d: "La factura y la guía salen del mismo pedido y por lo despachado. Cada comprobante queda enlazado a su cotización, pedido, despacho y cobro.",
      },
      {
        t: "SIRE y libros electrónicos",
        d: "Prepara la información de SIRE de ventas y compras, la compara por período y genera los libros electrónicos PLE en los formatos implementados.",
      },
      {
        t: "Contabilidad sin volver a digitar",
        d: "Cada comprobante genera su asiento vinculado al documento de origen. El contador revisa, confirma o revierte asientos y cierra períodos con permisos.",
      },
    ],
    steps: [
      {
        t: "Configuración fiscal",
        d: "Registramos los datos de tu empresa, credenciales, certificado digital, series y el servicio de envío (SUNAT u OSE).",
      },
      {
        t: "Ventas y despachos",
        d: "Tu equipo cotiza, aprueba y despacha; el comprobante se emite desde esa operación.",
      },
      {
        t: "Seguimiento",
        d: "Cada envío muestra su estado y sus errores para corregirlos a tiempo.",
      },
      {
        t: "Cierre del período",
        d: "Ventas y compras llegan a SIRE y a los libros PLE para tu revisión y presentación.",
      },
    ],
    faq: [
      {
        q: "¿NEXTELCO ERP emite comprobantes electrónicos?",
        a: "Sí. Genera, firma, envía y consulta facturas, boletas, notas de crédito y débito y guías de remisión electrónicas, con seguimiento de estados y errores, según el servicio configurado (SUNAT u OSE). La configuración es por empresa y requiere sus datos, credenciales y certificado digital.",
      },
      {
        q: "¿Qué hace con SIRE y los libros electrónicos?",
        a: "Prepara la información de SIRE de ventas y de compras, la compara por período y genera los libros electrónicos PLE en los formatos implementados. La revisión y la presentación ante SUNAT siguen a cargo de la empresa.",
      },
      {
        q: "¿Puedo emitir comprobantes sin internet?",
        a: "No. La aplicación de escritorio permite seguir vendiendo sin conexión, pero emitir y enviar comprobantes electrónicos sí requiere conexión.",
      },
    ],
  },
  {
    path: "/sistema-pos-peru",
    label: "Sistema POS",
    title: "Sistema POS y control de cajas en Perú | NEXTELCO",
    description:
      "Punto de venta con apertura y cierre de caja, cobros por medio de pago y control de diferencias. Vende sin internet y conecta stock y contabilidad.",
    heading: "Sistema POS y cajas",
    headingAccent: "para tiendas en Perú.",
    intro:
      "Cada caja abre y cierra su sesión, registra cobros por medio de pago y controla diferencias. La venta descuenta el stock del almacén del local y llega a finanzas y contabilidad, sin volver a digitar.",
    features: [
      {
        t: "Caja bajo control",
        d: "Apertura y cierre de caja, cobros por medio de pago, tickets, ingresos, egresos y control de diferencias en cada sesión.",
      },
      {
        t: "Vende sin internet",
        d: "Con la aplicación de escritorio, el POS y la caja siguen operando sin conexión y se sincronizan al volver.",
      },
      {
        t: "Stock del local al día",
        d: "Cada venta descuenta el stock del almacén de su establecimiento, con stock reservado y disponible a la vista.",
      },
      {
        t: "Varias tiendas, un solo sistema",
        d: "Cada establecimiento tiene sus almacenes, cajas y series. Los centros de costo muestran el resultado de cada local.",
      },
    ],
    steps: [
      {
        t: "Establecimientos y cajas",
        d: "Configuramos tus locales con sus almacenes, cajas, series y medios de pago.",
      },
      {
        t: "Usuarios y permisos",
        d: "Cada cajero ve y hace solo lo que le corresponde, por rol y por establecimiento.",
      },
      {
        t: "Venta diaria",
        d: "Se abre la caja, se vende y se cobra; las diferencias quedan registradas al cerrar.",
      },
      {
        t: "Finanzas y contabilidad",
        d: "Las ventas y los cobros llegan a finanzas y generan sus asientos vinculados.",
      },
    ],
    faq: [
      {
        q: "¿El POS funciona sin internet?",
        a: "Sí, con la aplicación de escritorio. El POS y la caja, las cotizaciones, los pedidos con reserva de stock, los clientes y el inventario siguen operando sin conexión y se sincronizan al volver. Emitir y enviar comprobantes electrónicos sí requiere conexión.",
      },
      {
        q: "¿Puedo manejar varias tiendas?",
        a: "Sí. Cada establecimiento tiene sus almacenes, cajas y series. La contabilidad y los libros corresponden a la empresa (RUC); los centros de costo permiten analizar el resultado de cada local.",
      },
      {
        q: "¿Puedo controlar lo que hace cada cajero?",
        a: "Sí. El acceso se define por usuario, rol, permiso y establecimiento, y cada acción queda en el historial con usuario, empresa y fecha.",
      },
    ],
  },
  {
    path: "/software-inventario",
    label: "Inventario",
    title: "Software de inventario y almacenes con kardex | NEXTELCO",
    description:
      "Inventario en varios almacenes: stock reservado y disponible, transferencias, kardex físico y valorizado, PECOSA y despachos. ERP en Perú.",
    heading: "Software de inventario,",
    headingAccent: "cada producto en su lugar.",
    intro:
      "El inventario de NEXTELCO ERP está conectado a ventas, compras y logística. Un pedido reserva el stock, el almacén prepara y despacha por partes, y el kardex se actualiza con cada movimiento.",
    features: [
      {
        t: "Varios almacenes",
        d: "Almacenes y ubicaciones, stock reservado y disponible, transferencias entre almacenes y ajustes.",
      },
      {
        t: "Kardex físico y valorizado",
        d: "Cada entrada y salida queda registrada en el kardex, en unidades y en valor.",
      },
      {
        t: "Del pedido al despacho",
        d: "Picking, packing, despachos parciales, pendientes, tránsito, entrega e incidencias, enlazados al pedido y a la guía de remisión.",
      },
      {
        t: "PECOSA",
        d: "Pedido comprobante de salida para entregar bienes del almacén a áreas internas u obras, con aprobación y registro en el kardex.",
      },
    ],
    steps: [
      {
        t: "Almacenes y productos",
        d: "Configuramos tus almacenes, ubicaciones y el stock inicial que traes de tu sistema actual.",
      },
      {
        t: "Compras y recepciones",
        d: "Las órdenes de compra admiten recepciones parciales que suman al stock.",
      },
      {
        t: "Reservas y despachos",
        d: "Cada pedido reserva su stock y el almacén despacha por partes con su guía.",
      },
      {
        t: "Control",
        d: "Transferencias, ajustes y kardex valorizado para cuadrar el inventario.",
      },
    ],
    faq: [
      {
        q: "¿Puedo manejar varias sucursales y almacenes?",
        a: "Sí. Cada establecimiento tiene sus almacenes, cajas y series. La contabilidad y los libros corresponden a la empresa (RUC); los centros de costo permiten analizar el resultado de cada local.",
      },
      {
        q: "¿Pueden migrar mi inventario actual?",
        a: "Sí. El ERP importa clientes, proveedores, stock inicial, balance de apertura, cuentas por cobrar y por pagar abiertas y comprobantes históricos. El alcance, el costo y el plazo se definen en una evaluación previa.",
      },
      {
        q: "¿El inventario funciona sin internet?",
        a: "Sí, con la aplicación de escritorio. El inventario, el POS y los pedidos con reserva de stock siguen operando sin conexión y se sincronizan al volver.",
      },
    ],
  },
];
