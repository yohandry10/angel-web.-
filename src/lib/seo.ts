/** Origen canónico del sitio. Se usa para canonical, og:url y JSON-LD. */
export const SITE_URL = "https://www.nextelco.cloud";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

/** One complete social/search contract for every server-rendered public route. */
export function pageMeta({
  title,
  description,
  path,
  image = "/media/hero/nextelco-reveal.webp",
  imageAlt = "NEXTELCO: software a medida y sistemas empresariales",
}: PageMetadata) {
  const imageUrl = image.startsWith("https://") ? image : `${SITE_URL}${image}`;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "es_PE" },
    { property: "og:site_name", content: "NEXTELCO" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: `${SITE_URL}${path}` },
    { property: "og:image", content: imageUrl },
    { property: "og:image:alt", content: imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: imageAlt },
  ];
}

export function pageSchema(path: string, name: string, description: string, type = "WebPage") {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    inLanguage: "es-PE",
    isPartOf: { "@id": `${SITE_URL}#website` },
    publisher: { "@id": `${SITE_URL}#organization` },
  };
}

/** Describes the same services shown on the page, without ratings or invented offers. */
export function webServicesSchema(services: readonly { title: string; description: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/portafolio-web#web-service`,
    name: "Diseño y desarrollo web",
    url: `${SITE_URL}/portafolio-web#servicios-web`,
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: { "@type": "Country", name: "Perú" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de desarrollo web",
      itemListElement: services.map(({ title, description }) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: title, description },
      })),
    },
  };
}
