import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

type Props = {};

const SmallProjects = (props: Props) => {
  let projects = [
    {
      languages: ["TAILWIND-CSS", "HTML", "VITE"],
      title: "Discord UI",
      body: "Discord ui clone using tailwind",
      github: "https://github.com/Hrithik0112/Discord-UI-clone",
    },
    {
      languages: ["TAILWIND-CSS", "HTML", "VITE"],
      title: "Razorpay UI",
      body: "Razorpay ui clone using tailwind",
      github: "https://github.com/Hrithik0112/Razorpay-UI-clone",
    },
    {
      languages: ["REACT", "TYPESCRIPT", "ZUTAND"],
      title: "TODO-Zustand",
      body: "A todo app using zustand",
      github: "https://github.com/Hrithik0112/To-Do-Zustand",
    },
    {
      languages: ["React", "TYPESCRIPT", "ZUSTAND", "TAILWIND-CSS"],
      title: "TRIVIZARD",
      body: "A trivia quiz app",
      github: "https://github.com/Hrithik0112/Trivizard",
    },
    {
      languages: ["REACT", "TYPESCRIPT"],
      title: "React-Ts-TODO",
      body: "A todo app using react and typescript",
      github: "https://github.com/Hrithik0112/React-TypeScript_TodoApp",
    },
    {
      languages: ["REACT", "JAVACSRIPT"],
      title: "Pizaa Menu",
      body: "A menu for pizaa website",
      github: "https://github.com/Hrithik0112/Pizaa-menu",
    },
    {
      languages: ["CSS", "HTML"],
      title: "Parallex Website",
      body: "A interactive parallex website",
      github: "https://github.com/Hrithik0112/Parallax-Website",
    },

    {
      languages: ["JAVASCRIPT", "CSS", "HTML", "GSAP", "LOCOMOTIVE-SCROLL"],
      title: "The Paper Portfolio",
      body: "A interative Portfolio using GSAP",
      github: "https://github.com/Hrithik0112/The-paper-Portfolio",
    },
    {
      languages: ["REACT", "JAVACSRIPT", "TAILWIND-CSS"],
      title: "Job Search engine",
      body: "A Job Search Landing page",
      github: "https://github.com/Hrithik0112/Job_Search_Engine",
    },
    {
      languages: ["TYPESCRIPT"],
      title: "Dev-Color-Logs",
      body: "A NPM package for colorful console logs",
      github: "https://github.com/Hrithik0112/dev-color-logs",
    },
  ];
  return (
    <div className=" pt-[80px] px-5 max-w-[1560px] mx-auto">
      {/* title */}
      <div className="">
        <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
          <span className=" text-[#C778DD]">#</span>
          <span>small-projects</span>
        </div>
      </div>
      {/* body/cards */}
      <div className="cards flex justify-center flex-wrap gap-4">
        {
          // mapping
          projects.map((e) => {
            let { languages, title, body, github } = e;
            return (
              <>
                {/* card */}
                <div className="card max-w-[331px] w-full border border-[#ABB2BF]" key={title}>
                  {/* skills */}
                  <div className=" border-b border-[#ABB2BF] p-2 text-[#ABB2BF]">
                    {languages.map((lang, index) => {
                      return <span key={index}>{lang} </span>;
                    })}
                  </div>
                  {/* discription */}
                  <div className="disc p-4">
                    <h2 className=" text-white font-medium text-2xl">{title}</h2>
                    <p className=" text-[#ABB2BF] py-4">{body}</p>
                    {/* we are only coders so maybe no one have figma projects */}
                    <Link href={github}>
                      <button className=" py-2 px-4 flex justify-center items-center gap-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                        <p>Github</p>
                        <FaGithub />
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })
        }
      </div>
    </div>
  );
};

export default SmallProjects;
