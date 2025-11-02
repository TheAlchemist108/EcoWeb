import { Leaf, Github, Linkedin, Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="absolute inset-0 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <svg
          aria-hidden
          viewBox="0 0 1200 200"
          className="h-full w-full text-emerald-600/10"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container relative py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white">
            <Leaf className="h-5 w-5" />
          </span>
          <p>
            © {new Date().getFullYear()} EcoAI. Innovating for a greener
            future.
          </p>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="mailto:hello@example.com"
            className="hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-foreground" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-foreground" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
