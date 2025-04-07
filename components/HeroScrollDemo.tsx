import { ContainerScroll } from "./ui/ContainerScroll";
import Image from "next/image";
import { TextHoverEffect } from "./ui/text-hover-effect";

export function HeroScrollDemo() {
  return (
    <div className="relative flex flex-col overflow-hidden  h-screen">
      {/* The top content */}
      {/* <div className="relative z-10 mx-auto border-white dark:border-white bg-white border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl">
        <div className="w-[148px] h-[18px] bg-white top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[32px] w-[3px] bg-white absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-white absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-white absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-white absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className="rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-white">
          <Image
            src="/app.png"
            className="w-[272px] h-[572px]"
            alt=""
            width={272}
            height={572}
          />
        </div>
      </div> */}

      <div className="relative mx-auto z-10  border-gray-300 bg-gray-300  border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
        <div className="h-[32px] w-[3px] bg-gray-300  absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-300  absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-300  absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-300  absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white ">
          <Image
            src="/app.png"
            className="w-[272px] h-[572px]"
            alt=""
            width={272}
            height={572}
          />
        </div>
      </div>

      {/* The bottom content */}
      <div className="absolute bottom-0 left-0 w-full z-0 flex justify-center">
        <TextHoverEffect text="DAKAEI" />
      </div>
    </div>
  );
}
