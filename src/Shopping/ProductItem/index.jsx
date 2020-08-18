import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {name,desc,img} = this.props.prod;
    return (
			<div>
				<img src={img} alt="ip11" class="img-product" />
				<p className="font-weight-bold">{name}</p>
				<p>{desc}</p>
				<button onClick={() => this.props.getProduct(this.props.prod)} className="btn btn-primary mr-1">Xem Chi Tiết</button>
				<button className="btn btn-danger">Chọn Mua</button>
			</div>
		)
  }
}
