import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { MenuList, MenuElement } from "./menu.styled";

const Menu = () => {
  const { t } = useTranslation();

  const isAboutSectionOnTheScreen = useSelector(
    (state) => state.aboutVisibility.isAboutSectionOnTheScreen
  );

  const isEducationSectionOnTheScreen = useSelector(
    (state) => state.educationVisibility.isEducationSectionOnTheScreen
  );

  const isExperienceSectionOnTheScreen = useSelector(
    (state) => state.experienceVisibility.isExperienceSectionOnTheScreen
  );

  const isProjectsSectionOnTheScreen = useSelector(
    (state) => state.projectsVisibility.isProjectsSectionOnTheScreen
  );

  return (
    <MenuList>
      <MenuElement isHighlighted={isAboutSectionOnTheScreen}>
        {t("menu.about")}
      </MenuElement>
      <MenuElement isHighlighted={isExperienceSectionOnTheScreen}>
        {t("menu.experience")}
      </MenuElement>
      <MenuElement isHighlighted={isEducationSectionOnTheScreen}>
        {t("menu.education")}
      </MenuElement>
      <MenuElement isHighlighted={isProjectsSectionOnTheScreen}>
        {t("menu.projects")}
      </MenuElement>
    </MenuList>
  );
};

export default Menu;
