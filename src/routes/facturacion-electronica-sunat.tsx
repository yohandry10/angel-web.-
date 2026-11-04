import { createFileRoute } from "@tanstack/react-router";
import { ErpTopicPage } from "@/components/ErpTopicPage";
import { erpTopicHead } from "@/lib/erp-topic-head";
import { ERP_TOPICS } from "@/data/erp-topics";

const topic = ERP_TOPICS.find((t) => t.path === "/facturacion-electronica-sunat")!;

export const Route = createFileRoute("/facturacion-electronica-sunat")({
  component: () => <ErpTopicPage topic={topic} />,
  head: () => erpTopicHead(topic),
});
