import React from "react";
import Button from "@/app/components/Button";
import Image from "next/image";
import avatar from "@/app/assets/avatar.svg";

const Header = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center h-screen px-12 bg-slate-200">
      <div className="flex flex-col items-center justify-center w-full h-full p-8 gap-6 md:pt-32 xl:pt-12">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-bluey-dark font-bold text-center flex flex-wrap overflow-y-clip">
          Building digital products, brands, and experiences
        </h1>
        <h3 className="text-md md:text-xl text-bluey-dark text-center lg:pb-8 overflow-y-clip">
          A full-stack developer with a passion for design and technology. Over
          10+ years of experience in customer service. &#9996;
        </h3>
        <Button
          buttonColor="bg-bluey-dark"
          textColor="#fff"
          label="connect with me"
          link="#"
        />
      </div>
      <div className="flex-grow flex pt-32 md:pt-16 lg:pt-0">
        <Image src={avatar} alt="avatar" />
      </div>
    </section>
  );
};

export default Header;
