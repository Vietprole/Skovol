// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, movieTitle }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Buy Ticket for {movieTitle}</h2>
        {/* Additional modal content here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
