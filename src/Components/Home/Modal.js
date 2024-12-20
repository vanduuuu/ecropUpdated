import React from 'react';
import './Modal.css'; // Import the CSS for the modal
import addhere from '../../assets/background/ecrop-add.webp'
import { Link } from 'react-router-dom';
function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="modal-close" onClick={onClose}>&times;</span>
                <Link to="https://youtube.com/live/rEZCjzPjfRU?feature=share"><img src={addhere} alt="Modal Content" /></Link>
            </div>
        </div>
    );
}

export default Modal;
