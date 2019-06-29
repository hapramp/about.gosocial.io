import React from 'react';

import ctaBlob from './img/cta-blob.png';
import dots from './img/dots.png';


const CTA = () => {
  return (
    <section className="mt-32 lg:px-6 xl:px-0">
      <div
        style={{backgroundImage:`url(${ctaBlob})`}}
        className="md:px-12 lg:container bg-black text-white lg:mx-auto py-32 lg:rounded-lg lg:shadow-2xl text-center relative bg-left-bottom bg-no-repeat">
        <h2 className="font-black text-5xl italic">Join The Movement</h2>
        <p className="text-2xl mt-4">Request an invite and we’ll notify you when it’s ready.</p>
        <form className="max-w-4xl flex mx-auto mt-8 text-lg">
          <input className="bg-transparent border border-white py-4 px-6 rounded mr-4 focus:outline-none" type="email" placeholder="Your Email"/>
          <input className="w-1/2 bg-transparent border border-white py-4 px-6 rounded mr-4 focus:outline-none" type="text" placeholder="Your profile (Insta, medium, wordpress..."/>
          <input className="flex-grow bg-primary py-4 px-6 rounded" type="submit" value="Request Invite"/>
        </form>
        {/* <img className="absolute left-0 bottom-0" src={ctaBlob} alt=""/> */}
        <img className="absolute cta-dots" src={dots} alt="Dots Decos"/>
      </div>
    </section>
  );
};

export default CTA;