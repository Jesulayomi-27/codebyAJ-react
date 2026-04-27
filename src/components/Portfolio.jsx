import React from "react";
import project from "../assets/ayoakin.png";
import project2 from "../assets/foodie.png";
import { Link } from "react-scroll";

const projects = [
  {
    title: "AYOAKIN",
    tag: "PORTFOLIO",
    description:
      "A fully responsive admin dashboard with dark/light mode, data visualization and advanced UI components",
    image: project,
    liveUrl: "https://ayo-akin.vercel.app",
    codeUrl: "https://github.com/Jesulayomi-27/ayo-akin" 
  },
  {
    title: "Good Food, Good Life",
    tag: "RECIPE APP",
    description:
      "A full-stack recipe management application, featuring a modern web interface for discovering, saving, and organizing recipes.",
    image:
      project2,
    liveUrl: "https://recipe-app-rust-one.vercel.app/",
    codeUrl: "https://github.com/Jesulayomi-27/Recipe-App"
  },
];

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="bg-[#EBE9F9] w-full min-h-[653px] mx-auto rounded-t-[60px] sm:rounded-t-[80px] md:rounded-t-[100px] py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Featured Projects
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Showcasing my recent work
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row md:flex-row bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200"
          >
            {/* Image */}
            <div className="w-full sm:w-1/2 h-full ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full  rounded-[16px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full sm:w-1/2 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
              <div>
                <span className="text-indigo-600 text-xs sm:text-sm font-semibold">
                  {project.tag}
                </span>
                <h3 className="text-lg sm:text-lg md:text-xl font-bold text-gray-900 mt-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-3">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-5 md:mt-6">
               <a
               href={project.liveUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 inline-block"
               >
                Live Demo
               </a>
                <a
                 href={project.codeUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-100 inline-block"
                 >
                    View Code
                 </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}