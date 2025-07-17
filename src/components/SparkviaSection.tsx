import React, { useState } from "react";
import marketImage from "../assets/market.svg";
import salesImage from "../assets/salesImage.svg";
import adCopyImage from "../assets/adCopy.svg";

interface SectionContent {
  title: string;
  description: string;
  image: string;
}

const sections: Record<string, SectionContent> = {
  "Market Plan": {
    title: "Market Plan",
    description:
      "Generate marketing plans in minutes with concise data and attainable goal structures for your business.",
    image: marketImage,
  },
  "Sales Email": {
    title: "Sales Email",
    description:
      "Create well crafted and industry sales email copies for your products to drive customer retention and growth",
    image: salesImage,
  },
  "Curate AD Copy": {
    title: "Curate AD Copy",
    description:
      "Writing Ad copies shouldn’t be a hassle, using renowned prompt systems, draft Ads that are world class",
    image: adCopyImage,
  },
};

const SparkviaSection: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof sections>("Market Plan");
  const current = sections[activeTab];

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-30 py-30">
      <div className="flex-1 space-y-6 w-[448px] relative top-8">
        <svg width="521" height="1" viewBox="0 0 521 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="521" y2="0.5" stroke="black" stroke-opacity="0.4" stroke-dasharray="8 8"/>
        </svg>
        <h2
          style={{ fontFamily: "Gilda Display" }}
          className="text-[40px] font-normal leading-[120%] text-[#111111] w-[389px] relative top-4 pb-8"
        >
          Discover The Magic Of Sparkvia Write.
        </h2>
        <p className="text-[#00000066] text-[18px] leading-[130%] font-normal">
          Your go-to for everything from writing help to marketing insights and
          business solutions. Take a closer look at how we simplify your writing
          tasks!
        </p>

        {/* Tabs */}
        <div className="space-y-6">
          {Object.entries(sections).map(([key, section]) => (
            <div
              key={key}
              onClick={() => setActiveTab(key as keyof typeof sections)}
              className={`cursor-pointer font-semibold text-[20px] transition-all ${
                activeTab === key
                  ? "text-black border-l-2 border-[#2EDB66] pl-2"
                  : "text-[#11111199] font-semibold hover:text-black pl-2 border-l-2 border-[#0000001A]"
              }`}
            >
              {section.title}
              {activeTab === key && (
                <p className="text-[#000000] text-[16px] font-normal leading-[130%] w-[325px] mt-3">
                  {section.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full max-w-md mx-auto">
        <div className="bg-white rounded-md overflow-hidden">
          <img
            src={current.image}
            alt={current.title}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SparkviaSection;
