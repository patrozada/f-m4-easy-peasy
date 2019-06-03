import React from "react";

class Comments extends React.Component {
  render() {
    const { game } = this.props;

    return (
      <div>
		{game.comments
		.filter(comment =>
          comment.body ? comment.body.length > 1 : false
        ).map(comment =>
			<p>{comment.body}</p>
		)}
      </div>
    );
  }
}

export default Comments;
