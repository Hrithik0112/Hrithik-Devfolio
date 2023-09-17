import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            Hrithik is a <span className="text-[#C778DD]">front-end developer</span> and{" "}
            <span className="text-[#C778DD]">Full Stack Developer</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
            Contact me!!
          </button>
        </div>
        <div className="mx-auto">
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
      <div className=" px-5 py-10 ">
        <Image src="/quote.png" alt="quote text" className="mx-auto" width={400} height={50} />
      </div>
    </>
  );
};

export default HeroSection;
