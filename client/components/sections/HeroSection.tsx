import { Button } from "@/components/ui/button";
import { Globe2, Leaf, Zap, TreePine, SatelliteDish, Cloud, CircuitBoard } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-emerald-300/10 to-amber-200/20" />
        <div className="absolute inset-0 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
          <svg aria-hidden viewBox="0 0 1200 800" className="h-full w-full text-emerald-700/20">
            <defs>
              <pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M0 40H80M40 0V80" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                <circle cx="40" cy="40" r="2" fill="currentColor" />
                <circle cx="0" cy="40" r="2" fill="currentColor" />
                <circle cx="80" cy="40" r="2" fill="currentColor" />
                <circle cx="40" cy="0" r="2" fill="currentColor" />
                <circle cx="40" cy="80" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>

      <div className="container relative py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-700 ring-1 ring-inset ring-emerald-500/20">
              <CircuitBoard className="h-3.5 w-3.5" />
              Environmentalist Using AI for Good
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Innovating for a Greener Future with AI
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Harnessing artificial intelligence to protect nature, save energy, and drive sustainable change.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="shadow-lg shadow-emerald-600/20"
              >
                Let’s Make an Impact Together
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-emerald-400/30 via-teal-300/20 to-amber-300/20 blur-2xl" />
            <div className="relative aspect-square rounded-full bg-gradient-to-b from-emerald-600 to-green-700 p-6 shadow-2xl ring-1 ring-inset ring-emerald-400/30">
              <div className="absolute inset-6 rounded-full border-2 border-emerald-300/40" />
              <div className="absolute inset-12 rounded-full border border-emerald-200/30" />
              <svg viewBox="0 0 200 200" className="absolute inset-0 m-auto h-5/6 w-5/6 opacity-60">
                <defs>
                  <clipPath id="globeClip">
                    <circle cx="100" cy="100" r="90" />
                  </clipPath>
                </defs>
                <g clipPath="url(#globeClip)" stroke="hsl(var(--foreground))" strokeOpacity="0.25" strokeWidth="0.6">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <circle key={i} cx="100" cy="100" r={20 + i * 10} fill="none" />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <path key={i} d={`M0 ${30 + i * 20} C 50 ${10 + i * 20}, 150 ${50 + i * 20}, 200 ${30 + i * 20}`} fill="none" />
                  ))}
                </g>
              </svg>
              <div className="absolute inset-0 grid place-items-center text-emerald-200/90">
                <Globe2 className="h-28 w-28" />
              </div>
              <Leaf className="absolute left-6 top-8 h-8 w-8 text-emerald-200" />
              <Zap className="absolute right-8 top-10 h-7 w-7 text-yellow-200" />
              <Trees className="absolute left-10 bottom-10 h-8 w-8 text-green-200" />
              <SatelliteDish className="absolute right-10 bottom-8 h-8 w-8 text-emerald-100" />
              <Cloud className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-7 w-7 text-emerald-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
