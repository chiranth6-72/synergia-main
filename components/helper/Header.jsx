"use client";

import React from "react";
import { motion } from "framer-motion";

const Header = ({ num_, heading_ }) => {
  return (
    <>
      {/* <div className="w-screen overflow-hidden py-3 text-center uppercase"> */}
      <section className="mt-20 w-full py-3 text-center uppercase ">
        <motion.p
          className="font-main-text mx-auto text-5xl font-bold text-primary-white "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          <span className="pr-3 text-primary-green">{num_}</span>
          {heading_}
        </motion.p>

        {/* Underline */}

        <motion.div
          className="mx-auto my-4 h-[5px] w-[6%] bg-primary-green"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        ></motion.div>
      </section>
      {/* </div> */}
    </>
  );
};

export default Header;
