import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { useSectionReveals } from "@/hooks/use-section-reveals";
import { NextelcoHero, NextelcoHomeNav } from "@/components/NextelcoHero";
import {
  HomeProcess,
  HomeCapabilities,
  HomeProduct,
  HomeResearch,
  HomeOperations,
  HomeDelivery,
  HomeContact,
} from "@/components/HomeSections";
import { ContactModal } from "@/components/ContactModal";
import { SITE_URL } from "@/lib/seo";

const heroImg = "/media/hero/nextelco-reveal.webp";
const TITLE = "NEXTELCO — Sistemas empresariales, ERP, IA, DevOps y DevSecOps";
const DESC =
  "Desde Lima, Perú, construimos sistemas empresariales de alto rendimiento —ERP, CRM y plataformas a medida— y resolvemos problemas complejos de negocio con Deep Learning, Machine Learning, DevOps y DevSecOps. Creadores de NEXTELCO ERP.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "theme-color", content: "#fbfcff" },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}${heroImg}` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${SITE_URL}${heroImg}` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
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
        href: "/media/hero/nextelco-reveal-wide.webp",
        type: "image/webp",
        media: "(min-width: 1800px)",
      },
    ],
  }),
});

function Index() {
  const root = useRef<HTMLElement>(null);
  useSectionReveals(root);
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);

  return (
    <main
      ref={root}
      className="site-theme corporate-root nextelco-reference-page bg-background text-foreground overflow-x-hidden"
    >
      <ContactModal open={modal} onClose={() => setModal(false)} />
      <NextelcoHomeNav onContact={openModal} />
      <NextelcoHero onContact={openModal} />
      <HomeProcess />
      <HomeCapabilities />
      <HomeProduct />
      <HomeResearch />
      <HomeOperations />
      <HomeDelivery />
      <HomeContact onContact={openModal} />
    </main>
  );
}
