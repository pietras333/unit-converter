import Image from "next/image";
import coding2 from "../../../public/assets/landing/coding2.svg";
import science from "../../../public/assets/landing/science.svg";
import startUp from "../../../public/assets/landing/start-up.svg";

const Facts = () => {
  return (
    <section
      className="max-w-full h-screen max-lg:h-[150vh] bg-landing-facts bg-center bg-full max-2xl:bg-cover bg-no-repeat"
      id="facts"
    >
      <section className="w-full h-full flex flex-col">
        <section className="w-full h-full flex flex-col">
          <section className="w-full h-1/4 max-lg:h-1/6 flex justify-center items-center flex-col">
            <span className="text-[#24285b] text-2xl max-lg:text-xl font-bold flex justify-start max-lg:justify-center items-center lowercase">
              <div className="w-10 h-10 bg-[#d3d2d6] flex justify-center items-center mr-2">
                <p className="text-[#F0EFF4] text-lg">03</p>
              </div>
              Just the facts, ma'am.
            </span>
            <h2 className="text-5xl max-lg:text-4xl uppercase max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
              <span className="text-xl text-[#FFB400]">Let's speak&nbsp;</span>
              <span className="text-xl text-[#00AEE0]">
                the language of&nbsp;
              </span>
              <span className="font-extrabold text-[#F04E23]">FACTS.</span>
            </h2>
            <p class="text-lg text-[#24285b]">3 facts about this site.</p>
          </section>
          <section className="w-full h-2/4 max-lg:h-full flex justify-center items-center pt-10">
            <ul className="w-4/5 max-xl:w-5/6 max-lg:w-[95%] max-lg:flex-col max-lg:h-full items-center h-full flex justify-around">
              <li className="w-1/5 max-2xl:w-1/4 max-xl:w-[30%] max-lg:w-4/5 h-full max-lg:h-[30%] bg-[#e2e0ea] border-green-500 border-t-8">
                <section className="w-full h-full flex flex-col justify-between">
                  <section className="w-full h-1/2 max-lg:h-2/3 flex flex-col justify-start items-center">
                    <h3 className="text-3xl max-lg:text-2xl pt-5 uppercase flex justify-between items-center w-5/6">
                      <span>Features.</span>
                      <div className="w-5 h-5 bg-green-500 rounded-xl"></div>
                    </h3>
                    <p className="w-5/6 max-lg:text-base">
                      The site offers real-time unit conversion for engineering,
                      physics, construction, and everyday use. It's your go-to
                      tool for swift and accurate unit conversions across
                      various fields!
                    </p>
                  </section>
                  <section className="w-full h-1/2 max-lg:hidden max-lg:h-1/3 flex justify-center items-center">
                    <Image
                      src={science}
                      alt="science vector"
                      className="w-3/4 max-xl:w-1/2"
                    ></Image>
                  </section>
                </section>
              </li>
              <li className="w-1/5 max-2xl:w-1/4 max-xl:w-[30%] max-lg:w-4/5 h-full max-lg:h-[30%] bg-[#e2e0ea] border-green-500 border-t-8">
                <section className="w-full h-full flex flex-col justify-between">
                  <section className="w-full h-1/2 max-lg:h-2/3 flex flex-col justify-start items-center">
                    <h3 className="text-3xl max-lg:text-2xl pt-5 uppercase flex justify-between items-center w-5/6">
                      <span>Creator.</span>
                      <div className="w-5 h-5 bg-green-500 rounded-xl"></div>
                    </h3>
                    <p className="w-5/6 max-lg:text-base">
                      Developed by a solo developer, you can find the project's
                      source code on GitHub. Feel free to reach out if you'd
                      like to chat!
                    </p>
                  </section>
                  <section className="w-full h-1/2 max-lg:hidden max-lg:h-1/3 flex justify-center items-center">
                    <Image
                      src={coding2}
                      alt="coding vector"
                      className="w-3/4 max-xl:w-1/2"
                    ></Image>
                  </section>
                </section>
              </li>
              <li className="w-1/5 max-2xl:w-1/4 max-xl:w-[30%] max-lg:w-4/5 h-full max-lg:h-[30%] bg-[#e2e0ea] border-green-500 border-t-8">
                <section className="w-full h-full flex flex-col justify-between">
                  <section className="w-full h-1/2 max-lg:h-2/3 flex flex-col justify-start items-center">
                    <h3 className="text-3xl max-lg:text-2xl pt-5 uppercase flex justify-between items-center w-5/6">
                      <span>Pricing.</span>
                      <div className="w-5 h-5 bg-green-500 rounded-xl"></div>
                    </h3>
                    <p className="w-5/6 max-lg:text-base">
                      The site is completely free to use! Plus, you can access
                      the source code from my GitHub repository. Feel free to
                      explore and utilize it however you like!
                    </p>
                  </section>
                  <section className="w-full h-1/2 max-lg:hidden  max-lg:h-1/3 flex justify-center items-center">
                    <Image
                      src={startUp}
                      alt="start up vector"
                      className="w-3/4 max-xl:w-1/2"
                    ></Image>
                  </section>
                </section>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Facts;
