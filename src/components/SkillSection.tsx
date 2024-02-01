import Image from "next/image";
import React from "react";

type Props = {};

const SkillSection = (props: Props) => {
  const skills = [
    {
      title: "Languages",
      languages: ["TypeScript", "C++", "JavaScript"],
    },
    { title: "Databases", languages: ["PostgreSQL", "MongoDB", "Supabase", "Firebase"] },
    {
      title: "Tools",
      languages: ["VSCode", "Github", "Figma", "Git"],
    },
    {
      title: "Other",
      languages: ["HTML", "CSS", "Tailwind", "Material UI", "Redux", "Zustand", "ShadCN UI"],
    },
    {
      title: "Frameworks",
      languages: ["Next.js", "React", "Express.js", "Node.js"],
    },
  ];
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div data-aos="fade-left" className=" mb-10">
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>skills
            </div>
            <div className="line w-1/3 h-px bg-[#C778DD]"></div>
          </div>
        </div>
        {/* bottom */}
        <div className=" flex flex-wrap gap-10 justify-between items-center text-white">
          {/* left */}
          <div data-aos="fade-right" className="mx-auto">
            {/* <img
              className=" w-full mx-auto"
              src={require("../../public/shapes.png")}
              alt="shapes"
            /> */}
            <Image src="/shapes.png" alt="shapes" width={349} height={282} />
          </div>
          {/* right & mapping */}
          <div
            data-aos="fade-left"
            className=" mx-auto flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4"
          >
            {skills.map(({ title, languages }) => {
              return (
                <>
                  <div
                    className="w-[90%] sm:w-[45%] lg:w-[30%] border border-[#ABB2BF]"
                    key={title}
                  >
                    <div className=" p-2">
                      <h2 className=" font-semibold">{title}</h2>
                    </div>
                    <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
                      {languages.map((e, index) => {
                        return <span key={index}>{e}</span>;
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
