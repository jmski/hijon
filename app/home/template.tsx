"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Spring } from "framer-motion";
import { navData, socialData } from "../constants";
import { NavBar } from "@/app/components";
import type { AppProps } from "next/app";
import { Page } from "../portfolio/components";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 200, y: 0 },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        <NavBar
          toggleMenu={toggleMenu}
          menuOpen={menuOpen}
          navData={navData}
          socialData={socialData}
          isMobile={true}
          isPortfolio={false}
        />
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default PageTransition;
