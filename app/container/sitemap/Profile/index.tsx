import React from "react";
import Image from "next/image";
import { images } from "@/app/constants/";
import { GrContact, GrBriefcase, GrRun, GrInfo, GrShare } from "react-icons/gr";

const Profile = () => {
  return (
    <div className="bg-white text-bluey-dark rounded-xl flex flex-col h-full justify-start md:h-auto items-center md:w-1/2 lg:w-1/3 mb-4 md:mb-0 shadow-md">
      <div className="w-40 h-40">
        <Image
          className="p-4 rounded-full"
          src={images.profile}
          alt="Jon-Michael Gelua Profile Picture"
        />
      </div>
      <h1 className="text-2xl font-bold -mt-2">Jon Gelua</h1>
      <h2 className="text-md">Web Developer</h2>
      <span className="text-sm italic">Toronto, Canada</span>
      <ul className="text-sm text-left p-4 space-y-4">
        <li className="flex justify-start items-center gap-2">
          <GrBriefcase />
          Currently at Lifetime Athletic
        </li>
        <li className="flex justify-start items-center gap-2">
          <GrRun /> Founder of Fatherhood Frenzy
        </li>
        <li className="flex justify-start items-center gap-2">
          <GrInfo className="md:text-2xl" /> Helping small businesses build
          their online presence
        </li>
      </ul>
      <div className="mb-4">
        <ul className="flex gap-4">
          <li className="rounded-xl border border-slate-200 shadow-md">
            <a
              href="/connect"
              className="p-4 flex justify-center items-center gap-2"
            >
              <GrContact width={20} height={20} /> Connect
            </a>
          </li>
          <li className="rounded-xl border border-slate-200 shadow-md">
            <a href="#" className="p-4 flex justify-center items-center gap-2">
              <GrShare /> Share
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
