import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <div className="flex-1 lg:hidden flex justify-start">
          <button className="text-2xl text-gray-700 hover:text-pink-600 focus:outline-none">
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="flex-1 flex justify-center lg:justify-start lg:flex-none cursor-pointer">
          <img className="h-7 md:h-8 w-auto" src={Logo} alt="Dev Stack Logo" />
        </div>
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#Home"
                className="text-pink-600 font-medium hover:text-pink-700 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Technologies"
                className="text-gray-600 font-medium hover:text-pink-600 transition-colors"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className="text-gray-600 font-medium hover:text-pink-600 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="text-gray-600 font-medium hover:text-pink-600 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="text-gray-600 font-medium hover:text-pink-600 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-end items-center space-x-3 md:space-x-6 lg:flex-none">
          <button className="text-gray-700 font-medium hover:text-pink-600 text-sm md:text-base transition-colors">
            Sign in
          </button>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full font-medium text-sm md:text-base transition-colors">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
