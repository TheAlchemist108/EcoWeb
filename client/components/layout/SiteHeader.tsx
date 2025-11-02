import { useLocation } from "react-router-dom";

export function SiteHeader() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        {/* Branding removed as requested — spacer kept for layout */}
        <div className="h-8 w-8" aria-hidden />
        <div />
      </div>
    </header>
  );
}

export default SiteHeader;
