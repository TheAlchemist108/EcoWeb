import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-emerald-100/60 to-transparent" />
      </div>
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Collaborate with Me
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          I welcome collaborations with like-minded individuals, NGOs, and
          companies. Let’s create tangible climate impact together.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => (window.location.href = "mailto:hello@example.com")}
          >
            Let’s Make an Impact Together
          </Button>
        </div>
      </div>
    </section>
  );
}
