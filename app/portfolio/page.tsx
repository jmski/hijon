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
  Brand,
} from "../container";
import { Navbar, SideMenu } from "../components";
import { navData } from "../constants/navData";

const portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <main className="gradient-bg">
        <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} navData={navData} />
        <SideMenu menuOpen={menuOpen} navData={navData} />
        <Header />
        <Service />
        <Brand />
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
