import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
