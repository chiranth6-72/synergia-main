import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t border-primary-white border-opacity-20  px-[7rem] py-5">
      {/* LOGO */}
      <Link href={"#top"} className="">
        <img className="w-[10rem] " src="/images/logo_black.png" alt="logo" />
      </Link>

      {/* CONTACT INFO */}
      <div className="flex flex-col items-start gap-y-2">
        <p className="text-md font-medium capitalize text-primary-black tracking-wide">
          Contact us
        </p>
        <p className="text-sm text-primary-black">Prajwal P : +91 9480382738</p>
        <p className="text-sm text-primary-black">
          Vishnu Pradeep: +91 9449845944
        </p>
        <p className="text-sm text-primary-black">Email: Synergia@sahyadri.edu.in</p>
      </div>

      {/* ADDRESS */}

      <div className="">
        <p className="text-md font-medium capitalize text-primary-black tracking-wide">
          Address </p>
        <p className="text-sm text-primary-black">Sahyadri Campus, Adyar,</p>
        <p className="text-sm text-primary-black">Mangaluru,Karnataka 575007</p>
      </div>

      {/* SOCIAL MEDIA ICONS */}
      <div className="flex items-center justify-start gap-x-5">
        <Link href="/" className="rounded-md bg-primary-green p-2">
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
  );
};

export default Footer;
