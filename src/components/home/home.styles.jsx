import styled from "styled-components";

export const SplitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1088px;
  min-width: 1024px;
`;

export const LeftContainer = styled.div`
  flex: 0 0 528px;
  min-width: 329.5px;
  padding: 96px 0;
  position: sticky;
  top: 0;
`;

export const RightContainer = styled.div`
  flex: 1;
  max-width: 600px;
  min-width: 329.5px;
  overflow-y: auto;
  padding-bottom: 85px;
  position: relative;
  scrollbar-width: none;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`;
