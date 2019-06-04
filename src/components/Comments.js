import React from "react";

class Comments extends React.Component {
  render() {
    const { game } = this.props;
    const gameCommentsWithBody = game.comments.filter(comment => comment.body ? comment.body.length > 1 : false);
    const threeLastComments = gameCommentsWithBody.slice(gameCommentsWithBody.length - 3)
    return (
      <div>
        {threeLastComments.map(comment => 
          <p>{comment.body}</p>
        )}
      </div>
    );
  }
}

export default Comments;
