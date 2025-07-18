"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FunctionComponent } from "react";

const HeroActions: FunctionComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4"
    >
      <Button size="lg" asChild>
        <a href="#contact">Get In Touch</a>
      </Button>
      <Button variant="outline" size="lg" asChild>
        <a href="#projects">View My Work</a>
      </Button>
    </motion.div>
  );
};

export default HeroActions;
