import { createFileRoute } from "@tanstack/react-router";
import { Section, Lead, FullBleedFigure, Reveal } from "@/components/site/sections";
import { Wordmark, Starfield } from "@/components/site/brand";
import { ApproachRail } from "@/components/site/approach-rail";
import heroField from "@/assets/hero-field.jpg";
import heroFieldWebp from "@/assets/hero-field.webp";
import heroFieldWebp2x from "@/assets/hero-field@2x.webp";
import evidenceResolve from "@/assets/evidence-resolve.jpg";
import evidenceResolveWebp from "@/assets/evidence-resolve.webp";
import evidenceResolveWebp2x from "@/assets/evidence-resolve@2x.webp";
import futuresBranching from "@/assets/futures-branching.jpg";
import futuresBranchingWebp from "@/assets/futures-branching.webp";
import futuresBranchingWebp2x from "@/assets/futures-branching@2x.webp";
import sprintConverge from "@/assets/sprint-converge.jpg";
import sprintConvergeWebp from "@/assets/sprint-converge.webp";
import sprintConvergeWebp2x from "@/assets/sprint-converge@2x.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Slipstream Labs: Work out what is worth building" },
      {
        name: "description",
        content:
          "Product discovery and strategy for post-seed and Series A teams. Fixed-scope Discovery Sprints that turn uncertainty into evidence-backed decisions.",
      },
      { property: "og:title", content: "Slipstream Labs: Work out what is worth building" },
      {
        property: "og:description",
        content:
          "Fixed-scope Discovery Sprints that turn product uncertainty into an evidence-backed decision: build it, change it, test it, or don't build it.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://slipstreamlabs.se/" },
      { property: "og:image", content: "https://slipstreamlabs.se/og.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://slipstreamlabs.se/og.png" },
    ],
    links: [{ rel: "canonical", href: "https://slipstreamlabs.se/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Slipstream Labs",
          url: "https://slipstreamlabs.se/",
          logo: "https://slipstreamlabs.se/favicon.svg",
          image: "https://slipstreamlabs.se/og.png",
          description:
            "Product discovery and strategy for post-seed and Series A teams. Fixed-scope Discovery Sprints that turn uncertainty into evidence-backed decisions.",
          email: "hello@slipstreamlabs.se",
          areaServed: { "@type": "Country", name: "Sweden" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Stockholm",
            addressCountry: "SE",
          },
          founder: {
            "@type": "Person",
            name: "Sebastian Bouvier",
            jobTitle: "Founder",
          },
        }),
      },
    ],
  }),

  component: Index,
});

