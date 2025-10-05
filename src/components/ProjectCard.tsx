import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";

export interface ProjectCardProps {
  title: string;
  description?: string;
  image?: string;
  alt?: string;
  onClick?: () => void;
}

/**
 * A reusable project card component with a hover overlay effect.
 * Title is always visible; description fades in on hover.
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
        boxShadow: 4,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 8,
        },
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
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={{
            width: "100%",
            height: 220,
            objectFit: "cover",
            transition: "transform 0.4s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        />
      )}

      {/* Gradient overlay */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
          opacity: 0.7,
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
          zIndex: 2,
        }}
      >
        {/* Title — always visible */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </Typography>

        {/* Description — fade/slide in on hover */}
        {description && (
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
            {description}
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default ProjectCard;
