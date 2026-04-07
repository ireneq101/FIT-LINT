import React from "react";
import bar from '../assets/bar-chart.png';
import foot from '../assets/foot.png';
import fire from '../assets/fire.png';
import time from '../assets/time.png';
// import { useState } from "react";

const Activities = () => {
  // const [chartImage, setChartImage] = useState(null);

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const url = URL.createObjectURL(file);
  //     setChartImage(url);
  //   }
  // };

  return (
    <section id="activity" className="min-h-screen flex flex-col items-center py-20 text-white font-sans">

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Your Activities
        </h2>
      </div>

      {/* Cards Row */}
      <div className="flex gap-17 flex-wrap justify-center">

        {/* Left Card - Walking */}
        <div className="bg-[#111d3e] rounded-2xl p-6 w-80">

          {/* Top Row */}
          <div className="flex items-center justify-between mb-6">
            <div>
            <h2 className="text-xl md:text-2xl font-bold leading-relaxed mb-4">5, 000 steps</h2>
              <p className="text-sm md:font-medium text-gray-200">Distance</p>
            </div>
            <img src={foot} alt="Foot" className="rounded-full w-12 h-12 flex items-center justify-center text-2xl" />
          </div>

          {/* Chart Area */}
          {/* {chartImage ? (
            <img
              src={chartImage}
              alt="Chart"
              className="w-full h-28 object-contain rounded-md"
            />
          ) : (
            <label className="flex flex-col items-center justify-center h-28 border-2 border-dashed border-gray-500 rounded-md cursor-pointer hover:border-gray-300 transition-colors">
              <span className="text-3xl mb-1">📷</span>
              <span className="text-gray-400 text-xs">Upload chart image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          )} */}

          {/* Replace image button */}
          {/* {chartImage && (
            <label className="mt-3 flex justify-center cursor-pointer">
              <span className="text-xs text-gray-400 hover:text-white transition-colors">🔄 Replace image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          )} */}

          <img
              src={bar}
              alt="Chart"
              className="w-full h-3/4 object-contain rounded-md"
            />

        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-12 w-80">

          {/* Calories Card */}
          <div className="bg-[#111d3e] rounded-2xl p-6 md:w-60 w-full">
            <div className="flex justify-end mb-4">
              <img src={fire} alt="Fire" className="rounded-full w-12 h-12 flex items-center justify-center text-2xl" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold leading-relaxed mb-4">120 kcal</h2>
            <p className="text-sm md:font-medium text-gray-200">Calories</p>
          </div>

          {/* Active Minutes Card */}
          <div className="bg-[#111d3e] rounded-2xl p-6 md:w-60 w-full">
            <div className="flex justify-end mb-4">
              <img src={time} alt="Time" className="rounded-full w-12 h-12 flex items-center justify-center text-2xl" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold leading-relaxed mb-4">45 minutes</h2>
            <p className="text-sm md:font-medium text-gray-200">Active minutes</p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Activities;