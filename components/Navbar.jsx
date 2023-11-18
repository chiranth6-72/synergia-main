"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import { RefContext } from "@/context/RefContext";

const Navbar = () => {
  const { homeRef, eventRef, galleryRef } = useContext(RefContext);

  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const sections = ["Home", "Events", "Gallery"];
  const refs = [homeRef, eventRef, galleryRef];

  const handleHomeClick = () =>
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  const handleEventClick = () =>
    eventRef.current.scrollIntoView({ behavior: "smooth" });
  const handleGalleryClick = () =>
    galleryRef.current.scrollIntoView({ behavior: "smooth" });

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
        className="relative top-0 z-[100] w-full bg-opacity-30 px-5 font-semibold text-primary-white backdrop-blur-md backdrop-filter transition-all duration-[0.7s] md:fixed md:bg-transparent md:transition-all md:duration-[0.7s]"

        // className={`${
        //   scrolled
        //     ? "relative top-0 bg-opacity-30 backdrop-blur-md backdrop-filter md:fixed md:bg-transparent md:transition-all md:duration-[0.7s]"
        //     : "relative md:fixed bg-transparent bg-opacity-30 backdrop-blur-md backdrop-filter"
        // } z-[100] w-full px-5 font-semibold text-primary-white transition-all duration-[0.7s]`}
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
          <nav className={`hidden cursor-pointer space-x-6 md:flex`}>
            {sections.map((section, index) => (
              <div
                key={index}
                // href={`#${section}`}
                onClick={() => refs[index].current.scrollIntoView()}
                className="transition-all duration-500 hover:text-primary-green"
              >
                {section}
              </div>
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
          animate={isOpen ? { height: "" } : { height: 0 }} // "" means auto
          transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="flex min-w-full origin-top transform cursor-pointer flex-col justify-center gap-y-3 overflow-hidden bg-transparent bg-opacity-30 text-2xl backdrop-blur-md backdrop-filter md:hidden "
        >
          {sections.map((section, index) => (
            <div
              key={index}
              // href={`#${section}`}
              onClick={() => refs[index].current.scrollIntoView()}
              className="self-center py-2 text-white transition-all duration-500 hover:text-primary-green"
            >
              {section}
            </div>
          ))}
        </motion.nav>
      </header>
    </>
  );
};

export default Navbar;
