import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";

//Card component to show detailed information about a project which the user can click to view more details about the project.
export interface ProjectCardProps {
  title: string;
  description?: string;
  image?: string;
  alt?: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  alt = "",
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
        boxShadow: 4,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 8,
        },
        "&:hover .description": {
          opacity: 1,
          transform: "translateY(0)",
          maxHeight: "200px", // allow smooth expansion
        },
      }}
    >
      {/* Background Image */}
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={{
            width: "100%",
            height: 220,
            objectFit: "contain",
            transition: "transform 0.4s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        />
      )}

      {/* Text container */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          color: "white",
          p: 2,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.25))",
          boxShadow: "0 -4px 10px rgba(0,0,0,0.4)",
          backdropFilter: "blur(2px)",
          transition: "padding-bottom 0.3s ease",
        }}
      >
        {/* Fixed-position title */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            textShadow: "0 2px 4px rgba(0,0,0,0.6)",
            mb: 0.5,
          }}
        >
          {title}
        </Typography>

        {/* Expanding description */}
        {description && (
          <Typography
            className="description"
            variant="body2"
            sx={{
              opacity: 0,
              transform: "translateY(10px)",
              transition: "all 0.3s ease",
              textShadow: "0 2px 4px rgba(0,0,0,0.6)",
              lineHeight: 1.3,
              overflow: "hidden",
              maxHeight: 0, // collapsed by default
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default ProjectCard;
