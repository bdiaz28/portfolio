import React from "react";
import profilepic from "../images/profilepic.jpeg"
import pdf from '../File/Resume_BDiaz.pdf'

export default function Home() {
  return (
    <section id="home">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <img
            className="bject-none object-center w-24 h-24 "
            alt="avatar"
            src={profilepic}
          />
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 font-medium text-white">
            Hi, I'm Brittany.
            <br className="hidden lg:inline-block" /> I am a junior full-stack web developer.          </h1>
          <div className="flex justify-center">
            <a
              href={pdf} target="_blank" download="Resume_BDiaz.pdf"
              className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">
              Download Resume
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="w-24 h-24 object-cover rounded-btn"
            alt="avatar"
            src={profilepic}
          />
        </div> */}
      </div>
    </section>
  );
}