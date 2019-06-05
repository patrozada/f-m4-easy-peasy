import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchGetComments } from './services/fetchGetComments';
import { ENDPOINT } from "./services/fetchPostComments";

import ShareIdea from "./components/ShareIdea";
import Game from './components/Game';
import Home from './components/Home';

import './App.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			games: [],
			value: ''
		};

		this.handleTextArea = this.handleTextArea.bind(this);
		this.clearTextArea = this.clearTextArea.bind(this);
		this.insertCommentInGame = this.insertCommentInGame.bind(this);
		this.updateGamesWithNewGame = this.updateGamesWithNewGame.bind(this);
	}

	componentDidMount() {

		fetchGetComments().then(data => {
			const initialGame = data.games.filter(game => game.id === 21);
			const randomGames = data.games.splice(0, 6);
			const finalGames = randomGames.concat(initialGame);
			this.setState({ games: finalGames });
		});

	}
	
	handleTextArea(event) {
		const inputValue = event.target.value;
		this.setState({
			value: inputValue
		});
	}

	handleButtonClick = (e, gameID) => {
		fetch(
			`${ENDPOINT}?body=${this.state.value}&game_id=${gameID}&parent_id=6281`,
			{
				method: 'POST'
			}
		).then(()=>{
			this.updateGamesWithNewGame(gameID);
			this.clearTextArea();
		}).catch(error => console.log(error));
	};

	clearTextArea() {
		this.setState({ 
				value: '',
			});
	}

	insertCommentInGame(gameID){
		const comment = {
			body: this.state.value,
		}
		const game = this.state.games
		.find(game => parseInt(game.id) === parseInt(gameID))

		const newComments = [...game.comments];
		newComments.push(comment)

		const updatedGame = {...game, comments: newComments}
		return updatedGame;
	}

	updateGamesWithNewGame(gameID){
		const updatedGame = this.insertCommentInGame(gameID);
		
		const gameIndex = this.state.games.findIndex(game => parseInt(game.id) === parseInt(gameID));
		
		const newGames = [...this.state.games];
		newGames[gameIndex] = updatedGame;
	
		this.setState({ 
				games: newGames,
			});	
	}
	render() {
		const { value, games } = this.state;
		return (
			<div className="general-container">
				<Switch>
					<Route exact path="/" render={routerProps => (
						<Home games={games} />
					)}/>
					)}/>	
					<Route 
						exact path="/game/:id" 
						render = {routerProps => (
							<Game 
							match={routerProps.match}
							games={games}
							value={value}
							handleTextArea={this.handleTextArea}
							handleButtonClick={this.handleButtonClick}
							clearTextArea={this.clearTextArea} />
						)}
					/>
					<Route exact path="/game/:id/comment" render={routerProps => (
						<ShareIdea
							match={routerProps.match}
							value={this.state.value}
							handleTextArea={this.handleTextArea}
							handleButtonClick={this.handleButtonClick}
						/>
					)}/>
				</Switch>
			</div>
		);
	}
}

export default App;
