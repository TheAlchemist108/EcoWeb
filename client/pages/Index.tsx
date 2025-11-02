import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import AchievementsSection from "@/components/sections/AchievementsSection";

export default function Index() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
