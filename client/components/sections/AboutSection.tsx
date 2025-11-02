import { ShieldCheck, BadgeCheck, Scale, Cpu } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20">
      <div className="container grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Eco-Driven Mission</h2>
          <p className="mt-4 text-emerald-800 max-w-2xl">
            I’m a software engineer committed to applying artificial intelligence for the planet. My mission is to build systems that reduce environmental impact, conserve energy, and support biodiversity.
          </p>
          <p className="mt-3 text-emerald-800 max-w-2xl">
            Core values guide my work: responsible AI, measurable impact, and transparency.
          </p>
          <ul className="mt-6 grid gap-3 text-sm">
            <li className="flex items-center gap-3 text-emerald-700"><ShieldCheck className="h-5 w-5 text-emerald-700" /> Responsible AI</li>
            <li className="flex items-center gap-3 text-emerald-700"><BadgeCheck className="h-5 w-5 text-emerald-700" /> Measurable outcomes</li>
            <li className="flex items-center gap-3 text-emerald-700"><Scale className="h-5 w-5 text-emerald-700" /> Fairness and transparency</li>
            <li className="flex items-center gap-3 text-emerald-700"><Cpu className="h-5 w-5 text-emerald-700" /> Tech that serves nature</li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <img src="/tree.svg" alt="Tree illustration" className="w-full rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}
