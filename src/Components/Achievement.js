import React from "react";

export function Achievement() {
  return (
    <section id="projects">
    <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md mt-4 max-[1188px]:mt-[12rem] max-[1007px]:mt-[-10.5rem] max-[499px]:mt-[-3.5rem]">
      <h1 className="text-3xl lg:text-[2.5rem] font-bold text-center text-white relative z-20 py-2 max-[625px]:text-3xl max-[499px]:text-2xl">
        Among My Successes
      </h1>
      <div className="w-[40rem] h-24 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>
    </div>
    </section>
  );
}

export default Achievement;
