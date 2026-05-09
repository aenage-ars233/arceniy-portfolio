import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #333333;
  color: #ffffff;
  padding: 30px 20px;
`;

export const FooterWrapper = styled.div`
  width: 280px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    width: 728px;
  }

  @media (min-width: 1440px) {
    width: 1400px;
  }
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
  }

  @media (min-width: 1440px) {
    font-size: 20px;
    line-height: 32px;
  }
`;