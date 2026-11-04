import { createFileRoute } from "@tanstack/react-router";
import { WebPortfolio } from "@/components/WebPortfolio";
import { SITE_URL, pageMeta, pageSchema } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/portafolio-web`;
const TITLE = "Desarrollo web en Perú y portafolio | NEXTELCO";
const DESCRIPTION =
  "Diseño y desarrollo web en Perú: sitios corporativos, ecommerce y plataformas educativas. Explora 18 proyectos de NEXTELCO y conversemos sobre tu web.";

export const Route = createFileRoute("/portafolio-web")({
  component: WebPortfolio,
  head: () => ({
    meta: pageMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: "/portafolio-web",
      image: "/media/portfolio/keyboard-door-wide.webp",
    }),
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
        href: "/fonts/anton-regular.woff2",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          ...pageSchema("/portafolio-web", TITLE, DESCRIPTION, "CollectionPage"),
          mainEntity: { "@id": `${PAGE_URL}#projects` },
        }),
      },
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
