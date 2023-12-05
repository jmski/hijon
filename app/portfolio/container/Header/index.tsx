"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/app/constants";

const Header = () => {
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center pt-24 max-w-[30vw] mx-auto"
      >
        <Image
          src={images.avatar}
          alt="Profile Picture of Jon Michael Gelua"
          className="rounded-br-[10rem] rounded-tl-[10rem] shadow-xl w-full"
        />
      </motion.div>
      <div className="flex justify-around uppercase overflow-x-hidden pt-4 cursor-default">
        <motion.div
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="pl-8 overflow-y-hidden"
        >
          <h1 className="text-[15vw] font-bold tracking-tighter leading-[0.80]">
            Jon
          </h1>
          <motion.p
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-[2vw] text-stone-400"
          >
            web dev and digital marketing
          </motion.p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [100, 0] }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="pr-8 text-end overflow-y-hidden"
        >
          <h1 className="text-[15vw] font-bold tracking-tighter leading-[0.80]">
            Mike
          </h1>
          <motion.p
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-[2vw] text-stone-400"
          >
            Based in Canada
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
