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
import { FeatureFunnel, ScoringTable, StatRow } from "@/components/site/spotify-graphics";

const URL = "https://slipstreamlabs.se/work/spotify-feature-prioritisation";
const title = "Testing value before building: which Spotify features first? | Slipstream Labs";
const description =
  "A Hyper Island course project ranking seven proposed Spotify features on evidence of user value, combining user research, Spotify's stated strategy and a market analysis.";

export const Route = createFileRoute("/work/spotify-feature-prioritisation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: SpotifyCase,
});

const ACCENT = "text-case-highlight";

const chapters = [
  ["01", "The situation", "situation"],
  ["02", "Building the evidence", "evidence"],
  ["03", "Making the call", "call"],
  ["04", "What changed", "changed"],
  ["05", "Reading it now", "reading"],
] as const;

function SpotifyCase() {
  return (
    <div className="min-h-screen">
      <CaseHeader />
      <main>
        <CaseIntro
          title="Testing value before building: which Spotify features first?"
          accentClass={ACCENT}
          keyFigure={{ value: "7 → 3", label: "features prioritised, ranked on evidence of user value" }}
          meta={[
            { label: "Team", value: "Four people, 4 weeks" },
            {
              label: "Context",
              value:
                "Hyper Island course project (Value-Driven Design). Fictive brief based on Spotify, not affiliated with or endorsed by Spotify",
            },
            { label: "Timeframe", value: "September 2026" },
          ]}
          overview={[
            ["Problem", "Seven proposed superfan and AI features, no basis for choosing between them"],
            ["Approach", "User research, Spotify's stated strategy and a market analysis"],
            ["Outcome", "Two features to bundle into Premium, one paid add-on to test"],
            ["Limitation", "Small convenience samples, retention not measured"],
          ]}
        />

        <ChapterNav chapters={chapters} accentClass={ACCENT} />

        <Section>
          <div className="mx-auto max-w-[72rem] space-y-20 md:space-y-24">
            <CaseSection
              accentClass={ACCENT}
              id="situation"
              index="01"
              title="The situation"
              lead="A flat price, and pressure to earn more per user."
              figure={
                <CaseFigure caption="Source: Spotify Q2 2026 shareholder report.">
                  <StatRow
                    stats={[
                      ["91%", "of revenue comes from Premium"],
                      ["€4.89", "average revenue per subscriber per month"],
                      ["+€0.49", "of that came from price increases, not new value"],
                    ]}
                  />
                </CaseFigure>
              }
            >
              <p>
                Premium makes up 91% of Spotify&rsquo;s revenue, but at a flat price per user, the only
                lever is raising prices, and every increase hits all users equally. The brief was to
                choose which of seven proposed features, across music, podcasts and audiobooks, Spotify
                should build first. The real question underneath: what adds enough value to justify a
                higher price, and what can niche users be charged extra for?
              </p>
            </CaseSection>

            <CaseSection
              accentClass={ACCENT}
              id="evidence"
              index="02"
              title="Building the evidence"
              lead="What users do, what Spotify says, and what the market shows."
            >
              <p>
                <span className="text-foreground">Users.</span> We ran a survey with 29 respondents and
                interviewed 12 people aged 17 to 67. We asked about past behaviour, not opinions, and
                anchored the interviews in &ldquo;the last time you&hellip;&rdquo;. About 7 in 10
                frustrations were about finding music, and most people discovered new music on
                Instagram, TikTok or through friends, then played it on Spotify.
              </p>
              <div className="not-prose -mx-0 py-2">
                <CaseFigure caption="Group 8 survey, convenience sample of 27 to 29 respondents per question.">
                  <StatRow
                    stats={[
                      ["~70%", "of frustrations are about finding music (19 of 27)"],
                      ["61%", "value concerts most (17 of 28)"],
                      ["8 of 15", "skipped a song when they noticed an AI label"],
                    ]}
                  />
                </CaseFigure>
              </div>
              <p>
                <span className="text-foreground">Spotify&rsquo;s own words.</span> From the co-CEO&rsquo;s
                public statements, we derived four rules: put popular features in Premium and sell
                niche ones as add-ons, fill gaps where people listen a lot but the product falls short,
                optimise for people who keep paying rather than screen time, and prefer features that
                generate data.
              </p>
              <p>
                <span className="text-foreground">The market.</span> We mapped what competitors offer,
                and followed the supply of AI music against actual demand for it. AI discovery turned
                out to be table stakes already, while ticket access for top fans was an area where
                Spotify led.
              </p>
            </CaseSection>

            <section id="call" className="scroll-mt-36 space-y-12 md:space-y-16">
              <CaseSection
                accentClass={ACCENT}
                id="call-body"
                index="03"
                title="Making the call"
                lead="Score against the strategy, rank only where users back it up."
                figure={<FeatureFunnel />}
              >
                <p>
                  We scored each feature against the four rules. We also left out the
                  willingness-to-pay questions entirely, because stated willingness to pay is a weak
                  signal.
                </p>
                <ol className="space-y-6">
                  <li>
                    <span className="text-foreground">1. Just ask Spotify.</span> Ask in your own words
                    and AI finds the right music, podcasts or audiobooks. It solves the biggest pain
                    point, so bundle it into Premium.
                  </li>
                  <li className="border-t border-hairline pt-6">
                    <span className="text-foreground">2. Superfan ticketing.</span> Early access to
                    concert tickets for the most engaged fans. Concerts were what people valued most,
                    and sold-out shows were a real source of stress. Bundle it into Premium as well.
                  </li>
                  <li className="border-t border-hairline pt-6">
                    <span className="text-foreground">3. AI covers and remixes.</span> Plenty of supply,
                    little demand. Nobody in our research asked for it, and many skip AI music once
                    they know what it is. People pay to make AI music, not to listen to it, so test it
                    as a paid add-on before building.
                  </li>
                </ol>
              </CaseSection>
              <CaseFigure caption="Scored against four rules derived from Spotify co-CEO Gustav Söderström's public statements, September 2026.">
                <ScoringTable />
              </CaseFigure>
            </section>

            <CaseSection
              accentClass={ACCENT}
              id="changed"
              index="04"
              title="What changed"
              lead="Two features to strengthen Premium, one to test."
            >
              <p>
                Our recommendation tied back to the pricing challenge. Just ask Spotify and Superfan
                ticketing raise the value of Premium, which gives Spotify more room to justify future
                price increases. AI covers and remixes tests whether niche users will pay extra for an
                add-on before Spotify commits to building it at scale.
              </p>
              <p>
                We delivered it as a five-minute pitch, with the supporting evidence for each bet in a
                backup appendix for Q&amp;A.
              </p>
            </CaseSection>

            <section
              id="reading"
              className="scroll-mt-36 bg-case-highlight px-7 py-12 text-case-highlight-foreground md:px-14 md:py-16 lg:px-20 lg:py-20"
            >
              <p className="label-mono text-case-highlight-foreground/60">05 / Reading it now</p>
              <blockquote className="mt-8 max-w-4xl font-display text-3xl leading-tight md:text-5xl">
                Knowing what users struggle with is not the same as knowing what they&rsquo;ll pay for.
              </blockquote>
              <div className="mt-12 grid gap-px bg-case-highlight-foreground/20 md:grid-cols-3">
                {[
                  [
                    "Assumption",
                    "Super listeners value early ticket access enough to keep paying for Premium, or to pay extra for it.",
                  ],
                  [
                    "Test today",
                    "Spend time with super listeners around a real presale to see how they behave, then offer early access as a paid option to a small group.",
                  ],
                  [
                    "Kill-line",
                    "Stop charging for it if few choose it. Keep it in Premium only if it measurably keeps them subscribed.",
                  ],
                ].map(([label, text]) => (
                  <div key={label} className="bg-case-highlight px-5 py-6 md:px-6 md:py-8">
                    <p className="label-mono text-case-highlight-foreground/60">{label}</p>
                    <p className="mt-4 text-[1rem] leading-relaxed text-case-highlight-foreground/90">{text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-10 max-w-2xl text-[1rem] leading-relaxed text-case-highlight-foreground/75">
                We understood the pain well. What we didn&rsquo;t know was how users behave when money
                is involved. With more time, that is where I&rsquo;d start.
              </p>
            </section>
          </div>
        </Section>

        <NextCase
          to="/work/salmagen"
          context="University thesis, 2018"
          title="When the user can't think straight, remove the wrong choice"
          surfaceClass="bg-case-highlight text-case-highlight-foreground"
        />
      </main>
      <CaseFooter />
    </div>
  );
}
