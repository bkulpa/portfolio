import { useTranslation } from "react-i18next";

import MenuSectionFinder from "../../functions/menu-section-finder";

import { AboutField } from "../experience-field/experience-field.styles";
import { LeftContainer, RightContainer, SplitContainer } from "./home.styles";
import StyledP from "../styled-tags/styled-p.styles";

import Header from "../header/header.component";
import ExperienceField from "../experience-field/experience-field.component";
import {
  CVLink,
  ExperienceFieldMainBox,
} from "../experience-field/experience-field.styles";

const Home = () => {
  const { t } = useTranslation();
  const findMenuSection = MenuSectionFinder();

  const setInnerHTML = (translation) => {
    return { __html: t(translation) };
  };

  return (
    <SplitContainer>
      <LeftContainer>
        <Header />
      </LeftContainer>
      <RightContainer>
        <AboutField>
          <StyledP
            ref={findMenuSection}
            dangerouslySetInnerHTML={setInnerHTML("home.aboutMe.part-1")}
          />
          <StyledP
            dangerouslySetInnerHTML={setInnerHTML("home.aboutMe.part-2")}
          />
          <StyledP
            dangerouslySetInnerHTML={setInnerHTML("home.aboutMe.part-3")}
          />
        </AboutField>
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
            <CVLink href="resume.pdf" target="_blank" rel="noopener noreferrer">
              {t("home.experienceField.resume")}
            </CVLink>
          </ExperienceFieldMainBox>
          <ExperienceField
            jobDate={"home.educationField.educationDate-1"}
            jobDescription={"home.educationField.educationDescription-1"}
            jobTitle={"home.educationField.educationTitle-1"}
            jobTech={"home.educationField.educationTech-1"}
          />
          <ExperienceField
            jobDate={"home.educationField.educationDate-2"}
            jobDescription={"home.educationField.educationDescription-2"}
            jobTitle={"home.educationField.educationTitle-2"}
            jobTech={"home.educationField.educationTech-2"}
          />
          <ExperienceField
            jobDate={"home.educationField.educationDate-3"}
            jobDescription={"home.educationField.educationDescription-3"}
            jobTitle={"home.educationField.educationTitle-3"}
            jobTech={"home.educationField.educationTech-3"}
          />
          <ExperienceField
            jobDate={"home.educationField.educationDate-4"}
            jobDescription={"home.educationField.educationDescription-4"}
            jobTitle={"home.educationField.educationTitle-4"}
            jobTech={"home.educationField.educationTech-4"}
          />
        </div>
      </RightContainer>
    </SplitContainer>
  );
};

export default Home;
