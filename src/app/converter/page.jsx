"use client";
import global from "../../../styles/global.css";
import Image from "next/image";
import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({ subsets: ["latin"] });
import { useEffect, useState } from "react";
import UnitField from "@/components/converter/unitField";
import engineeringUnits from "../assets/engineeringUnits.json";

const Converter = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentUnitCategory, setCurrentUnitCategory] = useState("");
  const units = engineeringUnits;

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
          <section className="w-full h-1/6 flex justify-start pl-10 items-center relative">
            <h2 className="text-3xl text-green-500">
              {!currentUnitCategory
                ? "Select unit category."
                : `Units of ${currentUnitCategory}`}
            </h2>
            <button
              onClick={() => {
                setShowDropdown((prev) => !prev);
              }}
              className="w-12 h-12 bg-green-500 ml-2 text-5xl text-[#F0EFF4] flex justify-center items-center"
            >
              <span className={showDropdown ? "rotate-90" : ""}>&gt;</span>
            </button>
            {showDropdown ? (
              <section className="w-1/4 h-[300%] bg-green-500 absolute top-[75%] -left-[1%]">
                <ul className="w-full h-full flex flex-col justify-center items-center flex-wrap">
                  <li>
                    <h2 className="text-2xl">Engineering.</h2>
                  </li>
                  <li>
                    <button
                      id="volume"
                      onClick={(e) => {
                        setCurrentUnitCategory(e.target.id);
                      }}
                    >
                      Units of Volume.
                    </button>
                  </li>
                  <li>
                    <button
                      id="area"
                      onClick={(e) => {
                        setCurrentUnitCategory(e.target.id);
                      }}
                    >
                      Units of Area.
                    </button>
                  </li>
                  <li>
                    <button
                      id="length"
                      onClick={(e) => {
                        setCurrentUnitCategory(e.target.id);
                      }}
                    >
                      Units of Length.
                    </button>
                  </li>
                  <li>
                    <button
                      id="energy"
                      onClick={(e) => {
                        setCurrentUnitCategory(e.target.id);
                      }}
                    >
                      Units of Energy.
                    </button>
                  </li>
                  <li>
                    <button
                      id="force"
                      onClick={(e) => {
                        setCurrentUnitCategory(e.target.id);
                      }}
                    >
                      Units of Force.
                    </button>
                  </li>
                  <li>
                    <button
                      id="speed"
                      onClick={(e) => {
                        setCurrentUnitCategory(e.target.id);
                      }}
                    >
                      Units of Speed.
                    </button>
                  </li>
                  <li>
                    <button
                      id="dataStorage"
                      onClick={(e) => {
                        setCurrentUnitCategory(e.target.id);
                      }}
                    >
                      Units of Data Storage.
                    </button>
                  </li>
                </ul>
              </section>
            ) : (
              ""
            )}
          </section>
          <section className="w-full h-4/6 overflow-auto flex justify-center items-center flex-wrap hover:transition-all">
            {currentUnitCategory && units[currentUnitCategory] ? (
              Object.entries(units[currentUnitCategory]).map(
                ([unitKey, unitValue]) => (
                  <UnitField
                    key={unitKey}
                    unitName={unitValue.unitName}
                    unitSymbol={unitValue.unitSymbol}
                    unitCategory={currentUnitCategory}
                  />
                )
              )
            ) : (
              <h2 className="text-3xl font-bold">Select unit category.</h2>
            )}
          </section>
        </section>
      </section>
    </main>
  );
};

export default Converter;
