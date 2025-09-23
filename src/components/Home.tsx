import React from 'react';
import ModalHideButton from './ModalHideButton';
import type ModalProp from '../interface/ModalInterface';

const Home: React.FC<ModalProp> = ({ onHide }) => {
  return(<div>
    <div className="overlay"></div>
    <div className="window">
      <div className="window__title-bar">
        <span className="window__title">Home</span>
        <ModalHideButton onHide={onHide} />
      </div>
      <div className="window__body">
        <p>This is the Home component.</p>
      </div>
      <div className="window__status-bar">
        Status: Home modal open
      </div>
    </div>
  </div>)
}
  

export default Home;