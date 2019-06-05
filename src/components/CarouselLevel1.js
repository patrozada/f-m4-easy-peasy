import React from 'react';
import level1 from "../images/301-challenge1@1x.png";
import ReactHtmlParser from 'react-html-parser';

class CarouselLevel1 extends React.Component{
  render(){
    const {
      level_1,
    } = this.props.game;
    return(
      <div className="carousel-card__level">
        <h2 className="carousel-card__level--title">Level 1</h2>
        <div>{ReactHtmlParser(level_1)}</div>
        <img className="carousel-card__level--image" src={level1} alt="level 1"/>
      </div>
    )
  }
}
export default CarouselLevel1;