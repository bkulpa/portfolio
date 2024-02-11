import { useTranslation } from "react-i18next";

import { AboutField } from "../experience-field/experience-field.styles";
import ExperienceField from "../experience-field/experience-field.component";
import Header from "../header/header.component";
import ProjectField from "../project-field/project-field.component";

import AboutSectionFinder from "../../functions/about-section-finder";
import EducationSectionFinder from "../../functions/education-section-finder";
import ExperienceSectionFinder from "../../functions/experience-section-finder";
import ProjectsSectionFinder from "../../functions/projects-section-finder";

import {
  CVLink,
  CVLinkContainer,
} from "../experience-field/experience-field.styles";
import { LeftContainer, RightContainer, SplitContainer } from "./home.styles";
import StyledP from "../styled-tags/styled-p.styles";

const Home = () => {
  const { t } = useTranslation();

  const findAboutSection = AboutSectionFinder();
  const findEducationSection = EducationSectionFinder();
  const findExperienceSection = ExperienceSectionFinder();
  const findProjectsSection = ProjectsSectionFinder();

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
            ref={findAboutSection}
            dangerouslySetInnerHTML={setInnerHTML("home.aboutMe.part-1")}
          />
          <StyledP
            // ref={findAboutSection}
            dangerouslySetInnerHTML={setInnerHTML("home.aboutMe.part-2")}
          />
          <StyledP
            // ref={findAboutSection}
            dangerouslySetInnerHTML={setInnerHTML("home.aboutMe.part-3")}
          />
        </AboutField>
        <div ref={findExperienceSection}>
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
        </div>
        <div ref={findEducationSection}>
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
        <CVLinkContainer>
          <CVLink href="resume.pdf" target="_blank" rel="noopener noreferrer">
            {t("home.experienceField.resume")}
          </CVLink>
        </CVLinkContainer>
        <div ref={findProjectsSection}>
          <ProjectField
            projectAltText={"home.projectField.projectAltText-1"}
            projectDescription={"home.projectField.projectDescription-1"}
            projectImg={"projects-images/crwn-shop.png"}
            projectTitle={"home.projectField.projectTitle-1"}
            projectUrl={"https://bkulpa-crwn-clothing-shop.netlify.app/"}
          />
          <ProjectField
            projectAltText={"home.projectField.projectAltText-2"}
            projectDescription={"home.projectField.projectDescription-2"}
            projectImg={"projects-images/monster-rolodex.png"}
            projectTitle={"home.projectField.projectTitle-2"}
            projectUrl={"https://bkulpa-monster-rolodex.netlify.app/"}
          />
          <ProjectField
            projectAltText={"home.projectField.projectAltText-3"}
            projectDescription={"home.projectField.projectDescription-3"}
            projectImg={"projects-images/fusely.png"}
            projectTitle={"home.projectField.projectTitle-3"}
            projectUrl={"https://bkulpa-fusely.netlify.app/"}
          />
          <ProjectField
            projectAltText={"home.projectField.projectAltText-4"}
            projectDescription={"home.projectField.projectDescription-4"}
            projectImg={"projects-images/cahee.png"}
            projectTitle={"home.projectField.projectTitle-4"}
            projectUrl={"https://bkulpa-cahee.netlify.app/"}
          />
        </div>
      </RightContainer>
    </SplitContainer>
  );
};

export default Home;
