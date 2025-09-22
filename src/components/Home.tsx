import React from 'react';
import ModalHideButton from './ModalHideButton';
import type ModalProp from '../interface/ModalInterface';


const Home: React.FC<ModalProp> = ({ onHide }) => {
    return (
        <div>
            <h2>Home</h2>
            <p>This is the Home component.</p>
            <ModalHideButton onHide={onHide} />
        </div>
    );
};

export default Home;