import ProjectCard from "@/components/ProjectCard";
import supabaseData from "@/data/supabase";

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  href: string;
};
const Project = async () => {
  const projectsData = await supabaseData("Projects");

  return (
    <main className="max-w-2xl mx-auto px-6 md:px-0 mt-6">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData
          ?.slice()
          .reverse()
          .map((project: ProjectProps) => (
            <ProjectCard key={project.id} {...project} />
          ))}
      </div>
    </main>
  );
};

export default Project;
