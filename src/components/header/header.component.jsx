import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Menu from "../menu/menu.component";
import StyledH1 from "../styled-h-tags/styled-h1/styled-h1.styles";
import StyledH2 from "../styled-h-tags/styled-h2/styled-h2.styles";
import StyledP from "../styled-p-tag/styled-p.styles";

const Header = () => {
  const { t } = useTranslation();
  const isTest2aVisible = useSelector(
    (state) => state.visibility.isTest2aVisible
  );
  return (
    <>
      <StyledH1>{t("home.nameAndSurname")}</StyledH1>
      <StyledH2>{t("home.jobTitle")}</StyledH2>
      <div style={{ maxWidth: "320px", marginTop: "16px" }}>
        <StyledP>{t("home.jobTitleDescription")}</StyledP>
      </div>
      <Menu />
      {/* <div
        className="test1"
        style={{ backgroundColor: isTest2aVisible ? "red" : "initial" }}
      >
        test1
      </div>
      <div
        className="test2"
        style={{ backgroundColor: isTest2aVisible ? "red" : "initial" }}
      >
        test2
      </div>
      <div className="test3">test3</div> */}
    </>
  );
};

export default Header;
