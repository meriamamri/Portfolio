"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent } from "react";

const HeroProfile: FunctionComponent = () => {
  return (
    <div className="flex items-center justify-center mb-6">
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
          <Image
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="John Doe"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full py-1 px-3 text-sm font-medium"
        >
          Available
        </motion.div>
      </div>
    </div>
  );
};

export default HeroProfile;
