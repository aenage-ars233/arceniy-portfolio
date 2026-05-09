import React, { useState } from "react";
import { projects } from "../../../data/projects";
import { StyledSpecialProjects, SpecialProjectsWrapper, SpecialProjectsTitle, Slider, SliderPrev, SliderNext, SliderList, SliderItem, SliderImage, SliderTitle, SliderText, SliderProperties, SliderButton } from "./styles";

export default function SpecialProjects() {
  const specialProjects = projects.special;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlerOnPrev = () => {
    let prevSlide = currentSlide - 1;
    if (prevSlide < 0) {
      prevSlide = specialProjects.length - 1;
    }
    setCurrentSlide(prevSlide);
  }

  const handlerOnNext = () => {
    let nextSlide = currentSlide + 1;
    if (nextSlide > (specialProjects.length - 1)) {
      nextSlide = 0;
    }
    setCurrentSlide(nextSlide);
  }

  return specialProjects.length > 0 ? (
    <StyledSpecialProjects>
      <SpecialProjectsWrapper>
        <SpecialProjectsTitle>Особые проекты</SpecialProjectsTitle>
        <Slider>
          <SliderPrev onClick={handlerOnPrev}>
            <span className="visually-hidden">Предыдущий слайд</span>
          </SliderPrev>
          <SliderList>
            {specialProjects.map((specialProject, index) => (
              <SliderItem $isCurrent={index === currentSlide}>
                <SliderImage src={specialProject.image} alt="" />
                <div>
                  <SliderTitle>{specialProject.name}</SliderTitle>
                  <SliderText>{specialProject.description}</SliderText>
                  <SliderProperties>
                    {specialProject.properties.map((property) => (
                      <li>{property}</li>
                    )
                    )}
                  </SliderProperties>
                  <SliderButton $variant="primary" href={specialProject.link} target="_blank">Перейти к просмотру</SliderButton>
                </div>
              </SliderItem>
            ))}
          </SliderList>
          <SliderNext onClick={handlerOnNext}>
            <span className="visually-hidden">Следующий слайд</span>
          </SliderNext>
        </Slider>
      </SpecialProjectsWrapper>
    </StyledSpecialProjects>
  ) : <></>;
}