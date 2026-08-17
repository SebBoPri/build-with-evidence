import { useEffect, useRef, useState } from "react";

type Step = { n: string; title: string; body: string };

/**
 * Four-step rail whose nodes light up in sequence as the section scrolls
 * through the viewport, so the rail doubles as a progress indicator.
 */
export function ApproachRail({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when the list first reaches the lower third, 1 once it passes the upper third.
      const start = vh * 0.82;
      const end = vh * 0.28;
      const raw = (start - r.top) / Math.max(start - end + r.height * 0.35, 1);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const active = Math.min(steps.length - 1, Math.floor(progress * steps.length + 0.0001));

  return (
    <ol ref={ref} className="mt-20 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => {
        const reached = progress > 0 && i <= active;
        const fill = Math.min(1, Math.max(0, progress * steps.length - i));
        return (
          <li key={s.n} className="group relative lg:pr-10">
            <span className="absolute left-0 top-[7px] h-px w-full bg-hairline" aria-hidden="true">
              <span
                className="block h-px origin-left bg-foreground/70 transition-transform duration-500 ease-out"
                style={{ transform: `scaleX(${fill})`, width: "100%" }}
              />
            </span>

            <span
              className={`relative flex h-[15px] w-[15px] items-center justify-center rounded-full border bg-background transition-colors duration-500 ${
                reached ? "border-foreground/60" : "border-border"
              }`}
              aria-hidden="true"
            >
              <span
                className={`h-[5px] w-[5px] rounded-full bg-foreground transition-all duration-500 ${
                  reached ? "opacity-100 scale-125" : "opacity-30 group-hover:opacity-70"
                }`}
              />
            </span>

            <h3
              className={`mt-14 text-xl font-medium tracking-tight transition-colors duration-500 ${
                reached ? "text-foreground" : "text-foreground/70"
              }`}
            >
              {s.title}
            </h3>
            <p
              className={`mt-3 max-w-[16rem] text-[0.95rem] leading-relaxed transition-colors duration-500 ${
                reached ? "text-muted-foreground" : "text-muted-foreground/75"
              }`}
            >
              {s.body}
            </p>
            <p
              className={`label-mono mt-10 transition-opacity duration-500 ${
                reached ? "opacity-100" : "opacity-70"
              }`}
            >
              Step {s.n}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
