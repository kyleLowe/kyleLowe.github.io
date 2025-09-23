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
      <p>TThis is the Projects component.</p>
      </div>
      <div className="window__status-bar">
        Status: Projects modal open
      </div>
    </div>
  </div>
    );
};

export default Projects;