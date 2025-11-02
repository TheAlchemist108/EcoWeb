import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SatelliteDish, Leaf, Cloud } from "lucide-react";

const projects = [
  {
    title: "Forest Health from Space",
    icon: SatelliteDish,
    desc: "Using satellite imagery and ML to detect deforestation risks and prioritize conservation.",
  },
  {
    title: "Smart Energy Optimizer",
    icon: Leaf,
    desc: "AI-driven recommendations that reduce building energy use and carbon emissions.",
  },
  {
    title: "Open Eco Data Cloud",
    icon: Cloud,
    desc: "Aggregating public datasets with explainable models for transparent climate insights.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)]">
        <svg aria-hidden viewBox="0 0 1200 600" className="h-full w-full text-emerald-700/10">
          <defs>
            <pattern id="network" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="8" cy="8" r="2" fill="currentColor" />
              <circle cx="72" cy="72" r="2" fill="currentColor" />
              <line x1="8" y1="8" x2="72" y2="72" stroke="currentColor" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Milestones in Sustainability</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} className="group border-emerald-900/10 bg-card/70 backdrop-blur-sm">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-600/10 text-emerald-700">
                  <p.icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-2 text-xl">{p.title}</CardTitle>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              <CardContent />
              <CardFooter>
                <Button className="group-hover:shadow-emerald-600/20 group-hover:shadow-lg">Explore Project</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
