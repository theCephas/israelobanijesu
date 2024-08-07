import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { Github, Link } from "lucide-react";

const projects = [
  {
    title: "WasteNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lacus sed justo interdum interdum at et nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    content: (
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white">
        <Image
          src="/projectsImgs/WasteNG.png"
          width={3000}
          height={3000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        <div className="w-full flex justify-between px-1">
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="https://github.com/Waste-NG/waste-ng-website"
            target="_blank"
          >
            <Github size={22} />
          </a>
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="https://waste.ng"
            target="_blank"
          >
            <Link size={22} />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "The canada pathway ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lacus sed justo interdum interdum at et nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    content: (
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white">
        <Image
          src="/projectsImgs/Thecanadapathway.png"
          width={3000}
          height={3000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        <div className="w-full flex justify-between px-1">
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="https://github.com/Israel001/thecanadapathway"
            target="_blank"
          >
            <Github size={22} />
          </a>
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="https://thecanadapathway.com/"
            target="_blank"
          >
            <Link size={22} />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Harp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lacus sed justo interdum interdum at et nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    content: (
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white">
        <Image
          src="/projectsImgs/Harp.png"
          width={3000}
          height={3000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        <div className="w-full flex justify-between px-1">
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="/"
            target="_blank"
          >
            <Github size={22} />
          </a>
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="https://getharp.io"
            target="_blank"
          >
            <Link size={22} />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "The Advertisers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lacus sed justo interdum interdum at et nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    content: (
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white">
        <Image
          src="/projectsImgs/TheAdvertisers.png"
          width={3000}
          height={3000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        <div className="w-full flex justify-between px-1">
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="https://github.com/Israel001/the-advertisers"
            target="_blank"
          >
            <Github size={22} />
          </a>
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="https://the-advertisers.com"
            target="_blank"
          >
            <Link size={22} />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Homease",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lacus sed justo interdum interdum at et nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    content: (
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white">
        <Image
          src="/projectsImgs/Homease.png"
          width={3000}
          height={3000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        <div className="w-full flex justify-between px-1">
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="/"
            target="_blank"
          >
            <Github size={22} />
          </a>
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="https://homease.ng"
            target="_blank"
          >
            <Link size={22} />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Christ Bride Tabernacle)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lacus sed justo interdum interdum at et nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    content: (
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white">
        <Image
          src="/projectsImgs/Church.png"
          width={3000}
          height={3000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        <div className="w-full flex justify-between px-1">
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="https://github.com/Israel001/ibadan-church-convention"
            target="_blank"
          >
            <Github size={22} />
          </a>
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="https://convention.christbridetabernacle.com/"
            target="_blank"
          >
            <Link size={22} />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Divine Era Foundation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lacus sed justo interdum interdum at et nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    content: (
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white">
        <Image
          src="/projectsImgs/Divine.png"
          width={3000}
          height={3000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        <div className="w-full flex justify-between px-1">
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="https://github.com/Israel001/divine-era-ngo"
            target="_blank"
          >
            <Github size={22} />
          </a>
          <a
            className="hover:text-green-500 transition-all duration-300"
            href="https://www.divineerafoundation.com/"
            target="_blank"
          >
            <Link size={22} />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white"></div>
    ),
  },
];

const Projects = () => {
  return (
    <div className="clashDisplay">
      <h2 className="text-center text-3xl font-bold">My Projects</h2>
      <p className="mb-6 py-3 text-center text-lg text-gray-500">
        Here is a list of some of the most notable Projects I've worked on.
      </p>
      <StickyScroll content={projects} contentClassName={""} />
    </div>
  );
};

export default Projects;
