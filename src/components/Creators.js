import React, { useState } from 'react';

import Footer from './Home/sections/Footer';

import ctaBlob from './Home/sections/img/cta-blob.png';
import dots from './Home/sections/img/dots.png';

export default function Creators() {
  const [submitted, setSubmitted] = useState(false);
  const [fans, setFans] = useState(100);
  const [subs, setSubs] = useState(100);

  return (
    <div>
      {/* hero */}
      <section className="flex-1 text-center">
        <div className="max-w-3xl mx-auto py-20 md:py-24 sm:mt-6 md:mt-10 px-4 sm:px-6 md:px-10 lg:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">Turn your passion into money</h1>
          <p className="text-lg sm:text-xl max-w-lg text-grey-70 mt-6 mx-auto">
            GoSocial has everything you need as a creator to build community, interact with fans, and earn through your content and expertise.
          </p>
          <div>
            <script type="text/javascript">var submitted = false;</script>
            <iframe title="waitlist" name="hidden_iframe" id="hidden_iframe" className="hidden"
              onLoad={() => { if (submitted) { var form = document.getElementsByClassName('form'); form[0].classList.add('submitted') } }}></iframe>
            <form
              action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSe6iVKW_P-4Bkro0trkVF7OXMWtL_WTV7156B5EfM4-E9jQxA/formResponse"
              method="POST"
              className="form mt-6 sm:mt-8 lg:mt-10 email w-full flex flex-col items-center md:items-start"
              target="hidden_iframe" onSubmit={() => { setSubmitted(true) }}>
              <div className="flex flex-col sm:flex-row w-full">
                <input required name="entry.1984286502" type="text"
                  className="sm:w-1/2 md:w-2/5 sm:mr-2 input border px-6 py-5 border-grey-24 rounded focus:outline-none min-w-0"
                  placeholder="Your Phone*" />
                <input name="entry.1101817258" type="text"
                  className="mt-2 sm:mt-0 sm:w-1/2 md:w-3/5 sm:mr-2 input border px-6 py-5 border-grey-24 rounded focus:outline-none min-w-0"
                  placeholder="Instagram/Facebook/Blog/Website Link" />
                <button type="submit"
                  className="mt-2 sm:mt-0 font-bold w-full sm:w-auto input cursor-pointer text-center bg-primary px-6 py-5 text-white rounded font-title whitespace-no-wrap sm:self-center md:self-start border border-primary"
                >Get Early Access*</button>
              </div>

              <p className="text-primary text-xl max-w-md message text-center mx-auto">Thanks for joining the waitlist.
              We will get in contact soon.</p>
            </form>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-light-yellow">
        <div className="py-0 sm:py-8 md:py-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-10 lg:px-0">
          <div className="flex flex-row -ml-4 sm:-ml-6 md:-ml-8 flex-wrap">
            <div className="w-1/2 sm:w-1/3 pl-4 sm:pl-6 md:pl-8 mb-8 sm:mb-0">
              <div className="h-20 w-20 rounded-full flex justify-center items-center" style={{ 'backgroundColor': '#FFDCCD' }}>
                <img src={require('./Home/sections/img/community.svg')} alt="" />
              </div>
              <h3 className="text-xl font-bold mt-4">1. Create Your Community</h3>
              <p className="text-grey-70 mt-2">
                Invite your followers and fans to join your exclusive space, where they interact with you and the community members.
                </p>
            </div>
            <div className="w-1/2 sm:w-1/3 pl-4 sm:pl-6 md:pl-8 mb-8 sm:mb-0">
              <div className="h-20 w-20 rounded-full flex justify-center items-center" style={{ 'backgroundColor': '#FFDCCD' }}>
                <img src={require('./Home/sections/img/idea-buld.svg')} alt="" />
              </div>
              <h3 className="text-xl font-bold mt-4">2. Host Experiences</h3>
              <p className="text-grey-70 mt-2">
                Sell courses, workshops, 1:1 interactions, and mentorship to your community. Build close relations with your true fans.
                </p>
            </div>
            <div className="w-1/2 sm:w-1/3 pl-4 sm:pl-6 md:pl-8 mb-8 sm:mb-0">
              <div className="h-20 w-20 rounded-full flex justify-center items-center" style={{ 'backgroundColor': '#FFDCCD' }}>
                <img src={require('./Home/sections/img/money.svg')} alt="" />
              </div>
              <h3 className="text-xl font-bold mt-4">3. Get Paid</h3>
              <p className="text-grey-70 mt-2">
                Launch monthly or annual membership, redeem your earnings instantly, and take your passion to the next level.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`form mt-16 sm:mt-32 mb-24 sm:mb-32 lg:px-6 xl:px-0`}>
        <div
          style={{
            backgroundImage: `url(${ctaBlob})`
          }}
          className="px-4 max-w-7xl sm:px-10 bg-black text-white lg:mx-auto pt-16 sm:pt-24 pb-16 sm:pb-20 sm:py-32 lg:rounded-lg lg:shadow-2xl text-center relative bg-left-bottom bg-no-repeat">
          <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl">Learn How You Can Monetize Your Passion</h2>
          <p className="text-base md:text-lg mt-4 max-w-3xl mx-auto" style={{ opacity: 0.8 }}>GoSocial has everything you need as a creator to build community, interact with fans, and earn through your content and expertise.</p>
          <div className="mt-10 sm:mt-16">
            <a
              rel="nofollow"
              href="https://calendly.com/gosocial-creator-call"
              className="text-white shadow sm:shadow-none mt-4 md:mt-0 flex-grow bg-primary py-4 px-6 rounded cursor-pointer"
              target="__new">
              <svg width="24" height="24" className="inline mr-2">
                <path d="M.98 8.529l1.339 1.339c.69615289.6962694 1.64040875 1.0874393 2.625 1.0874393S6.87284711 10.5642694 7.569 9.868L9.538 7.9c.3481347-.34807644.5437196-.82020438.5437196-1.3125 0-.49229562-.1955849-.96442356-.5437196-1.3125L5.709 1.446c-.37867054-.38237143-.90445774-.58188732-1.4414688-.5469816C3.73052014.93392412 3.23498508 1.19982595 2.909 1.628-1.1 7.076 1.327 12.814 6.257 17.743c4.93 4.929 10.667 7.357 16.115 3.348.428174-.3259851.6940759-.8215201.7289816-1.3585312.0349057-.5370111-.1646102-1.0627983-.5469816-1.4414688l-3.828-3.829c-.3480764-.3481347-.8202044-.5437196-1.3125-.5437196-.4922956 0-.9644236.1955849-1.3125.5437196l-1.969 1.969c-.6962694.6961529-1.0874393 1.6404088-1.0874393 2.625 0 .9845912.3911699 1.9288471 1.0874393 2.625l1.354 1.354" stroke="#FFF" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Schedule a call</span>
            </a>
          </div>
          <img className="absolute cta-dots hidden sm:block" src={dots} alt="Dots Decos" />
        </div>
      </section>
      <section className="mb-24 sm:mb-32 px-4 lg:px-6 xl:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center">100 True Fans is all you need</h2>
          <div className="mt-10">
            <div className="max-w-lg mx-auto">
              <select autocomplete="off" value={fans} onChange={(e) => { setFans(e.target.value) }} className="w-full border border-grey-24 p-4 rounded text-grey-70 bg-transparent" name="cars" id="cars">
                <option value="10">10 Fans</option>
                <option value="100">100 Fans</option>
                <option value="500">500 Fans</option>
                <option value="1000">1000 Fans</option>
                <option value="2000">2000 Fans</option>
                <option value="5000">5000 Fans</option>
                <option value="10000">10000 Fans</option>
              </select>
            </div>

            <div className="max-w-lg mx-auto mt-4">
              <select autocomplete="off" value={subs} onChange={(e) => { setSubs(e.target.value) }} className="w-full border border-grey-24 p-4 rounded text-grey-70 bg-transparent" name="cars" id="cars">
                <option value="10">₹10/Fan</option>
                <option value="100">₹100/Fan</option>
                <option value="500">₹500/Fan</option>
                <option value="1000">₹1000/Fan</option>
                <option value="2000">₹2000/Fan</option>
                <option value="5000">₹5000/Fan</option>
                <option value="10000">₹10000/Fan</option>
              </select>
            </div>
            <div className="text-center mt-10">
              <p className="text-3xl sm:text-4xl md:text-5xl text-primary">₹{(fans * subs).toLocaleString('en-in', { useGrouping: true })}/Month</p>
            </div>
            <div className="mt-6 text-center">
              <a href="https://medium.com/hapramp/all-you-need-to-know-about-100-true-fans-3fd72a35154f" className="text-lg border-b border-primary text-grey-70" rel="noopener noreferrer" target="_blank">Learn more about 100 true fans</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section style={{ backgroundColor: '#F5F5F5' }} className="flex-1">
          <div className="max-w-3xl mx-auto py-20 md:py-24 sm:mt-6 md:mt-10 px-4 sm:px-6 md:px-10 lg:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Artists, photographers, fitness instructors, musicians, educators, and almost anyone can start their community on GoSocial.</h1>
            <div className="mt-10 flex flex-row text-grey-87">
              <div className="mr-16">
                <div className="text-4xl md:text-5xl leading-none">500K+</div>
                <p className="text-xl md:text-2xl">Users</p>
              </div>

              <div>
                <div className="text-4xl md:text-5xl leading-none">200+</div>
                <p className="text-xl md:text-2xl">Communities</p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-6 md:mt-8">
              <a rel="nofollow noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.go.social.prod&referrer=utm_source%3Dgetgosocial.app%26utm_medium%3Dbutton%26utm_term%3Dget%252Bit%252Bon%252Bplaystore%26utm_campaign%3Dlanding_page">
                <img className="h-12 sm:h-16 mr-2" src={require('./Home/sections/img/playstore.png')} alt="" />
              </a>
              <a rel="nofollow noopener noreferrer" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScygrmIizhlszWnHMpmzJWHoznGO6Rk-v7g0Un6jZRGhkMihA/viewform?usp=sf_link">
                <img className="h-12 sm:h-16" src={require('./Home/sections/img/appstore.svg')} alt="" />
              </a>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  )
}
