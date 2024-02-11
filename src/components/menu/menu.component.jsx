import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { MenuList, MenuElement } from "./menu.styled";

const Menu = () => {
  const { t } = useTranslation();
  const isAboutSectionOnTheScreen = useSelector(
    (state) => state.visibility.isAboutSectionOnTheScreen
  );

  return (
    <MenuList>
      <MenuElement isHighlighted={isAboutSectionOnTheScreen}>
        {t("menu.about")}
      </MenuElement>
      <MenuElement>{t("menu.experience")}</MenuElement>
      <MenuElement>{t("menu.education")}</MenuElement>
      <MenuElement>{t("menu.projects")}</MenuElement>
    </MenuList>
  );
};

export default Menu;
