import { IdentificationIcon } from "@heroicons/react/solid";
import React from "react";


export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <IdentificationIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            A little bit about me!
            <br className="hidden lg:inline-block" /></h1>
          <p className="mb-8 leading-relaxed">
          I am a junior full-stack web developer who couldn't be more excited to step into the big world of coding and make a positive impact.
          My hobbies are meditating, yoga, being active, and reading. My newest hobby is gardening. My passion is learning. I'm always striving to know 'whats next.'  
          </p>

        </div>
      </div>
    </section>
  );
}