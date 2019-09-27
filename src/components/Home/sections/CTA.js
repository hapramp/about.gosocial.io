import React, {useState} from 'react';

import ctaBlob from './img/cta-blob.png';
import dots from './img/dots.png';

const CTA = () => {
  const [submitted,
    setSubmitted] = useState(' ');
  const [email,
    setEmail] = useState(' ');
  return (
    <section className={`form mt-24 sm:mt-32 mb-24 sm:mb-32 lg:px-6 xl:px-0`}>
      <div
        style={{
        backgroundImage: `url(${ctaBlob})`
      }}
        className="px-6 max-w-7xl sm:px-10 bg-black text-white lg:mx-auto pt-32 pb-20 sm:py-32 lg:rounded-lg lg:shadow-2xl text-center relative bg-left-bottom bg-no-repeat">
        <h2 className="font-black text-4xl md:text-5xl italic">Get Going, Keep Going!</h2>
        <p className="text-xl md:text-2xl mt-4">We believe the most important thing for creators is to never stop creating.</p>
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSciUs-UEM1VcfqhjtUJSfpLCQdIku_bEj3lXGXIEfGqGQ65gg/formResponse"
          className={`${submitted} max-w-4xl flex flex-col md:flex-row mx-auto mt-16 text-lg flex-wrap md:flex-no-wrap`}
          target="hidden_iframe">
          <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required
            name="entry.747163953"
            className="text-left bg-transparent border border-white py-4 px-6 rounded md:mr-4 focus:outline-none"
            type="email"
            placeholder="Your Email"/>
          <input
            required
            name="entry.1698641747"
            className="text-left mt-4 md:mt-0 md:w-1/2 bg-transparent border border-white py-4 px-6 rounded md:mr-4 focus:outline-none"
            type="text"
            placeholder="Your profile (Insta, medium, wordpress..."/>
          <input
            onClick={() => {
              if(email!==' '){setSubmitted('submitted')}
          }}
            className="shadow sm:shadow-none mt-4 md:mt-0 flex-grow bg-primary py-4 px-6 rounded cursor-pointer"
            type="submit"
            value="Request Invite"/>
        </form>

        <iframe
          title="hidden_iframe"
          name="hidden_iframe"
          id="hidden_iframe"
          className="hidden"></iframe>

        <p
          className={`${submitted} form-feedback text-xl px-4 sm:px-0 sm:text-2xl mt-8 sm:mt-16 max-w-3xl mx-auto text-primary`}>Your
          email is going into our early invite list. The invitation will be on its way
          before new year. Thank you!</p>

        <img className="absolute cta-dots" src={dots} alt="Dots Decos"/>
      </div>
    </section>
  );
};

export default CTA;