import styled from "styled-components";

export const StyledProjects = styled.section`
  padding: 20px;

  @media (min-width: 1440px) {
    padding: 40px 20px 60px;
  }
`;

export const ProjectsWrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    width: 748px;
    gap: 30px;
  }

  @media (min-width: 1440px) {
    width: 1400px;
  }
`;