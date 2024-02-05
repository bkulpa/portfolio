import { useTranslation } from "react-i18next";

import StyledH3 from "../styled-tags/styled-h3.styles";
import {
  ExperienceFieldDescription,
  ExperienceDetailsContainer,
} from "./experience-field.styles";
import TechStack from "../tech-stack/tech-stack.component";

const ExperienceField = ({ jobDescription, jobTech, jobTitle }) => {
  const { t } = useTranslation();
  return (
    <ExperienceDetailsContainer>
      <div>
        <StyledH3>{t(jobTitle)}</StyledH3>
      </div>
      <ExperienceFieldDescription>
        {t(jobDescription)}
      </ExperienceFieldDescription>
      <TechStack technologies={t(jobTech)} />
    </ExperienceDetailsContainer>
  );
};

export default ExperienceField;
