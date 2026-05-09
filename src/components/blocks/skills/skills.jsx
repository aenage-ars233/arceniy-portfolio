import React from "react";
import Button from "../../ui/button/button";
import { StyledSkills, SkillsWrapper, SkillsTitle, SkillsList, SkillsItem, SkillItemTitle, SkillItemText } from "./styles";

export default function Skills({ skills = [] }) {
  return skills.length > 0 ? (
    <StyledSkills id="skills">
      <SkillsWrapper>
        <SkillsTitle>Мои навыки</SkillsTitle>
        <SkillsList>
          {skills.map((skill) => (
            <SkillsItem>
              <SkillItemTitle>{skill.name}</SkillItemTitle>
              <SkillItemText>{skill.description}</SkillItemText>
              <Button $variant="secondary" href={skill.link}>Посмотреть курс</Button>
            </SkillsItem>
          ))}
        </SkillsList>
      </SkillsWrapper>
    </StyledSkills>
  ) : <></>;
}