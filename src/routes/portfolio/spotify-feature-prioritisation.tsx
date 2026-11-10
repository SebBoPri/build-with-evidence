import { createFileRoute } from "@tanstack/react-router";
import { SpotifyCase } from "@/components/cases/spotify-feature-prioritisation";

const title = "Which Spotify features first? | Sebastian Bouvier";
const description = "A Hyper Island course project ranking seven proposed Spotify features on evidence of user value.";

export const Route = createFileRoute("/portfolio/spotify-feature-prioritisation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://slipstreamlabs.se/portfolio/spotify-feature-prioritisation" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://slipstreamlabs.se/work/spotify-feature-prioritisation" }],
  }),
  component: SpotifyCase,
});
