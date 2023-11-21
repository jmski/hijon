"use client";
import React from "react";
import { Profile, SocialLinks, StoreLinks, ResourceLinks } from "./container";

const SiteMap = () => {
  return (
    <main className="bg-slate-200 w-full min-h-screen p-4 flex flex-col md:flex-row">
      <Profile />
      <div className="flex flex-col w-full gap-8">
        <div className="my-4 md:mx-8 md:my-0">
          <SocialLinks />
          <StoreLinks />
          <ResourceLinks />
        </div>
      </div>
    </main>
  );
};

export default SiteMap;
