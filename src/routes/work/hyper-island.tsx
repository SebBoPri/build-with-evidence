import { createFileRoute, redirect } from "@tanstack/react-router";

// Old placeholder address, forwards to the Hyper Island case.
export const Route = createFileRoute("/work/hyper-island")({
  beforeLoad: () => {
    throw redirect({ to: "/work/spotify-feature-prioritisation", statusCode: 301 });
  },
});
