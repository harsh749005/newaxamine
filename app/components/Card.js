import { Space_Grotesk } from "next/font/google";
import CardSwapConatainer from "./Card_swap";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const Card = () => {
  return (
    <>
      <div className="mb-20">
        <h3
          className={`${SpaceGrotesk.className} text-gray-800 text-4xl pt-5 pb-10`}
        >
          Why Axamine Works
        </h3>
        <div className="pt-5 flex justify-between items-center">
          <div className="border-2 border-gray-200  h-80 w-64 rounded-lg hover:border-gray-300 cursor-pointer flex items-center justify-start flex-col gap-5">
            <p className="text-6xl text-blue-600">1</p>
            <p className="text-2xl text-gray-700">Accuracy</p>
            <p className="text-sm text-center text-blue-600">AI systems can analyze vast amounts of data quickly and accurately, leading to more precise and reliable diagnoses. They can detect patterns and anomalies that may not be obvious to human clinicians</p>
          </div>
          <div className="flex ">
            <CardSwapConatainer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
