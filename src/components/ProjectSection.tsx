import React from "react";
import first from "../../public/pro1.png";
import second from "../../public/pro2.png";
import third from "../../public/pro3.png";
import ProjectCard from "./ProjectCard";

type Props = {};

const ProjectSection = (props: Props) => {
  const projects = [
    {
      img: first,
      techs: ["React", "Tailwind", " Shadcn UI", "Zustand", "Highlight.js"],
      title: "Code Snipper",
      disc: "A feature-rich code snippet sharing tool ",
    },
    {
      img: second,
      techs: ["React", "Tailwind ", "TypeScript", "Framer Motion"],
      title: "Velocity-XD",
      disc: "A minimalistic speed typing Practice application",
    },
    {
      img: third,
      techs: ["React", "Material UI", "Zustand", " E-charts"],
      title: "Quantum Console",
      disc: "A powerfull feature-rich admin dashboard ",
    },
  ];
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div
            data-aos="fade-down"
            className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2"
          >
            <div className="">
              <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <a href="/work">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, techs, title, disc }) => {
            return (
              <>
                <ProjectCard img={img} langs={techs} title={title} disc={disc} key={title} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
