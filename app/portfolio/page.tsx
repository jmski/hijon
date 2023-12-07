import React from "react";
import { socialData } from "@/app/constants/";
import { Footer, PageWrapper, Eye } from "@/app/components";
import { Header, About, Profile } from "./container";

const Portfolio = () => {
  return (
    <PageWrapper>
      <Eye />
      <Header />
      <About />
      <Profile />
      <Footer socialData={socialData} />
    </PageWrapper>
  );
};

export default Portfolio;
