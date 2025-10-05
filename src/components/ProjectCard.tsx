import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

export interface ProjectCardProps {
  title: string;
  description?: string;
  image?: string;
  alt?: string;
  onClick?: () => void;
}

/**
 * A reusable project card component.
 * Displays an image with an overlaid title and optional description.
 */
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
      }}
    >
      {/* Project image */}
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={{ width: "100%", height: 220, objectFit: "cover" }}
        />
      )}

      {/* Text overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          color: "white",
          p: 2,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {description}
          </Typography>
        )}
      </Box>

      {/* Optional content slot */}
      <CardContent>{/* Future custom elements */}</CardContent>
    </Card>
  );
};

export default ProjectCard;
