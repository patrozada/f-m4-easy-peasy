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

	randomNrProgress = (min, max) => {
		return Math.random() * (max - min) + min;
	};
	render() {
		return (
			<section className="progress--section">
				<p className="progress--title">
					How the game helps your child’s progress
				</p>
				<div className="progress--subtitle__container">
					<div>
						<p className="progress--subtitle__apptitudes">Physical</p>
						<p className="progress--subtitle__level">Level 1</p>
					</div>
					<div className="progress--bars__container">
						<ProgressBar
							className="progress--bar"
							variant="success"
							now={this.randomNrProgress(1, 100)}
						/>
						<img src={PhisicalIcon} alt="Phisical-Icon" />
					</div>
					<div className="progress--subtitle__container">
						<p className="progress--subtitle__apptitudes">Communication</p>
						<p className="progress--subtitle__level">Level 1</p>
					</div>
					<div className="progress--bars__container">
						<ProgressBar
							className="progress--bar"
							variant="success"
							now={this.randomNrProgress(1, 100)}
						/>
						<img src={CommunicationIcon} alt="Communication-Icon" />
					</div>
					<div className="progress--subtitle__container">
						<p className="progress--subtitle__apptitudes">World</p>
						<p className="progress--subtitle__level">Level 1</p>
					</div>
					<div className="progress--bars__container">
						<ProgressBar
							className="progress--bar"
							variant="success"
							now={this.randomNrProgress(1, 100)}
						/>
						<img src={WorldIcon} alt="World-Icon" />
					</div>
				</div>
			</section>
		);
	}
}

export default Progress;
