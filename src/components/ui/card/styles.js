import styled from "styled-components";
import Button from "../button/button";

export const StyledCard = styled.div`
  display: grid;
  grid-template-rows: min-content auto min-content;
  padding: 40px 20px 20px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    width: 330px;
    height: 100%;
  }

  @media (min-width: 1440px) {
    width: 400px;
  }
`;

export const CardLink = styled.a`
  display: block;
  margin-bottom: 10px;
  color: #333333;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    margin-bottom: 22px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 25px;
  }
`;

export const CardImage = styled.img`
  display: block;
  margin-bottom: 24px;
  width: 280px;

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1440px) {
    width: 360px;
  }
`;

export const CardTitle = styled.h4`
  margin: 0;
  text-align: center;
  font-size: 18px;
  line-height: 22px;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

export const CardText = styled.p`
  margin: 0;
  margin-bottom: 22px;
  text-align: center;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CardLevel = styled.b`
  display: block;
  margin-bottom: 22px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ $level }) => $level === 0 && "#235bf3"};
  color: ${({ $level }) => $level === 1 && "#218621"};
  color: ${({ $level }) => $level === 2 && "#e69809"};
  color: ${({ $level }) => $level === 3 && "#e61809"};

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const CardButton = styled(Button)`
  width: 100%;
`;