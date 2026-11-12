import { createFileRoute } from "@tanstack/react-router";
import { CvPage } from "@/components/site/cv-page";

const title = "CV | Sebastian Bouvier";
const description =
  "CV for Sebastian Bouvier: product ownership, business analysis and product discovery, based in Stockholm.";

export const Route = createFileRoute("/portfolio/cv")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://slipstreamlabs.se/portfolio/cv" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CvPage,
});
