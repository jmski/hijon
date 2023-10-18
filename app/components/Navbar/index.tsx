import React from "react";
import Image from "next/image";
import { PiHamburgerLight, PiShoppingCartSimpleLight } from "react-icons/pi";
import { RiCloseLine } from "react-icons/ri";
import { images } from "@/app/constants";

export interface NavbarProps {
  toggleMenu: () => void;
  menuOpen: boolean;
  navData: { title: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ toggleMenu, menuOpen, navData }) => {
  return (
    <nav className="w-full fixed z-50 filtergang">
      <div className="p-4 md:p-2 flex items-center justify-between md:justify-around">
        <div>
          <a href="#gang">
            <Image src={images.logo_nav} alt="logo" height={40} />
          </a>
        </div>
        <ul className="md:flex items-center gap-8 hidden">
          {navData.map((element, index) => (
            <li
              className="cursor-pointer uppercase text-xs tracking-loose font-light hover-underline-animation"
              key={index}
            >
              <a href={element.href}>{element.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <PiShoppingCartSimpleLight size={30} />
          <div className="md:hidden">
            {menuOpen ? (
              <RiCloseLine
                className="ease-in-out duration-500"
                size={30}
                onClick={toggleMenu}
              />
            ) : (
              <PiHamburgerLight
                className="ease-in-out duration-500"
                size={30}
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
