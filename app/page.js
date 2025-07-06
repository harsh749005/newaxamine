import { Baloo_2 } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import { Inter } from "next/font/google";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/Footer/footer";
import Hamburger from "./components/Hamburger/Hamburger";
import BannerSection from "./components/Sections/BannerSection/BannerSection";
import InfiniteScrollSection from "./components/Sections/InfiniteScrollSection/InfiniteScrollSection";
import MiddelSection from "./components/Sections/MiddleSection/MiddleSection";

const Baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: "500",
});
const velocity = 100;

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "500",
});

const Inter_ = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const items = [
  // { content: "Understands medical queries like 'What is cancer?" },
  // { content: <p>Paragraph Item 2</p> },
  // { content: "Accepts and analyzes patient reports" },
  {
    content: (
      <p className="text-[#EDEDF2]">
        Understands medical queries like What is cancer?
      </p>
    ),
  },
  // { content: "Uploads and interprets X-ray & MRI images" },
  {
    content: (
      <p className="text-[#EDEDF2]">Accepts and analyzes patient reports</p>
    ),
  },
  // { content: "Summarizes complex medical data" },
  {
    content: (
      <p className="text-[#EDEDF2]">
        Uploads and interprets X-ray & MRI images
      </p>
    ),
  },
  // { content: "rovides doctor-friendly diagnostics" },
  {
    content: <p className="text-[#EDEDF2]">Summarizes complex medical data</p>,
  },
  // { content: "Built for real-time patient support" },
  {
    content: (
      <p className="text-[#EDEDF2]">Provides doctor-friendly diagnostics</p>
    ),
  },
  // { content: "Text Item 13" },
  {
    content: (
      <p className="text-[#EDEDF2]">Built for real-time patient support</p>
    ),
  },
];

export default function Main() {
  return (
    <>
      {/* <Home/> */}
      {/* <div className="bg-pink-300 h-52 w-full"></div> */}
      <div className="bg-black h-max w-full ">
        <Navbar />
        <Hamburger/>
        <BannerSection/>
        
        <InfiniteScrollSection/>
     

        <MiddelSection/>
        <div className=" mt-40 ">
          <div className="w-9/12 m-[auto]  ">
            <div className="flex flex-col gap-15 w-full pl-10  ">
              <h1
                className={`${SpaceGrotesk.className} text-5xl md:text-6xl text-gray-400`}
              >
                Why Axamine ?
              </h1>

              <div className="flex flex-col md:flex-row md:items-center  gap-10 flex-wrap w-full">
                {Benefits.map((data, inedx) => (
                  <div
                    key={inedx}
                    className=" w-[300px] h-[400px] border-2 border-[#313131b1] rounded-md flex items-center flex-col gap-10 hover:border-[#313131f7] transition-all shadow-lg cursor-pointer"
                  >
                    <div className="w-20 h-20 rotate-45  flex items-center justify-center bg-[#5227ff] rounded">
                      <p
                        className={`${SpaceGrotesk.className} rotate-[-45deg] text-2xl font-bold`}
                      >
                        {data.number}
                      </p>
                    </div>
                    <h1 className="font-medium text-2xl">{data.title}</h1>
                    <p
                      className={`${Inter_.className} text-center text-[#bdbdbdae] p-2 text-md`}
                    >
                      {data.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-black mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
}
