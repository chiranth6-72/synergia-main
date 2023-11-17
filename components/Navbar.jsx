"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const sections = ["Home", "Events", "Schedule", "Gallery"];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      // Set the height of the placeholder div to the height of the header
      headerRef.current.previousSibling.style.height = `${headerRef.current.offsetHeight}px`;
    }
  }, [scrolled]);

  return (
    <>
      <div className={`${scrolled ? " hidden md:block" : "hidden"}`} />
      <header
        id="top"
        ref={headerRef}
        className={`${
          scrolled
            ? "relative top-0 bg-opacity-30 backdrop-blur-md backdrop-filter md:fixed md:bg-transparent md:transition-all md:duration-[0.7s]"
            : "relative bg-transparent "
        } z-[100] w-full px-5 font-semibold text-primary-white transition-all duration-[0.7s]`}
      >
        <div
          className={`mx-auto flex w-[92%] items-center justify-between p-2`}
        >
          <Link href={"#top"} className="flex w-[10rem] object-contain">
            <img src="/images/logo_white.png" alt="icon" />
          </Link>
          <button
            className="cursor-pointer rounded-md bg-slate-300 px-3 py-1 text-2xl text-slate-600 md:hidden"
            onClick={handleClick}
          >
            &#9776;
          </button>
          <nav className={`hidden space-x-6 md:flex`}>
            {sections.map((section, index) => (
              <Link
                key={index}
                href={`#${section}`}
                className="duration-600 transition-colors hover:text-primary-green"
              >
                {section}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        {/* <motion.nav
          // className={`${
          //   isOpen ? openingAnimationClass : closingAnimationClass
          // } bg-black flex origin-top flex-col justify-center text-2xl md:hidden`}
          initial={{ maxHeight: 0 }}
          animate={isOpen ? { maxHeight: "1000px" } : { maxHeight: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-full flex w-full flex-col justify-center overflow-hidden bg-primary-black text-2xl text-primary-white md:hidden"
        >
          {sections.map((section, index) => (
            <Link
              key={index}
              href={`#${section}`}
              className="duration-400 text-white hover:text-green-400 self-center py-2 transition-colors"
            >
              {section}
            </Link>
          ))}
        </motion.nav> */}

        <motion.nav
          initial={{ height: 0 }}
          animate={isOpen ? { height: "" } : { height: 0 }} // replace 500px with the actual height of your dropdown menu
          transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="flex w-full origin-top transform flex-col justify-center gap-3 overflow-hidden bg-primary-black text-2xl text-primary-white md:hidden"
        >
          {sections.map((section, index) => (
            <Link
              key={index}
              href={`#${section}`}
              className="duration-400 self-center py-2 text-white transition-colors hover:text-green-400"
            >
              {section}
            </Link>
          ))}
        </motion.nav>
      </header>
    </>
  );
};

export default Navbar;
