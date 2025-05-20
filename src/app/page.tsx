import Hero from "../components/ui/Hero";
import ProjectsSection from "../components/ui/ProjectsSection";
import AboutSection from "../components/ui/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
    </>
  );
}
