import React from 'react';
import ModalHideButton from './ModalHideButton';
import type ModalProp from '../interface/ModalInterface';

const Contact: React.FC<ModalProp> = ({ onHide }) => {
    return (
         <div>
    <div className="overlay"></div>
    <div className="window">
      <div className="window__title-bar">
        <span className="window__title">Contact</span>
        <ModalHideButton onHide={onHide} />
      </div>
      <div className="window__body">
      <p>TThis is the Contact component.</p>
      </div>
      <div className="window__status-bar">
        Status: Contact modal open
      </div>
    </div>
  </div>
    );
};

export default Contact;