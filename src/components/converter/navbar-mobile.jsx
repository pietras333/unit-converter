import { useState } from "react";
import hamburger from "../../../public/assets/landing/icons8-hamburger.png";
import Image from "next/image";

const NavbarMobile = () => {
  const [menuActive, setMenuActivity] = useState(false);

  return (
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
              <li className="text-lg">
                <a
                  href="#about-us"
                  onClick={() => {
                    setMenuActivity((prev) => !prev);
                  }}
                >
                  About Us.
                </a>
              </li>
              <li className="text-lg">
                <a
                  href="#facts"
                  onClick={() => {
                    setMenuActivity((prev) => !prev);
                  }}
                >
                  Facts.
                </a>
              </li>
              <li className="text-lg">
                <a
                  href="#contact"
                  onClick={() => {
                    setMenuActivity((prev) => !prev);
                  }}
                >
                  Contact.
                </a>
              </li>
              <li>
                <button className="bg-[#FFB400] p-4 text-xl rounded-xl max-2xl:p-2.5">
                  Let&apos;s Convert
                </button>
              </li>
            </ul>
          </section>
        </section>
      ) : (
        <section className="w-full h-24 flex justify-center items-center fixed bg-[#00AEE0] z-30">
          <section className="w-3/4 h-full flex justify-between items-center">
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
                className="w-full"
              ></Image>
            </button>
          </section>
        </section>
      )}
    </div>
  );
};

export default NavbarMobile;
