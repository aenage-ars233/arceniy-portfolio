import React from "react";
import { StyledCertificates, CertificatesWrapper, CertificatesTitle, CertificatesList, CertificateImage } from "./styles";

export default function Certificates({ certificates = [] }) {
  return certificates.length > 0 ? (
    <StyledCertificates id="certificates">
      <CertificatesWrapper>
        <CertificatesTitle>Сертификаты</CertificatesTitle>
        <CertificatesList>
          {certificates.map((certificate, index) => (
            <li key={index}>
              <CertificateImage src={certificate.image} alt={certificate.alt} width={280} height={393} />
            </li>
          ))}
        </CertificatesList>
      </CertificatesWrapper>
    </StyledCertificates>
  ) : <></>;
}