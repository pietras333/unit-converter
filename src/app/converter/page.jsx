"use client";
import global from "../../../styles/global.css";
import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({ subsets: ["latin"] });
import { useState, useEffect } from "react";
import UnitField from "@/components/converter/unitField";
import engineeringUnits from "../assets/engineeringUnits.json";
import NavbarMobile from "@/components/converter/navbar-mobile";
import NavbarDesktop from "@/components/converter/navbar-desktop";
import hamburger from "../../../public/assets/landing/icons8-hamburger.png";
import Image from "next/image";

const Converter = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentUnitCategory, setCurrentUnitCategory] = useState("");
  const [currentUnits, setCurrentUnits] = useState("");
  const units = engineeringUnits;
  const unitCategories = [
    [
      "volume",
      "area",
      "length",
      "energy",
      "force",
      "speed",
      "data storage",
      "acceleration",
      "density",
      "moment of inertia",
      "torque",
      "pressure",
      "power",
      "time",
    ],
    [
      "angular velocity",
      "angular acceleration",
      "specific volume",
      "moment of force",
      "acceleration",
      "moment of inertia",
      "speed",
      "force",
      "energy",
      "torque",
    ],
    ["volume dry", "length", "area", "volume", "density"],
    ["angle", "numbers", "time", "length"],
  ];
  const currentUnitsColors = ["#22c55e", "#00AEE0", "#F04E23", "#FFB400"];
  const currentUnitsNames = [
    "Engineering",
    "Physics",
    "Construction",
    "Daily use",
  ];
  const [width, setWidth] = useState();
  const [menuActive, setMenuActivity] = useState(false);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  return (
    <main
      className={`max-w-full h-screen flex flex-col bg-[#F0EFF4] text-[#24285b] ${comfortaa.className}`}
    >
      <section className="w-full h-1/6 flex justify-center max-md:items-start items-center">
        <section className="w-3/4 max-lg:w-full">
          {width < 768 ? (
            <div>
              {menuActive ? (
                <section className="w-full h-full flex flex-col justify-start items-center fixed bg-landing-mobile-menu bg-center bg-cover bg-no-repeat z-50">
                  <section className="w-3/4 h-1/6 flex justify-between items-center">
                    <h2 className="text-4xl tracking-wide max-xl:text-3xl text-[#F0EFF4]">
                      Unitee.
                    </h2>
                    <button
                      className="w-12 h-12 rounded-xl flex justify-center items-center"
                      onClick={() => {
                        setMenuActivity((prev) => !prev);
                      }}
                    >
                      <Image
                        src={hamburger}
                        alt="hamburger vector"
                        className="w-full rotate-90"
                      ></Image>
                    </button>
                  </section>
                  <section className="w-3/4 h-5/6 flex justify-center items-center z-50">
                    <ul className="w-3/4 h-full flex flex-col items-center justify-start space-y-6 text-[#24285b]">
                      <li
                        className={`text-xl border-b-4 border-b-[#22c55e] p-2 max-lg:text-lg ${
                          Number(currentUnits) == 0
                            ? "bg-[#22c55e] text-[#F0EFF4]"
                            : "bg-transparent"
                        }`}
                      >
                        <button
                          id="0"
                          onClick={(e) => {
                            setMenuActivity((prev) => !prev);

                            setCurrentUnitCategory(null);
                            setShowDropdown(false);
                            setCurrentUnits(e.target.id);
                          }}
                        >
                          Engineering.
                        </button>
                      </li>
                      <li
                        className={`text-xl border-b-4 border-b-[#00AEE0] p-2 max-lg:text-lg ${
                          Number(currentUnits) == 1
                            ? "bg-[#00AEE0] text-[#F0EFF4]"
                            : "bg-transparent"
                        }`}
                      >
                        <button
                          id="1"
                          onClick={(e) => {
                            setMenuActivity((prev) => !prev);
                            setCurrentUnitCategory(null);
                            setShowDropdown(false);
                            setCurrentUnits(e.target.id);
                          }}
                        >
                          Physics.
                        </button>
                      </li>
                      <li
                        className={`text-xl border-b-4 border-b-[#F04E23] p-2 max-lg:text-lg ${
                          Number(currentUnits) == 2
                            ? "bg-[#F04E23] text-[#F0EFF4]"
                            : "bg-transparent"
                        }`}
                      >
                        <button
                          id="2"
                          onClick={(e) => {
                            setMenuActivity((prev) => !prev);

                            setCurrentUnitCategory(null);
                            setShowDropdown(false);
                            setCurrentUnits(e.target.id);
                          }}
                        >
                          Construction.
                        </button>
                      </li>
                      <li
                        className={`text-xl border-b-4 border-b-[#FFB400] p-2 max-lg:text-lg ${
                          Number(currentUnits) == 3
                            ? "bg-[#FFB400] text-[#F0EFF4]"
                            : "bg-transparent"
                        }`}
                      >
                        <button
                          id="3"
                          onClick={(e) => {
                            setMenuActivity((prev) => !prev);

                            setCurrentUnitCategory(null);
                            setShowDropdown(false);
                            setCurrentUnits(e.target.id);
                          }}
                        >
                          Daily use.
                        </button>
                      </li>
                    </ul>
                  </section>
                </section>
              ) : (
                <section className="w-full h-24 flex justify-center items-center fixed z-30">
                  <section className="w-3/4 h-full flex justify-between items-center">
                    <h2 className="text-4xl tracking-wide max-xl:text-3xl text-[#00AEE0]">
                      Unitee.
                    </h2>
                    <button
                      className="w-12 h-12 rounded-xl flex justify-center items-center"
                      onClick={() => {
                        setMenuActivity((prev) => !prev);
                      }}
                    >
                      <Image
                        src={hamburger}
                        alt="hamburger vector"
                        className="w-full"
                      ></Image>
                    </button>
                  </section>
                </section>
              )}
            </div>
          ) : (
            <ul className="w-full flex justify-around items-center">
              <li>
                <h2 className="text-4xl tracking-wide max-xl:text-3xl text-[#00AEE0]">
                  Unitee.
                </h2>
              </li>
              <li
                className={`text-xl border-b-4 border-b-[#22c55e] p-2 max-lg:text-lg ${
                  Number(currentUnits) == 0
                    ? "bg-[#22c55e] text-[#F0EFF4]"
                    : "bg-transparent"
                }`}
              >
                <button
                  id="0"
                  onClick={(e) => {
                    setCurrentUnitCategory(null);
                    setShowDropdown(false);
                    setCurrentUnits(e.target.id);
                  }}
                >
                  Engineering.
                </button>
              </li>
              <li
                className={`text-xl border-b-4 border-b-[#00AEE0] p-2 max-lg:text-lg ${
                  Number(currentUnits) == 1
                    ? "bg-[#00AEE0] text-[#F0EFF4]"
                    : "bg-transparent"
                }`}
              >
                <button
                  id="1"
                  onClick={(e) => {
                    setCurrentUnitCategory(null);
                    setShowDropdown(false);
                    setCurrentUnits(e.target.id);
                  }}
                >
                  Physics.
                </button>
              </li>
              <li
                className={`text-xl border-b-4 border-b-[#F04E23] p-2 max-lg:text-lg ${
                  Number(currentUnits) == 2
                    ? "bg-[#F04E23] text-[#F0EFF4]"
                    : "bg-transparent"
                }`}
              >
                <button
                  id="2"
                  onClick={(e) => {
                    setCurrentUnitCategory(null);
                    setShowDropdown(false);
                    setCurrentUnits(e.target.id);
                  }}
                >
                  Construction.
                </button>
              </li>
              <li
                className={`text-xl border-b-4 border-b-[#FFB400] p-2 max-lg:text-lg ${
                  Number(currentUnits) == 3
                    ? "bg-[#FFB400] text-[#F0EFF4]"
                    : "bg-transparent"
                }`}
              >
                <button
                  id="3"
                  onClick={(e) => {
                    setCurrentUnitCategory(null);
                    setShowDropdown(false);
                    setCurrentUnits(e.target.id);
                  }}
                >
                  Daily use.
                </button>
              </li>
            </ul>
          )}
        </section>
      </section>
      <section className="w-full h-5/6 flex flex-col justify-start items-center">
        <section className="w-3/4 max-md:w-11/12 h-1/6">
          <h1
            className={`text-5xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl uppercase bg-[${
              currentUnitsColors[Number(currentUnits)]
            }] w-fit p-10 text-[#F0EFF4]`}
          >
            {currentUnitsNames[Number(currentUnits)]} units converter.
          </h1>
        </section>
        <section className="w-3/4 h-5/6">
          <section className="w-full h-1/6 flex justify-start pl-10 items-center relative max-md:p-0">
            <h2
              className={`text-3xl max-md:text-xl text-[${
                currentUnitsColors[Number(currentUnits)]
              }]`}
            >
              {!currentUnitCategory
                ? "Select unit category."
                : `Units of ${currentUnitCategory}`}
            </h2>
            <button
              onClick={() => {
                setShowDropdown((prev) => !prev);
              }}
              className={`w-12 h-12 max-md:w-10 max-md:h-10 bg-[${
                currentUnitsColors[Number(currentUnits)]
              }] ml-2 text-5xl text-[#F0EFF4] flex justify-center items-center`}
            >
              <span className={showDropdown ? "rotate-90" : ""}>&gt;</span>
            </button>
            {showDropdown ? (
              <section
                className={`w-1/2 h-[300%] max-xl:w-fit max-xl:max-w-[75%] max-md:w-3/4 max-md:h-fit max-md:max-h-fit max-xl:text-base max-xl:max-h-[250%] bg-[${
                  currentUnitsColors[Number(currentUnits)]
                }] absolute top-[75%] -left-[1%] max-md:p-3 max-md:left-0`}
              >
                <ul className="w-full h-full flex flex-col justify-center items-center flex-wrap">
                  <li>
                    <h2 className="text-2xl first-letter:uppercase">
                      {currentUnitsNames[Number(currentUnits)]}
                    </h2>
                  </li>
                  {unitCategories[Number(currentUnits)].map((category) => {
                    return (
                      <li
                        key={category}
                        className="hover:text-[#F0EFF4] hover:pl-2 border-b-2 border-transparent hover:border-b-[#F0EFF4]"
                      >
                        <button
                          id={category}
                          onClick={(e) => {
                            setCurrentUnitCategory(e.target.id);
                          }}
                        >
                          Units of {category}.
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ) : (
              ""
            )}
          </section>
          <section className="w-full h-4/6 overflow-auto flex justify-center items-center flex-wrap">
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
              <h2 className="text-3xl font-bold max-md:w-full max-md:text-2xl">
                Select unit category.
              </h2>
            )}
          </section>
        </section>
      </section>
    </main>
  );
};

export default Converter;
