import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, logoNew } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation after page load
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Brand Name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logoNew} alt="logo" className="h-12 w-12 object-contain" />
          <div className="flex flex-col">
            <p className="text-white text-[16px] font-bold cursor-pointer leading-tight">
              Shehzada Ammad Ali
            </p>
            <span className="text-[#915EFF] text-[11px] font-medium hidden sm:block">
              Senior Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex flex-row gap-8 hidden">
          {navLinks.map((link) => {
            const isActive =
              link.type === "route"
                ? location.pathname === link.id
                : active === link.title;

            return (
              <li
                key={link.id}
                className={`${
                  isActive ? "text-white" : "text-secondary"
                } hover:text-white text-[15px] font-medium cursor-pointer transition-colors duration-200`}
                onClick={() => setActive(link.title)}
              >
                {link.type === "route" ? (
                  <Link to={link.id}>{link.title}</Link>
                ) : (
                  <a href={location.pathname === "/" ? `#${link.id}` : `/#${link.id}`}>
                    {link.title}
                  </a>
                )}
              </li>
            );
          })}
          {/* CTA Button */}
          <li>
            <a
              href={location.pathname === "/" ? "#contact" : "/#contact"}
              className="bg-[#915EFF] hover:bg-[#7a4de0] text-white text-[14px] font-medium py-2 px-4 rounded-lg transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl shadow-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 w-full">
              {navLinks.map((link) => {
                const isActive =
                  link.type === "route"
                    ? location.pathname === link.id
                    : active === link.title;

                return (
                  <li
                    key={link.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] w-full ${
                      isActive ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                  >
                    {link.type === "route" ? (
                      <Link to={link.id} className="block py-1">
                        {link.title}
                      </Link>
                    ) : (
                      <a
                        href={location.pathname === "/" ? `#${link.id}` : `/#${link.id}`}
                        className="block py-1"
                      >
                        {link.title}
                      </a>
                    )}
                  </li>
                );
              })}
              {/* Mobile CTA */}
              <li className="w-full mt-2">
                <a
                  href={location.pathname === "/" ? "#contact" : "/#contact"}
                  onClick={() => setToggle(false)}
                  className="block text-center bg-[#915EFF] hover:bg-[#7a4de0] text-white text-[14px] font-medium py-3 px-4 rounded-lg transition-all duration-300"
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
