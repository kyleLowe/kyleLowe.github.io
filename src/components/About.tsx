import React from 'react';
import ModalHideButton from './ModalHideButton';
import type ModalProp from '../interface/ModalInterface';


const About: React.FC<ModalProp> = ({ onHide }) => {
  return (
    <div>
    <div className="overlay"></div>
    <div className="window">
      <div className="window__title-bar">
        <span className="window__title">About</span>
        <ModalHideButton onHide={onHide} />
      </div>
      <div className="window__body">
      <p>This is the About component.</p>
      </div>
      <div className="window__status-bar">
        Status: About modal open
      </div>
    </div>
  </div>
  );
};

export default About;
