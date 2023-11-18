"use client";

import { createContext, useRef } from "react";

export const RefContext = createContext();

const Context = ({ children }) => {
  const homeRef = useRef(null);
  const eventRef = useRef(null);
  const galleryRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <RefContext.Provider
      value={{
        homeRef,
        eventRef,
        galleryRef,
        aboutRef,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export default Context;
