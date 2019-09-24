import React from "react";
import Carousel from 'react-bootstrap/Carousel'

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={require("../../images/black-and-white-black-background-camera-1595244-min.jpg")}
            alt="Memory Game"
          />
          <Carousel.Caption>
            <h4>Memory Game</h4>
            <p>Memory Game is a card matching game, where you get to test how well    
          you can remember or recall things last seen.<br/><a href="https://github.com/janwa039/MemoryGame" class="card-link">Source code link</a><br/></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../images/black-and-white-black-background-camera-1595244-min.jpg")}
            alt="Restaurant Review APP iMAGE"
          />

          <Carousel.Caption>
            <h4>Restaurant Review App</h4>
            <p>
              Static webpage is converted to a mobile-ready web application. 
              Also added a service worker to load the application offline experience for the user.<br/>
              <a href="https://github.com/janwa039/restaurantReviewApp" class="card-link">
              Source code link</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../images/black-and-white-black-background-camera-1595244-min.jpg")}
            alt="Arcade Game"
          />

          <Carousel.Caption>
            <h4>Arcade Game</h4>
            <p>
            A Frogger Arcade Game built with Vanilla JavaScript without any external libraries. 
            The idea of this game is to try and reach the Water without trying to touch a Bug! or you loose lives.<br/>
            <a href="https://github.com/janwa039/Classic-Arcade-Game" class="card-link">Source code link</a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}


export default ControlledCarousel
