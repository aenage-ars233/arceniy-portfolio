import React from "react";
import { Navigation, NavigationList, NavigationLink } from "./styles";

export default function MainNav({ isOpened }) {
  return (
    <Navigation $isOpened={isOpened}>
      <NavigationList>
        <li>
          <NavigationLink href="#projects">Проекты</NavigationLink>
        </li>
        <li>
          <NavigationLink href="#skills">Навыки</NavigationLink>
        </li>
        <li>
          <NavigationLink href="#certificates">Сертификаты</NavigationLink>
        </li>
      </NavigationList>
    </Navigation>
  );
}