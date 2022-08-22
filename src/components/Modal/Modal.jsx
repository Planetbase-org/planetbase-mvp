import React from 'react';
import "./Modal.css";

function Modal({children, isOpen, onClose}) {
  return isOpen ? (
    <div onClick={onClose} className="modal-layout">
      {children}
    </div>
  ) : null; 
}

export default Modal