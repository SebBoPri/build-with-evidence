import { createFileRoute } from "@tanstack/react-router";
import {
  CaseFooter,
  CaseHeader,
  CaseIntro,
  NextCase,
} from "@/components/site/case-layout";

const title = "Hyper Island PM program | Slipstream Labs";
const description = "Hyper Island product management program. Case write-up coming.";

export const Route = createFileRoute("/work/hyper-island")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://slipstreamlabs.se/work/hyper-island" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://slipstreamlabs.se/work/hyper-island" }],
  }),
  component: HyperIslandCase,
});

function HyperIslandCase() {
  return (
    <div className="min-h-screen">
      <CaseHeader />
      <main>
        <CaseIntro
          title="Hyper Island PM program"
          meta={[{ label: "Context", value: "Product management program" }]}
          overview={[]}
          accentClass="text-foreground"
        />
        <section className="mx-auto w-full max-w-[72rem] px-6 pb-14 md:px-10 md:pb-20">
          <div className="relative overflow-hidden bg-brand-ink px-7 py-16 text-primary-foreground md:px-14 md:py-24">
            <p className="label-mono relative z-10 opacity-60">Education</p>
            <h2 className="relative z-10 mt-5 font-display text-3xl md:text-5xl">Write-up coming</h2>
            <svg
              className="pointer-events-none absolute bottom-0 right-0 w-1/2 translate-x-1/4 translate-y-1/4 opacity-20"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </section>
        <NextCase
          to="/work/salmagen"
          context="University thesis, 2018"
          title="When the user can't think straight, remove the wrong choice"
          surfaceClass="bg-case-highlight text-case-highlight-foreground"
        />
      </main>
      <CaseFooter />
    </div>
  );
}