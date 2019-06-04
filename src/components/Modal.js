import React from 'react';

function  Modal (props){
  const {handleClose, show} = props;
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal--main'>
        <div className= 'modal--image'></div>
        <h3 className= 'modal--message'>Thanks for your feedback!</h3>
        <button className='modal--button'
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;