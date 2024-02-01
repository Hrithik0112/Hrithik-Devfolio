import React from "react";

type Props = {};

const SmallProjects = (props: Props) => {
  let projects = [
    {
      languages: ["VUE", "CSS", "HTML"],
      title: "DIscord UI",
      body: "Start creating scalable discord.js bot with typescript in seconds",
    },
    {
      languages: ["VUE", "JS", "HTML"],
      title: "Razorpay UI",
      body: "Front-end of my future blog website written in vue",
    },
    {
      languages: ["VUE", "Figma", "HTML"],
      title: "TODO-Zustand",
      body: "Figma landing page about service for viewing chess tournaments",
    },
    {
      languages: ["React", "CSS", "HTML"],
      title: "Quizard",
      body: "Front-end of my future blog website written in vue",
    },
    {
      languages: ["VUE", "CSS", "HTML"],
      title: "React-Ts-TODO",
      body: "Front-end of my future blog website written in vue",
    },
    {
      languages: ["VUE", "CSS", "HTML"],
      title: "Pizaa Menu",
      body: "Front-end of my future blog website written in vue",
    },
    {
      languages: ["VUE", "CSS", "HTML"],
      title: "Parallex Website",
      body: "Front-end of my future blog website written in vue",
    },

    {
      languages: ["VUE", "CSS", "HTML"],
      title: "The Paper Portfolio",
      body: "Front-end of my future blog website written in vue",
    },
    {
      languages: ["VUE", "CSS", "HTML"],
      title: "Job Search engine",
      body: "Front-end of my future blog website written in vue",
    },
    {
      languages: ["VUE", "CSS", "HTML"],
      title: "Dev-Color-Logs",
      body: "Front-end of my future blog website written in vue",
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
            let { languages, title, body } = e;
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
                    <button className=" border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]">
                      <a href="www.github.com">
                        Github {"<"}~{">"}
                      </a>
                    </button>
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
