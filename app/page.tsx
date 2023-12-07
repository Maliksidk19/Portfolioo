import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import HorizontalLine from "@/components/HorizontalLine";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Homepage = () => {
  return (
    <main className="w-[80%] mx-auto flex flex-col justify-center">
      <Header />
      <HorizontalLine />
      <About />
      <HorizontalLine />
      <Experience />
      <HorizontalLine />
      <Education />
      <HorizontalLine />
      <Skills />
      <HorizontalLine />
      <Achievements />
      <HorizontalLine />
      <Projects />
      <HorizontalLine />
      <Contact />
    </main >
  )
}

export default Homepage;