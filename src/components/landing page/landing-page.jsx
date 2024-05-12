import Image from "next/image";
import coding from "../../../public/assets/landing/coding.svg";
import Navbar from "./navbar";

const LandingPage = () => {
  return (
    <section className="max-w-full h-screen max-lg:h-[80vh] bg-landing bg-center max-2xl:bg-cover bg-full bg-no-repeat">
      {/* Main section */}
      <section className="w-full h-full flex flex-col max-lg:relative">
        {/* Navbar */}
        <Navbar />
        {/* Content */}
        <section className="w-full h-full flex max-lg:flex-col max-lg:items-center">
          {/* Text content */}
          <section className="w-1/2 max-xl:w-3/4 max-lg:w-[90%] max-lg:pl-0 max-lg:items-center h-full flex flex-col justify-center pl-[6rem] space-y-5">
            {/* Title */}
            <h1 className="text-7xl max-2xl:text-6xl max-xl:text-4xl max-2xl:pt-5 max-lg:text-2xl max-lg:w-[90%] max-lg:pt-10 max-lg:text-center font-bold w-full flex flex-col uppercase space-y-5">
              {/* Title line 1 */}
              <span className="text-[#24285b] text-2xl max-2xl:text-xl max-lg:text-lg flex justify-start items-center lowercase">
                <div className="w-10 h-10 bg-[#d3d2d6] flex justify-center items-center mr-2">
                  <p className="text-[#F0EFF4] text-lg">01</p>
                </div>
                Houston, we have a solution.
              </span>
              {/* Title line 2 */}
              <section className="flex flex-col z-20 justify-center items-start">
                <span className="text-[#00AEE0]">Let&apos;s</span>
                <span className="text-[#F04E23]">do some</span>
                <span className="text-8xl max-2xl:text7xl max-xl:text-5xl text-[#FFB400]">
                  converting
                </span>
              </section>
            </h1>
            {/* Description */}
            <p className="text-lg max-2xl:text-sm w-4/5 z-20 max-xl:w-full max-lg:text-base max-lg:w-[90%]">
              Your{" "}
              <span className="text-[#F04E23]">
                One-Stop Unit Conversion Hub!{" "}
              </span>
              Whether it's converting{" "}
              <span className="text-[#00AEE0]">kilometers to miles</span>,{" "}
              <span className="text-[#00AEE0]">Celsius to Fahrenheit</span>, or
              even obscure units like{" "}
              <span className="text-[#FFB400]">parsecs to light years</span>,
              we've got you covered. Let's simplify the complexities of
              measurement together! Let's do some{" "}
              <span className="text-green-600">converting!</span>
            </p>
            {/* Button */}
            <a href="./converter">
              <button className="bg-[#00AEE0] hover:pl-2 w-1/4 max-2xl:w-1/3 max-xl:w-2/5 p-4 max-2xl:p-3.5 text-xl rounded-xl text-[#F0EFF4]">
                Let&apos;s Convert
              </button>
            </a>
          </section>
          {/* Image */}
          <section className="w-1/2 h-full flex justify-center items-center max-lg:absolute left-[25%]">
            <Image
              src={coding}
              alt="coding vector"
              className="w-3/4 max-xl:w-full max-lg:hidden"
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default LandingPage;
