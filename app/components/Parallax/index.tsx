import React from "react";

const Parallax = ({ navData }) => {
  return (
    <div className="parallax z-10">
      <ul className="relative text-right m-0 pl-0 preserve-3d hidden md:block ">
        {/** Map a list of 20 random words */}
        {navData.map((element, index) => (
          <li
            key={index}
            className="preserve-3d tracking-tighter leading-[0.8] p-0"
          >
            <div className="skewY">
              <a
                href={element.href}
                data-text={element.title}
                className="text-[14.6vw] font-extrabold uppercase opacity-50 hover:opacity-100 ease-in-out duration-300"
              >
                <h2 className="">{element.title}</h2>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parallax;
