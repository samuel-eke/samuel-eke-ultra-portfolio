import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { GridBackground } from "./ui/GridBackground";
import { TypewriterEffect } from "./ui/TypewriterEffect";

const Hero = () => {
  const wordsTyped = [
    { text: "Your" },
    { text: "vision," },
    { text: "expertly" },
    {
      text: "coded!",
      className: "text-red-500",
    },
  ];
  return (
    <div className="pb-20 pt-36">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="purple"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="blue"
      />
      <GridBackground />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89w] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Next experience
          </h2>

          <TypewriterEffect
            className="text-center text-[3.2rem] md:text-5xl lg:text-6xl text-blue-700"
            words={wordsTyped}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4">
            This will be done by Samuel Eke
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
