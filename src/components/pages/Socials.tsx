import React from "react";
import ModalHideButton from "../ModalHideButton";
import type ModalProp from "../../interface/ModalInterface";
import { Grid, Box } from "@mui/material";

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
          <Grid container>
            <Grid size={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                {" "}
                LinkedIn
                <a
                  href="https://www.linkedin.com/in/kyle-lowe-90b232233/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="public/textures/projects/techicons/linkedin.svg"
                    alt="LinkedIn"
                    style={{ width: 128, height: 128, verticalAlign: "middle" }}
                  />
                </a>
              </Box>
            </Grid>
            <Grid size={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                Personal Github
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/kyleLowe"
                >
                  <img
                    src="public/textures/projects/techicons/github.svg"
                    alt="GitHub"
                    style={{ width: 128, height: 128, verticalAlign: "middle" }}
                  />
                </a>{" "}
              </Box>
            </Grid>
            <Grid size={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                {" "}
                University GitHub{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/klow358"
                >
                  <img
                    src="public/textures/projects/techicons/github.svg"
                    alt="GitHub"
                    style={{ width: 128, height: 128, verticalAlign: "middle" }}
                  />
                </a>{" "}
              </Box>
            </Grid>
          </Grid>
          <p>
            <br />

            <br />

            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Socials;
