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
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}
export default Carousel;
      // <div>
      //   <CarouselInstructions game = {this.props.game}/>
      //   <CarouselLevel1 game = {this.props.game}/>
      //   <CarouselLevel2 game = {this.props.game}/>
      // </div>