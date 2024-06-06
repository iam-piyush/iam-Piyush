import { HoverEffect } from "./ui/grid";

import MindGinieApp from "../Assets/Projects/MindGinieApp.webp"
import MindGinieWeb from "../Assets/Projects/MindGinieWeb.webp"
import WeatherApp from "../Assets/Projects/WeatherApp.webp"
import Menu from "../Assets/Projects/Menu.webp"


export function Grid() {
  const projects = [
    {
      image: MindGinieApp,
      title: "MindGinie Mobile Application(Front-End)",
      description:
        "The easiest mobile application for relieving stress and anxiety is called MindGinie, and it follows you about like a trusted friend. It is simple to use and produces quantifiable, quick results. It also includes more than 100 methods or cures for instant relief.",
      link: "",
    },
    {
      image: MindGinieWeb,
      title: "MindGinie Website Design",
      description:
        "The easiest website for relieving stress and anxiety is called MindGinie, and it follows you about like a trusted friend. It is simple to use and produces quantifiable, quick results. It also includes more than 100 methods or cures for instant relief.",
      link: "https://www.figma.com/proto/j1AS5SjN9bRk8kkG3OxsrP/Untitled?page-id=0%3A1&type=design&node-id=1-751&viewport=712%2C519%2C0.08&t=tlG0xycjw21MwGbQ-1&scaling=scale-down&starting-point-node-id=1%3A751&mode=design",
    },
    {
      image: WeatherApp,
      title: "Weather Application",
      description:
        "LinkedIn sourced weather app UI project. Sleek interface, easy navigation. Features: current conditions, forecasts, radar maps, alerts. Minimalist layout for optimal user experience.",
      link: "",
    },
    {
      image: Menu,
      title: "Snacks Point Menu Design",
      description:
        "Received a Snacks Point menu design project via a LinkedIn client. The menu showcases a diverse array of delectable snacks, from savory to sweet, presented in a visually appealing format. Each item is creatively described, enticing customers with mouthwatering descriptions.",
      link: "",
    },
];

  return (
    <div className="mb-20 px-60 max-[1872px]:px-60 max-[1718px]:px-44 max-[1586px]:px-24 max-[1444px]:px-12 max-[1188px]:px-10 max-[625px]:px-8 max-[499px]:py-2 max-[499px]:px-4">
      <HoverEffect items={projects} className={'hidden max-[1024px]:grid'} />
    </div>
  );
}

export default Grid;