import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Project } from "@/types/Project";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { FunctionComponent } from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => (
  <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
    <div className="aspect-video relative overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        width={100}
        height={100}
      />
    </div>
    <CardHeader>
      <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
    </CardHeader>
    <CardContent className="flex-1">
      <p className="text-muted-foreground text-sm mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter className="flex gap-2">
      <Button variant="outline" size="sm" asChild>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
      </Button>
      <Button size="sm" asChild>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          <ExternalLink className="w-4 h-4" />
          Demo
        </a>
      </Button>
    </CardFooter>
  </Card>
);

export default ProjectCard;
