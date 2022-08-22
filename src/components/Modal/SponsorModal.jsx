import React from 'react';
import "./Sponsor.css";

function Modal({children, isOpen}) {
  return isOpen ? (
    <div>{children}</div>
  ) : null; 
}

export default Modal