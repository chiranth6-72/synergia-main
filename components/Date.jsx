"use client";

import React from "react";
import { motion } from "framer-motion";

const Date = () => {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center gap-2 bg-primary-green pb-5 pt-8 text-primary-black">
        <motion.h2
          className="font-work-sans text-7xl font-extrabold uppercase tracking-tight"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
        >
          december 7-9
        </motion.h2>
        <motion.h3
          className="font-red-hat-display text-2xl font-semibold capitalize "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
        >
          sahyadri campus, adyar, mangaluru
        </motion.h3>
      </section>
    </>
  );
};

export default Date;
