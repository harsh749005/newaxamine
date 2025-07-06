"use client"
import { useMenu } from "@/app/context/MenuContext/MenuContext";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image"; 

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

const Navbar = () => {
  const {toggleMenu,isMenuOpen } = useMenu();

  return (
    <>
      <div className="z-10 sticky top-0 overflow-hidden bg-black  ">
          <div className="p-5 lg:p-10 flex justify-between items-center ">
            <div className="">
              <span
                className={`${SpaceGrotesk.className} text-white font-medium text-xl`}
              >
                AXAMINE
              </span>
            </div>
            <ul
              className={`${SpaceGrotesk.className} text-white font-medium lg:flex gap-10 hidden lg:visible`}
            >
              <li className="transition-all duration-300 ease-in cursor-pointer hover:scale-110  text-sm">
                Home
              </li>
              <li className="transition-all duration-300 ease-in cursor-pointer hover:scale-110 text-sm">
                ChatBot
              </li>
              <li className="transition-all duration-300 ease-in cursor-pointer hover:scale-110 text-sm">
                About Us
              </li>
              <li className="transition-all duration-300 ease-in cursor-pointer hover:scale-110 text-sm">
                Contact Us
              </li>
            </ul>
            <div className="lg:flex items-center justify-center gap-5 hidden lg:visible">
              <div>
                <span
                  className={`${SpaceGrotesk.className} font-medium px-4 py-2 rounded text-white cursor-pointer text-sm hover:bg-[#5227ff] transition-all duration-300 ease-in-out  hover:text-white`}
                >
                  SignIn
                </span>
              </div>
              <div>
                {/* bg-[#FFFDD0] */}
                <span
                  className={`${SpaceGrotesk.className} font-medium px-4 py-2 rounded  bg-[#5227ff] text-white cursor-pointer text-sm`}
                >
                  Signup
                </span>
              </div>
            </div>
            {/* <Image src="/close-fill.svg" width={22} height={22} alt="close" className="text-white" /> */}
            {
              isMenuOpen 
              ? (
                <Image src="/close-fill.svg" width={22} height={22} alt="close" />
              )
                : (
                  <Image onClick={toggleMenu} src="/menu-4-fill.svg" width={22} height={22} alt="hamburger" className="md:hidden visible"/>
                ) 
            }
          </div>
        </div>
    </>
  );
};

export default Navbar;
