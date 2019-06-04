import React from 'react';
import PropTypes from 'prop-types';

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

Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default Modal;