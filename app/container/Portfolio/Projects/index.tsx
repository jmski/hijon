import React from "react";
import { ProjectCard } from "@/app/components";
import { projectData } from "@/app/constants/projectData";

const Projects = () => {
  return (
    <div
      id="work"
      className="w-full px-4 mobile:px-12 mt-20 sm:px-20 sm:mt-32 md:px-28 lg:px-40"
    >
      <div className="flex flex-col">
        <div className="flex flex-col text-sm mobile:text-xl xs:text-2xl sm:text-3xl w-full mb-8">
          <span className="text-slate-300 text-xl mobile:text-3xl font-bold">
            <span className="text-teal-500 font-mono">3.</span> Other Noteworthy
            Projects
          </span>
          <span className="text-teal-500 font-mono">in the past year</span>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              dateStart={project.dateStart}
              desc={project.desc}
              img={project.img}
              href={project.href}
              github={project.github}
              techs={project.techs}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
