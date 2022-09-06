import React from 'react';
import "./Modal.css";
import Cover from '../../assets/close.png'

function Modal({children, isOpen, onClose}) {
  return isOpen ? (
    <div className="modal-layout">
      <img src={Cover} alt=""onClick={onClose}/>
      {children}
    </div>
  ) : null; 
}

export default Modal