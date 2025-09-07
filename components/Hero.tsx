"use client";
import React from "react";
import { GridBackground } from "./ui/GridBackground";
import { TextGenerateEffect } from "./ui/TextGenEffect";
import MagicButton from "./ui/MagicButton";
import { MdWork } from "react-icons/md";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import animationData from "@/data/lottie/devStation.json";
import { FaFileDownload } from "react-icons/fa";
import { saveAs } from "file-saver";
import { Button } from "./ui/MovingBorders";
import { SpotlightNew } from "./ui/spotlight-new";


const Hero = () => {
  const lottieOptions = {
    loop: true,
    autoPlay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCVDownload = () => {
    console.log("download pressed");
    const fileUrl = "/documents/Frontend Developer_2.pdf";
    saveAs(fileUrl, "samuel-eke-resume.pdf");
  };
  return (
    <div className="pb-20 pt-36">
      <SpotlightNew />
      <GridBackground />
      <div className="flex flex-row justify-between relative my-20 z-10">
        <div className="max-w-[89w] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Art of Excellence
          </h2>

          <TextGenerateEffect
            words="Your Vision, expertly coded"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4">
            This will be done by Samuel Eke
          </p>
          <div className="flex flex-row justify-between gap-10">
            <MagicButton
              title="See my works"
              icon={<MdWork />}
              position="right"
            />
            <Button
              className="p-3 gap-1"
              borderRadius="1.8rem"
              onClick={handleCVDownload}
              duration={5000}>
              Download Resume {<FaFileDownload />}
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <Lottie
            options={lottieOptions}
            height={400}
            width={400}
            eventListeners={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
