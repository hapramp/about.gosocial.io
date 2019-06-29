import React from 'react';

import rewardImg from './img/reward-img.png';
import suppdImg from './img/supp-img.png';

const Feature = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto mt-40 lg:px-20 xl:px-0">
        {/* Reward Section */}
        <div className="flex justify-center items-center">
          <div className="w-1/2">
           <img className="lg:w-4/5 xl:w-auto"  src={rewardImg} alt=""/>
          </div>

          <div className="w-1/2">
            <h2 className="font-black text-5xl italic">Rewards beyond likes</h2>
            <p className="text-3xl leading-tight mt-4">
              Earn on every like, share, post, and more. Redeem it on 1Ramp’s unique store.
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex justify-center items-center mt-32">
          <div className="w-1/2">
            <h2 className="font-black text-5xl italic">Support new creators</h2>
            <p className="text-3xl leading-tight mt-4">
            Upgrade to orange account and reward your favorite creators with every like.
            </p>
          </div>
          <div className="w-1/2 lg:text-right">
           <img className="lg:w-4/5 xl:w-auto inline-block" src={suppdImg} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;