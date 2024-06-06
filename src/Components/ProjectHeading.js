import React from "react";
import SparklesCore from "./ui/sparkle";

export function ProjectHeading() {
  return (
    <section id="projects">
    <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mt-56 z-10">
      <h1 className="text-3xl lg:text-[2.5rem] font-bold text-center text-white relative z-20 py-2 max-[625px]:text-3xl max-[499px]:text-2xl">
        Odyssey of Innovation
      </h1>
      <div className="w-[30rem] h-40 max-[499px]:h-50 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_3%,black)] max-[499px]:[mask-image:radial-gradient(ellipse_at_top,transparent_0%,black)]"></div>
      </div>
    </div>
    </section>
  );
}

export default ProjectHeading;
