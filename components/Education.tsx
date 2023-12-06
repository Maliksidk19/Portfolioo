const Education = () => {
  return (
    <main className="w-100 flex flex-col gap-8">
      <h1 className="text-4xl font-semibold">Education</h1>
      <section className="grid grid-cols-2 gap-6">
        <section className="flex gap-6">
          <span className="flex-none w-2 bg-teal-700 rounded-full grid place-items-center"></span>
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-3xl">BS Computer Science</h2>
            <h3 className="text-xl text-[--textSoft]">University Of Haripur, Haripur</h3>
            <span>Oct 2021 - Present</span>
            <p className="text-lg text-justify">Studying Computer Science</p>
          </div>
        </section>
        <section className="flex gap-6">
          <span className="flex-none w-2 bg-teal-700 rounded-full grid place-items-center"></span>
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-3xl">FSC Pre Engineering</h2>
            <h3 className="text-xl text-[--textSoft]">Askaria College, Wah</h3>
            <span>Sept 2019 - May 2021</span>
            <p className="text-lg text-justify">Studied Mathematics, Physics and Chemistry</p>
          </div>
        </section>
        <section className="flex gap-6">
          <span className="flex-none w-2 bg-teal-700 rounded-full grid place-items-center"></span>
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-3xl">Matriculation</h2>
            <h3 className="text-xl text-[--textSoft]">Askaria College, Wah</h3>
            <span>Aug 2017 - Apr 2019</span>
            <p className="text-lg text-justify">Studied Mathematics, Physics, Chemistry & Computer Science</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Education;