import { createFileRoute } from "@tanstack/react-router";
import { Section, Lead } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Slipstream Labs — Work out what is worth building" },
      {
        name: "description",
        content:
          "Product discovery and strategy for post-seed and Series A teams. Fixed-scope Discovery Sprints that turn uncertainty into evidence-backed decisions.",
      },
      { property: "og:title", content: "Slipstream Labs — Work out what is worth building" },
      {
        property: "og:description",
        content:
          "Fixed-scope Discovery Sprints that turn product uncertainty into an evidence-backed decision: build it, change it, test it, or don't build it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#problem", label: "Problem" },
  { href: "#approach", label: "Approach" },
  { href: "#sprint", label: "Discovery Sprint" },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#testimonials", label: "Results" },
  { href: "#about", label: "About" },
];

const steps = [
  {
    n: "01",
    title: "Frame",
    body: "Sharpen the question. Surface the assumptions your plan quietly depends on.",
  },
  {
    n: "02",
    title: "Investigate",
    body: "Talk to customers. Read the market. Separate what is known from what is believed.",
  },
  {
    n: "03",
    title: "Test",
    body: "Put the riskiest assumptions in front of reality with prototypes and experiments.",
  },
  {
    n: "04",
    title: "Decide",
    body: "Synthesise the evidence into one clear recommendation and a first move.",
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

const outcomes = [
  {
    title: "Know the problem",
    body: "Understand whether you are solving something that actually matters.",
  },
  {
    title: "Understand the opportunity",
    body: "Build an evidence-based view of the market, users, and potential.",
  },
  {
    title: "Test your assumptions",
    body: "Find out what holds up before committing to development.",
  },
  {
    title: "Know what to do next",
    body: "Leave with a clear direction and the evidence behind it.",
  },
];

const testimonials = [
  {
    quote:
      "Sebastian helped us see that we were solving the wrong problem. We reframed the sprint, saved months of engineering, and landed on something customers actually wanted.",
    role: "Product Lead, B2B SaaS",
  },
  {
    quote:
      "The difference was the rigour. Every recommendation came with evidence we could trace, and the assumptions we had to drop were written down, not buried.",
    role: "Head of Product, fintech scale-up",
  },
  {
    quote:
      "We went into the sprint arguing about features. We came out agreeing on the one bet worth making and why.",
    role: "CEO, Series A healthtech",
  },
];

const trackRecord = [
  { value: "20+", label: "Teams guided through discovery decisions" },
  { value: "4", label: "Continents" },
  { value: "5+", label: "Years focused on product discovery" },
];

const sectors = [
  "Seed",
  "Series A",
  "Scale-up",
  "SaaS",
  "Fintech",
  "Health",
  "Climate",
  "AI infrastructure",
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-[76rem] items-center justify-between px-6 md:px-10">
          <a href="#top" className="flex items-center gap-2.5 text-sm font-medium tracking-tight">
            <span
              className="inline-block h-2.5 w-2.5 rotate-45 bg-accent"
              aria-hidden="true"
            />
            Slipstream Labs
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
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
            className="rounded-md border border-border px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-foreground"
          >
            Start a conversation
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,var(--hairline)_1px,transparent_1px)] [background-size:calc(100%/6)_100%] opacity-70"
          />
          <div className="relative mx-auto w-full max-w-[76rem] px-6 pb-24 pt-24 md:px-10 md:pb-36 md:pt-36">
            <p className="label-mono fade-up">Product discovery &amp; strategy — Stockholm</p>
            <h1 className="display-xl fade-up mt-8 max-w-4xl text-balance">
              Work out what is worth building.
            </h1>
            <p className="fade-up mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Slipstream Labs helps product teams validate opportunities and make better product
              decisions — before committing engineering time and money to the build.
            </p>
            <div className="fade-up mt-11 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start a conversation
              </a>
              <a
                href="#approach"
                className="group inline-flex h-11 items-center gap-2 rounded-md border border-border px-5 text-sm font-medium transition-colors hover:border-foreground"
              >
                See how it works
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
            <dl className="mt-20 grid max-w-3xl grid-cols-1 gap-px border-t border-hairline sm:grid-cols-3">
              {[
                ["Evidence", "over assumptions"],
                ["Clarity", "over complexity"],
                ["Decisions", "over deliverables"],
              ].map(([k, v]) => (
                <div key={k} className="pt-5">
                  <dt className="text-sm font-medium">{k}</dt>
                  <dd className="text-sm text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Problem */}
        <Section id="problem" label="The problem">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-6">
              <h2 className="display-md text-balance">
                Building the wrong thing is the most expensive mistake in product.
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Most teams move from idea straight into design and delivery. A quarter later the
                  feature ships, the metrics don&apos;t move, and nobody can say which assumption
                  was wrong — because none of them were written down.
                </p>
                <p>
                  Slipstream Labs exists to create a deliberate step between idea and build.
                </p>
              </div>
            </div>
            <div className="md:col-span-6 md:pt-2">
              <p className="label-mono">Skipped without noticing</p>
              <ul className="mt-5 divide-y divide-[var(--hairline)] border-y border-hairline">
                {[
                  "The problem — is it real, frequent, and painful?",
                  "The customer — who exactly, and what do they do today?",
                  "The opportunity — is it big enough to matter?",
                  "The assumptions — what has to be true for this to work?",
                  "The solution — is it actually worth building?",
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
        </Section>

        {/* Approach */}
        <Section id="approach" label="The approach">
          <h2 className="display-md max-w-2xl text-balance">
            Four steps from uncertainty to a decision.
          </h2>
          <ol className="mt-14 grid gap-px border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="group relative pt-6 lg:pr-8 lg:not-last:border-r lg:not-last:border-hairline"
              >
                <span
                  className="absolute -top-px left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full lg:w-[calc(100%-2rem)] lg:group-hover:w-[calc(100%-2rem)]"
                  aria-hidden="true"
                />
                <span className="label-mono">{s.n}</span>
                <h3 className="mt-3 text-xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-2 max-w-xs pb-8 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Discovery Sprint */}
        <Section id="sprint" label="Discovery Sprint">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="display-md text-balance">A fixed-scope sprint that ends in a call.</h2>
              <Lead>
                <span className="mt-7 block">
                  Two to four weeks of focused discovery on one opportunity. It ends with a
                  recommendation, not a document dump: build it, change it, test it, or
                  don&apos;t build it.
                </span>
              </Lead>
              <a
                href="#contact"
                className="mt-9 inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Scope a sprint
              </a>
            </div>
            <div className="grid gap-10 md:col-span-7 sm:grid-cols-2">
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
              <div className="sm:col-span-2 rule-t pt-8">
                <p className="label-mono">What you get</p>
                <ul className="mt-4 grid gap-3 text-[0.95rem] leading-relaxed text-muted-foreground sm:grid-cols-2">
                  {sprintGet.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Outcomes */}
        <Section id="outcomes" label="Outcomes">
          <h2 className="display-md max-w-2xl text-balance">Decisions, not deliverables.</h2>
          <div className="mt-14 grid gap-px sm:grid-cols-2">
            {outcomes.map((o, i) => (
              <div
                key={o.title}
                className="group border-t border-hairline py-8 sm:pr-10 sm:not-odd:pl-10 sm:not-odd:border-l"
              >
                <span className="label-mono">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-2xl font-medium tracking-tight">{o.title}</h3>
                <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section id="testimonials" label="What teams say">
          <h2 className="display-md max-w-2xl text-balance">Evidence, seen from the other side.</h2>
          <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.role}
                className="group relative border-t border-hairline pt-6 sm:pr-8 lg:not-last:border-r lg:not-last:border-hairline"
              >
                <span
                  className="absolute -top-px left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full lg:w-[calc(100%-2rem)] lg:group-hover:w-[calc(100%-2rem)]"
                  aria-hidden="true"
                />
                <blockquote className="text-lg leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-medium text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* Credibility */}
        <Section id="track-record" label="Track record">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="display-md text-balance">Small practice, clear impact.</h2>
              <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
                Slipstream Labs works with post-seed and Series A teams across SaaS, fintech,
                health, climate and AI infrastructure. The work is hands-on, and the measure is
                whether the next decision gets easier.
              </p>
            </div>
            <div className="md:col-span-7">
              <dl className="grid gap-px border-t border-hairline sm:grid-cols-3">
                {trackRecord.map((item) => (
                  <div
                    key={item.label}
                    className="pt-6 sm:pr-8 sm:not-last:border-r sm:not-last:border-hairline"
                  >
                    <dt className="display-md text-accent">{item.value}</dt>
                    <dd className="mt-2 max-w-[12rem] text-sm leading-relaxed text-muted-foreground">
                      {item.label}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="rule-t mt-10 pt-8">
                <p className="label-mono">Stages and sectors</p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  {sectors.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* About */}
        <Section id="about" label="About">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="display-md">Sebastian Bouvier</h2>
              <p className="mt-3 text-sm text-muted-foreground">Founder — Slipstream Labs</p>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-8">
              <p>
                I&apos;ve spent my career on the messy front half of product — product management,
                business analysis, and data across several industries. The pattern repeats
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
            <h2 className="display-xl mt-8 text-balance">
              Have a product decision you&apos;re stuck on?
            </h2>
            <p className="mt-7 text-lg text-muted-foreground md:text-xl">
              Let&apos;s work out what is worth building.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@slipstreamlabs.se?subject=Discovery%20Sprint%20enquiry"
                className="inline-flex h-12 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
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
        <div className="mx-auto flex w-full max-w-[76rem] flex-col gap-3 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Slipstream Labs · Stockholm</p>
          <p className="label-mono">Evidence before build</p>
        </div>
      </footer>
    </div>
  );
}
