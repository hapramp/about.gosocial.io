import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';

const index = () => {
  return (
    <main className="font-roboto antialiased">
      <Hero />
      <About />
    </main>
  );
};

export default index;