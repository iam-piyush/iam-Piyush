import React from "react";
import Hero from "./Hero";

export function BG() {
  return (
    <div className="h-[50rem] max-[499px]:h-[40rem] w-full bg-black bg-dot-white/[0.15] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] max-[499px]:[mask-image:radial-gradient(ellipse_at_center,transparent_65%,black)]"></div>
      <Hero />
    </div>
  );
}
export default BG;
