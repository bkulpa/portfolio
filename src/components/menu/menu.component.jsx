import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { MenuList, MenuElement } from "./menu.styled";

const Menu = () => {
  const isMenuSectionOnTheScreen = useSelector(
    (state) => state.visibility.isMenuSectionOnTheScreen
  );

  return (
    <MenuList>
      <MenuElement>menu1</MenuElement>
      <MenuElement
        style={{
          color: isMenuSectionOnTheScreen
            ? "rgb(215, 223, 238)"
            : "rgb(148, 163, 184)",
        }}
      >
        menu2
      </MenuElement>
      <MenuElement>menu3</MenuElement>
      <MenuElement>menu4</MenuElement>
    </MenuList>
  );
};

export default Menu;
