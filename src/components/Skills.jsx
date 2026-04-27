import React from "react";
import icon1 from "../assets/html.png";
import icon2 from "../assets/css.png";
import icon3 from "../assets/js.png";
import icon4 from "../assets/react.png";
import icon5 from "../assets/bootstrap.png";

export default function Skills() {
  const skills = [
    { img: icon1, name: "HTML" },
    { img: icon2, name: "CSS" },
    { img: icon3, name: "JavaScript" },
    { img: icon4, name: "React" },
    { img: icon5, name: "Bootstrap" },
    { img: null, name: "Responsive Design" },
  ];

  return (
    <section id="skills" className="py-16 px-4 text-center">
      {/* Heading */}
      <h2 className="font-outfit font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-tight tracking-[-0.015em]">
        My Skills
      </h2>
      <p className="font-outfit font-normal text-[16px] sm:text-[18px] leading-[140%] mt-2">
        What I bring to the table
      </p>

      {/* Skills Box */}
      <div className="mt-10 mx-auto w-full max-w-[1279px] bg-[#EBE9F9] rounded-[22px] py-8 px-6 flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 w-[120px] sm:w-[140px]"
          >
            {/* Image or Text */}
            {skill.img ? (
              <img
                src={skill.img}
                alt={skill.name}
                className="w-[50px] h-[50px] sm:w-[57px] sm:h-[57px] object-contain"
              />
            ) : (
              <p className="font-outfit font-normal text-[14px] sm:text-[18px] leading-[140%] text-center">
                Responsive Design
              </p>
            )}

            {/* Progress Bar */}
            <div className="w-[60px] sm:w-[67px] h-[12px] shadow-[inset_0px_2px_2px_0px_#00000040,inset_0px_-1px_2px_0px_#FFFFFF1A] rounded-full">
              <div className="w-[45px] sm:w-[52px] h-[12px] bg-[#463ACB] rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}