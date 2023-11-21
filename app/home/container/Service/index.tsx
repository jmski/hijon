import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "@/sanity/client";
import Image from "next/image";
import { serviceData } from "@/app/constants";

interface ServiceProps {
  title: string;
  desc: string;
  imgUrl?: string;
  href?: string;
  link?: string;
}

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = `*[_type == "services"]`;
    client.fetch(query).then((data) => setServices(data));
  }, []);

  return (
    <>
      <div className="w-full flex-col justify-center items-center px-[6vw] py-[2.5vw]">
        <div className="pb-14 text-center">
          <p className="text-4xl">Everything I do.</p>
        </div>
        <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service: ServiceProps, index: number) => (
            <div
              className="border border-primary hover:border-accent border-l-4 p-[10%]"
              key={index}
            >
              <div className="max-w-xs">
                <h2 className="text-2xl pb-2">{service.title}</h2>
                <p className="leading-7">{service.desc}</p>
              </div>
              <div className="mt-[10%] w-full text-primary hover:text-accent uppercase ">
                <a href={service.href}>{service.link}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl text-center tracking-widest uppercase font-thin border-t-2 border-b-2 p-2">
          What I can do for you
        </h2>

        {/**  Pricing? **/}
        <div className="flex justify-center items-start flex-wrap mt-8">
          {services.map((service: ServiceProps, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="w-48 flex justify-start items-start flex-col m-8"
              key={service.title + index}
            >
              <Image
                className="w-full h-44 rounded-xl object-cover"
                src={urlFor(service.imgUrl).url()}
                alt={service.title}
                height={200}
                width={200}
              />
              <h2
                className="font-extrabold text-left"
                style={{ marginTop: 20 }}
              >
                {service.title}
              </h2>
              <p className="text-sm text-left" style={{ marginTop: 10 }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
