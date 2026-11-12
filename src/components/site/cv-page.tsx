import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { WorkLabel, WorkSubheading } from "@/components/site/sections";
import { CtaButton } from "@/components/site/cta-button";
import { PortfolioFooter, PortfolioHeader } from "@/components/site/case-layout";
import { casePath, PORTFOLIO_EMAIL, type CaseSlug } from "@/components/site/site-variant";

/* All copy on this page comes from Sebastian's own CV. Do not add or reword
   roles, dates or figures without a new CV from him. */

const LINKEDIN_URL = "https://www.linkedin.com/in/sebastian-bouvier";

type Role = {
  title: string;
  employer: string;
  dates: string;
  context: string;
  points: string[];
  /** Portfolio case that documents this role, if one exists. */
  caseSlug?: CaseSlug;
};

const experience: Role[] = [
  {
    title: "Product Owner & Business Analyst",
    employer: "Adage",
    dates: "Oct 2025 – Aug 2026",
    context:
      "Placed at a large Swedish bank, Group Data & AI. On study leave from Aug 2026 to attend Hyper Island.",
    points: [
      "Owned product direction, roadmap and backlog for an enterprise data platform serving analytics and AI teams.",
      "Prioritised initiatives based on user needs, business impact, risk and technical feasibility in a regulated environment.",
      "Worked closely with developers and business stakeholders, translating needs into clear requirements and prioritised direction.",
    ],
  },
  {
    title: "Business Analyst / Scrum Master",
    employer: "Adage",
    dates: "May 2024 – Apr 2025",
    context: "Placed in R&D at a global vehicle manufacturer.",
    points: [
      "Mapped how hardware and software development teams created, shared and depended on data, identifying challenges across their development workflows.",
      "Assessed capabilities across technology, processes and people to identify gaps and translate findings into prioritised improvement opportunities.",
    ],
  },
  {
    title: "Product Owner, Team Lead & Business Analyst",
    employer: "Influence Tech",
    dates: "Aug 2022 – May 2024",
    context: "Placed at a Nordic transportation & logistics company.",
    points: [
      "Owned a Power BI data quality solution, turning an unquantified concern into a measurable problem through discussions with HR business partners, super users and system experts, combined with data analysis.",
      "Surfaced 10,000 data quality issues during a major system migration, giving stakeholders visibility into the scale of the problem and a basis for prioritisation.",
      "Worked with HR business partners to prioritise issues by impact, and drove remediation with the client's HR shared services team.",
      "Led a 10-person team in resolving 8,000 issues before go-live and established workflows to maintain data quality beyond the migration. Payroll ran without problems after go-live.",
    ],
    caseSlug: "data-quality-migration",
  },
  {
    title: "Junior Project Manager, PMO",
    employer: "Influence Tech",
    dates: "Aug 2021 – Aug 2022",
    context: "Placed at a global telecommunications company.",
    points: [
      "Drove sub-projects within a global programme covering approximately 130,000 employees, enabling programme leadership to focus on strategic priorities.",
      "Coordinated international teams, stakeholders and suppliers, resolving delivery issues and dependencies across sub-projects.",
    ],
  },
  {
    title: "Product Specialist",
    employer: "SAVR",
    dates: "Oct 2020 – May 2021",
    context: "Consumer savings app.",
    points: [
      "Joined as the first customer operations hire at a consumer savings app serving approximately 50,000 users, handling around 200 customer interactions daily.",
      "Turned recurring customer feedback into prioritised product issues and developer input, and supported testing of product changes.",
      "Mapped the fund-order process after recurring customer concerns about delays, giving customers accurate timelines and surfacing opportunities to reduce lead times.",
    ],
  },
];

type Project = {
  name: string;
  text: string;
  caseSlug?: CaseSlug;
  href?: string;
  hrefLabel?: string;
};

type Study = {
  title: string;
  school: string;
  dates: string;
  summary: string;
  projects: Project[];
};

const education: Study[] = [
  {
    title: "Product Manager Programme (YH)",
    school: "Hyper Island, Stockholm",
    dates: "Aug 2026 – Present",
    summary:
      "Practice-based programme in product discovery, strategy and prioritisation, with industry projects.",
    projects: [
      {
        name: "Spotify feature prioritisation (course case, fictive brief)",
        text: "With a team of four, prioritised seven proposed features using 12 user interviews, a 29-respondent survey and market analysis, scoring each against strategy principles drawn from the company's public statements. Recommended two features to bundle into the core offer and one to test before building.",
        caseSlug: "spotify-feature-prioritisation",
      },
      {
        name: "Femea, preventive health check web app",
        text: "With a project team, took a concept from user research and survey insights to a live AI-built prototype. Conducted usability tests with three users, comparing self-reported confidence before and after testing. Two of three reported increased confidence. Refined the design and content based on user feedback.",
        href: "https://femea.lovable.app",
        hrefLabel: "femea.lovable.app",
      },
    ],
  },
  {
    title: "MSc (Civilingenjör), Design & Product Development with Industrial Management",
    school: "Linköping University",
    dates: "2015 – 2020",
    summary:
      "300 credits covering engineering, product development, user-centred design and industrial economics.",
    projects: [
      {
        name: "Bachelor project: rescue vest for long-distance skaters",
        text: "With a team of six, developed a rescue vest concept and prototype with a long-distance skating club, based on interviews with skaters and observation sessions on the ice.",
        caseSlug: "salmagen",
      },
      {
        name: "Master's thesis: Scania",
        text: "Investigated opportunities to minimise lead times in the product development process.",
      },
    ],
  },
];

