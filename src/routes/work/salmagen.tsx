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

function CaseSection({
  id,
  index,
  title,
  lead,
  children,
}: {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="grid scroll-mt-28 gap-8 border-t border-hairline pt-10 md:grid-cols-12 md:gap-16 md:pt-14">
      <div className="md:sticky md:top-28 md:col-span-4 md:self-start">
        <p className="font-display text-4xl leading-none text-case-highlight">{index}</p>
        <h2 className="mt-5 font-display text-2xl text-foreground md:text-3xl">{title}</h2>
        {lead ? (
          <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-foreground/60">{lead}</p>
        ) : null}
      </div>
      <div className="max-w-[42rem] space-y-6 text-[1.0625rem] leading-[1.7] text-foreground/80 md:col-span-8">
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
          <div className="mx-auto w-full max-w-[72rem] px-6 pb-14 pt-24 md:px-10 md:pb-20 md:pt-32">
            <p className="label-mono fade-up">
              <Link to="/work" className="transition-colors hover:text-foreground">
                Work
              </Link>
              {" / "}Case
            </p>
            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end">
              <h1 className="display-md fade-up delay-1 max-w-3xl text-balance lg:col-span-8">
                When the user can&rsquo;t think straight, remove the wrong choice
              </h1>
              <dl className="fade-up delay-2 grid gap-5 border-l border-hairline pl-6 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
                {meta.map((m) => (
                  <div key={m.label}>
                    <dt className="label-mono text-case-highlight">{m.label}</dt>
                    <dd className="mt-1 text-[0.9rem] leading-snug text-foreground/90">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="fade-up delay-3 mt-14 max-w-3xl font-display text-2xl leading-snug text-foreground/85 md:text-3xl">
              A rescue vest designed to remove the wrong attachment choice and create a load path
              strong enough to pull a soaked skater over the ice edge. It reached prototype stage,
              but was never tested in a real ice rescue.
            </p>
            <dl className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Problem", "Attach under stress, then pull a heavy person from the water"],
                ["Contribution", "Developed the Sälmagen rescue vest within the NIX team"],
                ["Outcome", "Prototype and physics model"],
                ["Limitation", "No test in a real ice rescue"],
              ].map(([label, value]) => (
                <div key={label} className="bg-background px-5 py-5">
                  <dt className="label-mono">{label}</dt>
                  <dd className="mt-2 text-sm text-foreground/90">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Hero visual: natural photo of an ice rescue training session */}
        <section>
          <div className="mx-auto w-full max-w-[72rem] px-6 md:px-10">
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

        <nav aria-label="Case chapters" className="mx-auto w-full max-w-[72rem] px-6 pt-16 md:px-10 md:pt-20">
          <ol className="grid border-y border-hairline sm:grid-cols-5">
            {chapters.map(([number, label, id]) => (
              <li
                key={id}
                className="border-b border-hairline last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <a
                  href={`#${id}`}
                  className="group flex min-h-20 items-center gap-3 px-4 py-4 transition-colors hover:bg-case-highlight/[0.05] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-case-highlight"
                >
                  <span className="font-mono text-[0.6875rem] text-case-highlight">{number}</span>
                  <span className="text-sm text-foreground/70 transition-colors group-hover:text-foreground">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Body */}
        <Section>
          <div className="mx-auto max-w-[72rem] space-y-20 md:space-y-24">
            <CaseSection
              id="situation"
              index="01"
              title="The situation"
              lead="A rescue system barely changed since the 1960s, rethought as a bachelor thesis."
            >
              <p>
                Long-distance skaters carry a throw line in case a companion goes through the ice.
                The system had barely changed since the 1960s.
              </p>
              <p>
                For our bachelor thesis, six product developers set out to improve it, working with
                Linköping&rsquo;s long-distance skating club. The result was NIX, a safety system of
                three linked concepts: an extension band, a lanyard bag and Sälmagen, a rescue vest.
                I worked on Sälmagen.
              </p>
            </CaseSection>

            <CaseSection
              id="problem"
              index="02"
              title="The real problem"
              lead="The person in the water is one problem. The person pulling them out is the other."
            >
              <p>
                We studied how rescues actually play out: interviews with skaters, literature from
                professional institutions, observation sessions on the ice. The findings that shaped
                the vest were about people, not equipment.
              </p>
              <p>
                The person who has to attach the line is the one in the water: cold, frightened, and
                with their ability to make decisions failing. Clearer instructions don&rsquo;t help
                someone in that state.
              </p>
              <p>
                And once the line is on, it has to hold: a person in soaked winter gear is very
                heavy to pull up against the ice edge. A line clipped to a random loop on a
                backpack pulls through webbing never meant to lift a human being. Sälmagen&rsquo;s
                shoulder attachment points answer both halves: the only place to clip, and a load
                path built to take the pull.
              </p>
            </CaseSection>

            <CaseSection
              id="work"
              index="03"
              title="What we did"
              lead="Make the wrong action physically impossible, not the right action clearer."
            >
              <ul className="space-y-8">
                <li className="grid gap-6 sm:grid-cols-2 sm:items-start">
                  <div>
                    <p>
                      <span className="text-foreground">Fewer options.</span> The vest covers the
                      backpack&rsquo;s straps and loops, leaving two reachable attachment points,
                      both correct and both on the shoulders. Because every vest is identical, those
                      points can be specified and quality controlled, which an improvised point on a
                      personal pack never can.
                    </p>
                  </div>
                  <figure>
                    <img
                      src={salmagenHero.url}
                      alt="Working sketch of the Sälmagen rescue vest worn over a backpack, seen from the front"
                      className="w-full"
                      loading="lazy"
                    />
                  </figure>
                </li>
                <li className="border-t border-hairline pt-6">
                  <span className="text-foreground">Requirements from failure modes.</span> The load
                  runs through the vest rather than through webbing never rated to lift a person,
                  and a buoyancy element rights a face-down person before the pulling begins.
                </li>
                <li className="border-t border-hairline pt-6">
                  <span className="text-foreground">Built to glide.</span> A low-friction front lets
                  the person slide out over the ice edge while their companion pulls, like a seal on
                  its belly. Hence the name: Sälmagen, &ldquo;seal belly&rdquo;.
                </li>
                <li className="border-t border-hairline pt-6">
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

            <CaseSection
              id="changed"
              index="04"
              title="What changed"
              lead="Prototype built, physics modelled, never tested on real ice."
            >
              <p>
                Sälmagen reached concept and prototype stage and was presented as part of NIX. With
                help from our professors, we built a physics model of the rescue, estimating some of
                the forces involved. It was never tested live in a real ice scenario.
              </p>
            </CaseSection>

            <section
              id="reading"
              className="scroll-mt-28 bg-case-highlight px-7 py-12 text-case-highlight-foreground md:px-14 md:py-16 lg:px-20 lg:py-20"
            >
              <p className="label-mono text-case-highlight-foreground/60">05 / Reading it now</p>
              <blockquote className="mt-8 max-w-4xl font-display text-3xl leading-tight md:text-5xl">
                  A safety product only works if it&rsquo;s worn on the day it&rsquo;s needed.
              </blockquote>

              <div className="mt-12 grid gap-px bg-case-highlight-foreground/20 md:grid-cols-3">
                {[
                  [
                    "Assumption",
                    "Skaters would wear the vest over their own backpack on every ordinary tour.",
                  ],
                  [
                    "Test today",
                    "Give club members a simple mock-up to wear on several ordinary tours.",
                  ],
                  [
                    "Kill-line",
                    "Stop if most remove it, leave it at home, or need a different backpack.",
                  ],
                ].map(([label, text]) => (
                  <div key={label} className="bg-case-highlight px-5 py-6 md:px-6 md:py-8">
                    <p className="label-mono text-case-highlight-foreground/60">{label}</p>
                    <p className="mt-4 text-[1rem] leading-relaxed text-case-highlight-foreground/90">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-8 text-[1rem] leading-relaxed text-case-highlight-foreground/75 md:grid-cols-2">
                <p>
                  Two other assumptions also remained open: whether the low-friction front reduced
                  pulling force, and whether the design could depend on a backpack the team did not
                  control.
                </p>
                <p>
                  The wear test comes first. If the vest is not there when the ice breaks, the rest
                  of the engineering does not matter.
                </p>
              </div>
            </section>
          </div>
        </Section>

        {/* Closing */}
        <Section id="contact">
          <div className="max-w-3xl">
            <h2 className="display-md text-balance">
              If this sounds familiar, let&rsquo;s find out.
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
