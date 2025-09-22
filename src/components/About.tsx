import React from 'react';
import ModalHideButton from './ModalHideButton';
import type ModalProp from '../interface/ModalInterface';


const About: React.FC<ModalProp> = ({ onHide }) => {
  return (
    <div>
      <h2>About</h2>
      <p>This is the About component.</p>
      <ModalHideButton onHide={onHide} />
    </div>
  );
};

export default About;
