import React from "react";
import { socialData } from "@/app/constants/";
import { Footer, PageWrapper, Eye } from "@/app/components";
import { Header, About, Profile, Projects, Featured } from "./container";

const Portfolio = () => {
  return (
    <PageWrapper>
      <Header />
      <About />
      <Profile />
      <Featured />
      <Projects />
      <Footer socialData={socialData} />
    </PageWrapper>
  );
};

export default Portfolio;
