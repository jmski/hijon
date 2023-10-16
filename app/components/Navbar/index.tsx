import React from "react";
import Image from "next/image";
import Button from "../Button";
import logo from "@/app/assets/logo.svg";
import { PiHamburger } from "react-icons/pi";
import { RiCloseLine } from "react-icons/ri";

export interface NavbarProps {
  toggleMenu: () => void;
  menuOpen: boolean;
  navData: { title: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ toggleMenu, menuOpen, navData }) => {
  return (
    <nav className="w-full fixed z-10 px-4 py-1 md:px-10 filtergang">
      <div className="flex items-center justify-between">
        <div>
          <a>
            <Image src={logo} alt="logo" height={50} />
          </a>
        </div>
        <ul className="md:flex items-center gap-8 hidden">
          {navData.map((element, index) => (
            <li className="cursor-pointer capitalize font-bold" key={index}>
              <a href={element.href}>{element.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <Button
            buttonColor="bg-bluey-light"
            textColor="text-bluey"
            label="Connect"
            link="/home"
          />
          <div className="md:hidden">
            {menuOpen ? (
              <RiCloseLine
                className="ease-in-out duration-500"
                size={40}
                onClick={toggleMenu}
              />
            ) : (
              <PiHamburger
                className="ease-in-out duration-500"
                size={40}
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
