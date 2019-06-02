import React from 'react';
import './App.css';
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

	render() {
		const { games, value } = this.state;
		return games.map(game => (
			<Game game={game} value={value} handleTextArea={this.handleTextArea} />
		));
	}
}

export default App;
