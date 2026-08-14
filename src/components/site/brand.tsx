/** Brand marks and technical line-art used across the site. */

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex flex-col gap-1.5 ${className}`}>
      <svg
        viewBox="0 0 200 26"
        className="h-3 w-[8.5rem] text-foreground"
        aria-hidden="true"
        fill="none"
      >
        <path d="M0 3 L200 1 L200 4 L0 6 Z" fill="currentColor" opacity="0.95" />
        <path d="M14 11 L200 9.5 L200 12 L14 13.5 Z" fill="currentColor" opacity="0.6" />
        <path d="M42 19 L200 18 L200 20 L42 21 Z" fill="currentColor" opacity="0.35" />
      </svg>
      <span className="font-mono text-[0.78rem] font-medium uppercase tracking-[0.22em]">
        Slipstream Labs
      </span>
    </span>
  );
}

/* Deterministic starfield so server and client render identically. */
function stars(count: number) {
  const out: { x: number; y: number; r: number; o: number }[] = [];
  let seed = 20260814;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  for (let i = 0; i < count; i++) {
    out.push({
      x: rand() * 1440,
      y: rand() * 900,
      r: rand() < 0.85 ? 0.7 : 1.4,
      o: 0.18 + rand() * 0.55,
    });
  }
  return out;
}

const field = stars(150);

export function Starfield({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      {field.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="currentColor" opacity={s.o} />
      ))}
    </svg>
  );
}

/** Trajectory from noise to a locked target — the hero's visual argument. */
export function Trajectory({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 720 420" className={className} fill="none" aria-hidden="true">
      <path
        d="M20 400 C 200 380, 330 300, 430 200 S 600 60, 680 44"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 7"
        opacity="0.55"
        className="draw-line"
      />
      {[
        [20, 400, 2.5],
        [200, 356, 3],
        [430, 200, 3.5],
      ].map(([cx, cy, r], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r! + 4} stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
          <circle cx={cx} cy={cy} r={r} fill="currentColor" opacity="0.8" />
        </g>
      ))}
      <g>
        <circle cx="680" cy="44" r="14" stroke="currentColor" strokeWidth="1" />
        <circle cx="680" cy="44" r="3" fill="currentColor" />
        <path
          d="M680 24 v8 M680 56 v8 M660 44 h8 M692 44 h8"
          stroke="currentColor"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}

/** Orbit diagram: assumptions → evidence → decision, looping. */
export function OrbitDiagram({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 300, y: 30, label: "Assumptions", anchor: "middle" as const, dy: -14 },
    { x: 520, y: 110, label: "Kill-lines", anchor: "start" as const, dy: -12 },
    { x: 560, y: 200, label: "Evidence", anchor: "start" as const, dy: 20 },
    { x: 300, y: 280, label: "Test", anchor: "middle" as const, dy: 24 },
    { x: 40, y: 155, label: "Decision", anchor: "end" as const, dy: -14 },
  ];
  return (
    <svg viewBox="0 0 620 320" className={className} fill="none" aria-hidden="true">
      <ellipse
        cx="300"
        cy="155"
        rx="260"
        ry="125"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <circle cx="300" cy="155" r="2.5" fill="currentColor" />
      <text
        x="300"
        y="180"
        textAnchor="middle"
        className="fill-current font-mono text-[11px] tracking-[0.16em]"
        opacity="0.6"
      >
        the mechanism
      </text>
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="4" stroke="currentColor" strokeWidth="1" fill="none" />
          <text
            x={n.x}
            y={n.y + n.dy}
            textAnchor={n.anchor}
            className="fill-current font-mono text-[11px] tracking-[0.14em]"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
