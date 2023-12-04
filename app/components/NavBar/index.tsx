"use client";
import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { SideMenu, GlitchText } from "@/app/components";

interface NavBarProps {
  navData: {
    title: string;
    icon: JSX.Element;
    href: string;
    subMenu?: { title: string; href: string }[];
  }[];
  socialData: { icon: JSX.Element; link: string }[];
  isMobile?: boolean;
  isPortfolio?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  navData,
  socialData,
  isMobile,
  isPortfolio,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <SideMenu
        menuOpen={menuOpen}
        navData={navData}
        socialData={socialData}
        isMobile={isMobile}
      />

      {isPortfolio ? (
        <>
          <div className="fixed w-full px-8 py-4 lg:hidden z-50">
            <div className="flex flex-row-reverse justify-between">
              <div>
                <a href="/portfolio">
                  <GlitchText />
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

          <div className="px-16 py-4 w-full fixed top-4 hidden lg:flex justify-center items-center">
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
      ) : (
        <div className="navbar px-[6vw] py-[1vw] z-50 filtergang fixed">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost swap swap-rotate lg:hidden"
              >
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  checked={menuOpen}
                  onChange={toggleMenu}
                />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>

            <a href="#" className="btn btn-ghost">
              <GlitchText />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase">
              {navData.map((element, index) => {
                if (element.subMenu) {
                  return (
                    <li key={index} tabIndex={0}>
                      <details>
                        <summary>{element.title}</summary>
                        <ul className="p-2 rounded-none min-w-max">
                          {element.subMenu.map(
                            (
                              subElement: { title: string; href: string },
                              subIndex: number
                            ) => (
                              <li key={subIndex}>
                                <a href={subElement.href}>{subElement.title}</a>
                              </li>
                            )
                          )}
                        </ul>
                      </details>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <a href={element.href}>{element.title}</a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="navbar-end">
            <input
              type="checkbox"
              className="toggle toggle-sm toggle-primary"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
