import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShareIdea from "./components/ShareIdea";
import { ENDPOINT } from "./services/fetchPostComments";

import './App.scss';
import Game from './components/Game';


import { fetchGetComments } from './services/fetchGetComments';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			games: [],
			value: ''
		};

		this.handleTextArea = this.handleTextArea.bind(this);
		this.clearTextArea = this.clearTextArea.bind(this);
	}

	componentDidMount() {
		fetchGetComments().then(data => {
			this.setState({ games: data.games });
		});
	}
	
	handleTextArea(event) {
		const inputValue = event.target.value;
		this.setState({
			value: inputValue
		});
	}

	handleButtonClick = () => {
		fetch(
			`${ENDPOINT}?body=${this.props.value}&game_id=${21}&parent_id=6281`,
			{
				method: 'POST'
			}
		).catch(error => console.log(error));
		this.props.clearTextArea();
	};

	clearTextArea() {
		fetchGetComments().then(data => {
			this.setState({ 
				games: data.games,
				value: ''
			});
		});
	}

	render() {
		const { value, games } = this.state;
		return (
			<Switch>
				<Route exact path="/game/:id" render={routerProps => (
					<Game 
					games={games}
					value={value}
					handleTextArea={this.handleTextArea}
					clearTextArea={this.clearTextArea} />
				)}/>
				<Route exact path="/game/:id/comment" render={routerProps => (
					<ShareIdea
						value={this.state.value}
						handleTextArea={this.handleTextArea}
						handleButtonClick={this.handleButtonClick}
					/>
				)}/>
			</Switch>
		);
	}
}

export default App;
