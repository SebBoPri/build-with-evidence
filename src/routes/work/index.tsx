import { createFileRoute } from "@tanstack/react-router";
import { WorkIndex } from "@/components/cases/work-index";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work | Slipstream Labs" },
      {
        name: "description",
        content:
          "Cases and selected work from Slipstream Labs. Every case follows the same shape: the question, the risk, the evidence, the decision.",
      },
      { property: "og:title", content: "Work | Slipstream Labs" },
      {
        property: "og:description",
        content:
          "Cases and selected work from Slipstream Labs. Every case follows the same shape: the question, the risk, the evidence, the decision.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://slipstreamlabs.se/work" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Work | Slipstream Labs" },
    ],
    links: [{ rel: "canonical", href: "https://slipstreamlabs.se/work" }],
  }),

  component: WorkIndex,
});
