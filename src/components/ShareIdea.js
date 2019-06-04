import React from "react";
import Button from 'react-bootstrap/Button';
import ShareIdeaImage from './../images/103-onboarding@1x.png'

class ShareIdea extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="shareIdea--container">
        <img src={ShareIdeaImage} alt="happy beens talking" className="shareIdea--image"/>
        <form method="POST" className="shareIdea--input__container">
          <label htmlFor="comment" className="shareIdea--title">Share ideas or observations</label>
          <p className="shareIdea--subtitle">Let others in your pod how your play went!</p>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            onChange={this.props.handleTextArea}
            value={this.props.value}
            className="shareIdea--input"
          />
          <Button 
          type="button" 
          onClick={this.props.handleButtonClick} variant="success" 
          style={{
            backgroundColor:'#7db238',
            fontFamily:"'Lato', sans-serif",
            textTransform:'uppercase',
            fontSize:'12px',
            border:'1px solid #7db238'
            }}className="shareIdea--button">Add your comment</Button>
        </form>
      </div>
    );
  }
}

export default ShareIdea;
