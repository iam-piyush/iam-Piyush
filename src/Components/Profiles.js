import React from "react";
import { AnimatedTooltip } from "./ui/profileMenu";
import iamPiyush from "../Assets/iamPiyush.webp";

const people = [
  {
    id: 1,
    name: "Piyush Kumar",
    designation: "Front-End Developer",
    image:
      iamPiyush,
  },
  {
    id: 2,
    name: "Ritika Bhatia",
    designation: "UX/UI Designer",
    image:
      "https://iamritika.vercel.app/static/media/profile.cd69211a53136476dfca.png",
  },
];

export function Profiles() {
  return (
    <div className="flex flex-row items-center justify-end mb-2 pr-3 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export default Profiles;
