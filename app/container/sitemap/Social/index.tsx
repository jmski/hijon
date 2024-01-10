import React, { useState, useEffect } from "react";
import { urlFor, client } from "@/sanity/client";
import Image from "next/image";

interface SocialDataProps {
  title: string;
  subtitle: string;
  link: string;
  logo: string;
}

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const query = `*[_type == "social"] | order(_createdAt asc)`;
    client.fetch(query).then((data) => setSocialLinks(data));
  }, []);

  return (
    <>
      <h3 className="text-bluey mb-4">Portfolio and Social Handles</h3>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        {socialLinks.map((bubble: SocialDataProps, index) => (
          <a href={bubble.link} key={index}>
            <div className="bg-white rounded-xl text-bluey-dark w-full p-4 flex justify-between shadow-md border border-coral">
              <div>
                <h4 className="text-sm">{bubble.title}</h4>
                <span className="text-xs text-gray-400">{bubble.subtitle}</span>
              </div>
              <Image
                src={urlFor(bubble.logo).url()}
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

export default SocialLinks;
