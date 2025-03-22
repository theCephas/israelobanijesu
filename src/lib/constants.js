import { Github, Link } from "lucide-react";
import Image from "next/image";

export const PROJECTS = [
  {
    title: "WasteNG",
    description:
      "WasteNG is a technology company building solutions for households and Waste disposal companies.",
    content: (
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white">
        <Image
          src="/projectsImgs/WasteNG.png"
          width={3000}
          height={3000}
          className="h-full w-full object-cover rounded-md"
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
    title: "The canada pathway",
    description:
      "Thecanadapathway is a website that provides paid courses on sophisticated travel guides that gives realistic notes on how to relocate to first world countries.",
    content: (
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white">
        <Image
          src="/projectsImgs/Thecanadapathway.png"
          width={3000}
          height={3000}
          className="h-full w-full object-cover rounded-md"
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
      "Harp is an all-in-one customer experience solution for any kind of business.",
    content: (
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white">
        <Image
          src="/projectsImgs/Harp.png"
          width={3000}
          height={3000}
          className="h-full w-full object-cover rounded-md"
          alt="linear board demo"
        />
        <div className="w-full flex justify-between px-1">
          <a
            className="hover:text-green-500 transition-all duration-300"
            href=""
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
          className="h-full w-full object-cover rounded-md"
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
          className="h-full w-full object-cover rounded-md"
          alt="linear board demo"
        />
        <div className="w-full flex justify-between px-1">
          <a
            className="hover:text-green-500 transition-all duration-300"
            href=""
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
    title: "Christ Bride Tabernacle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lacus sed justo interdum interdum at et nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    content: (
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white">
        <Image
          src="/projectsImgs/Church.png"
          width={3000}
          height={3000}
          className="h-full w-full object-cover rounded-md"
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
          className="h-full w-full object-cover rounded-md"
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

export const EXPERIENCE = [
  {
    name: "VerifyMe Ltd (Lagos, Nigeria)",
    title: "Senior Frontend Engineer",
    duration: "Feb 2022 - PRESENT",
    details: [
      "Developed exceptional user experiences by designing and implementing scalable UI solutions with React, JavaScript, and TypeScript",
      "Created reusable component libraries and implemented responsive designs across multiple devices",
      "Shared expertise in semantically correct HTML and CSS with the Frontend Engineering team",
      "Implemented frontend testing strategies using the Jest framework",
      "Integrated numerous payment gateways (Paystack, Flutterwave) with optimized frontend interfaces",
      "Collaborated on the development of SDKs with a focus on developer experience",
      "Conducted training sessions on testing, building tools (Webpack), and frontend architecture",
    ],
  },
  {
    name: "Fonu (Telecommunications Company)",
    title: "Chief Technology Officer",
    duration: "Jan 2021 - Dec 2024",
    details: [
      "Led frontend architecture decisions and implementation using React, Next.js, and TypeScript",
      "Architected real-time communication systems with WebSockets for chat functionality",
      "Ensured responsive and cross-platform compatibility across the application",
      "Established frontend development standards, component libraries, and design systems",
      "Implemented CI/CD pipelines for frontend deployments with automated testing",
      "Directed cross-functional teams while maintaining hands-on involvement in frontend code",
      "Optimized frontend performance resulting in a 40% improvement in load times",
    ],
  },
  {
    name: "Canary Points Corporate Service",
    title: "Senior Full Stack Developer (Frontend Specialist)",
    duration: "Apr 2021 - Jan 2022",
    details: [
      "Developed frontend components for a centralized portal managing fintech products",
      "Implemented responsive UI designs and ensured cross-browser compatibility",
      "Created intuitive user interfaces by translating business requirements into user-friendly designs",
      "Collaborated with UX designers to implement optimized user workflows",
      "Applied Agile methodologies to deliver rapid iterations and continuous improvements",
      "Utilized Jira for workload tracking and development process improvement",
    ],
  },
  {
    name: "Hamsa Technologies (Hanoi, Vietnam)",
    title: "Senior Frontend Developer",
    duration: "Jan 2019 - Feb 2021",
    details: [
      "Built production-ready Shopify apps with a focus on frontend interfaces and user experience",
      "Developed responsive, cross-browser compatible UI components",
      "Created Shopify plugins used by thousands of merchants, with an emphasis on intuitive interfaces",
      "Implemented frontend optimizations for performance across various device types",
      "Gathered requirements and developed technical solutions to meet project needs",
    ],
  },
];
