import React from 'react';
import CarouselInstructions from './CarouselInstructions';
import CarouselLevel1 from './CarouselLevel1';
import CarouselLevel2 from './CarouselLevel2';

class Carousel extends React.Component{
  render(){
    return(
      <div>
        <CarouselInstructions game = {this.props.game}/>
        <CarouselLevel1 game = {this.props.game}/>
        <CarouselLevel2 game = {this.props.game}/>
      </div>

    )
  }
}
export default Carousel;