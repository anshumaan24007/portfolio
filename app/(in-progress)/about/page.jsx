import { InProgress } from "@/components";
import { Contact, Navbar, Transition } from "@/layout";
import React from "react";

// import { Container, ImageWrapper, MainTitle, Row } from '../../index.styled';

/** @type {import('next').Metadata} */
export const metadata = {
  title: "About",
  description:
    "Crafting pixel-perfect designs and building high-performance, interactive web experiences from the ground up. © Anshuman Srivastava",
};

export default function About() {
  return (
    <Transition pageName={"about"}>
      <Navbar />
      <InProgress>Hello there!</InProgress>
      <main className="about-page mx-auto  space-y-24 bg-gradient-to-t from-[#e9eaeb] to-[#FFFFFF] px-4 pb-64 pt-16 text-gray-800">
        {/* Hero */}
        <section className="mx-64 space-y-4">
          <h1 className="text-4xl font-thin leading-tight md:text-8xl">
            Helping ideas thrive, <br /> one pixel at a time
          </h1>
          {/* <p className='text-lg text-gray-500'>
            Front-End Engineer with 4+ years of experience crafting accessible,
            scalable, and performant web applications using React.js, Tailwind
            CSS, and modern web tooling. I turn ideas into fast, polished, and
            production-ready interfaces.
          </p> */}
        </section>

        <section
          className="section no-padding line-globe once-in  mx-64"
          data-scroll-section
          data-scroll-section-id="section1"
          style={{
            backgroundColor: "#ffffff",
            opacity: 1,
            pointerEvents: "all",
          }}
        >
          <div className="container mx-auto px-0">
            <div className="row">
              <div className="relative flex-col">
                <div className="stripe mb-4 h-px w-full bg-gray-300"></div>
                {/* <div className='digital-ball relative mx-auto size-[300px]'>
                  <div className='overlay absolute inset-0 bg-transparent'></div>
                  <div
                    className='globe absolute left-1/2 top-1/2'
                    style={{ transform: 'translate(-50%, -50%)' }}
                  >
                    <div className='globe-wrap relative size-full'>
                      <div className='circle absolute inset-0 rounded-full border border-black/20'></div>
                      <div className='circle absolute inset-0 scale-90 rounded-full border border-black/20'></div>
                      <div className='circle absolute inset-0 scale-75 rounded-full border border-black/20'></div>
                      <div className='circle-hor absolute inset-0 rotate-90 rounded-full border border-black/10'></div>
                      <div className='circle-hor-middle absolute left-[20%] top-[20%] size-3/5 rounded-full border border-black/10'></div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <div className="flex-col px-4">
          <div className="relative flex gap-8 mx-auto w-full max-w-screen-lg">
            <p className="text-lg text-gray-500 w-full">
              Front-End Engineer with 4+ years of experience crafting
              accessible, scalable, and performant web applications using
              React.js, Tailwind CSS, and modern web tooling. I turn ideas into
              fast, polished, and production-ready interfaces.
            </p>
            <div>
              <img
                src="https://res.cloudinary.com/dqy1g4arm/image/upload/v1749893689/1739110565531_1_jl54uk.jpg"
                className="object-cover w-full"
                // fill={true}
                alt="Anshuman Srivastava Profile Picture"
              />
            </div>
          </div>
        </div>

        {/* Services */}
        <section className="mx-24  space-y-12">
          <h2 className="text-5xl font-thin">I can help you with...</h2>
          <div className="grid gap-10  md:grid-cols-3">
            <div>
              <h6 className="text-gray-400">01</h6>
              <h5 className="my-6 text-gray-400">_________________________</h5>
              <h3 className="mb-4 text-3xl font-medium">
                Front-End Engineering
              </h3>
              <p className="text-md leading-relaxed text-gray-600">
                From React.js and Next.js to React Native and Zustand, I build
                modern, maintainable interfaces that perform across devices. I’m
                experienced in accessibility (WCAG), SEO, and cross-browser
                compatibility.
              </p>
            </div>
            <div>
              <h6 className="text-gray-400">02</h6>
              <h5 className="my-6 text-gray-400">_________________________</h5>
              <h3 className="mb-4 text-3xl font-medium">AI & Automation</h3>
              <p className="text-md leading-relaxed text-gray-600">
                I leverage AI tools (ChatGPT, Claude, DeepSeek, OpenAI APIs) to
                automate content, streamline workflows, and improve developer
                productivity. Built tools like MediaFinder and Bulk Site
                Generators using Python & AWS.
              </p>
            </div>
            <div>
              <h6 className="text-gray-400">03</h6>
              <h5 className="my-6 text-gray-400">_________________________</h5>
              <h3 className="mb-4 text-3xl font-medium">
                Full-Project Ownership
              </h3>
              <p className="text-md leading-relaxed text-gray-600">
                From translating Figma designs to deploying SEO-optimized,
                responsive UIs, I’ve built complete systems with clean
                architecture, custom state management, and thoughtful
                design-to-code handoff.
              </p>
            </div>
          </div>
        </section>

        {/* Image */}
        <section className="space-y-12"></section>

        {/* Philosophy */}
        <section className="mx-24 space-y-4">
          <p className="text-lg">
            I love solving real problems with smart front-end solutions —
            whether it’s building drag-and-drop Kanban boards, automating 1000+
            websites with Python, or optimizing a mobile game’s UX. I push for
            simplicity, clarity, and performance in every line of code.
          </p>
          <p className="text-sm italic text-gray-500">
            Always shipping, always learning
            <span className="animate-pulse">...</span>
          </p>
        </section>
        <a
          href="/Anshuman_Srivastava.pdf"
          download
          className="block text-center mt-12"
        >
          <button className="px-10 py-5 rounded-full bg-[#445ae9] text-white hover:bg-gray-800 transition">
            Hire Me Maybe?
          </button>
        </a>
      </main>

      <Contact />
    </Transition>
  );
}
