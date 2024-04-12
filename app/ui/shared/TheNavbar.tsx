// @/app/ui/shared/TheNavbar
"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { barlow } from "@/app/ui/styles/fonts";

import Link from "next/link";
import { usePathname } from "next/navigation";

import TheLogo from "@/app/ui/shared/TheLogo";

const navigation = [
  { id: 1, name: "home", span: "00", href: "/" },
  { id: 2, name: "destination", span: "01", href: "/destination" },
  { id: 3, name: "crew", span: "02", href: "/crew" },
  { id: 4, name: "technology", span: "03", href: "/technology" },
];

const TheNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <header className="mx-auto px-10">
      <nav
        className="flex items-center justify-between gap-x-6 py-6"
        aria-label="Main Navigation">
        {/* The logo is a link to the homepage */}
        <div className="flex lg:flex-1">
          <span className="sr-only">Space Tours</span>
          <Link href="/">
            <TheLogo />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex gap-8 px-28 -mr-10 bg-white bg-opacity-5 backdrop-blur-[5rem]">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`${
                barlow.className
              } antialiased uppercase text-white text-base tracking-[0.1875rem] py-10 border-b-4 border-transparent hover:border-white hover:border-opacity-50 transition-all duration-300 ease-in-out ${
                currentPath === item.href ? "border-b-4 border-white" : ""
              }`}>
              <span className="font-bold mr-2"> {item.span} </span>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile navigation */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-2/3 overflow-y-auto bg-white bg-opacity-5 backdrop-blur-[5rem] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-50/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`mx-3 block uppercase text-white text-base tracking-[0.1875rem] hover:font-bold transition-all duration-300 ease-in-out ${
                      currentPath === item.href
                        ? "font-bold border-b-4 border-white"
                        : ""
                    }`}>
                    <span className="font-bold mr-2">{item.span} </span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default TheNavbar;
