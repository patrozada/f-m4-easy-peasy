
import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Comments from './Comments';
import Feedback from './Feedback';
import ShareIdea from './ShareIdea';
import CommentSection from './CommentSection';
import MoreGames from './MoreGames';
import { ENDPOINT } from './../services/fetchPostComments';

class Game extends React.Component {
	handleButtonClick = () => {
		fetch(`${ENDPOINT}?body=${this.props.value}&game_id=${21}&parent_id=6281`, {
			method: 'POST'
		}).catch(error => console.log(error));
	};
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
								<Carousel />
								<Comments game={game} />
								<Feedback game={game} />
								<ShareIdea
									value={this.props.value}
									handleTextArea={this.props.handleTextArea}
									handleButtonClick={this.handleButtonClick}
								/>
								<CommentSection />
								<MoreGames />
							</div>
						);
					})}
			</div>
		);
	}
}

export default Game;
