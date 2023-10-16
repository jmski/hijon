import React from "react";
import Button from "@/app/components/Button";
import Image from "next/image";
import avatar from "@/app/assets/avatar.svg";

const Header = () => {
  return (
    <section className="grid min-h-screen grid-cols-10">
      <div className="bg-zinc-900 row-span-full col-start-1 col-span-6 object-fill">
        <Image src={avatar} alt="hero image" />
      </div>
      <div className="row-span-full col-span-6 col-end-10 self-center text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-red-500 font">
          Building digital products, brands, and experiences
        </h1>
        <h3 className="text-md md:text-xl py-4">
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