const nav = [
  { href: "#problem", label: "Problem" },
  { href: "#sprint", label: "Discovery Sprint" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
];

const sprintFacts = [
  { k: "Duration", v: "2–4 weeks, fixed scope" },
  { k: "Your team's time", v: "~3 hours per week" },
  { k: "Engagement", v: "One opportunity, one recommendation" },
  { k: "After the sprint", v: "Optional support while you act on it" },
];

const problemCases = [
  "A product everyone agreed on, built from what the team believed customers wanted. It shipped. Nobody used it.",
  "Customers asked for a feature. It shipped. It solved the request, not the problem.",
  "\u201CDo something with AI\u201D became the goal. It shipped. There was no problem it solved.",
];

const steps = [
  {
    n: "01",
    title: "Assumptions",
    body: "What has to be true for this to work, ranked by risk.",
  },
  {
    n: "02",
    title: "Kill-lines",
    body: "What would make you stop, agreed before you look.",
  },
  {
    n: "03",
    title: "Evidence",
    body: "What customers do, not what they say they would.",
  },
  {
    n: "04",
    title: "Decision",
    body: "Proceed, reframe or stop. Written down, once.",
  },
];


const sprintWhen = [
  "You have an idea but no evidence behind it.",
  "Two opportunities look equally plausible.",
  "A roadmap bet is about to consume a quarter of engineering.",
  "The team disagrees and no one has the data to settle it.",
];

const sprintInside = [
  "Problem framing and assumption mapping",
  "Customer and user research",
  "Market and competitor analysis",
  "Opportunity assessment and sizing",
  "Hypothesis testing and experiment design",
  "Prototyping where it earns its place",
  "Evidence synthesis and prioritisation",
];

const sprintGet = [
  "A written recommendation with the reasoning made visible",
  "The evidence, and its limits, stated plainly",
  "A prioritised view of the opportunity",
  "A first move your team can start on Monday",
];



function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-[84rem] items-center justify-between px-6 md:px-10">
          <a href="#top" aria-label="Slipstream Labs home">
            <Wordmark />
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            Book an intro call
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-hairline">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              maskImage:
                "radial-gradient(120% 105% at 50% 45%, #000 42%, rgba(0,0,0,0.55) 74%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(120% 105% at 50% 45%, #000 42%, rgba(0,0,0,0.55) 74%, transparent 100%)",
            }}
            aria-hidden="true"
          >
            <picture>
              <source srcSet={`${heroFieldWebp} 1x, ${heroFieldWebp2x} 2x`} type="image/webp" />
              <img
                src={heroField}
                alt=""
                aria-hidden="true"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                width={1600}
                height={907}
                className="h-full w-full object-cover opacity-70"
              />
            </picture>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--background)_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent md:w-56" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent md:w-56" />
          </div>


          <div className="relative mx-auto w-full max-w-[84rem] px-6 pb-16 pt-24 text-primary-foreground md:px-10 md:pb-20 md:pt-32">
            <p className="label-mono !text-primary-foreground/70 fade-up">Product discovery &amp; strategy</p>
            <h1 className="display-xl fade-up delay-1 mt-10 max-w-4xl text-balance text-primary-foreground">
              Chart the problem.
              <br />
              <span className="text-primary-foreground/60">Then build.</span>
            </h1>
            <p className="fade-up delay-2 mt-10 max-w-xl text-lg leading-relaxed !text-primary-foreground/70">
              The easier it becomes to build, the more expensive it becomes to build the wrong
              thing. Slipstream Labs helps product teams turn assumptions into evidence before
              committing significant engineering resources.
            </p>
            <div className="fade-up delay-3 mt-12 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex h-12 items-center gap-3 bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book an intro call
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                href="#sprint"
                className="inline-flex h-12 items-center border border-primary-foreground/30 px-6 text-sm font-medium text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/5"
              >
                Explore the sprint
              </a>
            </div>
            <p className="label-mono !text-primary-foreground/70 fade-up delay-4 mt-14">Evidence before execution.</p>
            <div className="mt-20 flex items-center justify-between border-t border-primary-foreground/20 pt-6 md:mt-28">
              <p className="label-mono !text-primary-foreground/70">Assumption · Evidence · Decision</p>
              <p className="label-mono !text-primary-foreground/70">Stockholm, Sweden</p>
            </div>
          </div>
        </section>


        {/* Problem */}
        <section id="problem" className="scroll-mt-16">
          <FullBleedFigure
            src={futuresBranching}
            srcWebp={futuresBranchingWebp}
            srcWebp2x={futuresBranchingWebp2x}
            width={1600}
            height={640}
            alt="Abstract diagram: many faint paths fanning outward from a single bright point, none of them marked out from the others"
            eyebrow="The problem"
            title="Many possible futures, none of them yet tested"
            subtitle="At the start, nothing distinguishes the path that works from the ones that do not."
            note="Each line is a plausible plan. The bright point is where you are standing today."
            meta="Uncertainty at the start"

            overlay={
              <Starfield className="pointer-events-none absolute inset-0 h-full w-full text-primary-foreground opacity-25" />
            }
          />


          <div className="mx-auto w-full max-w-[84rem] px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-20">
            <h2 className="display-md max-w-3xl text-balance">


              <span className="block">Building has never been easier.</span>
              <span className="block text-muted-foreground">
                Knowing what to build has never mattered more.
              </span>
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              The biggest risk in any product is value risk: whether people will actually use it or
              pay for it. It is the risk that kills products, and the one most often answered with
              opinion.
            </p>
            <div className="mt-16 grid gap-14 md:grid-cols-12 md:mt-20">
              <div className="md:col-span-6">
                <ol className="divide-y divide-[var(--hairline)] border-y border-hairline">
                  {problemCases.map((item, i) => (
                    <li key={item} className="flex gap-6 py-6">
                      <span className="label-mono shrink-0 pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{item}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="md:col-span-6">
                <p className="label-mono">Skipped without noticing</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                  These are the questions teams skip when momentum takes over.
                </p>
                <ul className="mt-5 divide-y divide-[var(--hairline)] border-y border-hairline">
                  {[
                    "Is the problem real, frequent, and painful?",
                    "Who is the customer, and what do they do today?",
                    "Is the opportunity big enough to matter?",
                    "What has to be true for this to work?",
                    "Is the solution actually worth building?",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 py-4 text-[0.95rem] transition-colors hover:text-foreground"
                    >
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Discovery Sprint */}
        <Section id="sprint">
          <FullBleedFigure
            breakOut
            src={sprintConverge}
            srcWebp={sprintConvergeWebp}
            srcWebp2x={sprintConvergeWebp2x}
            width={1344}
            height={896}
            alt="Abstract image: a dense field of nodes and filaments, with one bounded region marked by survey brackets and a single node fixed by a crosshair"
            eyebrow="Discovery Sprint"
            title="We survey one region properly, not all of it"
            subtitle="The sprint ends with one recommendation, not a document dump."
            note="The brackets mark the question in scope. The crosshair is the decision the sprint resolves."
            meta="Flagship offering"

          />


          <h2 className="display-md max-w-3xl text-balance">

            Two to four weeks from uncertainty to decision.
          </h2>

            <div className="mt-14 grid gap-14 md:grid-cols-12">
              <div className="md:col-span-8">
                <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  Two to four weeks of focused discovery on one opportunity. It ends with a
                  recommendation, not a document dump: build it, change it, test it, or don&apos;t
                  build it.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex h-11 items-center bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Scope a sprint
                </a>
              </div>
              <div className="md:col-span-4">
                <dl className="grid gap-6 border-t border-hairline pt-6">
                  {sprintFacts.map((f) => (
                    <div key={f.k}>
                      <dt className="label-mono">{f.k}</dt>
                      <dd className="mt-2 text-[0.95rem] leading-relaxed text-foreground">
                        {f.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="rule-t mt-14 grid gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="label-mono">When to use it</p>
                <ul className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {sprintWhen.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label-mono">What happens</p>
                <ul className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {sprintInside.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label-mono">What you get</p>
                <ul className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {sprintGet.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          
        </Section>

        {/* Approach */}
        <Section id="approach">
          <FullBleedFigure
            breakOut
            src={evidenceResolve}
            srcWebp={evidenceResolveWebp}
            srcWebp2x={evidenceResolveWebp2x}
            width={1600}
            height={1073}

            alt="Abstract diagram: scattered noise on the left resolving into a single clean signal line on the right"
            eyebrow="The approach"
            title="Noise resolves into signal"
            subtitle="Name what must be true, then test it until the noise resolves into one line."
            note="Left is everything you could believe. Right is what the evidence still supports."
            meta="Evidence synthesis"

          />


          <h2 className="display-md max-w-3xl text-balance">
            Start with what must be true.
          </h2>


          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Opinion, anecdote and roadmap pressure all sound the same at the start. We separate what
            you believe from what you know, run the riskiest assumptions through the smallest
            possible test, and agree in advance what result would make you stop, so the evidence is
            readable either way. Those stopping points are what we call kill-lines.
          </p>

          <ApproachRail steps={steps} />
        </Section>



        {/* Pull quote */}
        <Section>
          <blockquote className="max-w-4xl">
            <p className="display-md text-balance">
              Just because you can build it does not mean you should.
            </p>
            <p className="display-md mt-3 text-balance text-muted-foreground">
              Speed is only an advantage when you have the right direction.
            </p>
          </blockquote>
        </Section>


        {/* About */}
        <Section id="about" label="About">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="display-md">Sebastian Bouvier</h2>
              <p className="mt-3 text-sm text-muted-foreground">Founder of Slipstream Labs</p>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-8">
              <p>
                I&apos;ve spent my career on the messy front half of product, working across product
                management, business analysis, and data in several industries. The pattern repeats
                everywhere: teams are rarely short of ideas, they&apos;re short of evidence and a
                way to choose.
              </p>
              <p>
                Slipstream Labs is how I do that work now. Small, direct, and hands-on: you work
                with me, not a delivery pyramid. I care more about you making a good call than
                about the length of the report behind it.
              </p>
              <p className="text-foreground">Based in Stockholm, working with teams anywhere.</p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section id="contact">
          <div className="max-w-3xl">
            <p className="label-mono">Get in touch</p>
            <h2 className="display-md mt-8 text-balance">
              Have a product decision you&apos;re stuck on?
            </h2>
            <p className="mt-7 text-lg text-muted-foreground md:text-xl">
              Let&apos;s work out what is worth building.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@slipstreamlabs.se?subject=Discovery%20Sprint%20enquiry"
                className="inline-flex h-12 items-center bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start a conversation
              </a>
              <a
                href="mailto:hello@slipstreamlabs.se"
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                hello@slipstreamlabs.se
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="rule-t">
        <div className="mx-auto flex w-full max-w-[84rem] flex-col gap-3 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Slipstream Labs · Stockholm</p>
          <p className="label-mono">Evidence before build</p>
        </div>
      </footer>
    </div>
  );
}
