import React from "react";
import { socialData } from "@/app/constants/";
import { Footer, PageWrapper } from "@/app/components";
import { Header, About } from "./container";

const Portfolio = () => {
  return (
    <PageWrapper>
      <Header />
      <About />
      <Footer socialData={socialData} />
    </PageWrapper>
  );
};

export default Portfolio;
