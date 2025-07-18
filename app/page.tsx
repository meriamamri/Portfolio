import AboutSection from "@/components/aboutSection";
import ContactSection from "@/components/contactSection";
import Hero from "@/components/hero";
import ProjectsSection from "@/components/projectsSection";
import SkillsSection from "@/components/skillsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
