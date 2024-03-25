import styled from "styled-components";

const mobileBreakpoint = "768px";

const StyledH2 = styled.h2`
  color: #d7dfee;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.75;
  margin-top: 12px;
  padding: 0;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 1rem;
  }
`;

export default StyledH2;
