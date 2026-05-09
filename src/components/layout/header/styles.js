import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #ffffff;
`;

export const HeaderWrapper = styled.div`
  posistion: relative;
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    width: 728px;
  }

  @media (min-width: 1440px) {
    width: 1400px;
  }
`;

export const ToggleButton = styled.button`
  position: relative;
  display: block;
  width: 60px;
  height: 60px;
  border: none;
  cursor: pointer;
  background-color: transparent;

  &::before {
    position: absolute;
    top: 24px;
    left: 22px;
    content: "";
    width: 16px;
    height: 2px;
    background-color: #000000;
    box-shadow: 0 6px 0 0 #000000, 0 12px 0 0 #000000;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;