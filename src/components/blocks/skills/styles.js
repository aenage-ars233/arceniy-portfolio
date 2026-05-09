import styled from "styled-components";

export const StyledSkills = styled.section`
  padding: 50px 20px 60px;

  @media (min-width: 768px) {
    padding: 60px 20px 100px;
  }
`;

export const SkillsWrapper = styled.div`
  width: 320px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 748px;
  }

  @media (min-width: 1440px) {
    width: 1400px;
  }
`;

export const SkillsTitle = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 64px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const SkillsList = styled.ul`
  width: 280px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px 30px;
    justify-content: center;
  }

  @media (min-width: 1440px) {
  }
`;

export const SkillsItem = styled.li`
  width: 280px;
  padding: 10px 5px;
  border: 2px solid #e2e2e2;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 339px;
  }

  @media (min-width: 1440px) {
    width: 318px;
  }
`;

export const SkillItemTitle = styled.h3`
  margin: 0;
  margin-bottom: 4px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;

  @media (min-width: 768px) {
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 36px;
  }
`;

export const SkillItemText = styled.p`
  margin: 0;
  margin-bottom: 15px;
  text-align: center;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;