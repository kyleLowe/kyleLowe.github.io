import React, { useState } from "react";
import ModalHideButton from "./ModalHideButton";
import type ModalProp from "../interface/ModalInterface";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectCard from "./ProjectCard";
import ProjectDetailsCard from "./ProjectDetailsCard";
import type ProjectDetailsInterface from "../interface/ProjectDetailsInterface";

const Projects: React.FC<ModalProp> = ({ onHide }) => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectDetailsInterface | null>(null);

  const handleProjectClick = (project: ProjectDetailsInterface) => {
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
                    handleProjectClick({
                      title: "Internal Admin Tool",
                      description:
                        "I developed an internal admin tool that helps staff manage data and daily operations efficiently.",
                      date: "January 2025 - March 2025",
                      location: "Hidden - Singapore",
                      image: "/textures/projects/work/Hidden.jpg",
                      technologies: [
                        "React",
                        "TypeScript",
                        "Airtable",
                        "Supabase",
                        "PostgreSQL",
                        "GitHub",
                      ],
                      learnings: [
                        "Working with a React application in a professional setting",
                        "working with legacy code",
                        "working with developing software without a technical background",
                      ],
                    })
                  }
                />
              </Grid>
              <Grid size={4}>
                <ProjectCard
                  title="Bed Fall Detection Sensor"
                  alt=""
                  description="I developed a bed fall detection sensor to use AI to detect when a patient would potentially fall out of bed."
                  image="/textures/projects/work/chinougijutsu.jpg"
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
              <ProjectDetailsCard
                title={selectedProject.title}
                description={selectedProject.description}
                date={selectedProject.date}
                location={selectedProject.location}
                githubLink={selectedProject?.githubLink}
                technologies={selectedProject.technologies}
                image={selectedProject.image}
                learnings={selectedProject.learnings}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
