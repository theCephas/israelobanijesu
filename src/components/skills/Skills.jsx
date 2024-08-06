import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const skillSets = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "ReactJS" },
  { name: "NextJS" },
  { name: "NodeJS" },
  { name: "NestJS" },
  { name: "GSAP" },
  { name: "GraphQL" },
  { name: "Github" },
  { name: "MySQL" },
  { name: "PostgreSQL" },
  { name: "Docker" },
  { name: "Flutter" },
  { name: "CI/CD" },
];

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto w-full">
      <Slider {...settings}>
        {skillSets.map((skill, index) => {
          return (
            <div
              key={index}
              className="text-center px-2 flex items-center justify-center"
            >
              <span className="text-2xl font-bold clashDisplay text-black">
                {skill.name}
              </span>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Skills;
