import type { ReactNode } from "react";

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
          <p className="label-mono mb-10 flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-border" aria-hidden="true" />
            {label}
          </p>
        ) : null}
        {children}
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
