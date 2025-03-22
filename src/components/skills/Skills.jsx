import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const skillSets = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Angular" },
  { name: "Redux" },
  { name: "MobX" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Tailwind CSS" },
  { name: "Bootstrap" },
  { name: "SCSS" },
  { name: "Material UI" },
  { name: "Jest" },
  { name: "End-to-end Testing" },
  { name: "Unit Testing" },
  { name: "Webpack" },
  { name: "Git" },
  { name: "CI/CD" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "MongoDB" },
  { name: "SQL" },
  { name: "GraphQL" },
  { name: "RESTful APIs" },
];

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
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
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1800px] mx-auto w-full">
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
