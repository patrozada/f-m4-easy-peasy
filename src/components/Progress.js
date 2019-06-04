import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Progress extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<section>
				<p>How the game helps your child’s progress</p>
				<div>
					<div>
						<p>Phisical</p>
						<p>Level 1</p>
					</div>
					<ProgressBar variant="success" now={40} />
					<div>
						<p>Communication</p>
						<p>Level 1</p>
					</div>
					<ProgressBar variant="info" now={20} />
					<div>
						<p>World</p>
						<p>Level 1</p>
					</div>
					<ProgressBar variant="warning" now={60} />
				</div>
			</section>
		);
	}
}

export default Progress;
