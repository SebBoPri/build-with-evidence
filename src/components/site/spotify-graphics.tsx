import { cn } from "@/lib/utils";

/** Row of headline stats for a case chapter. */
export function StatRow({ stats }: { stats: [value: string, label: string][] }) {
  return (
    <dl className="grid gap-px bg-hairline sm:grid-cols-3">
      {stats.map(([value, label]) => (
        <div key={value} className="bg-background px-5 py-6 md:px-6 md:py-8">
          <dt className="font-display text-4xl leading-none text-case-highlight md:text-5xl">{value}</dt>
          <dd className="mt-3 text-sm leading-snug text-foreground/80">{label}</dd>
        </div>
      ))}
    </dl>
  );
}

const allFeatures = [
  "Never lose the plot between books",
  "Prompted playlist for audiobooks",
  "AI-powered self-publishing",
  "Personal podcast creation",
  "Just ask Spotify",
  "Superfan ticketing",
  "AI covers and remixes",
];

const picked = [
  ["1", "Just ask Spotify", "Bundle into Premium", false],
  ["2", "Superfan ticketing", "Bundle into Premium", false],
  ["3", "AI covers and remixes", "Paid add-on to test", true],
] as const;

/** Seven features narrowed to three ranked picks. */
export function FeatureFunnel() {
  return (
    <div>
      <p className="label-mono">Seven features in scope</p>
      <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {allFeatures.map((f) => (
          <li key={f} className="border border-hairline px-3 py-3 text-xs leading-snug text-foreground/55">
            {f}
          </li>
        ))}
      </ul>
      <p aria-hidden="true" className="my-5 text-center text-2xl text-case-highlight">
        &darr;
      </p>
      <ol className="grid gap-3 md:grid-cols-3">
        {picked.map(([n, name, offer, test]) => (
          <li
            key={n}
            className={cn(
              "px-5 py-6",
              test ? "bg-brand-gold text-brand-ink" : "bg-case-highlight text-case-highlight-foreground",
            )}
          >
            <p className="font-display text-3xl leading-none">{n}</p>
            <p className="mt-4 font-display text-xl">{name}</p>
            <p className={cn("label-mono mt-3", test ? "text-brand-ink/75" : "text-case-highlight-foreground/75")}>{offer}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

type Cell = [text: string, fits: boolean];

const rows: { feature: string; cells: Cell[]; offer: string }[] = [
  {
    feature: "Just ask Spotify",
    cells: [["Popular", true], ["Yes: discovery", true], ["Yes", true], ["Yes: wishes in own words", true]],
    offer: "In Premium",
  },
  {
    feature: "Superfan ticketing",
    cells: [["Popular", true], ["Yes: sold-out shows", true], ["Yes", true], ["Yes: who the superfans are", true]],
    offer: "In Premium",
  },
  {
    feature: "AI covers and remixes",
    cells: [["Niche", false], ["Unclear", false], ["Unproven", false], ["Yes: what fans like", true]],
    offer: "Paid add-on to test",
  },
];

function Dot({ fits }: { fits: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn("mt-1.5 inline-block size-2 shrink-0 rounded-full", fits ? "bg-case-highlight" : "bg-brand-gold")}
    />
  );
}

/** Scoring of the three picks against the four strategy rules. */
export function ScoringTable() {
  // min-w-0 lets the scroll box shrink inside grid and flex parents.
  const heads = ["Feature", "Popular or niche", "Fills a gap", "Keeps people paying", "Generates data", "Offered as"];
  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <Dot fits /> Fits the rule
        </span>
        <span className="flex items-center gap-2">
          <Dot fits={false} /> Unclear or weak
        </span>
      </div>
      <div className="relative overflow-x-auto border-y border-hairline">
        <table className="w-full min-w-[44rem] text-left text-sm">
          <thead>
            <tr className="border-b border-hairline">
              {heads.map((h) => (
                <th key={h} scope="col" className="label-mono px-3 py-3 font-normal">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature} className="border-b border-hairline last:border-0">
                <th scope="row" className="px-3 py-4 font-display text-base font-normal text-foreground">
                  {r.feature}
                </th>
                {r.cells.map(([text, fits], i) => (
                  <td key={i} className="px-3 py-4 align-top text-foreground/85">
                    <span className="flex gap-2">
                      <Dot fits={fits} />
                      <span>
                        {text}
                        <span className="sr-only">{fits ? " (fits the rule)" : " (unclear or weak)"}</span>
                      </span>
                    </span>
                  </td>
                ))}
                <td className="px-3 py-4 align-top text-foreground">{r.offer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
