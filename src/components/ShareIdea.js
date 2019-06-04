import React from "react";
import Button from 'react-bootstrap/Button';

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
            className="shareIdea--input"
          />
          <Button type="button" onClick={this.props.handleButtonClick} variant="success" style={{backgroundColor:`#7db238`}}>Add your comment</Button>
        </form>
      </React.Fragment>
    );
  }
}

export default ShareIdea;
