import styled from "styled-components";

export const StyledPromo = styled.section`
  padding: 40px 20px 44px;
  background-color: rgba(120, 89, 207, 0.15);

  @media (min-width: 768px) {
    padding: 80px 20px 90px;
  }

  @media (min-width: 1440px) {
    padding: 100px 20px 120px;
  }
`;

export const PromoWrapper = styled.div`
  width: 320px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 728px;
  }

  @media (min-width: 1440px) {
    width: 1400px;
  }
`;

export const PromoTitle = styled.h2`
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

export const PromoText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }

  @media (min-width: 1440px) {
  }
`;