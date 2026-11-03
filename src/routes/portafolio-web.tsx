import { createFileRoute } from "@tanstack/react-router";
import { WebPortfolio } from "@/components/WebPortfolio";
import { SITE_URL } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/portafolio-web`;
const TITLE = "Portafolio web — Diseño y desarrollo web | NEXTELCO";
const DESCRIPTION =
  "Explora el portafolio web de NEXTELCO: sitios corporativos, ecommerce, sistemas y plataformas educativas. Conoce los proyectos, sus tecnologías y sus webs.";

export const Route = createFileRoute("/portafolio-web")({
  component: WebPortfolio,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#fbfcff" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: `${SITE_URL}/media/portfolio/keyboard-door-wide.webp` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/media/portfolio/keyboard-door-wide.webp` },
    ],
    links: [
      { rel: "canonical", href: PAGE_URL },
      {
        rel: "preload",
        as: "image",
        href: "/media/portfolio/keyboard-door-wide.webp",
        type: "image/webp",
        media: "(min-width: 1101px), (min-width: 701px) and (orientation: landscape)",
      },
      {
        rel: "preload",
        as: "image",
        href: "/media/portfolio/keyboard-door-portrait.webp",
        type: "image/webp",
        media: "(max-width: 700px), (max-width: 1100px) and (orientation: portrait)",
      },
      {
        rel: "preload",
        as: "font",
        href: "/fonts/anton-regular.ttf",
        type: "font/ttf",
        crossOrigin: "anonymous",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Portafolio web", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
});
