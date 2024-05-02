import { Comfortaa } from "next/font/google";
import Image from "next/image";
const comfortaa = Comfortaa({ subsets: ["latin"] });

import dataVisualization from "../../../public/assets/landing/data-visualization.svg";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className={`max-w-full h-screen max-lg:h-[80vh] ${comfortaa.className} bg-landing-about bg-center bg-full bg-no-repeat`}
    >
      <section className="w-full h-full flex flex-col max-lg:relative">
        <section className="w-full h-full flex">
          <section className="w-1/2 max-lg:w-full max-lg:hidden h-full flex justify-center items-center">
            <Image
              src={dataVisualization}
              alt="data visualization vector"
              className="w-3/4"
            ></Image>
          </section>
          <section className="w-1/2 max-lg:w-full h-full flex flex-col items-end max-lg:items-center max-lg:pr-0 justify-center pr-[6rem] space-y-5">
            <h1 className="text-7xl max-lg:text-5xl font-bold w-full flex flex-col items-end max-lg:items-center uppercase space-y-5">
              <span className="text-[#24285b] text-2xl max-lg:text-xl flex justify-start items-center lowercase">
                <div className="w-10 h-10 bg-[#d3d2d6] flex justify-center items-center mr-2">
                  <p className="text-[#F0EFF4] text-lg">02</p>
                </div>
                Take a walk in our shoes.
              </span>
              <section className="flex flex-col z-20 items-end">
                <span className="text-[#F04E23]">What</span>
                <span className="text-[#FFB400]">About</span>
                <span className="text-8xl max-xl:text-6xl text-[#00AEE0]">
                  us?
                </span>
              </section>
            </h1>
            <p class="text-lg w-4/5 z-20 max-xl:text-base max-lg:w-3/4">
              There's no '<span class="text-[#FFB400]">us</span>', just '
              <span class="text-[#00AEE0]">me</span>'. This project was brought
              to life by a lone developer's passion and dedication. While it
              started as a personal venture, it's now a go-to tool for many,
              slashing through time-consuming tasks and making life a whole lot
              simpler. It's amazing how one person's work can have such a
              big&nbsp;
              <span class="text-[#F04E23]">impact</span>.
            </p>

            <button className="bg-[#F04E23] max-lg:bg-[#00AEE0] w-1/4 max-xl:w-2/5 max-lg:w-1/2 p-4 text-xl rounded-xl text-[#F0EFF4]">
              Let&apos;s Talk
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default AboutUs;