import React, {useEffect} from 'react';
import Hero from './sections/Hero';
import ContributorsList from './sections/ContributorsList'
import Feature from './sections/Feature';
import CTA from './sections/CTA';
import Footer from '../Home/sections/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="antialiased">
      <Hero/> 
      <ContributorsList/>
      <Feature/>
      <CTA/>
      <Footer/>
    </div>
  );
};

export default Index;