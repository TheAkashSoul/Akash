import ProjectCard from "./ProjectCard";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import supabaseData from "@/data/supabase";

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  href: string;
};
const Projects = async () => {
  const projectsData = await supabaseData("Projects");

  return (
    <div id="projects">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData
          ?.slice()
          .reverse()
          .slice(0, 4)
          .map((project: ProjectProps) => (
            <ProjectCard key={project.id} {...project} />
          ))}
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
