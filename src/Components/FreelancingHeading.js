import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter";

function FreelancingHeading() {
  const words = [
    {
      text: "My",
    },
    {
      text: "Freelancing",
    },
    {
      text: "Projects.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-fit">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4" />
    </div>
  );
}

export default FreelancingHeading;
