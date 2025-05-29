import { FunctionComponent } from "react";
import AboutIntro from "@/components/aboutIntro";
import Education from "@/components/eduction";
import WorkExperience from "@/components/workExperience";

const AboutSection: FunctionComponent = () => (
  <section id="about" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <AboutIntro />
        <WorkExperience />
        <Education />
      </div>
    </div>
  </section>
);

export default AboutSection;
