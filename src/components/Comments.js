import React from "react";
import PropTypes from 'prop-types';

class Comments extends React.Component {
  render() {
    const { game } = this.props;
    const gameCommentsWithBody = game.comments.filter(comment => comment.body ? comment.body.length > 1 : false);
    const threeLastComments = gameCommentsWithBody.slice(gameCommentsWithBody.length - 3)
    return (
      <div className="comments__container">
        {threeLastComments.map(comment => 
          <q className="comments__unit">{comment.body}</q>
        )}
      </div>
    );
  }
}

Comments.propTypes = {
  game: PropTypes.object,
};

export default Comments;
