import React, { Component } from 'react'

export default class Detail extends Component {
  isShowDetail = false;
  // React chỉ render giao diện 1 lần. và chỉ render lại giao diện nếu state thay đổi. 
  // Do đó mình phải đặt state cho isShowDetail để khi đổi state thì react render lại giao diện
  
  state = {
    isShowDetail:false,
    a:1,
  };

  handleToggleDetail = () => {
    this.setState({
      isShowDetail: !this.state.isShowDetail
      // sau khi render xong thì a vẫn bằng 1 
    })
    // console.log(this.state.isShowDetail);
  }

	// toggleDetail = () => {
	//   if(this.isShowDetail){
	//     return (
	// 			<div className="row">
	// 				<div className="col-4">
	// 					<h3>Iphone 11 promax</h3>
	// 					<img src="" alt="" />
	// 				</div>
	// 				<div className="col-8">
	// 					<h4>Thông số kỹ thuật</h4>
	// 					<table className="table">
	// 						<tbody>
	// 							<tr>
	// 								<td>Màn hình</td>
	// 								<td>Full HD</td>
	// 							</tr>
	// 							<tr>
	// 								<td>Hệ điều hành</td>
	// 								<td>iOS</td>
	// 							</tr>
	// 							<tr>
	// 								<td>Camera trước</td>
	// 								<td>20 MP</td>
	// 							</tr>
	// 							<tr>
	// 								<td>Camera sau</td>
	// 								<td>48 MP</td>
	// 							</tr>
	// 							<tr>
	// 								<td>RAM</td>
	// 								<td>4GB</td>
	// 							</tr>
	// 						</tbody>
	// 					</table>
	// 				</div>
	// 			</div>
	// 		)
	//   }
	//   return null;
  // }
  
  //


  
  
  
  render() {
		return (
			<div className="container mt-5">
				<button className="btn btn-warning" onClick={this.handleToggleDetail}>Hide Detail</button>
				{/* cách 1  */}
				{/* {this.toggleDetail()} */}

				{/* cách 2  */}
				{/* {this.isShowDetail ? (
					<div className="row">
						<div className="col-4">
							<h3>Iphone 11 promax</h3>
							<img src="" alt="" />
						</div>
						<div className="col-8">
							<h4>Thông số kỹ thuật</h4>
							<table className="table">
								<tbody>
									<tr>
										<td>Màn hình</td>
										<td>Full HD</td>
									</tr>
									<tr>
										<td>Hệ điều hành</td>
										<td>iOS</td>
									</tr>
									<tr>
										<td>Camera trước</td>
										<td>20 MP</td>
									</tr>
									<tr>
										<td>Camera sau</td>
										<td>48 MP</td>
									</tr>
									<tr>
										<td>RAM</td>
										<td>4GB</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				) : null} */}

				{/* // cách 3  */}
				{this.state.isShowDetail && (
					<div className="row">
						<div className="col-4">
							<h3>Iphone 11 promax</h3>
							<img src="" alt="" />
						</div>
						<div className="col-8">
							<h4>Thông số kỹ thuật</h4>
							<table className="table">
								<tbody>
									<tr>
										<td>Màn hình</td>
										<td>Full HD</td>
									</tr>
									<tr>
										<td>Hệ điều hành</td>
										<td>iOS</td>
									</tr>
									<tr>
										<td>Camera trước</td>
										<td>20 MP</td>
									</tr>
									<tr>
										<td>Camera sau</td>
										<td>48 MP</td>
									</tr>
									<tr>
										<td>RAM</td>
										<td>4GB</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				)}
			</div>
		)
	}
}
