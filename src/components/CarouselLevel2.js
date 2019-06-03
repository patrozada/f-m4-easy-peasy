import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class CarouselLevel2 extends React.Component{
  render(){
    const {
      level_2,
    } = this.props.game;
    return(
      <div>
        <img src="https://via.placeholder.com/150" alt="level 2"/>
        {ReactHtmlParser(level_2)}
      </div>
    )
  }
}
export default CarouselLevel2;