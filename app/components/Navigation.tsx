"use client";
import { useState, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";

import NavLink from "@/app/components/NavLink";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic sub-pages
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="shrink-0 text-primary"
          onClick={() => setIsOpen(false)}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 1080.000000 1080.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
              fill="currentColor"
              stroke="none"
            >
              <path
                d="M4132 8024 l3 -99 59 -7 c180 -23 309 -155 433 -444 69 -162 185
-514 174 -528 -5 -6 -48 -60 -97 -121 -391 -488 -746 -1045 -1059 -1660 -196
-386 -333 -709 -450 -1060 -129 -388 -199 -726 -220 -1077 l-7 -108 1127 0
1127 0 -49 57 c-221 256 -454 655 -596 1018 -42 108 -107 293 -107 306 0 5
231 8 567 7 l567 -3 33 -90 c43 -118 157 -347 228 -460 297 -472 690 -766
1159 -867 144 -31 392 -31 561 0 343 63 632 224 830 462 l68 81 -29 32 c-16
18 -44 48 -63 69 l-33 36 -55 -44 c-101 -82 -185 -115 -298 -115 -162 -1 -296
78 -398 234 -137 210 -268 597 -532 1572 -328 1212 -447 1522 -735 1903 -465
617 -1174 962 -2051 999 l-160 6 3 -99z m823 -1534 c36 -124 131 -454 211
-735 150 -527 257 -892 323 -1100 21 -66 41 -130 45 -142 l7 -23 -560 0 -560
0 -10 38 c-92 338 -121 773 -75 1092 39 270 128 518 259 722 103 161 279 398
286 386 4 -7 37 -114 74 -238z"
              />
            </g>
          </svg>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex h-8 w-8 items-center justify-center md:ml-0">
          <ThemeSwitcher />
        </div>

        <Popover className="relative md:hidden">
          <Popover.Button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-secondary"
          >
            <Bars3Icon className="h-5 w-5 cursor-pointer text-secondary transition-colors hover:text-primary" />
          </Popover.Button>
          <Transition
            as={Fragment}
            show={isOpen}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-auto rounded-xl bg-contrast p-2 text-base shadow-md focus:outline-none sm:text-sm">
              <div className="grid">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "rounded-md px-4 py-2 transition-colors hover:text-primary",
                      pathname === link.href
                        ? "bg-secondary font-medium"
                        : "font-normal",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </nav>
    </header>
  );
}
