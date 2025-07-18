"use client";

import { motion } from "framer-motion";
import { FunctionComponent } from "react";

const HeroTitle: FunctionComponent = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
      >
        <span className="inline-block">Hi, I&apos;m </span>
        <span className="inline-block text-primary">John Doe</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative mb-6"
      >
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
          Front-End Developer specializing in building exceptional digital
          experiences
        </h2>
      </motion.div>
    </>
  );
};

export default HeroTitle;
