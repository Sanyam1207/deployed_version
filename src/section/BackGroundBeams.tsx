import React from "react";
import { BackgroundBeams } from "../component/ui/background-beams";
import FlipWords from "../component/acertinity/FlipWords"; // Updated import path
import Image from "next/image";
import Logo1 from "../../public/logo/RuralLearn.jpeg";
import Logo2 from "../../public/logo/RuralLearn.jpeg";
import LogoL from "../../public/logo/RuralLearn.jpeg";
import LogoD from "../../public/logo/RuralLearn.jpeg";



export default function BackgroundBeamsDemo() {
  return (
    <div className="relative h-screen w-full bg-white dark:bg-black">
      <div className="absolute left-4 mx-4 z-20">
        <Image
          src={Logo1}
          alt="Rural-logo"
          height={100}
          width={100}
          className="!m-0 !p-0 dark:hidden"
        />
        <Image
          src={Logo2}
          alt="Rural-logo"
          height={100}
          width={100}
          className="!m-0 !p-0 hidden dark:block"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center pt-2 antialiased">
        <div className="max-w-7xl max-h-7xl">
          <div className=" flex flex-col gap-4 justify-center items-center px-4 mt-32">
            <Image
              src={LogoL}
              alt="RuralLearn-logo"
              height={225}
              width={225}
              className=" z-10 dark:hidden"
            />
            <Image
              src={LogoD}
              alt="RuralLearn-logo"
              height={225}
              width={225}
              className=" z-10 hidden dark:block"
            />
            <div className="text-7xl mx-auto font-mono items-center font-bold text-[#12284b] dark:text-[#e2f4fd] mt-12">
                Rural Learn
            </div>
            <div className="text-7xl mx-auto font-mono items-center font-bold text-[#12284b] dark:text-[#e2f4fd]">
              Rural Roots,{" "}
              <FlipWords 
                className="!text-[#3296c2] font-extrabold" 
                words={["United Goals", "Inspire Hope", "Stronger Ties", "Dreams Aglow"]} 
              />
            </div>
            <div className="text-7xl mx-auto font-mono items-center font-bold text-[#12284b] dark:text-[#e2f4fd]">
                Education For Everyone
            </div>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
              Welcome to Rural Learn, A better way of connecting rural education
              with interactive websites, training for teachers, and parents also.
            </p>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}