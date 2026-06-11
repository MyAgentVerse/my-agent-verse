// === FILE: src/pages/Home.tsx ===
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  ArrowRight,
  CheckCircle,
  Settings,
  FileText,
  Users,
  Zap,
  TrendingUp,
  Phone,
  BarChart3,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import businessChaos from "@/assets/business-chaos.jpg";
import guaranteeBadge from "@/assets/guarantee-badge.png";
import industriesConnected from "@/assets/industries-connected.jpg";
import problemSolutionSplit from "@/assets/problem-solution-split.jpg";
import buildCollaboration from "@/assets/build-collaboration.jpg";

// ── Rotating Headline ─────────────────────────────────────────
const HEADLINES = [
  {
    part1: "You're Working 60 Hours a Week.",
    part2: "Your Business Should Be Working Harder Than You.",
    duration: 4000,
  },
  {
    part1: "You Built This Business to Have Freedom.",
    part2: "Let's Get It Back.",
    duration: 2500,
  },
  {
    part1: "Your Business Is Running You.",
    part2: "Let's Flip That.",
    duration: 4000,
  },
  {
    part1: "More Revenue. Fewer Hours.",
    part2: "No New Hires.",
    duration: 2500,
  },
  {
    part1: "Your Business Has a Bottleneck.",
    part2: "It's Costing You 15 Hours a Week. We Find It and Fix It.",
    duration: 2500,
  },
];

const RotatingHeadline = () => {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % HEADLINES.length);
        setVisible(true);
      }, 400);
    }, HEADLINES[idx].duration);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <div style={{ minHeight: "210px" }}>
      <h1
        className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }}
      >
        {HEADLINES[idx].part1}{" "}
        <span className="text-[hsl(42_100%_50%)]">{HEADLINES[idx].part2}</span>
      </h1>
    </div>
  );
};

// ── Bottleneck Pipeline Canvas Animation ──────────────────────
const PIPELINE_STAGES = [
  {
    label: "Marketing",
    pain: "Leads coming in from 5 different places. Nobody owns them.",
  },
  {
    label: "Lead Response",
    pain: "Lead came in Friday 4pm. Called back Monday. They already booked someone else.",
  },
  {
    label: "Follow-Up",
    pain: "One email sent. No reply. You moved on. They bought from whoever sent 7.",
  },
  {
    label: "Sales",
    pain: "No consistent process. Close rate depends on who picks up the phone.",
  },
  {
    label: "Delivery",
    pain: "Client signed. Nothing happened for 4 days. Trust gone in 96 hours.",
  },
  {
    label: "Retention",
    pain: "Job done. Never followed up. Client Googled someone else 6 months later.",
  },
];

interface Ball {
  x: number;
  y: number;
  released: boolean;
}

