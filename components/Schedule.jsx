"use client";

import React, { useState } from "react";
import Header from "./helper/Header";
import { motion } from "framer-motion";

const Schedule = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const days = ["01", "02", "03"];

  const events = [
    ["Event 1 for Day 1", "Event 200 for Day 1"],
    ["Event 1 for Day 2", "Event 2 for Day 2"],
    ["Event 1 for Day 3", "Event 2 for Day 3"],
  ];

  return (
    <>
      <div className="flex h-screen flex-col p-2">
        <Header num_={"02"} heading_={"schedule"} />

        <div className="mt-10 flex flex-col">
          {/* Days */}

          <ul className="flex flex-row items-center justify-between self-center overflow-hidden rounded-md bg-[#371990] font-work-sans">
            {days.map((day, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group flex cursor-pointer flex-col p-3 text-center font-semibold uppercase tracking-tight transition-colors  duration-500 hover:bg-primary-white
                ${activeIndex === index ? "bg-primary-green text-black" : ""}
                `}
              >
                <h1
                  className={`mr-2 text-3xl font-medium  group-hover:text-primary-black ${
                    activeIndex === index ? "" : "text-white"
                  }`}
                >
                  day{" "}
                  <span
                    className={`  group-hover:text-primary-black${
                      activeIndex === index ? "" : "text-primary-green"
                    }`}
                  >
                    {day}
                  </span>
                </h1>
                <p
                  className={` font-semibold  group-hover:text-primary-black group-hover:opacity-100 ${
                    activeIndex === index ? "" : "text-purple-500 opacity-60"
                  }`}
                >
                  december {parseInt(day) + 6}, 2023
                </p>
              </li>
            ))}
          </ul>

          {/* Events */}

          <section className="mt-[5%] flex cursor-pointer flex-col self-center font-red-hat-display font-semibold">
            {events[activeIndex].map((event, index) => (
              <div
                key={index}
                className="group relative my-3 w-fit self-center overflow-hidden border-[3px] border-primary-purple border-opacity-20 bg-transparent p-3
                text-center"
              >
                <span className="absolute inset-y-0 left-0 h-full w-0 bg-primary-green transition-all duration-500 group-hover:w-full" />
                <span
                  className="relative z-10 transition-colors duration-[0.6s] group-hover:text-primary-white 
                "
                >
                  {event}
                </span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Schedule;
