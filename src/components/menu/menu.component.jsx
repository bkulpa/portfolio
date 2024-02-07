import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { MenuList, MenuElement } from "./menu.styled";

const Menu = () => {
  const { t } = useTranslation();
  const isMenuSectionOnTheScreen = useSelector(
    (state) => state.visibility.isMenuSectionOnTheScreen
  );

  return (
    <MenuList>
      <MenuElement isHighlighted={isMenuSectionOnTheScreen}>
        {t("menu.about")}
      </MenuElement>
      <MenuElement>{t("menu.experience")}</MenuElement>
      <MenuElement>{t("menu.courses")}</MenuElement>
      <MenuElement>{t("menu.projects")}</MenuElement>
    </MenuList>
  );
};

export default Menu;
