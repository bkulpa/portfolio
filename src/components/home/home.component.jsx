import { useTranslation } from "react-i18next";

import MenuSectionFinder from "../../functions/menu-section-finder";

import { AboutField } from "../experience-field/experience-field.styles";
import { LeftContainer, RightContainer, SplitContainer } from "./home.styles";
import StyledP from "../styled-tags/styled-p.styles";

import Header from "../header/header.component";
import ExperienceField from "../experience-field/experience-field.component";
import {
  CVLink,
  CVLinkContainer,
} from "../experience-field/experience-field.styles";
import ProjectField from "../project-field/project-field.component";

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
          <CVLinkContainer>
            <CVLink href="resume.pdf" target="_blank" rel="noopener noreferrer">
              {t("home.experienceField.resume")}
            </CVLink>
          </CVLinkContainer>
        </div>
        <div>
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
        <div style={{ marginTop: "144px" }}>
          <ProjectField
            projectAltText={"home.projectField.projectAltText-1"}
            projectDescription={"home.projectField.projectDescription-1"}
            projectImg={"projects-images/crwn-shop.png"}
            projectTitle={"home.projectField.projectTitle-1"}
            projectUrl={"https://animated-halva-e22a2e.netlify.app/"}
          />
        </div>
      </RightContainer>
    </SplitContainer>
  );
};

export default Home;
