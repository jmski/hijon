"use client";
import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { urlFor, client } from "@/sanity/client";
import Image from "next/image";

interface TestimonialProps {
  _id: string;
  name: string;
  company: string;
  feedback: string;
  imgurl: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([]);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      {testimonials.length && (
        <>
          <div className="flex justify-center items-center w-3/5 h-80 bg-white p-8 rounded-xl shadow-lg ease-in-out duration-300">
            <Image
              className="rounded-full object-cover"
              src={urlFor(testimonials[currentIndex].imgurl).url()}
              alt={testimonials[currentIndex].name}
              width={100}
              height={100}
            />
            <div className="flex flex-1 flex-col justify-around items-start px-8 py-0 h-full text-left text-black">
              <p className="text-sm text-left text-black leading-6">
                {testimonials[currentIndex].feedback}
              </p>
              <div>
                <h4 className="text-extrabold text-left">
                  {testimonials[currentIndex].name}
                </h4>
                <h5 className="text-sm text-left text-slate-500 leading-6">
                  {testimonials[currentIndex].company}
                </h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-4">
            <div
              className="flex justify-center items-center h-12 w-12 rounded-full bg-white m-4 ease-in-out duration-300"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft className=" w-5 h-5 text-bluey" />
            </div>

            <div
              className="flex justify-center items-center h-12 w-12 rounded-full bg-white m-4 ease-in-out duration-300"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight className=" w-5 h-5 text-bluey" />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Testimonials;
