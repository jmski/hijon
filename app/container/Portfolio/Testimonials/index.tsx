import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { urlFor, client } from "@/sanity/client";
import Image from "next/image";

interface TestimonialProps {
  _id: string;
  name: string;
  company: string;
  feedback: string;
  imgurl: string;
}

interface BrandProps {
  _id: string;
  imgUrl: string;
  name: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([]);
  const [brands, setBrands] = useState<BrandProps[]>([]);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <section className="bg-slate-200 w-full min-h-screen flex flex-col items-center justify-center">
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

      <div className="w-4/5 flex-wrap mt-8 app__flex">
        {brands.map((brand: BrandProps) => (
          <motion.div
            className="w-36 m-6"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <Image
              className="w-full h-auto object-cover grayscale hover:grayscale-0"
              src={urlFor(brand.imgUrl).url()}
              alt={brand.name}
              width={100}
              height={100}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
