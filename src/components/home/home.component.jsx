import { useTranslation } from "react-i18next";

import MenuSectionFinder from "../../functions/menu-section-finder";

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
          <StyledP
            ref={findMenuSection}
            dangerouslySetInnerHTML={{ __html: t("home.aboutMe.part-1") }}
          />
          <StyledP
            dangerouslySetInnerHTML={{ __html: t("home.aboutMe.part-2") }}
          />
          <StyledP
            dangerouslySetInnerHTML={{ __html: t("home.aboutMe.part-3") }}
          />
        </div>
      </RightContainer>
    </SplitContainer>
  );
};

export default Home;
