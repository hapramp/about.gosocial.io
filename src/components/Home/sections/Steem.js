import React from 'react';

import steemImg from './img/steem-img.png';
import steemBlob from './img/steem-blob.png';

const Steem = () => {
  return (
    <section
    style={{backgroundImage:`url(${steemBlob})`}}
     className="mt-40 bg-secondary py-40 text-white bg-left-top bg-no-repeat">
      <div className="max-w-5xl flex mx-auto">
        <div className="w-1/2 flex flex-col justify-between pr-4">
          <div className="text-xl">
            <h2 className="text-4xl black italic">1Ramp is also available on Steem Blockchain</h2>
            <p className="mt-8">
              Creators have earned more than $59 Millions on Steem platforms.
            </p>
            <p className="mt-4">
              With the new 1Ramp, we are enabling rewards beyond cryptocurrency.
            </p>
          </div>
          <div className="text-lg mt-6">
            <div>Got a Steem account?
            </div>
            <div>Try 1Ramp-Steem on
              <a className="text-primary border-b-2 border-primary mx-2" href="https://play.google.com/store/apps/details?id=com.hapramp&hl=en_IN" target="__new">Play Store</a>
              and
              <a className="text-primary border-b-2 border-primary mx-2" href="https://alpha.1ramp.io/feed/explore/" target="__new">Web.</a>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src={steemImg} alt="Steem App"/>
        </div>
      </div>
    </section>
  );
};

export default Steem;