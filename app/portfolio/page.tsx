"use client";
import React, { useState } from "react";
import {
  Header,
  Service,
  Featured,
  Projects,
  Testimonials,
  Footer,
  Contact,
  Skills,
} from "../container";
import { Navbar, Sidemenu } from "../components";
import { navData } from "../constants/navData";

const portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <main>
        <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} navData={navData} />
        <Sidemenu menuOpen={menuOpen} navData={navData} />
        <Header />
        <Service />
        <Featured />
        <Projects />
        <Testimonials />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default portfolio;