const BottleneckPipeline = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    // Geometry
    const TUBE_Y = Math.round(H * 0.53);
    const TUBE_H = 40;
    const TUBE_START = 68;
    const TUBE_END = W - 68;
    const TUBE_W = TUBE_END - TUBE_START;
    const NUM_STAGES = 6;
    const STAGE_W = TUBE_W / NUM_STAGES;
    const BALL_R = 6;
    const NORMAL_VX = 1.6;
    const FRAMES_PER_STAGE = 220;
    const SPAWN_EVERY = 20;
    const RELEASE_EVERY = 48;

    let frameCount = 0;
    let stageFrame = 0;
    let activeStage = 0;
    let textAlpha = 0;
    const balls: Ball[] = [];

    // Pre-seed balls spread across the tube
    for (let i = 0; i < 10; i++) {
      balls.push({
        x: TUBE_START + 10 + i * 68,
        y: TUBE_Y + (Math.random() - 0.5) * (TUBE_H - BALL_R * 3),
        released: false,
      });
    }

    const getPinchX = (stage: number) =>
      TUBE_START + (stage + 0.5) * STAGE_W;
    const getStopX = (stage: number) =>
      getPinchX(stage) - BALL_R * 2.6;

    const spawnBall = () => {
      balls.push({
        x: TUBE_START + BALL_R + 2,
        y: TUBE_Y + (Math.random() - 0.5) * (TUBE_H - BALL_R * 3),
        released: false,
      });
    };

    const releaseOneBall = () => {
      const stopX = getStopX(activeStage);
      const piled = balls.filter(
        (b) => !b.released && b.x >= stopX - STAGE_W * 0.5 && b.x <= stopX + BALL_R * 2
      );
      if (piled.length === 0) return;
      // Pick rightmost piled ball
      const chosen = piled.reduce((a, b) => (a.x > b.x ? a : b));
      chosen.released = true;
    };

    const updateBalls = () => {
      const pinchX = getPinchX(activeStage);
      const stopX = getStopX(activeStage);

      // Remove off-screen
      for (let i = balls.length - 1; i >= 0; i--) {
        if (balls[i].x > TUBE_END + 20) balls.splice(i, 1);
      }

      // Spawn
      if (frameCount % SPAWN_EVERY === 0 && balls.length < 28) {
        spawnBall();
      }

      // Release one ball through pinch periodically
      if (frameCount % RELEASE_EVERY === 0) {
        releaseOneBall();
      }

      // Move each ball
      for (const ball of balls) {
        // Check for blocker ball directly ahead
        let blocked = false;
        for (const other of balls) {
          if (other === ball) continue;
          if (
            other.x > ball.x &&
            other.x - ball.x < BALL_R * 2.3 &&
            Math.abs(other.y - ball.y) < BALL_R * 2.3
          ) {
            blocked = true;
            break;
          }
        }

        if (blocked) continue;

        if (!ball.released && ball.x >= stopX) {
          // Stacked at pinch — don't move
          continue;
        }

        // Released balls move at normal speed and clear their flag once past pinch
        if (ball.released && ball.x > pinchX + BALL_R * 5) {
          ball.released = false;
        }

        ball.x += NORMAL_VX;
      }
    };

    const drawTube = () => {
      const pinchX = getPinchX(activeStage);
      const PW = STAGE_W * 0.28; // half-width of pinch zone
      const PH = 9; // narrowest point half-height

      const top = TUBE_Y - TUBE_H / 2;
      const bot = TUBE_Y + TUBE_H / 2;

      ctx.beginPath();
      // Top edge
      ctx.moveTo(TUBE_START, top);
      ctx.lineTo(pinchX - PW, top);
      ctx.bezierCurveTo(
        pinchX - PW * 0.4, top,
        pinchX - PW * 0.15, TUBE_Y - PH,
        pinchX, TUBE_Y - PH
      );
      ctx.bezierCurveTo(
        pinchX + PW * 0.15, TUBE_Y - PH,
        pinchX + PW * 0.4, top,
        pinchX + PW, top
      );
      ctx.lineTo(TUBE_END, top);
      // Right cap
      ctx.arcTo(TUBE_END + TUBE_H / 2, top, TUBE_END + TUBE_H / 2, TUBE_Y, TUBE_H / 2);
      ctx.arcTo(TUBE_END + TUBE_H / 2, bot, TUBE_END, bot, TUBE_H / 2);
      // Bottom edge
      ctx.lineTo(pinchX + PW, bot);
      ctx.bezierCurveTo(
        pinchX + PW * 0.4, bot,
        pinchX + PW * 0.15, TUBE_Y + PH,
        pinchX, TUBE_Y + PH
      );
      ctx.bezierCurveTo(
        pinchX - PW * 0.15, TUBE_Y + PH,
        pinchX - PW * 0.4, bot,
        pinchX - PW, bot
      );
      ctx.lineTo(TUBE_START, bot);
      // Left cap
      ctx.arcTo(TUBE_START - TUBE_H / 2, bot, TUBE_START - TUBE_H / 2, TUBE_Y, TUBE_H / 2);
      ctx.arcTo(TUBE_START - TUBE_H / 2, top, TUBE_START, top, TUBE_H / 2);
      ctx.closePath();

      // Fill
      const fillGrad = ctx.createLinearGradient(0, top, 0, bot);
      fillGrad.addColorStop(0, "rgba(12,45,75,0.92)");
      fillGrad.addColorStop(1, "rgba(7,25,48,0.92)");
      ctx.fillStyle = fillGrad;
      ctx.fill();

      // Stroke
      ctx.strokeStyle = "rgba(14,155,166,0.45)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Orange pinch glow
      const glowGrad = ctx.createRadialGradient(
        pinchX, TUBE_Y, 2,
        pinchX, TUBE_Y, STAGE_W * 0.45
      );
      glowGrad.addColorStop(0, "rgba(255,90,20,0.55)");
      glowGrad.addColorStop(0.4, "rgba(255,90,20,0.2)");
      glowGrad.addColorStop(1, "rgba(255,90,20,0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(pinchX - STAGE_W * 0.5, TUBE_Y - TUBE_H, STAGE_W, TUBE_H * 2);

      // Orange pinch outline highlight
      ctx.beginPath();
      ctx.moveTo(pinchX - PW, top);
      ctx.bezierCurveTo(
        pinchX - PW * 0.4, top,
        pinchX - PW * 0.15, TUBE_Y - PH,
        pinchX, TUBE_Y - PH
      );
      ctx.bezierCurveTo(
        pinchX + PW * 0.15, TUBE_Y - PH,
        pinchX + PW * 0.4, top,
        pinchX + PW, top
      );
      ctx.lineTo(pinchX + PW, bot);
      ctx.bezierCurveTo(
        pinchX + PW * 0.4, bot,
        pinchX + PW * 0.15, TUBE_Y + PH,
        pinchX, TUBE_Y + PH
      );
      ctx.bezierCurveTo(
        pinchX - PW * 0.15, TUBE_Y + PH,
        pinchX - PW * 0.4, bot,
        pinchX - PW, bot
      );
      ctx.closePath();
      ctx.strokeStyle = "rgba(255,100,20,0.75)";
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const drawBalls = () => {
      for (const ball of balls) {
        const g = ctx.createRadialGradient(
          ball.x - BALL_R * 0.3, ball.y - BALL_R * 0.3, 1,
          ball.x, ball.y, BALL_R
        );
        g.addColorStop(0, "#6EE7F7");
        g.addColorStop(1, "#0A7A84");
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, BALL_R, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }
    };

    const drawLabels = () => {
      PIPELINE_STAGES.forEach((stage, i) => {
        const cx = TUBE_START + (i + 0.5) * STAGE_W;
        const isActive = i === activeStage;

        // Stage divider tick
        if (i > 0) {
          const divX = TUBE_START + i * STAGE_W;
          ctx.beginPath();
          ctx.moveTo(divX, TUBE_Y - TUBE_H / 2 - 2);
          ctx.lineTo(divX, TUBE_Y - TUBE_H / 2 - 9);
          ctx.strokeStyle = isActive
            ? "rgba(245,168,0,0.6)"
            : "rgba(14,155,166,0.3)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Active indicator dot
        if (isActive) {
          ctx.beginPath();
          ctx.arc(cx, TUBE_Y - TUBE_H / 2 - 21, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#F5A800";
          ctx.fill();
        }

        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        ctx.font = isActive
          ? "bold 13px -apple-system,sans-serif"
          : "12px -apple-system,sans-serif";
        ctx.fillStyle = isActive
          ? "#F5A800"
          : "rgba(170,200,220,0.65)";
        ctx.fillText(stage.label, cx, TUBE_Y - TUBE_H / 2 - 13);
      });
    };

    const drawPainText = () => {
      if (textAlpha <= 0.01) return;
      const stage = PIPELINE_STAGES[activeStage];
      const lines = stage.pain.split(". ").reduce<string[]>((acc, s, i) => {
        // Split into two lines at a natural break
        if (i === 0) return [s + "."];
        return [...acc.slice(0, -1), acc[acc.length - 1], s + (i < stage.pain.split(". ").length - 1 ? "." : "")];
      }, []);

      // Simpler: just use two lines split at midpoint
      const text = stage.pain;
      const midBreak = text.length > 55
        ? text.lastIndexOf(" ", Math.floor(text.length * 0.52))
        : text.length;
      const line1 = text.slice(0, midBreak);
      const line2 = text.slice(midBreak).trim();

      const baseY = TUBE_Y + TUBE_H / 2 + 20;

      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.font = "bold 13px -apple-system,sans-serif";
      ctx.fillStyle = `rgba(255,210,120,${textAlpha})`;
      ctx.fillText(line1, W / 2, baseY);

      if (line2) {
        ctx.font = "13px -apple-system,sans-serif";
        ctx.fillStyle = `rgba(175,205,225,${textAlpha})`;
        ctx.fillText(line2, W / 2, baseY + 19);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      frameCount++;
      stageFrame++;

      // Advance stage
      if (stageFrame >= FRAMES_PER_STAGE) {
        activeStage = (activeStage + 1) % NUM_STAGES;
        stageFrame = 0;
        textAlpha = 0;
        // Release stacked balls on stage change
        for (const b of balls) {
          b.released = false;
        }
      }

      // Fade in pain text
      if (stageFrame > 15) {
        textAlpha = Math.min(1, (stageFrame - 15) / 25);
      }

      updateBalls();
      drawTube();
      drawBalls();
      drawLabels();
      drawPainText();

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={900}
      height={220}
      style={{ width: "100%", height: "auto", display: "block" }}
      aria-label="Animated pipeline showing business bottlenecks"
    />
  );
};

// ── Scroll-reveal pain items ──────────────────────────────────
const PAIN_ITEMS = [
  {
    number: "01",
    label: "Lead Response",
    heading: "The lead came in on Friday. You called back Monday.",
    body: "By then they'd already booked your competitor. Not because your competitor was better. Because they responded in 11 minutes. Every day you don't have an automated response system, you're handing leads to whoever picks up the phone first.",
  },
  {
    number: "02",
    label: "Follow-Up",
    heading: "You followed up twice. Then you moved on.",
    body: "They bought from the company that followed up seven times across text, email, and a phone call. Your follow-up stopped when your patience ran out. Theirs runs on a system. The difference isn't effort. It's automation.",
  },
  {
    number: "03",
    label: "Sales & Closing",
    heading: "Your best rep closes at 40%. Your second closes at 22%.",
    body: "It's not talent. One has a repeatable process they run every single time. The other improvises. When your close rate depends on who answers the phone, your revenue is unpredictable. A consistent process fixes that.",
  },
  {
    number: "04",
    label: "Delivery",
    heading: "They signed. Nothing happened for four days.",
    body: "The client emailed on day two asking what the next step was. By day four they were already second-guessing their decision. You didn't lose them. But you cracked the foundation of the relationship in the first 96 hours. A simple automated onboarding flow costs almost nothing and changes everything.",
  },
];

const PainItem = ({
  item,
  idx,
}: {
  item: (typeof PAIN_ITEMS)[0];
  idx: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.unobserve(el);
        }
      },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isEven = idx % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(48px)",
        transition: `opacity 0.65s ease ${idx * 0.12}s, transform 0.65s ease ${idx * 0.12}s`,
      }}
      className={`flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 shadow-md md:flex-row md:items-start ${
        !isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Number badge */}
      <div className="flex-shrink-0">
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-red-500/10 border border-red-500/20">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400">
            {item.label}
          </span>
          <span className="text-2xl font-extrabold text-red-400 leading-none">
            {item.number}
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-bold md:text-2xl">{item.heading}</h3>
        <p className="text-muted-foreground leading-relaxed">{item.body}</p>
      </div>
    </div>
  );
};

// ── Main Home Component ───────────────────────────────────────
const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ── 1. HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[hsl(222_47%_11%)] py-24 md:py-32">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[hsl(186_100%_27%)] opacity-20 blur-[120px] animate-pulse" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-[400px] w-[400px] rounded-full bg-[hsl(42_100%_50%)] opacity-10 blur-[100px] animate-pulse" />

        <div className="container relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in space-y-8">
              <RotatingHeadline />
              <p className="max-w-xl text-lg text-slate-300 md:text-xl">
                You started this business for freedom. Instead you're the first
                one in, the last one out, and the one everything breaks without.
                We walk in, find the one thing costing you the most time, and
                fix it — so you can actually breathe again.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="hover-scale group"
                >
                  <Link to="/process-audit">
                    Book Free Bottleneck Assessment
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  style={{
                    background: "transparent",
                    border: "1.5px solid rgba(255,255,255,0.4)",
                    color: "white",
                  }}
                  size="lg"
                  className="hover-scale hover:bg-white/10"
                >
                  <Link to="/services">See How It Works</Link>
                </Button>
              </div>
              <p className="text-sm text-slate-400">
                Based in The Woodlands, TX · Serving service businesses across
                the U.S.
              </p>
            </div>

            <div className="animate-fade-in relative hidden lg:block">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-[hsl(186_100%_27%)]/30 to-[hsl(42_100%_50%)]/20 blur-xl" />
              <img
                src={businessChaos}
                alt="Overwhelmed business owner at a chaotic desk"
                className="relative rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. BOTTLENECK PIPELINE ANIMATION ──────────────────── */}
      <section className="bg-[hsl(222_47%_9%)] py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center animate-fade-in">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Every service business has the same six stages.
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
              Revenue is blocked at one of them right now. Watch what happens when we
              find it.
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <BottleneckPipeline />
          </div>
          <p className="mt-4 text-center text-xs text-slate-500 uppercase tracking-widest">
            ↑ The orange constriction moves to your bottleneck. Most businesses
            have 3–4 active at once.
          </p>
        </div>
      </section>

      {/* ── 3. SCROLLING PAIN SECTION ─────────────────────────── */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Here's where the hours are going.
            </h2>
            <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
              These aren't hypotheticals. These are the four bottlenecks we find
              in almost every service business doing $500K–$1M.
            </p>
          </div>

          <div className="space-y-6">
            {PAIN_ITEMS.map((item, i) => (
              <PainItem key={item.number} item={item} idx={i} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-lg font-semibold">
              One of these is your biggest bottleneck right now.
            </p>
            <Button
              asChild
              variant="accent"
              size="lg"
              className="hover-scale group"
            >
              <Link to="/process-audit">
                Let's Find Out Which One
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 4. SOLUTION SECTION ────────────────────────────────── */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 grid items-center gap-8 lg:grid-cols-2 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                We find the bottleneck. We fix it. Then we help you{" "}
                <span className="text-[hsl(186_100%_27%)]">breathe again.</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We don't come in and try to sell you software. We start by
                understanding your business — then we find what's actually
                bleeding your time and build the right fix around that.
              </p>
              <p className="text-muted-foreground">
                Sometimes that's AI. Sometimes it's automation. Sometimes it's
                just a system your team can actually follow. It depends on your
                bottleneck, not what we want to sell.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
              <img
                src={problemSolutionSplit}
                alt="Before and after: problem solved"
                className="rounded-2xl shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                icon: Phone,
                title: "Never Miss a Lead Again",
                description:
                  "24/7 response that never sleeps. Every call answered, every lead captured, every appointment booked automatically. Your phone stops being a missed opportunity.",
              },
              {
                icon: Zap,
                title: "Follow-Up That Never Stops",
                description:
                  "Every lead gets an immediate response. Automated sequences run on their own until the prospect converts. No lead falls through the cracks because nobody remembered to follow up.",
              },
              {
                icon: Settings,
                title: "Stop Doing It Manually",
                description:
                  "The repetitive tasks your team does every single day, automated. Less time on busywork. More time on work that actually moves revenue.",
              },
              {
                icon: BarChart3,
                title: "See What's Actually Happening",
                description:
                  "Real-time visibility into your operation. Know where your revenue is coming from, where it's leaking, and what needs attention before it becomes a problem.",
              },
              {
                icon: Bot,
                title: "Built for Your Business Specifically",
                description:
                  "Not a generic tool you buy and figure out. A system designed around how your business actually runs — your processes, your team, your customers.",
              },
            ].map(({ icon: Icon, title, description }, i) => (
              <Card
                key={i}
                className="hover-scale group relative overflow-hidden border-0 bg-card shadow-md transition-all hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[hsl(186_100%_27%)] to-[hsl(42_100%_50%)]" />
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-[hsl(186_100%_27%)]/10 p-3">
                    <Icon className="h-6 w-6 text-[hsl(186_100%_27%)]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="accent"
              size="lg"
              className="hover-scale group"
            >
              <Link to="/process-audit">
                Find Your Bottleneck for Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 5. NUMBERS SECTION ─────────────────────────────────── */}
      <section className="bg-[hsl(222_47%_11%)] py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              What happens when the bottleneck is gone.
            </h2>
            <p className="mt-3 text-slate-400">
              Real results from real businesses we've worked with.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                stat: "8–19 hrs",
                label: "saved per week, per automation built",
                icon: Clock,
              },
              {
                stat: "First fix in 7 days",
                label: "from first call to something live and working",
                icon: Zap,
              },
              {
                stat: "200–300%",
                label: "ROI on workflow automation",
                icon: TrendingUp,
              },
              {
                stat: "3–5x",
                label: "more client volume without adding headcount",
                icon: Users,
              },
            ].map(({ stat, label, icon: Icon }, i) => (
              <div
                key={i}
                className="hover-scale animate-fade-in rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
              >
                <Icon className="mx-auto mb-4 h-8 w-8 text-[hsl(42_100%_50%)]" />
                <div className="text-3xl font-extrabold text-white">{stat}</div>
                <div className="mt-2 text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. INDUSTRIES SECTION ──────────────────────────────── */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 grid items-center gap-8 lg:grid-cols-2 animate-fade-in">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                We work across industries. One thing stays the same.
              </h2>
              <p className="text-muted-foreground text-lg">
                Every business we help has a bottleneck. We find it, fix it, and
                build systems that keep it from coming back.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl h-72">
              <img
                src={industriesConnected}
                alt="Businesses we serve"
                className="rounded-2xl shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "HVAC and Home Services",
                pain: "After-hours calls go to voicemail. Leads book your competitor. Dispatch is still done by hand. We fix the response time and the scheduling chaos.",
                href: "/hvac",
                badge: "High Call Volume",
              },
              {
                title: "Healthcare and Medical Practices",
                pain: "Front desk is overwhelmed. Appointment reminders are manual. Patient follow-up falls off. We give you back time and reduce no-shows.",
                href: "/industries",
                badge: "Patient Experience",
              },
              {
                title: "Dental Practices",
                pain: "Scheduling gaps, missed recall outreach, and front desk juggling phones and walk-ins at the same time. We close those gaps automatically.",
                href: "/industries",
                badge: "Scheduling Bottleneck",
              },
              {
                title: "Assisted Living Facilities",
                pain: "Family communication, staff coordination, and documentation take hours that should go to residents. We automate the administrative load.",
                href: "/industries",
                badge: "Operations-Heavy",
              },
              {
                title: "Real Estate Teams",
                pain: "New leads come in from five different places and most get followed up on once. We make sure every lead gets the attention it needs until it converts.",
                href: "/realtor",
                badge: "Lead Conversion",
              },
              {
                title: "Professional Services",
                pain: "Proposals, contracts, onboarding, and reporting take more time than the actual client work. We automate the paper trail so you can focus on delivery.",
                href: "/industries/professional-services",
                badge: "Document-Heavy",
              },
              {
                title: "Manufacturing and Distribution",
                pain: "Job orders, inventory updates, and supplier coordination still done by hand. Reporting takes hours. We cut that down to minutes.",
                href: "/industries/manufacturing",
                badge: "Workflow Automation",
              },
              {
                title: "Field Service Companies",
                pain: "Dispatch, scheduling, invoicing, and follow-up all fall on the same two people. We build systems that handle the coordination so they can focus on the jobs.",
                href: "/industries/field-service",
                badge: "Scheduling and Billing",
              },
              {
                title: "Law Firms",
                pain: "Intake is slow. Client communication is inconsistent. Billing and document management eat hours every week. We tighten the entire operation.",
                href: "/industries",
                badge: "Client Intake",
              },
            ].map(({ title, pain, href, badge }, i) => (
              <Link key={i} to={href} className="group block">
                <Card className="hover-scale h-full border-0 bg-card shadow-md transition-all group-hover:shadow-xl">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-[hsl(186_100%_27%)]/10 text-[hsl(186_100%_27%)]">
                      {badge}
                    </Badge>
                    <h3 className="mb-2 text-lg font-bold">{title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      {pain}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-medium text-[hsl(186_100%_27%)] transition-transform group-hover:translate-x-1">
                      See how we help
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. HOW IT WORKS ────────────────────────────────────── */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How it works
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              No long discovery phases. No vague proposals. You know exactly
              what you're getting before we start, and you see results fast.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative space-y-8">
              {[
                {
                  step: "01",
                  title: "Business Bottleneck Assessment",
                  description:
                    "We spend time understanding how your business actually operates and find your biggest constraint. You walk away with a clear map of where time and money are leaking — whether you work with us or not.",
                },
                {
                  step: "02",
                  title: "Solution Design",
                  description:
                    "We figure out the right combination of AI, automation, and workflows for your specific situation. No cookie-cutter approaches. The fix fits your business, your tools, and your team.",
                },
                {
                  step: "03",
                  title: "We Build and Deploy",
                  description:
                    "We build the system and get it running. Most clients have their first fix live in under 7 days. We connect to your existing tools — you don't need to buy new software.",
                },
                {
                  step: "04",
                  title: "We Keep Improving It",
                  description:
                    "Once the system is live, we monitor performance, track results, and make adjustments. The goal isn't a one-time fix — it's a business that runs better every month.",
                },
              ].map(({ step, title, description }, i) => (
                <div
                  key={i}
                  className="hover-scale flex gap-8 rounded-2xl bg-card p-8 shadow-md"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(186_100%_27%)] text-lg font-extrabold text-white">
                      {step}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl h-full min-h-[400px] hidden lg:block">
              <img
                src={buildCollaboration}
                alt="Building your automation solution"
                className="rounded-2xl shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. WHY US SECTION ──────────────────────────────────── */}
      <section className="bg-background py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Business first. Technology second.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-lg">
              We don't show up with a product to sell. We show up to understand
              your operation and find what's actually holding it back. Then we
              build the right fix for that specific problem.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: CheckCircle,
                title: "We find the real problem first.",
                body: "Most companies skip this and jump straight to selling you a tool. We don't. Every engagement starts with understanding your business before recommending anything.",
              },
              {
                icon: FileText,
                title: "You own everything we build.",
                body: "No platform lock-in. No ongoing fees to us. The systems, workflows, and automations are all yours. We document everything and train your team.",
              },
              {
                icon: TrendingUp,
                title: "Your first fix in 7 days.",
                body: "We move fast. Most clients have something live and working within the first week. We scope the work upfront so there are no surprises halfway through.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <div
                key={i}
                className="hover-scale rounded-2xl border bg-card p-8 shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[hsl(186_100%_27%)]/10 p-3">
                  <Icon className="h-6 w-6 text-[hsl(186_100%_27%)]" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-16 animate-fade-in flex flex-col items-center gap-6 rounded-2xl border border-[hsl(186_100%_27%)]/20 bg-[hsl(186_100%_27%)]/5 p-10 shadow-lg max-w-3xl mx-auto text-center">
            <img
              src={guaranteeBadge}
              alt="Guarantee badge"
              className="h-24 w-24 object-contain"
            />
            <div>
              <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                Our Assessment Guarantee
              </h3>
              <p className="text-lg text-muted-foreground">
                If we can't find{" "}
                <span className="font-semibold text-foreground">
                  at least 5 bottlenecks worth fixing
                </span>{" "}
                in your business, the assessment is completely free. No pitch.
                No pressure. Just an honest look at your operation.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {["No obligation", "60-minute session", "Written findings"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-[hsl(186_100%_27%)]"
                  >
                    <CheckCircle className="h-4 w-4" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ───────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(186_100%_27%)] via-[hsl(186_80%_20%)] to-[hsl(222_47%_11%)]" />
        <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-[hsl(42_100%_50%)] opacity-20 blur-[80px] animate-pulse" />

        <div className="container relative mx-auto max-w-3xl px-6 text-center">
          <div className="animate-fade-in space-y-6">
            <h2 className="text-4xl font-extrabold text-white md:text-5xl">
              You've been working in it. Let's work on it.
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Book your Free Bottleneck Assessment. We'll find the one thing
              costing you the most time right now — and show you how to fix it
              in 7 days.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="hover-scale group px-10 text-base"
              >
                <Link to="/process-audit">
                  Book Free Bottleneck Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                style={{
                  background: "transparent",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  color: "white",
                }}
                className="hover-scale hover:bg-white/10"
              >
                <a href="tel:+17135176792">Call (713) 517-6792</a>
              </Button>
            </div>
            <p className="text-sm text-white/50">
              The Woodlands, TX · Response within 1 business day
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
