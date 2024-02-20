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
      <MenuElement isHighlighted={highlightedSection === "about"}>
        <MenuElementLink href="#about">{t("menu.about")}</MenuElementLink>
      </MenuElement>
      <MenuElement isHighlighted={highlightedSection === "experience"}>
        <MenuElementLink href="#experience">
          {t("menu.experience")}
        </MenuElementLink>
      </MenuElement>
      <MenuElement isHighlighted={highlightedSection === "education"}>
        <MenuElementLink href="#education">
          {t("menu.education")}
        </MenuElementLink>
      </MenuElement>
      <MenuElement isHighlighted={highlightedSection === "projects"}>
        <MenuElementLink href="#projects">{t("menu.projects")}</MenuElementLink>
      </MenuElement>
    </MenuList>
  );
};

export default Menu;
