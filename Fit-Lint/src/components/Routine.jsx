import React from 'react';
// import walking from '../assets/walking.png';
// import running from '../assets/ruuner.png';
// import bike from '../assets/biker.png';
// import swimming from '../assets/swimmer.png';
// import food from '../assets/food.png';

import { Routines } from '../constants';
import Button from './Button';

const RoutineCard = ({ title, description, value, image }) => (
  <div className="relative border border-green-500 rounded-xl p-5 pt-12 pb-10 md:w-75 w-80">
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
      <img src={image} alt="icon" className='object-contain  rounded-full w-12 h-12' />
    </div>

    <h2 className="text-center text-xl md:text-2xl font-bold leading-relaxed mb-6">{title}</h2>

    <div className="flex items-center justify-between gap-2">
      <span className="text-gray-200 text-sm md:font-medium">{description}</span>
      <span className="bg-green-500 rounded-full px-3 py-1 text-sm whitespace-nowrap">{value}</span>
    </div>
  </div>
);

const Routine = () => {
  return (
    <section className="min-h-screen flex flex-col items-center py-20 text-white font-sans">

      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Boost Your Routine With Fit-Lint <br />
          Enjoy Personalized Meals Tailored For You
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-15 mb-17">
        {Routines.filter(routine => routine.visible).map((routine, index) => (
          <RoutineCard
            key={routine.id}
            title={routine.title}
            description={routine.description}
            value={routine.value}
            image={routine.image}
            index={index}
          />
        ))}
      </div>


      {/* Bottom Row */}
      <div className="flex flex-wrap justify-center gap-15 mb-12">

        {/* Swimming */}
        <div className="relative border border-green-500 rounded-xl p-5 pt-10 pb-10 w-80">
          <img src={Routines[3].image} alt="Swimming" className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full w-12 h-12 flex items-center justify-center text-2xl" />
          <h2 className="text-center text-xl md:text-2xl font-bold leading-relaxed mb-6">{Routines[3].title}</h2>
          <div className="flex items-center justify-between gap-2">
            <span className="text-gray-200 text-sm md:font-medium">{Routines[3].description}</span>
            <span className="bg-green-500 rounded-full px-3 py-1 text-sm whitespace-nowrap">{Routines[3].value}</span>
          </div>
        </div>

        {/* Food */}
        <div className="relative border border-green-500 rounded-xl p-5 pt-10 pb-10 w-80">
          <img src={Routines[4].image} alt="Food" className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full w-12 h-12 flex items-center justify-center text-2xl" />
          <h2 className="text-center text-xl md:text-2xl font-bold leading-relaxed mb-6">{Routines[4].title}</h2>
          <div className="flex items-center justify-between gap-2">
            <span className="text-gray-200 text-sm md:font-medium">{Routines[4].description}</span>
            <span className="bg-green-500 rounded-full px-3 py-1 text-sm whitespace-nowrap">{Routines[4].value}</span>
          </div>
        </div>

      </div>

      {/* Button */}
      <Button text="Create your routine" onClick={() => console.log("joined")} />

    </section>
  );
}

export default Routine;