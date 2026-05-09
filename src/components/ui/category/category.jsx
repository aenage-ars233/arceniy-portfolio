import React, { useState } from "react";
import Card from "../card/card";
import { StyledCategory, CategoryHeader, CategoryTitle, CategoryContent, CategoryText, CardsList } from "./styles";

export default function Category({ category }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <StyledCategory>
      <CategoryHeader $isOpened={isOpened} onClick={() => setIsOpened(!isOpened)}>
        <CategoryTitle>{category.title}</CategoryTitle>
      </CategoryHeader>
      <CategoryContent $isOpened={isOpened}>
        <CategoryText>{category.description}</CategoryText>
        <CardsList>
          {category.projects.map((project) => (
            <li>
              <Card project={project} />
            </li>
          ))}
        </CardsList>
      </CategoryContent>
    </StyledCategory>
  );
}