import { highlights } from "@/Data/highlights";
import { FunctionComponent } from "react";

const ProfileHighlights: FunctionComponent = () => (
  <div className="flex flex-wrap gap-4 mb-8">
    {highlights.map(({ Icon, text }, index) => (
      <div
        key={index}
        className="flex items-center gap-2 text-sm text-muted-foreground"
      >
        <Icon className="w-4 h-4" />
        <span>{text}</span>
      </div>
    ))}
  </div>
);

export default ProfileHighlights;
