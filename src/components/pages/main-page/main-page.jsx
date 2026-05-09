import React from "react";
import { skills } from "../../../data/skills";
import { certificates } from "../../../data/certificates";

import Promo from "../../blocks/promo/promo";
import Skills from "../../blocks/skills/skills";
import Certificates from "../../blocks/certificates/certificates";
import SpecialProjects from "../../blocks/special-projects/special-projects";

export default function MainPage() {
  return (
    <>
      <h1 className="visually-hidden">Портфолио проектов Арсения Надёжнова</h1>
      <Promo />
      <Skills skills={skills} />
      <Certificates certificates={certificates} />
      <SpecialProjects />
    </>
  );
}