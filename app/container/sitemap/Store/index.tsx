import React, { useState, useEffect } from "react";
import { urlFor, client } from "@/sanity/client";
import Image from "next/image";

interface StoreDataProps {
  title: string;
  subtitle: string;
  link: string;
  product: string;
}

const StoreLinks = () => {
  const [storeLinks, setStoreLinks] = useState([]);

  useEffect(() => {
    const query = `*[_type == "store"] | order(_createdAt asc)`;
    client.fetch(query).then((data) => setStoreLinks(data));
  }, []);

  return (
    <>
      <h3 className="text-bluey my-4">My Store Links</h3>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        {storeLinks.map((bubble: StoreDataProps, index) => (
          <a href={bubble.link} key={index}>
            <div className="bg-white rounded-xl text-bluey-dark w-full p-4 flex justify-between shadow-md border-bluey-light border">
              <div>
                <h4 className="text-sm">{bubble.title}</h4>
                <span className="text-xs text-gray-400">{bubble.subtitle}</span>
              </div>
              <Image
                src={urlFor(bubble.product).url()}
                alt={bubble.title}
                width={50}
                height={50}
              />
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default StoreLinks;
