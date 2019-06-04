import React from 'react';
import PropTypes from 'prop-types';

class MoreGames extends React.Component{
  render(){
    const randomGame = this.props.games[Math.floor(Math.random()*this.props.games.length)];
    console.log(randomGame)
    return(
      <div className={`next-game__container ${this.props.bgc}`}>
        <h2 className="next-game__section-title">What to play next</h2>
        <div className="next-game__text">
          <h2 className="next-game__title">{randomGame.name}</h2>
          <p className="next-game__description">{randomGame.description}</p>
        </div>
        <div className="next-game__image" style={{backgroundImage: `url(${randomGame.image_url})`}}>
        </div>
      </div>
    )
  }
}

MoreGames.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  bgc: PropTypes.string,
};

export default MoreGames;