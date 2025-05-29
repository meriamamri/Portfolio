import { Briefcase, Building } from "lucide-react";
import { FunctionComponent } from "react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem: FunctionComponent<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
}) => {
  return (
    <div className="relative pl-8 border-l border-border">
      <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-primary" />
      <h4 className="font-medium">{title}</h4>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
        <Building className="w-4 h-4" />
        <span>{company}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
        <Briefcase className="w-4 h-4" />
        <span>{period}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-6">{description}</p>
    </div>
  );
};
export default ExperienceItem;
