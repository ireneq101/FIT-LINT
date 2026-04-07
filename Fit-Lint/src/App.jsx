import React from 'react';
import {Navbar, Hero, Journey, About, Routine, Activities, Team, Footer } from './components'
import style from './styles';

function App() {
  return (
    <div className={`text-white w-full overflow-hidden ${style.paddingX}`}>
      <div className={`${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Hero />
      <Journey />
      <About />
      <Routine />
      <Activities />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
