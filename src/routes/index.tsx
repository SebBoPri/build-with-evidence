import { createFileRoute } from "@tanstack/react-router";
import { Section, Lead, FullBleedFigure, Reveal } from "@/components/site/sections";
import { Wordmark, Starfield } from "@/components/site/brand";
import { ApproachRail } from "@/components/site/approach-rail";
import { ContactForm } from "@/components/site/contact-form";
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
      { title: "Slipstream Labs: Find what’s worth building" },
      {
        name: "description",
        content:
          "Product discovery and strategy for post-seed and Series A teams. Fixed-scope Discovery Sprints that turn uncertainty into evidence-backed decisions.",
      },
      { property: "og:title", content: "Slipstream Labs: Find what’s worth building" },
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
      { name: "twitter:title", content: "Slipstream Labs: Find what’s worth building" },
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

const problemCases = [
  {
    t: "The product nobody needed",
    body: "Everyone agreed the idea made sense. It shipped. Adoption never came.",
  },
  {
    t: "The feature that solved the request, not the problem",
    body: "Customers asked for something specific. The team built it. The underlying problem remained.",
  },
  {
    t: "AI for the sake of AI",
    body: "\u201CDo something with AI\u201D became the goal. The technology arrived before the problem worth solving was clear.",
  },
];

const skippedQuestions = [
  "Is this a real problem?",
  "How often does it happen?",
  "Who experiences it most acutely?",
  "What do people do today?",
  "Is the opportunity big enough to matter?",
  "What has to be true for this to work?",
  "What evidence would change our mind?",
  "Is this worth building?",
];

const steps = [
  {
    n: "01",
    title: "Assumptions",
    q: "What has to be true for this opportunity to work?",
    body: "We map the assumptions behind the idea and rank them by risk.",
  },
  {
    n: "02",
    title: "Kill-lines",
    q: "What would make us stop?",
    body: "Before testing, we agree what evidence would be strong enough to change direction or walk away.",
  },
  {
    n: "03",
    title: "Evidence",
    q: "What happens in reality?",
    body: "We gather evidence from customers, users, markets and experiments. We prioritise what people actually do over what they say they might do.",
  },
  {
    n: "04",
    title: "Opportunity",
    q: "What does the evidence tell us?",
    body: "We connect the evidence, identify what holds up and what doesn't, and determine whether a meaningful opportunity remains.",
  },
  {
    n: "05",
    title: "Action",
    q: "What should happen next?",
    body: "Build it. Change it. Test it. Or stop. The answer is written down, with the reasoning behind it.",
  },
];

const sprintWhen = [
  "A roadmap bet is about to consume a quarter of engineering.",
  "Two opportunities look equally plausible.",
  "Your team disagrees about what to build.",
  "You're being asked to do something with AI, without a clear problem it solves.",
];

