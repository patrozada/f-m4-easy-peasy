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
	filterComments() {
		const filteredComments = this.props.game.comments.filter(comment =>
			comment.body ? comment.body.length > 10 : false
		);
		return filteredComments;
	}

	render() {
		return (
			<div>
				<Comments comments={this.filterComments()} />
				<Feedback game={this.props.game} />
				<ShareIdea
					value={this.props.value}
					handleTextArea={this.props.handleTextArea}
					handleButtonClick={this.handleButtonClick}
				/>
			</div>
		);
	}
}

export default Game;
