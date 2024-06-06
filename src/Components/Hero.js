import React from "react";
import { FaReact, FaPython, FaFigma } from "react-icons/fa";
import Tailwind from "../Assets/tailwind.svg";
import HeroCard from "./HeroCard";
import Profiles from "./Profiles";

const Hero = () => {
  return (
    <div className="px-80 my-76 flex justify-between max-[1872px]:px-60 max-[1718px]:px-44 max-[1586px]:px-24 max-[1444px]:px-12 max-[1188px]:flex-col max-[1188px]:mt-[12rem] max-[1188px]:px-24 max-[1007px]:mt-[-8.5rem] max-[625px]:px-8 max-[499px]:mt-[0rem] max-[499px]:px-4">
      <div className="left w-[45%] max-[1188px]:w-[100%]">
        <h1 className="text-zinc-100 text-6xl font-bold max-[1883px]:text-5xl max-[1330px]:text-3.5xl max-[1188px]:text-6xl max-[798px]:text-5xl max-[625px]:text-4xl">Hello!</h1>
        <h1 className="text-zinc-100 text-6xl font-bold mt-3 max-[1883px]:text-5xl max-[1330px]:text-3.5xl max-[1188px]:text-6xl max-[798px]:text-5xl max-[625px]:text-4xl">
          I'm Piyush Kumar
        </h1>
        <h2 className="text-white/[0.5] mt-7 text-lg max-[499px]:mt-4 max-[499px]:text-[16px]">
          Front-End Developer with 1+ years of experience. I’ve managed various
          design projects across different industries. Let’s work together!
        </h2>
        <div className="flex space-x-5 mt-7 max-[499px]:mt-4 max-[499px]:space-x-4">
          <a href="/resume"><button className="py-2 px-5 max-[499px]:px-3 max-[499px]:text-sm border border-zinc-100 bg-zinc-100 rounded-md transition-all ease-in-out hover:bg-black hover:border hover:border-zinc-100 hover:text-zinc-100">
            My Resume
          </button></a>
          <a href="#mailto:iampiyush@gmail.com"><button className="text-zinc-100 border border-zinc-100 rounded-md py-2 px-5 max-[499px]:px-3 max-[499px]:text-sm transition-all ease-in-out hover:bg-zinc-100 hover:border hover:border-zinc-100 hover:text-black">
            Contact Me
          </button></a>
        </div>
        <div className="text-white/[0.5] flex items-center space-x-5 mt-7 max-[499px]:mt-5">
          <div className="flex items-center space-x-1">
            <FaReact className="text-4xl max-[499px]:text-2xl" />
            <h3 className="text-sm max-[499px]:text-[11px]">React</h3>
          </div>
          <div className="flex items-center space-x-1">
            <img src={Tailwind} className="w-[36px]" alt="TailwindCSS" />
            <h3 className="text-sm max-[499px]:text-[11px]">TailwindCSS</h3>
          </div>
          <div className="flex items-center space-x-1">
            <FaPython className="text-4xl max-[499px]:text-2xl" />
            <h3 className="text-sm max-[499px]:text-[11px]">Python</h3>
          </div>
          <div className="flex items-center space-x-1">
            <FaFigma className="text-4xl max-[499px]:text-2xl" />
            <h3 className="text-sm max-[499px]:text-[11px]">Figma</h3>
          </div>
        </div>
      </div>
      <div className="right w-[50%] max-[1188px]:w-[100%] max-[1007px]:hidden">
        <Profiles />
        <HeroCard />
      </div>
    </div>
  );
};

export default Hero;
