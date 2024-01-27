import About from "@/components/about";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="px-2">
        <About />
      </section>

      <Skills />

      <Projects />

      <Footer />
    </main>
  );
}
