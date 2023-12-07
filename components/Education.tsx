'use client'

import { Disclosure } from "@headlessui/react"

const Education = () => {
  return (
    <main className="w-100 flex flex-col gap-8">
      <h1 className="text-4xl font-semibold">Education</h1>
      <section className="grid grid-cols-2 gap-6">
        <section className="flex gap-6">
          <span className="flex-none w-2 bg-teal-700 rounded-full grid place-items-center"></span>
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-3xl">Matriculation</h2>
            <h3 className="text-xl text-[--textSoft]">Askaria College, Wah</h3>
            <span>Aug 2017 - Apr 2019</span>
            <Disclosure as="div">
              <Disclosure.Button className="text-2xl flex items-center gap-2">
                <span>Learning</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-teal-300 ui-open:rotate-90 ui-open:transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel>
                <section className="flex flex-wrap gap-5 items-center mt-4">
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Mathematics</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Physics</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Chemistry</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Computer Science</span>
                </section>
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </section>
        <section className="flex gap-6">
          <span className="flex-none w-2 bg-teal-700 rounded-full grid place-items-center"></span>
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-3xl">FSC Pre Engineering</h2>
            <h3 className="text-xl text-[--textSoft]">Askaria College, Wah</h3>
            <span>Sept 2019 - May 2021</span>
            <Disclosure as="div">
              <Disclosure.Button className="text-2xl flex items-center gap-2">
                <span>Learning</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-teal-300 ui-open:rotate-90 ui-open:transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel>
                <section className="flex flex-wrap gap-5 items-center mt-4">
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Mathematics</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Physics</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Chemistry</span>
                </section>
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </section>
        <section className="flex gap-6 col-span-2">
          <span className="flex-none w-2 bg-teal-700 rounded-full grid place-items-center"></span>
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-3xl">BS Computer Science</h2>
            <h3 className="text-xl text-[--textSoft]">University Of Haripur, Haripur</h3>
            <span>Oct 2021 - Present</span>
            <Disclosure as="div">
              <Disclosure.Button className="text-2xl flex items-center gap-2">
                <span>Learning</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-teal-300 ui-open:rotate-90 ui-open:transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel>
                <section className="flex flex-wrap gap-5 items-center mt-4">
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">DBMS</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">MySQL</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Operating System</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Networking</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Data Structure & Algorithm</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">C++</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Object Oriented Programming</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Web Engineering</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Digital Logic & Design</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Communication Skills</span>
                  <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Java</span>
                </section>
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Education;