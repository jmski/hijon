"use client";
import React, { useState } from "react";
import { navData, socialData } from "@/app/constants/";
import { Page } from "./components";
import { NavBar, Footer } from "@/app/components";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("clicked");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <NavBar
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        navData={navData}
        socialData={socialData}
        isMobile={true}
        isPortfolio={true}
      />
      <Page />
      <Footer socialData={socialData} />
    </main>
  );
};

export default Portfolio;
