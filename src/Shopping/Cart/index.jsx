import React, { Component } from 'react'

export default class Cart extends Component {
	render() {
		return (
			<div>
				{/* Modal */}
				<div
					className="modal fade"
					id="modelId"
					tabIndex={-1}
					role="dialog"
					aria-labelledby="modelTitleId"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Modal title</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								<table className="table">
									<thead>
										<tr>
											<th>Hình Ảnh</th>
											<th>Sản Phẩm</th>
											<th>Giá</th>
											<th>Số Lượng</th>
											<th>Tổng Cộng</th>
											<th />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<img
													style={{ width: 200 }}
													src="https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg"
												/>
											</td>
											<td style={{ fontSize: 25 }}>Iphone 6 Plus</td>
											<td>150$</td>
											<td>
												1
												<div className="btn-group">
													<button className="btn btn-info border-right">
														-
													</button>
													<button className="btn btn-info border-left">
														+
													</button>
												</div>
											</td>
											<td>150$</td>
											<td>
												<button className="btn btn-info">x</button>
											</td>
										</tr>
										<tr>
											<td />
											<td />
											<td />
											<td style={{ fontSize: 30 }} className="font-weight-bold">
												Tổng Tiền
											</td>
											<td style={{ fontSize: 30 }} className="font-weight-bold">
												15$
											</td>
											<td>
												<button
													style={{ fontSize: 30 }}
													className="btn btn-info"
												>
													Thanh Toán
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
								<button type="button" className="btn btn-primary">
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		)
	}
}
