import React from "react";

type Props = {};

const Skills = (props: Props) => {
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
    <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10">
      {/* title */}
      <div className=" mb-12 text-[32px] font-medium text-white">
        <span className="text-[#C778DD]">#</span>
        skills
      </div>
      {/* cards */}
      <div className=" flex justify-around gap-4 flex-wrap">
        {/* card */}
        {skills.map(({ title, languages }) => {
          return (
            <>
              <div
                className="w-[90%] sm:w-[45%] md:w-[24%] lg:w-[18%] border border-[#ABB2BF]"
                key={title}
              >
                <div className=" text-white p-2">
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
  );
};

export default Skills;
