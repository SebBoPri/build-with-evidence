import { useEffect, useRef } from "react";

/**
 * Hero background: hundreds of fine light strands that start across the left
 * of the hero and converge on one bright point, which continues as a thin
 * beam to the right edge. Drawn on a canvas so it fills any viewport sharply.
 *
 * The picture is static (nothing moves, so reduced-motion needs no special
 * case) and comes from a seeded generator, so it looks the same on every load.
 */

const SEED = 20261112;

/** Small deterministic random generator (mulberry32). */
function seeded(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const white = (alpha: number) => `rgba(255,255,255,${Math.max(0, Math.min(1, alpha)).toFixed(3)})`;
const DEG = Math.PI / 180;

type Wave = { a1: number; f1: number; p1: number; a2: number; f2: number; p2: number };

function draw(canvas: HTMLCanvasElement) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (!width || !height) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  ctx.globalCompositeOperation = "source-over";
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, width, height);

  // On tall, narrow screens the text fills the upper part of the hero, so the
  // point where the strands meet moves down into the free space below it.
  const portrait = width / height < 0.85;
  const fx = width * (portrait ? 0.84 : 0.815);
  const fy = height * (portrait ? 0.82 : 0.5);
  const unit = Math.min(width, height * 1.6); // sizes the glow, core and beam
  const scale = unit / 1440;

  const rand = seeded(SEED);
  const gauss = () => {
    const u = Math.max(rand(), 1e-9);
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rand());
  };

  // Angle of a strand away from the centre line. Most hug the axis, which is
  // what builds the dense horizontal core; the rest fan out, leaning upwards.
  const fanAngle = () => {
    const r = rand();
    const sigma = r < 0.3 ? 2.4 : r < 0.78 ? 8 : 15;
    const angle = Math.min(Math.abs(gauss()) * sigma, portrait ? 20 : 29);
    return (rand() < 0.58 ? -1 : 1) * angle * DEG;
  };
  const wave = (): Wave => ({
    a1: gauss() * 22 * scale,
    f1: 0.35 + rand() * 0.8,
    p1: rand() * Math.PI * 2,
    a2: gauss() * 6 * scale,
    f2: 1.6 + rand() * 2.6,
    p2: rand() * Math.PI * 2,
  });

  // Strands travel in loose bundles, like locks of fibre: each bundle has its
  // own angle, bend and sway, and its strands vary slightly around it.
  const bundles = Array.from({ length: 90 }, () => ({
    angle: fanAngle(),
    bend: 1 + Math.pow(rand(), 2) * 0.55,
    wave: wave(),
    glow: 0.7 + rand() * 0.9,
  }));

  const count = Math.round(Math.max(1000, Math.min(3400, (width * height) / 430)));
  const coreLength = unit * 0.13; // strands land along a stretch of the axis, not on one pixel
  const SEGMENTS = 34;

  // Additive blending: where strands overlap, the light adds up.
  ctx.globalCompositeOperation = "lighter";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  for (let i = 0; i < count; i++) {
    const inBundle = rand() < 0.72;
    const bundle = bundles[Math.floor(rand() * bundles.length)] ?? bundles[0]!;
    const own = wave();
    const angle = inBundle ? bundle.angle + gauss() * 0.9 * DEG : fanAngle();
    const bend = inBundle ? bundle.bend + gauss() * 0.04 : 1 + Math.pow(rand(), 2) * 0.55;
    const w = inBundle
      ? {
          ...bundle.wave,
          a1: bundle.wave.a1 + own.a1 * 0.25,
          a2: bundle.wave.a2 + own.a2 * 0.6,
          p2: bundle.wave.p2 + gauss() * 0.5,
        }
      : own;

    // Steep strands meet near the tip; shallow ones can land further back.
    const shallow = 1 - Math.min(Math.abs(angle) / (26 * DEG), 1);
    const tx = fx - coreLength * Math.pow(rand(), 1.7) * shallow;
    const ty = fy + gauss() * 1.1 * scale;
    const rise = Math.tan(angle) * tx; // offset from the axis at the left edge
    const start = 0.34 + rand() * 0.8; // 1 = begins at the left edge

    ctx.beginPath();
    for (let j = 0; j <= SEGMENTS; j++) {
      const s = start * (1 - j / SEGMENTS);
      const x = tx - s * tx;
      const sway =
        Math.pow(s, 1.25) *
        (w.a1 * Math.sin(2 * Math.PI * w.f1 * s + w.p1) +
          w.a2 * Math.sin(2 * Math.PI * w.f2 * s + w.p2));
      const y = ty + rise * Math.pow(s, bend) + sway;
      if (j === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    // Each strand is faint; brightness comes from many of them overlapping.
    // A few brighter wisps stand out, and every strand flickers along its length.
    let alpha = 0.011 + Math.pow(rand(), 3) * 0.05;
    if (rand() < 0.06) alpha += 0.05 + rand() * 0.11;
    if (inBundle) alpha *= bundle.glow;
    // Strands near the axis pile up on each other, so each one carries less light.
    alpha *= 0.3 + 0.7 * Math.min(Math.abs(angle) / (9 * DEG), 1);
    const flicker = () => 0.55 + rand() * 0.7;
    const fade = ctx.createLinearGradient(tx - start * tx, 0, tx, 0);
    fade.addColorStop(0, white(0));
    fade.addColorStop(0.1, white(alpha * 0.5 * flicker()));
    fade.addColorStop(0.3, white(alpha * 0.8 * flicker()));
    fade.addColorStop(0.55, white(alpha * flicker()));
    fade.addColorStop(0.8, white(alpha * 1.1 * flicker()));
    fade.addColorStop(1, white(alpha * 1.25));
    ctx.strokeStyle = fade;
    ctx.lineWidth = 0.35 + Math.pow(rand(), 2.2) * 0.8;
    ctx.stroke();
  }

  // Hold the light back behind the text so it stays easy to read.
  ctx.globalCompositeOperation = "source-over";
  const dim = portrait
    ? ctx.createLinearGradient(0, 0, 0, height * 0.72)
    : ctx.createLinearGradient(0, 0, width * 0.58, 0);
  dim.addColorStop(0, "rgba(0,0,0,0.5)");
  dim.addColorStop(0.6, "rgba(0,0,0,0.3)");
  dim.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = dim;
  ctx.fillRect(0, 0, width, height);

  ctx.globalCompositeOperation = "lighter";

  // The luminous core: stretched ellipses of light layered along the axis, so
  // the merged strands read as one wide white blade instead of a dot.
  const ellipse = (cx: number, rx: number, ry: number, alpha: number, cy = fy) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(1, ry / rx);
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
    g.addColorStop(0, white(alpha));
    g.addColorStop(0.3, white(alpha * 0.5));
    g.addColorStop(0.65, white(alpha * 0.12));
    g.addColorStop(1, white(0));
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, rx, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };
  ellipse(fx - unit * 0.15, unit * 0.3, unit * 0.003, 0.55);
  ellipse(fx - unit * 0.06, unit * 0.14, unit * 0.006, 0.45);
  ellipse(fx - unit * 0.018, unit * 0.085, unit * 0.009, 0.9);
  ellipse(fx - unit * 0.004, unit * 0.03, unit * 0.006, 1);
  // atmospheric halo, a little above the axis as in a lens flare
  ellipse(fx - unit * 0.012, unit * 0.09, unit * 0.06, 0.16, fy - unit * 0.004);
  ellipse(fx - unit * 0.02, unit * 0.24, unit * 0.14, 0.03, fy - unit * 0.008);

  // The beam grows out of the core: it starts as thick as the core's tip and
  // narrows to a hairline that runs to the right edge.
  const tipHalf = unit * 0.0042;
  const hair = 0.7;
  const neck = fx + unit * 0.085;
  ctx.fillStyle = white(1);
  ctx.beginPath();
  ctx.moveTo(fx - unit * 0.03, fy - tipHalf);
  ctx.quadraticCurveTo(fx + unit * 0.02, fy - hair, neck, fy - hair);
  ctx.lineTo(width, fy - hair);
  ctx.lineTo(width, fy + hair);
  ctx.lineTo(neck, fy + hair);
  ctx.quadraticCurveTo(fx + unit * 0.02, fy + hair, fx - unit * 0.03, fy + tipHalf);
  ctx.closePath();
  ctx.fill();
  // light spilling off the beam, strongest where it leaves the core
  const spill = (half: number, alpha: number) => {
    const across = ctx.createLinearGradient(0, fy - half, 0, fy + half);
    across.addColorStop(0, white(0));
    across.addColorStop(0.5, white(alpha));
    across.addColorStop(1, white(0));
    ctx.fillStyle = across;
    ctx.fillRect(fx, fy - half, width - fx, half * 2);
  };
  spill(3.5, 0.22);
  spill(11, 0.07);

  // Bloom: a shrunken copy of the picture drawn back over itself spreads light
  // around everything bright, the way a long exposure does.
  const bloom = (divisor: number, alpha: number) => {
    const small = document.createElement("canvas");
    small.width = Math.max(1, Math.round(canvas.width / divisor));
    small.height = Math.max(1, Math.round(canvas.height / divisor));
    const sctx = small.getContext("2d");
    if (!sctx) return;
    sctx.imageSmoothingEnabled = true;
    sctx.imageSmoothingQuality = "high";
    sctx.drawImage(canvas, 0, 0, small.width, small.height);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.globalAlpha = alpha;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(small, 0, 0, width, height);
    ctx.restore();
  };
  bloom(4, 0.2);
  bloom(10, 0.12);
}

export function HeroRays({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let frame = 0;
    const schedule = () => {
      if (!frame)
        frame = requestAnimationFrame(() => {
          frame = 0;
          draw(canvas);
        });
    };

    draw(canvas);
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(schedule);
    observer?.observe(canvas);
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
