import React from 'react';
import trainer from '../assets/trainer.jpg';
import trainee from '../assets/trainee.jpg';
import pushup from '../assets/girl-pushup.png';
import machine from '../assets/gym-machine.jpg';
import Button from './Button';

const About = () => {
  return (
    <section id='about' className="text-white py-20 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-20">
          About Fin-Lint
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-white">
              Lorem Ipsum Dolor Sit Amet <br />
              Consectetur, Adipisicing Elit. <br />
              Hic Fuga Cumque Distinctio Sunt. <br />
              Minima Iste Tenetur Quas Totam. <br />
              Mollitia, Accusantium? Lorem Ipsum <br />
              Dolor Sit Amet Consectetur, <br />
              Adipisicing Elit.
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Deleniti officia, quam vitae animi sit aperiam nam quaerat aliquid 
              perspiciatis. */}
            </p>

            <Button text="Join Fit-Lint" onClick={() => console.log("joined")} />
            
          </div>

          {/* Right Side: Asymmetrical Image Grid */}
          <div className="relative h-125 w-full max-w-lg mx-auto lg:mx-0">
            {/* Left Image */}
            <div className="absolute left-0 top-1/4 w-1/2 aspect-square rounded-[3rem] overflow-hidden z-10">
              <img src={trainer} alt="Trainer" className="w-full h-full object-cover" />
            </div>

            {/* Top Image */}
            <div className="absolute left-1/3 top-0 w-1/2 h-2/4 aspect-square rounded-[3.5rem] overflow-hidden z-20">
              <img src={machine} alt="Gym" className="w-full h-full object-cover" />
            </div>

            {/* Bottom Image */}
            <div className="absolute left-1/3 bottom-0 w-1/2 h-2/4 aspect-square rounded-[3.5rem] overflow-hidden z-20">
              <img src={pushup} alt="Workout" className="w-full h-full object-cover" />
            </div>

            {/* Right Image */}
            <div className="absolute right-0 top-1/4 w-1/2 aspect-square rounded-[3rem] overflow-hidden z-10">
              <img src={trainee} alt="Battle Ropes" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;