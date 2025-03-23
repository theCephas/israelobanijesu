import { EXPERIENCE } from "@/lib/constants";
import { HoverEffect } from "../ui/card-hover-effect";

const Experience = () => {
  return (
    <div className="max-w-[1440px] py-20 border-y border-slate-950 mx-auto clashDisplay">
      <h2 className="text-center text-3xl font-bold uppercase">
        Professional Experience
      </h2>
      <p className="pt-3 text-center text-lg text-gray-500 px-6 lg:px-0">
        Here's a highlight of my most impactful professional experiences
      </p>
      <HoverEffect items={EXPERIENCE} />
    </div>
  );
};

export default Experience;
