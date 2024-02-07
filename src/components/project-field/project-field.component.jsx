import { useState } from "react";
import { useTranslation } from "react-i18next";

import StyledH3 from "../styled-tags/styled-h3.styles";
import {
  ProjectImage,
  ProjectFieldDescription,
  ProjectDetailsContainer,
  ProjectFieldMainBox,
  ProjectLink,
} from "./project-field.styles";

const ProjectField = ({
  projectAltText,
  projectImg,
  projectDescription,
  projectTitle,
  projectUrl,
}) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const hoveredElementClassChange = `hovered__element ${
    isHovered ? "on-hover" : ""
  }`;

  return (
    <ProjectFieldMainBox
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProjectLink href={projectUrl}>
        <ProjectImage alt={t(projectAltText)} src={projectImg} />
        <ProjectDetailsContainer>
          <div>
            <StyledH3 className={hoveredElementClassChange}>
              {t(projectTitle)}
            </StyledH3>
          </div>
          <ProjectFieldDescription>
            {t(projectDescription)}
          </ProjectFieldDescription>
        </ProjectDetailsContainer>
      </ProjectLink>
    </ProjectFieldMainBox>
  );
};

export default ProjectField;
