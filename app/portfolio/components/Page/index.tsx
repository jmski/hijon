import React from "react";
import Image from "next/image";
import { images } from "@/app/constants";

const Page = () => {
  return (
    <>
      {/* Body */}
      <div className="flex justify-center mt-16 absolute w-full z-30">
        <div className="md:w-3/5 md:min-h-[3/5] grid grid-cols-1 md:grid-cols-2">
          <div className="px-8 py-4">
            <div className="flex items-center pb-4">
              <Image
                className="rounded-full shadow-lg"
                width={100}
                height={100}
                src={images.avatar}
                alt="profile"
              />
              <div className="pl-4">
                <h1 data-text="Jon Mike" className="glitch uppercase text-3xl">
                  <mark className="glitch uppercase">Jon Mike</mark>
                </h1>
                <h3 className="text-sm">Web Engineer | Digital Marketing</h3>
              </div>
            </div>

            <div className="">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                maiores accusamus ad ipsam soluta in nam exercitationem
                praesentium provident deserunt?
              </p>
            </div>
          </div>
          <div className="px-8 md:pl-0 md:pr-8 pt-4">
            <p className="">
              Based in Canada. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis in corrupti numquam consequatur
              obcaecati quidem officia voluptatem recusandae? Accusamus, fugiat
              perferendis! Numquam, corrupti dignissimos debitis deserunt totam
              natus impedit id voluptate tempora iste quidem, officia nisi est
              praesentium suscipit consequuntur!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
