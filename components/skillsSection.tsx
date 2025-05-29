"use client";
import { skillCategories } from "@/Data/skillCategories";
import ToolCard from "@/components/toolCard";
import { skillsData } from "@/Data/skillData";
import { motion } from "framer-motion";
import Title from "./ui/title";
import Description from "./ui/description";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Title title="Skills & Technologies" />
          <Description
            description="I've worked with a variety of technologies in the web
            development world. Here are the main tools and technologies I use to
            bring projects to life."
          />
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category}>
              <h3 className="text-xl font-bold mb-4 px-4">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.1 * (index + categoryIndex * 4),
                        duration: 0.5,
                      }}
                    >
                      <ToolCard skill={skill} />
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
