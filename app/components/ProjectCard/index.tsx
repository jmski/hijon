import React from "react";
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  dateStart?: string;
  img?: string;
  href: string;
  github: string;
  desc: string;
  techs?: string[];
}

const ProjectCard = ({
  title,
  href,
  github,
  desc,
  techs,
}: ProjectCardProps) => {
  return (
    <div className="bg-slate-800 p-4 transform ease-in-out duration-200 hover:-translate-y-1">
      <div className="flex flex-row justify-between items-center">
        <FiFolder size={40} color="#14b8a6" />
        <div className="flex gap-4 text-slate-500">
          <span className="ease-in-out duration-200 hover:text-teal-500">
            <a href={github} target={"_blank"} rel={"noreferrer"}>
              <FiGithub size={25} />
            </a>
          </span>
          <span className="ease-in-out duration-200 hover:text-teal-500">
            <a href={href} target={"_blank"} rel={"noreferrer"}>
              <FiExternalLink size={25} />
            </a>
          </span>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <span className="text-slate-300 text-xl text-left">{title}</span>
        <p className="text-slate-500 flex flex-wrap">{desc}</p>
        <ul className="text-slate-500 flex flex-wrap gap-4">
          <li>{techs}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
