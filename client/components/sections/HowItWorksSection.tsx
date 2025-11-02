import { Scale, Zap, CircuitBoard } from "lucide-react";

const items = [
  {
    icon: Scale,
    title: "Ethical by Design",
    text: "Fair, transparent models with human oversight.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    text: "Efficient coding and renewable-powered servers.",
  },
  {
    icon: CircuitBoard,
    title: "Explainable & Open",
    text: "Explainable AI and open data where possible.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="path" className="relative py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          My Path to Climate Action
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-xl border bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 shadow-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-700/10 text-emerald-700">
                <it.icon className="h-5 w-5 text-emerald-700" />
              </div>
              <h3 className="mt-3 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
        <ul className="mt-6 list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>Efficient coding</li>
          <li>Renewable-powered servers</li>
          <li>Explainable AI</li>
          <li>Open data use</li>
        </ul>
      </div>
    </section>
  );
}
