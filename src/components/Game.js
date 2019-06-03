import React from "react";
import Header from "./Header";
import Carousel from "./Carousel"
import Comments from "./Comments";
import Feedback from "./Feedback";
import ShareIdea from "./ShareIdea";
import CommentSection from "./CommentSection";
import MoreGames from "./MoreGames";
import { ENDPOINT } from "./../services/fetchPostComments";

class Game extends React.Component {
  handleButtonClick = () => {;
    fetch(
      `${ENDPOINT}?body=${this.props.value}&game_id=${this.props.game.id}&parent_id=5858`,
      {
        method: "POST",
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
				<Header />
				<Carousel />
				<Comments comments={this.filterComments()} />
				<Feedback game={this.props.game} />
				<ShareIdea
					value={this.props.value}
					handleTextArea={this.props.handleTextArea}
					handleButtonClick={this.handleButtonClick}
				/>
				<MoreGames />
			</div>
		);
	}
}

export default Game;
