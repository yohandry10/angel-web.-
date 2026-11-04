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
import { DeferredContactModal } from "@/components/DeferredContactModal";
import { SITE_URL, pageMeta, pageSchema } from "@/lib/seo";

const heroImg = "/media/hero/nextelco-reveal.webp";
const TITLE = "NEXTELCO — ERP y software a medida en Perú";
const DESC =
  "ERP, desarrollo web y software a medida desde Lima, Perú. Conectamos tu negocio con Cloud, DevOps e inteligencia artificial. Conoce NEXTELCO.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESC, path: "/", image: heroImg }),
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
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(pageSchema("/", TITLE, DESC)) },
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
      <DeferredContactModal open={modal} onClose={() => setModal(false)} />
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
