import ProjectCard from "./projectCard";
import projectData from "../../data/projectData";

export default function Projects() {
  return (
    <main
      id="projects"
      className="max-w-3xl flex flex-col mx-auto px-6 mt-14 items-center justify-center rounded-2xl"
    >
      <div className="flex flex-row items-center justify-between gap-6 mb-8">
        <div style={{ height: 0.5, width: 100, backgroundColor: "#CCC" }}></div>

        <p
          style={{
            color: "#242F65",
            fontWeight: "600",
            fontSize: 20,
            letterSpacing: 1,
          }}
        >
          Projects
        </p>

        <div style={{ height: 0.5, width: 100, backgroundColor: "#CCC" }}></div>
      </div>

      <div className="">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            mainTech={project.mainTech}
            github={project.github}
          />
        ))}
      </div>
    </main>
  );
}
