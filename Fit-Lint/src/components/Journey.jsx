import React from 'react';
import { Check } from 'lucide-react';
import dumbell from '../assets/Dumbell.png';
// import { WithFitLint } from '../constants';

const Journey = () => {
  const steps = [
    "Achieve consistent progress with small daily actions.",
    "Turn big ambitions into manageable tasks.",
    "Set realistic goals you can stick with.",
    "Know what works best for you."
  ];

  return (
    <section className="text-white py-20 font-sans">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Don't Wait, Start Your <br />
          Fitness Journey With Fit-Lint.
        </h2>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image with rounded corners */}
        <div className="rounded-2xl overflow-hidden shadow-2xl h-6/7">
          <img 
            src={dumbell}
            alt="Person lifting dumbbells" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Steps Card */}
        <div className="p-10 md:p-12 rounded-[2.5rem] shadow-lg border border-white/5 bg-linear-to-br  from-[#00001a] to-[#000a3d]">
          <h3 className="text-2xl font-bold mb-8">With Fit-Lint:</h3>
          
          <ul className="space-y-8">
            {steps.map((text, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="text-white w-6 h-6 stroke-[3px]" />
                </div>
                <p className="text-lg md:text-xl text-gray-200 leading-snug">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Journey;