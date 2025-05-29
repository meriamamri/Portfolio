import { Skill } from "@/types/Skill";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FunctionComponent } from "react";

interface ToolCardProps {
  skill: Skill;
}

const ToolCard: FunctionComponent<ToolCardProps> = ({ skill }) => {
  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-all duration-300 hover:scale-105">
      <CardContent className="p-4 flex flex-col items-center justify-center">
        <div
          className="w-12 h-12 flex items-center justify-center mb-3"
          style={{ color: skill.color }}
        >
          <Image
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain"
            width={100}
            height={100}
          />
        </div>
        <span className="text-sm font-medium">{skill.name}</span>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
