import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

const ScrollSmootherComponent = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // duration of the smooth scrolling
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return null;
};

export default ScrollSmootherComponent;
