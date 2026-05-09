import React from "react";
import { StyledCard, CardLink, CardImage, CardTitle, CardText, CardLevel, CardButton } from "./styles";

export default function Card({ project }) {
  return (
    <StyledCard>
      <CardLink href={project.link} target="_blank">
        <CardImage src={project.image} alt="" />
        <CardTitle>{project.name}</CardTitle>
      </CardLink>
      <div>
        <CardText>{project.description}</CardText>
        <CardLevel $level={project.level}>
          {project.level === 0 && "Очень лёгкий"}
          {project.level === 1 && "Лёгкий"}
          {project.level === 2 && "Средний"}
          {project.level === 3 && "Сложный"}
        </CardLevel>
      </div>
      <CardButton $variant="primary" href={project.link} target="_blank">Посмотреть</CardButton>
    </StyledCard>
  );
}