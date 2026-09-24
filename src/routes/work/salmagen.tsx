import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/sections";
import { Wordmark } from "@/components/site/brand";
import { CtaButton } from "@/components/site/cta-button";
import salmagenHero from "@/assets/salmagen-hero.webp.asset.json";

export const Route = createFileRoute("/work/salmagen")({
  head: () => ({
    meta: [
      { title: "Sälmagen: when the user can't think straight, remove the wrong choice — Slipstream Labs" },
      {
        name: "description",
        content:
          "A rescue vest for long-distance skating, designed so the wrong action becomes physically impossible. Bachelor thesis, 2018.",
      },
      {
        property: "og:title",
        content: "Sälmagen: when the user can't think straight, remove the wrong choice — Slipstream Labs",
      },
      {
        property: "og:description",
        content:
          "A rescue vest for long-distance skating, designed so the wrong action becomes physically impossible. Bachelor thesis, 2018.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://slipstreamlabs.se/work/salmagen" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Sälmagen: when the user can't think straight, remove the wrong choice — Slipstream Labs",
      },
    ],
    links: [{ rel: "canonical", href: "https://slipstreamlabs.se/work/salmagen" }],
  }),

  component: SalmagenCase,
});

const homeNav = [
  { label: "Problem", hash: "problem" },
  { label: "Discovery Sprint", hash: "sprint" },
  { label: "Approach", hash: "approach" },
  { label: "About", hash: "about" },
];

const meta = [
  { label: "Role", value: "Product developer, rescue vest (Sälmagen)" },
  { label: "Context", value: "Safety product for a long-distance skating club" },
  { label: "Timeframe", value: "2018" },
];

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-hairline pt-10">
      <h2 className="label-mono">{title}</h2>
      <div className="mt-6 max-w-2xl space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function SalmagenCase() {
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
            <Link to="/work" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Work
            </Link>
          </nav>
          <CtaButton href="/#contact" className="h-10 px-5">
            Let's explore together
          </CtaButton>
        </div>
      </header>

      <main>
        {/* Headline + meta + summary */}
        <section>
          <div className="mx-auto w-full max-w-[84rem] px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32">
            <p className="label-mono fade-up">
              <Link to="/work" className="transition-colors hover:text-foreground">
                Work
              </Link>
              {" / "}Case
            </p>
            <h1 className="display-md fade-up delay-1 mt-10 max-w-3xl text-balance">
              When the user can&rsquo;t think straight, remove the wrong choice
            </h1>

            <dl className="fade-up delay-2 mt-10 grid gap-6 border-t border-hairline pt-8 sm:grid-cols-3">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="label-mono">{m.label}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{m.value}</dd>
                </div>
              ))}
            </dl>

            <p className="fade-up delay-3 mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Ice rescues fail when the person in the water, cold and frightened, has to attach the
              rescue line themselves. We designed a vest that leaves only correct attachment points.
              It reached prototype stage as part of the NIX safety system, but was never tested on
              real ice.
            </p>
          </div>
        </section>

        {/* Hero visual: working sketch from the thesis, treated monochrome */}
        <section>
          <div className="mx-auto w-full max-w-[84rem] px-6 md:px-10">
            <figure className="border-t border-hairline pt-10">
              <div className="mx-auto w-full max-w-xl border border-hairline">
                <img
                  src={salmagenHero.url}
                  alt="Working sketch of the Sälmagen rescue vest worn over a backpack, seen from the front"
                  className="w-full"
                  loading="eager"
                />
              </div>
              <figcaption className="label-mono mt-4 text-muted-foreground">
                Working sketch of Sälmagen worn over a backpack, from the front: two shoulder
                attachment points and the low-friction glide surface. No photo of the prototype
                exists.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Body */}
        <Section>
          <div className="space-y-16 md:space-y-20">
            <CaseSection title="The situation">
              <p>
                Long-distance skaters carry a throw line in case a companion goes through the ice, a
                system that had barely changed since the 1960s. A team of six product developers set
                out to improve it, working with Linköping&rsquo;s long-distance skating club as our
                bachelor thesis. The result was NIX, a safety system of three linked concepts: an
                extension band, a lanyard bag and Sälmagen, a rescue vest. I worked on Sälmagen.
              </p>
            </CaseSection>

            <CaseSection title="The real problem">
              <p>
                Before designing anything, we studied how rescues actually play out: interviews with
                skaters, literature from professional institutions, and observation sessions out on
                the ice. The finding that shaped the vest was about the user, not the equipment. The
                person who has to attach the line is the one in the water: cold, frightened, and
                with their ability to make decisions failing. Clearer instructions don&rsquo;t help
                someone in that state.
              </p>
            </CaseSection>

            <CaseSection title="What we did">
              <p>
                We designed the vest so the wrong action becomes physically impossible, rather than
                making the right action clearer.
              </p>
              <ul className="space-y-5">
                <li>
                  <span className="text-foreground">Fewer options.</span> The vest covers the
                  backpack&rsquo;s straps and loops, leaving two reachable attachment points, both
                  correct and both on the shoulders. Because every vest is identical, those points
                  can be specified and quality controlled, which an improvised point on a personal
                  pack never can.
                </li>
                <li>
                  <span className="text-foreground">Requirements from failure modes.</span> The load
                  runs through the vest rather than through webbing never rated to lift a person,
                  and a buoyancy element rights a face-down person before the pulling begins.
                </li>
                <li>
                  <span className="text-foreground">Built to glide.</span> A low-friction front lets
                  the person slide out over the ice edge while their companion pulls, like a seal on
                  its belly. Hence the name: Sälmagen, &ldquo;seal belly&rdquo;.
                </li>
                <li>
                  <span className="text-foreground">Interface split by stress level.</span> The
                  emergency side can&rsquo;t be got wrong. The mounting side carries a printed
                  label, because mounting happens calmly at home and can afford to be learned.
                </li>
              </ul>
            </CaseSection>

            <CaseSection title="What changed">
              <p>
                Sälmagen reached concept and prototype stage and was presented as part of NIX. With
                help from our professors, we built a physics model of the rescue, estimating some of
                the forces involved. It was never tested live in a real ice scenario.
              </p>
            </CaseSection>

            <CaseSection title="Reading it now">
              <p>
                Looking back, the vest rested on three untested assumptions. That the low-friction
                front actually reduces the force needed to pull someone out, which we only estimated
                in a model. That skaters would find it comfortable enough to wear on an ordinary
                tour, which we never tested. And that they carry a backpack suited to the activity,
                which the design depended on. The riskiest was the second: a safety product only
                works if it&rsquo;s worn on the day it&rsquo;s needed.
              </p>
              <p>
                Today I would test that first, before any engineering: give club members a simple
                mock-up to wear over their own backpacks on a few ordinary tours, and ask
                afterwards whether they&rsquo;d wear it every time. If most took it off, left it at
                home, or needed a different backpack to use it, I would stop and rethink the
                concept before building anything more.
              </p>
            </CaseSection>
          </div>
        </Section>

        {/* Closing */}
        <Section id="contact">
          <div className="max-w-3xl">
            <h2 className="display-md text-balance">
              If one of these looks like your situation, let&rsquo;s find out.
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
