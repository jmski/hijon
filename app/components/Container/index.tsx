"use client";
import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 0.5 }}
      className={classNames("flex justify-center py-[2.5vh]", className)}
    >
      {children}
    </motion.div>
  );
};

export default Container;
