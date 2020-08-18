import React, { Component } from 'react'

export default class MovieItem extends Component {
  render() {
    console.log(this.props.item,'props');
    return (
      <div className="card my-1">
        <img src={this.props.item.hinhAnh} alt="movie"/>
        <div className="card-body">
          <h3>{this.props.item.tenPhim}</h3>
          <p>{this.props.item.moTa}</p>
        </div>
        {/* <MovieDetail item={this.props.item} /> */}
      </div>
    )
  }
}
