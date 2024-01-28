import { useTranslation } from "react-i18next";

import StyledH1 from "../styled-h-tags/styled-h1/styled-h1.styles";
import StyledH2 from "../styled-h-tags/styled-h2/styled-h2.styles";
import StyledP from "../styled-p-tag/styled-p.component";

const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <StyledH1>{t("home.nameAndSurname")}</StyledH1>
      <StyledH2>{t("home.jobTitle")}</StyledH2>
      <div style={{ maxWidth: "320px" }}>
        <StyledP>{t("home.jobTitleDescription")}</StyledP>
      </div>
    </>
  );
};

export default Header;
