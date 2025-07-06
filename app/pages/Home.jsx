import Image from "next/image";
import { Baloo_2 } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import { Inter } from "next/font/google";
import { CheckCircle } from "lucide-react";
import Card from "../components/Card";
const Baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: "500",
});

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "500",
});

const Inter_ = Inter({
  subsets: ["latin"],
  weight: "500",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-start  bg-[#fbfbfb]">
        <div className="w-[1000px] m-[auto] ">
          <div className=" flex items-center justify-between h-screen ">
            <div className=" w-[450px] flex flex-col gap-5 mb-20">
              <h1
                className={`${Inter_.className} text-left text-black text-4xl `}
              >
                Axamine — Revolutionize diagnostics with AI-powered precision
                and speed
              </h1>
              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore amet quasi, ratione repellendus quam cupiditate
                officia deserunt? Soluta maxime sunt consequuntur, incidunt,
                inventore porro quos suscipit fuga mollitia nulla repellendus.
                Ad recusandae repudiandae rem quod earum deleniti architecto ea
                magnam eaque adipisci tempore, optio illum sed exercitationem qu
              </p>
              <button
                className={`${SpaceGrotesk.className} cursor-pointer bg-[#55a7ff] text-white w-max px-4 py-2 rounded-sm`}
              >
                Get Started
              </button>
            </div>
            <div className="mb-20">
              <Image
                src="/medical.svg"
                alt="Medical"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className=" bg-[#f0f7ff] mb-20">
            <div className="bg-[#f0f6fc] py-20 px-4 text-center">
              <h2
                className={`${Baloo2.className} text-3xl font-semibold text-gray-800`}
              >
                What we’ve achieved so far....
              </h2>
              {/* <p className={` text-black text-2xl text-center`}>What we’ve achieved so far....</p> */}
              <p className="italic text-gray-500 mt-1 ">
                “Launched in 2025, currently testing with early users
              </p>
            </div>
            <div className="flex items-center justify-around pb-20">
            <div className="flex flex-col md:flex-row justify-center gap-12">
              {[
                "Selected in a startup accelerator",
                "MVP Launched",
                "Working prototype completed",
              ].map((text, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <CheckCircle className="text-green-500 w-10 h-10" />
                  <p className="text-md text-gray-800 max-w-xs ">{text}</p>
                  <div className="w-8 h-[2px] bg-blue-400 rounded-full" />
                </div>
              ))}
            </div>
            </div>
          </div>
          <Card/>
        </div>
      </div>
    </>
  );
}
