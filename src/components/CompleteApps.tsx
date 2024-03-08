import React from "react";
import first from "../../public/pro1.png";
import second from "../../public/pro7.png";
import third from "../../public/pro2.png";
import forth from "../../public/pro3.png";
import fifth from "../../public/pro4.png";
import sixth from "../../public/pro5.png";
import seventh from "../../public/pro6.png";
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
      live: "https://code-sniper.vercel.app/",
      github: "https://github.com/Hrithik0112/Code-Sniper",
    },
    {
      img: second,
      techs: ["React", "Next.js", "Tailwind ", "TypeScript", "Kinde Auth", "Convex"],
      title: "SketchStream.io",
      disc: "A docs and diagrams platform for engineering teams",
      live: "https://sketch-stream-io.vercel.app/",
      github: "https://github.com/Hrithik0112/SketchStream.io",
    },
    {
      img: third,
      techs: ["React", "Tailwind ", "TypeScript", "Framer Motion"],
      title: "Velocity-XD",
      disc: "A minimalistic speed typing Practice application",
      live: "https://velocity-xd.vercel.app/",
      github: "https://github.com/Hrithik0112/Velocity-XD",
    },
    {
      img: forth,
      techs: ["React", "Material UI", "Zustand", " E-charts"],
      title: "Quantum Console",
      disc: "A powerfull feature-rich admin dashboard ",
      live: "https://quantum-console.vercel.app/dashboard",
      github: "https://github.com/Hrithik0112/Quantum-Console",
    },
    {
      img: fifth,
      techs: ["React", "Next.js", "Tailwind ", "Google Maps API", "Google Places API"],
      title: "Culinary Explorer",
      disc: "Find Top Restaurants near you",
      live: "https://culinary-explorer-eta.vercel.app/",
      github: "https://github.com/Hrithik0112/Culinary-Explorer",
    },
    {
      img: sixth,
      techs: ["React", "React Hooks", "React Context", "Tailwind "],
      title: "Time-Wrap",
      disc: "A visually appealing digital calender and scheduler",
      live: "https://time-wrap.vercel.app/",
      github: "https://github.com/Hrithik0112/Time-Wrap",
    },
    {
      img: seventh,
      techs: ["html", "css", "javascript"],
      title: "Data-Craft",
      disc: "A fully featured Spreedsheet",
      live: "https://hrithik0112.github.io/Data-craft/",
      github: "https://github.com/Hrithik0112/Data-craft",
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
            {projects.map(({ img, techs, title, disc, live, github }) => {
              return (
                <>
                  <ProjectCard
                    img={img}
                    langs={techs}
                    title={title}
                    disc={disc}
                    key={title}
                    live={live}
                    github={github}
                  />
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
