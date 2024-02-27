import styled from "styled-components";

const mobileBreakpoint = "768px";
const StyledH1 = styled.h1`
  color: rgb(215, 223, 238);
  font-weight: 700;
  font-size: 3rem;
  line-height: 1;
  margin: 0;
  padding: 0;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 2rem;
  }
`;

export default StyledH1;
