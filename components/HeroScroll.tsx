"use client";

import { ArrowDown } from "lucide-react";
import { FunctionComponent } from "react";

const HeroScroll: FunctionComponent = () => {
  return (
    <a
      href="#projects"
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <ArrowDown className="w-6 h-6 text-muted-foreground" />
    </a>
  );
};

export default HeroScroll;
