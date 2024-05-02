import global from "../../../styles/global.css";
import Image from "next/image";
import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({ subsets: ["latin"] });

import dropDownIcon from "../../../public/assets/converter/icons8-drop-down.png";

const Converter = () => {
  return (
    <main
      className={`max-w-full h-screen flex flex-col bg-[#F0EFF4] text-[#24285b] ${comfortaa.className}`}
    >
      <section className="w-full h-1/6 flex justify-center items-center">
        <section className="w-3/4">
          <ul className="w-full flex justify-around items-center">
            <li>
              <h2 className="text-4xl tracking-wide max-xl:text-3xl text-[#00AEE0]">
                Unitee.
              </h2>
            </li>
            <li className="text-xl hover:cursor-pointer border-b-4 border-b-green-500">
              Engineering.
            </li>
            <li className="text-xl hover:cursor-pointer">Physics.</li>
            <li className="text-xl hover:cursor-pointer">Construction.</li>
            <li className="text-xl hover:cursor-pointer">Daily use.</li>
          </ul>
        </section>
      </section>
      <section className="w-full h-5/6 flex flex-col justify-start items-center">
        <section className="w-3/4 h-1/6">
          <h1 className="text-5xl uppercase bg-green-500 w-fit p-10 text-[#F0EFF4]">
            Engineering units converter.
          </h1>
        </section>
        <section className="w-3/4 h-5/6">
          <section className="w-full h-1/6 flex justify-start pl-10 items-center">
            <h2 className="text-3xl text-green-500">Units of volume.</h2>
            <button className="w-12 h-12 bg-green-500 ml-2 text-5xl text-[#F0EFF4] flex justify-center items-center">
              <span>&gt;</span>
            </button>
          </section>
          <section className="w-full h-4/6 bg-blue-500">
            <section>
              <h3></h3>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Converter;
