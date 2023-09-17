"use client";

import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <header data-aos="fade-up" className="fixed top-0 left-0 right-0 bg-[#282C33]">
        <div className=" px-5 max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2">
          <div className="left flex gap-2 items-center font-bold text-white text-base">
            {/* logo */}
            <Image src="/logoo.jpg" height={40} width={40} alt="mainLogo" />
            Hrithik-Dev
          </div>
          <div className="right flex items-center">
            <div
              className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${
                !toggle ? `right-[-100%] top-0 bottom-0` : `right-0 top-0 bottom-0`
              } bg-[#282C33] md:static`}
            >
              <Link href="/">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>home
                </li>
              </Link>
              <Link href="work">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>work
                </li>
              </Link>
              <Link href="about-me">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>about-me
                </li>
              </Link>
              <Link href="/contacts">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>contacts
                </li>
              </Link>
              <div
                onClick={() => setToggle(false)}
                className="close absolute block md:hidden right-6 top-6 text-white text-4xl "
              >
                <AiOutlineClose />
              </div>
            </div>
            {/* CLOSE&OPEN btns */}
            <div onClick={() => setToggle(true)} className="">
              <div className="open block md:hidden w-8">
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
