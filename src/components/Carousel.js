import React from 'react';
import Slider from "react-slick";
import CarouselInstructions from './CarouselInstructions';
import CarouselLevel1 from './CarouselLevel1';
import CarouselLevel2 from './CarouselLevel2';
import Card from 'react-bootstrap/Card';

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="carousel-card__wrapper">
          <Card className="carousel-card">
            <Card.Body>
              <CarouselInstructions game = {this.props.game}/>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="carousel-card">
            <Card.Body>
              <CarouselLevel1 game = {this.props.game}/>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="carousel-card">
            <Card.Body>
              <CarouselLevel2 game = {this.props.game}/>
            </Card.Body>
          </Card>
        </div>
      </Slider>
    );
  }
}
export default Carousel;