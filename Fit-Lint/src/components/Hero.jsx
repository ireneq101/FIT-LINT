import React from 'react';
import girl1 from '../assets/girl1-workout.png';
import guy1 from '../assets/guy1-workout.png';
import guy22 from '../assets/guy22-workout.png';
import Button from './Button';

const Hero = () => {
  return (
    <section id="home" className="text-white min-h-screen flex flex-col items-center py-20 text-center">
      {/* Header Text */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
        Your Daily Fitness Tracker
      </h1>
      
      <p className="max-w-2xl text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
        Fit-Lint Helps You Achieve Your Goal. Your Personal Coach For <br className="hidden md:block" />
        Your Daily Workout.
      </p>

      {/* CTA Button */}
      {/* <button className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-3 rounded-md font-medium transition-all mb-20">
        Book a session
      </button> */}

      <Button text="Book a Session" onClick={() => console.log("booked")} />

      {/* Image Container */}
      <div className="relative flex items-center justify-center w-full max-w-5xl mt-10">
        
        {/* Left Image */}
        <div className="relative z-10 -mr-16 transform -rotate-16 overflow-hidden rounded-[60px] w-64 h-96 border-4 border-[#00001a]">
          <img 
            src={guy22} 
            alt="Workout" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Image */}
        <div className="relative z-30 overflow-hidden -translate-y-16 rounded-[80px] w-72 h-110.5  shadow-2xl">
          <img 
            src={girl1} 
            alt="Workout Central" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="relative z-10 -ml-16 transform rotate-16 overflow-hidden rounded-[60px] w-64 h-96 border-4 border-[#00001a]">
          <img 
            src={guy1} 
            alt="Workout" 
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;