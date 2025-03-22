import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { TracingBeam } from "../ui/tracing-beam";
import { PROJECTS } from "@/lib/constants";

const Projects = () => {
  const projs = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-8">
      {PROJECTS.filter((proj) => proj.title !== "").map((proj, i) => (
        <div key={i} className="flex flex-col gap-2 text-white">
          <h3 className="text-center text-xl font-semibold">{proj.title}</h3>
          {proj.content}
          <p className="text-gray-400">{proj.description}</p>
        </div>
      ))}
    </div>
  );
  return (
    <div className="clashDisplay">
      <h2 className="text-center text-3xl font-bold ">My Projects</h2>
      <p className="mb-6 py-3 text-center text-lg text-gray-500 px-6 lg:px-0">
        Here is a list of some of the most notable Projects I've worked on.
      </p>
      <div className="hidden lg:block">
        <StickyScroll content={PROJECTS} contentClassName={""} />
      </div>
      <div className="lg:hidden bg-black">
        <TracingBeam children={projs} className={""} />
      </div>
    </div>
  );
};

export default Projects;
