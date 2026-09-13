import React from "react";

import Heroimg from "../src/assets/banner-stack.png";
const Hero = () => {
  return (
    <div className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Build Your Ideal <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-pink-600">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-500 max-w-2xl">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="mt-8 flex flex-row gap-4 w-full sm:w-auto">
              <button className="bg-linear-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md">
                Explore Technologies
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-all shadow-sm">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img
              src={Heroimg}
              alt="Development Stack 3D Illustration"
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
