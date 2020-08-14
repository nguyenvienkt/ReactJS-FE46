import React, { Component } from 'react';

class DemoDatabinding extends Component{
  title = "Demo data";
  name = "hieu";

  checkHandsome (isHandsome){
    if(isHandsome){
      return 'Đẹp trai';
    }
    return 'Đẹp trai ít';
  }
  // TH1. truyền hàm vào jsx thì không truyền cặp ngoặc tròn
  showMessage (){
    alert('This is message');
  }
  // TH2. Hàm có params
  // showMessageWidhParams(message){
  //   alert('Another message nhé');
  // }

  //  function
  // showMessageWidhParams = function (message){
  //   return () =>{
  //     alert ('ok meessage sau khi click')
  //   }
  // }

  // --> arrow function
  showMessageWidhParams = (message) => () => {
    alert('Show message with params')
  }
  // clourse là khái niệm 1 function return về một function khác. khi chạy thì trả về function. click function thì show alert.

  // TH3. Show message with this function. khi dùng có con trỏ this thì phải dùng hàm arrow function
  // showMessageWithThis (){
  //   console.log(this.title);
  //   // alert('Show message with THIS')
  // }
  // phải đổi qua arrow function
  showMessageWithThis = () => {
    // console.log(this.title);
    alert('Show message with THIS');
  }

  render(){
    const isHandsome = true;
    return (
      <> 
        <h1>Demo Databinding</h1>
        <p> This is a demo</p>
        <p>Title: {this.title}</p>
        <p>Author: {this.name}</p>
        <p>Handsome: {this.checkHandsome(isHandsome)}</p>
        <button onClick={this.showMessage}>Show message</button> 
        {/* <button onClick={() => this.showMessageWidhParams('message')}>Show message with params</button> */}
        <button onClick={this.showMessageWidhParams('message')}>Show message with params</button>
        <button onClick={this.showMessageWithThis}>Show message with THIS</button> 
      </>
    )
  }
}
// react truyền hàm không truyền cặp ngoặc tròn

export default DemoDatabinding;

// title: với biến chỉ nhận cú pháp 1 dòng. nếu có if-else thì phải dùng toán tử 3 ngôi
// const không được tái gán và tái khởi tạo nhưng vẫn thay đổi giá trị của nó khi mà const là mảng hay object

// closeure là 
