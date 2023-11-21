"use client";
import Image from "next/image";
import React, { useState } from "react";
import { images } from "./constants";
import { navData } from "./constants";
import { Navbar } from "./components";
import { Footer, Header, About, Service } from "./container";

/**
  Nav
  Hero
  About
  Building Brand
  Services (ish)
    - Code Shop
    - Site builds
    - Consulting
    - My Work
    - Online Courses
    - Reach Out
  Latest Projects
  Latest Blog Posts
  Instagram Feed
  Footer
*/

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <main className="text-white bg-base-100">
      <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} navData={navData} />
      <Header />
      <About />
      <Service />


      {/* Latest Blog Posts Carosel */}
      <div className="min-h-screen p-[6vw]">
        <div className="">
          <p className="text-xs text-orange-500 uppercase">Latest blog posts</p>
          <h2 className="text-3xl">
            Read through some of my thoughts and insights through being a
            website developer.
          </h2>
        </div>
        <div className="carousel carousel-center max-w-md md:max-w-lg p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item gap-4">
            <Image alt="carosel" src={images.avatar} className="rounded-box" />
            <Image alt="carosel" src={images.avatar} className="rounded-box" />
            <Image alt="carosel" src={images.avatar} className="rounded-box" />
          </div>
        </div>
      </div>

      {/* Instagram Feed */}
      <div className="min-h-screen p-[6vw]">
        <div className="text-center">
          <p className="text-xs text-orange-500 uppercase">My Instagram Feed</p>
          <h2 className="text-3xl py-5">
            My life as a website developer and personal brand.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6">
          <div className="">
            <Image src={images.avatar} alt="" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};
export default Home;
