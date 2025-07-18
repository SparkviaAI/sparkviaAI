import React, { useState, useEffect, useRef } from "react";
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

const tabKeys = Object.keys(sections) as (keyof typeof sections)[];

const SparkviaSection: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof sections>("Market Plan");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabKeys.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabKeys.length;
        return tabKeys[nextIndex];
      });
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleTabClick = (key: keyof typeof sections) => {
    setActiveTab(key);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveTab((prevTab) => {
          const currentIndex = tabKeys.indexOf(prevTab);
          const nextIndex = (currentIndex + 1) % tabKeys.length;
          return tabKeys[nextIndex];
        });
      }, 5000);
    }
  };

  const current = sections[activeTab];

  return (
    <div className="flex flex-col md:flex-row items-start md:items-cente justify-between gap-[30px] lg:gap-30 py-20 lg:py-30">
      <div className="flex-1 space-y-6 lg:w-[448px] relative top-8 border-t border-t-[#00000066] border-dashed">
        <h2
          style={{ fontFamily: "Gilda Display" }}
          className="lg:text-[40px] text-4xl font-normal leading-[120%] text-[#111111] lg:w-[389px] relative top-4 pb-4"
        >
          Discover The Magic Of Sparkvia Write.
        </h2>
        <p className="text-[#00000066] text-[16px] lg:text-[18px] leading-[130%] font-normal">
          Your go-to for everything from writing help to marketing insights and
          business solutions. Take a closer look at how we simplify your writing
          tasks!
        </p>

        <div className="space-y-4">
          {Object.entries(sections).map(([key, section]) => (
            <div
              key={key}
              onClick={() => handleTabClick(key as keyof typeof sections)}
              className={`cursor-pointer font-semibold text-[18px] lg:text-[20px] transition-all ${
                activeTab === key
                  ? "text-black border-l-2 border-[#2EDB66] pl-2"
                  : "text-[#11111199] font-semibold hover:text-black pl-2 border-l-2 border-[#0000001A]"
              }`}
            >
              {section.title}
              {activeTab === key && (
                <p className="text-[#000000] text-[14px] lg:text-[16px] font-normal leading-[130%] lg:w-[325px] mt-3">
                  {section.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full relative top-8">
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
