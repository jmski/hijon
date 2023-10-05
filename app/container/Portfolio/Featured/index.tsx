import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { featureData } from "@/app/constants/featureData";

const Featured = () => {
  return (
    <div
      id="feature"
      className="px-4 mobile:px-12 mt-20 sm:px-20 sm:mt-32 md:px-28 lg:px-40"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-col text-sm mobile:text-xl xs:text-2xl sm:text-3xl w-full mb-8">
          <span className="text-slate-300 text-xl mobile:text-3xl font-bold">
            <span className="text-teal-500 font-mono">2.</span> Some Things
            I&apos;ve Built
          </span>
        </div>
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="relative grid gap-3 grid-cols-12 items-center mb-8"
          >
            <div className="group relative col-span-full md:col-span-1-9 lg:col-span-1-7 row-span-full z-10 h-full flex flex-col justify-center pt-7 px-6 pb-5 sm:pt-10 sm:px-10 sm:pb-7">
              <div>
                <span className="font-mono text-teal-500 text-md my-3">
                  Featured Project
                </span>

                <h3 className="text-slate-300 font-bold group-hover:text-teal-500 ease-in-out duration-200 text-xl mobile:text-2xl md:mb-5">
                  <a
                    href={feature.preview}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    {feature.title}
                  </a>
                </h3>

                <div
                  className="text-slate-300 md:bg-slate-700 md:rounded-md relative py-5 md:p-6"
                  dangerouslySetInnerHTML={{ __html: feature.desc }}
                />

                <ul className="flex flex-wrap relative mt-6 mx-0 mb-3 p-0 list-none font-mono text-slate-300 md:text-slate-500">
                  {featureData[index].tech.map((tech, i) => (
                    <li className="mt-0 mr-5 mb-1 ml-0" key={i}>
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="text-slate-300 md:text-slate-500 flex items-center relative mt-2 -ml-3">
                  <a
                    href={feature.github}
                    aria-label="Github Link"
                    className="ease-in-out duration-200 hover:-translate-y-0.5 p-3"
                  >
                    <span className=" hover:text-teal-500 ease-in-out duration-200">
                      <FiGithub size={27} />
                    </span>
                  </a>

                  <a
                    href={feature.preview}
                    aria-label="External Link"
                    className="ease-in-out duration-200 hover:-translate-y-0.5 p-3"
                  >
                    <span className=" hover:text-teal-500 ease-in-out duration-200">
                      <FiExternalLink size={27} />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-5--1 lg:col-span-6--1 md:odd:col-span-1-8 relative rounded-md col-span-full row-span-full opacity-25 hover:outline-0 h-full md:opacity-100">
              <a>
                <img
                  src={feature.src}
                  className="sm:object-fill grayscale-75 contrast-100 brightness-50 h-full md:blur-sm object-cover sm:rounded-md ease-in-out duration-200 hover:filter-none"
                  alt={feature.title}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
