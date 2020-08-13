/** stateful component là 1 class */
import React, {Component} from 'react';
import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import Footer from './footer';

export default class Baitap1 extends Component {
  render(){
    // return (
    //   /* return html trong đây là jsx - viết html cùng javascript */
    //   <div>Baitap1 component</div>
    // )

    return (
    //Khi mà gọi cùng lúc nhiều component ngang cấp thì phải bọc lại trong thẻ lớn
    <div>
    <Header />
    <div className="main">

    <Content />
    <Sidebar />

    </div>

    <Footer />
    </div>
    );
  }
}