const NavbarDesktop = () => {
  return (
    <nav className="w-full h-24 flex justify-center">
      <ul className="w-3/4 max-2xl:w-4/5 max-xl:w-5/6 h-full flex items-center justify-between text-[#F0EFF4]">
        <section className="w-1/2 max-2xl:w-1/4 max-xl:w-1/5">
          <li>
            <h2 className="text-4xl tracking-wide max-xl:text-3xl ">Unitee.</h2>
          </li>
        </section>
        <section className="w-1/2 max-2xl:w-2/3 flex justify-end items-center space-x-14">
          <li className="text-lg">
            <a href="#about-us">About Us.</a>
          </li>
          <li className="text-lg">
            <a href="#facts">Facts.</a>
          </li>
          <li className="text-lg">
            <a href="#contact">Contact.</a>
          </li>
          <li>
            <a href="./converter">
              <button className="bg-[#FFB400] hover:translate-x-2 p-4 text-xl rounded-xl max-2xl:p-2.5">
                Let&apos;s Convert
              </button>
            </a>
          </li>
        </section>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
