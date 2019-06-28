import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Feature from './sections/Feature';
import CTA from './sections/CTA';

const index = () => {
  return (
    <main className="font-roboto antialiased">
      <Hero />
      <About />
      <Feature />
      <CTA />
    </main>
  );
};

export default index;