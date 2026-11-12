import { createFileRoute } from "@tanstack/react-router";
import { TedxFikaCase } from "@/components/cases/tedxfika";
const title = "Keeping a 700-person audience engaged between events | Slipstream Labs";
const description = "A one-week Hyper Island sprint developing TEDxFika, a proposed monthly community format for TEDxStockholm. Pitched, but never run with real guests.";
const url = "https://slipstreamlabs.se/work/tedxfika";

export const Route = createFileRoute("/work/tedxfika")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: TedxFikaCase,
});
