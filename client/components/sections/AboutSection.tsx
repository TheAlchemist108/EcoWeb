import { BadgeCheck, ShieldCheck, Scale, Cpu } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-emerald-500/10 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-teal-500/10 to-transparent" />
      </div>
      <div className="container grid gap-10 md:grid-cols-2 items-center">
        <div className="relative order-2 md:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-emerald-700/10 bg-gradient-to-b from-emerald-200/50 to-emerald-100/20 p-3 shadow-lg">
            <img src="/tree.svg" alt="Portrait" className="relative h-full w-full rounded-xl object-cover" />
            <div className="absolute inset-0 pointer-events-none">
              <svg aria-hidden viewBox="0 0 400 500" className="h-full w-full text-emerald-800/8">
                <defs>
                  <pattern id="nodes" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="4" cy="4" r="2" fill="currentColor" />
                    <line x1="4" y1="4" x2="40" y2="4" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="4" y1="4" x2="4" y2="40" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#nodes)" />
              </svg>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Eco-Driven Mission</h2>
          <p className="mt-4 text-muted-foreground">
            I’m a software engineer committed to applying artificial intelligence for the planet. My mission is to build systems that reduce environmental impact, conserve energy, and support biodiversity.
          </p>
          <p className="mt-3 text-muted-foreground">
            Core values guide my work: responsible AI, measurable impact, and transparency.
          </p>
          <ul className="mt-6 grid gap-3 text-sm">
            <li className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-emerald-600" /> Responsible AI</li>
            <li className="flex items-center gap-3"><BadgeCheck className="h-5 w-5 text-emerald-600" /> Measurable outcomes</li>
            <li className="flex items-center gap-3"><Scale className="h-5 w-5 text-emerald-600" /> Fairness and transparency</li>
            <li className="flex items-center gap-3"><Cpu className="h-5 w-5 text-emerald-600" /> Tech that serves nature</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
