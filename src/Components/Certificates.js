import React from "react";
import DesignQuest from "../Assets/Certificates/DesignQuest.webp";
import Logo from "../Assets/Certificates/LogoDesigning.webp";
import WebDevSummit from "../Assets/Certificates/WebSummit2023.webp";
import Technophilla from "../Assets/Certificates/Technophilla.webp";
import ProjectDisplay from "../Assets/Certificates/ProjectDisplay.webp";
import TechnicalQuiz from "../Assets/Certificates/TechnicalQuiz.webp";
import ScienceDay from "../Assets/Certificates/ScienceDay.webp";


const Here = [
  {
    id: "7",
    img: ScienceDay,
    li1: "Achieved 1st place in Science Day, competing against 70 teams representing various engineering colleges across Punjab.",
    li2: "<span>Date:- 28<sup>th</sup> February, 2024</span>",
  },
  {
    id: "3",
    img: WebDevSummit,
    li1: "Secured 1st position at the prestigious WebDev Summit 2023, held at Chandigarh Engineering College.",
    li2: "<span>Date:- 3<sup>rd</sup> November, 2023</span>",
  },
  {
    id: "4",
    img: Technophilla,
    li1: "Achieved 1st position in Techophilla on Engineers Day at Chandigarh Engineering College, Mohali.",
    li2: "<span>Date:- 15<sup>th</sup> September, 2023</span>",
  },
  {
    id: "1",
    img: DesignQuest,
    li1: "Secured 2nd place in DesignQuest, organized by CGC College of Engineering's Kerberos club.",
    li2: "Date:- 3<sup>rd</sup> March, 2023</span>",
  },
  {
    id: "6",
    img: TechnicalQuiz,
    li1: "Secured 3rd place in Project Display, competing against 200 teams representing various engineering colleges across Punjab.",
    li2: "<span>Date:- 4<sup>th</sup> November, 2022</span>",
  },
  {
    id: "2",
    img: Logo,
    li1: "Earned 2nd place in the logo designing competition hosted by the Computer Science Engineering Department at Chandigarh Engineering College, Mohali.",
    li2: "<span>Date:- 12<sup>th</sup> October, 2022</span>",
  },
  {
    id: "5",
    img: ProjectDisplay,
    li1: "Secured 3rd place in Project Display, competing against 200 teams representing various engineering colleges across Punjab.",
    li2: "<span>Date:- 10<sup>th</sup> & 11<sup>th</sup> April, 2022</span>",
  },
];

export function Icon({ className, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}

export function Certificates() {
  return (
    <div className="flex px-60 max-[499px]:-my-20 flex-wrap items-stretch max-[1872px]:px-40 max-[1718px]:px-4 max-[625px]:px-8 max-[499px]:px-4">
      {Here.map((item, i) => (
        <div className="border rounded-lg border-white/[0.2] flex flex-col items-start max-w-md mx-auto p-4 relative mt-10 max-[928px]:max-w-full">
          

          <div key={i}>
            <img
              src={item.img}
              alt="Piyush Kumar"
              loading="lazy"
              className="brightness-75 bg-white rounded-md"
            />
            <ul className="text-white/[0.7] leading-6 mt-4 text-sm list-disc pl-3 space-y-4 max-[625px]:text-[1rem]">
              <li>{item.li1}</li>
              <li dangerouslySetInnerHTML={{ __html: item.li2 }} />
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Certificates;
