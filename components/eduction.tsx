import { Award, Briefcase } from "lucide-react";
import { FunctionComponent } from "react";

const Education: FunctionComponent = () => (
  <div className="mt-8">
    <h3 className="text-xl font-bold mb-4">Education</h3>
    <div className="relative pl-8 border-l border-border">
      <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-primary" />
      <h4 className="font-medium">BSc in Computer Science</h4>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
        <Award className="w-4 h-4" />
        <span>New York University</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
        <Briefcase className="w-4 h-4" />
        <span>2014 - 2018</span>
      </div>
    </div>
  </div>
);

export default Education;
