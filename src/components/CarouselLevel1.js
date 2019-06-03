import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class CarouselLevel1 extends React.Component{
  render(){
    const {
      level_1,
    } = this.props.game;
    return(
      <div className="carousel-card__level">
        <h2 className="carousel-card__level--title">Level 1</h2>
        <img className="carousel-card__level--image" src="https://via.placeholder.com/150" alt="level 1"/>
        {ReactHtmlParser(level_1)}
      </div>
    )
  }
}
export default CarouselLevel1;