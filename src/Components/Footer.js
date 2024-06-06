import React  from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

import DP from "../../src/Assets/iamPiyush.webp";

export function Footer() {
  return (
    <div>
      <footer className="flex items-center justify-between px-80 py-4 border-t border-white/[0.2] max-[1872px]:px-60 max-[1718px]:px-44 max-[1586px]:px-24 max-[1444px]:px-12 max-[1188px]:px-24 max-[625px]:px-8 max-[499px]:py-2 max-[499px]:px-4">
        <div>
          <a href="/"><img src={DP} alt="" className="rounded-full w-10" /></a>
        </div>
        <div className="flex flex-1 justify-end text-xl">
          <a
            href="https://github.com/iam-piyush"
            className="text-white/[0.5] text-md transition-all ease-in hover:text-zinc-300"
            target="blank"
          >
            <FaGithub className="mr-4 " />
          </a>
          <a href="https://www.linkedin.com/in/iam-piyush/" target="blank">
            <FaLinkedinIn className="mr-4 text-white/[0.5] text-md transition-all ease-in hover:text-zinc-300" />
          </a>
          <a
            href="mailto:code.piyush.kumar@gmail.com"
            target="blank"
            className="text-white/[0.5] text-md transition-all ease-in hover:text-zinc-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
