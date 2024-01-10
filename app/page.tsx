import Link from "next/link";
import React from "react";
import { MdMenuBook } from "react-icons/md";
import { PiPersonArmsSpreadBold } from "react-icons/pi";

const LandingPage = () => {
  return (
    <main className="flex uppercase">
      <div className="bg-beige text-dark min-h-screen w-1/2 flex justify-center items-center">
        <Link href="/home" className="flex flex-col items-center">
          <PiPersonArmsSpreadBold className="text-2xl" />
          <span className="text-3xl lg:text-7xl hover:font-bold duration-100 ease-in-out">
            JM CO.
          </span>
        </Link>
      </div>

      <div className="bg-base text-accent min-h-screen min-h w-1/2 flex justify-center items-center">
        <Link href="/portfolio" className="flex flex-col items-center">
          <MdMenuBook className="text-2xl" />
          <span className="text-3xl lg:text-7xl hover:font-bold duration-100 ease-in-out">
            Portfolio
          </span>
        </Link>
      </div>
    </main>
  );
};

export default LandingPage;
