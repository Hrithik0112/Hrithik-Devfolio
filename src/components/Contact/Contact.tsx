import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsDiscord, BsLinkedin, BsTwitter } from "react-icons/bs";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="px-5 max-w-[1560px] min-h-screen mx-auto pt-20 py-10">
      {/* title */}
      <div className=" text-white font-semibold text-[32px] mt-12">
        <span className=" text-[#C778DD]">/</span>
        contacts
      </div>
      {/* h2 title */}
      <div className=" text-white mt-[14px] mb-[46px]">Who am i?</div>
      {/* flex main */}
      <div className="flex justify-between flex-wrap gap-10">
        {/* left side */}
        <div className="  md:w-3/5 w-full">
          {/* some text */}
          <div className=" text-[#ABB2BF] font-medium">
            I’m interested in freelance opportunities. However, if you have other request or
            question, don’t hesitate to contact me
          </div>
        </div>
        {/* right side */}
        <div className=" flex gap-3">
          {/* boxes/flex */}
          {/* 1 */}
          <div className=" p-4 border border-[#ABB2BF]">
            <h2 className=" text-white font-medium pb-2">Support me here</h2>
            <span className="text-[#ABB2BF]">4149500120690030</span>
          </div>
          {/* 2 */}
          <div className=" p-4 border border-[#ABB2BF]">
            <h2 className=" text-white font-medium pb-4 ">Message me here</h2>
            <div className=" text-[#ABB2BF]">
              {/* contacts */}
              <div className=" flex gap-1 items-center">
                {/* img */}
                <BsDiscord />
                {/* text */}
                <span>Hrithik#1234</span>
              </div>
              {/* contacts */}
              <div className=" flex gap-1 items-center">
                {/* img */}
                <AiOutlineMail />
                {/* text */}
                <span>slumdog4321@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* all media */}
      <div className=" mt-6 mb-5x">
        {/* title */}
        <div className=" text-[32px] font-medium text-white">
          <span className="text-[#C778DD]">#</span>all-media
        </div>
        {/* media */}
        <div className=" flex gap-6">
          <a href="#">
            <div className=" text-[#ABB2BF] flex items-center gap-1">
              <BsLinkedin />
              <span>@Hrithik</span>
            </div>
          </a>
          <a href="#">
            <div className=" text-[#ABB2BF] flex items-center gap-1">
              <BsTwitter />
              <span>@Hrithik</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
