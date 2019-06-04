import React from 'react';
import PhisicalIcon from '../images/physical-1@1x.png';
import CommunicationIcon from '../images/communication-1@1x.png';
import WorldIcon from '../images/world-1@1x.png';
import ProgressComponent from './ProgressComponent';

class Progress extends React.Component {
	randomNrProgress = (min, max) => {
		return Math.random() * (max - min) + min;
	};
	render() {
		return (
			<section>
				<p className="progress-title">
					How the game helps your child’s progress
				</p>
				<ProgressComponent
					aptidude="Physical"
					icon={PhisicalIcon}
					iconName="phisical-icon"
					functionProgress={this.randomNrProgress(1, 100)}
				/>
				<ProgressComponent
					aptidude="Communication"
					icon={CommunicationIcon}
					iconName="Communication-icon"
					functionProgress={this.randomNrProgress(1, 100)}
				/>
				<ProgressComponent
					aptidude="World"
					icon={WorldIcon}
					iconName="World-icon"
					functionProgress={this.randomNrProgress(1, 100)}
				/>
			</section>
		);
	}
}

export default Progress;
