import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PhisicalIcon from '../images/physical-1@1x.png';
import CommunicationIcon from '../images/communication-1@1x.png';
import WorldIcon from '../images/world-1@1x.png';

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
						<p>Physical</p>
						<p>Level 1</p>
					</div>
					<ProgressBar variant="success" now={40} />
					<img src={PhisicalIcon} alt="Phisical-Icon" />
					<div>
						<p>Communication</p>
						<p>Level 1</p>
					</div>
					<ProgressBar variant="info" now={20} />
					<img src={CommunicationIcon} alt="Communication-Icon" />
					<div>
						<p>World</p>
						<p>Level 1</p>
					</div>
					<ProgressBar variant="warning" now={60} />
					<img src={WorldIcon} alt="World-Icon" />
				</div>
			</section>
		);
	}
}

export default Progress;
