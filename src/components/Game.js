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
								<div className="button__positionning--wrapper">
									<Link game={game}className="button__game-wrapper" to={`/game/${game.id}/comment`}>
										<Button 
											style={{backgroundColor: '#628a2c', 
															border: '1px solid #628a2c',
															fontFamily: "'Lato', sans-serif",
															fontSize: '12px',
															textTransform: 'uppercase'
														}}
											game={game}
										>Share your comments</Button>
									</Link>
								</div>
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
