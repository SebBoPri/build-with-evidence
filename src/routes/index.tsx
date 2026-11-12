import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, WorkLabel, WorkSubheading } from "@/components/site/sections";
import { Wordmark } from "@/components/site/brand";
import { ApproachRail } from "@/components/site/approach-rail";
import { ContactForm } from "@/components/site/contact-form";
import { CtaButton } from "@/components/site/cta-button";
import { HeroRays } from "@/components/site/hero-rays";
import sebastianPortrait from "@/assets/sebastian-bouvier.png.asset.json";

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
  { href: "#problem", label: "The problem" },
  { href: "#sprint", label: "The Discovery Sprint" },
  { href: "#approach", label: "Approach" },
  { href: "/work", label: "Work" },
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
    title: "Find the risk",
    q: "What could make this idea fail?",
    body: "Find the assumption that matters most, usually whether people will value the product enough to use it.",
  },
  {
    n: "02",
    title: "Set the line",
    q: "What would we need to see?",
    body: "Decide what real behaviour would count as enough. Interest is easy. Using, paying, or making a real commitment tells us more.",
  },
  {
    n: "03",
    title: "Set it before testing",
    q: "Do we all agree, in advance?",
    body: "Write the kill-line down before the prototype is tested. Everyone involved agrees on it while the answer is still unknown.",
  },
  {
    n: "04",
    title: "Test the assumption",
    q: "What do people actually do?",
    body: "Put a prototype in front of real users. Watch what happens and measure it against the kill-line, rather than what people say they might do.",
  },
  {
    n: "05",
    title: "Follow the result",
    q: "What does this mean for the product?",
    body: "Stop. Change it. Build it. The value of a kill-line is not knowing where to draw it. It is being willing to follow it when the answer is no.",
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
    <div className="min-h-screen bg-background text-foreground">
      <header className="theme-dark-band sticky top-0 z-50 !bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-[84rem] items-center justify-between px-6 md:px-10 lg:h-20">
          <a href="#top" aria-label="Slipstream Labs home">
            <Wordmark />
          </a>
          <div className="flex items-center gap-10">
          <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
            {nav.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-[0.9375rem] text-foreground transition-opacity hover:opacity-60"
                  activeProps={{ className: "text-sm text-foreground" }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[0.9375rem] text-foreground transition-opacity hover:opacity-60"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/work" className="text-sm font-medium text-foreground lg:hidden">
              Work
            </Link>
            <a
              href="#contact"
              className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 max-sm:h-9 max-sm:px-4"
            >
              Contact
            </a>
          </div>
          </div>
        </div>
      </header>

      <main id="top">

        {/* Hero */}
        <section className="theme-dark-band relative -mt-16 overflow-hidden !bg-black lg:-mt-20">
          <HeroRays className="absolute inset-0 h-full w-full" />
          <div className="relative mx-auto flex min-h-svh w-full max-w-[84rem] flex-col justify-center px-6 pb-60 pt-32 md:px-10 md:pb-72 lg:pb-24 lg:pt-44">
            <p className="fade-up flex items-center gap-4 text-base font-medium text-foreground md:text-lg">
              <span className="h-px w-10 bg-foreground md:w-12" aria-hidden="true" />
              Product discovery &amp; strategy
            </p>
            <h1 className="fade-up delay-1 mt-8 max-w-4xl font-sans text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Find what&rsquo;s worth building.
            </h1>
            <p className="fade-up delay-2 mt-8 max-w-xl text-lg leading-snug text-foreground/90 md:text-2xl md:leading-snug">
              Slipstream Labs helps product teams turn uncertain ideas and opportunities into
              evidence-backed paths forward, before committing significant engineering resources.
            </p>
            <div className="fade-up delay-3 mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
              <CtaButton href="#contact" className="h-14 rounded-md px-7 text-base">
                Let's explore together
              </CtaButton>
              <a
                href="#sprint"
                className="text-base font-medium text-foreground underline decoration-foreground/60 decoration-1 underline-offset-[10px] transition-colors hover:decoration-foreground"
              >
                How the sprint works
              </a>
            </div>
          </div>
        </section>


        {/* Problem */}
        <Section id="problem" label="The problem" accent="var(--brand-purple)">
          <h2 className="display-md max-w-3xl text-balance">
            Building the wrong thing is still expensive.
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              A team can go from assumption to production in weeks. But if the problem
              isn&apos;t real, the customer isn&apos;t who you thought, or the solution
              doesn&apos;t create enough value, speed only gets you to the wrong destination
              faster.
            </p>
          </div>

          <div className="mt-14 md:mt-16">
            <WorkSubheading>We&apos;ve all seen it</WorkSubheading>
            <ol className="mt-5">
              {problemCases.map((item, i) => (
                <li
                  key={item.t}
                  className="group relative border-t border-hairline transition-colors duration-500 last:border-b hover:bg-case-highlight/[0.05]"
                >
                  <div className="flex gap-8 px-2 py-8 md:gap-12 md:px-4 md:py-10">
                    <span className="label-mono shrink-0 pt-1.5 transition-colors duration-500 group-hover:text-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="max-w-3xl">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {item.t}
                      </h3>
                      <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-full ${
                      i % 3 === 0
                        ? "bg-brand-blue"
                        : i % 3 === 1
                          ? "bg-brand-purple"
                          : "bg-brand-gold"
                    }`}
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ol>
          </div>
        </Section>


        {/* Discovery Sprint */}
        <Section id="sprint" label="Discovery Sprint" accent="var(--brand-gold-text)">
          <h2 className="display-md max-w-3xl text-balance">
            From uncertain idea to a decision you can act on.
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              A focused engagement on one product opportunity. We run it with your team: framing the
              problem, talking to customers, testing the riskiest assumptions together. The
              conclusion is one your team helped reach, so it holds up in the room afterwards.
            </p>
          </div>


          <div className="mt-14">
            <WorkSubheading>When to use it</WorkSubheading>
            <ul className="mt-6 max-w-3xl space-y-6">
              {sprintWhen.map((i, index) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className={`mt-2 h-0.5 w-4 shrink-0 ${
                      index % 3 === 0
                        ? "bg-brand-blue"
                        : index % 3 === 1
                          ? "bg-brand-purple"
                          : "bg-brand-gold"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="text-base leading-relaxed text-muted-foreground">
                    {i}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <WorkSubheading>What you leave with</WorkSubheading>
            <dl className="mt-6 grid gap-4 md:grid-cols-3">
              {sprintGet.map((f, i) => (
                <div
                  key={f.k}
                  className={`p-6 md:p-8 ${
                    i % 3 === 0
                      ? "bg-brand-blue text-background"
                      : i % 3 === 1
                        ? "bg-brand-purple text-background"
                        : "bg-brand-gold text-brand-ink"
                  }`}
                >
                  <dt className="font-display text-xl tracking-tight">{f.k}</dt>
                  <dd className="mt-3 text-base leading-relaxed opacity-85">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-14">
            <p className="text-lg leading-relaxed text-muted-foreground">
              You don&apos;t leave with more opinions.
            </p>
          </div>

          <CtaButton href="#contact" className="mt-8">
            Let's explore together
          </CtaButton>

        </Section>

        {/* Approach */}
        <Section id="approach" label="Approach" accent="var(--brand-blue)">
          <h2 className="display-md max-w-3xl text-balance">Start with what must be true.</h2>

          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Every product idea rests on assumptions. The dangerous ones are not the assumptions
              you question. They are the assumptions you never name.
            </p>
            <p>
              A kill-line is the evidence that would make us stop, change direction, or commit. We
              define it before we start, so momentum cannot override what the evidence says.
            </p>
          </div>

          <ApproachRail steps={steps} />
        </Section>



        {/* Pull quote */}
        <Section>
          <blockquote className="bg-brand-ink px-6 py-14 text-background md:px-14 md:py-20">
            <p className="display-md max-w-4xl text-balance">
              Just because you can build it doesn&apos;t mean you should.
            </p>
            <p className="display-md mt-3 max-w-4xl text-balance text-background/60">
              Speed is only an advantage when you&apos;re moving in the right direction.
            </p>
          </blockquote>
        </Section>


        {/* About */}
        <Section id="about" label="About" accent="var(--brand-gold-text)">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="display-md">Sebastian Bouvier</h2>
              <p className="mt-3 text-sm text-muted-foreground">Founder, Slipstream Labs</p>
              <img
                src={sebastianPortrait.url}
                alt="Sebastian Bouvier"
                width={1254}
                height={1254}
                loading="lazy"
                className="mt-8 w-full"
              />
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
        <section id="contact" className="scroll-mt-16 bg-brand-blue text-background max-lg:scroll-mt-20">
          <div className="mx-auto w-full max-w-[84rem] px-6 py-20 md:px-10 md:py-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-background/70">
              Contact
            </p>
            <h2 className="display-md mt-8 max-w-3xl text-balance">
              Have an opportunity you&apos;re not sure about?
            </h2>
            <div className="mt-8 max-w-2xl space-y-4 text-lg font-light leading-relaxed text-background/80 md:text-xl">
              <p>You don&apos;t need another workshop.</p>
              <p>You need to know whether there&apos;s something worth building.</p>
              <p className="text-background">Let&apos;s investigate it.</p>
            </div>
          </div>
        </section>
        <section className="bg-background">
          <div className="mx-auto w-full max-w-[84rem] px-6 pb-24 pt-4 md:px-10 md:pb-28">
            <div className="max-w-3xl">
              <ContactForm />
            </div>
          </div>
        </section>
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
          <p className="label-mono flex items-center gap-3">
            <span className="section-accent" aria-hidden="true" />
            Evidence before build
          </p>
        </div>
      </footer>
    </div>
  );
}
