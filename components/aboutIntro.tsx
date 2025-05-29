import { aboutData } from "@/Data/aboutData";
import Description from "@/components/ui/description";
import Title from "@/components/ui/title";
import ProfileHighlights from "@/components/profileHighlights";
import { Button } from "@/components/ui/button";
import { FunctionComponent } from "react";

const AboutIntro: FunctionComponent = () => (
  <>
    <Title title="About me" />
    {aboutData.map((data) => (
      <Description
        key={data.id}
        className="text-muted-foreground mb-6"
        description={data.description}
      />
    ))}
    <div className="flex flex-wrap gap-4 mb-8">
      <ProfileHighlights />
    </div>
    <Button className="w-fit" asChild>
      <a href="#contact">Contact Me</a>
    </Button>
  </>
);

export default AboutIntro;
