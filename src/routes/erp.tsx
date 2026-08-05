import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Nav from "@/components/erp/Nav";
import Hero from "@/components/erp/Hero";
import Logos from "@/components/erp/Logos";
import ProblemSolution from "@/components/erp/ProblemSolution";
import EventArchitecture from "@/components/erp/EventArchitecture";
import Ecosystem from "@/components/erp/Ecosystem";
import Pricing from "@/components/erp/Pricing";
import Testimonials from "@/components/erp/Testimonials";
import FAQ from "@/components/erp/FAQ";
import FinalCTA from "@/components/erp/FinalCTA";
import Footer from "@/components/erp/Footer";

const TITLE = "Konta — ERP peruano por NEXTELCO";
const DESC = "ERP operativo por evento para empresas peruanas: facturación electrónica SUNAT, contabilidad automática, inventario multi-almacén y POS offline.";

export const Route = createFileRoute("/erp")({
  component: ErpLanding,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "ERP Perú, ERP peruano, facturación electrónica SUNAT, software contable Perú, contabilidad automática, POS offline, inventario multi-almacén, CPE SUNAT, Konta, NEXTELCO" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_PE" },
      { property: "og:site_name", content: "NEXTELCO" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/erp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/erp" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Konta",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Windows, macOS, Linux",
          description: DESC,
          inLanguage: "es-PE",
          offers: { "@type": "Offer", price: "99", priceCurrency: "PEN" },
          publisher: {
            "@type": "Organization",
            name: "NEXTELCO",
            url: "https://nextelco.cloud",
          },
          featureList: [
            "Facturación electrónica SUNAT (CPE)",
            "Contabilidad automática en tiempo real",
            "Inventario multi-almacén",
            "POS offline",
            "Multi-sucursal",
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
        <ProblemSolution />
        <EventArchitecture />
        <Ecosystem />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
