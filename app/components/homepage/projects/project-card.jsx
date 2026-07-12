import * as React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      {/* Top Border */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Window Header */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-300"></div>
        </div>

        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl font-semibold">
          {project.name}
        </p>
      </div>

      {/* Content */}
      <div className="border-t-[2px] border-indigo-900 px-5 lg:px-8 py-6">

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-white font-semibold mb-2">
            Description
          </h3>

          <p className="text-gray-300 leading-7 text-sm md:text-base">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-white font-semibold mb-3">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-[#1a1443] border border-[#2c3b86] text-cyan-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 transition-all duration-300 px-4 py-2 rounded-lg text-white"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 hover:text-black transition-all duration-300 px-4 py-2 rounded-lg text-cyan-300"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;