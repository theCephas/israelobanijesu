"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { PROJECTS } from "@/lib/constants";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    viewAll ? setProjects(PROJECTS) : setProjects(PROJECTS.slice(0, 6));
  }, [viewAll, PROJECTS]);

  return (
    <div className="clashDisplay mb-20">
      <h2 className="text-center text-3xl font-bold uppercase">My Projects</h2>
      <p className="mb-6 py-3 text-center text-lg text-gray-500 px-6 lg:px-0">
        Here is a list of some of the most notable Projects I've worked on.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1440px] mx-auto px-6 2xl:px-0">
        {projects.map((proj, i) => (
          <CardContainer key={i} className="inter-var h-full">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border  flex flex-col gap-4">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {proj.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm  dark:text-neutral-300"
              >
                {proj.description}
              </CardItem>
              <div className="mt-auto flex flex-col gap-20">
                <CardItem translateZ="50" className="w-full">
                  <Image
                    src={proj.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border dark:border-white/[0.2] mb-2"
                    alt=""
                  />
                  <div className="flex gap-2 items-center text-[8px] xs:text-xs italic text-neutral-600 font-semibold">
                    {proj.stack.map((item, i) => (
                      <p key={i}>
                        {i !== 0 && <span className="mr-2">-</span>} {item}
                      </p>
                    ))}
                  </div>
                </CardItem>
                <div className="flex justify-between items-center">
                  {proj.private ? (
                    <p className="border border-orange-600 text-xs font-medium text-orange-600 bg-orange-200 py-0.5 px-2 rounded-xl">
                      Private Repo
                    </p>
                  ) : (
                    <Link
                      href={proj.github}
                      target="__blank"
                      className="text-neutral-600 hover:text-green-500 text-xs font-bold"
                    >
                      <IconBrandGithub size={22} />
                    </Link>
                  )}
                  <Link
                    href={proj.url}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-sm font-normal text-neutral-600 hover:text-green-500"
                  >
                    View →
                  </Link>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto mt-6 flex justify-end px-6 2xl:px-0">
        <button
          className="text-neutral-500 text-sm text-right flex items-center gap-2 py-1 px-4 rounded-xl hover:bg-neutral-100 font-medium"
          onClick={() => setViewAll((prev) => !prev)}
        >
          <ChevronDown className={viewAll && "rotate-180"} />{" "}
          {viewAll ? "Less" : "More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
