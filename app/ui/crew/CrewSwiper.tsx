/**
 * Displays a swipeable gallery of crew members, allowing users to navigate through crew member profiles using swipe gestures or button clicks.
 *
 * This component uses the `useSwipeable` hook from `react-swipeable` to add swipe functionality and `Transition` from `@headlessui/react`
 * to manage the opacity transitions when changing the displayed crew member. It manages the currently displayed crew member using
 * React state and handles transitions by toggling visibility before updating the crew member to ensure smooth animation.
 *
 * Features:
 * - Swipe left or right to navigate between crew members.
 * - Click on bullet buttons to jump directly to a specific crew member.
 * - Smooth opacity transitions when changing crew members.
 *
 * @component
 * @example
 * // Simply include the CrewSwiper component in your component tree to display the crew gallery.
 * <CrewSwiper />
 *
 * @returns {React.ReactElement} A section element containing the crew member profiles with navigation controls.
 */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { Transition } from "@headlessui/react";

import TheHeading from "@/app/ui/shared/TheHeading";
import BodyText from "@/app/ui/shared/BodyText";
import { bellefair } from "@/app/ui/styles/fonts";
import { crew } from "@/app/ui/crew/crewData";

const CrewSwiper: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowing, setIsShowing] = useState(true);

  const handleBulletClick = (index: number) => {
    setIsShowing(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsShowing(true);
    }, 300);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) => (prevIndex + 1) % crew.length),
    onSwipedRight: () =>
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + crew.length) % crew.length
      ),
    trackTouch: true,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  return (
    <section
      className="h-full  mt-10 "
      {...handlers}>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className={"flex flex-col lg:flex-row lg:gap-40"}>
        <div className="flex-1">
          <p
            className={`${bellefair.className} opacity-50 text-white text-2xl font-normal uppercase text-center lg:text-left mb-3`}>
            {crew[currentIndex].position}
          </p>

          <div className="mb-3">
            <TheHeading level="3">{crew[currentIndex].name}</TheHeading>
          </div>

          <div className="mb-10">
            <BodyText>{crew[currentIndex].description}</BodyText>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <div className="flex space-x-2">
              {crew.map((member, index) => (
                <button
                  key={member.id}
                  className={`h-3 w-3 rounded-full ${
                    currentIndex === index
                      ? "bg-white"
                      : "bg-white opacity-50 border-2 border-white"
                  }`}
                  onClick={() => handleBulletClick(index)}></button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 pt-20">
          <Image
            src={crew[currentIndex].photo}
            alt={crew[currentIndex].name}
            className="h-auto object-cover"
            width={crew[currentIndex].width}
            height={crew[currentIndex].height}
            priority={true}
          />
        </div>
      </Transition>
    </section>
  );
};

export default CrewSwiper;
