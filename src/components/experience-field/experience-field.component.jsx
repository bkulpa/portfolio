import { useState } from "react";
import { useTranslation } from "react-i18next";

import StyledH3 from "../styled-tags/styled-h3.styles";
import {
  ExperienceFieldDescription,
  ExperienceDetailsContainer,
  ExperienceFieldMainBox,
} from "./experience-field.styles";
import TechStack from "../tech-stack/tech-stack.component";

const ExperienceField = ({ jobDate, jobDescription, jobTech, jobTitle }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const hoveredElementClassChange = `hovered__element ${
    isHovered ? "on-hover" : ""
  }`;

  return (
    <ExperienceFieldMainBox
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{t(jobDate)}</span>
      <ExperienceDetailsContainer>
        <StyledH3 className={hoveredElementClassChange}>{t(jobTitle)}</StyledH3>
        <ExperienceFieldDescription>
          {t(jobDescription)}
        </ExperienceFieldDescription>
        <TechStack technologies={t(jobTech)} />
      </ExperienceDetailsContainer>
    </ExperienceFieldMainBox>
  );
};

export default ExperienceField;
