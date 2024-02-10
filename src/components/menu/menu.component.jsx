import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import MenuSectionFinder from "../../functions/menu-section-finder";

import { MenuList, MenuElement, MenuElementRefContainer } from "./menu.styled";

const Menu = () => {
  const { t } = useTranslation();

  const findRef = (section) => MenuSectionFinder(section);
  const experienceRef = MenuSectionFinder("experience");

  const isAboutSectionOnTheScreen = useSelector(
    (state) => state.visibility.isAboutSectionOnTheScreen
  );

  const isExperienceSectionOnTheScreen = useSelector(
    (state) => state.visibility.isExperienceSectionOnTheScreen
  );

  return (
    <MenuList>
      {/* Użyj referencji `aboutRef` dla elementu, który chcesz śledzić */}
      <MenuElementRefContainer ref={findRef("about")}>
        <MenuElement isHighlighted={isAboutSectionOnTheScreen}>
          {t("menu.about")}
        </MenuElement>
      </MenuElementRefContainer>
      <MenuElementRefContainer ref={findRef("experience")}>
        <MenuElement isHighlighted={isExperienceSectionOnTheScreen}>
          {t("menu.experience")}
        </MenuElement>
      </MenuElementRefContainer>
      <MenuElementRefContainer ref={findRef("education")}>
        <MenuElement>{t("menu.courses")}</MenuElement>
      </MenuElementRefContainer>
      <MenuElementRefContainer ref={findRef("projects")}>
        <MenuElement>{t("menu.projects")}</MenuElement>
      </MenuElementRefContainer>
    </MenuList>
  );
};

export default Menu;
