import React from 'react';
import Footer from './sections/Footer';

const Index = () => {

  return (
    <div className="antialiased home-page flex flex-col min-h-screen">
      <section className="flex-1">
        <div className="max-w-3xl mx-auto py-20 md:py-24 sm:mt-6 md:mt-10 px-4 sm:px-6 md:px-10 lg:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Create And Learn With Your community</h1>
          <p className="text-xl md:text-2xl max-w-lg text-grey-70 mt-6">
            Join communities of your interest, share your work, and learn something new every day.
          </p>
          <div className="flex flex-row items-center mt-6 md:mt-8">
            <a rel="nofollow noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.go.social.prod&referrer=utm_source%3Dgetgosocial.app%26utm_medium%3Dbutton%26utm_term%3Dget%252Bit%252Bon%252Bplaystore%26utm_campaign%3Dlanding_page">
              <img className="h-12 sm:h-16 mr-2" src={require('./sections/img/playstore.png')} alt=""/>
            </a>
            <a rel="nofollow noopener noreferrer" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScygrmIizhlszWnHMpmzJWHoznGO6Rk-v7g0Un6jZRGhkMihA/viewform?usp=sf_link">
              <img className="h-12 sm:h-16" src={require('./sections/img/appstore.svg')} alt="" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;