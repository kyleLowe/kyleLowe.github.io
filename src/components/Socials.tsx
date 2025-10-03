import React from 'react';
import ModalHideButton from './ModalHideButton';
import type ModalProp from '../interface/ModalInterface';

const Socials: React.FC<ModalProp> = ({ onHide }) => {
    return (
         <div>
    <div className="overlay"></div>
    <div className="window">
      <div className="window__title-bar">
        <span className="window__title">Socials</span>
        <ModalHideButton onHide={onHide} />
      </div>
      <div className="window__body">
      <p>To contact me, message me on LinkedIn <a target="_blank" rel="noopener noreferrer" href =  "https://www.linkedin.com/in/kyle-lowe-90b232233/">here  </a> <br/>
Check out my personal GitHub: <a target="_blank" rel="noopener noreferrer" href =  "https://github.com/kyleLowe">here  </a>  <br/>
Check out my university GitHub: <a  target="_blank" rel="noopener noreferrer" href =  "https://github.com/klow358">here  </a>  <br/>

</p>
      </div>
    </div>
  </div>
    );
};

export default Socials;