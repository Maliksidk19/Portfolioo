const Experience = () => {
  return (
    <main className="w-100 flex flex-col gap-8">
      <h1 className="text-4xl font-semibold">Experience</h1>
      <section className="grid grid-cols-2 gap-6">
        <section className="flex gap-6">
          <span className="flex-none w-2 bg-[--bgSoft] rounded-full grid place-items-center"></span>
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-3xl">Data Scientist</h2>
            <h3 className="text-xl text-[--textSoft]">True Meridian PVT LTD</h3>
            <span>Sep 2023 - Present</span>
            <p className="text-lg text-justify">Working on a prompt engineering project using Python & OpenAI.</p>
          </div>
        </section>
        <section className="flex gap-6">
          <span className="flex-none w-2 bg-[--bgSoft] rounded-full grid place-items-center"></span>
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-3xl">Wordpress Developer</h2>
            <h3 className="text-xl text-[--textSoft]">True Meridian PVT LTD</h3>
            <span>Apr 2023 - Sep 2023</span>
            <p className="text-lg text-justify">Developed a CMS based Pharmacy website on Wordpress.</p>
          </div>
        </section>
        <section className="flex gap-6">
          <span className="flex-none w-2 bg-[--bgSoft] rounded-full grid place-items-center"></span>
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-3xl">QA Testing & Automation</h2>
            <h3 className="text-xl text-[--textSoft]">True Meridian PVT LTD</h3>
            <span>Dec 2022 - Apr 2023</span>
            <p className="text-lg text-justify">Created beautiful automations to test the functionalities of the web application on playwright & LambdaTest.</p>
          </div>
        </section>
        <section className="flex gap-6">
          <span className="flex-none w-2 bg-[--bgSoft] rounded-full grid place-items-center"></span>
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-3xl">Database Administrator</h2>
            <h3 className="text-xl text-[--textSoft]">WG Hospital, THQ, Rwp</h3>
            <span>Aug 2022 - Sep 2022</span>
            <p className="text-lg text-justify">Being an Internee, Worked as database adminitrator.</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Experience;