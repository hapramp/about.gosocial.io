import React from 'react';

import rewardImg from './img/reward-img.png';
import suppdImg from './img/supp-img.png';

const Feature = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto mt-24 sm:mt-40 px-6 sm:px-10 lg:px-20 xl:px-0">
        {/* Reward Section */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2">
           <img className="md:w-9/12 lg:w-4/5 xl:w-auto"  src={rewardImg} alt=""/>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="font-black text-4xl lg:text-4xl italic">New Challenges,Every Week.</h2>
            <p className="sm:text-xl text-2xl lg:text-2xl leading-tight mt-4">
            Take your cue from the challenges created by experts and never run out of ideas and inspiration to create.
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-24 sm:mt-32">
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="font-black text-4xl lg:text-4xl italic">Rewards That Keep You Going, Every Week.</h2>
            <p className="sm:text-xl text-xl lg:text-2xl leading-tight mt-4">
              Take your cue from the challenges created by experts and never run out of ideas and inspiration to create.
            </p>
          </div>
          <div className="md:w-1/2 text-right">
           <img className="md:w-9/12 lg:w-4/5 xl:w-auto md:inline-block" src={suppdImg} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;