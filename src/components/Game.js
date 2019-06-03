import React from "react";
import Header from "./Header";
import Carousel from "./Carousel"
import Comments from "./Comments";
import Feedback from "./Feedback";
import MoreGames from "./MoreGames";
import { Link } from 'react-router-dom';


class Game extends React.Component {
	

	render() {
		const {games} = this.props;
		return (
			<div>
				{games
					.filter(game => game.id === 21)
					.map(game => {
						return <div>
            <Header />
						<Link to={`/game/${game.id}/comment`}>
							<button>Share your ideas</button>
						</Link>
						{/* <ShareIdea
							value={this.props.value}
							handleTextArea={this.props.handleTextArea}
							handleButtonClick={this.handleButtonClick}
						/> */}
						<Comments game={game} />
						<Feedback game={game} />
				    <MoreGames />
						</div>})}
			</div>
		);
	}
}

export default Game;
