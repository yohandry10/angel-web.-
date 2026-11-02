/** WhatsApp para solicitar demos del ERP. Formato internacional de Perú (+51). */
const DEMO_WA_NUMBER = "51904963051";
const DEMO_WA_MESSAGE = "Hola, quiero una demo de NEXTELCO ERP.";

export const DEMO_WA_URL = `https://wa.me/${DEMO_WA_NUMBER}?text=${encodeURIComponent(DEMO_WA_MESSAGE)}`;
