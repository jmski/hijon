import React from "react";
import Image from "next/image";
import { Container } from "@/app/components";
import { images } from "@/app/constants";

const Profile = () => {
  return (
    <Container
      isGrid={true}
      gridSize="grid-cols-1 md:grid-cols-12"
      className="content-center max-w-[1000px] mx-auto"
    >
      <div className="md:row-span-full md:col-start-1 md:col-end-8 py-8 md:pb-0">
        <Image
          src={images.avatar}
          alt={"profile"}
          className="rounded-tr-full rounded-bl-full"
        />
      </div>
      <div className="md:row-span-full md:col-span-8 md:col-end-13">
        <div className="flex flex-col gap-12 justify-center items-center text-xs text-stone-400 md:p-12">
          <div className="flex">
            <h3 className="text-white drop-shadow-lg uppercase">About</h3>
            <div className="pl-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              veritatis ipsam eligendi maiores sunt. Harum, sapiente modi
              expedita itaque minus voluptatibus, eos nulla ducimus dignissimos
              corrupti quisquam nam libero sit?
            </div>
          </div>
          <div className="flex">
            <h3 className="text-white md:text-base-100 drop-shadow-lg uppercase">
              Work
            </h3>
            <div className="pl-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              veritatis ipsam eligendi maiores sunt. Harum, sapiente modi
              expedita itaque minus voluptatibus, eos nulla ducimus dignissimos
              corrupti quisquam nam libero sit?
            </div>
          </div>
          <div className="flex">
            <h3 className="text-white drop-shadow-lg uppercase">Skills</h3>
            <div className=" pl-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              veritatis ipsam eligendi maiores sunt. Harum, sapiente modi
              expedita itaque minus voluptatibus, eos nulla ducimus dignissimos
              corrupti quisquam nam libero sit?
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
