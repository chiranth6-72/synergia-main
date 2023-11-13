import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <>
      <section
        id="container"
        className="font-work-sans flex flex-col border-[1px] border-purple-400 bg-[#371990] text-white transition-transform duration-500 ease-in-out hover:scale-105"
      >
        <h2 className="w-full cursor-pointer p-10 text-center text-3xl font-semibold uppercase tracking-normal transition-all duration-500 hover:tracking-widest">
          events
        </h2>

        <div className="group w-full bg-[#ccfe6b] text-black transition duration-300 hover:bg-[#4a2f9a]">
          <h1 className="w-full p-10 text-center text-5xl font-extrabold uppercase tracking-wide transition  duration-[1.2s] group-hover:text-[#ccfe6b]">
            aerophilia
          </h1>
        </div>

        <div className="m-4 flex flex-col gap-2 p-10 capitalize">
          <p>One</p>
          <p>One</p>
          <p>One</p>
          <p>One</p>
        </div>

        <div id="header" className="flex border-t p-10 ">
          <Link
            href={"https://aerophilia.in"}
            target="_blank"
            className="m-auto bg-[#ccfe6b] px-7 py-2 font-semibold uppercase tracking-wide text-black transition-all duration-500 hover:border hover:border-[#ccfe6b] hover:bg-[#371990] hover:text-[#ccfe6b]"
          >
            Visit Website
          </Link>
        </div>
      </section>
    </>
  );
};

export default Card;
