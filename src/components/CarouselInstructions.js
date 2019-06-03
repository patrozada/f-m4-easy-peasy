import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class CarouselInstructions extends React.Component{
  render(){
    const {
      instructions,
    } = this.props.game;
    return(
      <div>
        {ReactHtmlParser(instructions)}
      </div>
    )
  }
}
export default CarouselInstructions;