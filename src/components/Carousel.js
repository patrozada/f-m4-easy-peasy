import React from 'react';
import Slider from "react-slick";
import CarouselInstructions from './CarouselInstructions';
import CarouselLevel1 from './CarouselLevel1';
import CarouselLevel2 from './CarouselLevel2';

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
        <div>
          <CarouselInstructions game = {this.props.game}/>
        </div>
        <div>
          <CarouselLevel1 game = {this.props.game}/>
        </div>
        <div>
          <CarouselLevel2 game = {this.props.game}/>
        </div>
      </Slider>
    );
  }
}
export default Carousel;