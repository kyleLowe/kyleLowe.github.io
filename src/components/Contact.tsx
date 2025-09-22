import React from 'react';
import ModalHideButton from './ModalHideButton';
import type ModalProp from '../interface/ModalInterface';

const Contact: React.FC<ModalProp> = ({ onHide }) => {
    return (
        <div>
            <h2>Contact</h2>
            <p>This is the Contact component.</p>
            <ModalHideButton onHide={onHide} />
        </div>
    );
};

export default Contact;