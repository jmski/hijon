import React from "react";

interface FooterProps {
  socialData: { icon: JSX.Element; link: string }[];
  isMobile?: boolean;
}

const Footer: React.FC<FooterProps> = ({ socialData, isMobile }) => {
  return (
    <div
      className={`${
        isMobile ? "flex" : "hidden md:flex"
      } fixed bottom-0 w-full flex-col justify-between z-0`}
    >
      <div
        className={`${
          isMobile ? "flex" : "hidden md:flex"
        } max-w-[10rem] leading-[0.80] px-8 md:px-16 items-end pb-4`}
      >
        <h1
          data-text="JON MIKE CO."
          className="text-[3.5rem] uppercase font-poppins font-extrabold glitch"
        >
          <mark className="glitch">Jon Mike Co.</mark>
        </h1>
      </div>

      <div className="grid gap-4 grid-cols-6 pt-4 px-8 md:px-16 font-poppins text-sm bg-black">
        <p className="">
          Digital Marketing
          <br />
          <span>Web Engineer</span>
        </p>
        <p>
          Toronto, Canada
          <br />
          <a className="hover-underline-animation" href="mailto:hello@jmg.co">
            <span className="hover:text-pink-300 ease-in-out duration-300">
              hello@jmg.co
            </span>
          </a>
        </p>
        <div className="col-start-4 col-span-3 pb-4">
          <ul className="flex md:justify-evenly gap-4 z-40">
            {socialData.map((social, index) => (
              <li
                key={index}
                className="text-xl hover:text-pink-300 ease-in-out duration-300 hover:scale-125"
              >
                <a href={social.link} target="_blank" rel="noreferrer">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-8 md:px-16 md:pt-4 pb-8 bg-black">
        <p className="text-xs opacity-50">
          Copyright © 2021 Jon Mike Co. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
