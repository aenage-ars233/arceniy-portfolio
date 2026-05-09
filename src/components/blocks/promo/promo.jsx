import React from "react";
import { StyledPromo, PromoWrapper, PromoTitle, PromoText } from "./styles";

export default function Promo() {
  return (
    <StyledPromo>
      <PromoWrapper>
        <PromoTitle>Всем привет!</PromoTitle>
        <PromoText>Здесь вы можете посмотреть все мои проекты, которые я сделал в HTML Academy. Самые разнообразные - 
        от простой вёрстки HTML/CSS до оживленных мини-приложений React.</PromoText>
      </PromoWrapper>
    </StyledPromo>
  );
}