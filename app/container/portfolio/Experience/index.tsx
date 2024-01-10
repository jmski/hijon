"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import { motion } from "framer-motion";

const Experience = () => {
  interface ExperienceProps {
    year: string;
    company: string;
    position: string;
  }

  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"] | order(year desc)';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <div className="w-full px-16 pt-24 pb-12 text-xs lg:text-base">
      <div className="flex w-full justify-between items-center">
        <h3 className="text-2xl uppercase font-semibold">Past Experience</h3>
        <p className="text-gray-400">2019-2023</p>
      </div>
      <hr className="mt-8 pb-8 border-gray-400" />

      {experiences.map((experience: ExperienceProps, index: number) => (
        <div
          key={index}
          className="grid grid-cols-4 lg:grid-cols-12 items-center"
        >
          <div className="col-span-4">
            <p className="text-gray-400">{experience.year}</p>
          </div>
          <div className="col-span-4 text-end inline lg:text-start">
            <p className="text-gray-400">{experience.company}</p>
          </div>
          <h2 className="text-3xl uppercase font-semibold col-span-12 lg:col-start-9 lg:col-span-5 text-end">
            {experience.position}
          </h2>
          <hr className="my-8 col-span-12 border-gray-400" />
        </div>
      ))}
    </div>
  );
};

export default Experience;

/*
  {experiences.map((experience: ExperienceProps) => (
        <motion.div key={experience.year}>
          <div className="col-span-1">
            <p>{experience.year}</p>
          </div>
          <motion.div>
            {experience.works.map((work: ExperienceProps) => (
              <div key={work.name}>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className=""
                  data-tip
                  data-for={work.name}
                  key={work.name}
                >
                  <h4>{work.name}</h4>
                  <p>{work.company}</p>
                </motion.div>
                {work.desc}
              </div>
            ))}
          </motion.div>
        </motion.div>
      ))}
*/
