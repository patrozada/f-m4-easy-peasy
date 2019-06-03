import React from 'react';
import CarouselCard from './CarouselCard';

class Carousel extends React.Component{
  render(){
    return(
      <CarouselCard game = {this.props.game}/>
    )
  }
}
export default Carousel;