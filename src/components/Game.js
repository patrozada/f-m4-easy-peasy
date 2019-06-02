import React from 'react';
import Comments from './Comments';
import Feedback from './Feedback';
import ShareIdea from './ShareIdea';

class Game extends React.Component {

	render() {
		console.log(this.props.game);
		return (
			<div>
				<Comments />
				<Feedback/>
				<ShareIdea />
			</div>
		);
	}
}

export default Game;
