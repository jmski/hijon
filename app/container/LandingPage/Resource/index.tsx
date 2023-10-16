"use client";
import React, { useState, useEffect } from "react";
import { urlFor, client } from "@/sanity/client";
import Image from "next/image";

interface ResourceDataProps {
  title: string;
  subtitle: string;
  link: string;
  preview: string;
}

const ResourceLinks = () => {
  const [resourceLinks, setResourceLinks] = useState([]);

  useEffect(() => {
    const query = `*[_type == "resource"] | order(_createdAt asc)`;
    client.fetch(query).then((data) => setResourceLinks(data));
  }, []);

  return (
    <>
      <h3 className="text-bluey my-4">Free Resouce and Learning</h3>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        {resourceLinks.map((bubble: ResourceDataProps, index) => (
          <a href={bubble.link} key={index}>
            <div className="bg-white rounded-xl text-bluey-dark w-full p-4 flex justify-between shadow-md border border-teal-500">
              <div>
                <h4 className="text-sm">{bubble.title}</h4>
                <span className="text-xs text-gray-400">{bubble.subtitle}</span>
              </div>
              <Image
                src={urlFor(bubble.preview).url()}
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

export default ResourceLinks;
