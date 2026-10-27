import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Nav from "@/components/erp/Nav";
import Hero from "@/components/erp/Hero";
import Logos from "@/components/erp/Logos";
import EventArchitecture from "@/components/erp/EventArchitecture";
import Ecosystem from "@/components/erp/Ecosystem";
import Testimonials from "@/components/erp/Testimonials";
import FAQ from "@/components/erp/FAQ";
import FinalCTA from "@/components/erp/FinalCTA";
import Footer from "@/components/erp/Footer";
import { FAQ_ITEMS } from "@/components/erp/faq-data";
import { SITE_URL } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/erp`;
const TITLE = "NEXTELCO ERP — Ventas, inventario y contabilidad conectados";
const DESC =
  "NEXTELCO ERP conecta ventas, POS y cajas, compras, inventario, PECOSA, logística, finanzas, contabilidad y planillas. Comprobantes y guías electrónicas, SIRE y libros PLE para Perú, con permisos e historial de cada operación.";

export const Route = createFileRoute("/erp")({
  component: ErpLanding,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "keywords", content: "NEXTELCO ERP, ERP Perú, ERP peruano, facturación electrónica SUNAT, software contable Perú, inventario multi-almacén, PECOSA, POS y cajas, guías de remisión electrónicas, SIRE, libros electrónicos PLE, planillas PLAME, conciliación bancaria" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:site_name", content: "NEXTELCO" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "@id": `${PAGE_URL}#software`,
          name: "NEXTELCO ERP",
          url: PAGE_URL,
          applicationCategory: "BusinessApplication",
          applicationSubCategory: "ERP",
          operatingSystem: "Web, Desktop",
          description: DESC,
          inLanguage: "es-PE",
          areaServed: { "@type": "Country", name: "Perú" },
          publisher: {
            "@type": "Organization",
            name: "NEXTELCO",
            url: SITE_URL,
          },
          featureList: [
            "Ventas: cotizaciones, pedidos, listas de precios, crédito y comisiones",
            "Punto de venta y cajas",
            "Compras, recepciones y cuentas por pagar",
            "Inventario multi-almacén y kardex valorizado",
            "PECOSA (pedido comprobante de salida)",
            "Logística: picking, packing y despachos",
            "Devoluciones, notas de crédito y saldos a favor",
            "Finanzas, tesorería y conciliación bancaria",
            "Contabilidad, centros de costo, activos fijos y libros PLE",
            "Comprobantes y guías de remisión electrónicas",
            "SIRE de ventas y compras",
            "RRHH y planillas",
            "Empresas, sucursales, roles y permisos",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${PAGE_URL}#faq`,
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "NEXTELCO ERP", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
});

function ErpLanding() {
  // Reveal-on-scroll (ported from the ERP landing)
  useEffect(() => {
    const els = document.querySelectorAll(".erp-root .reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="erp-root dark bg-app min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Logos />
        <EventArchitecture />
        <Ecosystem />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
