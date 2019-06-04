import React from 'react';
import level2 from "../images/301-challenge2@1x.png";
import ReactHtmlParser from 'react-html-parser';

class CarouselLevel2 extends React.Component{
  render(){
    const {
      level_2,
    } = this.props.game;
    return(
      <div className="carousel-card__level">
        <h2 className="carousel-card__level--title">Level 2</h2>
        <p>{ReactHtmlParser(level_2)}</p>
        <img className="carousel-card__level--image" src={level2} alt="level 2"/>
      </div>
    )
  }
}
export default CarouselLevel2;