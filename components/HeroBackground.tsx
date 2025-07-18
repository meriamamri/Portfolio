import { FunctionComponent } from "react";

const HeroBackground: FunctionComponent = () => {
  return (
    <>
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[40rem] h-[40rem] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
      </div>
    </>
  );
};

export default HeroBackground;
