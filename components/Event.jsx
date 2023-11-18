"use client";

import { events } from "@/data/eventData";
import Header from "./helper/Header";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import { RefContext } from "@/context/RefContext";
import { useContext } from "react";

const Event = () => {
  const { eventRef } = useContext(RefContext);

  return (
    <main className="">
      <div id="Events" ref={eventRef} className="h-[2rem]" />
      <Header num_={"01"} heading_={"events"} />

      <section className="relative flex h-full flex-col items-center justify-center gap-4 p-5 md:flex-row ">
        {events.map((event, index) => (
          <div
            key={index}
            className="group relative h-64 overflow-hidden rounded-sm"
          >
            <img
              src={event.img_}
              alt="event_img"
              className="h-64 w-full  object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75 "
            />
            <Link
              href={event.link_}
              target="_blank"
              className="absolute inset-0 left-0 top-0 my-5 flex h-full w-full items-end justify-center font-work-sans  text-xl font-semibold tracking-wide opacity-0 transition-all duration-500 group-hover:opacity-100"
            >
              <h3 className=" mb-8 w-full bg-transparent py-3 text-center capitalize text-primary-green text-opacity-90">
                Visit <GoLinkExternal className="inline-block pl-1" />
              </h3>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Event;
