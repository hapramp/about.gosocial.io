import React, {useRef, useEffect} from 'react';
import Hero from './sections/Hero';
import Feature from './sections/Feature';
import Feature2 from './sections/Feature2';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

const scrollToRef = (ref) => window.scrollTo({left:0, top:ref.current.offsetTop-80, behavior: 'smooth'})

const Index = () => {
  const featureRef = useRef(null);

  const executeScroll = () => scrollToRef(featureRef);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="antialiased home-page">
      <div className="bg-black">
        <Hero executeScroll={executeScroll}/>
        <Feature featureRef={featureRef}/>
      </div>
      <Feature2/>
      <CTA/>
      <Footer/>
    </div>
  );
};

export default Index;