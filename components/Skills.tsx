'use client'

import { Disclosure } from '@headlessui/react'

const Skills = () => {
  return (
    <main className="w-100 flex flex-col gap-8">
      <h1 className="text-4xl font-semibold">Skills</h1>
      <Disclosure as="div">
        <Disclosure.Button className="text-2xl flex items-center gap-2">
          <span>Frontend Tech</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-teal-300 ui-open:rotate-90 ui-open:transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel>
          <section className="flex flex-wrap gap-5 items-center mt-4">
            <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">HTML</span>
            <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">CSS</span>
            <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">JavaScript</span>
            <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">TypeScript</span>
            <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">React</span>
          </section>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure as="div">
        <Disclosure.Button className="text-2xl flex items-center gap-2">
          <span>Backend Tech</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-teal-300 ui-open:rotate-90 ui-open:transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel>
          <section className="flex flex-wrap gap-5 items-center mt-4">
            <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Node</span>
            <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Express</span>
            <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">MongoDB</span>
            <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">SQL</span>
            <span className="border-2 border-teal-700 text-2xl p-2 px-4 rounded-md text-center">PostgreSQL</span>
          </section>
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure as="div">
        <Disclosure.Button className="text-2xl flex items-center gap-2">
          <span>Others</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-teal-300 ui-open:rotate-90 ui-open:transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel>
          <section className="flex flex-wrap gap-5 items-center mt-4">
            <span className="border border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Problem Solving</span>
            <span className="border border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Wordpress</span>
            <span className="border border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Strapi</span>
            <span className="border border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Data Structure</span>
            <span className="border border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Algorithms</span>
            <span className="border border-teal-700 text-2xl p-2 px-4 rounded-md text-center">Networking</span>
          </section>
        </Disclosure.Panel>
      </Disclosure>
    </main>
  )
}

export default Skills;