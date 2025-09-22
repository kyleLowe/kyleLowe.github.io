import React from 'react';
import ModalHideButton from './ModalHideButton';
import type ModalProp from '../interface/ModalInterface';

const Projects: React.FC<ModalProp> = ({ onHide }) => {
    return (
        <div>
            <h2>Projects</h2>
            <p>This is the Projects component.</p>
            <ModalHideButton onHide={onHide} />
        </div>
    );
};

export default Projects;