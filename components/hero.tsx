"use client";

import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import HeroBackground from "./HeroBackground";
import HeroProfile from "./HeroProfile";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroActions from "./HeroActions";
import HeroSocial from "./HeroSocial";
import HeroScroll from "./HeroScroll";
import { FunctionComponent } from "react";

const Hero: FunctionComponent = () => {
  return (
    <HeroSection>
      <HeroBackground />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <HeroProfile />
          <HeroTitle />
          <HeroDescription />
          <HeroActions />
          <HeroSocial />
        </motion.div>
      </div>
      <HeroScroll />
    </HeroSection>
  );
};

export default Hero;
