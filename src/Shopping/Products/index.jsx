import React, { Component } from 'react'
import './products.css';

const productList = [
	{
		id: 'sp_1',
		name: 'iphoneX',
		price: '30.000.000 VNÄ�',
		screen: 'screen_1',
		backCamera: 'backCamera_1',
		frontCamera: 'frontCamera_1',
		img:
			'https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg',
		desc:
			'iPhone X features a new all-screen design. Face ID, which makes your face your password',
	},
	{
		id: 'sp_2',
		name: 'Note 7',
		price: '20.000.000 VNÄ�',
		screen: 'screen_2',
		backCamera: 'backCamera_2',
		frontCamera: 'frontCamera_2',
		img:
			'https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_note_7_blue_600x600.png',
		desc:
			'The Galaxy Note7 comes with a perfectly symmetrical design for good reason',
	},
	{
		id: 'sp_3',
		name: 'Vivo',
		price: '10.000.000 VNÄ�',
		screen: 'screen_3',
		backCamera: 'backCamera_3',
		frontCamera: 'frontCamera_3',
		img: 'https://www.gizmochina.com/wp-content/uploads/2019/11/Vivo-Y19.jpg',
		desc:
			'A young global smartphone brand focusing on introducing perfect sound quality',
	},
	{
		id: 'sp_4',
		name: 'Blacberry',
		price: '15.000.000 VNÄ�',
		screen: 'screen_4',
		backCamera: 'backCamera_4',
		frontCamera: 'frontCamera_4',
		img:
			'https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-600x600.jpg',
		desc:
			'BlackBerry is a line of smartphones, tablets, and services originally designed',
	},
]


export default class Products extends Component {
  // Hiển thị danh sách sản phẩm ra ngoài màn hình
  // chuyển từ mảng productList ra thành 1 mảng HTML 
  // [{},{},{},{}] = [div.col-4,div.col-4,div.col-4,div.col-4,div.col-4]
  // map từ mảng sản phẩm ra 1 mảng HTML
    renderProducts = () => {
      return productList.map((prod) =>{
        return (
					<div className="col-3">
						<img src={prod.img} alt="ip11" class="img-product" />
						<p className="font-weight-bold">{prod.name}</p>
						<p>
							{prod.desc}
						</p>
						<button className="btn btn-primary mr-1">Xem Chi Tiết</button>
						<button className="btn btn-danger">Ẩn Mô Tả</button>
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

