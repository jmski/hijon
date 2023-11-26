"use client";
import React from "react";
import { socialData } from "@/app/constants/";
import { Page } from "./components";
import { Footer } from "@/app/components";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Page />
      <Footer socialData={socialData} />
    </div>
  );
};

export default Portfolio;
