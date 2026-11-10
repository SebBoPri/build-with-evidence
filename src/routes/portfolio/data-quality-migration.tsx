import { createFileRoute } from "@tanstack/react-router";
import { DataQualityCase } from "@/components/cases/data-quality-migration";

const title = "Turning data quality concerns into measurable action | Sebastian Bouvier";
const description = "How a data quality process turned migration concerns into a list that could be worked through before go-live.";

export const Route = createFileRoute("/portfolio/data-quality-migration")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://slipstreamlabs.se/portfolio/data-quality-migration" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://slipstreamlabs.se/work/data-quality-migration" }],
  }),
  component: DataQualityCase,
});
