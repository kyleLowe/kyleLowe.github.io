import React from "react";
import ModalHideButton from "../ModalHideButton";
import type ModalProp from "../../interface/ModalInterface";

const Home: React.FC<ModalProp> = ({ onHide }) => {
  return (
    <div>
      <div className="overlay"></div>
      <div className="window">
        <div className="window__title-bar">
          <span className="window__title">Home</span>
          <ModalHideButton onHide={onHide} />
        </div>
        <div className="window__body">
          <p>
            Hi, and welcome to my portfolio website, where you can learn more
            about me and the work and projects that I have done. To get around
            the website, click the buttons on the right-hand side of the 3d
            room. To view the 3d room, drag your mouse around to rotate the room
            and use your middle mouse button to zoom in and out. To pan around
            the 3d model, hold Shift and drag your mouse to keep the rotation
            the same.
          </p>
          <br />
          <p>You can find more about me on the about page. </p>
          <br />
          <p>
            You can find my previous work and personal projects on the project
            page.
          </p>
          <br />
          <p>
            You can find my GitHub and contact details by clicking the icons on
            the shelf or on the contact page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
