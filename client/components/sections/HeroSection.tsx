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
                <rect x="38" y="38" width="4" height="4" fill="currentColor" />
                <rect x="-2" y="38" width="4" height="4" fill="currentColor" />
                <rect x="78" y="38" width="4" height="4" fill="currentColor" />
                <rect x="38" y="-2" width="4" height="4" fill="currentColor" />
                <rect x="38" y="78" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>

      <div className="container relative pt-6 md:pt-8 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="pt-2">
            <h1 className="text-[clamp(2.25rem,7.5vw,5.5rem)] md:text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-tight text-emerald-900 whitespace-nowrap mt-0">
              Kaustubh Ramekar
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-emerald-800">
              Passionate environmentalist and advocate for clean energy, dedicated to building a sustainable future.
            </p>
            <p className="mt-2 max-w-2xl text-base md:text-lg text-emerald-800">
              Innovating for a greener world with AI, leveraging artificial intelligence to protect nature, conserve energy, and drive lasting sustainable change.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-400/30 via-emerald-400/20 to-emerald-300/20 blur-2xl" />
            <div className="relative aspect-square bg-gradient-to-b from-emerald-700 to-emerald-600 p-4 shadow-2xl ring-1 ring-inset ring-emerald-500/20 overflow-hidden">
              <div className="absolute inset-4 border-2 border-emerald-600/20" />
              <div className="absolute inset-10 border border-emerald-500/10" />

              {/* center graphic removed */}

              <img src="/leaf.svg" alt="Leaf" className="absolute left-6 top-8 h-8 w-8 opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
