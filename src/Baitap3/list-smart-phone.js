import React from 'react'
import ItemProduct from './item-product'

export default function ListSmartPhone() {
	return (
		<section id="smartphone" className="container-fluid pt-5 pb-5">
			<h1 className="text-white text-center">BEST SMARTPHONE</h1>
			<div className="containter">
				<div className="row">
					<ItemProduct />
					<ItemProduct />
					<ItemProduct />
					<ItemProduct />
				</div>
			</div>
		</section>
	)
}
