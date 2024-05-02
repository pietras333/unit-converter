"use client";
import { useEffect, useState } from "react";
import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";
const Navbar = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  return (
    <section className="w-full h-24">
      {width <= 1280 ? <NavbarMobile /> : <NavbarDesktop />}
    </section>
  );
};

export default Navbar;
