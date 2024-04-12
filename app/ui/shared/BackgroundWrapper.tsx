/**
 * BackgroundWrapperProps type definition.
 * @typedef {Object} BackgroundWrapperProps
 * @property {React.ReactNode} children - The children nodes.
 */

/**
 * BackgroundWrapper component.
 * This component is a wrapper that sets the background image based on the current path.
 * It uses the `usePathname` hook from `next/navigation` to get the current path.
 * It defines a set of background image classes for different paths and applies the appropriate class based on the current path.
 * If no specific background image class is defined for the current path, it defaults to an empty string.
 * @param {BackgroundWrapperProps} props - The props that define the children nodes.
 * @returns {JSX.Element} The BackgroundWrapper component.
 */

"use client";

import { usePathname } from "next/navigation";

import { backgroundImageClasses } from "@/app/ui/styles/backgroundImageClasses";

type BackgroundWrapperProps = {
  children: React.ReactNode;
};

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  const currentPath = usePathname();

  let backgroundClass: string =
    backgroundImageClasses[
      currentPath as keyof typeof backgroundImageClasses
    ] || "";

  return <main className={backgroundClass}>{children}</main>;
};

export default BackgroundWrapper;
