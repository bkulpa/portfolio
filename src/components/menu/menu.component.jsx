import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { MenuList, MenuElement, MenuElementLink } from "./menu.styled";

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

  const highlightedSection = isAboutSectionOnTheScreen
    ? "about"
    : isExperienceSectionOnTheScreen
    ? "experience"
    : isEducationSectionOnTheScreen
    ? "education"
    : isProjectsSectionOnTheScreen
    ? "projects"
    : null;

  return (
    <MenuList>
      <MenuElementLink href="#about">
        <MenuElement isHighlighted={highlightedSection === "about"}>
          {t("menu.about")}
        </MenuElement>
      </MenuElementLink>
      <MenuElementLink href="#experience">
        <MenuElement isHighlighted={highlightedSection === "experience"}>
          {t("menu.experience")}
        </MenuElement>
      </MenuElementLink>
      <MenuElementLink href="#education">
        <MenuElement isHighlighted={highlightedSection === "education"}>
          {t("menu.education")}
        </MenuElement>
      </MenuElementLink>
      <MenuElementLink href="#projects">
        <MenuElement isHighlighted={highlightedSection === "projects"}>
          {t("menu.projects")}
        </MenuElement>
      </MenuElementLink>
    </MenuList>
  );
};

export default Menu;
