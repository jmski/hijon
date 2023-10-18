"use client";
import React, { useState } from "react";
import {
  Header,
  Service,
  Featured,
  Projects,
  Testimonials,
  Footer,
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
        <Brand />
        <Service />
        <Featured />
        <Projects />
        <Testimonials />
        <Skills />
        <Footer />
      </main>
    </>
  );
};

export default portfolio;
