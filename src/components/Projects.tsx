import React from "react";
import ModalHideButton from "./ModalHideButton";
import type ModalProp from "../interface/ModalInterface";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

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
                <Card
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 2,
                    cursor: "pointer",
                    boxShadow: 4,
                    "&:hover .overlay": {
                      opacity: 1,
                    },
                    "&:hover .description": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  }}
                >
                  {/* Background Image */}
                  <CardMedia
                    component="img"
                    image="/textures/projects/work/Hidden.jpg"
                    alt="Project 3"
                    sx={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />

                  {/* Gradient overlay */}
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
                      opacity: 0.6,
                      transition: "opacity 0.3s ease",
                    }}
                  />

                  {/* Text container (always visible title, hidden description) */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      color: "white",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    {/* Title — always visible */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                        zIndex: 2,
                      }}
                    >
                      Project 3
                    </Typography>

                    {/* Description — fades in on hover */}
                    <Typography
                      className="description"
                      variant="body2"
                      sx={{
                        opacity: 0,
                        transform: "translateY(10px)",
                        transition: "all 0.3s ease",
                        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                        lineHeight: 1.3,
                      }}
                    >
                      Description of Project 3 — this appears when you hover,
                      giving users more context without cluttering the default
                      view.
                    </Typography>
                  </Box>
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
