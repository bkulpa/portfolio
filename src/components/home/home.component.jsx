import { useTranslation } from "react-i18next";

import MenuSectionFinder from "../../functions/menu-section-finder";

import { LeftContainer, RightContainer, SplitContainer } from "./home.styles";
import StyledP from "../styled-tags/styled-p.styles";

import Header from "../header/header.component";
import ExperienceField from "../experience-field/experience-field.component";
import StyledH3 from "../styled-tags/styled-h3.styles";
import {
  CVLink,
  ExperienceFieldMainBox,
} from "../experience-field/experience-field.styles";

const Home = () => {
  const { t } = useTranslation();
  const findMenuSection = MenuSectionFinder();

  return (
    <SplitContainer>
      <LeftContainer>
        <Header />
      </LeftContainer>
      <RightContainer>
        <div style={{ maxWidth: "528px", marginBottom: "144px" }}>
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
            jobDate={"home.experienceField.jobDate-1"}
            jobDescription={"home.experienceField.jobDescription-1"}
            jobTitle={"home.experienceField.jobTitle-1"}
            jobTech={"home.experienceField.jobTech-1"}
          />
          <ExperienceField
            jobDate={"home.experienceField.jobDate-2"}
            jobDescription={"home.experienceField.jobDescription-2"}
            jobTitle={"home.experienceField.jobTitle-2"}
            jobTech={"home.experienceField.jobTech-2"}
          />
          <ExperienceField
            jobDate={"home.experienceField.jobDate-3"}
            jobDescription={"home.experienceField.jobDescription-3"}
            jobTitle={"home.experienceField.jobTitle-3"}
            jobTech={"home.experienceField.jobTech-3"}
          />
          <ExperienceField
            jobDate={"home.experienceField.jobDate-3"}
            jobDescription={"home.experienceField.jobDescription-3"}
            jobTitle={"home.experienceField.jobTitle-3"}
            jobTech={"home.experienceField.jobTech-3"}
          />
          <ExperienceFieldMainBox>
            <CVLink
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Resume
            </CVLink>
          </ExperienceFieldMainBox>
          <ExperienceField
            jobDate={"home.experienceField.jobDate-3"}
            jobDescription={"home.experienceField.jobDescription-3"}
            jobTitle={"home.experienceField.jobTitle-3"}
            jobTech={"home.experienceField.jobTech-3"}
          />
        </div>
      </RightContainer>
    </SplitContainer>
  );
};

export default Home;
