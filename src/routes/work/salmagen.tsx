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

function GhostNumeral({ value, side }: { value: string; side: "left" | "right" }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute -top-24 hidden select-none font-display text-[13rem] leading-none text-case-highlight/[0.07] lg:block ${
        side === "left" ? "-left-16" : "-right-8"
      }`}
    >
      {value}
    </span>
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
        {/* Headline + meta strip */}
        <section>
          <div className="mx-auto w-full max-w-[72rem] px-6 pb-16 pt-24 md:px-10 md:pb-24 md:pt-32">
            <p className="label-mono fade-up">
              <Link to="/work" className="transition-colors hover:text-foreground">
                Work
              </Link>
              {" / "}Case
            </p>
            <h1 className="fade-up delay-1 mt-10 max-w-4xl text-balance font-display text-5xl font-normal leading-[1.02] tracking-tight text-foreground md:text-7xl">
              When the user can&rsquo;t think straight, remove the wrong choice
            </h1>
            <dl className="fade-up delay-2 mt-14 flex flex-wrap gap-x-16 gap-y-6 border-t border-hairline pt-10">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-case-highlight">
                    {m.label}
                  </dt>
                  <dd className="text-sm text-foreground/80">{m.value}</dd>
                </div>
              ))}
            </dl>
            <p className="fade-up delay-3 mt-14 max-w-2xl font-display text-2xl leading-snug text-foreground/85 md:text-3xl">
              Ice rescues fail twice: when the person in the water, cold and frightened, has to
              attach the rescue line themselves, and when a soaked adult has to be hauled over the
              ice edge. We designed a vest that removes the wrong choices and cuts the force the
              pull demands. It reached prototype stage as part of the NIX safety system, but was
              never tested on real ice.
            </p>
          </div>
        </section>

        {/* Facts band */}
        <section className="border-y border-case-highlight/10 bg-case-highlight/[0.05]">
          <div className="mx-auto grid w-full max-w-[72rem] gap-12 px-6 py-14 md:grid-cols-3 md:gap-16 md:px-10 md:py-16">
            {[
              ["01.", "Design decision", "Two fixed attachment points, both correct, both on the shoulders."],
              ["02.", "Reached", "Concept, prototype and a physics model of the rescue forces."],
              ["03.", "Not reached", "A test on real ice, with real skaters, in real cold."],
            ].map(([numeral, label, text]) => (
              <div key={label} className="space-y-4">
                <span className="font-display text-2xl italic text-case-highlight">{numeral}</span>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">{label}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hero visual */}
        <section>
          <div className="mx-auto w-full max-w-[72rem] px-6 pt-24 md:px-10 md:pt-32">
            <figure>
              <div className="w-full overflow-hidden rounded-sm">
                <img
                  src={iceRescue.url}
                  alt="Ice rescue training: a person in a rescue suit in the water is pulled out by a line held by two skaters on the ice"
                  className="natural aspect-[16/8] w-full object-cover"
                  loading="eager"
                />
              </div>
              <figcaption className="mt-4 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                Ice rescue as it happens today: the person in the water is pulled out by a line.
                This is the moment S&auml;lmagen was designed for.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Body */}
        <Section>
          <div className="mx-auto max-w-[72rem] space-y-32 md:space-y-40">
            {/* 01 The situation: text left, sketch right */}
            <section className="relative grid items-start gap-12 md:grid-cols-12">
              <GhostNumeral value="01" side="left" />
              <div className="relative md:col-span-5 md:pt-10">
                <h2 className="font-display text-4xl leading-tight text-foreground">The situation</h2>
                <p className="mt-8 text-lg font-light leading-relaxed text-foreground/80">
                  Long-distance skaters carry a throw line in case a companion goes through the ice.
                  The system had barely changed since the 1960s.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-foreground/55">
                  For our bachelor thesis, six product developers set out to improve it, working
                  with Linköping&rsquo;s long-distance skating club. The result was NIX, a safety
                  system of three linked concepts: an extension band, a lanyard bag and Sälmagen, a
                  rescue vest. I worked on Sälmagen.
                </p>
              </div>
              <div className="md:col-span-7">
                <figure className="bg-case-highlight/[0.06] p-8 md:p-14">
                  <img
                    src={salmagenHero.url}
                    alt="Working sketch of the Sälmagen rescue vest worn over a backpack, seen from the front"
                    className="w-full"
                    loading="lazy"
                  />
                  <figcaption className="mt-6 text-[9px] font-bold uppercase tracking-[0.3em] text-case-highlight">
                    Working sketch, vest worn over backpack
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* 02 The real problem: reversed rhythm, text right */}
            <section className="relative grid items-start gap-12 md:grid-cols-12">
              <GhostNumeral value="02" side="right" />
              <div className="hidden md:col-span-5 md:block" aria-hidden />
              <div className="relative md:col-span-7 md:pt-10">
                <h2 className="font-display text-4xl leading-tight text-foreground">The real problem</h2>
                <p className="mt-8 text-lg font-light leading-relaxed text-foreground/80">
                  The person in the water is one problem. The person pulling them out is the other.
                </p>
                <p className="mt-6 leading-relaxed text-foreground/70">
                  We studied how rescues actually play out: interviews with skaters, literature from
                  professional institutions, observation sessions on the ice. The findings that
                  shaped the vest were about people, not equipment. The person who has to attach the
                  line is the one in the water: cold, frightened, and with their ability to make
                  decisions failing. Clearer instructions don&rsquo;t help someone in that state.
                </p>
                <p className="mt-6 leading-relaxed text-foreground/70">
                  And once the line is on, the hardest work begins: a person in soaked winter gear,
                  waterlogged and heavy, has to be pulled up over the ice edge. Pulling a large male
                  out can demand more strength than a companion has. So the question the vest had to
                  answer was not just where the line clips, but how to cut the force the rescue
                  demands.
                </p>
              </div>
            </section>

            {/* 03 What we did: full width list */}
            <section className="relative">
              <GhostNumeral value="03" side="left" />
              <div className="relative">
                <h2 className="font-display text-4xl leading-tight text-foreground">What we did</h2>
                <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-foreground/80">
                  Make the wrong action physically impossible, not the right action clearer.
                  Everything in the design serves one goal: reduce the force it takes to pull
                  somebody out of the water. It does this in three ways.
                </p>
                <ul className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-3">
                  <li className="border-t border-hairline pt-6">
                    <p className="leading-relaxed text-foreground/70">
                      <span className="font-medium text-foreground">Fewer options.</span> The vest
                      covers the backpack&rsquo;s straps and loops, leaving two reachable attachment
                      points, both correct and both on the shoulders. Because every vest is
                      identical, those points can be specified and quality controlled, which an
                      improvised point on a personal pack never can. And because the line clips at
                      the shoulders, the pull runs through a load path built to lift a person
                      instead of through webbing that stretches and gives, so less of the
                      rescuer&rsquo;s strength is wasted.
                    </p>
                  </li>
                  <li className="border-t border-hairline pt-6">
                    <p className="leading-relaxed text-foreground/70">
                      <span className="font-medium text-foreground">Buoyancy.</span> The vest and
                      the backpack together add flotation, which makes the person in the water
                      lighter to lift and cuts the force needed to pull somebody as heavy as a
                      large male out. The same buoyancy element rights a face-down person before
                      the pulling begins.
                    </p>
                  </li>
                  <li className="border-t border-hairline pt-6">
                    <p className="leading-relaxed text-foreground/70">
                      <span className="font-medium text-foreground">Built to glide.</span> A hard,
                      slippery surface on the stomach and chest reduces friction against the ice
                      edge, so the person slides out over the edge while their companion pulls
                      instead of being dragged, like a seal on its belly. Hence the name:
                      S&auml;lmagen, &ldquo;seal belly&rdquo;.
                    </p>
                  </li>
                </ul>
                <p className="mt-12 max-w-2xl leading-relaxed text-foreground/70">
                  <span className="font-medium text-foreground">Interface split by stress level.</span>{" "}
                  The emergency side can&rsquo;t be got wrong. The mounting side carries a printed
                  label, because mounting happens calmly at home and can afford to be learned.
                </p>
                <figure className="mt-14">
                  <img
                    src={nixProcessSketch.url}
                    alt="Working page from the design process, with sketches and handwritten notes"
                    className="natural w-full"
                    loading="lazy"
                  />
                  <figcaption className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    A working page from the process: sketches and handwritten notes.
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* 04 What changed: text left, quiet right */}
            <section className="relative grid items-start gap-12 md:grid-cols-12">
              <GhostNumeral value="04" side="left" />
              <div className="relative md:col-span-5 md:pt-10">
                <h2 className="font-display text-4xl leading-tight text-foreground">What changed</h2>
                <p className="mt-8 text-lg font-light leading-relaxed text-foreground/80">
                  Prototype built, physics modelled, never tested on real ice.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-foreground/55">
                  Sälmagen reached concept and prototype stage and was presented as part of NIX.
                  With help from our professors, we built a physics model of the rescue, estimating
                  some of the forces involved. It was never tested live in a real ice scenario.
                </p>
              </div>
              <div className="hidden md:col-span-7 md:block" aria-hidden />
            </section>
          </div>
        </Section>

        {/* 05 Reading it now: blue focus section */}
        <section className="bg-case-highlight py-24 text-case-highlight-foreground md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
            <p className="text-[10px] uppercase tracking-[0.4em] text-case-highlight-foreground/50">
              05 / Reading it now
            </p>
            <h2 className="mt-10 font-display text-4xl italic leading-tight md:text-5xl">
              A safety product only works if it&rsquo;s worn on the day it&rsquo;s needed.
            </h2>
            <p className="mx-auto mt-10 max-w-xl text-[0.95rem] leading-relaxed text-case-highlight-foreground/80">
              The vest rested on three untested assumptions: that the low-friction front reduces
              pulling force (we only estimated it in a model), that skaters would wear it on an
              ordinary tour (we never tested comfort), and that they carry a backpack the design
              depends on (out of our control). The riskiest was whether skaters would wear it.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-relaxed text-case-highlight-foreground/80">
              Today I would test it first, before any engineering: give club members a simple
              mock-up to wear over their own backpacks on a few ordinary tours, and ask afterwards
              whether they&rsquo;d wear it every time. If most took it off, left it at home, or
              needed a different backpack to use it, I would stop and rethink the concept before
              building anything more.
            </p>
            <div className="mt-14 flex items-center justify-center gap-6" aria-hidden>
              <span className="h-1.5 w-1.5 rounded-full bg-case-highlight-foreground" />
              <span className="h-1.5 w-1.5 rounded-full bg-case-highlight-foreground/25" />
              <span className="h-1.5 w-1.5 rounded-full bg-case-highlight-foreground/25" />
            </div>
          </div>
        </section>

        {/* Closing */}
        <Section id="contact">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-3xl italic leading-snug text-foreground/85 md:text-4xl">
              If this sounds familiar, let&rsquo;s find out.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
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
