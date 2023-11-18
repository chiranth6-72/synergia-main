"use client";

import { useState, useEffect, useContext } from "react";
import ShiftingCountdown from "./Counter";
import { RefContext } from "@/context/RefContext";

const Hero = () => {
  const { homeRef } = useContext(RefContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const data = [
    {
      img: "",
      title: "Synergia",
      subtitle: "Trifecta of excitement",
      desc: "",
    },
    {
      img: "",
      title: "Innovate",
      subtitle: "Awaken the innovator within",
      desc: "",
    },
    {
      img: "",
      title: "Aspire",
      subtitle: "Aspire to greater heights",
      desc: "",
    },
    {
      img: "",
      title: "Inspire",
      subtitle: "Inspire creative brilliance",
      desc: "",
    },
  ];

  const changeSlide = (property) => {
    const newIndex =
      property === "next"
        ? (currentIndex + 1) % data.length
        : (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(newIndex);
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(timer); // Clean up on component unmount
  }, [toggle]);

  return (
    <main id="Home" ref={homeRef} className="relative">
      <div
        className={`duration-400 relative flex h-screen flex-col items-center justify-center gap-y-10 bg-opacity-10 bg-[url('/bg/hero_mobile.png')] bg-cover bg-center bg-no-repeat font-red-hat-display text-primary-white transition-all md:bg-[url('/bg/hero.png')]`}
      ></div>
      <div className="absolute bottom-0 w-full">
        <ShiftingCountdown />
      </div>
    </main>
  );
};

export default Hero;

// Previous Carousel
{
  /* <button
        className="duration-400 absolute left-5 top-[40%]  rounded-full p-3 transition-all hover:bg-slate-300 hover:bg-opacity-30"
        onClick={() => {
          changeSlide("prev");
        }}
      >
        <FaArrowLeft className="text-2xl opacity-70" />
      </button>

      <button
        className="duration-400 absolute right-5 top-[40%] rounded-full p-3 transition-all hover:bg-slate-300 hover:bg-opacity-30"
        onClick={() => {
          changeSlide("next");
        }}
      >
        <FaArrowRight className="text-2xl opacity-70" />
      </button>

      <div
        className=" flex h-full w-full flex-col items-center justify-center gap-y-6 "
        key={currentIndex}
      >
        <h1 className="slideIn mt-[-6rem] text-center text-6xl font-bold capitalize tracking-wider transition-all duration-500 md:text-9xl">
          {data[currentIndex].title}
        </h1>
        <p className="slideInDelay w-[35%] text-center text-xl font-medium tracking-wide transition-all duration-500">
          {data[currentIndex].subtitle}
        </p>
        <h1>{data[currentIndex].desc}</h1>
        <button
          className="fadeOutBtn bg-primary-green px-10 py-2 font-semibold capitalize tracking-wider text-primary-black "
          key={currentIndex}
        >
          Explore{" "}
        </button>
      </div> */
}
