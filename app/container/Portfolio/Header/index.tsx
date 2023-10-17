import React from "react";
import Button from "@/app/components/Button";
import Image from "next/image";
import avatar from "@/app/assets/avatar.svg";

const Header = () => {
  return (
    <section id="gang" className="grid min-h-screen grid-cols-10">
      <div className="bg-zinc-900 row-span-full col-start-1 col-span-4">
        <video muted loop autoPlay className="h-auto grayscale">
          <source src={"/video/hero.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="col-start-4 col-span-2 row-span-full z-10">
        <video muted loop autoPlay className="h-auto">
          <source src={"/video/hero.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="row-span-full col-span-6 col-end-10 self-center text-left z-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-red-500 font-machinepro">
          Building digital products, brands, and experiences
        </h1>
        <h3 className="text-md md:text-xl py-4 font-oceanrush">
          shuffling text that changes above, static text here &#9996;
        </h3>
        <Button
          buttonColor="bg-bluey-light"
          textColor="text-bluey"
          label="connect with me"
          link="#"
        />
      </div>
    </section>
  );
};

export default Header;
