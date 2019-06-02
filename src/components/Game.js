import React from 'react';
import Comments from './Comments';
import Feedback from './Feedback';
import ShareIdea from './ShareIdea';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			game: {}
		};
	}

	componentWillMount() {
		this.setState({ game: this.props.game });
	}
	handleButtonClick = () => {
		const apiUrl = 'url';
		fetch(
			`${apiUrl}?body=${this.props.value}&game_id=${
				this.state.game.id
			}&parent_id=5858`,
			{
				method: 'POST'
			}
		).catch(error => console.log(error));
	};
	filterComments() {
		console.log(this.state.game.comments);
		const filteredComments = this.state.game.comments.filter(comment =>
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
