import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Feature from './sections/Feature';
import CTA from './sections/CTA';
import Asteria from './sections/Asteria';
import Steem from './sections/Steem';

const index = () => {
  return (
    <main className="font-roboto antialiased">
      <Hero />
      <About />
      <Feature />
      <CTA />
      <Asteria />
      <Steem />
    </main>
  );
};

export default index;