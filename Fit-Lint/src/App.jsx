import React from 'react';
import {Navbar, Hero, Journey, About, Routine, Activities, Team, Footer } from './components'
import style from './styles';

function App() {
  <div className="bg-blue-950 w-full overflow-hidden">
    <div className={`${style.flexCenter} ${style.paddingX}`}>
      <div className={`${style.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <Hero />,
    <Journey />,
    <About />,
    <Routine />,
    <Activities />,
    <Team />,
    <Footer />
  </div>;
}

export default App;
