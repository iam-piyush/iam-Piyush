import React from "react";
import StickyScroll from "./ui/stickyscroll";

import MindGinieApp from "../Assets/Projects/MindGinieApp.webp";
import MindGinieWeb from "../Assets/Projects/MindGinieWeb.webp";
import WeatherApp from "../Assets/Projects/WeatherApp.webp";
import Menu from "../Assets/Projects/Menu.webp";


const content = [
  {
    title: "MindGinie Mobile Application(Front-End)",
    description:
      "The easiest mobile application for relieving stress and anxiety is called MindGinie, and it follows you about like a trusted friend. It is simple to use and produces quantifiable, quick results. It also includes more than 100 methods or cures for instant relief.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={MindGinieApp}
          alt="MindGinie Mobile Application"
          className="w-full h-full"
        />
      </div>
    ),
  },
  {
    title: "MindGinie Website Design",
    description:
      "The easiest website for relieving stress and anxiety is called MindGinie, and it follows you about like a trusted friend. It is simple to use and produces quantifiable, quick results. It also includes more than 100 methods or cures for instant relief.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={MindGinieWeb}
          alt="MindGinie Website"
          className="w-full h-full scale-110"
        />
      </div>
    ),
  },
  {
    title: "Weather Application UI Design",
    description:
      "LinkedIn sourced weather app UI project. Sleek interface, easy navigation. Features: current conditions, forecasts, radar maps, alerts. Minimalist layout for optimal user experience.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={WeatherApp}
          alt="Weather App UI Design"
          className="w-full h-full scale-110"
        />
      </div>
    ),
  },
  {
    title: "Snacks Point Menu Design",
    description:
      "Received a Snacks Point menu design project via a LinkedIn client. The menu showcases a diverse array of delectable snacks, from savory to sweet, presented in a visually appealing format. Each item is creatively described, enticing customers with mouthwatering descriptions.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={Menu}
          alt="Weather App UI Design"
          className="w-full h-full scale-110"
        />
      </div>
    ),
  },
  {
    title: "Contact Me",
    description:
      "Your Gateway to Exceptional UX/UI Design and Web Development Services. Our team specializes in crafting captivating user experiences (UX) and intuitive user interfaces (UI) that resonate with your audience, coupled with expert web development solutions that bring your vision to life.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src=""
          alt="Weather App UI Design"
          className="w-full h-full scale-110"
        />
      </div>
    ),
  },
  {
    title: "",
    description:
      "",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src=""
          alt="Weather App UI Design"
          className="w-full h-full scale-110"
        />
      </div>
    ),
  },
];

export function Freelancing() {
  return (
    <div className="px-60 max-[1872px]:px-60 max-[1718px]:px-44 max-[1586px]:px-24 max-[1444px]:px-12 max-[1188px]:px-10 max-[625px]:px-8 max-[499px]:py-2 max-[499px]:px-4">
      <StickyScroll content={content} />
    </div>
  );
}

export default Freelancing;
