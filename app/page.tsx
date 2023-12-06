import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import HorizontalLine from "@/components/HorizontalLine";

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
    </main >
  )
}

export default Homepage;