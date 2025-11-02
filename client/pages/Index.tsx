import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Index() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <HowItWorksSection />
      <BlogPreviewSection />
      <ContactSection />
    </main>
  );
}
