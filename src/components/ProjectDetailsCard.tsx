// ProjectDetailsCard.tsx
import React from "react";
import type ProjectDetailsInterface from "../interface/ProjectDetailsInterface";
import { Grid, Stack } from "@mui/material";

const ProjectDetailsCard: React.FC<ProjectDetailsInterface> = ({
  title,
  description,
  date,
  location,
  githubLink,
  technologies,
  image,
  learnings,
}) => {
  return (
    <div className="rounded-2xl shadow-md border p-4 bg-white hover:shadow-lg transition">
      <div className="flex justify-between text-xs text-gray-500">
        <Grid container spacing={2}>
          <Grid size={4}>
            <Stack spacing={1}>
              {technologies && <span>{technologies.join(", ")}</span>}
              {date && <span>{date}</span>}
              {location && <span>{location}</span>}
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </Stack>
          </Grid>
          <Grid size={8}>
            {image && (
              <img
                src={image}
                alt={title}
                className="mb-2"
                style={{
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                  maxHeight: "40vh", // constrain to modal height
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            )}
          </Grid>
        </Grid>

        {description && <span>{description}</span>}

        {learnings && <span>{learnings.join(", ")}</span>}
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
