import React from "react";
import { events } from "@/data/eventData";
import Header from "./helper/Header";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

const Event = () => {
  return (
    <main>
      <section id="Events">
        <Header num_={"01"} heading_={"events"} />
      </section>

      <section className="relative flex h-screen flex-col items-center justify-center gap-4 p-5 md:flex-row">
        {events.map((event, index) => (
          <div
            key={index}
            className="group relative h-64 overflow-hidden bg-red-300"
          >
            <img
              src={event.img_}
              alt="event_img"
              className="w-full -translate-y-7 object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
            />
            <Link
              href={event.link_}
              target="_blank"
              className="absolute inset-0 flex items-end my-5 justify-center font-work-sans text-xl font-semibold uppercase tracking-wide opacity-0 transition-all duration-500 group-hover:opacity-100 "
            >
              <h3 className=" w-full bg-transparent py-3 text-center text-primary-green ">
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
