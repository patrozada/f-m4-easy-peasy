import React from 'react';

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				{this.props.comments.map(comment => 
					<p>{comment.body}</p>)}
			</React.Fragment>
		);
	}
}

export default Comments;
