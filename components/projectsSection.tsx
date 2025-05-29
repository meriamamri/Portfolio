"use client";
import { projectsData } from "@/Data/projectsData";
import { useState } from "react";
import Title from "./ui/title";
import Description from "./ui/description";
import { categories } from "@/Data/projectCategories";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import ProjectCard from "./projectCard";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(projectsData);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setVisibleProjects(projectsData);
    } else {
      setVisibleProjects(
        projectsData.filter((project) => project.category === category)
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Title title="Featured Projects" />
          <Description
            description="Here are some of the projects I've worked on. Each project is unique
            and showcases different aspects of my skills and expertise."
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
