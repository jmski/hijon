"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Eye = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const pupils = document.querySelectorAll(".eye .pupil");
      pupils.forEach((pupil) => {
        // get x and y position of cursor
        const rect = pupil.getBoundingClientRect();
        const pupilCenterX = rect.left + rect.width / 2;
        const pupilCenterY = rect.top + rect.height / 2;
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        // calculate the distance between the pupil center and the mouse position
        const distanceX = mouseX - pupilCenterX;
        const distanceY = mouseY - pupilCenterY;

        // calculate the maximum distance the pupil can move from the center
        const maxDistance = Math.min(rect.width, rect.height) / 2;

        // calculate the normalized distance based on the maximum distance
        const normalizedDistanceX = Math.max(
          -1,
          Math.min(1, distanceX / maxDistance)
        );
        const normalizedDistanceY = Math.max(
          -1,
          Math.min(1, distanceY / maxDistance)
        );

        // calculate the final translation values
        const x = normalizedDistanceX * 4 + "px";
        const y = normalizedDistanceY * 4 + "px";

        pupil.style.transform = `translate3d(${x}, ${y}, 0px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="max-w-[800px] lg:min-h-[50svh] flex justify-evenly mx-auto pt-20 pb-5">
      {/* Left Eye Sharingan */}
      <div className="lg:pr-28">
        <motion.div
          whileInView={{ scaleY: ["0%", "100%"] }}
          transition={{ delay: 0.2, duration: 1, type: "spring" }}
          className="bg-gradient-to-b from-slate-300 to-white w-[23.5svw] h-[14.5svw] border-t-8 border-l-8 border-r-2 border-b-2 border-black rounded-bl-[10rem] rounded-tr-[10rem] rounded-br-[1rem] rounded-tl-[1rem] flex justify-center items-center shadow-xl shadow-red-700 overflow-clip skew-y-3 -rotate-[4deg] eye"
        >
          <div className=" bg-gradient-radial to-red-950 from-red-600 w-[12svw] h-[12svw] border-4 border-black rounded-full flex justify-center items-center pupil overflow-clip">
            <div className="w-[7svw] h-[7svw] pupil">
              <div className="absolute bg-red-700 border border-black w-[7svw] h-[7svw] rounded-full spin">
                <div className=" absolute mt-[13%] bg-black rounded-full w-[1.5svw] h-[1.5svw] -rotate-[60deg]">
                  <div className="h-[18px] w-[10px] bg-black relative -top-[9px] left-[0.4svw] rounded-r-[145%] rounded-l-[90%] rotate-[60deg] skew-y-[30deg]"></div>
                </div>
                <div className=" absolute mt-[25%] -right-[7%] bg-black rounded-full w-[1.5svw] h-[1.5svw] rotate-[60deg]">
                  <div className="h-[18px] w-[10px] bg-black relative -top-[9px] left-[0.4svw] rounded-r-[145%] rounded-l-[90%] rotate-[60deg] skew-y-[30deg]"></div>
                </div>
                <div className=" absolute mt-[90%] right-[47%] bg-black rounded-full w-[1.5svw] h-[1.5svw] rotate-[160deg]">
                  <div className="h-[18px] w-[10px] bg-black relative -top-[9px] left-[0.4svw] rounded-r-[145%] rounded-l-[90%] rotate-[60deg] skew-y-[30deg]"></div>
                </div>
                {/* Iris */}
                <div className=" absolute top-[40%] left-[40%] bg-black rounded-full w-[1.5svw] h-[1.5svw]"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Right Eye Rinnegan */}
      <div className="lg:pl-28">
        <motion.div
          whileInView={{ scaleY: ["0%", "100%"] }}
          transition={{ delay: 0.2, duration: 1, type: "spring" }}
          className="bg-purple-300 w-[23.5svw] h-[14.5svw] border-t-8 border-r-8 border-l-2 border-b-2 border-black rounded-br-[10rem] rounded-tl-[10rem] rounded-bl-[1rem] rounded-tr-[1rem] flex justify-center items-center shadow-xl shadow-purple-700 overflow-clip -skew-y-3 rotate-[4deg] eye"
        >
          <div className="bg-purple-300 border border-black w-[21svw] h-[21svw] rounded-full flex justify-center items-center pupil">
            <div className=" bg-purple-300 border border-black w-[17svw] h-[17svw] rounded-full flex justify-center items-center pupil">
              <div className=" bg-purple-300 border border-black w-[13svw] h-[13svw] rounded-full flex justify-center items-center pupil">
                <div className=" bg-purple-300 border border-black w-[9svw] h-[9svw] rounded-full flex justify-center items-center pupil">
                  <div className=" bg-purple-400 border border-black w-[5svw] h-[5svw] rounded-full flex justify-center items-center pupil">
                    <div className=" bg-black border border-black w-[1.5svw] h-[1.5svw] rounded-full pupil"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Eye;
