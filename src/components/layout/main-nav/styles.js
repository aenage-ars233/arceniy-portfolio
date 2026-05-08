import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
  @media (max-width: 768px) {
    ${({ $isOpened }) => $isOpened ? `
      position: absolute;
      top: 61px;
      left: 0;
      width: 100%;
    ` : `
      display: none;
    `}
  }

  @media (min-width: 768px) {
    width: 600px;
  }

  @media (min-width: 1440px) {
    width: 1000px;
  }
`;

export const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid #F0EBFF;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    border: none;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    column-gap: 20px;
  }
`;

export const NavigationLink = styled(Link)`
  display: block;
  padding: 20px;
  border-bottom: 1px solid #F0EBFF;
  text-align: center;
  color: #333333;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;

  &:hover {
    color: #7859CF;
  }

  &:active {
    color: #7859CF;
    background-color: #F0EBFF;
  }

  @media (min-width: 768px) {
    border: none;
    padding: 32px 20px;
  }
`;