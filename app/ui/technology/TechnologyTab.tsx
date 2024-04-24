"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";

import { bellefair } from "@/app/ui/styles/fonts";

import TheHeading from "@/app/ui/shared/TheHeading";
import BodyText from "@/app/ui/shared/BodyText";

import { technologies } from "@/app/ui/technology/technologyData";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TechnologyTab = () => {
  return (
    <div className="text-white mt-10 w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        {/* Tab list container with vertical layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          <Tab.List className="flex flex-row lg:flex-col justify-center lg:justify-start lg:space-y-10 lg:space-x-0 space-x-4">
            {/* Adjust width and background as needed */}
            {technologies.map((technology) => (
              <Tab
                key={technology.id}
                className={({ selected }) =>
                  classNames(
                    `${bellefair.className} antialiased uppercase focus:outline-none`,
                    "w-10 sm:w-16 md:w-20 lg:w-24 h-10 sm:h-16 md:h-20 lg:h-24 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-5",
                    selected
                      ? "bg-white text-gray-900 rounded-full"
                      : "rounded-full border border-white hover:bg-white hover:opacity-50 hover:text-gray-900 hover:shadow-lg transition-all duration-300 ease-in-out"
                  )
                }>
                {technology.id}
              </Tab>
            ))}
          </Tab.List>

          {/* Panels container aligned next to the tab list */}
          <Tab.Panels className="p-5 w-full">
            {technologies.map((technology) => (
              <Tab.Panel key={technology.id}>
                <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
                  {/* TODO: for screens below large ones place this image above tabs */}
                  <div className="flex-1 lg:hidden">
                    <Image
                      src={technology.imageLandscape}
                      alt={technology.heading}
                      priority={true}
                      width={788}
                      height={310}
                      className="h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1">
                    <p
                      className={`${bellefair.className} opacity-50 text-white text-2xl font-normal uppercase text-center lg:text-left`}>
                      {technology.subheading}
                    </p>
                    <TheHeading level="3">{technology.heading}</TheHeading>
                    <BodyText>{technology.description}</BodyText>
                  </div>

                  <div className="hidden flex-1 lg:block">
                    <Image
                      src={technology.imagePortrait}
                      alt={technology.heading}
                      priority={true}
                      width={515}
                      height={527}
                      className="h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default TechnologyTab;
