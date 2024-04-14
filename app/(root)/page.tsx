import About from "@/components/About";
import Contact from "@/components/Contact";
import Ongoing from "@/components/Ongoing";
import Projects from "@/components/Projects";
import Tweets from "@/components/Tweets";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 md:px-0 mt-6">
      <div className="mt-0 md:mt-10">
        <About />
      </div>

      <div className="mt-12">
        <Ongoing />
      </div>

      <div className="mt-12">
        <Projects />
      </div>

      <div className="mt-12">
        <Tweets />
      </div>

      <div className="mt-12">
        <Contact />
      </div>
    </main>
  );
}
