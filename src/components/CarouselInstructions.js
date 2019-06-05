import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';


class CarouselInstructions extends React.Component{
  render(){
    const {
      instructions,
    } = this.props.game;
    return(
      <div className="carousel-card__instructions">
        {ReactHtmlParser(instructions)}
      </div>
    )
  }
}
CarouselInstructions.propTypes = {
  game: PropTypes.object,
};
export default CarouselInstructions;