"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "@/sanity/client";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"] | order(year desc)';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  interface SkillProps {
    name: string;
    bgColor: string;
    icon: any;
  }

  interface ExperienceProps {
    year: string;
    name: string;
    company: string;
    desc: string;
    works: any;
  }

  return (
    <section className="bg-white w-full min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-black font-extrabold text-4xl text-center capitalize">
        Skills & Experiences
      </h2>
      <div className="w-full lg:w-4/5 mt-12 flex flex-col lg:flex-row">
        <motion.div className="flex flex-1 flex-wrap justify-start items-start mr-20 relative">
          {skills.map((skill: SkillProps) => (
            <motion.div
              key={skill.name}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center flex-col text-center m-4"
            >
              <div
                className=" h-20 w-20 rounded-full bg-slate-200 ease-in-out duration-300 app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <Image
                  className="w-1/2 h-1/2 object-contain"
                  src={urlFor(skill.icon).url()}
                  alt={skill.name}
                  height={100}
                  width={100}
                />
              </div>
              <p className="font-medium mt-2 text-black">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex flex-1 text-black flex-start items-start flex-col mt-8">
          {experiences.map((experience: ExperienceProps) => (
            <motion.div
              className="w-full flex flex-start items-start my-1 mx-0 overflow-y-hidden"
              key={experience.year}
            >
              <div className="mr-12">
                <p className="text-sm text-left leading-6 text-slate-500">
                  {experience.year}
                </p>
              </div>
              <motion.div className="flex-1 flex">
                {experience.works.map((work: ExperienceProps) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col flex-start items-start mb-4 cursor-pointer"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="text-sm text-left leading-6 font-medium">
                        {work.name}
                      </h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
