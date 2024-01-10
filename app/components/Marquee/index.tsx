"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

interface MarqueeProps {
  children: string;
  baseVelocity: number;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const MarqueeText = ({ children, baseVelocity }: MarqueeProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = 1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = -1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  /** The number of times to repeat the child text should by dynamically calculated based on the size of the text and viewport.
   * Likewise, the x motion value is currently wrapped between -20% and -45% to ensure it's always in the viewport.
   * this 25% is derived from the face that we have four children (100% / 4)
   * This would also want deriving from the  dynamically generated nuymber of children
   */

  return (
    <motion.div
      style={{ x }}
      className="whitespace-nowrap flex flex-nowrap tracking-[0.8] leading-[-2px]"
    >
      {Array.from(Array(4).keys()).map((i) => (
        <span
          key={i}
          className="font-semibold uppercase text-6xl flex whitespace-nowrap flex-nowrap mr-8"
        >
          {children}
        </span>
      ))}
    </motion.div>
  );
};

export default MarqueeText;
