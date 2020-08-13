// component stateless - function
import React from 'react';

import Header from './header';
import Carousel from './carousel';
import WhatWeDo from './what-we-do';
import Contact from './contact';
import ListCard from './listcard';
// import Itemcard from './itemcard';
import Footer from './footer';



export default function Baitap2(){
  return (
  <div>
    <Header />
    <Carousel />
    <div className="container">
    <div className="row">
    <WhatWeDo />
    <Contact />
    </div>
    </div>
    <div className="container">
    <ListCard />
    </div>
    <Footer />
  </div>
  );
}