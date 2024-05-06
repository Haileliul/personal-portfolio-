import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-800">
      <div className="flex items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-white text-xl mr-4 cursor-pointer"
        >
          Logo
        </Link>
      </div>
      <div className="hidden md:flex flex-grow justify-end items-center">
        <ul className="flex flex-row gap-10">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              className="text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              className="text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              className="text-white"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              className="text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-Darker_purple  opacity-100">
          <ul className="flex flex-col gap-4 py-4 px-8 items-end text-neutral_tow ">
            <li className=" ">
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                className="text-white"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                className="text-white"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                className="text-white"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                className="text-white"
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
