import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/sections";
import { Wordmark } from "@/components/site/brand";
import { CtaButton } from "@/components/site/cta-button";

export const Route = createFileRoute("/work/")({
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
          <CtaButton href="/#contact" className="h-10 whitespace-nowrap px-5">
            Let's explore together
          </CtaButton>
        </div>
      </header>

      <main>
        {/* Statement */}
        <section>
          <div className="mx-auto w-full max-w-[84rem] px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32">
            <div className="fade-up flex items-center gap-1">
              <span className="h-[2px] w-8 bg-[#214B9B]" aria-hidden="true" />
              <span className="h-[2px] w-4 bg-[#A05A9A]" aria-hidden="true" />
              <span className="h-[2px] w-2 bg-[#EBC67F]" aria-hidden="true" />
              <span className="ml-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                Work
              </span>
            </div>
            <h1 className="fade-up delay-1 mt-10 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
              Cases and work that show how I think.
            </h1>
            <p className="fade-up delay-2 mt-10 max-w-2xl text-xl font-light leading-relaxed text-muted-foreground md:text-2xl">
              Every case follows the same shape: the question, the risk, the evidence, the
              decision. Some of this is client work, some is my own. Each entry is written up only
              when it can be told honestly, so some are still pending.
            </p>
          </div>
        </section>

        {/* Featured grid */}
        <section>
          <div className="mx-auto w-full max-w-[84rem] px-6 pb-24 md:px-10 md:pb-32">
            <div className="mb-10 flex items-center justify-between border-b border-hairline pb-4">
              <h2 className="font-display text-sm italic text-foreground">Featured</h2>
              <div className="flex gap-1" aria-hidden="true">
                <span className="h-1 w-1 bg-[#214B9B]" />
                <span className="h-1 w-1 bg-[#A05A9A]" />
                <span className="h-1 w-1 bg-[#EBC67F]" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              {/* Data quality project */}
              <article className="group relative aspect-[4/3] overflow-hidden bg-[#EBC67F] md:col-span-8 md:aspect-[16/9]">
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12">
                  <div className="flex items-start justify-between">
                    <span className="border border-[#151515]/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#151515]">
                      Write-up coming
                    </span>
                    <span className="font-mono text-xs text-[#151515]/40">01</span>
                  </div>
                  <div>
                    <h3 className="mb-4 font-display text-3xl text-[#151515] md:text-4xl">
                      Data quality project
                    </h3>
                    <p className="max-w-xs text-sm font-medium uppercase tracking-[0.15em] text-[#151515]/60">
                      Anonymized client
                    </p>
                  </div>
                </div>
                <svg
                  className="absolute -bottom-[10%] -right-[10%] w-3/4 opacity-15 transition-all duration-700 group-hover:scale-105 group-hover:opacity-25"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#151515" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#151515" strokeWidth="0.5" />
                  <path d="M20,100 L180,100 M100,20 L100,180" stroke="#151515" strokeWidth="0.5" />
                </svg>
              </article>

              {/* Mapping fund order flow */}
              <article className="group relative aspect-[4/5] overflow-hidden bg-[#A05A9A] md:col-span-4 md:aspect-auto">
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-white">
                      Fintech
                    </span>
                    <span className="font-mono text-xs text-white/40">02</span>
                  </div>
                  <div>
                    <h3 className="mb-3 font-display text-2xl text-white">
                      Mapping fund order flow
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      Write-up coming
                    </p>
                  </div>
                </div>
                <svg
                  className="absolute left-1/2 top-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 opacity-20 transition-transform duration-1000 group-hover:rotate-12"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <rect x="10" y="10" width="80" height="80" fill="none" stroke="white" strokeWidth="1" />
                  <path d="M10,50 L90,50 M50,10 L50,90" stroke="white" strokeWidth="0.5" />
                </svg>
              </article>

              {/* Salmagen rescue vest */}
              <Link
                to="/work/salmagen"
                className="group relative block aspect-[4/5] overflow-hidden bg-[#214B9B] md:col-span-4 md:aspect-auto"
              >
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-white">
                      Case study
                    </span>
                    <span className="font-mono text-xs text-white/40">03</span>
                  </div>
                  <div>
                    <h3 className="mb-3 font-display text-2xl text-white">
                      Sälmagen rescue vest
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      University thesis · 2018 · Read the case
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <svg
                    width="140"
                    height="180"
                    viewBox="0 0 120 160"
                    className="opacity-15 transition-opacity duration-500 group-hover:opacity-25"
                    aria-hidden="true"
                  >
                    {/* Vest icon after the Sälmagen sketch: arcing shoulder straps, vest body, chest pocket, hanging strap */}
                    <path
                      d="M36,58 C26,30 40,10 54,20 C62,26 56,44 49,56"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeDasharray="5 3"
                    />
                    <path
                      d="M84,58 C94,30 80,10 66,20 C58,26 64,44 71,56"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeDasharray="5 3"
                    />
                    <path
                      d="M31,56 Q60,70 89,56 L91,128 Q60,141 29,128 Z"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeDasharray="5 3"
                    />
                    <rect x="51" y="80" width="18" height="14" fill="none" stroke="white" strokeWidth="0.8" />
                    <path d="M51,84 L69,84" stroke="white" strokeWidth="0.8" />
                    <path d="M60,141 L60,153" stroke="white" strokeWidth="1.5" strokeDasharray="4 2" />
                    <rect x="56.5" y="144" width="7" height="5" fill="none" stroke="white" strokeWidth="0.8" />
                  </svg>
                </div>
              </Link>

              {/* Hyper Island PM program */}
              <article className="group relative aspect-[4/3] overflow-hidden border-t border-white/10 bg-[#151515] md:col-span-8 md:aspect-[16/9]">
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                      Education
                    </span>
                    <span className="font-mono text-xs text-white/30">04</span>
                  </div>
                  <div>
                    <h3 className="mb-4 font-display text-3xl text-white md:text-4xl">
                      Hyper Island PM program
                    </h3>
                    <p className="max-w-xs text-sm font-semibold uppercase tracking-widest text-white/60">
                      Product management program · Write-up coming
                    </p>
                  </div>
                </div>
                <svg
                  className="absolute bottom-0 right-0 w-1/2 translate-x-1/4 translate-y-1/4 opacity-20"
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                >
                  <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="0.5" />
                </svg>
              </article>
            </div>
          </div>
        </section>

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
