import styled from "styled-components";

export const StyledCertificates = styled.section`
  padding: 50px 20px 60px;

  @media (min-width: 768px) {
    padding: 60px 20px 100px;
  }
`;

export const CertificatesWrapper = styled.div`
  width: 320px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 748px;
  }

  @media (min-width: 1440px) {
    width: 1400px;
  }
`;

export const CertificatesTitle = styled.h2`
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

export const CertificatesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px 30px;
  }
`;

export const CertificateImage = styled.img`
  width: 280px;
  height: 393px;

  @media (min-width: 768px) {
    width: 355px;
    height: 500px;
  }
`;