"use client"
import { Baloo_2 } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import Aurora from "../../reactBits/Aurora/Aurora";
import GlareHover from "../../reactBits/GlareHover/GlareHover";


const Baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: "500",
});

const velocity = 100;

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "500",
});


const BannerSection = ()=> {
    return(

        <div className="flex items-center justify-center h-screen bg-black overflow-hidden w-screen">
          <Aurora
            colorStops={["#3A29FF", "#7cff67", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
          <div className="absolute flex flex-col gap-10 items-center w-max">
            <h1
              className={`${Baloo2.className}  w-72 text-2xl lg:text-6xl lg:w-[1200px] text-center `}
            >
              Axamine — Revolutionize diagnostics with AI-powered precision and
              speed
            </h1>
            <p className="text-gray-400 w-64 text-sm lg:w-[650px] text-center">
              Access AI-driven diagnostics that reduce errors, accelerate
              decision-making, and improve patient outcomes. Axamine empowers
              healthcare teams to deliver faster, more accurate care with
              confidence.
            </p>
            <div style={{ height: "50px", position: "relative" }} >
              <GlareHover
              className="w-32 lg:w-60"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <h2
                  className={`${SpaceGrotesk.className} lg:text-xl text-[16px] px-4 py-2`}
                  style={{
                    // fontSize: "20px",
                    fontWeight: "900",
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  Get Started
                </h2>
              </GlareHover>
            </div>
          </div>
        </div>
    );


}

export default BannerSection;