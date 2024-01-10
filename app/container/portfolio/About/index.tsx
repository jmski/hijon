import React from "react";
import { Container } from "@/app/components";

const About = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 text-stone-400 text-xs">
          <div className="flex lg:col-span-3">
            <h3 className="text-sm md:text-xl font-bold">[Since 2021]</h3>
          </div>
          <div className="lg:col-span-3">
            <span className="text-stone-600">(01)</span>
            <p>
              Equipped with years of computer science and customer service
              experience
            </p>
          </div>
          <div className="lg:col-span-3">
            <span className="text-stone-600">(02)</span>
            <p>
              Worked with local businesses in the durham region to build online
              presence
            </p>
          </div>
          <div className="lg:col-span-3">
            <span className="text-stone-600">(03)</span>
            <p>
              Passionate about building and creating things that help people
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
