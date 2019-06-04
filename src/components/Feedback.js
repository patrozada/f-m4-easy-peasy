import React from "react";
import { ENDPOINT_FEEDBACK } from "./../services/fetchPostFeedback";
import sad from "../images/sad.svg";
import neutral from "../images/neutral.svg";
import happy from "../images/happy.svg";
import wow from "../images/wow.svg";

class Feedback extends React.Component {
	handleFeedback = e => {
		const { value } = e.target;

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

	render() {
		return (
			<section className='feedback--container'>
				<p className='feedback--title'>How did it go?</p>
				<form
					className='feedback--input__container'
					onChange={this.handleFeedback}
					action='POST'>
					<label htmlFor='1'>
						<input className="feedback--radio-button" type='radio' value={1} name='feedback' id='1' />
						<div className='feedback--icon__container'>
							<img className="feedback--icon" src={sad} alt='sad face' />
						</div>
					</label>
					<label htmlFor='2'>
						<input className="feedback--radio-button" type='radio' value={2} name='feedback' id='2' />
						<div className='feedback--icon__container'>
							<img className="feedback--icon" src={neutral} alt='neutral face' />
						</div>
					</label>
					<label htmlFor='3'>
						<input className="feedback--radio-button" type='radio' value={3} name='feedback' id='3' />
						<div className='feedback--icon__container'>
							<img className="feedback--icon" src={happy} alt='happy face' />
						</div>
					</label>
					<label htmlFor='4'>
						<input className="feedback--radio-button" type='radio' value={4} name='feedback' id='4' />
						<div className='feedback--icon__container'>
							<img className="feedback--icon"src={wow} alt='wow face' />
						</div>
					</label>
				</form>
			</section>
		);
	}
}

export default Feedback;
