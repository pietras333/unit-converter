"use client";
import { useEffect, useState } from "react";
import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";

const Navbar = () => {
  const [width, setWidth] = useState();

  // useEffect hook to set initial window width
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className="w-full h-24">
      {/* Conditionally render Navbar based on window width */}
      {width <= 1280 ? <NavbarMobile /> : <NavbarDesktop />}
    </section>
  );
};

export default Navbar;
