import styled from "styled-components";

const mobileBreakpoint = "768px";

export const SplitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1088px;
  min-width: 1024px;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    max-width: calc(100% - 20px);
    min-width: auto;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const LeftContainer = styled.div`
  flex: 0 0 528px;
  min-width: 329.5px;
  position: sticky;
  top: 0;
  height: 100vh;

  @media (max-width: ${mobileBreakpoint}) {
    position: static;
    height: auto;
    flex: 1 1 auto;
    min-width: auto;
    width: calc(100% - 20px);
    margin: 0 auto;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  max-width: 600px;
  min-width: 329.5px;
  overflow-y: auto;
  padding-bottom: 85px;
  position: relative;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${mobileBreakpoint}) {
    min-width: auto;
    flex: 1 1 auto;
    margin: 0 auto;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  bottom: 0;
  padding: 10px 0;
  position: absolute;
  margin-bottom: 50px;

  @media (max-width: ${mobileBreakpoint}) {
    position: static;
    margin-bottom: 0;
  }
`;
