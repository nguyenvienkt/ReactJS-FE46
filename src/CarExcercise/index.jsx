import React, { Component } from 'react';
import redCar from './img/red-car.jpg';
import blackCar from './img/black-car.jpg';
import silverCar from './img/silver-car.jpg';

export default class CarExercise extends Component {
  state = {
    carImg: redCar,
  }

  changeColor = (img) => {
    this.setState(
      {
      carImg:img
    },
      () =>{console.log(this.state.carImg);}
    );
  
  }
  render() {
    return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img src={this.state.carImg} className="w-100" alt="car1" />
					</div>
					<div className="col-6">
						<p>Change color</p>
						<button
							onClick={() => this.changeColor(redCar)}
							className="btn btn-danger"
						>
							Red color
						</button>
						<div
							onClick={() => this.changeColor(blackCar)}
							className="btn btn-dark mx-4"
						>
							Black color
						</div>
						<div
							onClick={() => this.changeColor(silverCar)}
							className="btn btn-secondary"
						>
							Silver color
						</div>
					</div>
				</div>
			</div>
		)
  }
}
