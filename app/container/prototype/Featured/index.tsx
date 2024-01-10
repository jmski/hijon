import React from "react";
import Image from "next/image";
import { images } from "@/app/constants";

const Featured = () => {
  return (
    <>
      {/* Latest Projects */}
      <div className="min-h-screen p-[6vw]">
        <div className="">
          <p className="text-xs text-orange-500 uppercase">latest projects</p>
          <h2 className="text-3xl">
            As a web developer, here are some of the latest projects I&apos;ve
            worked on.
          </h2>
        </div>
        <div className="relative py-[6.6vmax]">
          <a className="" href="/">
            <div className="m-auto overflow-hidden">
              <div className="w-full h-auto mix-blend-normal">
                <Image src={images.avatar} alt={"Picture of me"} />
              </div>
            </div>
          </a>
          <div className="py-5">
            <p className="text-xs text-orange-500 uppercase underline">
              Fatherhood Frenzy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
