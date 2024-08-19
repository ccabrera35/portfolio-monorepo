import About from "portfolio/components/about";
import Contact from "portfolio/components/contact";
import Intro from "portfolio/components/intro";
import Projects from "portfolio/components/projects";
import SectionDivider from "portfolio/components/section-divider";
import Skills from "portfolio/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
