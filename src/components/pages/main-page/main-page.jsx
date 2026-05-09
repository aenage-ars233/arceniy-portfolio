import React from "react";
import { skills } from "../../../data/skills";

import Promo from "../../blocks/promo/promo";
import Skills from "../../blocks/skills/skills";

export default function MainPage() {
  return (
    <>
      <h1 className="visually-hidden">Портфолио проектов Арсения Надёжнова</h1>
      <Promo />
      <Skills skills={skills} />
    </>
  );
}