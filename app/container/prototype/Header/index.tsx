import { Button } from "@/app/components";
import React from "react";
import { images } from "@/app/constants";

const Header = () => {
  const bg = `url(${images.bg.src})`;

  return (
    <div
      id="gang"
      className="hero min-h-screen"
      style={{
        backgroundImage: bg,
      }}
    >
      <video className="hidden lg:block" muted loop autoPlay>
        <source src={"/video/hold-hand.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md lg:max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">
            Freelance Developer
            <span className="inline-block lg:hidden">.</span>
            <span className="hidden lg:inline-block">& Bawty Boi.</span>
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex justify-center items-center gap-4">
            <button className="btn btn-primary btn-outline">
              Hire an Expert
            </button>
            <button className="btn btn-accent btn-outline">Watch video</button>
          </div>
        </div>
      </div>
    </div>

    // <section
    //   id="gang"
    //   className="grid items-center py-32 md:py-0 md:min-h-screen grid-cols-6 md:grid-cols-10"
    // >
    //   <div className="row-span-full col-start-1 col-span-6 md:col-start-2 md:col-span-7">
    //     <video muted loop autoPlay className="">
    //       <source src={"/video/hold-hand.mp4"} type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //   </div>
    //   <div className="row-span-full col-span-4 col-end-6 md:col-span-5 md:col-end-10 md:self-center text-right z-20">
    //     <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-red-500 font-voga">
    //       Building digital products, brands, and experiences
    //     </h1>
    //     <h3 className="text-xs font-light tracking-widest md:text-xl py-4 uppercase">
    //       Let me show you how &#9996;
    //     </h3>
    //     <div className="flex gap-4 justify-end">
    //       <Button
    //         buttonColor="bg-transparent"
    //         textColor="text-white"
    //         label="Take Hand"
    //         link="/connect"
    //         hoverRed={true}
    //       />
    //       <Button
    //         buttonColor="bg-transparent"
    //         textColor="text-white"
    //         label="No Way"
    //         link="/connect"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Header;
