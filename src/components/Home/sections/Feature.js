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
            <h2 className="font-black text-4xl lg:text-5xl italic">Rewards beyond likes</h2>
            <p className="sm:text-xl text-2xl lg:text-3xl leading-tight mt-4">
              Earn on every like, share, post, and more. Redeem it on 1Ramp’s unique store.
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-24 sm:mt-32">
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="font-black text-4xl lg:text-5xl italic">Support new creators</h2>
            <p className="sm:text-xl text-2xl lg:text-3xl leading-tight mt-4">
            Upgrade to orange account and reward your favorite creators with every like.
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