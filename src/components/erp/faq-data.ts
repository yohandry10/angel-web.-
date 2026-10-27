export interface FAQItem {
  tag: string;
  q: string;
  a: string;
}

// Fuente única: la usa el acordeón de la sección FAQ y el JSON-LD (FAQPage) de la ruta /erp.
export const FAQ_ITEMS: FAQItem[] = [
  {
    tag: "SUNAT",
    q: "¿NEXTELCO ERP emite comprobantes electrónicos?",
    a: "Sí. Genera, firma, envía y consulta facturas, boletas, notas de crédito y débito y guías de remisión electrónicas, con seguimiento de estados y errores, según el servicio configurado (SUNAT u OSE). La configuración es por empresa y requiere sus datos, credenciales y certificado digital.",
  },
  {
    tag: "Contabilidad",
    q: "¿La contabilidad se registra sola?",
    a: "Las ventas, compras, cobros, pagos, inventario y planillas generan asientos vinculados a su documento de origen, lo que evita volver a digitarlos. El contador conserva el control: revisa, confirma o revierte asientos, y cierra o reabre períodos con permisos.",
  },
  {
    tag: "SIRE",
    q: "¿Qué hace con SIRE y los libros electrónicos?",
    a: "Prepara la información de SIRE de ventas y de compras, la compara por período y genera los libros electrónicos PLE en los formatos implementados. La revisión y la presentación ante SUNAT siguen a cargo de la empresa.",
  },
  {
    tag: "Sin conexión",
    q: "¿Funciona sin internet?",
    a: "Sí, con la aplicación de escritorio. El POS y la caja, las cotizaciones, los pedidos con reserva de stock, los clientes y el inventario siguen operando sin conexión y se sincronizan al volver; los demás módulos se consultan con los datos ya descargados. Emitir y enviar comprobantes electrónicos sí requiere conexión.",
  },
  {
    tag: "Sucursales",
    q: "¿Puedo manejar varias sucursales y almacenes?",
    a: "Sí. Cada establecimiento tiene sus almacenes, cajas y series. La contabilidad y los libros corresponden a la empresa (RUC); los centros de costo permiten analizar el resultado de cada local.",
  },
  {
    tag: "Permisos",
    q: "¿Puedo controlar lo que ve y hace cada usuario?",
    a: "Sí. El acceso se define por usuario, rol, permiso y establecimiento. Las aprobaciones, excepciones comerciales y cierres de período requieren el permiso correspondiente, y cada acción queda en el historial con usuario, empresa y fecha.",
  },
  {
    tag: "Migración",
    q: "¿Pueden migrar mi información actual?",
    a: "Sí. El ERP importa clientes, proveedores, stock inicial, balance de apertura, cuentas por cobrar y por pagar abiertas y comprobantes históricos. Revisamos contigo de qué sistema vienen los datos; el alcance, el costo y el plazo se definen en esa evaluación.",
  },
  {
    tag: "Implementación",
    q: "¿Cuánto toma la implementación?",
    a: "Depende de los módulos, las sucursales y los datos a migrar. Antes de empezar acordamos un plan que incluye la configuración fiscal, el plan de cuentas, las series, los almacenes, los permisos y la capacitación por rol.",
  },
  {
    tag: "Países",
    q: "¿Funciona fuera del Perú?",
    a: "La implementación contempla Perú, Argentina y Colombia, con configuración y funciones propias de cada país. Los servicios fiscales externos no se habilitan automáticamente: consúltanos el alcance para tu país.",
  },
];
