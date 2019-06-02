import React from "react";

class ShareIdea extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form method="POST">
          <label htmlFor="comment">Share ideas or observations</label>
          <p>Let others in your pod how your play went!</p>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            onChange={this.props.handleTextArea}
            value={this.props.value}
          />
          <button type="button" onClick={this.props.handleButtonClick}>
            Add your comment
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ShareIdea;
