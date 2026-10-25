import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/sections";
import {
  CaseFigure,
  CaseFooter,
  CaseHeader,
  CaseIntro,
  CaseSection,
  ChapterNav,
  NextCase,
} from "@/components/site/case-layout";
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

const ACCENT = "text-case-highlight";

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

function SalmagenCase() {
  return (
    <div className="min-h-screen">
      <CaseHeader />

      <main>
        <CaseIntro
          title={<>When the user can&rsquo;t think straight, remove the wrong choice</>}
          meta={meta}
          accentClass={ACCENT}
          keyFigure={{ value: "2", label: "attachment points, both on the shoulders, both correct" }}
          overview={[
            ["Problem", "Attach under stress, then pull a heavy person from the water"],
            ["Contribution", "Developed the Sälmagen rescue vest within the NIX team"],
            ["Outcome", "Prototype and physics model"],
            ["Limitation", "No test in a real ice rescue"],
          ]}
        />

        <section className="mx-auto w-full max-w-[72rem] px-6 pb-14 md:px-10 md:pb-20">
          <CaseFigure caption="Ice rescue as it happens today: the person in the water is pulled out by a line. This is the moment Sälmagen was designed for.">
            <div className="w-full overflow-hidden rounded-sm">
              <img
                src={iceRescue.url}
                alt="Ice rescue training: a person in a rescue suit in the water is pulled out by a line held by two skaters on the ice"
                className="natural aspect-[16/8] w-full object-cover"
                loading="eager"
              />
            </div>
          </CaseFigure>
        </section>

        <ChapterNav chapters={chapters} accentClass={ACCENT} />

        {/* Body */}
        <Section>
          <div className="mx-auto max-w-[72rem] space-y-20 md:space-y-24">
            <CaseSection
              accentClass={ACCENT}
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
              accentClass={ACCENT}
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
              accentClass={ACCENT}
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
            </CaseSection>

            <CaseSection
              accentClass={ACCENT}
              id="changed"
              index="04"
              title="What changed"
              lead="Prototype built, physics modelled, never tested on real ice."
              figure={
                <CaseFigure caption="A working page from the design process.">
                  <img
                    src={nixProcessSketch.url}
                    alt="Working page from the design process, with sketches and handwritten notes"
                    className="natural mx-auto w-full max-w-[42rem]"
                    loading="lazy"
                  />
                </CaseFigure>
              }
            >
              <p>
                Sälmagen reached concept and prototype stage and was presented as part of NIX. With
                help from our professors, we built a physics model of the rescue, estimating some of
                the forces involved. It was never tested live in a real ice scenario.
              </p>
            </CaseSection>

            <section
              id="reading"
              className="scroll-mt-36 bg-case-highlight px-7 py-12 text-case-highlight-foreground md:px-14 md:py-16 lg:px-20 lg:py-20"
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

        <NextCase
          to="/work/data-quality-migration"
          context="HR data migration, 2022 to 2024"
          title="Turning data quality concerns into measurable action"
          surfaceClass="bg-brand-gold text-brand-ink"
        />
      </main>

      <CaseFooter />
    </div>
  );
}
