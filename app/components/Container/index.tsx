"use client";
import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

const Container = ({
  children,
  className,
  isGrid,
  gridSize,
}: {
  children: React.ReactNode;
  className?: string;
  isGrid?: boolean;
  gridSize?: string;
}) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 0.5 }}
      className={classNames(
        isGrid
          ? `grid ${gridSize} px-16`
          : "flex justify-center py-[2.5vh] px-16",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Container;
