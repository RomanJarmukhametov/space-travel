/**
 * A component that displays a tabbed interface for various destinations. Each tab contains detailed information
 * about a destination including an image, description, and additional statistics such as average distance and
 * estimated travel time.
 *
 * Utilizes `@headlessui/react` for the tab functionality and `framer-motion` for the fade transitions between tabs.
 * The tabs display destination names and the panels display destination details, which animate on change.
 *
 * @component
 * @returns {JSX.Element} The component renders a full-width tab group with each tab corresponding to a destination.
 * Each panel within the tab group contains an image of the destination, a heading, a description, and a section for additional details.
 *
 * @example
 * // How to render the DestinationTab component in a page
 * <DestinationTab />
 */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tab } from "@headlessui/react";

import { barlow } from "@/app/ui/styles/fonts";

import TheHeading from "@/app/ui/shared/TheHeading";
import BodyText from "@/app/ui/shared/BodyText";
import TheSubheading from "@/app/ui/shared/TheSubheading";

import { destinations } from "@/app/ui/destination/destinationData";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const DestinationTab = () => {
  return (
    <div className="text-white mt-10 w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List
          className={"flex justify-center lg:justify-end space-x-1 p-1 "}>
          {/* Map over destionation variable to show names */}
          {destinations.map((destination) => (
            <Tab
              key={destination.id}
              className={({ selected }) =>
                classNames(
                  `${barlow.className} antialiased w-auto px-2 md:px-5 lg:px-10 py-2.5 text-sm font-medium leading-5 uppercase mb-4 md:mb-10 lg:mb-36 border-b-2 border-transparent`,
                  "focus:outline-none",
                  selected
                    ? "border-b-2 border-white"
                    : " hover:border-white hover:border-opacity-50 transition-all duration-300 ease-in-out"
                )
              }>
              {destination.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {/* Map over destionation variable to show content */}
          {destinations.map((destination) => (
            <Tab.Panel key={destination.id}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                  <div className="flex-1">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      priority={true}
                      placeholder="blur"
                      blurDataURL={destination.image}
                      width={450}
                      height={450}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
                      <TheHeading level="2">{destination.name}</TheHeading>
                    </div>

                    <BodyText>{destination.description}</BodyText>
                    <div className="mt-10 py-5 flex flex-col md:flex-row items-center justify-center lg:items-start lg:justify-start gap-3 md:gap-8 border-t-[1px] border-gray-700">
                      <div className="flex flex-col gap-3 items-center justify-center lg:items-start lg:justify-start">
                        <TheSubheading level="2">Avg. Distance</TheSubheading>
                        <TheSubheading level="1">
                          {destination.distance}
                        </TheSubheading>
                      </div>
                      <div className="flex flex-col gap-3 items-center justify-center lg:items-start lg:justify-start">
                        <TheSubheading level="2">
                          Est. travel time
                        </TheSubheading>
                        <TheSubheading level="1">
                          {destination.travel}
                        </TheSubheading>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default DestinationTab;
