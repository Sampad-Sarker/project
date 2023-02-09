import React, { Component } from "react";
import { Container } from "../src/components/container/Container";
import { Footer } from "../src/components/footer/Footer";
import "./styles/index.css";

export default class App extends Component {
  state = {
    randomPositionOfX: "",
    randomPositionOfY: "",
  };

  mouseEnterHandler = (event) => {
    // let x = Math.abs(event.pageX);
    // let y = Math.abs(event.pageY);
    // console.log(x, y);

    /*
    window.innerWidth=the width of a window's content area
    window.innerHeight=the height of a window's content area
    */

    let maximumOfWidth = window.innerWidth - 270; //width of the div 270px
    // let minimumOfWidth = x;
    let maximumOfHeight = window.innerHeight - 96; //height of the div 96px
    // let minimumOfHeight = y;

    /*
    a random number between min and max
    (Math.random()*(max-min))+min
    */
    this.setState({
      randomPositionOfX: Math.random() * (maximumOfWidth - 0) + 0,
      randomPositionOfY: Math.random() * (maximumOfHeight - 0) + 0,
      // randomPositionOfX: x,
      // randomPositionOfY: y,
      // randomPositionOfX: Math.random() * 100,
      // randomPositionOfY: Math.random() * 100,
    });

    console.log(
      `X = ${this.state.randomPositionOfX}px, Y = ${this.state.randomPositionOfY}px`
    );
  };

  render() {
    return (
      <>
        <Container
          mouseEnterHandler={this.mouseEnterHandler}
          state={this.state}
        />
        <Footer />
      </>
    );
  }
}
