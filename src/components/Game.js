import React from 'react';
import Comments from './Comments';
import Feedback from './Feedback';
import ShareIdea from './ShareIdea';
import { ENDPOINT } from './../services/fetchPostComments';

class Game extends React.Component {
	handleButtonClick = () => {
		fetch(
			`${ENDPOINT}?body=${this.props.value}&game_id=${
				this.props.game.id
			}&parent_id=6281`,
			{
				method: 'POST'
			}
		).catch(error => console.log(error));
	};

	render() {
		const {games} = this.props;
		return (
			<div>
				{games
					.filter(game => game.id === 21)
					.map(game => {
						return <div>
						<Comments game={game} />
						<Feedback filterGame={this.props.filterGame} />
						<ShareIdea
							value={this.props.value}
							handleTextArea={this.props.handleTextArea}
							handleButtonClick={this.handleButtonClick}
						/>
						</div>})}
			
			</div>
		);
	}
}

export default Game;
