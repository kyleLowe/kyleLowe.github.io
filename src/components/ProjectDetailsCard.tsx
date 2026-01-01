// ProjectDetailsCard.tsx
import React from "react";
import { Grid, Stack } from "@mui/material";
import type ProjectDetails from "../interface/ProjectDetailsInterface";

const ProjectDetailsCard: React.FC<ProjectDetails> = ({
  title,
  description,
  date,
  technologies,
  image,
  // @ts-ignore
  location,
  // @ts-ignore
  githubLink,
  // The following may not exist on all interfaces, so we use type assertion or optional chaining
  // @ts-ignore
  linkToCompany,
  // @ts-ignore
  company,
  // @ts-ignore
  course,
}) => {
  return (
    <div className="">
      <div className="">
        <Grid container spacing={2}>
          <Grid size={4}>
            <Stack spacing={1}>
              {location && <span>Location: {location}</span>}
              {date && <span>Date: {date}</span>}
              {technologies && (
                <span>Tech Stack: {technologies.join(", ")}</span>
              )}
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  Link to Gihub Repository
                </a>
              )}
              {linkToCompany && (
                <a
                  href={linkToCompany}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Company Website
                </a>
              )}
            </Stack>
          </Grid>
          <Grid size={8}>
            {image && (
              <img src={image} alt={title} className="project-details-image" />
            )}
          </Grid>
          <Stack spacing={1}>
            {description && <span>{description}</span>}

            {/* {learnings && <span>{learnings.join(", ")}</span>} */}
          </Stack>
        </Grid>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
