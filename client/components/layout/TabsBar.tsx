import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "about", label: "My Journey" },
  { id: "contact", label: "Join Hands" },
];

export default function TabsBar() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    tabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(t.id);
          });
        },
        { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="w-full border-b border-border bg-background/60 backdrop-blur-sm">
      <div className="container flex items-center gap-4 overflow-x-auto py-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              const el = document.getElementById(t.id) || document.getElementById("about");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all",
              active === t.id
                ? "bg-emerald-700 text-white shadow-md"
                : "text-foreground/80 hover:text-foreground"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
