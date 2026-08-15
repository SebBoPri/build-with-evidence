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
  children,
}: {
  src: string;
  alt: string;
  caption?: string;
  meta?: string;
  children?: ReactNode;
}) {
  return (
    <div className="group">
      <figure className="relative overflow-hidden border border-hairline bg-surface aspect-[16/9] md:aspect-[21/9]">
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true" />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={1536}
          height={1024}
          className="h-full w-full object-cover opacity-85"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent"
          aria-hidden="true"
        />
        {(caption || meta) && (
          <figcaption className="label-mono absolute bottom-0 left-0 right-0 flex flex-wrap items-center justify-between gap-2 border-t border-hairline bg-background/50 px-4 py-3 backdrop-blur-sm">
            {caption ? <span>{caption}</span> : <span />}
            {meta ? <span>{meta}</span> : <span />}
          </figcaption>
        )}
      </figure>
      {children ? <div className="mt-10 md:mt-14">{children}</div> : null}
    </div>
  );
}
