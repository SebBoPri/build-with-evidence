import { createFileRoute } from "@tanstack/react-router";
import { SalmagenCase } from "@/components/cases/salmagen";

const title = "Sälmagen rescue vest | Sebastian Bouvier";
const description = "How a safety vest for long-distance skaters was designed around a user who can't think straight.";

export const Route = createFileRoute("/portfolio/salmagen")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://slipstreamlabs.se/portfolio/salmagen" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://slipstreamlabs.se/work/salmagen" }],
  }),
  component: SalmagenCase,
});
