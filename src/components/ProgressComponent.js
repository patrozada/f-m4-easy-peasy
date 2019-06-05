import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';

class ProgressComponent extends React.Component {
	render() {
		return (
			<div className="progress--section">
				<img
					className="progress--images"
					src={this.props.icon}
					alt={this.props.iconName}
				/>
				<div className="progress--bars__container">
					<div className="progress--subtitle__container">
						<p className="progress--subtitle__apptitudes">
							{this.props.aptidude}
						</p>
						<p className="progress--subtitle__level">Level 1</p>
					</div>
					<ProgressBar
						className="progress--bar"
						now={this.props.functionProgress}
					/>
				</div>
			</div>
		);
	}
}

ProgressComponent.propTypes = {
	icon: PropTypes.string,
	iconName: PropTypes.string,
	functionProgress: PropTypes.number,
<<<<<<< HEAD
	aptidude: PropTypes.string,
=======
	aptidude: PropTypes.string
>>>>>>> 7fa303a0e798e088882afa35b251d3902d5262be
};

export default ProgressComponent;
