import React from "react";

const Header = () => {
  return (
    <section id="gang" className="grid min-h-screen grid-cols-10">
      <div className="row-span-full col-start-2 col-span-7">
        <video muted loop autoPlay className="grayscale">
          <source src={"/video/hold-hand.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="row-span-full col-span-4 col-end-10 self-center text-right z-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-red-500 font-voga">
          Building digital products, brands, and experiences
        </h1>
        <h3 className="text-md md:text-xl py-4">
          shuffling text that changes above, static text here &#9996;
        </h3>
      </div>
      <div className=" bg-gradient-to-r from-zinc-800 to-black row-span-full col-span-6 col-end-10">
        1
      </div>
    </section>
  );
};

export default Header;
