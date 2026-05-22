import React from "react";
import Category from "../../ui/category/category";
import { StyledProjects, ProjectsWrapper } from "./styles";

export default function Projects({ categories = [] }) {
  return (
    <StyledProjects id="projects">
      <ProjectsWrapper>
        {categories.map((category) => (
          <Category category={category} />
        ))}
      </ProjectsWrapper>
    </StyledProjects>
  );
}