import React, { useState } from "react";
import ModalHideButton from "./ModalHideButton";
import type ModalProp from "../interface/ModalInterface";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectCard from "./ProjectCard";
import ProjectDetailsCard from "./ProjectDetailsCard";
import type ProjectDetails from "../interface/ProjectDetailsInterface";
import getProjectDescriptionData from "../utils/ProjectDescriptions";

const Projects: React.FC<ModalProp> = ({ onHide }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(
    null
  );

  const handleProjectClick = (project: ProjectDetails) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };
  return (
    <div>
      <div className="overlay"></div>
      <div className="window">
        <div className="window__title-bar">
          <span className="window__title">Projects</span>
          <ModalHideButton onHide={onHide} />
        </div>

        <div className="window__body">
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
                  description="I developed an internal admin tool that is used by staff to manage data at the company as well as day to day operations."
                  image="/textures/projects/work/Hidden.jpg"
                  onClick={() =>
                    handleProjectClick(getProjectDescriptionData("hidden"))
                  }
                />
              </Grid>
              <Grid size={4}>
                <ProjectCard
                  title="Bed Fall Detection Sensor"
                  alt=""
                  description="I developed a bed fall detection sensor to use AI to detect when a patient would potentially fall out of bed."
                  image="/textures/projects/work/Chinougijutsu.jpg"
                  onClick={() =>
                    handleProjectClick(
                      getProjectDescriptionData("chinougijutsu")
                    )
                  }
                />
              </Grid>
            </Grid>
          </Box>

          {/* === Personal Projects === */}
          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Personal Projects
            </Typography>
            <Grid container spacing={2}>
              <Grid size={4}>
                <ProjectCard
                  title="7 Days DevOps Challenge"
                  alt=""
                  description="I've done a 7 day DevOps challenged designed by nextwork to learn more about DevOps and AWS"
                  image="/textures/projects/personal/7daysDevOps.png"
                  onClick={() =>
                    handleProjectClick(getProjectDescriptionData("7daysDevOps"))
                  }
                />
              </Grid>
              <Grid size={4}>
                <ProjectCard
                  title="Bed Fall Detection Sensor"
                  alt=""
                  description="I developed a bed fall detection sensor to use AI to detect when a patient would potentially fall out of bed."
                  image="/textures/projects/work/Chinougijutsu.jpg"
                  onClick={() =>
                    handleProjectClick(
                      getProjectDescriptionData("chinougijutsu")
                    )
                  }
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
                <ProjectCard
                  title="Part 4 Project - Common Software Vulnerabilities"
                  alt=""
                  description="I developed an internal admin tool that is used by staff to manage data at the company as well as day to day operations."
                  image="/textures/projects/work/Hidden.jpg"
                />
              </Grid>
              <Grid size={4}>
                <ProjectCard
                  title="Pantry Pals"
                  alt=""
                  description="I developed an internal admin tool that is used by staff to manage data at the company as well as day to day operations."
                  image="/textures/projects/work/Hidden.jpg"
                />
              </Grid>
              <Grid size={4}>
                <ProjectCard
                  title="Munch Match"
                  alt=""
                  description="I developed an internal admin tool that is used by staff to manage data at the company as well as day to day operations."
                  image="/textures/projects/work/Hidden.jpg"
                />
              </Grid>
              <Grid size={4}>
                <ProjectCard
                  title="Quick draw"
                  alt=""
                  description="I developed an internal admin tool that is used by staff to manage data at the company as well as day to day operations."
                  image="/textures/projects/work/Hidden.jpg"
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>

      {/* Modal to display more details on the project */}
      {selectedProject && (
        <>
          <div
            className="project-details-overlay"
            onClick={handleCloseDetails}
            aria-hidden="true"
          />
          <div
            className="window project-details-window"
            role="dialog"
            aria-modal="true"
          >
            <div className="window__title-bar">
              <span className="window__title">{selectedProject.title}</span>
              <ModalHideButton onHide={handleCloseDetails} />
            </div>
            <div className="window__body">
              <ProjectDetailsCard {...selectedProject} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
