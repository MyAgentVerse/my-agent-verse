import { useState, useRef, useEffect } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3EiUlUEgiXimzeT2NbKu5Xoc3WF";

const scenes = [
  {
    label: "Step 1",
    title: "The problem you're living with",
    sub: "Manual processes stealing your team's best hours — every single week.",
    src: `${CDN}/hf_20260608_011634_7d3636dc-c08c-4a77-b0a0-9fb69654ba05.mp4`,
  },
  {
    label: "Step 2",
    title: "The 30-minute audit call",
    sub: "We map your top pain points, rank them by ROI, and show you exactly what's worth fixing.",
    src: `${CDN}/hf_20260608_011637_e15d1bd5-f328-485c-b482-155bf96a12ee.mp4`,
  },
  {
    label: "Step 3",
    title: "You walk away with a clear plan",
    sub: "Written findings delivered same day. No pitch, no pressure — just your roadmap.",
    src: `${CDN}/hf_20260608_011825_67e8a17f-aebd-4481-a223-8d4620ea94cb.mp4`,
  },
];

export default function ProcessAuditVideo() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    if (playing) v.play().catch(() => setPlaying(false));
  }, [current]);

  const goTo = (i: number) => {
    setCurrent(Math.max(0, Math.min(scenes.length - 1, i)));
    setPlaying(true);
  };

  const handleEnded = () => {
    if (current < scenes.length - 1) {
      goTo(current + 1);
    } else {
      setPlaying(false);
    }
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const scene = scenes[current];

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[hsl(222_47%_11%)]">
      {/* Video */}
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          key={current}
          className="w-full h-full object-cover"
          onEnded={handleEnded}
          playsInline
          muted
        >
          <source src={scene.src} type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_47%_11%)]/90 via-transparent to-transparent" />

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[hsl(186_100%_27%)] text-white mb-3">
            {scene.label}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-1">
            {scene.title}
          </h3>
          <p className="text-sm text-white/70 max-w-lg">{scene.sub}</p>
        </div>

        {/* Play/pause button */}
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-0 hover:opacity-100 focus:opacity-100"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
        </button>
      </div>

      {/* Step controls */}
      <div className="flex items-center justify-between px-5 py-4">
        {/* Step dots */}
        <div className="flex items-center gap-2">
          {scenes.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-2 bg-[hsl(42_100%_50%)]"
                  : i < current
                  ? "w-2 h-2 bg-[hsl(186_100%_27%)]"
                  : "w-2 h-2 bg-white/20"
              }`}
              aria-label={s.label}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-xs text-white/40 min-w-[40px] text-center">
            {current + 1} / {scenes.length}
          </span>
          <button
            onClick={() => goTo(current + 1)}
            disabled={current === scenes.length - 1}
            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
