import React, { useState, useEffect } from "react";
import { urlFor, client } from "@/sanity/client";
import Image from "next/image";
import { motion } from "framer-motion";

interface BrandProps {
  _id: string;
  imgUrl: string;
  name: string;
}

const Brand = () => {
  const [brands, setBrands] = useState<BrandProps[]>([]);

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <div className="bg-bluey-light w-full flex-wrap mt-8 app__flex">
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
  );
};

export default Brand;
