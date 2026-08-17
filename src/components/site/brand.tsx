/** Brand marks and technical line-art used across the site. */
import { useId } from "react";

export function Wordmark({ className = "" }: { className?: string }) {
  const gid = `slfade-${useId().replace(/:/g, "")}`;
  return (
    <svg
      viewBox="0 0 640 158"
      className={`h-[2.2rem] w-[8.9rem] text-foreground ${className}`}
      fill="none"
      aria-hidden="true"
    >
  
  <defs><linearGradient id={gid} x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stopColor="currentColor" stopOpacity="1"/>
    <stop offset="0.55" stopColor="currentColor" stopOpacity="0.6"/>
    <stop offset="1" stopColor="currentColor" stopOpacity="0.05"/>
  </linearGradient></defs>
  <polygon points="0,0 638,31 0,24" fill={`url(#${gid})`}/>
  <polygon points="0,40 638,34 0,64" fill={`url(#${gid})`}/>
  <g fill="currentColor" transform="translate(0 146) scale(0.052000 -0.052000)">
    <path transform="translate(0.00 0)" d="M310 -14Q230 -14 168.5 14.5Q107 43 72.0 97.0Q37 151 37 229V255H156V229Q156 160 198.0 126.0Q240 92 310 92Q381 92 417.0 121.0Q453 150 453 196Q453 227 436.0 246.5Q419 266 386.5 278.0Q354 290 308 301L278 307Q209 323 158.5 347.5Q108 372 81.0 411.0Q54 450 54 513Q54 576 84.0 621.0Q114 666 169.0 690.0Q224 714 298 714Q372 714 430.0 689.0Q488 664 521.5 614.0Q555 564 555 489V456H436V489Q436 532 419.0 558.0Q402 584 371.0 596.0Q340 608 298 608Q236 608 204.0 584.0Q172 560 172 516Q172 488 186.5 468.5Q201 449 229.5 436.5Q258 424 301 415L331 408Q403 392 457.0 367.5Q511 343 541.5 303.0Q572 263 572 199Q572 136 539.5 88.0Q507 40 448.5 13.0Q390 -14 310 -14Z"/>
    <path transform="translate(872.12 0)" d="M69 0V700H190V109H518V0Z"/>
    <path transform="translate(1679.24 0)" d="M69 0V700H190V0Z"/>
    <path transform="translate(2202.36 0)" d="M69 0V700H352Q418 700 468.0 674.0Q518 648 547.0 600.5Q576 553 576 488V474Q576 410 546.5 362.0Q517 314 466.5 288.0Q416 262 352 262H190V0ZM190 371H340Q392 371 423.5 399.0Q455 427 455 476V486Q455 535 424.0 563.0Q393 591 340 591H190Z"/>
    <path transform="translate(3069.48 0)" d="M310 -14Q230 -14 168.5 14.5Q107 43 72.0 97.0Q37 151 37 229V255H156V229Q156 160 198.0 126.0Q240 92 310 92Q381 92 417.0 121.0Q453 150 453 196Q453 227 436.0 246.5Q419 266 386.5 278.0Q354 290 308 301L278 307Q209 323 158.5 347.5Q108 372 81.0 411.0Q54 450 54 513Q54 576 84.0 621.0Q114 666 169.0 690.0Q224 714 298 714Q372 714 430.0 689.0Q488 664 521.5 614.0Q555 564 555 489V456H436V489Q436 532 419.0 558.0Q402 584 371.0 596.0Q340 608 298 608Q236 608 204.0 584.0Q172 560 172 516Q172 488 186.5 468.5Q201 449 229.5 436.5Q258 424 301 415L331 408Q403 392 457.0 367.5Q511 343 541.5 303.0Q572 263 572 199Q572 136 539.5 88.0Q507 40 448.5 13.0Q390 -14 310 -14Z"/>
    <path transform="translate(3941.60 0)" d="M234 0V591H25V700H563V591H354V0Z"/>
    <path transform="translate(4793.73 0)" d="M69 0V700H368Q434 700 483.0 677.0Q532 654 559.5 612.5Q587 571 587 513V502Q587 437 556.0 398.0Q525 359 481 341V325Q520 323 542.5 298.0Q565 273 565 231V0H445V214Q445 239 431.5 254.5Q418 270 388 270H190V0ZM190 379H356Q408 379 437.5 406.5Q467 434 467 480V489Q467 536 438.0 563.5Q409 591 356 591H190Z"/>
    <path transform="translate(5689.85 0)" d="M69 0V700H515V591H190V407H487V298H190V109H520V0Z"/>
    <path transform="translate(6509.97 0)" d="M20 0 212 700H421L613 0H489L447 160H186L144 0ZM214 270H419L325 625H308Z"/>
    <path transform="translate(7407.09 0)" d="M69 0V700H294L430 81H447L584 700H808V0H692V613H675L539 0H339L203 613H186V0Z"/>
    <path transform="translate(9068.33 0)" d="M69 0V700H190V109H518V0Z"/>
    <path transform="translate(9875.45 0)" d="M20 0 212 700H421L613 0H489L447 160H186L144 0ZM214 270H419L325 625H308Z"/>
    <path transform="translate(10772.57 0)" d="M46 0V106H140V594H46V700H404Q467 700 514.5 678.5Q562 657 588.5 617.5Q615 578 615 523V514Q615 466 597.0 435.0Q579 404 554.0 387.0Q529 370 506 363V346Q529 340 555.5 323.5Q582 307 600.5 275.5Q619 244 619 194V184Q619 127 591.5 85.5Q564 44 516.5 22.0Q469 0 407 0ZM260 109H393Q441 109 469.5 132.5Q498 156 498 199V208Q498 251 470.0 274.5Q442 298 393 298H260ZM260 407H392Q438 407 466.5 430.0Q495 453 495 494V504Q495 545 466.5 568.0Q438 591 392 591H260Z"/>
    <path transform="translate(11699.69 0)" d="M310 -14Q230 -14 168.5 14.5Q107 43 72.0 97.0Q37 151 37 229V255H156V229Q156 160 198.0 126.0Q240 92 310 92Q381 92 417.0 121.0Q453 150 453 196Q453 227 436.0 246.5Q419 266 386.5 278.0Q354 290 308 301L278 307Q209 323 158.5 347.5Q108 372 81.0 411.0Q54 450 54 513Q54 576 84.0 621.0Q114 666 169.0 690.0Q224 714 298 714Q372 714 430.0 689.0Q488 664 521.5 614.0Q555 564 555 489V456H436V489Q436 532 419.0 558.0Q402 584 371.0 596.0Q340 608 298 608Q236 608 204.0 584.0Q172 560 172 516Q172 488 186.5 468.5Q201 449 229.5 436.5Q258 424 301 415L331 408Q403 392 457.0 367.5Q511 343 541.5 303.0Q572 263 572 199Q572 136 539.5 88.0Q507 40 448.5 13.0Q390 -14 310 -14Z"/>
  </g>
</svg>
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

/** Trajectory from noise to a locked target, the hero's visual argument. */
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
