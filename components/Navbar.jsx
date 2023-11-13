"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const sections = ["Home", "Events", "Schedule", "Gallery"];

  const handleClick = () => {
    // console.log("🚀 ~ file: Navbar.jsx:16 ~ handleClick ~ isOpen:", isOpen);
    setIsOpen(!isOpen);
    // console.log("🚀 ~ file: Navbar.jsx:16 ~ handleClick ~ isOpen:", isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollStyle = scrolled ? "bg-purple-400" : "bg-white";
  const openingAnimationClass = "animate-open";
  const closingAnimationClass = "animate-close";

  return (
    <>
      <header
        className={`sticky top-0 z-[100] w-full transition duration-700 ${scrollStyle}`}
      >
        <div
          className={`mx-auto mt-5 flex w-[92%] items-center justify-between border-2 border-purple-400 p-4`}
        >
          <div className="w-[5vw]  ">
            <img src="/images/logo.jpg" alt="logo" />
          </div>
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
                className="duration-400 transition-colors hover:text-green-400"
              >
                {section}
              </Link>
            ))}
          </nav>
        </div>
        <section
          className={`${
            isOpen ? openingAnimationClass : closingAnimationClass
          } flex origin-top flex-col justify-center bg-black text-2xl`}
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
        </section>
      </header>
    </>
  );
};

export default Navbar;
