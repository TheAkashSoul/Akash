import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projectsData.json";

const Project = () => {
  const projects = projectsData.projects[0];

  return (
    <main className="max-w-2xl mx-auto px-6 md:px-0 mt-6">
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
        <ProjectCard
          title={projects["project-3"].title}
          description={projects["project-3"].description}
          tags={projects["project-3"].tags}
          href={projects["project-3"].href}
        />
        <ProjectCard
          title={projects["project-2"].title}
          description={projects["project-2"].description}
          tags={projects["project-2"].tags}
          href={projects["project-2"].href}
        />
        <ProjectCard
          title={projects["project-1"].title}
          description={projects["project-1"].description}
          tags={projects["project-1"].tags}
          href={projects["project-1"].href}
        />
      </div>
    </main>
  );
};

export default Project;
