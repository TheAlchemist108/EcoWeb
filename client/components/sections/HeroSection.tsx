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
            <p className="text-sm font-medium text-emerald-800">Kaustubh Ramekar</p>
            <div className="inline-flex items-center gap-2 mt-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-700 ring-1 ring-inset ring-emerald-500/20">
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
            <div className="relative aspect-square rounded-full bg-gradient-to-b from-emerald-700 to-emerald-600 p-4 shadow-2xl ring-1 ring-inset ring-emerald-500/20 overflow-hidden">
              <div className="absolute inset-4 rounded-full border-2 border-emerald-600/20" />
              <div className="absolute inset-10 rounded-full border border-emerald-500/10" />

              <div className="absolute inset-6 grid place-items-center">
                <img src="/earth.svg" alt="Earth" className="h-full w-full object-contain rounded-full" />
              </div>

              <img src="/leaf.svg" alt="Leaf" className="absolute left-6 top-8 h-8 w-8 opacity-90" />
              <img src="/tree.svg" alt="Tree" className="absolute left-10 bottom-10 h-14 w-14 opacity-95" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
