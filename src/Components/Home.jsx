import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Tutorial from './Tutorial';
import Events from './Events';
import Footer from './Footer';

function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Services/>
        <Events/>
        <Tutorial/>
        <Footer/>
    </div>
  )
}

export default Home;