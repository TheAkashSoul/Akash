import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData.json";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Projects = () => {
  const projects = projectsData.projects[0];
  return (
    <div id="projects">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          title={projects["project-7"].title}
          description={projects["project-7"].description}
          tags={projects["project-7"].tags}
          href={projects["project-7"].href}
        />
        <ProjectCard
          title={projects["project-6"].title}
          description={projects["project-6"].description}
          tags={projects["project-6"].tags}
          href={projects["project-6"].href}
        />
        <ProjectCard
          title={projects["project-5"].title}
          description={projects["project-5"].description}
          tags={projects["project-5"].tags}
          href={projects["project-5"].href}
        />
        <ProjectCard
          title={projects["project-4"].title}
          description={projects["project-4"].description}
          tags={projects["project-4"].tags}
          href={projects["project-4"].href}
        />
      </div>

      <Link
        href="/projects"
        className="flex flex-row items-center justify-center gap-1 text-sm mx-auto font-medium text-gray-900 dark:text-gray-100 my-4"
      >
        <span>See More</span>
        <IoIosArrowDown
          size={16}
          className="text-gray-900 dark:text-gray-100"
        />
      </Link>
    </div>
  );
};

export default Projects;
