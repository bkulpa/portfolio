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
  return (
    <ExperienceFieldMainBox>
      <span>{t(jobDate)}</span>
      <ExperienceDetailsContainer>
        <div>
          <StyledH3>{t(jobTitle)}</StyledH3>
        </div>
        <ExperienceFieldDescription>
          {t(jobDescription)}
        </ExperienceFieldDescription>
        <TechStack technologies={t(jobTech)} />
      </ExperienceDetailsContainer>
    </ExperienceFieldMainBox>
  );
};

export default ExperienceField;
