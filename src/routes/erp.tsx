import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { useSectionReveals } from "@/hooks/use-section-reveals";
import Nav from "@/components/erp/Nav";
import Hero from "@/components/erp/Hero";
import EventArchitecture from "@/components/erp/EventArchitecture";
import Ecosystem from "@/components/erp/Ecosystem";
import Testimonials from "@/components/erp/Testimonials";
import FAQ from "@/components/erp/FAQ";
import FinalCTA from "@/components/erp/FinalCTA";
import Footer from "@/components/erp/Footer";
import { FAQ_ITEMS } from "@/components/erp/faq-data";
const heroImg = "/media/erp/connected-business-hero.webp";
import { SITE_URL, pageMeta, pageSchema } from "@/lib/seo";
import "@/components/erp/ErpExperience.css";

const PAGE_URL = `${SITE_URL}/erp`;
const TITLE = "NEXTELCO ERP — Ventas, inventario y contabilidad conectados";
const DESC =
  "Conecta ventas, inventario, finanzas y contabilidad con NEXTELCO ERP en Perú. Facturación electrónica y operación web y de escritorio. Solicita una demo.";

export const Route = createFileRoute("/erp")({
  component: ErpLanding,
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESC, path: "/erp", image: heroImg }),
    links: [
      { rel: "canonical", href: PAGE_URL },
      {
        rel: "preload",
        as: "image",
        href: heroImg,
        type: "image/webp",
        media: "(max-width: 1799px)",
      },
      {
        rel: "preload",
        as: "image",
        href: "/media/erp/connected-business-wide.webp",
        type: "image/webp",
        media: "(min-width: 1800px)",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(pageSchema("/erp", TITLE, DESC)) },
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
  const root = useRef<HTMLDivElement>(null);
  useSectionReveals(root);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  return (
    <div ref={root} className={`site-theme erp-root erp-product-page ${theme} bg-app min-h-screen`}>
      <Nav theme={theme} onThemeChange={setTheme} />
      <main>
        <Hero />
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
