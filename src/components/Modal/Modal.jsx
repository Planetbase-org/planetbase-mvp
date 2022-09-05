import React from 'react';
import "./Modal.css";

function Modal({children, isOpen, onClose}) {
  return isOpen ? (
    <div className="modal-layout">
      <button onClick={onClose}>x</button>
      {children}
    </div>
  ) : null; 
}

export default Modal