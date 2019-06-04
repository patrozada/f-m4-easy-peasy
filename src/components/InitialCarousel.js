import React from 'react';
import Slider from "react-slick";

class Carousel extends React.Component {
  render() {
    console.log('props de carousel', this.props.game.id)
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