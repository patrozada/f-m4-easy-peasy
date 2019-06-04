import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Comments from './Comments';
import Feedback from './Feedback';
import MoreGames from './MoreGames';
import { Link } from 'react-router-dom';
import Progress from './Progress';
import Button from 'react-bootstrap/Button';

class Game extends React.Component {
	render() {
		const { games } = this.props;
		return (
			<React.Fragment>
				{games
					.filter(game => game.id === 21)
					.map(game => {
						return (
							<div>
								<Header game={game} />
								<Carousel game={game} />
								<Link to={`/game/${game.id}/comment`}>
									<Button style={{backgroundColor: '#628a2c', border: '1px solid #628a2c'}}>Share your ideas or comments</Button>
								</Link>
								<Comments game={game} />
								<Progress />
								<Feedback game={game} />
								<MoreGames games={games} bgc="selected-game" />
								<MoreGames games={games} bgc="ordinary-game" />
							</div>
						);
					})}
			</React.Fragment>
		);
	}
}

export default Game;
