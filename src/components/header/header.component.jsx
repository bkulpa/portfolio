import { useTranslation } from "react-i18next";

import StyledH1 from "../h-tags/styled-h1/styled-h1.styles";
import StyledH2 from "../h-tags/styled-h2/styled-h2.styles";

const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <StyledH1>{t("home.nameAndSurname")}</StyledH1>
      <StyledH2>{t("home.jobTitle")}</StyledH2>
    </>
  );
};

export default Header;
