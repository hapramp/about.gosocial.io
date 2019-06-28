import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Feature from './sections/Feature';

const index = () => {
  return (
    <main className="font-roboto antialiased">
      <Hero />
      <About />
      <Feature />
    </main>
  );
};

export default index;