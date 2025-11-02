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
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight text-emerald-900">
              Kaustubh Ramekar
            </h1>
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
