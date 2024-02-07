import styled from "styled-components";

export const SplitContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  max-width: 1088px;
  min-width: 1024px;
`;

export const LeftContainer = styled.div`
  flex: 1;
  max-width: 528px;
  min-width: 329.5px;
  overflow: hidden;
  padding: 96px 0;
`;

export const RightContainer = styled.div`
  flex: 1;
  max-width: 600px;
  min-width: 329.5px;
  overflow-y: auto;
  padding: 85px 0;
  position: sticky;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
