import { createFileRoute } from "@tanstack/react-router";
import { WorkIndex } from "@/components/cases/work-index";

const title = "Sebastian Bouvier | Portfolio";
const description = "Product work by Sebastian Bouvier. Each case follows the same shape: the question, the risk, the evidence, the decision.";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://slipstreamlabs.se/portfolio" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://slipstreamlabs.se/work" }],
  }),
  component: WorkIndex,
});
