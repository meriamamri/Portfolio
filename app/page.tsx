import AboutSection from "@/components/aboutSection";
import ContactSection from "@/components/contactSection";
import ProjectsSection from "@/components/projectsSection";
import SkillsSection from "@/components/skillsSection";

export default function Home() {
  return (
    <div>
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
