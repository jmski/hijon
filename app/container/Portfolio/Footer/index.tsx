import React from "react";
import Image from "next/image";
import {
  footerInfo,
  footerMenu,
  footerSocial,
} from "@/app/constants/footerData";
import { images } from "@/app/constants";

const Footer = () => (
  <section id="footer" className="p-8 md:p-4">
    <div className="flex justify-between items-start flex-row flex-wrap w-full text-left">
      <div className="mt-4 mx-0 sm:m-4 w-64 flex flex-col gap-4">
        <a href="#gang">
          <Image alt={"JMG Logo"} src={images.logo_square} height={120} />
        </a>
        <p>
          Web Engineer <br /> All Rights Reserved
        </p>
      </div>
      <div className="flex flex-start flex-col capitalize my-4 sm:m-4">
        <h4 className="text-sm mb-4 font-bold">Links</h4>
        {footerMenu.map((element, index) => (
          <p className="text-xs my-2 mx-0 cursor-pointer" key={index}>
            <a href={element.href}>{element.title}</a>
          </p>
        ))}
      </div>
      <div className="flex flex-start flex-col my-4 sm:m-4">
        <h4 className="text-sm mb-4 font-bold">Social</h4>
        {footerSocial.map((element, index) => (
          <p className="text-xs my-2 mx-0 cursor-pointer" key={index}>
            <a href={element.href} target={"_blank"} rel={"noreferrer"}>
              {element.title} {element.icon}
            </a>
          </p>
        ))}
      </div>
      <div className="flex flex-start flex-col my-4 sm:m-4">
        <h4 className="text-sm mb-4 font-bold">Jon-Michael Gelua</h4>
        {footerInfo.map((element, index) => (
          <p className="text-xs my-2 mx-0 cursor-pointer" key={index}>
            <a href={element.href} target={"_blank"} rel={"noreferrer"}>
              {element.title} {element.icon}
            </a>
          </p>
        ))}
      </div>
    </div>

    <div className="mt-8 text-center w-full my-4 sm:m-4">
      <p className="text-xs ease-in-out duration-200 ">
        @2021 JMG. All rights reserved.
      </p>
    </div>
  </section>
);

export default Footer;
