import { createFileRoute } from "@tanstack/react-router";
import { DataQualityCase } from "@/components/cases/data-quality-migration";

export const Route = createFileRoute("/work/data-quality-migration")({
  head: () => ({
    meta: [
      { title: "Turning data quality concerns into measurable action | Slipstream Labs" },
      {
        name: "description",
        content:
          "Making more than 10,000 HR data quality issues visible ahead of a migration to a cloud HR platform, and identifying and resolving over 8,000 before go-live.",
      },
      {
        property: "og:title",
        content: "Turning data quality concerns into measurable action | Slipstream Labs",
      },
      {
        property: "og:description",
        content:
          "Making more than 10,000 HR data quality issues visible ahead of a migration to a cloud HR platform, and identifying and resolving over 8,000 before go-live.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://slipstreamlabs.se/work/data-quality-migration" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Turning data quality concerns into measurable action | Slipstream Labs",
      },
    ],
    links: [{ rel: "canonical", href: "https://slipstreamlabs.se/work/data-quality-migration" }],
  }),

  component: DataQualityCase,
});
