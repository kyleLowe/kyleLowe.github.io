import React from "react";
import ModalHideButton from "./ModalHideButton";
import type ModalProp from "../interface/ModalInterface";

const About: React.FC<ModalProp> = ({ onHide }) => {
  return (
    <div>
      <div className="overlay"></div>
      <div className="window">
        <div className="window__title-bar">
          <span className="window__title">About</span>
          <ModalHideButton onHide={onHide} />
        </div>
        <div className="window__body">
          <h2>About me</h2>
          <p>
            Hi, my name is Kyle, and I am a recent graduate in software
            engineering from the University of Auckland. At a young age, I'd
            always enjoyed solving problems and joined the programming club at
            the start of college. From there, I knew I wanted to have a career
            in programming, which is why I chose to study software engineering.
            I also had an interest in learning about other cultures, which
            motivated me to seek international work experiences in Japan as an
            AI intern at an AI and robotics start-up company and in Singapore as
            a tech intern for a company that makes self-guided chatbot games to
            show people around the local areas of Singapore. I also like playing
            video games in my spare time, and am currently learning Japanese at
            the moment.
          </p>
          <h2>Career History</h2>
          <p>
            Hidden Singapore - Tech Intern (Jan 2025 - Mar 2025)
            <br />
            Chinougijutsu - AI Intern (Nov 2023 - Feb 2024)
            <br />
            Middlemore Hospital Laboratory - Lab Assisstant(Feb 2022 - Apr 2022)
          </p>

          <h2>Qualifications</h2>
          <p>
            Bachelor of Engineering (Hons) Software, First Class - University of
            Auckland 2021 - 2024 <br />
            Oracle Cloud Infrastructure 2025 Foundations Associate - June 2025{" "}
            <br />
            Fundamentals of Digital Marketing - Google Digital Garage 2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
