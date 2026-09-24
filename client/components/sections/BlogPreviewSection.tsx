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
      <svg
        aria-hidden
        viewBox="0 0 400 160"
        className="absolute inset-0 h-full w-full text-emerald-900/10"
      >
        <defs>
          <pattern
            id={`mesh-${index}`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 20H40M20 0V40"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            <rect x="18" y="18" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#mesh-${index})`} />
      </svg>
    </div>
  );
}

const CISL_LINKEDIN =
  "https://www.linkedin.com/company/cambridge-institute-for-sustainability-leadership-education/";

function FeaturedPost() {
  const link = (label: string) => (
    <a
      href={CISL_LINKEDIN}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-emerald-700 hover:underline"
    >
      {label}
    </a>
  );
  return (
    <article
      id="cisl-canopy-2026"
      className="mt-8 overflow-hidden rounded-xl border bg-card shadow-sm"
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">Collaboration</Badge>
          <Badge variant="secondary">Climate Resilience</Badge>
        </div>
        <h3 className="mt-3 text-2xl md:text-3xl font-bold leading-tight tracking-tight">
          Where Innovation Meets Impact: Presenting at CISL Canopy, Cambridge
        </h3>
        <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/80">
          <p>
            Earlier this year, I got the kind of opportunity that reminds you
            why you started building in the first place: a truly enriching day
            at the{" "}
            {link("Cambridge Institute for Sustainability Leadership (CISL)")},
            where innovation meets impact.
          </p>
          <p>
            Our team had the opportunity to present our AI-driven solutions
            aimed at advancing climate resilience and improving societal
            response systems. It was inspiring to exchange ideas with
            researchers and sustainability leaders on how AI, data and
            human-centred design can strengthen community resilience during
            crises.
          </p>
          <p>
            A big part of what made the day so valuable was the chance to meet
            the CISL Canopy team, who hosted us at The Entopia Building, 1
            Regent Street, Cambridge, CB2 1GG:
          </p>
          <ul className="space-y-2 pl-1">
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-emerald-600" />
              <span>
                <strong className="text-foreground">Joanna Gabryel</strong>,
                Canopy Operations Manager, CISL Canopy, University of Cambridge
                Institute for Sustainability Leadership
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-emerald-600" />
              <span>
                <strong className="text-foreground">Zoë Loughlin</strong>,
                Canopy Programme Manager, CISL Canopy
              </span>
            </li>
          </ul>
          <p>
            Grateful to both of them, and to {link("CISL")}, for hosting us and
            providing such an engaging environment for collaboration and
            learning. This marks the start of our new journey together, and
            we&apos;re excited about the long-term collaboration opportunities
            ahead.
          </p>
          <p>
            Challenging times remind us why technology should serve humanity,
            enabling faster, smarter and more coordinated responses when it
            matters most.
          </p>
        </div>
      </div>
      <img
        src="/images/1772746915353.jpg"
        alt="With the CISL Canopy team at the Canopy Lounge, The Entopia Building, Cambridge"
        className="h-auto w-full object-contain"
        loading="lazy"
      />
    </article>
  );
}

export default function BlogPreviewSection() {
  return (
    <section id="blog" className="relative py-20">
      <div className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)]">
        <svg
          aria-hidden
          viewBox="0 0 1200 600"
          className="h-full w-full text-emerald-600/10"
        >
          <defs>
            <pattern
              id="waves"
              width="80"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 20 C 20 0, 60 40, 80 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Blog</h2>
        <FeaturedPost />
        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
          {posts.map((p, i) => (
            <article
              key={p.title}
              className="mb-6 break-inside-avoid rounded-xl border bg-card p-4 shadow-sm"
            >
              <Cover index={i} />
              <div className="mt-4 flex items-center gap-2">
                <Badge variant="secondary">{p.tag}</Badge>
              </div>
              <h3 className="mt-2 text-lg font-semibold leading-snug">
                {p.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
