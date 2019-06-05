import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Header from "./Header";
import Carousel from "./Carousel";
import Comments from "./Comments";
import Progress from "./Progress";
import Feedback from "./Feedback";
import MoreGames from "./MoreGames";
import Loading from "../images/Eclipse-1.5s-170px.gif"

class Game extends React.Component {
  render() {
    const { games } = this.props;
    const { id } = this.props.match.params;
    const selectedGame = games.find(game => game.id === parseInt(id));
    return selectedGame === undefined ? (
		<img src={Loading} alt="loading" className="loading"/> 
    ) : (
      <React.Fragment>
        <div>
          <Header game={selectedGame} />
          <Carousel game={selectedGame} />
          <div className="button__positionning--wrapper">
            <Link
              game={selectedGame}
              className="button__game-wrapper"
              to={`/game/${selectedGame.id}/comment`}
            >
              <Button
                style={{
                  backgroundColor: "#628a2c",
                  border: "1px solid #628a2c",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "12px",
                  textTransform: "uppercase"
                }}
                game={selectedGame}
              >
                Share your comments
              </Button>
            </Link>
          </div>
          <Comments game={selectedGame} />
          <Progress />
          <Feedback game={selectedGame} />
          <MoreGames games={games} bgc="selected-game" />
          <MoreGames games={games} bgc="ordinary-game" />
          <div className="button__all-games--wrapper">
            <Link to="/">
              <Button
              variant="outline-light"
              className="button__all-games" 
              style={{
                color: "#628a2c",
                border: "1px solid #628a2c",
                fontFamily: "'Lato', sans-serif",
                fontSize: "12px",
                textTransform: "uppercase",
                }}  
              >All games</Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Game.propTypes = {
	games: PropTypes.arrayOf(PropTypes.object),
	match: PropTypes.object,
};

export default Game;
