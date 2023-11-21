import React from "react";
import Image from "next/image";
import { images } from "@/app/constants";

export interface NavBarProps {
  toggleMenu: () => void;
  menuOpen: boolean;
  navData: {
    title: string;
    href: string;
    subMenu?: { title: string; href: string }[];
  }[];
}

const NavBar: React.FC<NavBarProps> = ({ toggleMenu, menuOpen, navData }) => {
  return (
    <>
      <div className="navbar px-[6vw] py-[1vw] z-50 filtergang fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost swap swap-rotate lg:hidden"
            >
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" checked={menuOpen} onChange={toggleMenu} />

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
            {/* side menu */}
            <ul
              tabIndex={0}
              className={`menu menu-md dropdown-content mt-3 p-2 z-[11] shadow rounded-box bg-base-100 w-52 ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              {navData.map(
                (
                  element: {
                    title: string;
                    href: string;
                    subMenu?: { title: string; href: string }[];
                  },
                  index: number
                ) => {
                  if (element.subMenu) {
                    return (
                      <li key={index} className="collapse rounded-md">
                        <input
                          type="checkbox"
                          className="peer rounded-md min-h-0"
                        />
                        <div className="collapse-title min-h-0 bg-accent">
                          {element.title}
                        </div>
                        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-primary-content">
                          <ul className="p-0 m-0">
                            {element.subMenu.map(
                              (
                                subElement: { title: string; href: string },
                                subIndex: number
                              ) => (
                                <li key={subIndex}>
                                  <a href={subElement.href}>
                                    {subElement.title}
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </li>
                    );
                  } else {
                    return (
                      <li key={index}>
                        <a href={element.href}>{element.title}</a>
                      </li>
                    );
                  }
                }
              )}
            </ul>
          </div>

          <a className="btn btn-ghost normal-case text-xl">
            <Image
              className="hidden lg:block"
              src={images.logo_nav}
              alt="sup boy"
            />
            <span className="lg:hidden">JM</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase">
            <li>
              <a>Work</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Course</summary>
                <ul className="p-2 rounded-none min-w-max">
                  <li>
                    <a>Build your Portfolio</a>
                  </li>
                  <li>
                    <a>Building a Brand</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <input type="checkbox" className="toggle toggle-sm toggle-primary" />
        </div>
      </div>
      {/* 
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
      */}
    </>
  );
};

export default NavBar;
