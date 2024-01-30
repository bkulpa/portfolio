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
      <MenuElement>{t("menu.about")}</MenuElement>
      <MenuElement
        style={{
          color: isMenuSectionOnTheScreen
            ? "rgb(215, 223, 238)"
            : "rgb(148, 163, 184)",
        }}
      >
        {t("menu.experience")}
      </MenuElement>
      <MenuElement>{t("menu.courses")}</MenuElement>
      <MenuElement>{t("menu.projects")}</MenuElement>
    </MenuList>
  );
};

export default Menu;
