import React from "react";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import ShareIdeaImage from './../images/103-onboarding@1x.png';
import Arrow from './../images/chevron-green@1x.png';

class ShareIdea extends React.Component {
  render() {
    return (
      <div className="shareIdea--container">
        <nav className="shareIdea--nav">
          <div className="shareIdea--container__nav">
            <Link to="./game/{gameID}">
              <button className="shareIdea--button__back" type="button"><img src={Arrow} alt="go back" className="shareIdea--button__image"/>Back</button>
            </Link>
          </div>
        </nav>
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
          variant="light"
          onClick={this.props.handleButtonClick} 
          style={{
            backgroundColor:'#7db238',
            color: 'white',
            fontFamily:"'Lato', sans-serif",
            textTransform:'uppercase',
            fontSize:'12px',
            border:'1px solid #7db238'
            }}className="shareIdea--button__share">Add your comment</Button>
        </form>
      </div>
    );
  }
}

export default ShareIdea;
