import { InProgress } from "@/components";
import { Navbar, Transition } from "@/layout";

import { MagneticButton } from "@/components";
import Link from "next/link";

/** @type {import('next').Metadata} */
export const metadata = {
  title: "Contact",
  description:
    "Crafting pixel-perfect designs and building high-performance, interactive web experiences from the ground up. © Anshuman Srivastava",
};

export default function Contact() {
  return (
    <Transition pageName={"contact"}>
      <Navbar />
      <InProgress>Collab? Coffee? Chaos?</InProgress>
      <main className="contact-page mx-auto space-y-24 bg-gradient-to-t from-[#e9eaeb] to-[#FFFFFF] px-4 pb-32 pt-16 text-gray-800">
        {/* Hero */}
        <section className="mx-64 flex justify-between space-y-4">
          <h1 className="text-4xl font-thin leading-tight md:text-7xl">
            Let’s build something great together!
          </h1>
          <img
            src={
              "https://res.cloudinary.com/dqy1g4arm/image/upload/v1749893689/1739110565531_1_jl54uk.jpg"
            }
            alt="Contact Hero"
            className=" rounded-full w-1/6"
          />
        </section>

        {/* Contact Form or Details can be added here */}
        <section className="mx-72 flex gap-40 pt-16 md:grid-cols-2">
          {/* Left: Contact Form */}
          <form
            action="https://formspree.io/f/xwpqllbd"
            method="POST"
            className="space-y-10 w-full text-black"
          >
            {[
              {
                id: "name",
                label: "What's your name?",
                placeholder: "John Doe *",
              },
              {
                id: "email",
                label: "What's your email?",
                placeholder: "john@doe.com *",
              },
              {
                id: "organization",
                label: "What's the name of your organization?",
                placeholder: "John & Doe ®",
              },
              {
                id: "services",
                label: "What services are you looking for?",
                placeholder: "Web Design, Web Development ...",
              },
            ].map((field, index) => (
              <div key={field.id} className="border-b border-gray-700 pb-6">
                <label
                  htmlFor={field.id}
                  className="block text-sm uppercase tracking-wider text-gray-400"
                >
                  {String(index + 1).padStart(2, "0")}
                </label>
                <label
                  htmlFor={field.id}
                  className="mt-2 block text-xl font-light text-black"
                >
                  {field.label}
                </label>
                <input
                  type="text"
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  className="mt-2 w-full bg-transparent text-gray-400 placeholder-gray-600 focus:outline-none"
                />
              </div>
            ))}
            <br />
            <br />
            <br />
            <br />
            <MagneticButton
              type="submit"
              variant="ghost"
              className="px-10 py-12 md:px-20 md:py-24"
            >
              Ping me!
            </MagneticButton>
          </form>

          {/* Right: Contact Details */}
          <div className="space-y-12 w-1/2 text-sm text-right text-gray-400">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500">
                Contact Details
              </h3>
              <p className="mt-2 space-y-1">
                <a
                  href="mailto:anshumaan24007@gmail.com"
                  className="block hover:text-black"
                >
                  anshumaan24007@gmail.com
                </a>
                <a href="tel:+917061894104" className="block hover:text-black">
                  +91 7061894104
                </a>
              </p>
            </div>

            {/* <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500">
                Business Details
              </h3>
              <p className="mt-2">
                Anshuman Srivastava Pvt. Ltd.
                <br />
                CoC: 123456789
                <br />
                VAT: IN123456789
                <br />
                Location: India
              </p>
            </div> */}

            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500">
                Socials
              </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a
                    href="https://www.instagram.com/anshumaan24007/"
                    className="hover:text-black"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/anshuman24007/"
                    className="hover:text-black"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/anshumaan24007"
                    className="hover:text-black"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Transition>
  );
}
