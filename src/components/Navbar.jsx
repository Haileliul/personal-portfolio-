import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 glass-container">
      <div className="flex items-center">
        <Link
          to="LandingPage"
          smooth={true}
          duration={500}
          className="hover:text-acitive text-xl mr-4 cursor-pointer"
        >
          Logo
        </Link>
      </div>
      <div className="hidden md:flex flex-grow justify-end items-center px-5 ">
        <ul className="flex flex-row gap-2">
          <li className="hover:border-b-2 border-acitive  py-2 px-4 hover:text-acitive text-xl font-bold hover:cursor-pointer ">
            <Link to="LandingPage" smooth={true} duration={500} spy={true}>
              Home
            </Link>
          </li>
          <li className="hover:border-b-2 border-acitive  py-2 px-4 hover:text-acitive text-xl font-bold hover:cursor-pointer">
            <Link
              to="AboutPage"
              smooth={true}
              duration={500}
              spy={true}
              className="hover:text-acitive"
            >
              About
            </Link>
          </li>
          <li className="hover:border-b-2 border-acitive  py-2 px-4 hover:text-acitive text-xl font-bold hover:cursor-pointer ">
            <Link
              to="ProjectPage"
              smooth={true}
              duration={500}
              spy={true}
              className="hover:text-acitive"
            >
              Projects
            </Link>
          </li>
          <li className="hover:border-b-2 border-acitive  py-2 px-4 hover:text-acitive text-xl font-bold hover:cursor-pointer">
            <Link
              to="ContactPage"
              smooth={true}
              duration={500}
              spy={true}
              className="hover:text-acitive"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="hover:text-acitive focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-container opacity-100">
          <ul className="flex flex-col gap-4 py-4 px-8 items-end text-neutral_tow ">
            <li>
              <Link
                to="LandingPage"
                smooth={true}
                duration={500}
                spy={true}
                className="text-black hover:text-acitive hover:cursor-pointer"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="AboutPage"
                smooth={true}
                duration={500}
                spy={true}
                className="text-black hover:text-acitive hover:cursor-pointer"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="ProjectPage"
                smooth={true}
                duration={500}
                spy={true}
                className="text-black hover:text-acitive hover:cursor-pointer"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="ContactPage"
                smooth={true}
                duration={500}
                spy={true}
                className="text-black hover:text-acitive hover:cursor-pointer"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
