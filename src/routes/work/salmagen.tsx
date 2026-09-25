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

const chapters = [
  ["01", "The situation", "situation"],
  ["02", "The real problem", "problem"],
  ["03", "What we did", "work"],
  ["04", "What changed", "changed"],
  ["05", "Reading it now", "reading"],
] as const;

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
            <p className="fade-up delay-3 mt-14 max-w-3xl font-display text-2xl leading-snug text-foreground/85 md:text-3xl">
              A rescue vest designed to remove the wrong attachment choice and reduce the force
              needed to pull a soaked skater over the ice edge.
            </p>
          </div>
        </section>

        {/* Case overview */}
        <section className="border-y border-case-highlight/10 bg-case-highlight/[0.05]">
          <div className="mx-auto grid w-full max-w-[72rem] gap-10 px-6 py-14 sm:grid-cols-2 md:px-10 md:py-16 lg:grid-cols-4 lg:gap-12">
            {[
              ["01.", "Problem", "A cold skater must attach a line, then be hauled over the ice edge."],
              ["02.", "Contribution", "I developed the Sälmagen rescue vest within the six-person NIX team."],
              ["03.", "Outcome", "A prototype and a physics model of the rescue forces."],
              ["04.", "Limitation", "The vest was never tested in a real ice rescue."],
            ].map(([numeral, label, text]) => (
              <div key={label} className="space-y-4">
                <span className="font-display text-2xl italic text-case-highlight">{numeral}</span>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">{label}</h3>
                <p className="text-sm leading-relaxed text-foreground/60">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <nav aria-label="Case chapters" className="mx-auto w-full max-w-[72rem] px-6 pt-14 md:px-10 md:pt-16">
          <ol className="grid border-y border-hairline sm:grid-cols-5">
            {chapters.map(([number, label, id]) => (
              <li key={id} className="border-b border-hairline last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <a
                  href={`#${id}`}
                  className="group flex min-h-20 items-center gap-3 px-4 py-4 transition-colors hover:bg-case-highlight/[0.05] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-case-highlight"
                >
                  <span className="font-mono text-[10px] text-case-highlight">{number}</span>
                  <span className="text-sm text-foreground/70 transition-colors group-hover:text-foreground">{label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

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
            <section id="situation" className="relative scroll-mt-28 grid items-start gap-12 md:grid-cols-12">
              <GhostNumeral value="01" side="left" />
              <div className="relative md:col-span-5 md:pt-10">
                <h2 className="font-display text-4xl leading-tight text-foreground">The situation</h2>
                <p className="mt-8 text-lg font-light leading-relaxed text-foreground/80">
                  The rescue system had barely changed since the 1960s.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-foreground/55">
                  Long-distance skaters carry a throw line in case a companion goes through the ice.
                  For our bachelor thesis, six product developers worked with Linköping&rsquo;s
                  long-distance skating club to improve that system. We developed three linked
                  concepts under the name NIX. I worked on Sälmagen, the rescue vest.
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
            <section id="problem" className="relative scroll-mt-28 grid items-start gap-12 md:grid-cols-12">
              <GhostNumeral value="02" side="right" />
              <div className="hidden md:col-span-5 md:block" aria-hidden />
              <div className="relative md:col-span-7 md:pt-10">
                <h2 className="font-display text-4xl leading-tight text-foreground">The real problem</h2>
                <p className="mt-8 text-lg font-light leading-relaxed text-foreground/80">
                  A rescue can fail at the attachment point and at the ice edge.
                </p>
                <p className="mt-6 leading-relaxed text-foreground/70">
                  Interviews, professional literature and observation sessions showed two connected
                  problems. The person attaching the line is cold, frightened and losing the ability
                  to make decisions. Clearer instructions do not help someone in that state.
                </p>
                <p className="mt-6 leading-relaxed text-foreground/70">
                  Once the line is attached, a soaked adult still has to be pulled over the ice edge.
                  That can demand more strength than a companion has. Sälmagen therefore had to make
                  attachment obvious and reduce the force required to complete the rescue.
                </p>
              </div>
            </section>

            {/* 03 What we did: full width list */}
            <section id="work" className="relative scroll-mt-28">
              <GhostNumeral value="03" side="left" />
              <div className="relative">
                <h2 className="font-display text-4xl leading-tight text-foreground">What we did</h2>
                <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-foreground/80">
                  Make the wrong action impossible, then make the pull itself easier.
                </p>
                <ul className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-3">
                  <li className="border-t border-hairline pt-6">
                    <p className="leading-relaxed text-foreground/70">
                      <span className="font-medium text-foreground">Fewer options.</span> The vest
                      covers the backpack&rsquo;s straps and loops, leaving two reachable attachment
                      points, both correct and both on the shoulders. The pull runs through a load
                      path built to lift a person, rather than improvised backpack webbing, so less
                      of the rescuer&rsquo;s strength is wasted.
                    </p>
                  </li>
                  <li className="border-t border-hairline pt-6">
                    <p className="leading-relaxed text-foreground/70">
                      <span className="font-medium text-foreground">Buoyancy.</span> The vest and
                      the backpack add flotation, making the person in the water lighter to lift.
                      The same buoyancy element rights a face-down person before pulling begins.
                    </p>
                  </li>
                  <li className="border-t border-hairline pt-6">
                    <p className="leading-relaxed text-foreground/70">
                      <span className="font-medium text-foreground">Built to glide.</span> A hard,
                      slippery surface on the stomach and chest reduces friction against the ice
                      edge, helping the person slide while their companion pulls. Hence the name
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
            <section id="changed" className="relative scroll-mt-28 grid items-start gap-12 md:grid-cols-12">
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
        <section id="reading" className="scroll-mt-20 bg-case-highlight py-24 text-case-highlight-foreground md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
            <p className="text-[10px] uppercase tracking-[0.4em] text-case-highlight-foreground/50">
              05 / Reading it now
            </p>
            <h2 className="mt-10 font-display text-4xl italic leading-tight md:text-5xl">
              A safety product only works if it&rsquo;s worn on the day it&rsquo;s needed.
            </h2>
            <dl className="mx-auto mt-12 grid max-w-2xl gap-8 text-left md:grid-cols-3 md:gap-10">
              <div className="border-t border-case-highlight-foreground/30 pt-5">
                <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-case-highlight-foreground/60">Assumption</dt>
                <dd className="mt-3 text-sm leading-relaxed">Skaters would wear the vest on every ordinary tour.</dd>
              </div>
              <div className="border-t border-case-highlight-foreground/30 pt-5">
                <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-case-highlight-foreground/60">Test today</dt>
                <dd className="mt-3 text-sm leading-relaxed">Give club members a simple mock-up to wear over their own backpacks for several tours.</dd>
              </div>
              <div className="border-t border-case-highlight-foreground/30 pt-5">
                <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-case-highlight-foreground/60">Kill-line</dt>
                <dd className="mt-3 text-sm leading-relaxed">If most remove it, leave it at home or need another backpack, stop and rethink the concept.</dd>
              </div>
            </dl>
            <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-case-highlight-foreground/75">
              The low-friction surface and buoyancy also remained unproven in a real ice rescue.
            </p>
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
