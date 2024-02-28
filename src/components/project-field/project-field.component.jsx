import { useTranslation } from "react-i18next";

import {
  ProjectImage,
  ProjectFieldDescription,
  ProjectDetailsContainer,
  ProjectFieldMainBox,
  ProjectLink,
  ProjectArrowContainer,
  ProjectStyledH3,
} from "./project-field.styles";
import ArrowIcon from "../icons/icons/Arrow";

const ProjectField = ({
  projectAltText,
  projectImg,
  projectDescription,
  projectTitle,
  projectUrl,
}) => {
  const { t } = useTranslation();

  return (
    <ProjectFieldMainBox>
      <ProjectLink href={projectUrl} target="_blank">
        <ProjectImage alt={t(projectAltText)} src={projectImg} />
        <ProjectDetailsContainer>
          <div style={{ display: "flex" }}>
            <ProjectStyledH3>{t(projectTitle)}</ProjectStyledH3>
            <ProjectArrowContainer>
              <ArrowIcon />
            </ProjectArrowContainer>
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
