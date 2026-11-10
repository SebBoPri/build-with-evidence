import { createFileRoute } from "@tanstack/react-router";
import { SpotifyCase } from "@/components/cases/spotify-feature-prioritisation";
const URL = "https://slipstreamlabs.se/work/spotify-feature-prioritisation";
const title = "Testing value before building: which Spotify features first? | Slipstream Labs";
const description =
  "A Hyper Island course project ranking seven proposed Spotify features on evidence of user value, combining user research, Spotify's stated strategy and a market analysis.";

export const Route = createFileRoute("/work/spotify-feature-prioritisation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: SpotifyCase,
});
