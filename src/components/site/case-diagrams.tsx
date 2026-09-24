/**
 * Monochrome inline case diagrams. Abstract, decision-shaped method
 * drawings, not decoration. All strokes use currentColor so the parent
 * controls the tone. No text inside the SVG; labels live in HTML.
 */

function DiagramFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 800 220"
      fill="none"
      className="h-auto w-full"
      role="img"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/**
 * Paths converge on a vertical kill-line. One passes through, the rest
 * stop at the gate.
 */
export function KillLineDiagram() {
  return (
    <DiagramFrame>
      {/* converging paths */}
      <path
        d="M40 40 C 220 40, 380 52, 520 66"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <path
        d="M40 80 C 220 80, 380 82, 520 86"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <path
        d="M40 120 C 220 120, 380 112, 520 106"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      {/* the one that passes the line */}
      <path
        d="M40 170 C 240 170, 420 148, 610 118 L 760 100"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeWidth="1.25"
        className="draw-line"
      />
      {/* kill-line */}
      <line
        x1="560"
        y1="20"
        x2="560"
        y2="200"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      {/* stop ticks where lines meet the gate */}
      <line x1="520" y1="60" x2="536" y2="72" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="520" y1="80" x2="536" y2="92" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      <line x1="520" y1="112" x2="536" y2="100" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
      {/* decision point */}
      <circle cx="760" cy="100" r="3" fill="currentColor" />
    </DiagramFrame>
  );
}

/**
 * A flow map: sources on the left, a chain through the middle, a fork
 * at the end with a marked decision.
 */
export function OrderFlowDiagram() {
  return (
    <DiagramFrame>
      {/* sources */}
      <circle cx="60" cy="70" r="4" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1" />
      <circle cx="60" cy="150" r="4" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1" />
      {/* links */}
      <path d="M64 70 H 200" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <path d="M64 150 H 200" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <path
        d="M200 70 V 110 H 320"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <path
        d="M200 150 V 110 H 320"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      {/* chain */}
      <rect x="320" y="92" width="90" height="36" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1" />
      <path d="M410 110 H 490" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <rect x="490" y="92" width="90" height="36" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1" />
      {/* fork */}
      <path
        d="M580 110 C 630 110, 640 70, 700 62"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <path
        d="M580 110 C 630 110, 640 152, 700 160"
        stroke="currentColor"
        strokeOpacity="0.85"
        strokeWidth="1.25"
        className="draw-line"
      />
      {/* outcomes */}
      <circle cx="712" cy="62" r="3.5" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <circle cx="712" cy="160" r="3.5" fill="currentColor" />
    </DiagramFrame>
  );
}
