"use client";

import React from "react";
import Header from "./helper/Header";
import { useContext } from "react";
import { RefContext } from "@/context/RefContext";

const About = () => {
  const { aboutRef } = useContext(RefContext);

  return (
    <main className="mb-5 h-fit">
      <div id="Gallery" ref={aboutRef} className="h-[2rem]" />
      <Header num_={"03"} heading_={"About"} />

      <div className="mx-auto my-10 flex w-full md:w-[69%] flex-col gap-3 overflow-hidden rounded-md bg-transparent bg-white bg-opacity-50 px-10 py-10 text-justify font-work-sans text-lg backdrop-blur-md backdrop-filter">
        <p className="">
          <strong>Synergia</strong> is more than the sum of its parts, it is a
          holistic celebration of <strong>passion</strong>,{" "}
          <strong>curiosity</strong>, and <strong>innovation</strong>. Our event
          brings together the worlds of aviation, curiosity, and coding,
          creating an environment where diverse interests coalesce into
          something truly extraordinary. It is indeed a journey where aviation
          dreams take flight, young minds discover the joys of technology, and
          code becomes the language of boundless possibilities. Synergia is not
          just an event,{" "}
          <strong>it is an experience that shapes the future</strong>.
        </p>
        <p className="">
          Sahyadri College of Engineering and Management (SCEM), Mangaluru, was
          established in 2007. It is one of the premier technological
          institutions incubating quality and value-based education through the
          innovative teaching-learning process for the holistic development of
          the students. The In-house Industries, Startups, and Launchpads are
          the mainstay of the College. The institute comprises around 250
          well-qualified and experienced Faculty and Staff members to mentor and
          guide young talents. Sahyadri promotes the idea of{" "}
          <strong>Project-Based</strong> Learning through various activities and
          initiatives in association with various in-house industries, which
          helps the students to improve their expertise.
        </p>
      </div>
    </main>
  );
};

export default About;
