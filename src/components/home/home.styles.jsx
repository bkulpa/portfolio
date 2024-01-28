import styled from "styled-components";

export const SplitContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  max-width: 1088px;
  min-width: 1024px;
  padding: 96px;
`;

export const LeftContainer = styled.div`
  flex: 1;
  max-width: 528px;
  min-width: 329.5px;
  overflow: hidden;
  padding: 0;
  background-color: yellow;
`;

export const RightContainer = styled.div`
  flex: 1;
  max-width: 528px;
  min-width: 329.5px;
  overflow-y: auto;
  padding: 0;
  background-color: red;
`;
