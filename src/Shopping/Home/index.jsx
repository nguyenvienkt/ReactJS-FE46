import React, { Component } from 'react';
import Products from '../Products';
import Detail from '../Detail';
import Header from '../Header';


export default class Home extends Component {
  render() {
    return (
      <>
       <Header />
       <Products />
       <Detail /> 
      </>
    )
  }
}
