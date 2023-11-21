"use client";
import React, { useState } from "react";
import { navData, socialData } from "@/app/constants";
import { Footer } from "./container";
import { NavBar, Page } from "./components";

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
      />
      <Page />
      <Footer socialData={socialData} />
    </main>
  );
};

export default Portfolio;

// "use client";
// import React, { useState } from "react";
// import {
//   Header,
//   Service,
//   Featured,
//   Projects,
//   Testimonials,
//   Footer,
//   Skills,
//   Brand,
// } from "../container";
// import { Navbar, SideMenu } from "../components";
// import { navData } from "../constants";

// const Portfolio = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <>
//       <main className="gradient-bg">
//         <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} navData={navData} />
//         <SideMenu menuOpen={menuOpen} navData={navData} />
//         <Header />
//         <Brand />
//         <Service />
//         <Featured />
//         <Projects />
//         <Testimonials />
//         <Skills />
//         <Footer />
//       </main>
//     </>
//   );
// };

// export default Portfolio;
