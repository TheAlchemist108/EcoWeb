import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Leaf, CircuitBoard } from "lucide-react";

export function SiteHeader() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-2">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-sm">
            <CircuitBoard className="absolute -right-1 -bottom-1 h-3 w-3 opacity-70" />
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight">EcoAI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "path", label: "My Path" },
            { id: "blog", label: "Blog" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={cn("hidden sm:inline-flex shadow-sm", isHome ? "bg-primary" : "")}
          >
            Let’s Make an Impact Together
          </Button>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
