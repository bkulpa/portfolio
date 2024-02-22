import { IconContainer, IconLink } from "./icons.styles";

const Icon = ({ iconLink, iconSVG: IconSVG }) => {
  return (
    <IconContainer>
      <IconLink href={iconLink} target="_blank" rel="noopener noreferrer">
        <IconSVG />
      </IconLink>
    </IconContainer>
  );
};

export default Icon;
