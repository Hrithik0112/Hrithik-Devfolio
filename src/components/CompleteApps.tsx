import React from "react";
import first from "../../public/pro1.png";
import second from "../../public/pro2.png";
import third from "../../public/pro3.png";
import forth from "../../public/pro4.png";
import fifth from "../../public/pro5.png";
import sixth from "../../public/pro6.png";
import ProjectCard from "./ProjectCard";

type Props = {};

const CompleteApps = (props: Props) => {
  const projects = [
    // 6 projects date
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
    {
      img: forth,
      techs: ["React", "Next.js", "Tailwind ", "Google Maps API", "Google Places API"],
      title: "Culinary Explorer",
      disc: "Discord anti-crash bot ",
    },
    {
      img: fifth,
      techs: ["React", "React Hooks", "React Context", "Tailwind "],
      title: "Time-Wrap",
      disc: "A visually appealing digital calender and scheduler",
    },
    {
      img: sixth,
      techs: ["html", "css", "javascript"],
      title: "Data-Craft",
      disc: "A fully featured Spreedsheet",
    },
  ];
  return (
    <div>
      <div className=" pt-[114px] px-5 max-w-[1560px] mx-auto">
        {/* top / title */}
        <div className="">
          {/* projects */}
          <div className=" text-white font-bold text-[32px]">
            <span className=" text-[#C778DD]">/</span>
            <span>projects</span>
          </div>
          {/* list */}
          <div className=" text-white mt-[14px]">List of my projects</div>
        </div>
        {/* completed tasks */}
        <div className="">
          {/* title */}
          <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
            <span className=" text-[#C778DD]">#</span>
            <span>complete-apps</span>
          </div>
          {/* projects */}
          <div className="flex flex-wrap justify-start  gap-4 my-12">
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
      </div>
    </div>
  );
};

export default CompleteApps;
