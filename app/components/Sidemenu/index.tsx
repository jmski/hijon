import React from "react";

interface SideMenuProps {
  menuOpen: boolean;
  navData: { title: string; href: string }[];
}

const SideMenu: React.FC<SideMenuProps> = ({ menuOpen, navData }) => {
  return (
    <div
      className={`w-3/5 h-screen fixed ease-in-out duration-500 z-20 filtergang
      ${menuOpen ? "left-0 md:hidden" : "-left-full"}`}
    >
      <ul className="flex flex-col items-center justify-center h-full font-machinepro">
        {navData.map((element, index) => (
          <li key={index} className="p-4 square hover:square text-red-500">
            <a href={element.href}>{element.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
