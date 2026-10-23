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
import heroDq from "@/assets/hero-dq.png.asset.json";
import heroDqWebp from "@/assets/hero-dq.webp.asset.json";
import reviewMeeting from "@/assets/dq-review-meeting.png.asset.json";
import reviewMeetingWebp from "@/assets/dq-review-meeting.webp.asset.json";
import dqProcess from "@/assets/dq-process.png.asset.json";
import dqProcessWebp from "@/assets/dq-process.webp.asset.json";


export const Route = createFileRoute("/work/data-quality-migration")({
  head: () => ({
    meta: [
      { title: "Turning data quality concerns into measurable action | Slipstream Labs" },
      {
        name: "description",
        content:
          "Making more than 10,000 HR data quality issues visible ahead of a SAP SuccessFactors migration, and resolving over 8,000 critical ones before go-live.",
      },
      {
        property: "og:title",
        content: "Turning data quality concerns into measurable action | Slipstream Labs",
      },
      {
        property: "og:description",
        content:
          "Making more than 10,000 HR data quality issues visible ahead of a SAP SuccessFactors migration, and resolving over 8,000 critical ones before go-live.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://slipstreamlabs.se/work/data-quality-migration" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Turning data quality concerns into measurable action | Slipstream Labs",
      },
    ],
    links: [{ rel: "canonical", href: "https://slipstreamlabs.se/work/data-quality-migration" }],
  }),

  component: DataQualityCase,
});

const ACCENT = "text-brand-gold-text";

const meta = [
  { label: "Role", value: "Product Owner (consultant)" },
  { label: "Context", value: "HR data migration to SAP SuccessFactors at a Nordic transport and logistics company" },
  { label: "Timeframe", value: "2022–2024" },
];

const chapters = [
  ["01", "The situation", "situation"],
  ["02", "Making it visible", "visible"],
  ["03", "From measurement to action", "action"],
  ["04", "The outcome", "outcome"],
  ["05", "Done differently today", "reading"],
] as const;

function DataQualityCase() {
  return (
    <div className="min-h-screen">
      <CaseHeader />

      <main>
        <CaseIntro
          title="Turning data quality concerns into measurable action"
          meta={meta}
          accentClass={ACCENT}
          keyFigure={{ value: "8,000+", label: "critical issues resolved before go-live" }}
          overview={[
            ["Problem", "Suspected data quality issues, scale unknown"],
            ["Contribution", "Owned a Power BI data quality solution"],
            ["Outcome", "8,000+ critical issues resolved before go-live"],
            ["Limitation", "Root causes not tracked over time"],
          ]}
        />

        <section className="mx-auto w-full max-w-[72rem] px-6 pb-14 md:px-10 md:pb-20">
          <CaseFigure tag="AI generated illustration" caption="Reviewing the open list with the people who owned it.">
            <picture>
              <source srcSet={reviewMeetingWebp.url} type="image/webp" />
              <img
                src={reviewMeeting.url}
                alt="AI-generated illustration of a review meeting: four people around a conference table looking at a wall-mounted screen showing an HR data quality dashboard, with a handwritten go-live checklist on a glass whiteboard to the left"
                width={1672}
                height={941}
                className="natural w-full"
                loading="eager"
                decoding="async"
              />
            </picture>
          </CaseFigure>
        </section>

        <ChapterNav chapters={chapters} accentClass={ACCENT} />

        <Section>
          <div className="mx-auto max-w-[72rem] space-y-20 md:space-y-24">
            <CaseSection id="situation" index="01" title="The situation" accentClass={ACCENT} lead="A system migration, and a concern nobody could size.">
              <p>
                The company was migrating its HR data from a legacy system to SAP SuccessFactors.
                Leadership was concerned about the quality of the existing data, but there was no
                clear picture of how many issues existed, where they were, or what needed to be
                fixed before go-live.
              </p>
            </CaseSection>

            <CaseSection
              id="visible"
              index="02"
              title="Making the problem visible"
              accentClass={ACCENT}
              lead="Measure what had previously been a gut feeling."
              figure={
                <CaseFigure caption="Thousands of issues, filtered down to a list that could be worked through. Illustration, not a screenshot.">
                  <picture>
                    <source srcSet={heroDqWebp.url} type="image/webp" />
                    <img
                      src={heroDq.url}
                      alt="Illustration: a dense tangled cloud of many coloured points joined by chaotic curved lines on the left passes through four upright translucent panes, one colour each, and emerges on the right as four neat, evenly spaced horizontal rows of dots"
                      width={1376}
                      height={768}
                      className="natural w-full"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </CaseFigure>
              }
            >
              <p>
                As Product Owner, I owned a Power BI solution that monitored HR data quality and
                gave stakeholders a shared view of the issues and their scale.
              </p>
              <p>
                The analysis surfaced more than 10,000 data quality issues. With the problem now
                visible, we could move from general concern to prioritising what needed attention
                first.
              </p>
            </CaseSection>

            <CaseSection
              id="action"
              index="03"
              title="From measurement to action"
              accentClass={ACCENT}
              lead="Prioritise the critical issues, then stop them coming back."
              figure={
                <CaseFigure caption="The process: detect, report, fix, then feed the fix back into the systems. Illustration, not a screenshot.">
                  <picture>
                    <source srcSet={dqProcessWebp.url} type="image/webp" />
                    <img
                      src={dqProcess.url}
                      alt="Illustration of the data quality process in three steps: a DQ engine reading HR systems, an errors report, and a remediation team of three people, with two return paths back into the systems labelled Correct and Implement"
                      width={1536}
                      height={1024}
                      className="natural w-full"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </CaseFigure>
              }
            >
              <p>
                I worked with HR business partners and other stakeholders to identify and
                prioritise critical issues, then drove the remediation work with the client&rsquo;s
                HR shared services team.
              </p>
              <p>
                Beyond the immediate fixes, we established a process to help prevent the same issues
                from returning. The goal was not just to clean up the data for migration, but to
                maintain its quality going forward.
              </p>
            </CaseSection>

            <CaseSection id="outcome" index="04" title="The outcome" accentClass={ACCENT} lead="Over 8,000 critical issues resolved before go-live.">
              <p>
                More than 8,000 critical issues were resolved ahead of go-live. Payroll ran without
                problems after the migration, and a process was in place to manage data quality
                beyond the project.
              </p>
            </CaseSection>

            <section
              id="reading"
              className="scroll-mt-36 bg-brand-gold px-7 py-12 text-brand-ink md:px-14 md:py-16 lg:px-20 lg:py-20"
            >
              <p className="label-mono text-brand-ink">05 / What I&rsquo;d do differently today</p>
              <blockquote className="mt-8 max-w-4xl font-display text-3xl leading-tight md:text-5xl">
                Fixing an error is one thing. Making sure it doesn&rsquo;t happen again is another.
              </blockquote>
              <div className="mt-10 max-w-2xl text-[1rem] leading-relaxed text-brand-ink/90">
                <p>
                  I&rsquo;d pay closer attention to whether the underlying causes were actually
                  addressed. Today, I&rsquo;d track recurring error types over time and use that
                  evidence to identify which processes needed to change.
                </p>
              </div>
            </section>
          </div>
        </Section>

        <NextCase
          to="/work/salmagen"
          context="Rescue vest, bachelor thesis, 2018"
          title="When the user can't think straight, remove the wrong choice"
          surfaceClass="bg-case-highlight text-case-highlight-foreground"
        />
      </main>

      <CaseFooter />
    </div>
  );
}
