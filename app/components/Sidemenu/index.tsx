import { Footer } from "@/app/portfolio/container";
import React from "react";

interface SideMenuProps {
  menuOpen: boolean;
  navData: { title: string; href: string }[];
  socialData: { icon: JSX.Element; link: string }[];
  isMobile?: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({
  menuOpen,
  navData,
  socialData,
  isMobile,
}) => {
  return (
    <div
      className={`w-full h-screen fixed ease-in-out duration-300 z-40 filtergang
      ${menuOpen ? "left-0 md:hidden" : "-left-full"}`}
    >
      <ul className="flex flex-col w-4/5 pl-8 h-full bg-gradient-to-r from-zinc-800 to-transparent pt-20 gap-4">
        {navData.map((element, index) => (
          <li key={index}>
            <a className="hover-underline-animation flex" href={element.href}>
              {element.title}
            </a>
          </li>
        ))}
      </ul>
      <Footer socialData={socialData} isMobile={isMobile} />
    </div>
  );
};

export default SideMenu;
