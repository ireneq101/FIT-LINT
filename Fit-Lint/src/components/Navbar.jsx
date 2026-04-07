import React from "react";
import { useState } from 'react';

import Navlogo from "../assets/Navlogo.svg";
import {close, menu} from '../assets';
import style from "../styles";
import { Navlinks } from '../constants';
import SignUpModal from "./SignUpModal";
import LogInModal from "./LogInModal";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  // const navLinks = ['HOME', 'ABOUT', 'ACTIVITY', 'TEAM', 'LOGIN'];
  return (
    <nav className="flex items-center w-full pt-3 justify-between px-8 py-4 font-sans">
      <div>
        <img className="h-auto w-20 md:w-26" src={Navlogo} alt="Fit-Lint Logo" />
      </div>

      <div className="flex items-center space-x-5"> 
        <ul className={`${style.flexEnd} hidden lg:flex space-x-3 text-sm font-medium`}>
          {Navlinks.map((link) => (
            <li key={link.id }>
              <a href={`#${link.id}`} className="hover:text-green-400 transition-colors me-4">
                {link.title.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* <ul className={`${style.flexEnd} hidden lg:flex space-x-6 text-sm font-medium`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-green-400 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul> */}

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <SignUpModal className="text-white px-6 py-2 rounded-lg transition-all">
          </SignUpModal>
          {/* <LogInModal className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-6 py-2 rounded-lg transition-all">
          </LogInModal> */}
        </div>
      </div>

      {/* Mobile view */}
      <div className="sm:flex items-center space-x-6 text-sm font-medium lg:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-6 h-6 object-contain text-amber-50"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-[#4CAF50] absolute top-20 right-0 mx-4 my-2 min-w-35 rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {Navlinks.map((link, index) => (
              <li
                key={link.id}
                className={`cursor-pointer text-[16px] mb-6 ${
                  index === Navlinks.length - 1 ? "mr-0" : "mb-6"
                } text-white`}
              >
                <a href={`#${link.id}`} className="hover:text-blue-950 transition-colors">{link.title.toUpperCase()}</a>
              </li>
            ))}

            <div className="lg:flex items-center space-x-6 text-sm font-medium">
              <SignUpModal className="bg-[#000323] hover:bg-[#020736] text-white px-6 py-2 rounded-lg transition-all">
                SIGN-UP
              </SignUpModal>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
