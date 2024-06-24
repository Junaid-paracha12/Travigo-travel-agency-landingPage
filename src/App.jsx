import React from 'react';
import { Navbar, Hero, Footer, Memory, Explore, Advertise, Pricings, Banner, Newslatter } from './components';
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI, newslatter } from './data/travigo';

const App = () => {
  return (
   <>
      <Navbar navlinks={navlinks} />
        <Hero hero={hero} />
        <Memory memory={memory} />
        <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
        <Advertise brands={brands} />
        <Pricings pricingapi={pricingapi} />
        <Banner bannerAPI={bannerAPI} />
        <Newslatter newslatter={newslatter} />
      <Footer footerAPI={footerAPI} />
   </>
  );
};

export default App;