import React from 'react';
import type ModalProp from '../interface/ModalInterface';


const ModalHideButton: React.FC<ModalProp> = ({ onHide }) => {
  return (
    <div>
      <button id="modal-hide-button" onClick={onHide}>
        Hide Modal
      </button>
    </div>
  );
};

export default ModalHideButton;
