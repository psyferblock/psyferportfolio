import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute left-0 top-0
       flex h-screen w-full items-center justify-center bg-white"
      >
        <div
          className="dark:bg-black-100 pointer-events-none absolute inset-0 flex items-center justify-center
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
    </div>
  );
};

export default Hero;
