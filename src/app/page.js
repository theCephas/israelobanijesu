"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FlipWords } from "@/components/ui/flip-words";
import { ArrowDown } from "lucide-react";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  const words = ["seamless", "end-to-end", "unique"];
  const comp = useRef(null);
  const lastSectionRef = useRef(null);

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
    <div className="relative" ref={comp}>
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
              <button className="px-4 py-2 text-[16px] sm:text-3xl rounded-md border border-black bg-white text-black hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                CONTACT ME
              </button>
            </div>
          </header>

          <section className="relative">
            <section className="h-[80vh] text-5xl lg:text-7xl text-black flex leading-[60px] lg:leading-[100px] pt-10">
              <div
                id="mainText"
                className="font-[500] font-cantarell tracking-tight pt-6"
              >
                <div className="flex md:flex-row flex-col">
                  <p>Crafting </p>
                  <FlipWords
                    words={words}
                    className={` clashDisplay font-[600]  italic`}
                  />{" "}
                </div>
                endpoints and designs for <br />
                <span className="clashDisplay">
                  businesses, brands, and companies
                </span>
                .
              </div>
            </section>
            <div
              id="about"
              className="text-black w-[300px] font-cantarell text-[17px] absolute sm:bottom-[-15px] right-0 flex gap-2"
            >
              <p>
                <span className="pr-2 text-black/60 font-bold">ABOUT</span>I am
                a seasoned senior software engineer with over 5 years of
                experience in the field. I have a strong background in
                developing web applications using javascript, nodejs, nestjs,
                golang, amongst many others.
              </p>
            </div>
            <div
              id="arrow"
              className="rounded-full hidden sm:flex border-black border w-[40px] justify-center items-center absolute right-0 animate-bounce h-[40px] cursor-pointer"
            >
              <ArrowDown />
            </div>
          </section>
        </div>
      </section>

      <section
        ref={lastSectionRef}
        style={{ display: "none" }}
        className="border-t border-black border-b my-[160px] sm:my-20 py-12"
      >
        <Skills />
      </section>
      <section className="my-[160px] sm:my-24 selection">
        <Projects />
      </section>
      {/* </div> */}
    </div>
  );
}
