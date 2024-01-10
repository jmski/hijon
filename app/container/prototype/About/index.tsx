import React from "react";
import Image from "next/image";
import { images } from "@/app/constants";

const About = () => {
  return (
    <div>
      <div className="min-h-fit w-full flex justify-center items-center flex-col md:flex-row p-[6vw] gap-4">
        <div className="max-w-sm">
          <Image src={images.profile} alt={"Picture of me"} />
        </div>
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className=" text-3xl">
            Building websites is my passion and focus.
          </h2>
          <p className="leading-7">
            Let&apos;s be real and cut through the marketing bullshi, you need a
            website that looks amazing and actually works. The bottom line,
            that&apos;s what I do. If you want to learn more about working with
            me, look through my website.
          </p>
          <button className="border border-orange-500 text-center h-14 w-full px-5 py-0 flex items-center justify-center box-border">
            Learn more
          </button>
        </div>
      </div>
      <div className="min-h-fit w-full flex justify-center items-center flex-col md:flex-row-reverse p-[6vw] gap-4">
        <div className="max-w-sm">
          <Image src={images.passion} alt={"Picture of me"} />
        </div>
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className=" text-3xl">
            My other passion is building powerful personal brands.
          </h2>
          <p className="leading-7">
            After running my own business as a personal brand for the past 7
            years and realizing I have a passion for this, I finally put
            together my thoughts about this into a complete course from my
            perspective. Learn what worked and what didn&apos;t.
          </p>
          <button className="border border-orange-500 text-center h-14 w-full px-5 py-0 flex items-center justify-center box-border">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
