import React from 'react'
import ItemProduct from './item-product'

export default function ListLaptop() {
	return (
		<section
			id="laptop"
			className="container-fluid pt-5 pb-5 bg-light text-dark"
		>
			<h1 className="text-center">BEST LAPTOP</h1>
			<div className="container">
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
