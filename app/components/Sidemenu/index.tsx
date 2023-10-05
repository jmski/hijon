import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";

interface SidemenuProps {
  menuOpen: boolean;
  navData: { title: string; href: string }[];
}

const Sidemenu: React.FC<SidemenuProps> = ({ menuOpen, navData }) => {
  return (
    <div
      className={`bg-bluey w-1/2 h-screen fixed ease-in-out duration-500 z-20
      ${menuOpen ? "left-0 md:hidden" : "-left-full"}`}
    >
      <ul className="px-4 pt-4">
        <Image src={logo} alt="logo" color="#fff" />
        {navData.map((element, index) => (
          <li
            key={index}
            className="p-4 rounded-lg transition duration-200 hover:bg-coral hover:text-bluey"
          >
            <a href={element.href}>{element.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidemenu;
