import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 md:px-0 mt-16">
      <div className="mt-0 md:mt-10">
        <About />
      </div>

      <div className="mt-12">
        <Projects />
      </div>
    </main>
  );
}
