import { Badge } from "@/components/ui/badge";

const posts = [
  {
    title: "AI and Reforestation: Targeting Areas that Matter",
    tag: "Forests",
  },
  {
    title: "Optimizing Energy with ML in Smart Buildings",
    tag: "Energy",
  },
  {
    title: "Open Datasets for Transparent Climate Models",
    tag: "Open Data",
  },
  {
    title: "Explaining Predictions to Build Trust",
    tag: "Explainability",
  },
];

function Cover({ index }: { index: number }) {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-md">
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-emerald-400/20 to-emerald-300/10" />
      <svg aria-hidden viewBox="0 0 400 160" className="absolute inset-0 h-full w-full text-emerald-900/10">
        <defs>
          <pattern id={`mesh-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20H40M20 0V40" stroke="currentColor" strokeWidth="0.6" />
            <rect x="18" y="18" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#mesh-${index})`} />
      </svg>
    </div>
  );
}

export default function BlogPreviewSection() {
  return (
    <section id="blog" className="relative py-20">
      <div className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)]">
        <svg aria-hidden viewBox="0 0 1200 600" className="h-full w-full text-emerald-600/10">
          <defs>
            <pattern id="waves" width="80" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 C 20 0, 60 40, 80 20" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Green Tech Perspectives</h2>
        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
          {posts.map((p, i) => (
            <article key={p.title} className="mb-6 break-inside-avoid rounded-xl border bg-card p-4 shadow-sm">
              <Cover index={i} />
              <div className="mt-4 flex items-center gap-2">
                <Badge variant="secondary">{p.tag}</Badge>
              </div>
              <h3 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
