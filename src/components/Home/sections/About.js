import React from 'react';
import blobImg from './img/about-blob.png';
import dots from './img/dots.png';

const About = () => {
  return (
    <section className="bg-black py-32 text-white relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-black text-5xl italic">1Ramp is For Creators</h2>
        <div className="max-w-9/2xl text-3xl leading-tight">
          <p className="mt-16">Writers, photographers, visual artists, poets… We can list all of them, but
            you got the point, right?
          </p>
          <p className="mt-6">Creators put more than <span className="text-primary">$100 Billion</span> worth of content on the Internet every
            year. And we know a way to give this value back to them.</p>
        </div>
        <img className="absolute about-dots" src={dots} alt="Dots Decos"/>
        <img className="absolute right-0 bottom-0" src={blobImg} alt="About Blob"/>
      </div>
    </section>
  );
};

export default About;