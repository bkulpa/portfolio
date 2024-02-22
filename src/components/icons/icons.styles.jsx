import styled from "styled-components";

export const IconContainer = styled.div`
  color: rgba(148, 163, 184, 255);
  height: 24px;
  margin-right: 20px; // Rozłożenie elementów równomiernie na całej szerokości
  width: 24px;

  &:hover {
    color: rgb(223, 230, 238);
  }
`;

export const IconLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
