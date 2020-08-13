import React from 'react';

import Header from './header';
import Carousel from './carousel';
import ListSmartPhone from './list-smart-phone';
import ListLaptop from './list-laptop';
import Promotion from './promotion';
import Footer from '../Baitap2/footer';


export default function Baitap3(){
  return (
    <body className = "bg-dark">
      <Header />
      <Carousel />
      <div>
        <ListSmartPhone />
      </div>
      <div>
        <ListLaptop />
      </div>
      <Promotion />
    </body>
  )
}