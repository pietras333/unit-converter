import { Comfortaa } from "next/font/google";
import Image from "next/image";
const comfortaa = Comfortaa({ subsets: ["latin"] });

import githubIcon from "../../../public/assets/landing/icons8-github.svg";

const Footer = () => {
  return (
    <footer
      className={`max-w-full h-[25vh] ${comfortaa.className} flex justify-center items-center bg-landing-footer bg-center bg-full bg-no-repeat`}
    >
      <section className="w-2/3 h-full flex">
        <section className="w-1/2 h-full flex justify-center items-center">
          <ul className="w-3/4 max-lg:w-4/5 max-lg:text-sm max-md:w-full h-3/4 flex flex-col justify-around">
            <li className="w-full h-1/6 bg-[#FFB400] flex justify-start items-center p-5">
              <a
                href="https://github.com/pietras333"
                className="flex items-center"
                target="_blank"
              >
                <Image
                  src={githubIcon}
                  alt="github icon vector"
                  className="w-10"
                ></Image>
                <span>Github profile</span>
              </a>
            </li>
            <li className="w-full h-1/6 bg-[#F04E23] flex justify-start items-center p-5">
              <span>Created 2024.</span>
            </li>
            <li className="w-full h-1/6 bg-[#00AEE0] flex justify-start items-center p-5">
              <span>Developed by Piotr Wendt</span>
            </li>
          </ul>
        </section>
        <section className="w-1/2 h-full flex justify-end items-start">
          <span className="text-[#24285b] text-2xl max-xl:text-xl max-md:text-base m-10 max-lg:m-5 flex justify-start items-center lowercase">
            <div className="w-10 h-10 bg-[#d3d2d6] flex justify-center items-center mr-2">
              <p className="text-[#F0EFF4] text-lg">05</p>
            </div>
            That's all it is.
          </span>
        </section>
      </section>
    </footer>
  );
};
export default Footer;
