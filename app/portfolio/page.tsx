import React from "react";
import { socialData } from "@/app/constants/";
import { Footer, PageWrapper, Eye } from "@/app/components";
import {
  Header,
  About,
  Profile,
  Projects,
  Featured,
  Skills,
  Experience,
} from "../container/portfolio";

const Portfolio = () => {
  return (
    <PageWrapper>
      <Header />
      <About />
      <Profile />
      <Experience />
      <Footer socialData={socialData} />
    </PageWrapper>
  );
};

export default Portfolio;
