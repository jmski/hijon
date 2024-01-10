"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "@/sanity/client";
import Image from "next/image";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  interface SkillProps {
    name: string;
    bgColor: string;
    icon: any;
  }

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <h2 className="font-extrabold text-4xl text-center capitalize">
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
              <p className="font-medium mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
