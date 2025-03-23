"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FlipWords } from "@/components/ui/flip-words";
import { ArrowDown } from "lucide-react";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/skills/Experience";
import Link from "next/link";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";

export default function Home() {
  const words = ["seamless", "end-to-end", "unique"];
  const comp = useRef(null);
  const lastSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.scrollBehavior = "smooth";
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.8,
        })
        .from("#contactbtn", {
          opacity: 0,
          duration: 1.2,
        })
        .from("#mainText", {
          opacity: 0,
          duration: 1.6,
          y: "100",
          skewY: 10,
          stagger: {
            amount: 0.4,
          },
        })
        .from("#about", {
          opacity: 0,
          duration: 1.8,
          skewX: 10,
        })
        .from("#arrow", {
          opacity: 0,
          duration: 2,
        })

        .set(lastSectionRef.current, {
          display: "block",
          onComplete: () => {
            gsap.from(lastSectionRef.current, { opacity: 0, duration: 1 });
          },
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  //
  return (
    <div className="relative overflow-x-hidden" ref={comp}>
      <div
        id="intro-slider"
        className="fixed h-screen clashDisplay p-10 bg-black leading-7 text-white/60 z-30 top-0 left-0 w-full justify-center flex flex-col gap-10 tracking-tight"
      >
        {["Software Engineer", "Code Mentor", "Freelancer"].map((text, i) => (
          <h1
            key={i + 1}
            id="title-1"
            className="md:text-7xl sm:text-6xl text-4xl font-semibold"
          >
            {text}
          </h1>
        ))}
      </div>
      {/* <div id="smooth-content"> */}
      <section
        id="intro-slider2"
        className="bg-white py-8 px-4 sm:px-[20px] lg:px-[50px]"
      >
        <div className="max-w-[1440px] mx-auto">
          <header className="flex justify-between items-center clashDisplay">
            <ul
              id="welcome"
              className="font-[500] flex flex-col text-black text-xl sm:text-2xl"
            >
              <li>ISRAEL</li> <li className="mt-[-11px]"> OLUWASAMI.</li>
            </ul>
            <div id="contactbtn">
              <Link
                href={"#contact"}
                className="px-4 py-2 text-[16px] sm:text-3xl rounded-md border border-black bg-white text-black hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
              >
                CONTACT ME
              </Link>
            </div>
          </header>

          <div className="relative">
            <div className="mb-8 text-5xl lg:text-7xl text-black flex leading-[60px] lg:leading-[100px] pt-10">
              <div
                id="mainText"
                className="font-[500] font-cantarell tracking-tight pt-6"
              >
                <div className="flex md:flex-row flex-col">
                  <span>Crafting </span>
                  <FlipWords
                    words={words}
                    className={` clashDisplay font-[600]  italic`}
                  />{" "}
                </div>
                user experiences for <br />
                <span className="clashDisplay">
                  businesses, brands, and companies
                </span>
                .
              </div>
            </div>
            <div className="min-w-full text-black  font-cantarell text-[17px] sm:justify-between flex gap-2">
              <div></div>
              <p className="max-w-[450px]">
                <span className="pr-2 text-black/60 font-bold">ABOUT -</span>I
                am a seasoned frontend specialist with full-stack expertise and
                over 5 years of experience building responsive, high-performance
                web applications. Proficient in React, Next.js, TypeScript, and
                modern frontend frameworks, with a strong foundation in UI/UX
                principles. Experienced in leading development teams and
                implementing scalable frontend architectures that enhance user
                experience. Additionally, I possess a solid background in
                backend technologies such as Node.js, NestJS, and Golang,
                enabling me to deliver robust, user-centric solutions.
                Demonstrates excellent problem-solving skills and
                cross-functional collaboration in dynamic environments.
              </p>
            </div>
            <Link
              id="arrow"
              href={"#projects"}
              className="rounded-full hidden sm:flex border-black border w-[40px] justify-center items-center absolute right-0 animate-bounce h-[40px] cursor-pointer"
            >
              <ArrowDown />
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={lastSectionRef}
        style={{ display: "none" }}
        className="border-t border-black border-b my-[160px] sm:my-20 py-12"
      >
        <Skills />
      </section>
      <section id="projects" className="my-[160px] sm:my-24 selection">
        <Projects />
      </section>
      <section className="my-[160px] sm:my-24 selection">
        <Experience />
      </section>
      <section id="contact" className="my-[160px] sm:my-24 selection">
        <GlowingStarsBackgroundCard></GlowingStarsBackgroundCard>
      </section>
      {/* </div> */}
    </div>
  );
}
