import React from "react";

import { bellefair, barlow } from "@/app/ui/styles/fonts";

interface HeadingProps {
  level: "1" | "2" | "3" | "4" | "5";
  children?: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  const getHeadingClass = (): string => {
    switch (level) {
      case "1":
        return `${bellefair.className} antialiased text-[5rem] leading-[6.25rem] md:text-[9.375rem] md:leading-[9.375rem]`;
      case "2":
        return `${bellefair.className} antialiased text-[3.5rem] md:text-[5rem] lg:text-[6.25rem]`;
      case "3":
        return `${bellefair.className} antialiased text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem]`;
      case "4":
        return `${bellefair.className} antialiased text-[1rem] md:text-[1.5rem] lg:text-[2rem]`;
      case "5":
        return `${barlow.className} antialiased text-[.875rem] md:text-[1rem] md:tracking-[0.1688rem] lg:text-[1.75rem] lg:tracking-[0.1875rem]`;
    }
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements; // Dynamically define the heading level

  return React.createElement(
    Tag,
    {
      className: `uppercase ${getHeadingClass()} ${
        level !== "5" ? "text-white" : "text-indigo-200 tracking-widest"
      }`,
    },
    children || "Heading"
  );
};

export default Heading;
