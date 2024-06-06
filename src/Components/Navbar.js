import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";

const navigation = [
  { name: "Contact", href: "#Contact" },
  { name: "Projects", href: "#Projects" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-50 bg-[#d8d8d8]/3 backdrop-blur-[5px]">
        <nav
          className="flex items-center justify-between px-60 py-4 border-b border-white/[0.2] max-[1718px]:px-44 max-[1586px]:px-24 max-[1444px]:px-12 max-[1188px]:px-24 max-[625px]:px-8 max-[499px]:py-2 max-[499px]:px-4"
          aria-label="Global"
        >
          <div className="flex item-center flex-row">
            <a href="/" className="-m-1.5 p-1.5">
              <h1 className="text-white text-xl font-semibold py-2">
                iP
              </h1>
            </a>
            <div className="hidden lg:flex lg:space-x-6 items-center ml-16">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="leading-6 text-white/[0.5] text-md transition-all ease-in hover:text-zinc-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 text-white/[0.5] inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:text-xl">
            <a href="https://github.com/iam-piyush" className="text-white/[0.5] text-md transition-all ease-in hover:text-zinc-300" target="blank">
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
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50 bg-black" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1 p-1">
                <h1 className="text-xl text-white font-semibold">
                  iP
                </h1>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white/[0.5]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  className="h-7 w-7 "
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-4 flow-root">
              <div className="-my-6 divide-y divide-white/[0.2]">
                <div className="space-y-2 py-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="block leading-7 text-white/[0.5] py-2 text-lg transition-all ease-in hover:text-zinc-300"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="/resume"
                    className=" py-2 flex items-center text-white/[0.5] text-lg transition-all ease-in hover:text-zinc-300"
                  >
                    My Resume
                    <FaArrowRight className="ml-1 text-base arrow-icon" />
                  </a>
                </div>
                <div className="py-6 flex text-xl">
                  <a href="https://github.com/iam-piyush" target="blank">
                    <FaGithub className="mr-4 text-white/[0.5] text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/iam-piyush/"
                    target="blank"
                  >
                    <FaLinkedinIn className="mr-4 text-white/[0.5] text-2xl" />
                  </a>
                  <a
                    href="mailto:code.piyush.kumar@gmail.com"
                    target="blank"
                    className="text-white/[0.5] text-2xl"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;
