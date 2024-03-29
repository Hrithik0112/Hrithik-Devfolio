"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div data-aos="fade-right" className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            Hrithik is a <span className="text-[#C778DD]">Front-End Alchemist</span> and{" "}
            <span className="text-[#C778DD]"> Aspiring Full Stack Explorer</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            Passionate about sculpting seamless user experiences, I'm Hrithik - a Front-End
            Alchemist delving into the enchanting realms of Full Stack Development. Join me on this
            journey of turning digital dreams into reality!
          </p>
          <Link href="/contacts">
            <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
              Contact me!!
            </button>
          </Link>
        </div>
        <div data-aos="fade-left" data-aos-delay="400" className="mx-auto">
          <div className="">
            <Image src="/man.png" alt="manImage" width={457} height={386} />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#C778DD]"></div>
            <div className="">
              Currently working on <span className="text-white">Portfolio</span>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className=" px-5 py-10 ">
        <Image src="/quote.png" alt="quote text" className="mx-auto" width={400} height={50} />
      </div>
    </>
  );
};

export default HeroSection;
