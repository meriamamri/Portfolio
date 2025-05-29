import { experiences } from "@/Data/experiences";
import ExperienceItem from "@/components/experienceItem";
import { FunctionComponent } from "react";

const WorkExperience: FunctionComponent = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold mb-4">Work Experience</h3>
    {experiences.map((exp, index) => (
      <ExperienceItem
        key={index}
        title={exp.title}
        company={exp.company}
        period={exp.period}
        description={exp.description}
      />
    ))}
  </div>
);

export default WorkExperience;
