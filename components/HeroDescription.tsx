"use client";

import { motion } from "framer-motion";
import { FunctionComponent } from "react";

const HeroDescription: FunctionComponent = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
    >
      I craft responsive websites where technology meets creativity. With a
      strong focus on React and Next.js, I build accessible, inclusive products
      and digital experiences for the web.
    </motion.p>
  );
};

export default HeroDescription;
