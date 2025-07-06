"use client"
import { Space_Grotesk } from "next/font/google";
import { Inter } from "next/font/google";
import GlareHover from "../../reactBits/GlareHover/GlareHover";
const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

const Inter_ = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const MiddelSection = ()=>{
    return(

        <div className="mt-32 flex flex-col items-center justify-center gap-16  px-4">
          <div className="flex flex-col gap-5 w-full max-w-3xl text-center">
            <h1
              className={`${SpaceGrotesk.className} text-5xl md:text-6xl text-white`}
            >
              Try our Model
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Ask medical questions or upload reports—see how our AI delivers
              real answers. Explore Axamine’s health intelligence in action.
            </p>
          </div>

          <div className=" flex flex-wrap justify-center gap-6 w-full max-w-[1000px]">
            {[
              'Understands medical queries like "What is cancer?"',
              "Accepts and analyzes patient reports",
              "Uploads and interprets X-ray & MRI images",
              "Summarizes complex medical data",
              "Provides doctor-friendly diagnostics",
            ].map((text, idx) => (
              <div
                key={idx}
                className={`${SpaceGrotesk.className} modelBox  rounded-md font-bold text-white p-[1.5px] text-center hover:border-gray-700 transition-all shadow-md cursor-pointer`}
              >
                <p className="p-5 rounded-md  bg-black">{text}</p>
              </div>
            ))}
          </div>
          <div style={{ height: "50px", position: "relative" }}>
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
                Try Now
              </h2>
            </GlareHover>
          </div>
        </div>
    );
}

export default MiddelSection