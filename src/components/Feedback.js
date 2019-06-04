import React from "react";
import { ENDPOINT_FEEDBACK } from "./../services/fetchPostFeedback";
import Modal from "./Modal";
import sad from "../images/sad.svg";
import neutral from "../images/neutral.svg";
import happy from "../images/happy.svg";
import wow from "../images/wow.svg";
import PropTypes from 'prop-types';

class Feedback extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			show: false
		};
		this.handleFeedbackClick = this.handleFeedbackClick.bind(this);
	}
	
	hideModal = () => {
		this.setState({ show: false });
	};
	handleFeedback = e => {
		const { value } = e.target;
		this.setState({
			clicked: true,
			show : true
		});
		fetch(ENDPOINT_FEEDBACK, {
			method: "POST",
			body: JSON.stringify({
				parent_id: 6281,
				pod_id: 609,
				user_action: value,
				game_id: this.props.game.id
			})
		})
			.then(res => res.json())
			.catch(error => console.error("Error:", error))
			.then(response => console.log("Success:", response));
	};

	handleFeedbackClick() {
		const clicked = this.state.clicked;
		const showBarClass = clicked ? "hidden" : "";
		return showBarClass;
	}
	render() {
		const showBarClass = this.handleFeedbackClick();
		return (
			<React.Fragment>
				<section className={`feedback--container ${showBarClass}`}>
					<p className='feedback--title'>How did it go?</p>
					<form
						className='feedback--input__container'
						onChange={this.handleFeedback}
						onClick={this.handleFeedbackClick}
						action='POST'>
						<label htmlFor='1'>
							<input
								className='feedback--radio-button'
								type='radio'
								value={1}
								name='feedback'
								id='1'
							/>
							<div className='feedback--icon__container'>
								<img className='feedback--icon' src={sad} alt='sad face' />
							</div>
						</label>
						<label htmlFor='2'>
							<input
								className='feedback--radio-button'
								type='radio'
								value={2}
								name='feedback'
								id='2'
							/>
							<div className='feedback--icon__container'>
								<img
									className='feedback--icon'
									src={neutral}
									alt='neutral face'
								/>
							</div>
						</label>
						<label htmlFor='3'>
							<input
								className='feedback--radio-button'
								type='radio'
								value={3}
								name='feedback'
								id='3'
							/>
							<div className='feedback--icon__container'>
								<img className='feedback--icon' src={happy} alt='happy face' />
							</div>
						</label>
						<label htmlFor='4'>
							<input
								className='feedback--radio-button'
								type='radio'
								value={4}
								name='feedback'
								id='4'
							/>
							<div className='feedback--icon__container'>
								<img className='feedback--icon' src={wow} alt='wow face' />
							</div>
						</label>
					</form>
				</section>
				<Modal show={this.state.show} handleClose={this.hideModal}/>
			</React.Fragment>
		);
	}
}

Feedback.propTypes = {
	game: PropTypes.object,
  };
  
export default Feedback;
