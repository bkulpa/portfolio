import { StyledH1 } from "../styled-h1/styled-h1.styles";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return <StyledH1>{t("home.nameAndSurname")}</StyledH1>;
};

export default Header;
