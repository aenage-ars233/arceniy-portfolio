import React from "react";
import { Navigation, NavigationList, NavigationLink } from "./styles";

export default function MainNav({ isOpened }) {
  return (
    <Navigation $isOpened={isOpened}>
      <NavigationList>
        <li>
          <NavigationLink to="/#projects">Проекты</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/#skills">Навыки</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/#certificates">Сертификаты</NavigationLink>
        </li>
      </NavigationList>
    </Navigation>
  );
}