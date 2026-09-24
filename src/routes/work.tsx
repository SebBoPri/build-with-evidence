import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/sections";
import { Wordmark } from "@/components/site/brand";
import { CtaButton } from "@/components/site/cta-button";
import { KillLineDiagram, OrderFlowDiagram } from "@/components/site/case-diagrams";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Slipstream Labs" },
      {
        name: "description",
        content:
          "Cases and selected work from Slipstream Labs. Every case follows the same shape: the question, the risk, the evidence, the decision.",
      },
      { property: "og:title", content: "Work — Slipstream Labs" },
      {
        property: "og:description",
        content:
          "Cases and selected work from Slipstream Labs. Every case follows the same shape: the question, the risk, the evidence, the decision.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://slipstreamlabs.se/work" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Work — Slipstream Labs" },
    ],
    links: [{ rel: "canonical", href: "https://slipstreamlabs.se/work" }],
  }),

  component: WorkPage,
});

const homeNav = [
  { label: "Problem", hash: "problem" },
  { label: "Discovery Sprint", hash: "sprint" },
  { label: "Approach", hash: "approach" },
  { label: "About", hash: "about" },
];

const cases = [
  {
    meta: "Data quality · Anonymized client",
    title: "Data quality project",
    body: "A data quality project for an anonymized client. The write-up will follow the same structure as every case here: the question, the risk, the evidence, the decision.",
    status: "Write-up coming",
    Diagram: KillLineDiagram,
  },
  {
    meta: "Fintech",
    title: "Mapping fund order flow",
    body: "Mapping the flow of fund orders through a fintech, end to end, before deciding what to change.",
    status: "Write-up coming",
    Diagram: OrderFlowDiagram,
  },
];

const selectedWork = [
  {
    meta: "University thesis · 2018",
    title: "Sälmagen rescue vest",
    body: "When the user can't think straight, remove the wrong choice.",
    href: "/work/salmagen",
  },
  {
    meta: "Hyper Island · Product management program",
    title: "Hyper Island PM program",
    body: "Selected projects from the product management program at Hyper Island.",
    status: "Write-up coming",
  },
];

function WorkPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-[84rem] items-center justify-between px-6 md:px-10">
          <Link to="/" aria-label="Slipstream Labs home">
            <Wordmark />
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {homeNav.map((item) => (
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/work"
              className="text-sm text-foreground"
              activeProps={{ className: "text-sm text-foreground" }}
            >
              Work
            </Link>
          </nav>
          <CtaButton href="/#contact" className="h-10 px-5">
            Let's explore together
          </CtaButton>
        </div>
      </header>

      <main>
        {/* Statement */}
        <section>
          <div className="mx-auto w-full max-w-[84rem] px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32">
            <p className="label-mono fade-up">Work</p>
            <h1 className="display-md fade-up delay-1 mt-10 max-w-3xl text-balance">
              Cases and work that show how I think.
            </h1>
            <div className="fade-up delay-2 mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Every case follows the same shape: the question, the risk, the evidence, the
                decision.
              </p>
              <p>
                Some of this is client work, some is my own. Each entry is written up only when it
                can be told honestly, so some are still pending.
              </p>
            </div>
          </div>
        </section>

        {/* Cases */}
        <Section label="Cases">
          <div className="space-y-16 md:space-y-20">
            {cases.map(({ Diagram, ...c }) => (
              <article key={c.title} className="grid gap-10 border-t border-hairline pt-10 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-5">
                  <p className="label-mono">{c.meta}</p>
                  <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                  <p className="label-mono mt-6 flex items-center gap-3">
                    <span className="inline-block h-px w-6 bg-border" aria-hidden="true" />
                    {c.status}
                  </p>
                </div>
                <div className="text-muted-foreground md:col-span-7">
                  <Diagram />
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Selected work */}
        <Section label="Selected work">
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
            {selectedWork.map((w) => (
              <article key={w.title} className="border-t border-hairline pt-10">
                <p className="label-mono">{w.meta}</p>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground">
                  {w.title}
                </h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                  {w.body}
                </p>
                <p className="label-mono mt-6 flex items-center gap-3">
                  <span className="inline-block h-px w-6 bg-border" aria-hidden="true" />
                  {w.status}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Closing */}
        <Section id="contact">
          <div className="max-w-3xl">
            <h2 className="display-md text-balance">
              If one of these looks like your situation, let&apos;s find out.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Two to four weeks from uncertainty to a decision you can act on.
            </p>
            <CtaButton href="/#contact" className="mt-10">
              Let's explore together
            </CtaButton>
          </div>
        </Section>
      </main>

      <footer className="rule-t">
        <div className="mx-auto flex w-full max-w-[84rem] flex-col gap-3 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-end md:justify-between md:px-10">
          <div className="space-y-1">
            <p>Slipstream Labs</p>
            <p>Product discovery &amp; strategy</p>
            <p>Find what&rsquo;s worth building.</p>
            <p>Stockholm, Sweden</p>
            <p>© 2026 Slipstream Labs</p>
          </div>
          <p className="label-mono">Evidence before build</p>
        </div>
      </footer>
    </div>
  );
}
