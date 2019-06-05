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
						variant="success"
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
	aptidude: PropTypes.string,
  };

export default ProgressComponent;
