import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  label,
  children,
}: {
  id?: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="rule-t scroll-mt-16">
      <div className="mx-auto w-full max-w-[84rem] px-6 py-24 md:px-10 md:py-32">
        {label ? (
          <Reveal>
            <p className="label-mono mb-10 flex items-center gap-3">
              <span className="inline-block h-px w-6 bg-border" aria-hidden="true" />
              {label}
            </p>
          </Reveal>
        ) : null}
        <Reveal delay={80}>{children}</Reveal>
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="label-mono">{children}</p>;
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{children}</p>
  );
}

export function CinematicFigure({
  src,
  alt,
  caption,
  meta,
  phrase,
  children,
}: {
  src: string;
  alt: string;
  caption?: string;
  meta?: string;
  phrase?: string;
  children?: ReactNode;
}) {
  return (
    <div className="group">
      <figure>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={1536}
          height={1024}
          className="w-full opacity-90"
        />
        {(caption || meta) && (
          <figcaption className="label-mono mt-4 flex flex-wrap items-center justify-between gap-2 text-muted-foreground">
            {caption ? <span>{caption}</span> : <span />}
            {meta ? <span>{meta}</span> : <span />}
          </figcaption>
        )}
      </figure>
      {phrase ? (
        <p className="mt-12 max-w-2xl text-xl leading-snug tracking-tight text-foreground text-balance md:mt-16 md:text-2xl">
          {phrase}
        </p>
      ) : null}
      {children ? <div className="mt-16 md:mt-20">{children}</div> : null}
    </div>
  );
}

/**
 * Helsing-style full-bleed plate: edge-to-edge image with a compact
 * title / subtitle block set immediately underneath it.
 */
export function FullBleedFigure({
  src,
  srcWebp,
  srcWebp2x,
  alt,
  eyebrow,
  title,
  subtitle,
  note,
  meta,
  width,
  height,
  eager = false,
  breakOut = false,
  overlay,
}: {
  src: string;
  /** preferred WebP source; `src` is the fallback */
  srcWebp?: string;
  /** 2x (retina) WebP source */
  srcWebp2x?: string;
  alt: string;
  /** small mono label naming the section the image belongs to */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  /** short "how to read this" note describing what the image shows */
  note?: string;
  meta?: string;
  width?: number;
  height?: number;
  eager?: boolean;
  /** cancel the parent Section's horizontal + top padding */
  breakOut?: boolean;
  overlay?: ReactNode;
}) {

  return (
    <figure
      className={
        breakOut
          ? "relative left-1/2 w-screen -translate-x-1/2 -mt-24 mb-16 md:-mt-32 md:mb-20"
          : "relative mb-16 md:mb-20"
      }
    >
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "radial-gradient(100% 95% at 50% 50%, #000 78%, rgba(0,0,0,0.6) 92%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(100% 95% at 50% 50%, #000 78%, rgba(0,0,0,0.6) 92%, transparent 100%)",
        }}
      >
        <picture>
          {srcWebp ? (
            <source
              srcSet={
                srcWebp2x ? `${srcWebp} 1x, ${srcWebp2x} 2x` : srcWebp
              }
              type="image/webp"
            />
          ) : null}
          <img
            src={src}
            alt={alt}
            loading={eager ? "eager" : "lazy"}
            decoding={eager ? "sync" : "async"}
            {...(eager ? { fetchPriority: "high" as const } : {})}
            width={width ?? 1600}
            height={height ?? 900}
            className="h-[28rem] w-full object-cover object-center opacity-95 sm:h-[38rem] md:h-[52rem]"
          />
        </picture>

        {overlay}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_65%,var(--background)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-background to-transparent md:h-16"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background via-background/50 to-transparent md:h-28"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent md:w-14"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent md:w-14"
          aria-hidden="true"
        />
      </div>


      {hasCaption ? (
        <figcaption className="mx-auto w-full max-w-[84rem] px-6 pt-6 md:px-10 md:pt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-hairline pt-6">
            <div className="max-w-2xl">
              {eyebrow ? (
                <p className="label-mono mb-3 flex items-center gap-3">
                  <span className="inline-block h-px w-6 bg-border" aria-hidden="true" />
                  {eyebrow}
                </p>
              ) : null}
              <p className="text-lg tracking-tight text-foreground md:text-xl">{title}</p>
              {subtitle ? (
                <p className="mt-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {subtitle}
                </p>
              ) : null}
              {note ? (
                <p className="label-mono mt-4 leading-relaxed text-muted-foreground/80">{note}</p>
              ) : null}
            </div>
            {meta ? <p className="label-mono">{meta}</p> : null}
          </div>
        </figcaption>
      ) : null}
    </figure>
  );
}

