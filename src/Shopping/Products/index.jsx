import React, { Component } from 'react'
import './products.css';
import ProductItem from '../ProductItem';


export default class Products extends Component {
  // Hiển thị danh sách sản phẩm ra ngoài màn hình
  // chuyển từ mảng productList ra thành 1 mảng HTML 
  // [{},{},{},{}] = [div.col-4,div.col-4,div.col-4,div.col-4,div.col-4]
  // map từ mảng sản phẩm ra 1 mảng HTML
    renderProducts = () => {
      return this.props.productList.map((prod) =>{ // lấy data productList từ component HOME
        return (
					<div className="col-3">
						<ProductItem prod={prod} getProduct = {this.props.getProduct} />
					</div>
				)
        
      })
      // console.log(productListUI);
  }


  render() {
    return (
      <div>
        <h2 className="display-4 text-center">Danh Sách Sản phẩm</h2>
        <div className="container">
          <div className = "row">
            {this.renderProducts()}
          </div>
        </div>
      </div>
    )
  }
}

