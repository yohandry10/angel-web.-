import type { ErpTopic } from "@/data/erp-topics";
import { SITE_URL, pageMeta, pageSchema } from "@/lib/seo";

/** head() compartido: meta, canonical, WebPage, Service, FAQPage y breadcrumb con el mismo contenido visible. */
export function erpTopicHead(topic: ErpTopic) {
  const pageUrl = `${SITE_URL}${topic.path}`;
  return {
    meta: pageMeta({ title: topic.title, description: topic.description, path: topic.path }),
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(pageSchema(topic.path, topic.title, topic.description)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          name: topic.label,
          description: topic.description,
          url: pageUrl,
          provider: { "@id": `${SITE_URL}#organization` },
          areaServed: { "@type": "Country", name: "Perú" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: topic.faq.map((item) => ({
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
            { "@type": "ListItem", position: 2, name: "NEXTELCO ERP", item: `${SITE_URL}/erp` },
            { "@type": "ListItem", position: 3, name: topic.label, item: pageUrl },
          ],
        }),
      },
    ],
  };
}
