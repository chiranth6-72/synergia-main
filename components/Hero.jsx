"use client";
// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const Hero = () => {
//   return (
//     <>
//       <div
//         id="Home"
//         className="relative flex h-screen flex-col items-center justify-center gap-6  font-red-hat-display text-primary-white"
//       >
//         <button className="absolute left-5 top-[40%] rounded-full p-3 transition-all duration-500 hover:bg-slate-300 hover:bg-opacity-30">
//           <FaArrowLeft className="text-2xl opacity-70" />
//         </button>
//         <button className="absolute right-5 top-[40%] rounded-full p-3 transition-all duration-500 hover:bg-slate-300 hover:bg-opacity-30">
//           <FaArrowRight className="text-2xl opacity-70" />
//         </button>
//         <motion.h1
//           className="text-center text-9xl font-bold tracking-wider"
//           initial={{ opacity: 0, y: 75 }}
//           whileInView={{ opacity: 1, y: 0 }}
// viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
//         >
//           5 DAYS
//           <br />
//           <span className="text-primary-green">PARTY</span>
//         </motion.h1>
//         <motion.p
//           className="w-[35%] text-center tracking-wide"
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
//         >
//           The biggest music event in decades. Attended by more than 100
//           musicians from all over the world. Get your ticket now!
//         </motion.p>
//         <a href="#Events" className="no-underline">
//           <motion.button
//             className="bg-primary-green px-10 py-2 font-semibold capitalize tracking-wider text-primary-black"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, ease: "easeInOut", delay: 0.9 }}
//           >
//             Explore
//           </motion.button>
//         </a>
//       </div>
//     </>
//   );
// };

// export default Hero;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { slides } from "@/data/heroData";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goPrev = () =>
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
//     );
//   const goNext = () =>
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);

//   return (
//     <section className="relative flex h-screen flex-col items-center justify-center font-red-hat-display text-primary-white">
//       <button
//         className="absolute left-5 top-[40%] rounded-full p-3 transition-all duration-500 hover:bg-slate-300 hover:bg-opacity-30"
//         onClick={goPrev}
//       >
//         <FaArrowLeft className="text-2xl opacity-70" />
//       </button>
//       <button
//         className="absolute right-5 top-[40%] rounded-full p-3 transition-all duration-500 hover:bg-slate-300 hover:bg-opacity-30"
//         onClick={goNext}
//       >
//         <FaArrowRight className="text-2xl opacity-70" />
//       </button>
//       <AnimatePresence mode="wait">
//         {slides.map((slide, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             className={`${
//               index === currentIndex ? "block" : "hidden"
//             } flex flex-col items-center gap-6 transition-all duration-500`}
//           >
//             <motion.h1
//               className="text-center text-9xl font-bold capitalize tracking-wider"
//               initial={{ opacity: 0, y: 75 }}
//               animate={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
//             >
//               {slide.h_}
//             </motion.h1>

//             <motion.p
//               className="w-[35%] text-center tracking-wide "
//               initial={{ opacity: 0, y: 100 }}
//               animate={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
//             >
//               {slide.p_}
//             </motion.p>

//             <motion.button
//               className="bg-primary-green px-10 py-2 font-semibold capitalize tracking-wider text-primary-black"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, ease: "easeInOut", delay: 0.9 }}
//             >
//               Explore
//             </motion.button>
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Hero;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { slides } from "@/data/heroData";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const slide = slides[currentIndex];

//   const goPrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
//     );
//     setDirection(-1);
//   };

//   const goNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     setDirection(1);
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(timer); // Clean up on component unmount
//   }, []);

//   return (
//     <div className="duration-400 relative flex h-screen flex-col items-center justify-center gap-y-10 font-red-hat-display text-primary-white transition-all">
//       <button
//         className="duration-400 absolute left-5 top-[40%] rounded-full p-3 transition-all hover:bg-slate-300 hover:bg-opacity-30"
//         onClick={goPrev}
//       >
//         <FaArrowLeft className="text-2xl opacity-70" />
//       </button>
//       <button
//         className="duration-400 absolute right-5 top-[40%] rounded-full p-3 transition-all hover:bg-slate-300 hover:bg-opacity-30"
//         onClick={goNext}
//       >
//         <FaArrowRight className="text-2xl opacity-70" />
//       </button>

//       <motion.h1
//         className="text-center text-6xl font-bold capitalize tracking-wider transition-all duration-500 md:text-9xl"
//         key={`p-h-${currentIndex}`}
//         initial={{ opacity: 0, y: 75 }}
//         animate={{ opacity: 1, y: 0 }}
//         // viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
//         // exitTransition={{ duration: 0.5, ease: "easeInOut" }}
//       >
//         {slide.h_}
//       </motion.h1>
//       <motion.p
//         className="w-[35%] text-center text-xl font-medium tracking-wide transition-all duration-500"
//         key={`p-p-${currentIndex}`}
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         // viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
//       >
//         {slide.p_}
//       </motion.p>
//       <motion.button
//         className="bg-primary-green px-10 py-2 font-semibold capitalize tracking-wider text-primary-black transition-all duration-500"
//         key={`p-btn-${currentIndex}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         // viewport={{ once: true }}
//         transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
//       >
//         Explore
//       </motion.button>
//     </div>
//   );
// };

// export default Hero;

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

      <div className=" flex h-full w-full flex-col items-center justify-center gap-y-6 bg-black ">
        <h1
          className="mt-[-6rem] text-center text-6xl font-bold capitalize tracking-wider transition-all duration-500 md:text-9xl animate-slide-in-bt-nodelay animate-rotate-scale-up-ver"
          key={currentIndex}
        >
          {data[currentIndex].title}
        </h1>
        <p className="w-[35%] text-center text-xl font-medium tracking-wide transition-all duration-500">
          {data[currentIndex].subtitle}
        </p>
        <h1>{data[currentIndex].desc}</h1>
        <button className="bg-primary-green px-10 py-2 font-semibold capitalize tracking-wider text-primary-black transition-all duration-500">
          Explore{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
