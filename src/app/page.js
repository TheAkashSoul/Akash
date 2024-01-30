import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <section className="px-2">
        <About />
      </section>

      <Skills />

      <Projects />
    </main>
  );
}
