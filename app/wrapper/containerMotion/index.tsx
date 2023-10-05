"use client";
import { motion } from "framer-motion";
import React from "react";

export const ContainerWrap = ({ Component }: { Component: any }) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`app__flex`}
    >
      <Component />
    </motion.div>
  );
};
