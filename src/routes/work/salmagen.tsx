import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/sections";
import { Wordmark } from "@/components/site/brand";
import { CtaButton } from "@/components/site/cta-button";
import salmagenHero from "@/assets/salmagen-hero.webp.asset.json";
import iceRescue from "@/assets/ice-rescue-training.jpg.asset.json";
import nixProcessSketch from "@/assets/nix-process-sketch.jpg.asset.json";

export const Route = createFileRoute("/work/salmagen")({
  head: () => ({
    meta: [
      { title: "Sälmagen: when the user can't think straight, remove the wrong choice | Slipstream Labs" },
      {
        name: "description",
        content:
          "A rescue vest for long-distance skating, designed so the wrong action becomes physically impossible. Bachelor thesis, 2018.",
      },
      {
        property: "og:title",
        content: "Sälmagen: when the user can't think straight, remove the wrong choice | Slipstream Labs",
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
        content: "Sälmagen: when the user can't think straight, remove the wrong choice | Slipstream Labs",
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

function CaseSection({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-6 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-4">
        <p className="label-mono text-[#214B9B]">{index}</p>
        <h2 className="mt-3 font-display text-xl tracking-tight text-foreground md:text-2xl">{title}</h2>
      </div>
      <div className="max-w-[40rem] space-y-6 text-[1.0625rem] leading-[1.75] text-foreground/80 md:col-span-8">
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
            <div className="fade-up delay-1 mt-8 flex h-0.5 w-24" aria-hidden="true">
              <span className="w-1/2 bg-[#214B9B]" />
              <span className="w-1/4 bg-[#A05A9A]" />
              <span className="w-1/4 bg-[#EBC67F]" />
            </div>

            <dl className="fade-up delay-2 mt-10 grid max-w-3xl gap-6 border-t border-hairline pt-8 sm:grid-cols-3">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="label-mono">{m.label}</dt>
                  <dd className="mt-2 text-[0.95rem] text-foreground/90">{m.value}</dd>
                </div>
              ))}
            </dl>

            <p className="fade-up delay-3 mt-12 max-w-2xl text-xl leading-relaxed text-foreground/85">
              Ice rescues fail when the person in the water, cold and frightened, has to attach the
              rescue line themselves. We designed a vest that leaves only correct attachment points.
              It reached prototype stage as part of the NIX safety system, but was never tested on
              real ice.
            </p>
          </div>
        </section>

        {/* Hero visual: natural photo of an ice rescue training session */}
        <section>
          <div className="mx-auto w-full max-w-[84rem] px-6 md:px-10">
            <figure className="border-t border-hairline pt-10">
              <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-sm">
                <img
                  src={iceRescue.url}
                  alt="Ice rescue training: a person in a rescue suit in the water is pulled out by a line held by two skaters on the ice"
                  className="natural w-full"
                  loading="eager"
                />
              </div>
              <figcaption className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Ice rescue as it happens today: the person in the water is pulled out by a line.
                This is the moment S&auml;lmagen was designed for.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Body */}
        <Section>
          <div className="space-y-20 md:space-y-28">
            <CaseSection index="01" title="The situation">
              <p>
                Long-distance skaters carry a throw line in case a companion goes through the ice, a
                system that had barely changed since the 1960s. A team of six product developers set
                out to improve it, working with Linköping&rsquo;s long-distance skating club as our
                bachelor thesis. The result was NIX, a safety system of three linked concepts: an
                extension band, a lanyard bag and Sälmagen, a rescue vest. I worked on Sälmagen.
              </p>
            </CaseSection>

            <CaseSection index="02" title="The real problem">
              <p>
                Before designing anything, we studied how rescues actually play out: interviews with
                skaters, literature from professional institutions, and observation sessions out on
                the ice. The finding that shaped the vest was about the user, not the equipment. The
                person who has to attach the line is the one in the water: cold, frightened, and
                with their ability to make decisions failing. Clearer instructions don&rsquo;t help
                someone in that state.
              </p>
            </CaseSection>

            <CaseSection index="03" title="What we did">
              <p>
                We designed the vest so the wrong action becomes physically impossible, rather than
                making the right action clearer.
              </p>
              <ul className="space-y-6 border-l border-hairline pl-6">
                <li className="grid gap-6 sm:grid-cols-2 sm:items-start">
                  <p>
                    <span className="text-foreground">Fewer options.</span> The vest covers the
                    backpack&rsquo;s straps and loops, leaving two reachable attachment points,
                    both correct and both on the shoulders. Because every vest is identical, those
                    points can be specified and quality controlled, which an improvised point on a
                    personal pack never can.
                  </p>
                  <figure>
                    <img
                      src={salmagenHero.url}
                      alt="Working sketch of the Sälmagen rescue vest worn over a backpack, seen from the front"
                      className="w-full"
                      loading="lazy"
                    />
                  </figure>
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
              <figure className="pt-4">
                <img
                  src={nixProcessSketch.url}
                  alt="Working page from the design process, with sketches and handwritten notes"
                  className="natural w-full"
                  loading="lazy"
                />
              </figure>
            </CaseSection>

            <CaseSection index="04" title="What changed">
              <p>
                Sälmagen reached concept and prototype stage and was presented as part of NIX. With
                help from our professors, we built a physics model of the rescue, estimating some of
                the forces involved. It was never tested live in a real ice scenario.
              </p>
            </CaseSection>

            <CaseSection index="05" title="Reading it now">
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
