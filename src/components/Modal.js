import React from 'react';

function  Modal (props){
  const {handleClose, show} = props;
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <p>This is Modal</p>
        <button
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;