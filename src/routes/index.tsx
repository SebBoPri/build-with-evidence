import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/sections";
import { Wordmark } from "@/components/site/brand";
import { ApproachRail } from "@/components/site/approach-rail";
import { ContactForm } from "@/components/site/contact-form";
import { CtaButton } from "@/components/site/cta-button";
import heroStream from "@/assets/hero-stream.jpg.asset.json";
import heroStreamWebp from "@/assets/hero-stream.webp.asset.json";

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


const steps = [
  {
    n: "01",
    title: "Assumptions",
    q: "What has to be true?",
    body: "Map the beliefs behind the idea and rank them by risk.",
  },
  {
    n: "02",
    title: "Kill-lines",
    q: "What would make us stop?",
    body: "Define the evidence strong enough to change direction or walk away before testing begins.",
  },
  {
    n: "03",
    title: "Evidence",
    q: "What happens in reality?",
    body: "Test the riskiest assumptions with the smallest amount of work that teaches something useful.",
  },
  {
    n: "04",
    title: "Opportunity",
    q: "What remains?",
    body: "Connect what held up and decide whether a meaningful opportunity is left.",
  },
  {
    n: "05",
    title: "Action",
    q: "What next?",
    body: "Build it, change it, test it, or stop. The decision is written down.",
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
          <CtaButton href="#contact" className="h-10 px-5">
            Let's explore together
          </CtaButton>
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
              <source srcSet={heroStreamWebp.url} type="image/webp" />
              <img
                src={heroStream.url}
                alt=""
                aria-hidden="true"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                width={1600}
                height={1073}
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
              <p>
                Slipstream Labs helps product teams turn uncertain ideas and opportunities into
                evidence-backed paths forward, before committing significant engineering resources.
              </p>
            </div>
            <div className="fade-up delay-3 mt-12 flex flex-wrap items-center gap-3">
              <CtaButton href="#contact">Let's explore together</CtaButton>
              <a
                href="#sprint"
                className="inline-flex h-12 items-center border border-border px-6 text-sm font-medium transition-colors hover:border-foreground"
              >
                How the sprint works
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
        <Section id="problem" label="The problem">
          <h2 className="display-md max-w-3xl text-balance">
            Building the wrong thing is still expensive.
          </h2>

          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              A team can go from assumption to production in weeks. But if the problem
              isn&apos;t real, the customer isn&apos;t who you thought, or the solution
              doesn&apos;t create enough value, speed only gets you to the wrong destination
              faster.
            </p>
          </div>

          <div className="mt-16 md:mt-20">
            <p className="label-mono">We&apos;ve all seen it</p>
            <ol className="mt-5 divide-y divide-[var(--hairline)] border-y border-hairline">
              {problemCases.map((item, i) => (
                <li key={item.t} className="flex gap-6 py-6 md:py-7">
                  <span className="label-mono shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="max-w-3xl">
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
        </Section>


        {/* Discovery Sprint */}
        <Section id="sprint">
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

          <div className="rule-t mt-12 pt-10">
            <p className="text-lg leading-relaxed text-muted-foreground">
              You don&apos;t leave with more opinions.
            </p>
          </div>

          <CtaButton href="#contact" className="mt-10">
            Let's explore together
          </CtaButton>

        </Section>

        {/* Approach */}
        <Section id="approach">
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
                product management, business analysis and data in banking, telecom, logistics, automotive and fintech.
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
