import Image from "next/image";
import React from "react";
import { images } from "@/app/constants";
import {
  Footer,
  Header,
  About,
  Service,
  Featured,
} from "../container/prototype";
import { PageWrapper } from "@/app/components";

const Prototype = () => {
  return (
    <PageWrapper>
      <Header />
      <About />
      <Service />
      <Featured />
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
    </PageWrapper>
  );
};
export default Prototype;
