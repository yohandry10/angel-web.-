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
      image: "/media/portfolio/portfolio-hero-wide-1672.webp",
      imageAlt: "Láminas de vidrio azul apiladas: los servicios de desarrollo web de NEXTELCO",
    }),
    links: [
      { rel: "canonical", href: PAGE_URL },
      {
        rel: "preload",
        as: "image",
        href: "/media/portfolio/portfolio-hero-wide-1672.webp",
        type: "image/webp",
        media: "(min-width: 1301px)",
      },
      {
        rel: "preload",
        as: "image",
        href: "/media/portfolio/portfolio-hero-wide-1200.webp",
        type: "image/webp",
        media: "(min-width: 701px) and (max-width: 1300px)",
      },
      {
        rel: "preload",
        as: "image",
        imageSrcSet:
          "/media/portfolio/portfolio-hero-tall-720.webp 720w, /media/portfolio/portfolio-hero-tall-1024.webp 1024w",
        imageSizes: "100vw",
        type: "image/webp",
        media: "(max-width: 700px)",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          ...pageSchema("/portafolio-web", TITLE, DESCRIPTION, "CollectionPage"),
          mainEntity: { "@id": `${PAGE_URL}#projects` },
          about: { "@id": `${PAGE_URL}#web-service` },
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
