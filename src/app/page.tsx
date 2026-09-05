import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProfessionalProjects from "@/components/ProfessionalProjects";
import Skills from "@/components/Skills";
import EngineeringApproach from "@/components/EngineeringApproach";
import Projects from "@/components/Projects";
import GithubCTA from "@/components/GithubCTA";
import ResumeCTA from "@/components/ResumeCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <ProfessionalProjects />
        <Skills />
        <EngineeringApproach />
        <Projects />
        <GithubCTA />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
