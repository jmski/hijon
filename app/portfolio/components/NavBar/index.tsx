import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { SideMenu } from "@/app/components";

interface NavBarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  navData: { icon: JSX.Element; href: string }[];
  socialData: { icon: JSX.Element; link: string }[];
  isMobile?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  menuOpen,
  toggleMenu,
  navData,
  socialData,
  isMobile,
}) => {
  return (
    <>
      {/* Nav Mobile */}
      <div className="fixed w-full px-8 py-4 md:hidden z-50">
        <div className="flex flex-row-reverse justify-between text-xl">
          <div>
            <a href="/portfolio">
              <span className="uppercase tracking-tighter">JM CO.</span>
            </a>
          </div>
          <div className="ease-in-out duration-300">
            {!menuOpen ? (
              <LuMenuSquare onClick={toggleMenu} />
            ) : (
              <FaRegWindowClose onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>
      <SideMenu
        menuOpen={menuOpen}
        navData={navData}
        socialData={socialData}
        isMobile={isMobile}
      />

      {/* Nav Desktop */}
      <div className="px-16 py-4 w-full fixed top-4 hidden md:flex justify-center items-center">
        <div className="bg-gradient-to-br from-gray-600 to-zinc-900 rounded-md shadow-md w-80">
          <ul className="flex justify-between">
            {navData.map((element, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:text-pink-500 hover:bg-white hover:shadow-pink-500 shadow-lg rounded-md ease-in-out duration-200"
              >
                <a href={element.href}>
                  <span className="text-lg">{element.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