const skills = [
  "Problem framing & measurable outcomes",
  "User research & discovery",
  "Product ownership & roadmap management",
  "Prioritisation & trade-offs",
  "Prototyping & user testing",
  "Translating business needs into requirements",
  "Business & engineering collaboration",
  "Data analysis & Power BI",
  "AI tools (Claude, Claude Code, Lovable)",
];

const certifications = [
  "Certified Scrum Product Owner (CSPO)",
  "SAFe 5 Agilist",
  "Wharton Business Analytics",
];

const languages = ["Swedish (native)", "English (fluent)", "French (basic)"];

const textLink =
  "inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

function CaseLink({ slug }: { slug: CaseSlug }) {
  return (
    <Link to={casePath("portfolio", slug)} className={`${textLink} mt-4`}>
      Read the case <span aria-hidden="true">→</span>
    </Link>
  );
}

/** One CV section: an italic sub-heading over its entries. */
function CvSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-[84rem] px-6 pb-20 md:px-10 md:pb-24">
      <WorkSubheading as="h2">{title}</WorkSubheading>
      <div className="mt-2">{children}</div>
    </section>
  );
}

/** One dated entry: dates in a narrow left column, content on the right. */
function Entry({ dates, children }: { dates: string; children: ReactNode }) {
  return (
    <div className="grid gap-3 border-b border-hairline py-10 lg:grid-cols-12 lg:gap-10">
      <p className="label-mono lg:col-span-3 lg:pt-2">{dates}</p>
      <div className="max-w-3xl lg:col-span-9">{children}</div>
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 pt-8">
      {items.map((item) => (
        <li key={item} className="border border-hairline px-3 py-2 text-sm text-foreground/90">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CvPage() {
  return (
    <div className="min-h-screen">
      <PortfolioHeader />

      <main>
        <section>
          <div className="mx-auto w-full max-w-[84rem] px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32">
            <WorkLabel className="fade-up">CV</WorkLabel>
            <h1 className="fade-up delay-1 mt-10 font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
              Sebastian Bouvier
            </h1>
            <p className="fade-up delay-2 mt-6 text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Product Manager · Engineer, Product Development · Stockholm
            </p>
            <div className="fade-up delay-2 mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>
                Engineer in Design & Product Development with five years of management consulting
                experience in Data & Analytics, across product ownership, business analysis and team
                leadership. Trained in user-centred design. Used to entering unfamiliar
                organisations, understanding how people work and turning vague problems into
                measurable ones through research and data.
              </p>
              <p>
                Currently studying Product Management at Hyper Island, where I&rsquo;m building on
                my experience through hands-on work with user research, product discovery and
                prototyping. Enjoys working closely with developers and testing ideas with users.
              </p>
            </div>
          </div>
        </section>

        <CvSection title="Experience">
          {experience.map((role) => (
            <Entry key={`${role.employer}-${role.dates}`} dates={role.dates}>
              <h3 className="font-display text-2xl text-foreground md:text-3xl">{role.title}</h3>
              <p className="mt-2 text-base font-medium text-foreground">{role.employer}</p>
              <p className="mt-1 text-base text-muted-foreground">{role.context}</p>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-relaxed text-foreground/90 marker:text-foreground/40">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {role.caseSlug ? <CaseLink slug={role.caseSlug} /> : null}
            </Entry>
          ))}
        </CvSection>

        <CvSection title="Education">
          {education.map((study) => (
            <Entry key={study.title} dates={study.dates}>
              <h3 className="font-display text-2xl text-foreground md:text-3xl">{study.title}</h3>
              <p className="mt-2 text-base font-medium text-foreground">{study.school}</p>
              <p className="mt-1 text-base text-muted-foreground">{study.summary}</p>
              <div className="mt-6 space-y-6">
                {study.projects.map((project) => (
                  <div key={project.name} className="border-l border-hairline pl-5">
                    <h4 className="text-base font-medium text-foreground">{project.name}</h4>
                    <p className="mt-2 text-base leading-relaxed text-foreground/90">
                      {project.text}
                    </p>
                    {project.caseSlug ? <CaseLink slug={project.caseSlug} /> : null}
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`${textLink} mt-4`}
                      >
                        {project.hrefLabel} <span aria-hidden="true">↗</span>
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </Entry>
          ))}
        </CvSection>

        <CvSection title="Skills">
          <TagList items={skills} />
        </CvSection>

        <CvSection title="Certifications">
          <TagList items={certifications} />
        </CvSection>

        <CvSection title="Languages">
          <TagList items={languages} />
        </CvSection>

        <section id="get-in-touch" className="rule-t scroll-mt-28">
          <div className="mx-auto w-full max-w-[84rem] px-6 py-24 md:px-10 md:py-28">
            <h2 className="display-md text-balance">Get in touch</h2>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
              <CtaButton href={`mailto:${PORTFOLIO_EMAIL}`} className="max-sm:px-4 max-sm:text-xs">
                {PORTFOLIO_EMAIL}
              </CtaButton>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={textLink}>
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <Link to="/portfolio" className={textLink}>
                See the cases <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PortfolioFooter />
    </div>
  );
}
