import styled from "styled-components";

const Button = styled.a`
  ${({ $variant }) => $variant === 'secondary' && `
    display: inline-block;
    padding: 8px 20px;
    background-color: #ffffff;
    border-radius: 4px;
    color: #7859CF;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;

    &:hover {
      background-color: #9070EC;
      color: #ffffff;
    }

    &:active {
      background-color: #593CAC;
      color: #ffffff;
    }
  `}
`;

export default Button;