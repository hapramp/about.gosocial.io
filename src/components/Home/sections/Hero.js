import React from 'react';
import heroImg from './img/hero-image.png'

const Hero = () => {
  return (
   <section className>
      <div className="max-w-5xl mx-auto sm:h-screen flex flex-col items-center relative justify-center px-6 sm:px-10 xl:px-0 mb-32" >
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 mt-56 sm:mt-20">
            <h1 className="font-black text-5xl sm:text-6xl md:text-7xl italic leading-tight">Creators Deserve To Earn</h1>
            <p className="text-xl mt-4">There is more to the Internet than likes. On 1Ramp, your likes turn into money.</p>
          </div>
          <div className="w-56 sm:w-1/2 absolute top-0 right-0">
            <img src={heroImg} alt="Hero"/>
          </div>
        </div>
        <div className="hidden sm:flex self-start flex-col items-center mt-16 ml-4 sm:ml-20">
          <svg  width="3" height="83" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.314 82V1" stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd" strokeDasharray="4,4" strokeLinecap="square"/>
          </svg>
          <div className="bg-primary w-10 h-10 rounded-full flex justify-center items-center mt-4">
            <svg width="18" height="11" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.707.293L.293 1.707 9 10.414l8.707-8.707L16.293.293 9 7.586z" fill="#FFF" fillRule="nonzero"/>
            </svg>
          </div>
        </div>
      </div>
   </section>
  );
};

export default Hero;