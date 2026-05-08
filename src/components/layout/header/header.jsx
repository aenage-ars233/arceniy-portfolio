import React, { useState } from "react";
import { StyledHeader, HeaderWrapper, ToggleButton } from "./styles";
import Logo from "../../ui/logo/logo";
import MainNav from "../main-nav/main-nav";

export default function Header() {
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <StyledHeader>
      <HeaderWrapper>
        <Logo />
        <ToggleButton type="button" onClick={() => setOpenedMenu(!openedMenu)}>
          <span className="visually-hidden">Открыть меню</span>
        </ToggleButton>
        <MainNav isOpened={openedMenu} />
      </HeaderWrapper>
    </StyledHeader>
  );
}