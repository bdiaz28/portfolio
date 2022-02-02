import React from "react";
import profilepic from "../images/profilepic.jpeg"
import pdf from '../File/BD.Resume.pdf'

export default function Home() {
  return (
    <section id="home">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Brittany.
            <br className="hidden lg:inline-block" /> I am a junior full-stack web developer.          </h1>
          <div className="flex justify-center">
            <a
              href={pdf} target="_blank" download="BD.Resume.pdf"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Download Resume
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover rounded-full"
            alt="avatar"
            src={profilepic}
          />
        </div>
      </div>
    </section>
  );
}