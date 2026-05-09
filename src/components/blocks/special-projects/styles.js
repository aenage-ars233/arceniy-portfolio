import styled from "styled-components";
import arrow from "../../../assets/slider-arrow.svg";
import Button from "../../ui/button/button";

export const StyledSpecialProjects = styled.section`
  padding: 20px 20px 60px;
  background-color: #F3EBE1;

  @media (min-width: 768px) {
    padding: 60px 20px;
  }

  @media (min-width: 1440px) {
    padding: 30px 20px 50px;
  }
`;

export const SpecialProjectsWrapper = styled.div`
  width: 320px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;

export const SpecialProjectsTitle = styled.h2`
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

export const Slider = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 320px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;

export const SliderPrev = styled.button`
  display: flex;
  width: 20px;
  border: none;
  min-height: 100px;
  background-color: transparent;
  background-image: url("${arrow}");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(120, 89, 207, 0.2);
  }

  &:active {
    background-color: rgba(120, 89, 207, 0.3);
  }

  @media (min-width: 768px) {
    width: 80px;
  }
`;

export const SliderNext = styled(SliderPrev)`
  rotate: 180deg;
`;

export const SliderList = styled.ul`
  width: 280px;
  padding: 0;
  margin: 0 auto;
  list-style: none;

  @media (min-width: 768px) {
    width: 600px;
  }

  @media (min-width: 1440px) {
    width: 1280px;
  }
`;

export const SliderItem = styled.li`
  display: ${({ $isCurrent }) => $isCurrent ? 'block' : 'none'};

  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
  }
`;

export const SliderImage = styled.img`
  display: block;
  width: 280px;
  height: 140px;
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 600px;
    height: 302px;
  }

  @media (min-width: 1440px) {
    width: 550px;
    height: 277px;
  }
`;

export const SliderTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 22px;
  line-height: 34px;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 15px;
    font-size: 30px;
    line-height: 38px;
  }

  @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const SliderText = styled.p`
  margin: 0;
  margin-bottom: 18px;
  text-align: center;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
    font-size: 20px;
    line-height: 32px;
  }

  @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const SliderProperties = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 10px;
  font-weight: 700;

  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 32px;
  }
`;

export const SliderButton = styled(Button)`
  width: 100%;

  @media (min-width: 1440px) {
    width: 400px;
  }
`;
