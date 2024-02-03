import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

export type ProductProps = {
  img: StaticImageData;
  langs: string[];
  title: string;
  disc: string;
  live: string;
  github: string;
};

const ProjectCard = ({ img, langs, title, disc, live, github }: ProductProps) => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-[#ABB2BF] p-0"
      >
        {/* img */}
        <div className="">
          {/* <img className=" w-full" src={img} alt="" /> */}
          <Image src={img} alt="project image" width={440} height={201} />
        </div>
        {/* skills */}
        <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF]">
          {langs.map((e, index) => {
            return (
              <span className=" text-[#ABB2BF]" key={index}>
                {e}
              </span>
            );
          })}
        </div>
        {/* disc */}
        <div className=" p-4">
          <h2 className="text-[#FFFFFF] text-2xl font-medium">{title}</h2>
          <p className=" py-4 text-[#ABB2BF]">{disc}</p>
          {/* btns */}
          <div className="flex gap-4">
            <Link href={live}>
              <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                Live {"<"}~{">"}
              </button>
            </Link>
            <Link href={github}>
              <button className=" py-2 px-4 flex justify-center items-center gap-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                <p>Github</p>
                <FaGithub />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
