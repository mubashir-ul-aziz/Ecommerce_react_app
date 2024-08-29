
import React from 'react';

const Popup = ({ isOpen, handleClose, children, popupwidth }) => {
  if (!isOpen) return null;

  const setwidth={
    width:popupwidth,
  }
  return (
    <div className=' popup-component '> 
    <div className="popup-overlay"  onClick={handleClose}></div>

      <div className="popup-content" style={setwidth} >
        <button className="close-button" onClick={handleClose}></button>
        {children}
      </div>
    </div>
  );
};

export default Popup;

