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
      { name: "theme-color", content: "#010515" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: `${SITE_URL}/media/portfolio/web-creative-hero.webp` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/media/portfolio/web-creative-hero.webp` },
    ],
    links: [
      { rel: "canonical", href: PAGE_URL },
      {
        rel: "preload",
        as: "image",
        href: "/media/portfolio/web-creative-hero.webp",
        type: "image/webp",
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