const sprintGet = [
  {
    k: "Evidence",
    v: "What we learned, how we learned it, and where uncertainty remains.",
  },
  {
    k: "A recommendation",
    v: "Build it, change it, test it further, or don't pursue it.",
  },
  {
    k: "A next move",
    v: "A practical starting point your team can act on immediately.",
  },
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


          <div className="relative mx-auto w-full max-w-[84rem] px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32">
            <p className="label-mono fade-up">Product discovery &amp; strategy</p>
            <h1 className="display-xl fade-up delay-1 mt-10 max-w-4xl text-balance">
              Find what&rsquo;s worth
              <br />
              <span className="text-muted-foreground">building.</span>
            </h1>
            <div className="fade-up delay-2 mt-10 max-w-xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p className="text-foreground">
                Building has never been easier. Knowing what is worth building has never mattered
                more.
              </p>
              <p>
                Slipstream Labs helps product teams turn uncertain ideas and opportunities into
                evidence-backed paths forward, before committing significant engineering resources.
              </p>
            </div>
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
                className="inline-flex h-12 items-center border border-border px-6 text-sm font-medium transition-colors hover:border-foreground"
              >
                Explore the Discovery Sprint
              </a>
            </div>
            <p className="label-mono fade-up delay-4 mt-14">Evidence before build.</p>
            <div className="mt-20 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-hairline pt-6 md:mt-28">
              <p className="label-mono">Assumption · Evidence · Opportunity · Action</p>
              <p className="label-mono">Stockholm, Sweden</p>
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
              <Starfield className="pointer-events-none absolute inset-0 h-full w-full text-foreground opacity-25" />
            }
          />


          <div className="mx-auto w-full max-w-[84rem] px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-20">
            <h2 className="display-md max-w-3xl text-balance">
              Building the wrong thing is still expensive.
            </h2>
            <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                The cost of building software keeps falling. The cost of committing to the wrong
                product idea does not.
              </p>
              <p>
                A team can go from assumption to production in weeks. But if the problem
                isn&apos;t real, the customer isn&apos;t who you thought, or the solution
                doesn&apos;t create enough value, speed only gets you to the wrong destination
                faster.
              </p>
            </div>
            <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-12">
              <div className="md:col-span-6">
                <p className="label-mono">We&apos;ve all seen it</p>
                <ol className="mt-5 divide-y divide-[var(--hairline)] border-y border-hairline">
                  {problemCases.map((item, i) => (
                    <li key={item.t} className="flex gap-6 py-6">
                      <span className="label-mono shrink-0 pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-base font-medium tracking-tight text-foreground">
                          {item.t}
                        </h3>
                        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="md:col-span-6">
                <p className="label-mono">The questions that get skipped</p>
                <ul className="mt-5 divide-y divide-[var(--hairline)] border-y border-hairline">
                  {skippedQuestions.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 py-4 text-[0.95rem] transition-colors hover:text-foreground"
                    >
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-10 text-lg leading-relaxed text-foreground">
                  The problem isn&apos;t a lack of ideas.
                  <br />
                  It&apos;s knowing which ideas deserve to become products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transition */}
        <Section>
          <h2 className="display-md max-w-3xl text-balance">
            Don&apos;t explore everything. Find the path worth pursuing.
          </h2>
          <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>At the start of a product opportunity, many futures are possible.</p>
            <p>Some lead somewhere valuable. Most don&apos;t.</p>
            <p>
              Our job is not to predict the future. It&apos;s to investigate the assumptions that
              separate the promising paths from the rest.
            </p>
          </div>
        </Section>

        {/* Discovery Sprint */}
        <Section id="sprint">
          <FullBleedFigure
            breakOut
            src={sprintConverge}
            srcWebp={sprintConvergeWebp}
            srcWebp2x={sprintConvergeWebp2x}
            width={1344}
            height={896}
            alt="Abstract image: a dense field of nodes and filaments, with one bounded region marked by bracket rules and a single node fixed by a crosshair"
            eyebrow="Discovery Sprint"
            title="One question, taken to a decision"
            subtitle="The sprint ends with one recommendation, not a document dump."
            note="The brackets mark the question in scope. The crosshair is the decision the sprint resolves."
            meta="Flagship offering"

          />


          <h2 className="display-md max-w-3xl text-balance">
            From uncertain idea to a decision you can act on.
          </h2>

          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              A focused engagement on one product opportunity. We run it with your team: framing the
              problem, talking to customers, testing the riskiest assumptions together. The
              conclusion is one your team helped reach, so it holds up in the room afterwards.
            </p>
          </div>

          <div className="mt-12">
            <p className="label-mono">What we look at</p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Whether the problem is real, who has it, what they do today, how large the
              opportunity is, and what has to be true for it to work.
            </p>
          </div>

          <div className="rule-t mt-12 pt-10">
            <p className="label-mono">When to use it</p>
            <ul className="mt-5 max-w-3xl divide-y divide-[var(--hairline)] border-y border-hairline">
              {sprintWhen.map((i) => (
                <li key={i} className="flex gap-4 py-4">
                  <span className="mt-2 h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                  <span className="text-[0.95rem] leading-relaxed text-muted-foreground">
                    {i}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rule-t mt-12 pt-10">
            <p className="label-mono">What you leave with</p>
            <dl className="mt-5 grid gap-x-10 gap-y-6 md:grid-cols-3">
              {sprintGet.map((f) => (
                <div key={f.k} className="border-t border-hairline pt-4">
                  <dt className="text-base font-medium tracking-tight text-foreground">{f.k}</dt>
                  <dd className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rule-t mt-16 max-w-2xl pt-10">
            <p className="text-lg leading-relaxed text-muted-foreground">
              You don&apos;t leave with more opinions.
            </p>
          </div>

          <a
            href="#contact"
            className="group mt-10 inline-flex h-11 items-center gap-3 bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Scope a Discovery Sprint
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              →
            </span>
          </a>

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
            eyebrow="How we work"
            title="Noise resolves into signal"
            subtitle="Name what must be true, then test it until the evidence separates the promising paths from the rest."
            note="Left is everything you could believe. Right is what the evidence still supports."
            meta="Evidence synthesis"
          />

          <h2 className="display-md max-w-3xl text-balance">Start with what must be true.</h2>

          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Every product idea contains assumptions.</p>
            <p>Some are harmless. Others can kill the entire opportunity.</p>
            <p>
              We identify the assumptions that matter most, then test them with the smallest amount
              of work needed to learn something useful.
            </p>
          </div>

          <ApproachRail steps={steps} />
        </Section>



        {/* Pull quote */}
        <Section>
          <blockquote className="max-w-4xl">
            <p className="display-md text-balance">
              Just because you can build it doesn&apos;t mean you should.
            </p>
            <p className="display-md mt-3 text-balance text-muted-foreground">
              Speed is only an advantage when you&apos;re moving in the right direction.
            </p>
          </blockquote>
        </Section>


        {/* About */}
        <Section id="about" label="About">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="display-md">Sebastian Bouvier</h2>
              <p className="mt-3 text-sm text-muted-foreground">Founder, Slipstream Labs</p>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-8">
              <p>
                I&apos;ve spent my career working in the messy front half of products, across
                product management, business analysis and data in several industries.
              </p>
              <p>
                The pattern repeats: teams rarely run out of ideas. They run out of{" "}
                <strong className="text-foreground">evidence, time and a clear way to choose</strong>{" "}
                between them.
              </p>
              <p>
                Slipstream Labs is built around solving that problem. I work directly with product
                teams to investigate opportunities, challenge assumptions and find what is worth
                pursuing before significant resources are committed.
              </p>
              <p className="text-foreground">
                No delivery pyramid. No theatre. No giant report that disappears into a drawer.
              </p>
              <p className="text-foreground">
                Just focused discovery, honest evidence and a clear path forward.
              </p>
              <p>Based in Stockholm. Working with teams anywhere.</p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section id="contact">
          <div className="max-w-3xl">
            <h2 className="display-md text-balance">
              Have an opportunity you&apos;re not sure about?
            </h2>
            <div className="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>You don&apos;t need another workshop.</p>
              <p>You need to know whether there&apos;s something worth building.</p>
              <p className="text-foreground">Let&apos;s investigate it.</p>
            </div>
            <ContactForm />
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
