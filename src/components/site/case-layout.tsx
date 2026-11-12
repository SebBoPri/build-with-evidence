import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Wordmark } from "@/components/site/brand";
import { CtaButton } from "@/components/site/cta-button";
import { cn } from "@/lib/utils";
import { casePath, indexPath, PORTFOLIO_EMAIL, useSiteVariant, type CaseSlug } from "@/components/site/site-variant";

const homeNav = [
  { label: "Problem", hash: "problem" },
  { label: "Discovery Sprint", hash: "sprint" },
  { label: "Approach", hash: "approach" },
  { label: "About", hash: "about" },
];

export function PortfolioHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[84rem] items-center justify-between px-6 md:px-10">
        <Link to="/portfolio" className="font-display text-xl text-foreground md:text-2xl">
          Sebastian Bouvier
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/portfolio/cv"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-sm font-medium text-foreground" }}
          >
            CV
          </Link>
          <CtaButton
            href="#get-in-touch"
            className="h-10 whitespace-nowrap px-5 max-sm:h-9 max-sm:gap-2 max-sm:px-3 max-sm:text-xs"
          >
            Get in touch
          </CtaButton>
        </div>
      </div>
    </header>
  );
}

/** Personal closing block used on the standalone portfolio instead of the consultancy pitch. */
export function PortfolioContact() {
  return (
    <div id="get-in-touch" className="max-w-3xl scroll-mt-28">
      <h2 className="display-md text-balance">Want to talk about how I work?</h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        I&rsquo;m happy to walk through any of these cases in more detail.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
        <CtaButton href={`mailto:${PORTFOLIO_EMAIL}`} className="max-sm:px-4 max-sm:text-xs">
          {PORTFOLIO_EMAIL}
        </CtaButton>
        <Link
          to="/portfolio/cv"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
        >
          View my CV <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="rule-t">
      <div className="mx-auto w-full max-w-[84rem] px-6 py-10 text-sm text-muted-foreground md:px-10">
        <p>Sebastian Bouvier, Stockholm</p>
        <p className="mt-1">© 2026</p>
      </div>
    </footer>
  );
}

export function CaseHeader() {
  if (useSiteVariant() === "portfolio") return <PortfolioHeader />;
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/90 backdrop-blur-md">
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
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-sm font-medium text-foreground lg:hidden"
          >
            Home
          </Link>
          <Link
            to="/work"
            className="text-sm font-medium text-foreground lg:hidden"
          >
            Work
          </Link>
          <CtaButton
            href="/#contact"
            className="h-10 whitespace-nowrap px-5 max-sm:h-9 max-sm:gap-2 max-sm:px-3 max-sm:text-xs"
          >
            <span className="max-sm:hidden">Let's explore together</span>
            <span className="sm:hidden">Let's talk</span>
          </CtaButton>
        </div>
      </div>
    </header>
  );
}

export type Chapter = readonly [number: string, label: string, id: string];

