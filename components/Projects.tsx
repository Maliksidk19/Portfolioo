import Image from "next/image";

const Projects = () => {
  return (
    <main className="w-100 flex flex-col gap-8">
      <h1 className="text-4xl font-semibold">Projects</h1>
      <section className="grid grid-cols-2 gap-6">
        <Image src="/portfolio-2.png" alt="Agency Website" width={700} height={100} className="border-4 border-teal-700 p-2 rounded-2xl" />
        <Image src="/portfolio-3.png" alt="Admin Dashboard" width={700} height={100} className="border-4 border-teal-700 p-2 rounded-2xl" />
      </section>
    </main>
  )
}

export default Projects;