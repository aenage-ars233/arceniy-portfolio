import styled from "styled-components";
import arrow from "../../../assets/slider-arrow.svg";

export const StyledCategory = styled.div`
  width: 100%;
`;

export const CategoryHeader = styled.button`
  width: 100%;
  border: none;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: rgba(120, 89, 207, 0.15);
  border-radius: 10px;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("${arrow}");
    background-repeat: no-repeat;
    background-posistion: center;
    rotate: ${({ $isOpened }) => $isOpened ? "270deg" : "180deg"};
  }

  @media (min-width: 768px) {
    padding: 20px 35px;
  }

  @media (min-width: 1440px) {
    padding: 25px 40px;
  }
`;

export const CategoryTitle = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 36px;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

export const CategoryContent = styled.div`
  display: ${({ $isOpened }) => $isOpened ? "block" : "none"};
  padding: 20px;
  background-color: #f8f8f8;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1440px) {
    padding: 40px 30px;
  }
`;

export const CategoryText = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 16px;

  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const CardsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px 20px;
  }

  @media (min-width: 1440px) {
    gap: 50px 40px;
  }
`;
