import styled from "styled-components";

const mobileBreakpoint = "768px";

const StyledH3 = styled.h3`
  color: rgb(226, 232, 240);
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 14px;
  }
`;

export default StyledH3;
