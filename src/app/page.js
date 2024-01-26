import About from "@/components/about";
import Projects from "@/components/projects";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="px-2">
        <About />
      </section>

      <Projects />
    </main>
  );
}
