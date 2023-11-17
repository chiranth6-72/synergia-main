"use client";

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Hero = () => {
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
    <div className="duration-400 relative flex h-screen flex-col items-center justify-center gap-y-10 font-red-hat-display text-primary-white transition-all ">
      <button
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
        className=" flex h-full w-full flex-col items-center justify-center gap-y-6 bg-black "
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
          className="fadeOutBtn 
 bg-primary-green px-10 py-2 font-semibold capitalize tracking-wider text-primary-black "
          key={currentIndex}
        >
          Explore{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
