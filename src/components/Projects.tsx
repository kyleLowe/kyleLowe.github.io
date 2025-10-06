import React from "react";
import ModalHideButton from "./ModalHideButton";
import type ModalProp from "../interface/ModalInterface";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectCard from "./ProjectCard";

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
          {/* === Personal Projects === */}
          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Personal Projects
            </Typography>
            <Grid container spacing={2}>
              <Grid size={4}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h6">Project 1</Typography>
                    <Typography>Description of Project 1</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid size={4}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h6">Project 2</Typography>
                    <Typography>Description of Project 2</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* === Work Projects === */}
          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Work Projects
            </Typography>

            <Grid container spacing={2}>
              <Grid size={4}>
                <ProjectCard
                  title="Internal Admin Tool"
                  alt=""
                  description="Internal Admin Tool at Hidden SG"
                  image="/textures/projects/work/Hidden.jpg"
                />
              </Grid>
            </Grid>
          </Box>

          {/* === University Projects === */}
          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              University Projects
            </Typography>
            <Grid container spacing={2}>
              <Grid size={4}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h6">Project 4</Typography>
                    <Typography>Description of Project 4</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Projects;
