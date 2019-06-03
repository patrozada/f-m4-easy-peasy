import React from 'react';
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
		return(
			<Game 
				games={games}
				value={value}
				handleTextArea={this.handleTextArea}
				clearTextArea={this.clearTextArea} />
		);
	}
}

export default App;
