import { Section } from "@/components/site/sections";
import { CaseFigure, CaseFooter, CaseHeader, CaseIntro, CaseSection, ChapterNav, NextCase } from "@/components/site/case-layout";
import { EngagementLadder, EveningRunSheet, OwnershipSplit } from "@/components/site/tedxfika-graphics";
import tedxTeam from "@/assets/tedxfika-team.jpg.asset.json";


const ACCENT = "text-case-highlight";
const chapters = [
  ["01", "The situation", "situation"],
  ["02", "The real problem", "problem"],
  ["03", "What we did", "contribution"],
  ["04", "What changed", "changed"],
  ["05", "Reading it now", "reading"],
] as const;

export function TedxFikaCase() {
  return (
    <div className="min-h-screen">
      <CaseHeader />
      <main>
        <CaseIntro
          title="The missing rung: keeping a 700-person audience between events"
          accentClass={ACCENT}
          keyFigure={{ value: "1 → 12", label: "evenings a year instead of one, proposed format" }}
          meta={[
            { label: "Context", value: "A one-week Hyper Island sprint to develop a community concept for TEDxStockholm" },
            { label: "Timeframe", value: "September 2026, 1 week" },
          ]}
          overview={[
            ["Problem", "An engaged audience one night a year, gone the next day"],
            ["Approach", "Lean canvas, engagement ladder, facilitation format"],
            ["Outcome", "TEDxFika, a monthly community format pitched to TEDxStockholm"],
            ["Limitation", "Never run with real guests"],
          ]}
        />

        <section className="mx-auto w-full max-w-[72rem] px-6 pb-14 md:px-10 md:pb-20">
          <CaseFigure caption="The sprint team at Hyper Island, September 2026.">
            <div className="w-full overflow-hidden rounded-sm">
              <img
                src={tedxTeam.url}
                alt="The Hyper Island sprint team posing with large red TEDx letters in front of a Hyper Island wall"
                width={657}
                height={588}
                className="natural aspect-[16/9] w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </CaseFigure>
        </section>

        <ChapterNav chapters={chapters} accentClass={ACCENT} />
        <Section>
          <div className="mx-auto max-w-[72rem] space-y-20 md:space-y-24">
            <CaseSection id="situation" index="01" title="The situation" lead="700 people one night a year, then nothing." accentClass={ACCENT}>
              <p>In a one-week sprint, we were asked to develop a concept for TEDxStockholm. The organisation fills a room with around 700 people at its flagship event, but has no next step between buying a ticket and joining the core team. Every year, the audience has to be rebuilt from scratch.</p>
            </CaseSection>
            <CaseSection id="problem" index="02" title="The real problem" lead="Not a lack of interest. A lack of a next step." accentClass={ACCENT}>
              <p>People left the event inspired, but nothing turned that into continued involvement. TEDxStockholm had run salons before and let them lapse, so any new format had to be cheap enough to survive on volunteers alone. Research on networking pointed the same way: wanting to connect doesn’t lead to new connections unless the format is designed for it.</p>
            </CaseSection>
            <section id="contribution" className="scroll-mt-36 space-y-12 md:space-y-16">
              <CaseSection id="contribution-body" index="03" title="What we did" lead="One talk, one question, one room, once a month." accentClass={ACCENT} figure={<CaseFigure caption="The proposed engagement ladder."><EngagementLadder /></CaseFigure>}>
                <p>TEDxFika is a 90-minute monthly gathering: one screened TED Talk, tables of six, one question per table, coffee and a bulle. A 50 SEK fee covers the coffee, and there’s a cap of 35 people.</p>
                <ul className="space-y-6">
                  <li><strong className="font-medium text-foreground">Built to run on two volunteers.</strong> Tables are hosted by people who came the month before, so every evening recruits the next one.</li>
                  <li><strong className="font-medium text-foreground">The conversation continues.</strong> Each table’s takeaway goes up on the TEDx Forum the next morning, which also shows the core team what the community cares about.</li>
                  <li><strong className="font-medium text-foreground">A ladder, not an event.</strong> Attend, participate, contribute, own. TEDxStockholm keeps the format and the brand, and the community owns the narrative.</li>
                </ul>
              </CaseSection>
              <CaseFigure caption="Proposed evening sequence within the 18:00 to 20:00 window."><EveningRunSheet /></CaseFigure>
              <CaseFigure caption="The proposed ownership split."><OwnershipSplit /></CaseFigure>
            </section>
            <CaseSection id="changed" index="04" title="What changed" lead="A format TEDxStockholm could run next month." accentClass={ACCENT}>
              <p>We pitched TEDxFika to TEDxStockholm with a lean canvas, a full facilitation template and a single success metric: the share of returning faces.</p>
            </CaseSection>
            <section id="reading" className="scroll-mt-36 bg-case-highlight px-7 py-12 text-case-highlight-foreground md:px-14 md:py-16 lg:px-20 lg:py-20">
              <p className="label-mono text-case-highlight-foreground/60">05 / Reading it now</p>
              <blockquote className="mt-8 max-w-4xl font-display text-3xl leading-tight md:text-5xl">The format only works if guests come back as hosts.</blockquote>
              <div className="mt-12 grid gap-px bg-case-highlight-foreground/20 md:grid-cols-3">
                {[
                  ["Assumption", "Guests will come back and host a table the next month"],
                  ["Test today", "Run one evening and ask at the end who will host next time"],
                  ["Kill-line", "Stop if no one signs up to host"],
                ].map(([label, text]) => (
                  <div key={label} className="bg-case-highlight px-5 py-6 md:px-6 md:py-8">
                    <p className="label-mono text-case-highlight-foreground/60">{label}</p>
                    <p className="mt-4 text-base leading-relaxed text-case-highlight-foreground/90">{text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Section>
        <NextCase to="/work/spotify-feature-prioritisation" context="Hyper Island course project, September 2026" title="Testing value before building: which Spotify features first?" surfaceClass="bg-case-highlight text-case-highlight-foreground" />
      </main>
      <CaseFooter />
    </div>
  );
}