/** Sticky chapter bar under the header; highlights the chapter in view. */
export function ChapterNav({ chapters, accentClass }: { chapters: readonly Chapter[]; accentClass: string }) {
  const [active, setActive] = useState<string>(chapters[0]?.[2] ?? "");

  useEffect(() => {
    const els = chapters
      .map(([, , id]) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          const first = visible[0];
          if (first) setActive(first.target.id);
        }
      },
      { rootMargin: "-140px 0px -55% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav
      aria-label="Case chapters"
      className="sticky top-20 z-40 border-b border-hairline bg-background/90 backdrop-blur-md"
    >
      <ol className="mx-auto flex w-full max-w-[72rem] snap-x gap-1 overflow-x-auto px-4 [scrollbar-width:none] md:px-8 [&::-webkit-scrollbar]:hidden">
        {chapters.map(([number, label, id]) => {
          const isActive = active === id;
          return (
            <li key={id} className="shrink-0 snap-start">
              <a
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "flex h-12 items-center gap-2 border-b-2 px-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-foreground",
                  isActive
                    ? "border-current text-foreground"
                    : "border-transparent text-foreground/55 hover:text-foreground",
                )}
              >
                <span className={cn("font-mono text-[0.6875rem]", accentClass)}>{number}</span>
                <span className="whitespace-nowrap">{label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function CaseSection({
  id,
  index,
  title,
  lead,
  accentClass,
  figure,
  children,
}: {
  id: string;
  index: string;
  title: string;
  lead?: string;
  accentClass: string;
  figure?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-36 border-t border-hairline pt-10 md:pt-14">
      <div className="grid gap-6 md:grid-cols-12 md:gap-16">
        <div className="md:sticky md:top-36 md:col-span-4 md:self-start">
          <p className={cn("font-display text-3xl leading-none md:text-4xl", accentClass)}>{index}</p>
          <h2 className="mt-4 font-display text-2xl text-foreground md:mt-5 md:text-3xl">{title}</h2>
        </div>
        <div className="md:col-span-8">
          {lead ? (
            <p className="max-w-[38rem] font-display text-xl leading-snug text-foreground md:text-2xl">{lead}</p>
          ) : null}
          <div className="mt-6 max-w-[38rem] space-y-6 text-[1.0625rem] leading-[1.7] text-foreground/80">
            {children}
          </div>
        </div>
      </div>
      {figure ? <div className="mt-12 md:mt-16">{figure}</div> : null}
    </section>
  );
}

export function CaseFigure({
  children,
  caption,
  tag,
}: {
  children: ReactNode;
  caption: ReactNode;
  tag?: string;
}) {
  return (
    <figure>
      {children}
      <figcaption className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs leading-relaxed text-muted-foreground md:ml-[calc(33.333%+1.333rem)]">
        {tag ? (
          <span className="label-mono shrink-0 rounded-full border border-hairline px-3 py-1 text-[0.625rem]">
            {tag}
          </span>
        ) : null}
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}

export function CaseIntro({
  title,
  meta,
  keyFigure,
  overview,
  accentClass,
}: {
  title: ReactNode;
  meta: { label: string; value: string }[];
  keyFigure?: { value: string; label: string };
  overview: [string, string][];
  accentClass: string;
}) {
  const variant = useSiteVariant();
  return (
    <section>
      <div className="mx-auto w-full max-w-[72rem] px-6 pb-10 pt-12 md:px-10 md:pb-14 md:pt-20">
        <p className="label-mono fade-up">
          <Link to={indexPath(variant)} className="transition-colors hover:text-foreground">
            {variant === "portfolio" ? "Portfolio" : "Work"}
          </Link>
          {" / "}Case
        </p>
        <div className="mt-8 grid gap-10 md:mt-10 lg:grid-cols-12 lg:items-end">
          <h1 className="display-md fade-up delay-1 max-w-3xl text-balance lg:col-span-8">{title}</h1>
          {keyFigure ? (
            <div className="fade-up delay-2 lg:col-span-4">
              <p className={cn("font-display text-5xl leading-none md:text-6xl", accentClass)}>{keyFigure.value}</p>
              <p className="mt-3 max-w-xs text-sm leading-snug text-foreground/75">{keyFigure.label}</p>
            </div>
          ) : null}
        </div>
        <dl className="fade-up delay-2 mt-10 grid gap-x-px gap-y-5 border-t border-hairline pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label} className="px-4 md:px-5">
              <dt className={cn("label-mono", accentClass)}>{m.label}</dt>
              <dd className="mt-1 text-[0.9rem] leading-snug text-foreground/90">{m.value}</dd>
            </div>
          ))}
        </dl>
        <dl className="fade-up delay-3 mt-10 grid grid-cols-2 gap-px bg-hairline lg:grid-cols-4">
          {overview.map(([label, value]) => (
            <div key={label} className="bg-background px-4 py-4 md:px-5 md:py-5">
              <dt className="label-mono">{label}</dt>
              <dd className="mt-2 text-sm text-foreground/90">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function NextCase({
  to,
  title,
  context,
  surfaceClass,
}: {
  to: `/work/${CaseSlug}`;
  title: string;
  context: string;
  surfaceClass: string;
}) {
  const variant = useSiteVariant();
  const target = casePath(variant, to.replace("/work/", "") as CaseSlug);
  return (
    <section className="mx-auto w-full max-w-[72rem] px-6 py-16 md:px-10 md:py-24">
      <p className="label-mono">Next case</p>
      <Link
        to={target}
        className={cn(
          "next-case-card group mt-6 block px-7 py-10 transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground md:px-12 md:py-14",
          surfaceClass,
        )}
      >
        <p className="label-mono opacity-70">{context}</p>
        <p className="mt-5 max-w-3xl font-display text-3xl leading-tight md:text-5xl">{title}</p>
        <p className="mt-8 text-sm">
          Read the case <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
        </p>
      </Link>
      {variant === "portfolio" ? (
        <div className="mt-16"><PortfolioContact /></div>
      ) : (
      <div className="mt-16 max-w-3xl">
        <h2 className="display-md text-balance">If this sounds familiar, let&rsquo;s find out.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Two to four weeks from uncertainty to a decision you can act on.
        </p>
        <CtaButton href="/#contact" className="mt-8">
          Let's explore together
        </CtaButton>
      </div>
      )}
    </section>
  );
}

export function CaseFooter() {
  if (useSiteVariant() === "portfolio") return <PortfolioFooter />;
  return (
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
  );
}
