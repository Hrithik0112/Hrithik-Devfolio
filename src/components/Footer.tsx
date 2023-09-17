import { BsGithub, BsDiscord } from "react-icons/bs";
import { BiLogoFigma } from "react-icons/bi";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* line */}
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <footer className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <Image src="/logoo.jpg" height={40} width={40} alt="mainLogo" />
                <span>Hrithik</span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]">slumdog4321@gmail.com</span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>Front End Developer based on India</p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className="  text-2xl font-medium mb-3">Media</h2>
            {/* media */}
            <div className="flex items-center gap-2 text-gray-600">
              <a href="#">
                <BsDiscord />
              </a>
              <a href="#">
                <BiLogoFigma />
              </a>
              <a href="#">
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Made With Love by Hrithik 🧡 2023
        </div>
      </footer>
    </>
  );
};

export default Footer;
