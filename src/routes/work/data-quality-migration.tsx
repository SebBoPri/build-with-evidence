import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/sections";
import { Wordmark } from "@/components/site/brand";
import { CtaButton } from "@/components/site/cta-button";
import heroDq from "@/assets/hero-dq.png.asset.json";
import heroDqWebp from "@/assets/hero-dq.webp.asset.json";
import reviewMeeting from "@/assets/dq-review-meeting.png.asset.json";
import reviewMeetingWebp from "@/assets/dq-review-meeting.webp.asset.json";


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

const homeNav = [
  { label: "Problem", hash: "problem" },
  { label: "Discovery Sprint", hash: "sprint" },
  { label: "Approach", hash: "approach" },
  { label: "About", hash: "about" },
];

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

function DataQualityCase() {
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
                Turning data quality concerns into measurable action
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
              Leadership suspected widespread data quality issues ahead of an HR system migration
              but lacked visibility into their scale. I owned a Power BI solution that surfaced more
              than 10,000 issues, then led the resolution of over 8,000 critical ones and helped
              establish a process to prevent them from recurring.
            </p>
            <dl className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Problem", "Suspected data quality issues, scale unknown"],
                ["Contribution", "Owned a Power BI data quality solution"],
                ["Outcome", "8,000+ critical issues resolved before go-live"],
                ["Limitation", "Root causes not tracked over time"],
              ].map(([label, value]) => (
                <div key={label} className="bg-background px-5 py-5">
                  <dt className="label-mono">{label}</dt>
                  <dd className="mt-2 text-sm text-foreground/90">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Hero visual: illustration of the filtering idea */}
        <section>
          <div className="mx-auto w-full max-w-[72rem] px-6 md:px-10">
            <figure>
              <picture>
                <source srcSet={heroDqWebp.url} type="image/webp" />
                <img
                  src={heroDq.url}
                  alt="Illustration: a dense tangled cloud of many coloured points joined by chaotic curved lines on the left passes through four upright translucent panes, one colour each, and emerges on the right as four neat, evenly spaced horizontal rows of dots"
                  width={1376}
                  height={768}
                  className="natural w-full"
                  loading="eager"
                  decoding="async"
                />
              </picture>
              <figcaption className="mt-4 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                The shape of the work: thousands of separate issues, filtered down to a short list
                that could actually be worked through. Illustration, not a screenshot of the report.
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
            <CaseSection id="situation" index="01" title="The situation" lead="A system migration, and a concern nobody could size.">
              <p>
                The company was migrating its HR data from a legacy system to SAP SuccessFactors.
                Leadership was concerned about the quality of the existing data, but there was no
                clear picture of how many issues existed, where they were, or what needed to be
                fixed before go-live.
              </p>
            </CaseSection>

            <CaseSection id="visible" index="02" title="Making the problem visible" lead="Measure what had previously been a gut feeling.">
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

            <CaseSection id="action" index="03" title="From measurement to action" lead="Prioritise the critical issues, then stop them coming back.">
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

            <figure>
              <picture>
                <source srcSet={reviewMeetingWebp.url} type="image/webp" />
                <img
                  src={reviewMeeting.url}
                  alt="AI-generated illustration of a review meeting: four people around a conference table looking at a wall-mounted screen showing an HR data quality dashboard, with a handwritten go-live checklist on a glass whiteboard to the left"
                  width={1672}
                  height={941}
                  className="natural w-full"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption className="mt-4 flex max-w-2xl flex-wrap items-center gap-x-4 gap-y-2 text-xs leading-relaxed text-muted-foreground">
                <span className="label-mono shrink-0 rounded-full border border-hairline px-3 py-1 text-[0.625rem]">
                  AI generated illustration
                </span>
                Reviewing the open list with the people who owned it.
              </figcaption>

            </figure>

            <CaseSection id="outcome" index="04" title="The outcome" lead="Over 8,000 critical issues resolved before go-live.">

              <p>
                More than 8,000 critical issues were resolved ahead of go-live. Payroll ran without
                problems after the migration, and a process was in place to manage data quality
                beyond the project.
              </p>
            </CaseSection>

            <section
              id="reading"
              className="scroll-mt-28 bg-brand-gold px-7 py-12 text-brand-ink md:px-14 md:py-16 lg:px-20 lg:py-20"
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
