import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "@/sanity/client";
import Image from "next/image";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = `*[_type == "services"]`;
    client.fetch(query).then((data) => setServices(data));
  }, []);

  interface ServiceProps {
    title: string;
    description: string;
    imgUrl: string;
  }

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl text-center">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

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
            <h2 className="font-extrabold text-left" style={{ marginTop: 20 }}>
              {service.title}
            </h2>
            <p className="text-sm text-left" style={{ marginTop: 10 }}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
