"use client";
import React, { useEffect } from "react";
import "./Hamburger.css";
// import { assets } from '../assets/frontend_assets/assets'
import Link from 'next/link';
import { useMenu } from "@/app/context/MenuContext/MenuContext";
import { CloudSnow, Cross, CrossIcon } from "lucide-react";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});
const HamburgerMenu = ({ closeMenu }) => {
  const {toggleMenu ,isMenuOpen } = useMenu();
  

  return (
    <>
      {isMenuOpen && (
        <>
          <div className=" absolute sm:left-6 left-[50%] top-[55%] translate-x-[-50%] translate-y-[-50%] bg-black z-10 w-72  px-5 pt-5   h-max  items-center flex flex-col gap-5  rounded-lg border-2  border-gray-900">
            
            <div className=" w-full flex justify-end pr-5 p-2 mt-2">
                <Image onClick={toggleMenu} src="/close-fill.svg" width={22} height={22} alt="close" />
              {/* <img alt="" className="cursor-pointer" /> */}
            </div>

            <ul className="w-full flex flex-col gap-5 justify-between items-center lg:text-xl font-medium ">
            <li className="hamburgerMenuLi rounded  w-full p-2 text-center hover:bg-orange-500  cursor-pointer">
              <Link
                // onClick={closeMenu}
                href="/"
                className={`${SpaceGrotesk.className} hamburgerMenua cursor-pointer text-white hover:text-white`}
              >
                Home
              </Link>
            </li>
            <li className="w-full hamburgerMenuLi rounded p-2 text-center hover:bg-orange-500  cursor-pointer">
              <Link
                // onClick={closeMenu}
                href="/"
                className={`${SpaceGrotesk.className} hamburgerMenua cursor-pointer text-white hover:text-white`}
              >
                ChatBot
              </Link>
            </li>
            <li className="hamburgerMenuLi rounded  w-full  p-2 text-center hover:bg-orange-500  cursor-pointer">
              <Link
                // onClick={closeMenu}
                href="/"
                className={`${SpaceGrotesk.className} hamburgerMenua cursor-pointer text-white hover:text-white`}
              >
                About Us
              </Link>
            </li>
            <li className="hamburgerMenuLi rounded  w-full  p-2 text-center hover:bg-orange-500  cursor-pointer">
              <Link
                // onClick={closeMenu}
                href="/"
                className={`${SpaceGrotesk.className} hamburgerMenua cursor-pointer text-white hover:text-white`}
              >
                Contect Us
              </Link>
            </li>
          </ul>

            <Link
            href="/"
              // to="/foodie/register"
              className={`${SpaceGrotesk.className} mt-10 rounded md:hidden border-2 border-gray-200 bg-[#5227ff]  p-2 w-full  text-white font-medium text-lg mb-10`}
            >
              <button className="rounded md:hidden  bg-[#5227ff] w-full  text-white font-bold text-lg ">
                Sign In
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default HamburgerMenu;
