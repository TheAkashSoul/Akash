import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData.json";

const Projects = () => {
  const projects = projectsData.projects[0];
  return (
    <div id="#projects">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          title={projects["project-1"].title}
          description={projects["project-1"].description}
          tags={projects["project-1"].tags}
          href={projects["project-1"].href}
        />
        <ProjectCard
          title={projects["project-2"].title}
          description={projects["project-2"].description}
          tags={projects["project-2"].tags}
          href={projects["project-2"].href}
        />
        <ProjectCard
          title={projects["project-3"].title}
          description={projects["project-3"].description}
          tags={projects["project-3"].tags}
          href={projects["project-3"].href}
        />
        <ProjectCard
          title={projects["project-4"].title}
          description={projects["project-4"].description}
          tags={projects["project-4"].tags}
          href={projects["project-4"].href}
        />
      </div>
    </div>
  );
};

export default Projects;
