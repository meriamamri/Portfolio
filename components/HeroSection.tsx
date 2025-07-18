import { ReactNode } from "react";

const HeroSection = ({ children }: { children: ReactNode }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 pb-12 overflow-hidden"
    >
      {children}
    </section>
  );
};

export default HeroSection;
