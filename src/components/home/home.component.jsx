import { useTranslation } from "react-i18next";

import MenuSectionFinder from "../../functions/menu-section-finder/menu-section-finder";

import { LeftContainer, RightContainer, SplitContainer } from "./home.styles";
import StyledP from "../styled-p-tag/styled-p.styles";

import Header from "../header/header.component";

const Home = () => {
  const { t } = useTranslation();
  const findMenuSection = MenuSectionFinder();

  return (
    <SplitContainer>
      <LeftContainer>
        <Header />
      </LeftContainer>
      <RightContainer>
        <div style={{ maxWidth: "528px" }}>
          <StyledP ref={findMenuSection}>{t("home.aboutMe.part-1")}</StyledP>
          <StyledP>{t("home.aboutMe.part-2")}</StyledP>
          <StyledP>{t("home.aboutMe.part-3")}</StyledP>
        </div>
      </RightContainer>
    </SplitContainer>
  );
};

export default Home;
