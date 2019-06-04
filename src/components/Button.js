import React from 'react';

const Button = (props) => {
  console.log('button', props.gameID)
  return (
    <button name={props.gameID} onClick={props.handleButtonClick}>Share your ideas or observations</button>
  );
}
 
export default Button;