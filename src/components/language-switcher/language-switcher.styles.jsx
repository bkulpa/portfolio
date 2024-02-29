import styled from "styled-components";

const mobileBreakpoint = "768px";

export const LanguageArrowContainer = styled.div`
  color: rgb(226, 232, 240);
  font-weight: bold;
  width: 16px;
  height: 16px;
  margin-left: 4px;
  margin-top: 12px;
  transition: transform 0.3s ease;
`;

export const LanguageStyledH3 = styled.h3`
  color: rgb(226, 232, 240);
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 14px;
  }
`;

export const LanguageFieldMainBox = styled.div`
  display: flex;
  margin-top: 32px;

  &:hover {
    cursor: pointer;
  }

  &:hover ${LanguageArrowContainer} {
    color: rgb(94, 234, 212);
    transform: translate(5px, -5px);
  }

  &:hover ${LanguageStyledH3} {
    color: rgb(94, 234, 212);
  }

  @media (max-width: ${mobileBreakpoint}) {
    /* flex-direction: column;
    align-items: flex-start; */
    font-size: 10px;
    margin-bottom: 30px;
  }
`;
