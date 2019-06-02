import React from 'react';

class Feedback extends React.Component {
	handleFeedback = e => {
		const { value } = e.target;

		fetch('url', {
			method: 'POST',
			body: JSON.stringify({
				parent_id: 5858,
				pod_id: 609,
				user_action: value,
				game_id: 'gameid'
			})
		})
			.then(res => res.json())
			.catch(error => console.error('Error:', error))
			.then(response => console.log('Success:', response));
	};

	render() {
		return (
			<React.Fragment>
				<form onChange={this.handleFeedback} action="POST">
					<h1>HOW DID IT GO?</h1>
					<label htmlFor="1" />
					<input type="radio" value={1} name="feedback" id="1" />
					<label htmlFor="2" />
					<input type="radio" value={2} name="feedback" id="2" />
					<label htmlFor="3" />
					<input type="radio" value={3} name="feedback" id="3" />
					<label htmlFor="4" />
					<input type="radio" value={4} name="feedback" id="4" />
				</form>
			</React.Fragment>
		);
	}
}

export default Feedback;
