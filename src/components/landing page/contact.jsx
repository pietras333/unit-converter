const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-full h-screen max-lg:h-[120vh] bg-landing-contact bg-center bg-full max-2xl:bg-cover bg-no-repeat"
    >
      <section className="w-full h-full flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
        <section className="w-1/2 max-lg:w-[90%] h-full max-md:h-1/2">
          <section className="w-full h-full flex flex-col items-start max-lg:items-center justify-center pl-[6rem] max-lg:pl-0 space-y-5 max-lg:space-y-0">
            <h1 className="text-7xl max-lg:text-5xl max-md:text-4xl font-bold w-full flex flex-col items-start max-lg:items-end uppercase space-y-5 max-lg:space-y-0">
              <span className="text-[#24285b] text-2xl max-lg:text-xl flex justify-start items-center lowercase">
                <div className="w-10 h-10 bg-[#d3d2d6] flex justify-center items-center mr-2">
                  <p className="text-[#F0EFF4] text-lg">04</p>
                </div>
                Send me a message.
              </span>
              <section className="flex flex-col z-20 items-start max-lg:items-end">
                <span className="text-[#FFB400]">Have</span>
                <span className="text-[#00AEE0]">Some</span>
                <span className="text-8xl max-lg:text-6xl max-md:text-5xl text-[#F04E23]">
                  Time?
                </span>
              </section>
            </h1>
            <p class="text-lg max-lg:text-base w-4/5 max-lg:w-full z-20">
              You can find my profile on GitHub, where I showcase my various
              projects! If you're interested in connecting or just want to chat
              about anything, don't hesitate to send me a message. I'm always
              open to discussing ideas, collaborations, or just sharing
              experiences in the world of&nbsp;
              <span class="text-[#FFB400]">coding</span> and development.
              Looking forward to hearing from you!
            </p>
          </section>
        </section>
        <section className="w-1/2 max-lg:w-[90%] h-full max-md:h-1/2 flex justify-center max-md:justify-start items-center max-xl:pt-24">
          <form
            action=""
            className="w-3/4 h-full max-lg:h-full max-lg:w-full max-xl:h-5/6 max-md:h-full flex flex-col justify-start items-center"
          >
            <section className="w-3/4 h-1/6 space-x-10 flex justify-center items-center">
              <section className="w-3/4 h-full flex flex-col justify-center items-start">
                <h4>First name.</h4>
                <input
                  type="text"
                  placeholder="Donald"
                  className="w-full h-1/3 border-4 border-green-500 p-5 max-md:p-4"
                />
              </section>
              <section className="w-3/4 h-full flex flex-col justify-center items-start">
                <h4>Surname.</h4>
                <input
                  type="text"
                  placeholder="Trump"
                  className="w-full h-1/3 border-4 border-green-500 p-5 max-md:p-4"
                />
              </section>
            </section>
            <section className="w-3/4 h-2/6 flex flex-col justify-center items-start">
              <h4>Email.</h4>
              <input
                type="text"
                placeholder="youremail@email.com"
                className="w-full h-1/3 border-4 border-green-500 p-5 max-md:p-4"
              />
            </section>
            <section className="w-3/4 h-3/6 flex flex-col justify-center items-start">
              <h4>Message.</h4>
              <textarea
                placeholder="Sent me a message."
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="w-full border-4 border-green-500 p-5 max-md:h-2/3 max-md:p-4"
              ></textarea>
            </section>
            <button className="bg-green-500 max-lg:p-2.5 w-1/4 p-4 text-xl max-md:p-1 rounded-xl text-[#F0EFF4]">
              Send
            </button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default Contact;
