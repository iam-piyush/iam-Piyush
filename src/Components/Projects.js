import { Tabs } from "./ui/tabs";

//Mobile
import FileBhejo from "../Assets/Projects/FileBhejo.webp";
import QRCashier from "../Assets/Projects/QRCashier.webp";
import Integrete from "../Assets/Projects/Integrete.webp";
import DigiStudyADDA from "../Assets/Projects/DigiStudyADDA.webp";

//Desktop
import FileBhejoDesktop from "../Assets/Projects/FileBhejoDesktop.webp";
import QRCashierDesktop from "../Assets/Projects/QRCashierDesktop.webp";
import IntegreteDesktop from "../Assets/Projects/IntegreteDesktop.webp";
import DigiStudyADDADesktop from "../Assets/Projects/DigiStudyADDADesktop.webp";

export function Projects() {
  const tabs = [
    {
      title: "FileBhejo",
      value: "FileBhejo.vercel.app",
      content: (
        <div className="w-full overflow-hidden relative h-fit rounded-2xl p-10 max-[927px]:p-6 text-white/[0.5] bg-black bg-dot-white/[0.15] border border-white/[0.2]">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_85%,black)] max-[499px]:[mask-image:radial-gradient(ellipse_at_center,transparent_85%,black)]"></div>
          <div className="flex justify-between w-full items-center max-[927px]:flex-col-reverse">
            <div className="left w-[77%] max-[974px]:w-[76%] max-[927px]:w-full">
              <a href="https://filebhejo.vercel.app/" target="blank">
                <p className="text-4xl font-bold text-white/[0.8] max-[974px]:text-xl">
                  FileBhejo Web Application &#8599;
                </p>
              </a>
              <ul className="list-disc mt-3 space-y-3 max-[1231px]:text-sm max-[1083px]:space-y-2 max-[927px]:mt-2">
                <li>
                  FileBhejo is a user-friendly file sharing web application that
                  offers seamless sharing options via QR Code or a unique ID.
                  With FileBhejo, users can effortlessly share files, documents,
                  or media with others, eliminating the hassle of cumbersome
                  file transfer processes. Whether it's for personal or
                  professional use, FileBhejo ensures quick and efficient
                  sharing, enhancing collaboration and productivity.
                </li>
                <div className="space-y-3 max-[1231px]:text-sm max-[1083px]:space-y-2 max-[927px]:mt-2 max-[927px]:hidden">
                  <li>
                    QR Code Sharing: Instantly share files by generating a QR
                    code for recipients to scan and access the content.
                  </li>
                  <li>
                    Unique ID Sharing: Share files securely using a unique ID,
                    providing easy access to the shared content.
                  </li>
                  <li>
                    Efficient File Transfer: Swiftly transfer files without
                    delays, ensuring seamless sharing of documents, media, and
                    more.
                  </li>
                  <li>
                    Cross-Platform Compatibility: Access FileBhejo from any
                    device or platform for convenient file sharing across
                    different operating systems.
                  </li>
                  <li>
                    User-Friendly Interface: Enjoy a seamless experience with an
                    intuitive interface, making file sharing effortless for both
                    senders and recipients.
                  </li>
                  <li>Team Size: 2 Members</li>
                </div>
                <li>Tech Stack:- ReactJS, TailwindCSS, Firebase</li>
              </ul>
            </div>
            <div className="right w-[20%] max-[927px]:w-[100%]">
              <a href="https://filebhejo.vercel.app/" target="blank">
                <img
                  src={FileBhejo}
                  alt="FileBhejo.vercel.app"
                  className="max-[927px]:hidden"
                />
              </a>
              <a href="https://filebhejo.vercel.app/" target="blank">
                <img
                  src={FileBhejoDesktop}
                  alt="FileBhejo.vercel.app"
                  className="min-[927px]:hidden mb-5 drop-shadow-lg"
                />
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "QRCashier",
      value: "QRCashier",
      content: (
        <div className="w-full overflow-hidden relative h-fit rounded-2xl p-10 max-[927px]:p-6 text-white/[0.5] bg-black bg-dot-white/[0.15] border border-white/[0.2]">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_85%,black)] max-[499px]:[mask-image:radial-gradient(ellipse_at_center,transparent_85%,black)]"></div>
          <div className="flex justify-between w-full items-center max-[927px]:flex-col-reverse">
            <div className="left w-[77%] max-[974px]:w-[76%] max-[927px]:w-full">
              <p className="text-4xl font-bold text-white/[0.8] max-[974px]:text-xl">
                QRCashier Web and Mobile App
              </p>

              <ul className="list-disc mt-3 space-y-3 max-[1231px]:text-sm max-[1083px]:space-y-2 max-[927px]:mt-2">
                <li>
                  QRCashier is an innovative Web & Mobile App designed to
                  streamline the retail experience by digitizing receipts. By
                  automatically calculating prices based on product rates and
                  quantity, QRCashier not only simplifies transactions but also
                  reduces the reliance on harmful thermal receipts, contributing
                  to environmental preservation and human health.
                </li>
                <div className="space-y-3 max-[1231px]:text-sm max-[1083px]:space-y-2 max-[927px]:mt-2 max-[927px]:hidden">
                  <li>
                    Digitizes receipts, eliminating the need for paper-based
                    records.
                  </li>
                  <li>
                    Automatically calculates prices based on product rates and
                    quantity, enhancing efficiency.
                  </li>
                  <li>
                    Minimizes environmental impact by reducing the use of
                    thermal receipts.
                  </li>
                  <li>
                    Generates QR codes for seamless payment and receipt
                    retrieval.
                  </li>
                  <li>
                    Enhances convenience for both customers and retailers,
                    fostering a more sustainable retail ecosystem.
                  </li>
                  <li>Team Size: 2 Members</li>
                </div>
                <li>
                  Tech Stack:- HTML5, TailwindCSS, JavaScript, Flask(Python),
                  Firebase
                </li>
              </ul>
            </div>
            <div className="right w-[20%] max-[927px]:w-[100%]">
              <img
                src={QRCashier}
                alt="QRCashier"
                className="max-[927px]:hidden"
              />
              <img
                src={QRCashierDesktop}
                alt="QRCashier"
                className="min-[927px]:hidden mb-5 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Integrete",
      value: "Integrete",
      content: (
        <div className="w-full overflow-hidden relative h-fit rounded-2xl p-10 max-[927px]:p-6 text-white/[0.5] bg-black bg-dot-white/[0.15] border border-white/[0.2]">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_85%,black)] max-[499px]:[mask-image:radial-gradient(ellipse_at_center,transparent_85%,black)]"></div>
          <div className="flex justify-between w-full items-center max-[927px]:flex-col-reverse">
            <div className="left w-[77%] max-[974px]:w-[76%] max-[927px]:w-full">
              <p className="text-4xl font-bold text-white/[0.8] max-[974px]:text-xl">
                Integrete Website
              </p>

              <ul className="list-disc mt-3 space-y-3 max-[1231px]:text-sm max-[1083px]:space-y-2 max-[927px]:mt-2">
                <li>
                  Vast Selection: Explore a diverse range of high-quality
                  wallpapers, from scenic landscapes to abstract designs.
                </li>
                <li>
                  Intuitive Interface: Easily navigate the website to find the
                  perfect wallpaper quickly and effortlessly.
                </li>
                <div className="space-y-3 max-[1231px]:text-sm max-[1083px]:space-y-2 max-[927px]:mt-2 max-[927px]:hidden">
                  <li>
                    Detailed Information: Access comprehensive details on
                    dimensions, materials, and usage recommendations for
                    informed decision-making.
                  </li>
                  <li>
                    Seamless Purchasing: Enjoy convenient transactions through
                    integrated Gumroad links, ensuring a smooth buying
                    experience.
                  </li>
                  <li>
                    Responsive Support: Receive dedicated assistance to address
                    inquiries and resolve issues promptly, enhancing customer
                    satisfaction.
                  </li>
                  <li>
                    Enhances convenience for both customers and retailers,
                    fostering a more sustainable retail ecosystem.
                  </li>
                  <li>Team Size: 2 Members</li>
                </div>
                <li>Tech Stack:- HTML5, TailwindCSS, JavaScript, Gumroad</li>
              </ul>
            </div>
            <div className="right w-[20%] max-[927px]:w-[100%]">
              <img
                src={Integrete}
                alt="Integrete"
                className="max-[927px]:hidden"
              />
              <img
                src={IntegreteDesktop}
                alt="Integrete"
                className="min-[927px]:hidden mb-5 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "DigiStudyADDA",
      value: "DigiStudyADDA",
      content: (
        <div className="w-full overflow-hidden relative h-fit rounded-2xl p-10 max-[927px]:p-6 text-white/[0.5] bg-black bg-dot-white/[0.15] border border-white/[0.2]">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_85%,black)] max-[499px]:[mask-image:radial-gradient(ellipse_at_center,transparent_85%,black)]"></div>
          <div className="flex justify-between w-full items-center max-[927px]:flex-col-reverse">
            <div className="left w-[77%] max-[974px]:w-[76%] max-[927px]:w-full">
              <a href="https://digistudyadda.vercel.app/" target="blank"><p className="text-4xl font-bold text-white/[0.8] max-[974px]:text-xl">
                DigiStudyADDA Website &#8599;
              </p></a>

              <ul className="list-disc mt-3 space-y-3 max-[1231px]:text-sm max-[1083px]:space-y-2 max-[927px]:mt-2">
                <li>
                  DigiStudyADDA is your all-in-one online education platform for
                  competitive exam preparation and academic excellence.
                </li>
                <li>
                  Comprehensive Study Resources: Access textbooks, notes, mock
                  tests, and quizzes for exams like IIT-JEE, GATE, NEET, Boards,
                  SAT, ACT, and more.
                </li>
                <div className="space-y-3 max-[1231px]:text-sm max-[1083px]:space-y-2 max-[927px]:mt-2 max-[927px]:hidden">
                  <li>
                    Multilingual Newspapers: Read newspapers in Hindi and
                    English to stay updated on current affairs and improve
                    language skills.
                  </li>
                  <li>
                    Seamless Learning Experience: User-friendly interface for
                    easy navigation and personalized learning journey.
                  </li>
                  <li>
                    Collaborative Tools: Engage with peers and educators through
                    discussion forums and group study sessions.
                  </li>
                  <li>Team Size: 2 Members</li>
                </div>
                <li>Tech Stack:- HTML5, CSS3, JavaScript, Google Drive</li>
              </ul>
            </div>
            <div className="right w-[20%] max-[927px]:w-[100%]">
              <a href="https://digistudyadda.vercel.app/" target="blank"><img
                src={DigiStudyADDA}
                alt="DigiStudyADDA"
                className="max-[927px]:hidden"
              /></a>
              <a href="https://digistudyadda.vercel.app/" target="blank"><img
                src={DigiStudyADDADesktop}
                alt="DigiStudyADDA"
                className="min-[927px]:hidden mb-5 drop-shadow-lg"
              /></a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "NoAdTube",
      value: "NoAdTube",
      content: (
        <div className="w-full overflow-hidden relative h-fit rounded-2xl p-10 max-[927px]:p-6 text-white/[0.5] bg-black bg-dot-white/[0.15] border border-white/[0.2]">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_85%,black)] max-[499px]:[mask-image:radial-gradient(ellipse_at_center,transparent_85%,black)]"></div>
          <div className="flex justify-between w-full items-center max-[927px]:flex-col-reverse">
            <div className="left w-[77%] max-[974px]:w-[76%] max-[927px]:w-full">
              <a href="https://adfreestudy.netlify.app/" target="blank"><p className="text-4xl font-bold text-white/[0.8] max-[974px]:text-xl">
                NoAdTube Website &#8599;
              </p></a>

              <ul className="list-disc mt-3 space-y-3 max-[1231px]:text-sm max-[1083px]:space-y-2 max-[927px]:mt-2">
                <li>
                Embark on an ad-free YouTube experience with NoAdTube, where uninterrupted learning and exploration thrive.
                </li>
                <li>
                Ad-Free Viewing: Enjoy YouTube content without interruptions from advertisements, ensuring a seamless and immersive viewing experience.
                </li>
                <div className="space-y-3 max-[1231px]:text-sm max-[1083px]:space-y-2 max-[927px]:mt-2 max-[927px]:hidden">
                  <li>
                  Seamless Video Import: Effortlessly import a wide variety of videos from diverse channels, expanding your learning horizons without limitations.
                  </li>
                  <li>
                  Uninterrupted Learning Journey: Dive into a boundless journey of learning and exploration, free from the distractions of ads, fostering deeper engagement and focus.
                  </li>
                  <li>
                  Enhanced Productivity: Stay focused on your educational pursuits with an ad-free environment, maximizing productivity and knowledge retention.
                  </li>
                  <li>Team Size: 2 Members</li>
                </div>
                <li>Tech Stack:- HTML5, CSS3, JavaScript</li>
              </ul>
            </div>
            <div className="right w-[20%] max-[927px]:w-[100%]">
              <a href="https://adfreestudy.netlify.app/" target="blank"><img
                src={DigiStudyADDA}
                alt="DigiStudyADDA"
                className="max-[927px]:hidden"
              /></a>
              <a href="https://adfreestudy.netlify.app/" target="blank"><img
                src={DigiStudyADDADesktop}
                alt="DigiStudyADDA"
                className="min-[927px]:hidden mb-5 drop-shadow-lg"
              /></a>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-[40rem] z-20 relative flex flex-col w-full items-start justify-start mb-40 -mt-20 max-[499px]:-mt-28 px-60 max-[1872px]:px-60 max-[1718px]:px-44 max-[1586px]:px-24 max-[1444px]:px-12 max-[1188px]:px-10 max-[625px]:px-8 max-[499px]:py-2 max-[499px]:px-4">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default Projects;
