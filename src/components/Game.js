import React from "react";
import Header from "./Header";
import Button from "./Button";
import Carousel from "./Carousel"
import Comments from "./Comments";
import Feedback from "./Feedback";
import MoreGames from "./MoreGames";
import { Link } from 'react-router-dom';


class Game extends React.Component {
	

	render() {
		const {games} = this.props;
		return (
			<React.Fragment>
				{games
					.filter(game => game.id === 21)
					.map(game => {
						return <div>
            <Header />
						<Link to={`/game/${game.id}/comment`}>
							<Button />
						</Link>
						<Carousel game={game}/>
						<Comments game={game} />
						<Feedback game={game} />
				    <MoreGames />
						</div>})}
			</React.Fragment>
		);
	}
}

export default Game;
