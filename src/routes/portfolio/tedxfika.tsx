import { createFileRoute } from "@tanstack/react-router";
import { TedxFikaCase } from "@/components/cases/tedxfika";

const title = "TEDxFika: keeping a 700-person audience engaged between events | Sebastian Bouvier";
const description = "A one-week Hyper Island sprint developing a proposed monthly community format for TEDxStockholm.";

export const Route = createFileRoute("/portfolio/tedxfika")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://slipstreamlabs.se/portfolio/tedxfika" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://slipstreamlabs.se/work/tedxfika" }],
  }),
  component: TedxFikaCase,
});
