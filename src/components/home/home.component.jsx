import { useTranslation } from "react-i18next";

import MenuSectionFinder from "../../functions/menu-section-finder";

import { LeftContainer, RightContainer, SplitContainer } from "./home.styles";
import StyledP from "../styled-tags/styled-p.styles";

import Header from "../header/header.component";
import ExperienceField from "../experience-field/experience-field.component";

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
        <div>
          <ExperienceField
            jobDescription={"home.experienceField.jobDescription-1"}
            jobTitle={"home.experienceField.jobTitle-1"}
            jobTech={"home.experienceField.jobTech-1"}
          />
        </div>
      </RightContainer>
    </SplitContainer>
  );
};

export default Home;
