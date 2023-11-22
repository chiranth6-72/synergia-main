"use client";

import React, { useState, useEffect, useContext } from "react";
import { images } from "@/data/imgData";
import Header from "./helper/Header";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { RefContext } from "@/context/RefContext";


const Gallery = () => {
  const { galleryRef } = useContext(RefContext);



  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hover, setHover] = useState(false);
  // const [image, setImage] = useState([]);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length,
    );
  };

  useEffect(() => {
    let interval;
    if (!hover) {
      interval = setInterval(nextImage, 2000);
    }
    return () => clearInterval(interval);
  }, [currentImageIndex, hover]);


  return (
    <main
      id=""
      className="bg-opacity-10 bg-[url('/bg/GALLERY_bg_vector.png')] bg-cover bg-center bg-no-repeat"
    >
      <div id="Gallery" ref={galleryRef} className="h-[2rem]" />
      <Header num_={"02"} heading_={"gallery"} />

      <section className="relative h-screen">
        <div className="relative mx-auto my-10 flex h-[70%] w-[90%] items-center  justify-center md:w-[50%] ">
          <div
            className="absolute h-full w-full cursor-pointer overflow-hidden rounded-lg shadow-sm"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            {images.map((image, index) => (
              <img
                // width={500}
                // height={500}
                key={index}
                className={`absolute h-full w-full object-cover transition-all duration-500 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                src={image}
                alt=""
              />
            ))}
          </div>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-r-full border-none bg-slate-700 bg-opacity-40 p-2 text-2xl text-white transition-all duration-500 hover:bg-opacity-80"
            onClick={prevImage}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-l-full border-none bg-slate-700  bg-opacity-40 p-2 text-2xl text-white transition-all duration-500 hover:bg-opacity-80"
            onClick={nextImage}
          >
            <FaArrowRight />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
