/** Proposed engagement steps, not observed guest behaviour. */
export function EngagementLadder() {
  return (
    <ol className="grid gap-px bg-hairline sm:grid-cols-4" aria-label="Proposed engagement ladder">
      {[
        ["01", "Attend", "Come to an evening"],
        ["02", "Participate", "Join the conversation"],
        ["03", "Contribute", "Host a table next month"],
        ["04", "Own", "Shape the community narrative"],
      ].map(([number, title, text]) => (
        <li key={number} className="bg-background px-5 py-7 md:px-6">
          <span className="font-mono text-xs text-case-highlight">{number} <span aria-hidden="true">→</span></span>
          <p className="mt-5 font-display text-2xl text-foreground">{title}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
        </li>
      ))}
    </ol>
  );
}

/** Only the supplied start and end times are shown. */
export function EveningRunSheet() {
  return (
    <div className="border-y border-hairline py-6 md:py-8">
      <div className="flex items-baseline justify-between gap-4 font-mono text-sm text-case-highlight">
        <span>18:00</span><span className="text-xs text-muted-foreground">Evening window</span><span>20:00</span>
      </div>
      <ol className="mt-6 grid gap-6 sm:grid-cols-3">
        {[["One talk", "A screened TED Talk"], ["One question", "Tables of six, coffee and a bulle"], ["Next month", "Invite guests to host a table"]].map(([title, text], i) => (
          <li key={title} className="border-t-2 border-case-highlight pt-4">
            <p className="font-mono text-xs text-muted-foreground">0{i + 1}</p>
            <p className="mt-3 font-display text-xl text-foreground">{title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-muted-foreground">90-minute gathering · 35 guests maximum · 50 SEK · Two volunteers</p>
    </div>
  );
}

export function OwnershipSplit() {
  return (
    <dl className="grid gap-px bg-hairline sm:grid-cols-2">
      <div className="bg-case-highlight px-6 py-8 text-case-highlight-foreground">
        <dt className="font-display text-2xl">TEDxStockholm</dt>
        <dd className="mt-4 text-base leading-relaxed">The format and the brand</dd>
      </div>
      <div className="bg-brand-gold px-6 py-8 text-brand-ink">
        <dt className="font-display text-2xl">The community</dt>
        <dd className="mt-4 text-base leading-relaxed">The narrative</dd>
      </div>
    </dl>
  );
}