import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center justify-between gap-5 border-t border-primary-white border-opacity-20 py-10 md:flex-row md:px-[7rem]">
        {/* LOGO */}
        <Link href={"#top"} className="">
          <img className="w-[10rem] " src="/images/logo_white.png" alt="logo" />
        </Link>

        {/* CONTACT INFO */}
        <div className="flex flex-col items-center gap-y-4 md:items-start">
          <h3 className="text-center text-xl font-medium capitalize tracking-wide text-primary-white">
            Contact us
            <div className="mx-auto h-[1px] w-[92%] bg-primary-white" />
          </h3>
          <div className="flex flex-col items-center gap-y-2 text-sm text-slate-200 text-opacity-90 md:items-baseline md:pl-1">
            <p className="">Prajwal P : +91 9480382738</p>
            <p className="">Vishnu Pradeep: +91 9449845944</p>
            <p className="">Email: Synergia@sahyadri.edu.in</p>
          </div>
        </div>

        {/* ADDRESS */}

        <div className="flex flex-col items-center gap-y-4 md:items-start pt-3 md:pt-0">
          <h3 className="text-xl font-medium capitalize tracking-wide text-primary-white">
            Address <div className="mx-auto h-[1px] w-[92%] bg-primary-white" />
          </h3>
          <div className="flex flex-col gap-y-1 text-sm text-slate-200 text-opacity-90 md:pl-1 items-center md:items-baseline">
            <p className="">Sahyadri Campus, Adyar,</p>
            <p className="">Mangaluru,Karnataka 575007</p>
          </div>
        </div>

        {/* SOCIAL MEDIA ICONS */}
        <div className="flex items-center justify-start gap-x-5 py-4 md:py-0">
          <Link
            href="https://instagram.com/synergia_sahyadri?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            className="rounded-md bg-primary-green p-2"
          >
            <FaInstagram className="text-xl font-bold text-primary-black" />
          </Link>

          <Link href="/" className="rounded-md bg-primary-green p-2">
            <FaFacebookSquare className="text-xl font-bold text-primary-black" />
          </Link>

          <Link href="/" className="rounded-md bg-primary-green p-2">
            <FaLinkedin className="text-xl font-bold text-primary-black" />
          </Link>
        </div>
      </footer>
      <div className="border-t border-primary-white border-opacity-30 py-3 text-center text-primary-white">
        {" "}
        ©️ Copyright 2023 - Synergia
      </div>
    </>
  );
};

export default Footer;
