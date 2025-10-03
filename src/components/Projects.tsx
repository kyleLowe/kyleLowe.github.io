import React from 'react';
import ModalHideButton from './ModalHideButton';
import type ModalProp from '../interface/ModalInterface';

const Projects: React.FC<ModalProp> = ({ onHide }) => {
    return (
         <div>
    <div className="overlay"></div>
    <div className="window">
      <div className="window__title-bar">
        <span className="window__title">Projects</span>
        <ModalHideButton onHide={onHide} />
      </div>
      <div className="window__body">
      <p>WIP</p>
      </div>
    </div>
  </div>
    );
};

export default Projects;